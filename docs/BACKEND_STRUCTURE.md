# Backend Architecture & Database Structure

## 1. Architecture Overview

### System Architecture
- **Pattern**: Full-stack monolith with Next.js API Routes (REST)
- **Authentication**: Password-based admin auth with HTTP-only session cookie
- **Data Flow**: Browser -> Next.js SSR Pages / API Routes -> Prisma ORM -> PostgreSQL (Supabase)
- **Search**: PostgreSQL native full-text search (tsvector + GIN index)
- **Scraping**: External Python script connecting directly to PostgreSQL

### Data Flow Diagram

```
[Public User]
    |
    v
[Next.js SSR Pages] -----> [Prisma ORM] -----> [PostgreSQL / Supabase]
    |                                                   ^
    v                                                   |
[Next.js API Routes] -----> [Prisma ORM] ---------------+
    ^                                                   ^
    |                                                   |
[Admin User]                                            |
    |                                                   |
[Admin Pages] --> [Admin API Routes] --> [Prisma] ------+
                                                        ^
                                                        |
[GitHub Actions] --> [Python Scraper] --> [psycopg2] ---+
```

---

## 2. Database Schema

### Database: PostgreSQL 15.x (Supabase Managed)

- **ORM**: Prisma 7.4.0
- **Naming Convention**: camelCase for Prisma models, snake_case auto-mapped in PostgreSQL
- **Timestamps**: All tables have `createdAt` and `updatedAt`
- **IDs**: UUID v4 primary keys on all tables

### Entity Relationship Diagram

```
Post (1) ----< (M) PostCategory (M) >---- (1) Category
Post (1) ----< (M) Prompt
Post (1) ----< (M) PostImage
```

- A Post belongs to many Categories (via PostCategory join table)
- A Category has many Posts (via PostCategory join table)
- A Post has many Prompts (one-to-many)
- A Post has many PostImages (one-to-many)

---

## 3. Tables & Relationships

### Table: `posts`

**Purpose**: Stores all prompt posts (both scraped and manually created)

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PRIMARY KEY, DEFAULT gen_random_uuid() | Unique identifier |
| title | VARCHAR(500) | NOT NULL | Post title |
| slug | VARCHAR(600) | UNIQUE, NOT NULL | URL-friendly identifier |
| content | TEXT | NULL | HTML description/intro content |
| excerpt | VARCHAR(300) | NULL | Short summary for cards and SEO meta |
| featured_image | TEXT | NULL | URL to primary image |
| author | VARCHAR(255) | DEFAULT 'Admin' | Author display name |
| source_url | TEXT | NULL, UNIQUE | Original URL (null for manual posts) |
| is_scraped | BOOLEAN | DEFAULT false | True if imported via scraper |
| published_at | TIMESTAMP WITH TIME ZONE | DEFAULT NOW() | Publication date |
| created_at | TIMESTAMP WITH TIME ZONE | DEFAULT NOW() | Record creation |
| updated_at | TIMESTAMP WITH TIME ZONE | DEFAULT NOW() | Last modification |
| search_vector | TSVECTOR | NULL | Full-text search index column |

**Indexes**:
- `idx_posts_slug` UNIQUE ON (slug)
- `idx_posts_source_url` UNIQUE ON (source_url) WHERE source_url IS NOT NULL
- `idx_posts_published_at` ON (published_at DESC)
- `idx_posts_is_scraped` ON (is_scraped)
- `idx_posts_search_vector` GIN ON (search_vector)

**Constraints**:
- slug must be URL-safe (lowercase, hyphens, no special characters)
- source_url unique to prevent duplicate scraping
- featured_image should be a valid URL

---

### Table: `categories`

**Purpose**: Categorization taxonomy for posts

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PRIMARY KEY, DEFAULT gen_random_uuid() | Unique identifier |
| name | VARCHAR(255) | NOT NULL | Display name (e.g., "Boys Prompt") |
| slug | VARCHAR(300) | UNIQUE, NOT NULL | URL-friendly name (e.g., "boys-prompt") |
| description | TEXT | NULL | Category description for SEO |
| created_at | TIMESTAMP WITH TIME ZONE | DEFAULT NOW() | Record creation |
| updated_at | TIMESTAMP WITH TIME ZONE | DEFAULT NOW() | Last modification |

**Indexes**:
- `idx_categories_slug` UNIQUE ON (slug)
- `idx_categories_name` ON (name)

**Known Categories** (from source site):
- Latest Prompt, Boys Prompt, Girls Prompt, Lehenga Prompt, AI Art, Celebrity Prompt, Gemini Prompt, Midjourney Prompt, Movies or Series Prompt, Festival categories, and more

---

### Table: `post_categories` (Join Table)

**Purpose**: Many-to-many relationship between posts and categories

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| post_id | UUID | FOREIGN KEY -> posts(id) ON DELETE CASCADE, NOT NULL | Post reference |
| category_id | UUID | FOREIGN KEY -> categories(id) ON DELETE CASCADE, NOT NULL | Category reference |

**Indexes**:
- PRIMARY KEY (post_id, category_id)
- `idx_post_categories_category_id` ON (category_id)

---

### Table: `prompts`

**Purpose**: Individual prompt text blocks within a post (each post has multiple prompts)

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PRIMARY KEY, DEFAULT gen_random_uuid() | Unique identifier |
| post_id | UUID | FOREIGN KEY -> posts(id) ON DELETE CASCADE, NOT NULL | Parent post |
| prompt_text | TEXT | NOT NULL | The full prompt content |
| order_index | INTEGER | NOT NULL, DEFAULT 0 | Display order within post |
| created_at | TIMESTAMP WITH TIME ZONE | DEFAULT NOW() | Record creation |
| updated_at | TIMESTAMP WITH TIME ZONE | DEFAULT NOW() | Last modification |

**Indexes**:
- `idx_prompts_post_id` ON (post_id)
- `idx_prompts_post_order` ON (post_id, order_index)

**Constraints**:
- prompt_text must not be empty
- order_index >= 0

---

### Table: `post_images`

**Purpose**: Image gallery for each post

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PRIMARY KEY, DEFAULT gen_random_uuid() | Unique identifier |
| post_id | UUID | FOREIGN KEY -> posts(id) ON DELETE CASCADE, NOT NULL | Parent post |
| image_url | TEXT | NOT NULL | Image URL (external or Supabase) |
| alt_text | VARCHAR(500) | NULL | Image alt text for accessibility |
| order_index | INTEGER | NOT NULL, DEFAULT 0 | Display order |
| created_at | TIMESTAMP WITH TIME ZONE | DEFAULT NOW() | Record creation |

**Indexes**:
- `idx_post_images_post_id` ON (post_id)

---

### Table: `scrape_logs`

**Purpose**: Track scraping history and results

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PRIMARY KEY, DEFAULT gen_random_uuid() | Unique identifier |
| started_at | TIMESTAMP WITH TIME ZONE | NOT NULL, DEFAULT NOW() | Scrape start time |
| completed_at | TIMESTAMP WITH TIME ZONE | NULL | Scrape completion time |
| status | VARCHAR(20) | NOT NULL, DEFAULT 'running' | 'running', 'completed', 'failed' |
| pages_crawled | INTEGER | DEFAULT 0 | Number of listing pages crawled |
| posts_found | INTEGER | DEFAULT 0 | Total posts discovered |
| posts_added | INTEGER | DEFAULT 0 | New posts inserted |
| posts_skipped | INTEGER | DEFAULT 0 | Posts already in DB (skipped) |
| errors | TEXT | NULL | Error messages if any |
| created_at | TIMESTAMP WITH TIME ZONE | DEFAULT NOW() | Record creation |

**Indexes**:
- `idx_scrape_logs_created_at` ON (created_at DESC)

---

## 4. Prisma Schema

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

model Post {
  id            String   @id @default(uuid()) @db.Uuid
  title         String   @db.VarChar(500)
  slug          String   @unique @db.VarChar(600)
  content       String?  @db.Text
  excerpt       String?  @db.VarChar(300)
  featuredImage String?  @db.Text
  author        String   @default("Admin") @db.VarChar(255)
  sourceUrl     String?  @unique @db.Text
  isScraped     Boolean  @default(false)
  publishedAt   DateTime @default(now()) @db.Timestamptz
  createdAt     DateTime @default(now()) @db.Timestamptz
  updatedAt     DateTime @updatedAt @db.Timestamptz

  prompts    Prompt[]
  images     PostImage[]
  categories PostCategory[]

  @@index([publishedAt(sort: Desc)])
  @@index([isScraped])
  @@map("posts")
}

model Category {
  id          String   @id @default(uuid()) @db.Uuid
  name        String   @db.VarChar(255)
  slug        String   @unique @db.VarChar(300)
  description String?  @db.Text
  createdAt   DateTime @default(now()) @db.Timestamptz
  updatedAt   DateTime @updatedAt @db.Timestamptz

  posts PostCategory[]

  @@map("categories")
}

model PostCategory {
  postId     String @db.Uuid
  categoryId String @db.Uuid

  post     Post     @relation(fields: [postId], references: [id], onDelete: Cascade)
  category Category @relation(fields: [categoryId], references: [id], onDelete: Cascade)

  @@id([postId, categoryId])
  @@index([categoryId])
  @@map("post_categories")
}

model Prompt {
  id         String   @id @default(uuid()) @db.Uuid
  postId     String   @db.Uuid
  promptText String   @db.Text
  orderIndex Int      @default(0)
  createdAt  DateTime @default(now()) @db.Timestamptz
  updatedAt  DateTime @updatedAt @db.Timestamptz

  post Post @relation(fields: [postId], references: [id], onDelete: Cascade)

  @@index([postId])
  @@index([postId, orderIndex])
  @@map("prompts")
}

model PostImage {
  id         String   @id @default(uuid()) @db.Uuid
  postId     String   @db.Uuid
  imageUrl   String   @db.Text
  altText    String?  @db.VarChar(500)
  orderIndex Int      @default(0)
  createdAt  DateTime @default(now()) @db.Timestamptz

  post Post @relation(fields: [postId], references: [id], onDelete: Cascade)

  @@index([postId])
  @@map("post_images")
}

model ScrapeLog {
  id          String    @id @default(uuid()) @db.Uuid
  startedAt   DateTime  @default(now()) @db.Timestamptz
  completedAt DateTime? @db.Timestamptz
  status      String    @default("running") @db.VarChar(20)
  pagesCrawled Int      @default(0)
  postsFound   Int      @default(0)
  postsAdded   Int      @default(0)
  postsSkipped Int      @default(0)
  errors      String?   @db.Text
  createdAt   DateTime  @default(now()) @db.Timestamptz

  @@index([createdAt(sort: Desc)])
  @@map("scrape_logs")
}
```

---

## 5. API Endpoints

### Public Endpoints (No Authentication Required)

---

#### GET /api/posts

**Purpose**: List published posts with pagination and optional filtering

**Query Parameters**:
- `page`: Page number (default: 1, min: 1)
- `limit`: Items per page (default: 16, max: 50)
- `category`: Category slug to filter by (optional)
- `sort`: `newest` | `oldest` (default: newest)

**Response (200)**:

```json
{
  "posts": [
    {
      "id": "uuid",
      "title": "Shab E Miraj Ai Photo Editing Prompt",
      "slug": "shab-e-miraj-ai-photo-editing-prompt",
      "excerpt": "Ultra-realistic cinematic mosque...",
      "featuredImage": "https://...",
      "author": "Rana",
      "publishedAt": "2026-02-15T10:00:00Z",
      "categories": [
        { "name": "Latest Prompt", "slug": "latest-prompt" },
        { "name": "Boys Prompt", "slug": "boys-prompt" }
      ],
      "promptCount": 6
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 16,
    "total": 352,
    "totalPages": 22,
    "hasNext": true,
    "hasPrev": false
  }
}
```

**Errors**:
- 400: Invalid query parameters (page < 1, limit > 50)

**Caching**:
- ISR (Incremental Static Regeneration): revalidate every 60 seconds
- Cache key per page/category combination

---

#### GET /api/posts/[slug]

**Purpose**: Get a single post with all prompts, images, and categories

**URL Parameters**:
- `slug`: Post slug (string)

**Response (200)**:

```json
{
  "post": {
    "id": "uuid",
    "title": "Shab E Miraj Ai Photo Editing Prompt",
    "slug": "shab-e-miraj-ai-photo-editing-prompt",
    "content": "<p>Shab E Miraj Ai Photo Editing Prompt...</p>",
    "excerpt": "Ultra-realistic cinematic mosque...",
    "featuredImage": "https://...",
    "author": "Rana",
    "isScraped": true,
    "sourceUrl": "https://geminiaiprompt.in/shab-e-miraj-ai-photo-editing-prompt/",
    "publishedAt": "2026-02-15T10:00:00Z",
    "categories": [
      { "id": "uuid", "name": "Latest Prompt", "slug": "latest-prompt" }
    ],
    "prompts": [
      {
        "id": "uuid",
        "promptText": "IMPORTANT – FACE LOCK (ABSOLUTE IDENTITY)...",
        "orderIndex": 0
      },
      {
        "id": "uuid",
        "promptText": "STRICT FACE MATCH LOCK...",
        "orderIndex": 1
      }
    ],
    "images": [
      {
        "id": "uuid",
        "imageUrl": "https://...",
        "altText": "Shab E Miraj prompt example",
        "orderIndex": 0
      }
    ]
  },
  "relatedPosts": [
    {
      "id": "uuid",
      "title": "Iftar Time Photo Editing Prompt",
      "slug": "iftar-time-photo-editing-prompt",
      "featuredImage": "https://...",
      "categories": [{ "name": "Latest Prompt", "slug": "latest-prompt" }]
    }
  ]
}
```

**Errors**:
- 404: Post not found

**Related Posts Logic**: Fetch 4 posts from the same categories, excluding current post, ordered by publishedAt DESC.

---

#### GET /api/categories

**Purpose**: List all categories with post counts

**Response (200)**:

```json
{
  "categories": [
    {
      "id": "uuid",
      "name": "Latest Prompt",
      "slug": "latest-prompt",
      "description": "Find the new AI prompts trending right now.",
      "postCount": 45
    },
    {
      "id": "uuid",
      "name": "Boys Prompt",
      "slug": "boys-prompt",
      "description": null,
      "postCount": 38
    }
  ]
}
```

**Caching**: ISR revalidate every 300 seconds (5 minutes)

---

#### GET /api/search

**Purpose**: Full-text search across post titles and prompt texts

**Query Parameters**:
- `q`: Search query (string, min 2 characters)
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 16, max: 50)

**Response (200)**:

```json
{
  "query": "valentine",
  "results": [
    {
      "id": "uuid",
      "title": "ChatGPT Valentine's Day Photo Editing Prompts for Boys",
      "slug": "chatgpt-valentines-day-photo-editing-prompts-for-boys",
      "excerpt": "...",
      "featuredImage": "https://...",
      "categories": [{ "name": "Boys Prompt", "slug": "boys-prompt" }],
      "relevance": 0.89
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 16,
    "total": 5,
    "totalPages": 1
  }
}
```

**Errors**:
- 400: Query too short (< 2 characters) or missing

**Implementation**: PostgreSQL `to_tsvector('english', title || ' ' || prompt_texts) @@ plainto_tsquery('english', query)`, ranked by `ts_rank`.

---

### Admin Endpoints (Authentication Required)

All admin endpoints require a valid session cookie. Requests without valid auth return 401. The admin panel is a completely hidden section of the site -- there are NO public-facing links, buttons, or references to `/admin` anywhere. The site owner accesses it by directly typing `/admin` in the browser URL.

---

#### POST /api/admin/auth/login

**Purpose**: Authenticate admin and create session

**Request Body**:

```json
{
  "password": "admin-password-here"
}
```

**Validation**:
- password: required, string

**Response (200)**:

```json
{
  "success": true,
  "message": "Logged in successfully"
}
```

**Cookies Set**:
- `admin_session`: HTTP-only, Secure, SameSite=Strict, Max-Age=86400 (24 hours)

**Errors**:
- 401: Invalid password
- 429: Too many login attempts (rate limited: 5 per 15 minutes)

**Side Effects**:
- Compares password against bcrypt hash in ADMIN_PASSWORD_HASH env var
- Creates signed session cookie

---

#### POST /api/admin/auth/logout

**Purpose**: Clear admin session

**Response (200)**:

```json
{
  "success": true,
  "message": "Logged out"
}
```

**Side Effects**:
- Clears `admin_session` cookie

---

#### GET /api/admin/dashboard

**Purpose**: Get dashboard statistics

**Response (200)**:

```json
{
  "stats": {
    "totalPosts": 352,
    "totalCategories": 15,
    "scrapedPosts": 340,
    "manualPosts": 12,
    "lastScrape": {
      "date": "2026-02-16T02:00:00Z",
      "status": "completed",
      "postsAdded": 3
    }
  }
}
```

---

#### POST /api/admin/posts

**Purpose**: Create a new post

**Request Body**:

```json
{
  "title": "My New Prompt Post",
  "content": "<p>Introduction text...</p>",
  "excerpt": "Short summary here",
  "featuredImage": "https://...",
  "categoryIds": ["uuid1", "uuid2"],
  "prompts": [
    { "promptText": "Full prompt text here...", "orderIndex": 0 },
    { "promptText": "Second prompt variation...", "orderIndex": 1 }
  ],
  "images": [
    { "imageUrl": "https://...", "altText": "Example image", "orderIndex": 0 }
  ]
}
```

**Validation** (Zod):
- title: string, min 5, max 500 characters
- content: string, optional
- excerpt: string, optional, max 300 characters
- featuredImage: valid URL, optional
- categoryIds: array of UUIDs, min 1
- prompts: array of objects, min 1
  - promptText: string, min 10 characters
  - orderIndex: integer, min 0
- images: array of objects, optional

**Response (201)**:

```json
{
  "post": {
    "id": "uuid",
    "title": "My New Prompt Post",
    "slug": "my-new-prompt-post",
    "publishedAt": "2026-02-17T10:00:00Z"
  },
  "message": "Post created successfully"
}
```

**Errors**:
- 400: Validation failed (with field-level errors)
- 401: Not authenticated
- 409: Slug already exists (auto-resolves by appending number)

**Side Effects**:
- Generates slug from title
- Creates post, prompts, images, and category associations in a transaction
- Updates search_vector

---

#### PUT /api/admin/posts/[id]

**Purpose**: Update an existing post

**URL Parameters**:
- `id`: Post UUID

**Request Body**: Same as POST (all fields optional for partial update)

**Response (200)**:

```json
{
  "post": { "id": "uuid", "title": "Updated Title", "slug": "updated-title" },
  "message": "Post updated successfully"
}
```

**Errors**:
- 400: Validation failed
- 401: Not authenticated
- 404: Post not found

**Side Effects**:
- Updates post and related records in a transaction
- Regenerates search_vector
- If title changed, generates new slug (keeps old slug as redirect)

---

#### DELETE /api/admin/posts/[id]

**Purpose**: Delete a post and all related data

**Response (200)**:

```json
{
  "message": "Post deleted successfully"
}
```

**Errors**:
- 401: Not authenticated
- 404: Post not found

**Side Effects**:
- Cascade deletes: prompts, images, post_categories (via ON DELETE CASCADE)

---

#### POST /api/admin/scrape

**Purpose**: Trigger a manual scrape run

**Response (202)**:

```json
{
  "message": "Scrape started",
  "scrapeLogId": "uuid"
}
```

**Errors**:
- 401: Not authenticated
- 409: Scrape already running

**Side Effects**:
- Creates ScrapeLog record with status "running"
- Initiates scraping process (async)
- Updates ScrapeLog on completion

---

#### GET /api/admin/scrape/status

**Purpose**: Get status of the latest scrape

**Response (200)**:

```json
{
  "latestScrape": {
    "id": "uuid",
    "status": "completed",
    "startedAt": "2026-02-17T02:00:00Z",
    "completedAt": "2026-02-17T02:08:30Z",
    "pagesCrawled": 22,
    "postsFound": 352,
    "postsAdded": 5,
    "postsSkipped": 347,
    "errors": null
  },
  "history": [
    { "id": "uuid", "status": "completed", "startedAt": "...", "postsAdded": 5 },
    { "id": "uuid", "status": "completed", "startedAt": "...", "postsAdded": 3 }
  ]
}
```

---

## 6. Authentication & Authorization

### Admin Authentication Flow

**IMPORTANT**: The admin panel is completely hidden. There are NO login links, admin links, or any visible reference to admin on the public website. The site owner accesses the admin by manually typing `/admin` in their browser. No public user will ever see or know about this route.

```
1. Admin navigates to /admin (manually types URL -- no public link exists)
2. Middleware checks for admin_session cookie
3. IF cookie missing or invalid -> show login form at /admin (password input only)
4. IF cookie valid -> allow access to admin pages

Login Process:
1. Admin submits password via POST /api/admin/auth/login
2. Server compares bcrypt hash of input vs ADMIN_PASSWORD_HASH env var
3. IF match -> set HTTP-only session cookie (signed with ADMIN_SESSION_SECRET)
4. IF no match -> return 401

Session Cookie:
- Name: admin_session
- Value: signed token containing { role: 'admin', iat: timestamp }
- HTTP-only: true (not accessible via JavaScript)
- Secure: true (HTTPS only in production)
- SameSite: Strict
- Max-Age: 86400 (24 hours)
- Path: /admin
```

### Authorization Levels

#### Public Routes (No auth required)
- GET /api/posts
- GET /api/posts/[slug]
- GET /api/categories
- GET /api/search
- All public pages (/, /post/[slug], /category/[slug], /search, /favorites, /about, /contact, /privacy)

#### Admin Routes (Valid session cookie required)
- All /api/admin/* endpoints
- All /admin/* pages
- Protected via Next.js middleware

### Password Security
- **Hashing**: bcryptjs with 12 salt rounds
- **Storage**: Hash stored in ADMIN_PASSWORD_HASH environment variable
- **Never**: Password is never stored in code, logs, or database
- **Rate Limiting**: 5 failed login attempts per 15 minutes per IP

---

## 7. Data Validation Rules

### Post Validation (Zod Schema)

```typescript
import { z } from 'zod';

export const createPostSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters').max(500),
  content: z.string().optional(),
  excerpt: z.string().max(300).optional(),
  featuredImage: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  categoryIds: z.array(z.string().uuid()).min(1, 'Select at least one category'),
  prompts: z.array(z.object({
    promptText: z.string().min(10, 'Prompt must be at least 10 characters'),
    orderIndex: z.number().int().min(0),
  })).min(1, 'Add at least one prompt'),
  images: z.array(z.object({
    imageUrl: z.string().url(),
    altText: z.string().max(500).optional(),
    orderIndex: z.number().int().min(0),
  })).optional(),
});

export const searchQuerySchema = z.object({
  q: z.string().min(2, 'Search query must be at least 2 characters').max(200),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(16),
});
```

### Slug Generation

```typescript
import slugify from 'slugify';

function generateSlug(title: string): string {
  return slugify(title, {
    lower: true,
    strict: true,
    trim: true,
  });
}

// Handle duplicates: append -2, -3, etc.
async function getUniqueSlug(title: string, prisma: PrismaClient): Promise<string> {
  let slug = generateSlug(title);
  let counter = 1;
  while (await prisma.post.findUnique({ where: { slug } })) {
    counter++;
    slug = `${generateSlug(title)}-${counter}`;
  }
  return slug;
}
```

---

## 8. Error Handling

### Error Response Format

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Validation failed",
    "details": [
      {
        "field": "title",
        "message": "Title must be at least 5 characters"
      }
    ]
  }
}
```

### Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| VALIDATION_ERROR | 400 | Input validation failed |
| UNAUTHORIZED | 401 | Missing or invalid authentication |
| FORBIDDEN | 403 | Authenticated but insufficient permissions |
| NOT_FOUND | 404 | Resource not found |
| CONFLICT | 409 | Resource already exists (duplicate slug, running scrape) |
| RATE_LIMITED | 429 | Too many requests |
| SERVER_ERROR | 500 | Unexpected server error |

### Error Handler Utility

```typescript
export class ApiError extends Error {
  constructor(
    public statusCode: number,
    public code: string,
    message: string,
    public details?: Array<{ field: string; message: string }>
  ) {
    super(message);
  }
}

export function handleApiError(error: unknown) {
  if (error instanceof ApiError) {
    return Response.json(
      { error: { code: error.code, message: error.message, details: error.details } },
      { status: error.statusCode }
    );
  }
  console.error('Unexpected error:', error);
  return Response.json(
    { error: { code: 'SERVER_ERROR', message: 'An unexpected error occurred' } },
    { status: 500 }
  );
}
```

---

## 9. Full-Text Search Implementation

### Search Vector Setup

```sql
-- Add tsvector column (done via Prisma raw migration)
ALTER TABLE posts ADD COLUMN search_vector tsvector;

-- Create GIN index for fast search
CREATE INDEX idx_posts_search_vector ON posts USING GIN(search_vector);

-- Function to update search vector
CREATE OR REPLACE FUNCTION update_post_search_vector()
RETURNS TRIGGER AS $$
BEGIN
  NEW.search_vector :=
    setweight(to_tsvector('english', COALESCE(NEW.title, '')), 'A') ||
    setweight(to_tsvector('english', COALESCE(NEW.excerpt, '')), 'B');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update on insert/update
CREATE TRIGGER trg_posts_search_vector
  BEFORE INSERT OR UPDATE OF title, excerpt ON posts
  FOR EACH ROW
  EXECUTE FUNCTION update_post_search_vector();
```

### Search Query (Prisma Raw)

```typescript
const results = await prisma.$queryRaw`
  SELECT p.id, p.title, p.slug, p.excerpt, p.featured_image, p.published_at,
         ts_rank(p.search_vector, plainto_tsquery('english', ${query})) as relevance
  FROM posts p
  WHERE p.search_vector @@ plainto_tsquery('english', ${query})
  ORDER BY relevance DESC, p.published_at DESC
  LIMIT ${limit}
  OFFSET ${(page - 1) * limit}
`;
```

### Prompt Text Search (Extended)

For searching within prompt texts (not just post titles), also search the prompts table:

```typescript
const results = await prisma.$queryRaw`
  SELECT DISTINCT p.id, p.title, p.slug, p.excerpt, p.featured_image, p.published_at,
    GREATEST(
      ts_rank(p.search_vector, plainto_tsquery('english', ${query})),
      COALESCE(MAX(ts_rank(to_tsvector('english', pr.prompt_text), plainto_tsquery('english', ${query}))), 0)
    ) as relevance
  FROM posts p
  LEFT JOIN prompts pr ON pr.post_id = p.id
  WHERE p.search_vector @@ plainto_tsquery('english', ${query})
     OR to_tsvector('english', pr.prompt_text) @@ plainto_tsquery('english', ${query})
  GROUP BY p.id
  ORDER BY relevance DESC, p.published_at DESC
  LIMIT ${limit}
  OFFSET ${(page - 1) * limit}
`;
```

---

## 10. Rate Limiting

### Implementation (In-Memory for MVP)

For MVP, use a simple in-memory rate limiter. Upgrade to Redis-backed when scaling.

```typescript
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(ip: string, maxRequests: number, windowMs: number): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true; // allowed
  }

  if (record.count >= maxRequests) {
    return false; // rate limited
  }

  record.count++;
  return true; // allowed
}
```

### Limits by Endpoint

| Endpoint | Limit | Window |
|----------|-------|--------|
| POST /api/admin/auth/login | 5 requests | 15 minutes |
| POST /api/admin/scrape | 1 request | 10 minutes |
| GET /api/search | 30 requests | 1 minute |
| GET /api/posts | 60 requests | 1 minute |
| All admin endpoints | 30 requests | 1 minute |

---

## 11. Database Migrations

### Migration Strategy
- Use Prisma Migrate for all schema changes
- Never edit deployed migrations
- Always create new migration for changes
- Test locally before deploying

### Migration Process

```bash
# 1. Make changes to prisma/schema.prisma

# 2. Create and apply migration locally
npx prisma migrate dev --name describe_the_change

# 3. Test locally

# 4. Deploy migration to production (Supabase)
npx prisma migrate deploy
```

### Post-Migration: Search Vector Setup

After initial migration, run the raw SQL for search vector (see section 9) via Supabase SQL editor or a Prisma raw migration.

---

## 12. Backup & Recovery

### Backup Strategy (Supabase Managed)
- **Frequency**: Daily automated backups (Supabase free tier)
- **Retention**: 7 days (Supabase free tier)
- **Type**: Full PostgreSQL dump
- **Location**: Supabase infrastructure

### Manual Backup

```bash
# Export database via Supabase CLI
supabase db dump -f backup.sql

# Or use pg_dump directly
pg_dump $DATABASE_URL > backup_$(date +%Y%m%d).sql
```

### Recovery
1. Identify the backup to restore from Supabase dashboard
2. Restore using Supabase's point-in-time recovery (paid tiers) or manual SQL import
3. Verify data integrity
4. Test application functionality
