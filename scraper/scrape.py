"""
Scraper for geminiaiprompt.in
Uses the WordPress REST API to fetch all posts, categories, and prompts,
then inserts them into the Supabase PostgreSQL database.
"""

import os
import re
import sys
import json
import time
import html
import uuid
import logging
from datetime import datetime, timezone
from urllib.parse import urljoin

import requests
from bs4 import BeautifulSoup
from dotenv import load_dotenv
import psycopg2
from psycopg2.extras import execute_values
from slugify import slugify

load_dotenv()

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%H:%M:%S",
)
log = logging.getLogger("scraper")

DATABASE_URL = os.getenv("DATABASE_URL")
SOURCE_URL = os.getenv("SOURCE_URL", "https://geminiaiprompt.in")
WP_API = f"{SOURCE_URL}/wp-json/wp/v2"

session = requests.Session()
session.headers.update({
    "User-Agent": "PromptBay-Scraper/1.0 (educational project)",
    "Accept": "application/json",
})

RATE_DELAY = 0.3  # seconds between API calls


# ---------------------------------------------------------------------------
# WordPress API helpers
# ---------------------------------------------------------------------------

def wp_get(endpoint: str, params: dict | None = None) -> tuple[list | dict, dict]:
    """Make a GET request to the WP REST API, return (json_body, headers)."""
    url = f"{WP_API}/{endpoint}"
    resp = session.get(url, params=params, timeout=30)
    resp.raise_for_status()
    time.sleep(RATE_DELAY)
    return resp.json(), dict(resp.headers)


def fetch_all_posts() -> list[dict]:
    """Paginate through all posts."""
    all_posts = []
    page = 1
    while True:
        log.info(f"Fetching posts page {page}...")
        data, headers = wp_get("posts", {"per_page": 100, "page": page})
        if not data:
            break
        all_posts.extend(data)
        total_pages = int(headers.get("X-WP-TotalPages", 1))
        log.info(f"  Got {len(data)} posts (page {page}/{total_pages})")
        if page >= total_pages:
            break
        page += 1
    return all_posts


def fetch_all_categories() -> list[dict]:
    """Fetch all WP categories."""
    log.info("Fetching categories...")
    data, _ = wp_get("categories", {"per_page": 100})
    log.info(f"  Got {len(data)} categories")
    return data


def fetch_media_url(media_id: int) -> str | None:
    """Fetch the source URL for a media item."""
    if not media_id:
        return None
    try:
        data, _ = wp_get(f"media/{media_id}")
        return data.get("source_url")
    except Exception as e:
        log.warning(f"  Failed to fetch media {media_id}: {e}")
        return None


# ---------------------------------------------------------------------------
# Content parsing
# ---------------------------------------------------------------------------

def decode_html(text: str) -> str:
    """Decode HTML entities and clean up whitespace."""
    text = html.unescape(text)
    text = re.sub(r"<[^>]+>", "", text)  # strip remaining tags
    return text.strip()


def extract_prompts_and_images(content_html: str) -> list[dict]:
    """
    Parse the post content HTML to extract prompt text and images.
    Tries multiple strategies:
    1. .my-unique-card blocks with .prompt-text-source
    2. Standalone .prompt-text-source divs (no card wrapper)
    3. <pre> or <code> blocks as fallback
    """
    soup = BeautifulSoup(content_html, "html.parser")
    results = []

    # Strategy 1: .my-unique-card blocks
    cards = soup.select("div.my-unique-card")
    if cards:
        for i, card in enumerate(cards):
            prompt_div = card.select_one("div.prompt-text-source, .my-unique-text")
            if not prompt_div:
                continue

            prompt_text = prompt_div.get_text(separator="\n").strip()
            if not prompt_text or len(prompt_text) < 10:
                continue

            img_el = card.select_one("img.prompt-img-source, img.my-unique-img")
            image_url = None
            if img_el:
                image_url = img_el.get("data-src") or img_el.get("src")
                if image_url and image_url.startswith("data:"):
                    image_url = None

            results.append({
                "promptText": prompt_text,
                "imageUrl": image_url,
                "orderIndex": i,
            })
        if results:
            return results

    # Strategy 2: standalone .prompt-text-source divs
    prompt_divs = soup.select("div.prompt-text-source, .my-unique-text")
    if prompt_divs:
        for i, div in enumerate(prompt_divs):
            prompt_text = div.get_text(separator="\n").strip()
            if not prompt_text or len(prompt_text) < 10:
                continue
            results.append({
                "promptText": prompt_text,
                "imageUrl": None,
                "orderIndex": i,
            })
        if results:
            return results

    # Strategy 3: <pre> or <code> blocks
    code_blocks = soup.select("pre, code")
    for i, block in enumerate(code_blocks):
        text = block.get_text(separator="\n").strip()
        if text and len(text) >= 30:
            results.append({
                "promptText": text,
                "imageUrl": None,
                "orderIndex": i,
            })

    return results


def extract_excerpt(post: dict) -> str | None:
    """Get a clean excerpt from the WP post object."""
    raw = post.get("excerpt", {}).get("rendered", "")
    if not raw:
        return None
    text = decode_html(raw)
    if len(text) > 300:
        text = text[:297] + "..."
    return text or None


# ---------------------------------------------------------------------------
# Database operations
# ---------------------------------------------------------------------------

def get_db_connection():
    """Create a psycopg2 connection."""
    return psycopg2.connect(DATABASE_URL)


def ensure_categories(conn, wp_categories: list[dict]) -> dict[int, str]:
    """
    Upsert categories into the database.
    Returns a mapping of WP category ID -> our DB category UUID.
    """
    wp_to_db = {}
    cur = conn.cursor()

    for cat in wp_categories:
        if cat["slug"] == "uncategorized":
            continue

        cat_slug = cat["slug"]
        cat_name = decode_html(cat["name"])
        cat_desc = cat.get("description") or None

        cur.execute(
            'SELECT id FROM categories WHERE slug = %s',
            (cat_slug,),
        )
        row = cur.fetchone()

        if row:
            db_id = row[0]
        else:
            db_id = str(uuid.uuid4())
            cur.execute(
                '''INSERT INTO categories (id, name, slug, description, "createdAt", "updatedAt")
                   VALUES (%s, %s, %s, %s, NOW(), NOW())''',
                (db_id, cat_name, cat_slug, cat_desc),
            )
            log.info(f"  + Category: {cat_name}")

        wp_to_db[cat["id"]] = db_id

    conn.commit()
    cur.close()
    return wp_to_db


def post_exists(cur, slug: str) -> bool:
    """Check if a post with this slug already exists."""
    cur.execute("SELECT 1 FROM posts WHERE slug = %s", (slug,))
    return cur.fetchone() is not None


def insert_post(conn, post_data: dict, category_db_ids: list[str], prompts: list[dict]):
    """Insert a single post with its prompts, images, and category associations."""
    cur = conn.cursor()

    post_id = str(uuid.uuid4())

    cur.execute(
        '''INSERT INTO posts
           (id, title, slug, content, excerpt, "featuredImage", author, "isScraped",
            "sourceUrl", "publishedAt", "createdAt", "updatedAt")
           VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, NOW(), NOW())''',
        (
            post_id,
            post_data["title"],
            post_data["slug"],
            post_data.get("content"),
            post_data.get("excerpt"),
            post_data.get("featuredImage"),
            post_data.get("author", "Rana"),
            True,  # isScraped
            post_data.get("sourceUrl"),
            post_data.get("publishedAt"),
        ),
    )

    # Insert prompts
    if prompts:
        prompt_rows = []
        for p in prompts:
            prompt_rows.append((
                str(uuid.uuid4()),
                post_id,
                p["promptText"],
                p["orderIndex"],
            ))
        execute_values(
            cur,
            '''INSERT INTO prompts (id, "postId", "promptText", "orderIndex", "createdAt", "updatedAt")
               VALUES %s''',
            prompt_rows,
            template="(%s, %s, %s, %s, NOW(), NOW())",
        )

    # Insert post images (from prompt cards)
    images = [p for p in prompts if p.get("imageUrl")]
    if images:
        image_rows = []
        for img in images:
            image_rows.append((
                str(uuid.uuid4()),
                post_id,
                img["imageUrl"],
                None,  # altText
                img["orderIndex"],
            ))
        execute_values(
            cur,
            '''INSERT INTO post_images (id, "postId", "imageUrl", "altText", "orderIndex")
               VALUES %s''',
            image_rows,
        )

    # Insert category associations
    if category_db_ids:
        cat_rows = [(post_id, cat_id) for cat_id in category_db_ids]
        execute_values(
            cur,
            '''INSERT INTO post_categories ("postId", "categoryId") VALUES %s
               ON CONFLICT DO NOTHING''',
            cat_rows,
        )

    conn.commit()
    cur.close()
    return post_id


def log_scrape(conn, status: str, posts_found: int, posts_added: int, posts_skipped: int, errors: int):
    """Write a record to the scrape_logs table."""
    cur = conn.cursor()
    cur.execute(
        '''INSERT INTO scrape_logs
           (id, "startedAt", "completedAt", status, "pagesCrawled", "postsFound",
            "postsAdded", "postsSkipped", errors, "createdAt")
           VALUES (%s, NOW(), NOW(), %s, 0, %s, %s, %s, %s, NOW())''',
        (str(uuid.uuid4()), status, posts_found, posts_added, posts_skipped, errors),
    )
    conn.commit()
    cur.close()


# ---------------------------------------------------------------------------
# Main scraping flow
# ---------------------------------------------------------------------------

def main():
    log.info("=" * 60)
    log.info("Prompt Bay Scraper - geminiaiprompt.in")
    log.info("=" * 60)

    if not DATABASE_URL:
        log.error("DATABASE_URL not set in .env")
        sys.exit(1)

    # 1. Fetch all data from the WordPress API
    wp_categories = fetch_all_categories()
    wp_posts = fetch_all_posts()
    log.info(f"\nTotal posts found on source site: {len(wp_posts)}")

    # 2. Connect to database
    conn = get_db_connection()
    log.info("Connected to database")

    # 3. Upsert categories
    log.info("\n--- Syncing categories ---")
    wp_cat_map = ensure_categories(conn, wp_categories)
    log.info(f"Category mapping: {len(wp_cat_map)} categories")

    # 4. Fetch featured images (batch the media IDs to minimize API calls)
    media_cache: dict[int, str | None] = {}
    media_ids = set(p.get("featured_media", 0) for p in wp_posts if p.get("featured_media"))
    log.info(f"\n--- Fetching {len(media_ids)} featured images ---")
    for i, mid in enumerate(media_ids):
        if mid not in media_cache:
            media_cache[mid] = fetch_media_url(mid)
            if (i + 1) % 20 == 0:
                log.info(f"  Fetched {i + 1}/{len(media_ids)} images...")

    # 5. Process each post
    log.info(f"\n--- Processing {len(wp_posts)} posts ---")
    cur = conn.cursor()
    added = 0
    skipped = 0
    errors = 0
    error_messages = []

    for i, wp_post in enumerate(wp_posts):
        title = decode_html(wp_post["title"]["rendered"])
        slug = wp_post["slug"]

        if post_exists(cur, slug):
            skipped += 1
            continue

        try:
            content_html = wp_post.get("content", {}).get("rendered", "")
            prompts = extract_prompts_and_images(content_html)

            # Map WP category IDs to our DB IDs
            wp_cat_ids = wp_post.get("categories", [])
            db_cat_ids = [wp_cat_map[cid] for cid in wp_cat_ids if cid in wp_cat_map]

            featured_media_id = wp_post.get("featured_media", 0)
            featured_image = media_cache.get(featured_media_id)

            published_at = wp_post.get("date_gmt")
            if published_at:
                published_at = datetime.fromisoformat(published_at).replace(tzinfo=timezone.utc)

            source_url = wp_post.get("link")

            post_data = {
                "title": title,
                "slug": slug,
                "content": content_html if content_html else None,
                "excerpt": extract_excerpt(wp_post),
                "featuredImage": featured_image,
                "author": "Rana",
                "sourceUrl": source_url,
                "publishedAt": published_at,
            }

            insert_post(conn, post_data, db_cat_ids, prompts)
            added += 1

            prompt_count = len(prompts)
            cat_count = len(db_cat_ids)
            log.info(f"  [{added}] {title} ({prompt_count} prompts, {cat_count} cats)")

        except Exception as e:
            errors += 1
            msg = f"Error on '{title}': {e}"
            error_messages.append(msg)
            log.error(f"  ERROR: {msg}")
            conn.rollback()

        if (i + 1) % 50 == 0:
            log.info(f"  Progress: {i + 1}/{len(wp_posts)} processed")

    cur.close()

    # 6. Update search vectors for newly added posts
    if added > 0:
        log.info("\n--- Updating search vectors ---")
        cur = conn.cursor()
        cur.execute("""
            UPDATE posts SET search_vector =
                setweight(to_tsvector('english', COALESCE(title, '')), 'A') ||
                setweight(to_tsvector('english', COALESCE(excerpt, '')), 'B')
            WHERE search_vector IS NULL
        """)
        conn.commit()
        cur.close()
        log.info("  Search vectors updated")

    # 7. Log the scrape
    status = "completed" if errors == 0 else "completed_with_errors"
    log_scrape(conn, status, len(wp_posts), added, skipped, errors)

    conn.close()

    # 8. Summary
    log.info("\n" + "=" * 60)
    log.info("SCRAPE COMPLETE")
    log.info(f"  Added:   {added}")
    log.info(f"  Skipped: {skipped} (already exist)")
    log.info(f"  Errors:  {errors}")
    log.info("=" * 60)


if __name__ == "__main__":
    main()
