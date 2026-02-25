# Application Flow Documentation

## 1. Entry Points

### Primary Entry Points
- **Direct URL (Home)**: User types the domain or clicks a bookmarked link. Lands on the home page showing the latest prompts grid.
- **Search Engine (Organic)**: User finds a post via Google search. Lands directly on a post detail page or category page. Each page is server-side rendered with full meta tags for SEO.
- **Social Media Share**: User clicks a WhatsApp or Telegram shared link. Lands on a specific post detail page.

### Secondary Entry Points
- **Deep Links (Category)**: User navigates to `/category/boys-prompt` directly. Shows filtered post grid.
- **Favorites Page**: Returning user navigates to `/favorites` to view their saved prompts.
- **Admin Panel (Hidden)**: Site owner navigates directly to `/admin` by typing the URL manually. There is NO login link, admin link, or any visible reference to the admin panel anywhere on the public site. Only the site owner knows this route exists.

---

## 2. Core User Flows

### Flow 1: Browse and Copy a Prompt (Primary User Flow)

**Goal**: Find a trending AI prompt and copy it for use in Gemini/ChatGPT
**Entry Point**: Home page
**Frequency**: Every visit (most common flow)

#### Happy Path

1. **Page: Home (`/`)**
   - Elements: Header (logo, nav, search bar, dark mode toggle), Hero section, Post grid (16 cards), Pagination
   - User Action: Scrolls through post cards
   - System: Server-side renders latest posts, sorted by publishedAt DESC

2. **User Action**: Clicks on a post card
   - Trigger: Navigate to `/post/[slug]`

3. **Page: Post Detail (`/post/[slug]`)**
   - Elements: Post title, Featured images carousel/gallery, Category badges, Author name, Publish date, Multiple prompt accordion blocks (collapsed by default), Related posts section, Favorite button
   - User Action: Clicks "View Prompt" on a prompt block
   - System: Accordion expands to reveal full prompt text

4. **User Action**: Clicks "Copy" button on the expanded prompt
   - System: Copies prompt text to clipboard via Clipboard API
   - System: Shows toast notification "Copied to clipboard!" (2 seconds)

5. **User Action**: Clicks "Open in Gemini" or "Open in ChatGPT" button
   - System: Opens `https://gemini.google.com/` or `https://chat.openai.com/` in new tab

6. **Success State**: User has the prompt on their clipboard and the AI tool open

#### Error States

- **Post Not Found (404)**
  - Display: Custom 404 page with message "This prompt was not found"
  - Actions: Search bar, link to home, popular categories list

- **Clipboard API Fails**
  - Display: Fallback -- select all text in the prompt block, show "Press Ctrl+C to copy"
  - Action: User manually copies

- **Images Fail to Load**
  - Display: Placeholder image with alt text
  - Action: No user action needed; page remains functional

#### Edge Cases
- User navigates back from post detail -- home page preserves scroll position
- Very long prompt text -- scrollable container with max-height
- Post has no prompts (data issue) -- show "No prompts available for this post"

#### Exit Points
- Success: User leaves to AI tool (new tab)
- Browse more: User clicks "Related Posts" or navigates back
- Abandonment: User closes tab

---

### Flow 2: Search for Prompts

**Goal**: Find prompts matching a specific keyword or theme
**Entry Point**: Search bar (available on every page in header)
**Frequency**: 20%+ of visits

#### Happy Path

1. **Any Page: Header Search Bar**
   - Elements: Search input with magnifying glass icon, placeholder "Search prompts..."
   - User Action: Types a search query (e.g., "Valentine's Day")
   - System: Debounces input (300ms delay)

2. **System Action**: After 300ms of no typing
   - Navigates to `/search?q=valentine's+day`

3. **Page: Search Results (`/search?q=...`)**
   - Elements: Search input (pre-filled), Result count ("Found 5 prompts"), Post cards grid (same layout as home), Pagination if > 16 results
   - User Action: Clicks on a result card
   - Trigger: Navigate to `/post/[slug]`

4. **Success State**: User finds relevant prompts

#### Error States

- **No Results Found**
  - Display: "No prompts found for '[query]'" with illustration
  - Actions: "Try different keywords" suggestion, Popular categories links, Clear search button

- **Search Service Error**
  - Display: "Search is temporarily unavailable. Please try again."
  - Action: Retry button, browse categories as fallback

#### Edge Cases
- Empty search query -- redirect to home page
- Very long query (100+ chars) -- truncate to 200 chars, still search
- Special characters in query -- sanitized before DB query
- User types very fast -- debounce ensures only final query fires

---

### Flow 3: Browse by Category

**Goal**: View all prompts in a specific category
**Entry Point**: Category links in header nav, post cards, or sidebar
**Frequency**: 30%+ of visits

#### Happy Path

1. **Any Page: Navigation**
   - Elements: Header nav shows main categories (Latest, Boys Prompt, Girls Prompt), More categories in dropdown/sidebar
   - User Action: Clicks "Boys Prompt" in navigation
   - Trigger: Navigate to `/category/boys-prompt`

2. **Page: Category Listing (`/category/[slug]`)**
   - Elements: Category title ("Boys Prompt"), Category description, Post grid (same layout), Pagination, Breadcrumb (Home > Boys Prompt)
   - User Action: Scrolls and clicks a post card
   - Trigger: Navigate to `/post/[slug]`

#### Error States

- **Category Not Found**
  - Display: 404 page with "Category not found"
  - Actions: Link to all categories, home page link

- **Empty Category (No Posts)**
  - Display: "No prompts in this category yet. Check back soon!"
  - Actions: Browse other categories links

---

### Flow 4: Save and View Favorites

**Goal**: Bookmark prompts for later and view them on a dedicated page
**Entry Point**: Heart icon on post cards or post detail page
**Frequency**: 15%+ of returning visitors

#### Happy Path

1. **Any Post Card or Post Detail Page**
   - Elements: Heart/bookmark icon (outline = not favorited, filled = favorited)
   - User Action: Clicks the heart icon on a post card
   - System: Toggles favorite state, saves post ID to localStorage, heart icon fills in with animation

2. **User Action**: Navigates to `/favorites` (link in header or footer)

3. **Page: Favorites (`/favorites`)**
   - Elements: "Your Favorites" title, Grid of favorited post cards, "Clear All" button
   - User Action: Clicks a favorite post card to view it, or clicks heart again to remove

#### Error States

- **localStorage Unavailable (Private/Incognito)**
  - Display: Banner "Favorites are not available in private browsing mode"
  - Action: Favorites button hidden or shows tooltip

- **No Favorites Saved**
  - Display: Empty state illustration, "No favorites yet. Browse prompts and tap the heart to save."
  - Actions: "Browse Prompts" CTA button leading to home

#### Edge Cases
- User has 100+ favorites -- paginate favorites page (or virtual scroll)
- Favorited post is deleted from DB -- hide from favorites list gracefully
- Different browser/device -- favorites don't sync (localStorage is local)

---

### Flow 5: Toggle Dark Mode

**Goal**: Switch between light and dark themes
**Entry Point**: Theme toggle in header
**Frequency**: Once per session for 30%+ of users

#### Happy Path

1. **Any Page: Header**
   - Elements: Sun icon (light mode active) or Moon icon (dark mode active)
   - User Action: Clicks toggle
   - System: Instantly switches theme via Tailwind `dark:` classes, saves preference to localStorage

2. **On Next Visit**
   - System: Reads localStorage preference, applies theme before first paint (no FOUC)
   - If no preference saved: reads `prefers-color-scheme` system setting

#### Edge Cases
- System preference changes while site is open -- does not auto-switch (user's explicit choice overrides)
- JavaScript disabled -- defaults to light mode (CSS fallback)

---

### Flow 6: Admin - Create a New Post

**Goal**: Publish an original prompt post
**Entry Point**: `/admin` (direct URL navigation -- this route is completely hidden from public users; there are NO links to it anywhere on the public website)
**Frequency**: A few times per week

#### Happy Path

1. **Page: Admin Login (`/admin`)**
   - Elements: Password input field, "Login" button
   - NOTE: This page is only reachable by manually typing `/admin` in the browser URL bar. There are no visible links, buttons, or references to the admin panel on ANY public page (header, footer, sidebar, etc.)
   - System: If already authenticated (session cookie), skip to dashboard
   - User Action: Enters admin password, clicks "Login"
   - System: Validates password against environment variable hash, sets session cookie

2. **Page: Admin Dashboard (`/admin`)**
   - Elements: Stats cards (total posts, total categories, last scrape date), Quick actions ("New Post", "Trigger Scrape"), Recent posts table
   - User Action: Clicks "New Post"

3. **Page: Post Editor (`/admin/posts/new`)**
   - Elements: Title input, Category multi-select dropdown, Featured image URL input (or upload), Rich text editor for content/description, Dynamic "Add Prompt" sections (add/remove prompt text areas), Publish/Draft toggle, "Save" button
   - User Action: Fills in all fields, clicks "Publish"
   - System: Validates inputs, generates slug from title, saves to database

4. **System Response**: Redirect to post list with success toast "Post published successfully!"

5. **Verification**: New post appears on the public home page

#### Error States

- **Wrong Password**
  - Display: "Invalid password. Please try again."
  - Action: Clear password field, allow retry
  - Security: Rate limit to 5 attempts per 15 minutes

- **Validation Error**
  - Display: Inline errors on invalid fields (e.g., "Title is required")
  - Action: User corrects and resubmits

- **Duplicate Slug**
  - System: Auto-appends number (e.g., `post-title-2`)
  - Display: Shows generated slug for confirmation

- **Session Expired**
  - Display: Redirect to login page
  - Action: Form data preserved in localStorage for recovery after re-login

#### Edge Cases
- Admin adds 10+ prompts to a single post -- scrollable prompt section
- Admin navigates away without saving -- "Unsaved changes" confirmation dialog
- Image URL is invalid -- show broken image indicator, allow correction

---

### Flow 7: Admin - Trigger Manual Scrape

**Goal**: Run the scraper on-demand to fetch latest content
**Entry Point**: Admin dashboard or scraper page
**Frequency**: As needed (weekly automated, occasionally manual)

#### Happy Path

1. **Page: Admin Scraper (`/admin/scraper`)**
   - Elements: "Start Scrape" button, Last scrape timestamp, Scrape history table (date, posts found, errors), Status indicator
   - User Action: Clicks "Start Scrape"
   - System: Calls POST /api/admin/scrape, button changes to "Scraping..." with spinner

2. **System**: Runs scraper process
   - Displays real-time status: "Crawling page 1/22...", "Found 3 new posts..."

3. **Completion**: 
   - Display: "Scrape complete. 5 new posts added. 0 errors."
   - Scrape history table updated

#### Error States

- **Scrape Already Running**
  - Display: "A scrape is already in progress. Please wait."
  - Action: Button disabled

- **Source Site Unreachable**
  - Display: "Could not reach source site. Please try again later."
  - Action: Retry button

---

## 3. Navigation Map

```
Home (/)
├── Post Detail (/post/[slug])
│   ├── Copy Prompt (action)
│   ├── Share to WhatsApp (action)
│   ├── Share to Telegram (action)
│   ├── Open in Gemini (external link)
│   ├── Open in ChatGPT (external link)
│   ├── Toggle Favorite (action)
│   └── Related Posts → Post Detail
├── Category (/category/[slug])
│   └── Post Detail (/post/[slug])
├── Search (/search?q=...)
│   └── Post Detail (/post/[slug])
├── Favorites (/favorites)
│   └── Post Detail (/post/[slug])
├── About (/about)
├── Contact (/contact)
├── Privacy Policy (/privacy)
├── Terms (/terms)
└── Admin (/admin) [password-protected]
    ├── Dashboard (/admin)
    ├── Posts List (/admin/posts)
    │   ├── New Post (/admin/posts/new)
    │   └── Edit Post (/admin/posts/[id])
    └── Scraper (/admin/scraper)
```

### Navigation Rules
- **Header (always visible)**: Logo (links to /), Main categories (Latest, Boys, Girls), Search bar, Dark mode toggle, Favorites icon (with count badge). NO admin link, NO login button.
- **Footer (always visible)**: All categories, About, Contact, Privacy, Terms. NO admin link, NO login button.
- **Admin pages**: Completely hidden from public users. Separate sidebar navigation visible only after admin logs in via the hidden `/admin` route. No public page links or references to admin.
- **Breadcrumbs**: Shown on Post Detail and Category pages (Home > Category > Post Title)
- **Mobile**: Hamburger menu for navigation, sticky header

---

## 4. Screen Inventory

### Screen: Home Page
- **Route**: `/`
- **Access**: Public
- **Purpose**: Show latest prompts, entry point for browsing
- **Key Elements**: Hero banner, Search bar, Post grid (4 columns), Category filter tags, Pagination
- **Actions Available**:
  - Click post card → Post Detail
  - Click category badge → Category page
  - Type in search → Search results
  - Click favorite icon → Toggle favorite
  - Click pagination → Next/previous page
- **State Variants**: Loading (skeleton cards), Loaded (post grid), Error (retry message)

### Screen: Post Detail
- **Route**: `/post/[slug]`
- **Access**: Public
- **Purpose**: View full prompt details, copy and share
- **Key Elements**: Title, Images, Prompt accordions, Copy/Share buttons, Favorite button, Related posts
- **Actions Available**:
  - Expand/collapse prompt → Toggle accordion
  - Copy prompt → Clipboard + toast
  - Share → WhatsApp/Telegram deep link
  - Open in AI tool → New tab
  - Favorite → Toggle + localStorage
- **State Variants**: Loading (skeleton), Loaded (full content), 404 (not found)

### Screen: Category Listing
- **Route**: `/category/[slug]`
- **Access**: Public
- **Purpose**: Browse posts by category
- **Key Elements**: Category header, Post grid, Pagination, Breadcrumb
- **Actions Available**: Same as Home page (click post, favorite, paginate)
- **State Variants**: Loading, Loaded, Empty (no posts), 404 (category not found)

### Screen: Search Results
- **Route**: `/search?q=...`
- **Access**: Public
- **Purpose**: Find prompts by keyword
- **Key Elements**: Search input (pre-filled), Result count, Post grid, Pagination
- **Actions Available**: Refine search, click result, favorite
- **State Variants**: Loading, Results found, No results, Error

### Screen: Favorites
- **Route**: `/favorites`
- **Access**: Public (uses localStorage)
- **Purpose**: View saved/bookmarked prompts
- **Key Elements**: Favorites grid, Clear all button, Post cards with remove option
- **Actions Available**: Click post → detail, remove favorite, clear all
- **State Variants**: Has favorites (grid), Empty (CTA to browse), localStorage unavailable (warning)

### Screen: Admin Login
- **Route**: `/admin` (when not authenticated)
- **Access**: Public (shows login form)
- **Purpose**: Authenticate admin
- **Key Elements**: Password input, Login button
- **Actions Available**: Submit password → Dashboard
- **State Variants**: Default, Loading (submitting), Error (wrong password), Rate limited

### Screen: Admin Dashboard
- **Route**: `/admin`
- **Access**: Admin only
- **Purpose**: Overview and quick actions
- **Key Elements**: Stat cards, Quick action buttons, Recent posts table
- **Actions Available**: New post, trigger scrape, view posts, edit post
- **State Variants**: Loading, Loaded

### Screen: Admin Post Editor
- **Route**: `/admin/posts/new` or `/admin/posts/[id]`
- **Access**: Admin only
- **Purpose**: Create or edit a post
- **Key Elements**: Title input, Category selector, Image input, Prompt text areas (dynamic add/remove), Publish/Draft toggle, Save button
- **Actions Available**: Fill form, add/remove prompts, save, cancel
- **State Variants**: New post (empty form), Edit post (pre-filled), Saving (loading), Saved (success toast), Error (validation messages)

### Screen: Admin Scraper
- **Route**: `/admin/scraper`
- **Access**: Admin only
- **Purpose**: Trigger and monitor scraping
- **Key Elements**: Start scrape button, Status indicator, Scrape history table
- **Actions Available**: Trigger scrape, view history
- **State Variants**: Idle, Scraping (progress), Complete (summary), Error

---

## 5. Decision Points

### Decision: Theme Mode
```
IF localStorage has "theme" key
  THEN apply stored theme ("light" or "dark")
ELSE IF system prefers dark mode (prefers-color-scheme: dark)
  THEN apply dark mode
ELSE
  THEN apply light mode (default)
```

### Decision: Admin Authentication
```
IF request path starts with "/admin"
  AND session cookie is NOT present or expired
  THEN redirect to admin login form
ELSE IF session cookie IS valid
  THEN allow access to admin pages
```

### Decision: Favorites Display
```
IF localStorage has favoritePostIds array
  AND array is NOT empty
  THEN fetch posts by IDs from API
  AND display in favorites grid
ELSE IF localStorage is unavailable (private mode)
  THEN show "Favorites unavailable in private browsing" banner
ELSE
  THEN show empty state with "Browse Prompts" CTA
```

### Decision: Search Behavior
```
IF search query is empty
  THEN show home page (redirect to /)
ELSE IF search query length < 2 characters
  THEN show "Please enter at least 2 characters"
ELSE
  THEN execute full-text search
  IF results > 0
    THEN display results grid with pagination
  ELSE
    THEN show "No results" with category suggestions
```

### Decision: Post Slug Generation
```
IF title generates a slug that already exists in DB
  THEN append "-2" (or next available number)
IF post is scraped (has sourceUrl)
  THEN use slug from source URL
ELSE
  THEN generate from title (lowercase, hyphens, no special chars)
```

---

## 6. Error Handling Flows

### 404 Not Found
- **Display**: Custom 404 page with illustration
- **Message**: "Oops! This page doesn't exist."
- **Actions**: Search bar, "Go Home" button, Popular categories links
- **Log**: Record 404 URLs for fixing broken links

### 500 Server Error
- **Display**: Friendly error page
- **Message**: "Something went wrong on our end. Please try again."
- **Actions**: "Retry" button, "Go Home" link
- **Fallback**: Show cached version if available (ISR)

### Network Offline
- **Display**: Toast banner at top "You are offline. Some features may be unavailable."
- **Actions**: Favorites page still works (localStorage), other pages show cached versions or error

### API Rate Limit (429)
- **Display**: "Too many requests. Please wait a moment."
- **Actions**: Auto-retry after delay shown in Retry-After header

---

## 7. Responsive Behavior

### Mobile (< 640px)
- **Navigation**: Hamburger menu (slide-in drawer from left)
- **Post Grid**: Single column, full-width cards
- **Search**: Full-width search bar below header (tap to expand)
- **Post Detail**: Stacked layout, full-width images, prompts take full width
- **Admin**: Simplified layout, forms are single-column
- **Touch Targets**: Minimum 44x44px for all interactive elements

### Tablet (640px - 1024px)
- **Navigation**: Compact horizontal nav with dropdown for more categories
- **Post Grid**: 2-column grid
- **Post Detail**: Side-by-side images and prompts
- **Admin**: Two-column layout where appropriate

### Desktop (> 1024px)
- **Navigation**: Full horizontal nav bar with all main categories visible
- **Post Grid**: 3-4 column grid
- **Post Detail**: Wide layout with image gallery and prompts side by side
- **Admin**: Full sidebar + content area layout

---

## 8. Animation & Transitions

### Page Transitions
- **Route navigation**: Fade in (200ms, ease-out)
- **Back navigation**: Fade in from cache (instant if ISR cached)

### Micro-interactions
- **Prompt Accordion**: Slide down/up (300ms, ease-in-out) with height animation
- **Copy Button**: Click → icon changes to checkmark (200ms) → reverts after 2s
- **Favorite Heart**: Scale bounce (150ms) on toggle, color fill animation
- **Dark Mode Toggle**: Sun/moon icon rotate transition (300ms)
- **Post Card Hover**: Slight lift with shadow (transform: translateY(-2px), 200ms)
- **Toast Notification**: Slide in from top-right (200ms), auto-dismiss after 3s with fade out

### Loading States
- **Page Load**: Skeleton screens matching card/content layout
- **Search**: Spinner in search input while fetching
- **Admin Scrape**: Pulsing progress indicator
- **Image Load**: Blur-up placeholder (low-res → full-res via Next.js Image)

### Reduced Motion
- **Respect `prefers-reduced-motion`**: Disable all non-essential animations
- **Essential only**: Keep loading spinners and state change indicators
