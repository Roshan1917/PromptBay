# Product Requirements Document (PRD)

## 1. Product Overview

- **Project Title**: AI Prompt Hub (working name -- to be finalized)
- **Version**: 1.0
- **Last Updated**: February 17, 2026
- **Owner**: Project Owner
- **Type**: Content Aggregation & Publishing Platform

A content-driven website that aggregates and showcases AI photo editing prompts for tools like Google Gemini, ChatGPT, Midjourney, and other AI image generators. The site initially scrapes content from [geminiaiprompt.in](https://geminiaiprompt.in/) (~350+ posts across 20+ categories) and allows the owner to publish original content via an admin panel. Automated weekly scraping keeps the database in sync with the source.

---

## 2. Problem Statement

AI photo editing prompts are scattered across blogs, social media, and niche websites with no centralized, searchable, well-organized hub. Users waste time hunting for quality prompts across multiple sources. Existing prompt sites (like geminiaiprompt.in) are built on WordPress with slow load times, poor search, no dark mode, no favorites, and a cluttered user experience.

**Core Problem**: There is no fast, modern, searchable, and user-friendly platform that aggregates trending AI photo editing prompts across all major AI tools in one place.

---

## 3. Goals & Objectives

### Business Goals
- Aggregate 350+ existing AI prompts within the first week via automated scraping
- Achieve 1,000+ monthly organic visitors within 3 months of launch via SEO
- Grow the content library to 500+ prompts within the first month (scraped + original)
- Establish the site as a go-to resource for AI photo editing prompts

### User Goals
- Find trending AI photo editing prompts quickly via category browsing or full-text search
- Copy prompts instantly and use them in Gemini, ChatGPT, or Midjourney
- Save favorite prompts for later use without creating an account
- Browse comfortably in dark mode on any device

---

## 4. Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Initial content volume | 350+ posts scraped | Database count after first scrape |
| Page load time | < 2 seconds (LCP) | Lighthouse / Web Vitals |
| SEO readiness | 90+ Lighthouse SEO score | Lighthouse audit |
| Mobile responsiveness | 100% of pages mobile-friendly | Manual + Lighthouse |
| Search accuracy | Relevant results for 90%+ queries | Manual testing |
| Weekly scrape success rate | 95%+ uptime | GitHub Actions logs |
| Admin post creation | < 5 minutes per post | Manual timing |

---

## 5. Target Users & Personas

### Primary Persona: Ravi (AI Photo Editor)
- **Demographics**: 18-30 years old, India-based, speaks Hindi/English
- **Pain Points**: Spends 15+ minutes finding good prompts; copies from Instagram reels or YouTube videos which is tedious; wants ready-to-use prompts
- **Goals**: Find trending AI prompts, copy them instantly, create viral AI-edited photos for Instagram
- **Technical Proficiency**: Basic -- uses smartphone primarily, comfortable with copy-paste

### Secondary Persona: Priya (Content Creator)
- **Demographics**: 20-35 years old, social media creator/influencer
- **Pain Points**: Needs fresh prompts daily for content creation; existing sites are slow and cluttered
- **Goals**: Discover new prompt styles, bookmark favorites, share prompts with followers
- **Technical Proficiency**: Moderate -- uses both mobile and desktop, familiar with AI tools

### Tertiary Persona: Site Owner (Admin)
- **Demographics**: The website owner/operator
- **Pain Points**: Cannot manually keep up with new prompts being published daily on source sites
- **Goals**: Automate content aggregation, add original prompts, manage categories, grow traffic
- **Technical Proficiency**: Basic to moderate -- needs a simple admin interface

---

## 6. Features & Requirements

### Must-Have Features (P0)

1. **Home Page with Prompt Grid**
   - Description: Displays the latest prompts in a responsive card grid with featured images, titles, and category tags. Paginated (16 posts per page).
   - User Story: As a visitor, I want to see the latest AI prompts on the home page so that I can quickly browse what's trending.
   - Acceptance Criteria:
     - [ ] Displays 16 post cards per page in a responsive grid (1 col mobile, 2 col tablet, 3-4 col desktop)
     - [ ] Each card shows: featured image, title, category badges, publication date
     - [ ] Pagination controls at bottom (Previous / Page numbers / Next)
     - [ ] Page loads in under 2 seconds
     - [ ] Server-side rendered for SEO
   - Success Metric: Bounce rate < 60%

2. **Post Detail Page**
   - Description: Shows the full post with title, featured images, multiple expandable/collapsible prompt blocks, copy button, share buttons, and links to ChatGPT/Gemini.
   - User Story: As a visitor, I want to view a prompt's full details and copy it to my clipboard so that I can use it in my AI tool.
   - Acceptance Criteria:
     - [ ] Displays post title, featured images, author, publish date, categories
     - [ ] Each prompt is in an expandable/collapsible accordion ("View Prompt" / "Hide Prompt")
     - [ ] "Copy to Clipboard" button on each prompt with success toast
     - [ ] WhatsApp and Telegram share buttons on each prompt
     - [ ] Direct links to ChatGPT and Gemini open in new tabs
     - [ ] Related posts section at the bottom
     - [ ] Proper meta tags (title, description, og:image) for SEO and social sharing
   - Success Metric: Average time on page > 2 minutes

3. **Category Pages**
   - Description: Lists all posts belonging to a specific category with pagination.
   - User Story: As a visitor, I want to browse prompts by category (Boys, Girls, Festival, etc.) so that I can find prompts relevant to my interest.
   - Acceptance Criteria:
     - [ ] Category name and description displayed at top
     - [ ] Same post grid layout as home page
     - [ ] Pagination works correctly
     - [ ] Category navigation accessible from header/sidebar
   - Success Metric: Category pages account for 30%+ of page views

4. **Python Web Scraper**
   - Description: Standalone Python script that crawls geminiaiprompt.in, extracts all posts with their prompts, images, and categories, and inserts them into the PostgreSQL database.
   - User Story: As the site owner, I want to automatically scrape prompts from the source site so that my database stays populated without manual effort.
   - Acceptance Criteria:
     - [ ] Crawls all paginated listing pages (page 1 through 22+)
     - [ ] For each post: extracts title, slug, categories, featured image, all prompt texts, all images
     - [ ] Deduplicates via sourceUrl (skips posts already in DB)
     - [ ] Handles errors gracefully (network timeout, missing elements) without crashing
     - [ ] Logs summary: total pages crawled, new posts added, errors encountered
     - [ ] Runs in under 10 minutes for a full crawl
   - Success Metric: 95%+ of source posts successfully scraped

5. **Weekly Automated Scraping (GitHub Actions)**
   - Description: GitHub Actions workflow that triggers the Python scraper on a weekly schedule.
   - User Story: As the site owner, I want scraping to happen automatically every week so that I don't have to remember to run it manually.
   - Acceptance Criteria:
     - [ ] Runs every Sunday at 2:00 AM UTC via cron schedule
     - [ ] Can also be triggered manually via GitHub Actions UI (workflow_dispatch)
     - [ ] Uses GitHub Secrets for database credentials
     - [ ] Logs output visible in GitHub Actions run history
     - [ ] Sends notification on failure (via GitHub notification)
   - Success Metric: 95%+ weekly scrape success rate

6. **Admin Panel**
   - Description: Password-protected admin interface for managing posts, categories, and triggering scrapes.
   - User Story: As the site owner, I want to add my own original prompts and manage content without touching code.
   - Acceptance Criteria:
     - [ ] Password-based login (single admin password stored in environment variable)
     - [ ] Dashboard showing: total posts, total categories, last scrape date, posts by category chart
     - [ ] Create new post: title, category selection, multiple prompt text areas, image upload/URL
     - [ ] Edit existing posts (both scraped and manual)
     - [ ] Delete posts with confirmation dialog
     - [ ] Manual scrape trigger button with real-time status display
     - [ ] Protected via Next.js middleware (redirects to login if not authenticated)
   - Success Metric: Admin can create a complete post in < 5 minutes

### Should-Have Features (P1)

7. **Full-Text Search**
   - Description: Search across all post titles and prompt texts using PostgreSQL full-text search.
   - User Story: As a visitor, I want to search for specific prompts (e.g., "Mahashivratri" or "boys aesthetic") so that I can find exactly what I need.
   - Acceptance Criteria:
     - [ ] Search bar in the site header (always visible)
     - [ ] Debounced search-as-you-type (300ms delay)
     - [ ] Results page shows matching posts with highlighted search terms
     - [ ] Returns results in < 500ms
     - [ ] "No results found" state with suggestions
   - Success Metric: 20%+ of visitors use search

8. **User Favorites (No Login Required)**
   - Description: Bookmark/heart button to save favorite posts, stored in browser localStorage.
   - User Story: As a visitor, I want to save my favorite prompts so that I can come back to them later without creating an account.
   - Acceptance Criteria:
     - [ ] Heart/bookmark icon on every post card and post detail page
     - [ ] Clicking toggles favorite state (filled/unfilled heart)
     - [ ] Favorites stored in browser localStorage
     - [ ] Dedicated /favorites page listing all saved posts
     - [ ] "No favorites yet" empty state with CTA
     - [ ] Persists across browser sessions
   - Success Metric: 15%+ of returning visitors use favorites

9. **Dark Mode**
   - Description: Toggle between light and dark themes with system preference detection.
   - User Story: As a visitor, I want to switch to dark mode so that I can browse comfortably at night.
   - Acceptance Criteria:
     - [ ] Sun/moon toggle icon in the header
     - [ ] Defaults to system preference (prefers-color-scheme)
     - [ ] Preference saved in localStorage
     - [ ] All pages and components have proper dark mode styles
     - [ ] No flash of wrong theme on page load (FOUC prevention)
   - Success Metric: 30%+ of users enable dark mode

### Nice-to-Have Features (P2)

10. **Newsletter/WhatsApp Signup**
    - Description: Opt-in form for users to receive weekly prompt updates
    - User Story: As a visitor, I want to get notified about new prompts so I don't miss trending ones
    - Acceptance Criteria:
      - [ ] Email or WhatsApp number input
      - [ ] Stored in database
      - [ ] Weekly digest (manual or automated)

11. **Prompt of the Day**
    - Description: Featured prompt highlighted on the home page, rotated daily
    - Acceptance Criteria:
      - [ ] Random or admin-selected daily prompt
      - [ ] Prominent display on home page

12. **Analytics Dashboard (Admin)**
    - Description: Page view analytics, popular posts, search terms
    - Acceptance Criteria:
      - [ ] Basic page view tracking
      - [ ] Most viewed posts
      - [ ] Most searched terms

---

## 7. Explicitly OUT OF SCOPE

- **User registration/accounts**: No user signup, login, or logout for public users. There is NO visible login button or link anywhere on the public website. The admin panel is a hidden route (`/admin`) accessible only by the site owner who knows the URL. Favorites use localStorage (no accounts needed).
- **Comments system**: No user comments on posts (may add in v2)
- **User-generated content**: Only the admin can publish content (via the hidden `/admin` route)
- **Payment/monetization**: No ads, subscriptions, or payment processing in v1
- **Mobile app**: Web-only, responsive design (no native iOS/Android app)
- **Multi-language support**: English-only in v1
- **Real-time features**: No WebSockets, live chat, or real-time updates
- **AI prompt generation**: The site aggregates prompts, it does not generate them with AI
- **Image hosting/CDN**: Images reference external URLs or Supabase Storage; no custom CDN setup
- **Multiple admin users**: Single admin password only (no role-based access control in v1)

---

## 8. User Scenarios

### Scenario 1: Browse and Copy a Trending Prompt
- **Context**: Ravi opens the website on his phone to find a trending Gemini prompt for Mahashivratri
- **Steps**:
  1. User opens the home page -- sees a grid of latest prompt posts
  2. User scrolls through cards, spots "Mahashivratri Ai Photo Editing Prompts"
  3. User taps the card -- navigates to post detail page
  4. User sees 4-6 prompt variations, taps "View Prompt" on the first one
  5. Prompt text expands -- user reads it
  6. User taps "Copy" button -- prompt text copied to clipboard, toast shows "Copied!"
  7. User taps "Open in Gemini" -- Gemini opens in a new tab
  8. User pastes the prompt in Gemini
- **Expected Outcome**: User successfully copies a prompt and uses it in Gemini in under 60 seconds
- **Edge Cases**: 
  - Clipboard API not supported on old browser -- show fallback "Select All" text
  - Post has no prompts (data error) -- show "No prompts available" message

### Scenario 2: Search for a Specific Prompt Theme
- **Context**: Priya wants to find "Valentine's Day" prompts for her Instagram content
- **Steps**:
  1. User opens the website
  2. User types "Valentine" in the search bar in the header
  3. Debounced search fires after 300ms, results appear on the search page
  4. User sees 3-5 matching posts with highlighted "Valentine" text
  5. User clicks on "ChatGPT Valentine's Day Photo Editing Prompts for Boys"
  6. User copies the prompt and shares it via WhatsApp
- **Expected Outcome**: User finds relevant prompts within 10 seconds
- **Edge Cases**:
  - No results found -- show "No prompts match your search. Try different keywords." with category suggestions
  - Very long search query -- truncate display, still search full text

### Scenario 3: Admin Adds an Original Prompt Post
- **Context**: Site owner wants to publish a new original prompt post about Holi Festival
- **Steps**:
  1. Admin navigates to /admin/login
  2. Admin enters the admin password
  3. Admin is redirected to the dashboard
  4. Admin clicks "New Post" button
  5. Admin fills in: Title, selects categories (Festival, Latest), adds 3 prompt texts, uploads a featured image
  6. Admin clicks "Publish"
  7. Post appears on the home page and category pages immediately
- **Expected Outcome**: New post is live within 5 minutes of starting
- **Edge Cases**:
  - Admin enters wrong password -- show "Invalid password" error, allow retry
  - Image upload fails -- show error, allow retry or skip image
  - Session expires -- redirect to login, preserve form data in localStorage

---

## 9. Dependencies & Constraints

### Technical Constraints
- **Free tier limits**: Supabase (500MB DB, 1GB storage), Railway ($5 free credits), GitHub Actions (2000 min/month)
- **Scraping reliability**: Source site structure may change, breaking the scraper
- **No server-side cron**: GitHub Actions provides the scheduled automation (not always exactly on time)
- **Image storage**: Limited to 1GB on Supabase free tier; must reference external URLs when possible

### Business Constraints
- **Budget**: $0/month (all free tiers)
- **Team size**: Solo developer
- **Timeline**: MVP in 4-5 weeks

### External Dependencies
- **Supabase**: PostgreSQL database + image storage
- **Railway**: Application hosting
- **GitHub Actions**: Scraping automation
- **geminiaiprompt.in**: Source content (site availability and structure)

---

## 10. Timeline & Milestones

| Milestone | Target | Features Included |
|-----------|--------|-------------------|
| **MVP Phase 1** | Week 1 | Project setup, database schema, design system |
| **MVP Phase 2** | Week 2 | Public pages (home, post detail, category, pagination) |
| **MVP Phase 3** | Week 3 | Python scraper, data population, search |
| **MVP Phase 4** | Week 4 | Favorites, dark mode, admin panel |
| **V1.0 Launch** | Week 5 | GitHub Actions automation, Railway deployment, testing |

---

## 11. Risks & Assumptions

### Risks

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Source site changes HTML structure | High | Medium | Monitor scraper logs; build flexible CSS selectors; add error alerts |
| Source site blocks scraping | High | Low | Respect robots.txt; add delays between requests; rotate user agents |
| Supabase free tier storage exceeded | Medium | Low | Reference external image URLs; compress images; monitor usage |
| Railway free credits exhausted | High | Medium | Optimize SSR; use ISR (Incremental Static Regeneration) to reduce compute |
| SEO penalties for duplicate content | Medium | Medium | Add canonical URLs; rewrite excerpts; add original value (search, favorites, dark mode) |

### Assumptions
- geminiaiprompt.in will remain accessible and maintain a similar HTML structure
- Free tier limits of Supabase, Railway, and GitHub Actions are sufficient for initial traffic
- Users primarily browse on mobile devices (design mobile-first)
- Content in English is sufficient for the target audience

---

## 12. Non-Functional Requirements

- **Performance**: LCP < 2 seconds, FID < 100ms, CLS < 0.1 (Core Web Vitals)
- **Security**: Admin password hashed; API routes protected; no SQL injection (Prisma ORM); XSS prevention (React escaping)
- **Accessibility**: WCAG 2.1 Level AA; keyboard navigable; proper alt texts; color contrast 4.5:1
- **Scalability**: Database supports 10,000+ posts; pagination prevents loading all data; ISR for popular pages
- **Reliability**: 99%+ uptime via Railway; automated scraper with error handling
- **SEO**: SSR/SSG pages; dynamic sitemap.xml; structured data (Schema.org Article); Open Graph meta tags

---

## 13. References & Resources

- **Source site**: [https://geminiaiprompt.in/](https://geminiaiprompt.in/)
- **Next.js docs**: [https://nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS docs**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Prisma docs**: [https://www.prisma.io/docs](https://www.prisma.io/docs)
- **Supabase docs**: [https://supabase.com/docs](https://supabase.com/docs)
- **Railway docs**: [https://docs.railway.app](https://docs.railway.app)
- **BeautifulSoup4 docs**: [https://www.crummy.com/software/BeautifulSoup/bs4/doc/](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)
