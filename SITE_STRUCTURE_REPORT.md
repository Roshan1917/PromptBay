# GeminiAiPrompt.in - Web Scraper Structure Report

**Report Date:** February 21, 2026  
**Site:** https://geminiaiprompt.in/

---

## 1. URL Patterns

| Content Type | URL Pattern | Examples |
|-------------|-------------|----------|
| **Homepage** | `https://geminiaiprompt.in/` | Main landing page |
| **Posts** | `https://geminiaiprompt.in/{post-slug}/` | `/google-gemini-girlfriend-photo-editing-prompts/`, `/ramadan-mubarak-ai-photo-prompts/` |
| **Categories** | `https://geminiaiprompt.in/category/{category-slug}/` | `/category/latest-prompt/`, `/category/boys-prompt/`, `/category/girls-prompt/` |
| **Category Pagination** | `https://geminiaiprompt.in/category/{category-slug}/page/{n}/` | `/category/latest-prompt/page/2/` |
| **Homepage Pagination** | `https://geminiaiprompt.in/page/{n}/` | `/page/2/`, `/page/3/` |
| **Author** | `https://geminiaiprompt.in/author/{author-slug}/` | `/author/sohelranatop1gmail-com/` |

---

## 2. Navigation Links / Menu

**Navbar location:** `nav#primary-site-navigation-desktop` (desktop) or within `#ast-mobile-header` (mobile)

**Menu structure:** `ul#ast-hf-menu-1.main-header-menu`

| Link | URL |
|------|-----|
| Home | `https://geminiaiprompt.in/` |
| Latest Prompt | `https://geminiaiprompt.in/category/latest-prompt/` |
| Boys Prompt | `https://geminiaiprompt.in/category/boys-prompt/` |
| Girls Prompt | `https://geminiaiprompt.in/category/girls-prompt/` |

**Menu item CSS classes:**
- Home: `menu-item-type-post_type menu-item-object-page menu-item-home`
- Categories: `menu-item-type-taxonomy menu-item-object-category`

---

## 3. Homepage Structure

### 3.1 Post Listing (Latest Prompts Section)

- **Container:** Elementor section with `elementor-element-bda386d`
- **Post cards:** `article.elementor-post.elementor-grid-item`
- **Grid:** 4 columns (desktop), responsive on tablet/mobile
- **Posts visible on first page:** 16 posts
- **Total pages:** 22 (from pagination `data-max-page="22"`)

### 3.2 Post Card Structure (Homepage)

```html
<article class="elementor-post elementor-grid-item post-{id} post type-post ... hentry category-{slug}" role="listitem">
  <a class="elementor-post__thumbnail__link" href="{post-url}">
    <div class="elementor-post__thumbnail">
      <img class="attachment-full size-full wp-image-{id}" 
           data-src="{image-url}" 
           alt="{post-title}" />
    </div>
  </a>
  <div class="elementor-post__text">
    <h1 class="elementor-post__title">
      <a href="{post-url}">{post-title}</a>
    </h1>
  </div>
</article>
```

**Key selectors for scraping post list:**
- Posts: `article.elementor-post` or `article.elementor-grid-item`
- Post URL: `a.elementor-post__thumbnail__link` or `h1.elementor-post__title a` → `href`
- Post title: `h1.elementor-post__title a` → text
- Thumbnail: `img` inside `.elementor-post__thumbnail` → use `data-src` (lazy load) or `src`
- Category: `article.hentry` has classes like `category-{slug}` (e.g., `category-couple-prompt`)

### 3.3 Pagination (Homepage)

- **Container:** `nav.elementor-pagination`
- **Next page link:** `a.page-numbers.next` or `a.page-numbers[href*="page/"]`
- **Page numbers:** `a.page-numbers` (not `.current`, not `.prev`, not `.next`, not `.dots`)
- **Load more anchor:** `div.e-load-more-anchor` with `data-next-page`, `data-page`, `data-max-page`
- **URL pattern:** `https://geminiaiprompt.in/page/{n}/`

---

## 4. Single Post Page Structure

### 4.1 Post Title

- **Element:** `h1.entry-title`
- **Location:** Inside `header.entry-header`
- **Attribute:** `itemprop="headline"`
- **Selector:** `article .entry-title` or `h1.entry-title`

### 4.2 Featured Image

- **Note:** Single posts use `ast-no-date-box` layout — no dedicated featured image block above content.
- **Alternatives:**
  1. **WP REST API:** `featured_media` ID → `https://geminiaiprompt.in/wp-json/wp/v2/media/{id}`
  2. **Meta tag:** `meta[property="og:image"]` for social share image
  3. **First prompt image:** First `img.prompt-img-source` or `img.my-unique-img` in `.my-unique-card`

### 4.3 Prompt Blocks (Main Content)

**Container:** `div.my-unique-prompt-container`  
Each prompt block is inside: `div.my-unique-card`

**Structure per prompt card:**
```html
<div class="my-unique-prompt-container">
  <div class="my-unique-card">
    <div class="my-unique-badge">Prompt</div>
    <div class="my-unique-img-wrapper">
      <img class="my-unique-img prompt-img-source" 
           data-src="{image-url}" 
           alt="Prompt Image" />
    </div>
    <button class="toggle-btn">View Prompt</button>
    <div class="my-unique-hidden-content content-area">
      <div class="my-unique-text prompt-text-source">
        {THE ACTUAL PROMPT TEXT}
      </div>
      <div class="my-unique-actions">
        <button class="btn-copy">Copy</button>
        <button class="btn-wa">WhatsApp</button>
        <button class="btn-tg">Telegram</button>
      </div>
      ...
    </div>
  </div>
</div>
```

**Key selectors for prompts:**
- **Prompt text:** `div.prompt-text-source` (or `div.my-unique-text.prompt-text-source`) — contains the actual AI prompt
- **Prompt images:** `img.prompt-img-source` or `img.my-unique-img` — use `data-src` for actual URL (lazy-loaded)
- **Copy button:** `button.btn-copy` — indicates presence of copyable prompt
- **Cards:** `div.my-unique-card` — one card per prompt block

**Note:** Some cards may have `content-area` with `display:none` initially (toggle to "View Prompt"). For scraping, parse the HTML directly — the text is present in `prompt-text-source`.

### 4.4 Category Tags

- **On single post:** Categories are NOT displayed as visible links (`.ast-related-cat-style--none`).
- **Inferred from HTML:** Article has class `category-{slug}` (e.g., `category-couple-prompt`, `category-birthday-prompt`).
- **Selector:** `article.post` → extract classes matching `category-*`
- **Category URLs:** `https://geminiaiprompt.in/category/{slug}/` (slug from class, e.g., `category-couple-prompt` → slug `couple-prompt`)

### 4.5 Images Within Post

- **Prompt images:** Inside `div.my-unique-img-wrapper` → `img.prompt-img-source` with `data-src` attribute
- **Image base URL:** `https://geminiaiprompt.in/wp-content/uploads/`
- **Path pattern:** `/wp-content/uploads/YYYY/MM/{filename}.webp`

### 4.6 Post Date & Author

- **Container:** `div.entry-meta` inside `header.entry-header`
- **Author:** `span.posted-by a` or `span.author-name` — text and `href` to author page
- **Date:** `span.posted-on span.published` — text like "February 20, 2026"
- **Author URL:** `a[rel="author"]` → `href`
- **Selectors:**
  - Author: `.entry-meta .posted-by .author-name`
  - Date: `.entry-meta .posted-on .published`

### 4.7 Related Posts

- **Section:** After `entry-content`, before comments
- **Container:** Articles with `article.ast-related-post`
- **Structure:** Similar to category page cards — `post-thumb-img-content`, link, title

---

## 5. Category Page Structure

### 5.1 Page Layout

- **Archive container:** `section.ast-archive-description` with `h1.page-title.ast-archive-title` (category name)
- **Content area:** `main#main.site-main`
- **Grid:** `div.ast-row` with `ast-blog-layout-4` (4-column grid)

### 5.2 Post Cards (Category Archive)

```html
<article class="post-{id} post type-post ... hentry category-{slug} ast-article-post ast-archive-post" id="post-{id}">
  <div class="ast-post-format- blog-layout-4 ast-article-inner">
    <div class="post-content ast-grid-common-col">
      <div class="ast-blog-featured-section post-thumb">
        <div class="post-thumb-img-content post-thumb">
          <a href="{post-url}" aria-label="Read: {title}">
            <img data-src="{image-url}" ... />
          </a>
        </div>
      </div>
      <header class="entry-header">
        <h2 class="entry-title">
          <a href="{post-url}">{title}</a>
        </h2>
      </header>
    </div>
  </div>
</article>
```

**Key selectors:**
- Posts: `article.ast-article-post` or `article.ast-archive-post`
- Post URL: `a[href*="geminiaiprompt.in/"]` inside `.post-thumb-img-content` or `h2.entry-title a`
- Title: `h2.entry-title a`
- Thumbnail: `img` with `data-src`
- Categories: `article.hentry` classes `category-*`

### 5.3 Pagination (Category)

- **Container:** `div.ast-pagination` > `nav.navigation.pagination`
- **Links:** `div.nav-links` > `a.page-numbers` (excluding `.current`)
- **Next link:** `a.page-numbers.next`
- **URL pattern:** `https://geminiaiprompt.in/category/{slug}/page/{n}/`
- **Posts per page:** ~10 (Latest Prompt shows 10 articles, 2 pages for 19 posts)

---

## 6. WordPress-Specific Patterns

### 6.1 wp-content Paths

- **Uploads:** `https://geminiaiprompt.in/wp-content/uploads/YYYY/MM/{filename}`
- **LiteSpeed CSS:** `https://geminiaiprompt.in/wp-content/litespeed/css/{hash}.css`
- **LiteSpeed avatars:** `https://geminiaiprompt.in/wp-content/litespeed/avatar/{hash}.jpg`

### 6.2 WP REST API (Recommended for Scraping)

**Base URL:** `https://geminiaiprompt.in/wp-json/`

| Endpoint | Description |
|----------|-------------|
| `GET /wp/v2/posts` | List posts (supports `per_page`, `page`, `categories`, `search`) |
| `GET /wp/v2/posts/{id}` | Single post with full content |
| `GET /wp/v2/categories` | List categories |
| `GET /wp/v2/media/{id}` | Media (featured image) by ID |
| `GET /wp/v2/posts?slug={slug}` | Post by slug |

**Example:** `https://geminiaiprompt.in/wp-json/wp/v2/posts?per_page=10&page=1`

**Post object includes:**
- `id`, `slug`, `title.rendered`, `content.rendered`, `excerpt.rendered`
- `date`, `modified`, `author`
- `featured_media` (media ID)
- `categories` (category IDs)
- `link` (post URL)

**Note:** `content.rendered` contains full HTML including all prompt blocks (`.my-unique-card`, `.prompt-text-source`). You can parse this for prompt text, or use the raw content and extract with regex/BeautifulSoup.

### 6.3 Alternate API Link

- **In `<head>`:** `<link rel="alternate" href="https://geminiaiprompt.in/wp-json/wp/v2/posts/{id}" type="application/json" />`

---

## 7. Lazy Loading

- **Images use:** `data-src` and `data-srcset` for lazy loading
- **Fallback:** `src` may be a placeholder SVG (base64)
- **For scraping:** Prefer `data-src` over `src` when extracting image URLs. If `data-src` is empty, check `src`.

---

## 8. Scraper Implementation Recommendations

### Option A: HTML Scraping (BeautifulSoup / Playwright)

1. **Discover URLs:**
   - Start at homepage, get all `a.elementor-post__thumbnail__link[href]`
   - Or scrape category pages: `/category/latest-prompt/`, `/category/boys-prompt/`, `/category/girls-prompt/`
   - Follow pagination: `nav.elementor-pagination a.page-numbers[href]`

2. **Single post extraction:**
   - Title: `h1.entry-title`
   - Author: `.entry-meta .author-name`, date: `.entry-meta .published`
   - Prompts: For each `div.my-unique-card`, get `div.prompt-text-source` text and `img.prompt-img-source` → `data-src`
   - Categories: From `article` class names `category-*`

3. **Handle lazy load:** Use `data-src` for images; or run in headless browser (Playwright) to trigger load.

### Option B: WP REST API (Preferred)

1. **Fetch posts:** `GET /wp-json/wp/v2/posts?per_page=100&page={n}`
2. **Parse `content.rendered`:** Extract `.prompt-text-source` or `.my-unique-text` text, `img` src/data-src
3. **Categories:** `GET /wp/v2/categories` to map IDs to slugs, or use `_embedded['wp:term']` if requested
4. **Featured image:** `GET /wp/v2/media/{featured_media}` for image URL

### Option C: Hybrid

- Use API for post listing and metadata
- Fall back to HTML scraping only when API doesn’t return needed data (e.g., custom prompt layout)

---

## 9. Summary Table

| Element | Selector / Location |
|---------|---------------------|
| **Post list (home)** | `article.elementor-post` |
| **Post list (category)** | `article.ast-article-post` |
| **Post URL** | `a.elementor-post__thumbnail__link` or `h2.entry-title a` |
| **Post title (single)** | `h1.entry-title` |
| **Prompt text** | `div.prompt-text-source` or `div.my-unique-text.prompt-text-source` |
| **Prompt images** | `img.prompt-img-source` (`data-src`) |
| **Copy button** | `button.btn-copy` |
| **Author** | `.entry-meta .author-name` |
| **Date** | `.entry-meta .posted-on .published` |
| **Categories** | `article` classes `category-{slug}` |
| **Pagination** | `nav.elementor-pagination` or `nav.navigation.pagination` |
| **wp-json** | `https://geminiaiprompt.in/wp-json/wp/v2/posts` |
