# Implementation Plan & Build Sequence

## Overview

**Project**: AI Prompt Hub
**MVP Target**: 4-5 weeks from start
**Team**: Solo developer
**Approach**: Iterative development -- build, test, deploy incrementally

### Build Philosophy
- Code follows documentation (PRD, APP_FLOW, TECH_STACK, FRONTEND_GUIDELINES, BACKEND_STRUCTURE)
- Test after every step (manual for MVP)
- Deploy early, deploy often
- Get the scraper working early to populate data for UI development

---

## Phase 1: Project Setup & Foundation

**Duration**: Day 1-2
**Goal**: Working local development environment with database connected

---

### Step 1.1: Initialize Next.js Project

**Duration**: 30 minutes
**Goal**: Scaffold the project with all configuration files

**Tasks**:

1. Create Next.js project with TypeScript and Tailwind CSS
   ```bash
   npx create-next-app@16.1.6 frontend --typescript --tailwind --app --src-dir
   ```

2. Navigate into the project
   ```bash
   cd frontend
   ```

3. Install production dependencies (exact versions from TECH_STACK.md)
   ```bash
   npm install @prisma/client@7.4.0 zod@4.3.6 react-hook-form@7.54.2 @hookform/resolvers@5.0.1 lucide-react@0.564.0 sonner@2.0.2 bcryptjs@3.0.2 slugify@1.6.6
   ```

4. Install dev dependencies
   ```bash
   npm install -D prisma@7.4.0 @types/bcryptjs@3.0.0 prettier@3.5.3 prettier-plugin-tailwindcss@0.6.11 tsx@4.19.3
   ```

5. Configure Prettier (create `.prettierrc`)
   ```json
   {
     "semi": true,
     "singleQuote": true,
     "trailingComma": "all",
     "printWidth": 100,
     "tabWidth": 2,
     "plugins": ["prettier-plugin-tailwindcss"]
   }
   ```

6. Verify project runs
   ```bash
   npm run dev
   ```

**Success Criteria**:
- [ ] Project runs locally at http://localhost:3000
- [ ] No linting errors
- [ ] TypeScript compiles without errors

**Reference Docs**: TECH_STACK.md sections 2, 6, 8

---

### Step 1.2: Setup Database (Supabase)

**Duration**: 1 hour
**Goal**: PostgreSQL database running with schema applied

**Tasks**:

1. Create a free Supabase account at https://supabase.com
2. Create a new project (choose region closest to target audience)
3. Get the database connection strings from Project Settings > Database:
   - `DATABASE_URL` (connection pooler URL)
   - `DIRECT_URL` (direct connection URL, for migrations)

4. Create `.env` file in `frontend/` directory
   ```bash
   DATABASE_URL="postgresql://postgres.[project]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres?pgbouncer=true"
   DIRECT_URL="postgresql://postgres.[project]:[password]@aws-0-[region].pooler.supabase.com:5432/postgres"
   ADMIN_PASSWORD_HASH=""
   ADMIN_SESSION_SECRET="generate-a-random-32-char-string"
   NEXT_PUBLIC_SITE_URL="http://localhost:3000"
   NEXT_PUBLIC_SITE_NAME="AI Prompt Hub"
   ```

5. Add `.env` to `.gitignore` (should already be there from Next.js)

6. Create `.env.example` with placeholder values

**Success Criteria**:
- [ ] Supabase project created
- [ ] Connection strings obtained
- [ ] `.env` file configured locally
- [ ] `.env` added to `.gitignore`

**Reference Docs**: TECH_STACK.md section 7, BACKEND_STRUCTURE.md section 2

---

### Step 1.3: Define Database Schema with Prisma

**Duration**: 1 hour
**Goal**: All database tables created and verified

**Tasks**:

1. Initialize Prisma
   ```bash
   npx prisma init
   ```

2. Replace the generated `prisma/schema.prisma` with the complete schema from BACKEND_STRUCTURE.md section 4 (Post, Category, PostCategory, Prompt, PostImage, ScrapeLog models)

3. Run the first migration
   ```bash
   npx prisma migrate dev --name init
   ```

4. Generate the Prisma Client
   ```bash
   npx prisma generate
   ```

5. Verify tables in Prisma Studio
   ```bash
   npx prisma studio
   ```

6. Create Prisma client singleton at `src/lib/prisma.ts`
   ```typescript
   import { PrismaClient } from '@prisma/client';

   const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

   export const prisma = globalForPrisma.prisma || new PrismaClient();

   if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
   ```

7. Run the search vector SQL setup via Supabase SQL editor (from BACKEND_STRUCTURE.md section 9)

**Success Criteria**:
- [ ] All 6 tables created (posts, categories, post_categories, prompts, post_images, scrape_logs)
- [ ] Can view empty tables in Prisma Studio
- [ ] Prisma Client generated successfully
- [ ] Search vector trigger installed

**Reference Docs**: BACKEND_STRUCTURE.md sections 3, 4, 9

---

### Step 1.4: Setup Project File Structure

**Duration**: 30 minutes
**Goal**: Create all necessary directories and placeholder files

**Tasks**:

1. Create the directory structure inside `frontend/src/`
   ```
   src/
   ├── app/
   │   ├── layout.tsx (exists)
   │   ├── page.tsx (exists)
   │   ├── globals.css (exists)
   │   ├── post/[slug]/page.tsx
   │   ├── category/[slug]/page.tsx
   │   ├── search/page.tsx
   │   ├── favorites/page.tsx
   │   ├── about/page.tsx
   │   ├── contact/page.tsx
   │   ├── privacy/page.tsx
   │   ├── admin/
   │   │   ├── layout.tsx
   │   │   ├── page.tsx
   │   │   ├── posts/page.tsx
   │   │   ├── posts/new/page.tsx
   │   │   ├── posts/[id]/page.tsx
   │   │   └── scraper/page.tsx
   │   └── api/
   │       ├── posts/route.ts
   │       ├── posts/[slug]/route.ts
   │       ├── categories/route.ts
   │       ├── search/route.ts
   │       └── admin/
   │           ├── auth/login/route.ts
   │           ├── auth/logout/route.ts
   │           ├── posts/route.ts
   │           ├── posts/[id]/route.ts
   │           ├── scrape/route.ts
   │           └── dashboard/route.ts
   ├── components/
   │   ├── layout/
   │   ├── posts/
   │   ├── ui/
   │   └── admin/
   ├── lib/
   │   ├── prisma.ts (created in 1.3)
   │   ├── utils.ts
   │   └── validations.ts
   ├── hooks/
   │   ├── useFavorites.ts
   │   └── useTheme.ts
   └── types/
       └── index.ts
   ```

2. Create basic TypeScript types at `src/types/index.ts` (matching BACKEND_STRUCTURE.md API responses)

3. Create utility functions at `src/lib/utils.ts` (slug generation, date formatting)

**Success Criteria**:
- [ ] All directories and placeholder files created
- [ ] TypeScript compiles without errors
- [ ] Project still runs locally

---

## Phase 2: Build Core Public Pages

**Duration**: Day 3-7
**Goal**: All public-facing pages built and functional (with mock/seed data initially)

---

### Step 2.1: Setup Design System in Tailwind

**Duration**: 2 hours
**Goal**: Tailwind configured with custom design tokens from FRONTEND_GUIDELINES.md

**Tasks**:

1. Configure Tailwind CSS v4 with custom theme in `globals.css`
   - Add custom colors (primary indigo-violet palette)
   - Add font configuration (Inter via next/font/google)
   - Add dark mode CSS variables

2. Install and configure the Inter font using `next/font/google` in layout.tsx

3. Create a test page to verify all design tokens work

**Success Criteria**:
- [ ] Custom colors available as Tailwind classes (e.g., `bg-primary-600`)
- [ ] Inter font loading correctly
- [ ] Dark mode classes work (`dark:bg-slate-900`)

**Reference Docs**: FRONTEND_GUIDELINES.md sections 2, 3, 12

---

### Step 2.2: Build Layout Components (Header, Footer)

**Duration**: 3 hours
**Goal**: Shared layout with responsive header and footer

**Tasks**:

1. Build Header component (`src/components/layout/Header.tsx`)
   - Logo (links to /)
   - Navigation links (Latest, Boys, Girls -- desktop only)
   - Search bar (desktop: inline, mobile: expandable)
   - Dark mode toggle
   - Favorites link with badge
   - Mobile hamburger menu

2. Build Footer component (`src/components/layout/Footer.tsx`)
   - Category links
   - Static page links (About, Contact, Privacy, Terms)
   - Copyright notice

3. Build MobileMenu component (slide-in drawer)

4. Integrate into root `layout.tsx`

5. Implement dark mode toggle using `useTheme` hook

**Success Criteria**:
- [ ] Header renders correctly on mobile and desktop
- [ ] Dark mode toggle works and persists in localStorage
- [ ] Navigation links work
- [ ] Mobile menu opens/closes properly
- [ ] No FOUC (flash of unstyled content) on theme load

**Reference Docs**: FRONTEND_GUIDELINES.md section 4 (Header/Navigation), APP_FLOW.md section 3

---

### Step 2.3: Build Post Card & Post Grid Components

**Duration**: 2 hours
**Goal**: Reusable post card component and responsive grid layout

**Tasks**:

1. Build PostCard component (`src/components/posts/PostCard.tsx`)
   - Featured image with hover zoom effect
   - Category badges (pill-shaped)
   - Post title (line-clamp-2)
   - Publication date
   - Favorite button overlay

2. Build PostGrid component (`src/components/posts/PostGrid.tsx`)
   - Responsive grid (1/2/3/4 columns)
   - Accepts array of posts

3. Build Pagination component (`src/components/posts/Pagination.tsx`)
   - Previous / Page numbers / Next
   - Disabled states for first/last page

4. Build Skeleton loading state for PostCard

**Success Criteria**:
- [ ] Post cards render with all elements
- [ ] Grid is responsive across breakpoints
- [ ] Hover effects work (card lift, image zoom)
- [ ] Skeleton loading state looks correct

**Reference Docs**: FRONTEND_GUIDELINES.md section 4 (Post Card), APP_FLOW.md section 2 (Flow 1)

---

### Step 2.4: Build API Routes (Public)

**Duration**: 3 hours
**Goal**: Working REST API for posts, categories, and search

**Tasks**:

1. Build `GET /api/posts` route
   - Pagination (page, limit query params)
   - Optional category filter
   - Sort by publishedAt DESC
   - Include category names and prompt count

2. Build `GET /api/posts/[slug]` route
   - Full post with prompts, images, categories
   - Related posts (same categories)

3. Build `GET /api/categories` route
   - All categories with post counts

4. Build `GET /api/search` route
   - Full-text search using PostgreSQL tsvector
   - Pagination on results

5. Test all endpoints using browser or API client

**Success Criteria**:
- [ ] GET /api/posts returns paginated posts
- [ ] GET /api/posts/[slug] returns full post with prompts
- [ ] GET /api/categories returns categories with counts
- [ ] GET /api/search returns relevant results
- [ ] Error handling works (404, 400)

**Reference Docs**: BACKEND_STRUCTURE.md sections 5, 9

---

### Step 2.5: Build Home Page

**Duration**: 2 hours
**Goal**: Fully functional home page with real data from API

**Tasks**:

1. Implement home page (`src/app/page.tsx`) as a Server Component
   - Fetch latest posts directly from Prisma (server-side)
   - Render PostGrid with PostCards
   - Add Pagination
   - Add hero/intro section

2. Add SEO metadata (title, description, Open Graph)

3. Handle loading states and empty states

**Success Criteria**:
- [ ] Home page displays post grid from database
- [ ] Pagination works (next/previous pages)
- [ ] Page is server-side rendered (view source shows content)
- [ ] Proper meta tags in HTML head

**Reference Docs**: APP_FLOW.md section 2 (Flow 1), PRD.md section 6 (Feature 1)

---

### Step 2.6: Build Post Detail Page

**Duration**: 3 hours
**Goal**: Full post page with expandable prompts, copy, and share

**Tasks**:

1. Build PromptBlock component (`src/components/posts/PromptBlock.tsx`)
   - Accordion expand/collapse
   - Copy to clipboard button with success toast
   - WhatsApp share button (deep link)
   - Telegram share button (deep link)
   - "Open in Gemini" and "Open in ChatGPT" links

2. Build CopyButton component (`src/components/ui/CopyButton.tsx`)
   - Uses Clipboard API
   - Visual feedback (icon swap to checkmark)
   - Fallback for unsupported browsers

3. Build ShareButtons component (`src/components/ui/ShareButtons.tsx`)

4. Implement post detail page (`src/app/post/[slug]/page.tsx`)
   - Server component fetching post data from Prisma
   - Title, images, prompt blocks, related posts
   - SEO metadata (dynamic title, description, og:image)

5. Add related posts section at bottom

**Success Criteria**:
- [ ] Post detail page renders all content
- [ ] Prompt accordions expand/collapse
- [ ] Copy button copies text and shows toast
- [ ] Share buttons generate correct deep links
- [ ] Related posts display correctly
- [ ] SEO meta tags are dynamic per post

**Reference Docs**: APP_FLOW.md section 2 (Flow 1), FRONTEND_GUIDELINES.md (PromptBlock), PRD.md section 6 (Feature 2)

---

### Step 2.7: Build Category Page

**Duration**: 1.5 hours
**Goal**: Category listing page with filtered posts

**Tasks**:

1. Implement category page (`src/app/category/[slug]/page.tsx`)
   - Fetch posts filtered by category
   - Category title and description header
   - Breadcrumb (Home > Category Name)
   - Same PostGrid + Pagination as home

2. Handle 404 for non-existent categories

**Success Criteria**:
- [ ] Category page shows filtered posts
- [ ] Pagination works within category
- [ ] 404 page for invalid categories
- [ ] Breadcrumbs render correctly

**Reference Docs**: APP_FLOW.md section 2 (Flow 3), PRD.md section 6 (Feature 3)

---

### Step 2.8: Seed Database with Sample Data

**Duration**: 1 hour
**Goal**: Enough data in the database to fully test UI

**Tasks**:

1. Create seed script (`prisma/seed.ts`)
   - Create 5-10 categories matching source site
   - Create 20-30 sample posts with prompts
   - Assign categories to posts

2. Run seed script
   ```bash
   npm run db:seed
   ```

3. Verify all pages work with real data

**Success Criteria**:
- [ ] Database has sample data
- [ ] Home page shows posts
- [ ] Category pages filter correctly
- [ ] Post detail pages show prompts

---

## Phase 3: Build the Python Scraper

**Duration**: Day 8-11
**Goal**: Scraper populates the database with all content from geminiaiprompt.in

---

### Step 3.1: Setup Scraper Project

**Duration**: 30 minutes
**Goal**: Python project with dependencies ready

**Tasks**:

1. Create `scraper/` directory at project root
2. Create `requirements.txt` (from TECH_STACK.md section 9)
3. Create virtual environment and install dependencies
   ```bash
   cd scraper
   python -m venv venv
   venv\Scripts\activate  # Windows
   pip install -r requirements.txt
   ```
4. Create `config.py` with base URL, selectors, and settings
5. Create `.env` file with DATABASE_URL

**Success Criteria**:
- [ ] Virtual environment created
- [ ] Dependencies installed
- [ ] Config file ready

---

### Step 3.2: Build the Listing Page Crawler

**Duration**: 2 hours
**Goal**: Crawl all paginated listing pages and extract post URLs

**Tasks**:

1. Create `scraper.py` with main scraping logic
2. Implement function to fetch a listing page (GET `https://geminiaiprompt.in/page/{n}/`)
3. Parse HTML with BeautifulSoup, extract all post links and titles
4. Iterate through all pages (page 1 to 22+)
5. Handle pagination end detection (404 or empty page)
6. Add rate limiting (1-2 second delay between requests)
7. Add error handling and retry logic

**Success Criteria**:
- [ ] Scraper discovers all 350+ post URLs
- [ ] Handles network errors gracefully
- [ ] Respects rate limiting
- [ ] Logs progress (page count, URLs found)

---

### Step 3.3: Build the Post Detail Scraper

**Duration**: 3 hours
**Goal**: Extract all content from individual post pages

**Tasks**:

1. Implement function to scrape a single post page
2. Extract:
   - Post title
   - Slug (from URL)
   - Categories (from category links/badges)
   - Featured image (from og:image or first image)
   - All prompt texts (from expandable sections)
   - All images (from gallery)
   - Author name
   - Publication date (if available)
3. Handle different post layouts/formats
4. Clean and normalize extracted text

**Success Criteria**:
- [ ] Correctly extracts title, slug, categories from a post
- [ ] Extracts all prompt texts (6+ per post)
- [ ] Extracts all images
- [ ] Handles edge cases (missing fields, different layouts)

---

### Step 3.4: Build the Database Insertion Logic

**Duration**: 2 hours
**Goal**: Insert scraped data into PostgreSQL

**Tasks**:

1. Create `db.py` with database operations
2. Implement `connect()` function using psycopg2
3. Implement `ensure_category(name, slug)` -- create if not exists, return ID
4. Implement `post_exists(source_url)` -- check for duplicates
5. Implement `insert_post(post_data)` -- insert post, prompts, images, categories in a transaction
6. Implement `create_scrape_log()` and `update_scrape_log()` for tracking

**Success Criteria**:
- [ ] Categories are created or reused correctly
- [ ] Duplicate posts are skipped (deduplication by source_url)
- [ ] Posts, prompts, images, and categories are all inserted in one transaction
- [ ] Scrape logs are recorded

---

### Step 3.5: Full Scrape Test Run

**Duration**: 2 hours
**Goal**: Complete end-to-end scrape populating the database

**Tasks**:

1. Run the scraper: `python scraper.py`
2. Monitor progress and fix any issues
3. Verify data in Prisma Studio
4. Check post counts, category assignments, prompt content
5. Test the website with real scraped data

**Success Criteria**:
- [ ] 300+ posts scraped and inserted
- [ ] All categories created
- [ ] Each post has correct prompts and images
- [ ] Website displays scraped data correctly
- [ ] Scrape completes in under 15 minutes
- [ ] Scrape log recorded in database

---

## Phase 4: Extra Features (Search, Favorites, Dark Mode)

**Duration**: Day 12-16
**Goal**: All P1 features implemented and polished

---

### Step 4.1: Implement Full-Text Search

**Duration**: 3 hours
**Goal**: Working search across all posts and prompts

**Tasks**:

1. Verify search vector triggers are working (insert a post, check search_vector is populated)
2. Backfill search vectors for existing posts via SQL
   ```sql
   UPDATE posts SET search_vector =
     setweight(to_tsvector('english', COALESCE(title, '')), 'A') ||
     setweight(to_tsvector('english', COALESCE(excerpt, '')), 'B');
   ```
3. Build the SearchBar component (`src/components/ui/SearchBar.tsx`)
   - Debounced input (300ms)
   - On submit: navigate to `/search?q=...`
4. Build the search results page (`src/app/search/page.tsx`)
   - Fetch from /api/search
   - Display results in PostGrid
   - Show "No results" empty state
5. Integrate SearchBar into the Header

**Success Criteria**:
- [ ] Search returns relevant results
- [ ] Debounced input works (no unnecessary requests)
- [ ] Results page shows matching posts
- [ ] "No results" state displays properly
- [ ] Search works for post titles and prompt text content

**Reference Docs**: BACKEND_STRUCTURE.md section 9, APP_FLOW.md section 2 (Flow 2), PRD.md section 6 (Feature 7)

---

### Step 4.2: Implement User Favorites

**Duration**: 2 hours
**Goal**: localStorage-based favorites with dedicated page

**Tasks**:

1. Create `useFavorites` hook (`src/hooks/useFavorites.ts`)
   - Read/write to localStorage key `favoritePostIds`
   - Methods: `addFavorite(id)`, `removeFavorite(id)`, `isFavorite(id)`, `getAllFavorites()`
   - Handle localStorage unavailability (private browsing)

2. Build FavoriteButton component (`src/components/ui/FavoriteButton.tsx`)
   - Heart icon (outline/filled)
   - Bounce animation on toggle
   - Works without page reload (client component)

3. Integrate FavoriteButton into PostCard and Post Detail page

4. Build Favorites page (`src/app/favorites/page.tsx`)
   - Client component reads favorites from localStorage
   - Fetches post data for favorited IDs
   - Empty state with CTA

**Success Criteria**:
- [ ] Heart toggle works on post cards and detail pages
- [ ] Favorites persist across page refreshes
- [ ] Favorites page lists all saved posts
- [ ] Empty state shows when no favorites
- [ ] Graceful degradation in private browsing mode

**Reference Docs**: APP_FLOW.md section 2 (Flow 4), PRD.md section 6 (Feature 8)

---

### Step 4.3: Implement Dark Mode

**Duration**: 1.5 hours
**Goal**: Complete dark mode with toggle and persistence

**Tasks**:

1. Create `useTheme` hook (`src/hooks/useTheme.ts`)
   - Read preference from localStorage
   - Fallback to system preference
   - Toggle between light/dark

2. Add FOUC prevention script in root layout `<head>`

3. Build ThemeToggle component (`src/components/ui/ThemeToggle.tsx`)
   - Sun/moon icon with rotation animation
   - Integrate into Header

4. Audit all components for dark mode classes
   - Every `bg-white` needs `dark:bg-slate-800`
   - Every `text-neutral-900` needs `dark:text-neutral-100`
   - Every `border-neutral-200` needs `dark:border-neutral-700`

**Success Criteria**:
- [ ] Toggle switches theme instantly
- [ ] Preference persists in localStorage
- [ ] No FOUC on page load
- [ ] All pages look correct in dark mode
- [ ] System preference respected when no manual choice

**Reference Docs**: FRONTEND_GUIDELINES.md section 12, APP_FLOW.md section 2 (Flow 5)

---

### Step 4.4: Polish and Static Pages

**Duration**: 2 hours
**Goal**: About, Contact, Privacy pages and UI polish

**Tasks**:

1. Create About page (`/about`)
2. Create Contact page (`/contact`)
3. Create Privacy Policy page (`/privacy`)
4. Create Terms page (`/terms`)
5. Add breadcrumbs to post detail and category pages
6. Add toast notifications (Sonner) for copy/share actions
7. Polish responsive design across all pages
8. Test on mobile viewport

**Success Criteria**:
- [ ] All static pages render with content
- [ ] Breadcrumbs work on post and category pages
- [ ] Toast notifications appear on copy
- [ ] Responsive design works on all breakpoints

---

## Phase 5: Admin Panel

**Duration**: Day 17-21
**Goal**: Functional admin panel for content management

---

### Step 5.1: Admin Authentication

**Duration**: 2 hours
**Goal**: Password-protected admin area

**Tasks**:

1. Generate admin password hash
   ```bash
   node -e "const bcrypt = require('bcryptjs'); bcrypt.hash('your-password', 12).then(h => console.log(h))"
   ```
2. Set `ADMIN_PASSWORD_HASH` in `.env`

3. Build admin login API route (`/api/admin/auth/login`)
   - Validate password against hash
   - Set HTTP-only session cookie

4. Build admin logout API route (`/api/admin/auth/logout`)

5. Build Next.js middleware (`middleware.ts`)
   - Protect all `/admin/*` routes
   - Redirect to login if no valid session cookie
   - Exclude `/api/admin/auth/login` from protection

6. Build admin login page (`/admin/page.tsx`)
   - Password input, login button
   - Error messages, rate limiting display

**Success Criteria**:
- [ ] Login works with correct password
- [ ] Wrong password shows error
- [ ] Admin pages redirect to login when not authenticated
- [ ] Session persists across page refreshes (24h expiry)
- [ ] Logout clears session

**Reference Docs**: BACKEND_STRUCTURE.md section 6, APP_FLOW.md section 2 (Flow 6)

---

### Step 5.2: Admin Dashboard

**Duration**: 2 hours
**Goal**: Overview page with stats and quick actions

**Tasks**:

1. Build dashboard API route (`/api/admin/dashboard`)
   - Total posts, categories, scraped vs manual counts
   - Last scrape date and status

2. Build admin layout (`/admin/layout.tsx`)
   - Sidebar navigation (Dashboard, Posts, Scraper)
   - Responsive (sidebar on desktop, drawer on mobile)

3. Build dashboard page (`/admin/page.tsx`)
   - Stat cards (total posts, categories, etc.)
   - Quick action buttons (New Post, Trigger Scrape)
   - Recent posts table

**Success Criteria**:
- [ ] Dashboard shows accurate stats
- [ ] Sidebar navigation works
- [ ] Quick action buttons link correctly

---

### Step 5.3: Admin Post CRUD

**Duration**: 4 hours
**Goal**: Create, read, update, delete posts from admin

**Tasks**:

1. Build admin posts list page (`/admin/posts`)
   - Table with title, category, status, date, actions (edit/delete)
   - Search/filter within admin

2. Build post creation form (`/admin/posts/new`)
   - Title input
   - Category multi-select
   - Featured image URL input
   - Dynamic prompt text areas (add/remove)
   - Content/description textarea
   - Save/Publish button

3. Build admin post API routes
   - POST `/api/admin/posts` (create)
   - PUT `/api/admin/posts/[id]` (update)
   - DELETE `/api/admin/posts/[id]` (delete)

4. Build post edit form (`/admin/posts/[id]`)
   - Pre-filled with existing data
   - Save changes button

5. Add Zod validation on all forms (client + server)

**Success Criteria**:
- [ ] Can create a new post with prompts and categories
- [ ] Can edit an existing post
- [ ] Can delete a post (with confirmation dialog)
- [ ] Validation errors display inline
- [ ] Generated slug is correct

**Reference Docs**: BACKEND_STRUCTURE.md section 5 (Admin Endpoints), APP_FLOW.md section 2 (Flow 6)

---

### Step 5.4: Admin Scraper Control

**Duration**: 2 hours
**Goal**: Manual scrape trigger from admin panel

**Tasks**:

1. Build scraper page (`/admin/scraper`)
   - "Start Scrape" button
   - Status indicator (idle/running/complete/error)
   - Scrape history table

2. Build scrape API routes
   - POST `/api/admin/scrape` (trigger scrape)
   - GET `/api/admin/scrape/status` (get latest status)

3. Implement server-side scrape logic
   - Option A: Call Python scraper via exec (if hosting supports it)
   - Option B: Implement Node.js scraper using cheerio (alternative)
   - Option C: Trigger GitHub Actions workflow via API

4. Poll for scrape status updates

**Success Criteria**:
- [ ] Can trigger scrape from admin panel
- [ ] Status updates shown in real-time
- [ ] Scrape history displayed
- [ ] Cannot trigger duplicate scrape (conflict protection)

---

## Phase 6: Automation (GitHub Actions)

**Duration**: Day 22-23
**Goal**: Automated weekly scraping

---

### Step 6.1: Create GitHub Repository

**Duration**: 30 minutes
**Goal**: Code pushed to GitHub

**Tasks**:

1. Initialize git repository (if not already)
   ```bash
   git init
   ```
2. Create `.gitignore` (ensure node_modules, .env, venv are excluded)
3. Create initial commit
4. Create GitHub repository
5. Push code to GitHub

**Success Criteria**:
- [ ] All code on GitHub
- [ ] No secrets committed
- [ ] .gitignore is correct

---

### Step 6.2: Create GitHub Actions Workflow

**Duration**: 1.5 hours
**Goal**: Weekly automated scraping via GitHub Actions

**Tasks**:

1. Create `.github/workflows/scrape.yml`
   ```yaml
   name: Weekly Scrape

   on:
     schedule:
       - cron: '0 2 * * 0'  # Every Sunday at 2 AM UTC
     workflow_dispatch:  # Manual trigger

   jobs:
     scrape:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-python@v5
           with:
             python-version: '3.12'
         - name: Install dependencies
           run: pip install -r scraper/requirements.txt
         - name: Run scraper
           env:
             DATABASE_URL: ${{ secrets.SCRAPER_DATABASE_URL }}
           run: python scraper/scraper.py
   ```

2. Add `SCRAPER_DATABASE_URL` to GitHub repository secrets

3. Test by manually triggering the workflow

4. Verify scrape log in database after workflow runs

**Success Criteria**:
- [ ] Workflow file created and committed
- [ ] Secrets configured in GitHub
- [ ] Manual trigger works
- [ ] Scraper runs successfully in GitHub Actions
- [ ] New posts appear in database after run

**Reference Docs**: TECH_STACK.md section 4 (Automation), PRD.md section 6 (Feature 5)

---

## Phase 7: Deployment & Launch

**Duration**: Day 24-26
**Goal**: Live production website

---

### Step 7.1: Deploy to Railway

**Duration**: 2 hours
**Goal**: Next.js app running on Railway

**Tasks**:

1. Create a Railway account at https://railway.app
2. Create a new project from GitHub repository
3. Configure the service:
   - Root directory: `frontend/`
   - Build command: `npm run build`
   - Start command: `npm start`
4. Add all environment variables from `.env`
   - DATABASE_URL (Supabase connection string)
   - DIRECT_URL
   - ADMIN_PASSWORD_HASH
   - ADMIN_SESSION_SECRET
   - NEXT_PUBLIC_SITE_URL (Railway-provided URL)
   - NEXT_PUBLIC_SITE_NAME
5. Deploy and verify the site is accessible
6. Run Prisma migrations on production
   ```bash
   npx prisma migrate deploy
   ```

**Success Criteria**:
- [ ] Site accessible on Railway URL
- [ ] All pages load correctly
- [ ] API routes work
- [ ] Admin login works
- [ ] Database connected successfully

---

### Step 7.2: SEO Setup

**Duration**: 1.5 hours
**Goal**: Site optimized for search engines

**Tasks**:

1. Create dynamic `sitemap.xml` route (`/sitemap.xml`)
   - List all posts and categories
   - Update on build

2. Create `robots.txt`
   - Allow all crawlers
   - Point to sitemap

3. Verify Open Graph meta tags on all pages
   - Use https://www.opengraph.xyz/ to test

4. Add Schema.org structured data (Article schema) to post pages

5. Submit sitemap to Google Search Console

**Success Criteria**:
- [ ] Sitemap accessible at /sitemap.xml with all URLs
- [ ] robots.txt correct
- [ ] Open Graph previews work (WhatsApp, Twitter, Facebook)
- [ ] Google Search Console submission done

---

### Step 7.3: Final Testing & Launch Checklist

**Duration**: 2 hours
**Goal**: Verify everything works end-to-end

**Tasks**:

1. Test all public pages (home, post, category, search, favorites)
2. Test admin panel (login, create post, edit post, delete post)
3. Test scraper (manual trigger)
4. Test dark mode on all pages
5. Test on mobile device (real phone)
6. Run Lighthouse audit (target: 90+ for Performance, SEO, Accessibility)
7. Check all external links (Gemini, ChatGPT)
8. Verify error pages (404, 500)

**Launch Checklist**:
- [ ] All public pages working
- [ ] Admin panel functional
- [ ] Dark mode complete
- [ ] Search working
- [ ] Favorites working
- [ ] Copy/share buttons working
- [ ] Mobile responsive
- [ ] Lighthouse scores acceptable
- [ ] No console errors
- [ ] GitHub Actions scraper scheduled
- [ ] Custom domain configured (if ready)

---

## Milestones & Timeline

| Milestone | Target | Key Deliverables |
|-----------|--------|------------------|
| Foundation Complete | End of Day 2 | Project setup, database, file structure |
| Public Pages Complete | End of Day 7 | Home, Post Detail, Category, with seed data |
| Scraper Complete | End of Day 11 | Full scrape of 350+ posts into database |
| Features Complete | End of Day 16 | Search, Favorites, Dark Mode polished |
| Admin Panel Complete | End of Day 21 | Full CRUD, scraper control |
| Automation Complete | End of Day 23 | GitHub Actions weekly scrape |
| **MVP Launch** | **End of Day 26** | **Deployed, tested, live on Railway** |

---

## Risk Mitigation

### Technical Risks

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Source site changes HTML structure | High | Medium | Use flexible CSS selectors; add try/catch per field; alert on scrape failures |
| Source site blocks scraper | High | Low | Rotate user agents; add delays; respect robots.txt |
| Supabase free tier limits exceeded | Medium | Low | Optimize queries; reference external image URLs; monitor usage |
| Railway credits exhausted | Medium | Medium | Use ISR to reduce server load; optimize page rendering |
| Prisma version incompatibility | Low | Low | Lock exact versions; test before upgrading |

### Timeline Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| Scope creep | High | Stick to PRD P0 features; defer P1/P2 to post-MVP |
| Scraper edge cases | Medium | Budget extra time for debugging; handle errors gracefully |
| Deployment issues | Medium | Deploy early (Phase 1) to catch issues before launch |

---

## Success Criteria (Overall)

### MVP is successful when:

1. 300+ posts scraped and displayed on the site
2. All P0 features from PRD.md implemented and working
3. All user flows from APP_FLOW.md functional
4. Design matches FRONTEND_GUIDELINES.md (colors, spacing, components)
5. API matches BACKEND_STRUCTURE.md
6. Automated weekly scraping running via GitHub Actions
7. Site deployed and publicly accessible
8. Lighthouse Performance score > 80
9. Lighthouse SEO score > 90
10. Works on mobile (responsive)

---

## Post-MVP Roadmap

After MVP launch, prioritize in this order:

1. **Monitor and fix**: Watch scraper logs, fix any scraping failures
2. **P1 Features**: Newsletter/WhatsApp signup, Prompt of the Day
3. **Original Content**: Start publishing original prompts via admin panel
4. **SEO Growth**: Write meta descriptions, optimize for long-tail keywords
5. **Analytics**: Add simple page view tracking
6. **Performance**: Implement ISR caching, optimize images
7. **Testing**: Add Vitest unit tests and Playwright E2E tests
8. **P2 Features**: Admin analytics dashboard, user comments
