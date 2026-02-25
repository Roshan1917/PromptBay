# Frontend Design System & Guidelines

## 1. Design Principles

### Core Principles

1. **Content-First**: Prompts are the star -- UI stays out of the way and lets content shine
2. **Speed**: Pages load fast, interactions feel instant, no unnecessary animations blocking the user
3. **Clarity**: Every element has a clear purpose; no visual clutter or decorative-only elements
4. **Accessibility**: WCAG 2.1 Level AA compliance; keyboard navigable; proper color contrast
5. **Mobile-First**: Designed for mobile users first (60%+ expected mobile traffic), then enhanced for desktop

### Visual Aesthetic
- **Style**: Modern, clean, minimalist with subtle gradients and soft shadows
- **Mood**: Professional yet approachable; tech-forward but not intimidating
- **Inspiration**: Clean blog/magazine layout with card-based browsing (similar to Pinterest/Dribbble for content discovery)

---

## 2. Design Tokens

### Color Palette

#### Primary Colors (Indigo-Violet Gradient Theme)

```css
--color-primary-50:  #eef2ff;
--color-primary-100: #e0e7ff;
--color-primary-200: #c7d2fe;
--color-primary-300: #a5b4fc;
--color-primary-400: #818cf8;
--color-primary-500: #6366f1;  /* Main brand color */
--color-primary-600: #4f46e5;
--color-primary-700: #4338ca;
--color-primary-800: #3730a3;
--color-primary-900: #312e81;
--color-primary-950: #1e1b4b;
```

#### Neutral Colors

```css
--color-neutral-50:  #f9fafb;
--color-neutral-100: #f3f4f6;
--color-neutral-200: #e5e7eb;
--color-neutral-300: #d1d5db;
--color-neutral-400: #9ca3af;
--color-neutral-500: #6b7280;
--color-neutral-600: #4b5563;
--color-neutral-700: #374151;
--color-neutral-800: #1f2937;
--color-neutral-900: #111827;
--color-neutral-950: #030712;
```

#### Semantic Colors

```css
--color-success-light: #d1fae5;
--color-success:       #10b981;  /* Green - copy success, save success */
--color-success-dark:  #065f46;

--color-warning-light: #fef3c7;
--color-warning:       #f59e0b;  /* Amber - cautions */
--color-warning-dark:  #92400e;

--color-error-light:   #fee2e2;
--color-error:         #ef4444;  /* Red - errors, delete */
--color-error-dark:    #991b1b;

--color-info-light:    #dbeafe;
--color-info:          #3b82f6;  /* Blue - info, links */
--color-info-dark:     #1e40af;
```

#### Dark Mode Colors

```css
/* Dark mode background layers */
--dark-bg-primary:   #0f172a;  /* slate-900 - main background */
--dark-bg-secondary: #1e293b;  /* slate-800 - cards, elevated surfaces */
--dark-bg-tertiary:  #334155;  /* slate-700 - hover states, borders */

/* Dark mode text */
--dark-text-primary:   #f1f5f9;  /* slate-100 */
--dark-text-secondary: #94a3b8;  /* slate-400 */
--dark-text-muted:     #64748b;  /* slate-500 */
```

#### Usage Rules
- **Primary**: CTAs, active navigation, links, focus rings, brand accents
- **Neutral**: Body text, backgrounds, borders, dividers
- **Success**: Copy confirmation toasts, save confirmations
- **Warning**: Deprecated content notices, rate limit warnings
- **Error**: Form validation errors, delete confirmations, scrape failures
- **Info**: Tips, informational banners, external links

---

### Typography

#### Font Families

```css
--font-sans: 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-mono: 'JetBrains Mono', ui-monospace, 'Courier New', monospace;
```

**Loading**: Use `next/font/google` to load Inter with `display: swap` for zero layout shift.

#### Font Sizes

```css
--text-xs:   0.75rem;    /* 12px - labels, badges, timestamps */
--text-sm:   0.875rem;   /* 14px - secondary text, metadata */
--text-base: 1rem;       /* 16px - body text, prompt content */
--text-lg:   1.125rem;   /* 18px - card titles, section headers */
--text-xl:   1.25rem;    /* 20px - page subtitles */
--text-2xl:  1.5rem;     /* 24px - page titles */
--text-3xl:  1.875rem;   /* 30px - hero text */
--text-4xl:  2.25rem;    /* 36px - hero headline (desktop) */
--text-5xl:  3rem;       /* 48px - large hero (desktop only) */
```

#### Font Weights

```css
--font-normal:   400;  /* Body text, descriptions */
--font-medium:   500;  /* UI labels, navigation items */
--font-semibold: 600;  /* Card titles, section headers */
--font-bold:     700;  /* Page titles, hero text, CTAs */
```

#### Line Heights

```css
--leading-tight:   1.25;  /* Headings */
--leading-snug:    1.375; /* Subheadings */
--leading-normal:  1.5;   /* Body text (default) */
--leading-relaxed: 1.625; /* Prompt text content (for readability) */
--leading-loose:   2;     /* Spaced-out content */
```

#### Usage Guidelines
- **Headings (h1-h3)**: Inter, font-bold or font-semibold, leading-tight
- **Body text**: Inter, font-normal, leading-normal, text-base
- **Prompt text**: Inter or JetBrains Mono, font-normal, leading-relaxed, text-base (monospace helps distinguish prompt content)
- **UI labels/badges**: Inter, font-medium, text-xs or text-sm
- **Timestamps/metadata**: Inter, font-normal, text-sm, neutral-500 color

---

### Spacing Scale

```css
--spacing-0:   0;
--spacing-0.5: 0.125rem;  /* 2px */
--spacing-1:   0.25rem;   /* 4px */
--spacing-1.5: 0.375rem;  /* 6px */
--spacing-2:   0.5rem;    /* 8px */
--spacing-3:   0.75rem;   /* 12px */
--spacing-4:   1rem;      /* 16px */
--spacing-5:   1.25rem;   /* 20px */
--spacing-6:   1.5rem;    /* 24px */
--spacing-8:   2rem;      /* 32px */
--spacing-10:  2.5rem;    /* 40px */
--spacing-12:  3rem;      /* 48px */
--spacing-16:  4rem;      /* 64px */
--spacing-20:  5rem;      /* 80px */
--spacing-24:  6rem;      /* 96px */
```

#### Usage Rules
- **Inline spacing** (between icon and text, badge padding): spacing-1 to spacing-2
- **Component internal padding**: spacing-3 to spacing-4
- **Card padding**: spacing-4 to spacing-6
- **Between components**: spacing-4 to spacing-6
- **Between sections**: spacing-8 to spacing-16
- **Page top/bottom padding**: spacing-8 to spacing-12
- **Container horizontal padding**: spacing-4 (mobile), spacing-6 (tablet), spacing-8 (desktop)

---

### Border Radius

```css
--radius-none: 0;
--radius-sm:   0.25rem;   /* 4px - subtle rounding */
--radius-base: 0.375rem;  /* 6px - inputs, small elements */
--radius-md:   0.5rem;    /* 8px - buttons, badges */
--radius-lg:   0.75rem;   /* 12px - cards */
--radius-xl:   1rem;      /* 16px - modals, large cards */
--radius-2xl:  1.5rem;    /* 24px - hero sections */
--radius-full: 9999px;    /* Pills, avatars */
```

#### Usage
- **Buttons**: radius-md
- **Cards**: radius-lg
- **Inputs**: radius-base
- **Badges/Tags**: radius-full (pill shape)
- **Modals**: radius-xl
- **Images in cards**: radius-lg (top) with overflow-hidden on card

---

### Shadows

```css
/* Light mode shadows */
--shadow-sm:   0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-base: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
--shadow-md:   0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
--shadow-lg:   0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
--shadow-xl:   0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);

/* Dark mode shadows (use opacity-based) */
--shadow-dark-sm:   0 1px 2px 0 rgba(0, 0, 0, 0.3);
--shadow-dark-base: 0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px -1px rgba(0, 0, 0, 0.3);
--shadow-dark-md:   0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.3);
```

#### Usage
- **Cards at rest**: shadow-sm
- **Cards on hover**: shadow-md
- **Modals/Dialogs**: shadow-xl
- **Dropdown menus**: shadow-lg
- **Buttons**: no shadow (use background color change instead)

---

## 3. Layout System

### Grid System
- **Container**: max-width: 1280px (80rem), centered with auto margins
- **Columns**: CSS Grid with responsive column counts
- **Gutters**: spacing-4 (16px) mobile, spacing-6 (24px) desktop

### Responsive Breakpoints

```css
--breakpoint-sm:  640px;   /* Small mobile landscape */
--breakpoint-md:  768px;   /* Tablet */
--breakpoint-lg:  1024px;  /* Desktop */
--breakpoint-xl:  1280px;  /* Wide desktop */
--breakpoint-2xl: 1536px;  /* Ultra-wide */
```

### Layout Patterns

#### Page Container

```jsx
<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  {children}
</main>
```

#### Post Grid (Home / Category / Search)

```jsx
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {posts.map(post => <PostCard key={post.id} post={post} />)}
</div>
```

#### Post Detail Layout

```jsx
<article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
  {/* Title + meta */}
  {/* Image gallery */}
  {/* Prompt accordions */}
  {/* Related posts */}
</article>
```

#### Admin Layout (Sidebar + Content)

```jsx
<div className="flex min-h-screen">
  <aside className="hidden w-64 border-r lg:block">{sidebar}</aside>
  <main className="flex-1 p-6">{content}</main>
</div>
```

---

## 4. Component Library

### Post Card

```jsx
<article className="
  group
  overflow-hidden
  rounded-lg
  border border-neutral-200
  bg-white
  shadow-sm
  transition-all duration-200
  hover:-translate-y-0.5 hover:shadow-md
  dark:border-neutral-700 dark:bg-slate-800
">
  {/* Image */}
  <div className="relative aspect-[4/3] overflow-hidden">
    <Image
      src={post.featuredImage}
      alt={post.title}
      fill
      className="object-cover transition-transform duration-300 group-hover:scale-105"
    />
    {/* Favorite button overlay */}
    <button className="absolute top-2 right-2 rounded-full bg-white/80 p-1.5 backdrop-blur-sm
      hover:bg-white dark:bg-slate-900/80 dark:hover:bg-slate-900">
      <Heart className="h-4 w-4" />
    </button>
  </div>

  {/* Content */}
  <div className="p-4">
    {/* Category badges */}
    <div className="mb-2 flex flex-wrap gap-1.5">
      <span className="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700
        dark:bg-primary-900/30 dark:text-primary-300">
        {category.name}
      </span>
    </div>

    {/* Title */}
    <h3 className="line-clamp-2 text-base font-semibold text-neutral-900
      group-hover:text-primary-600 dark:text-neutral-100 dark:group-hover:text-primary-400">
      {post.title}
    </h3>

    {/* Date */}
    <time className="mt-2 block text-xs text-neutral-500 dark:text-neutral-400">
      {formattedDate}
    </time>
  </div>
</article>
```

### Buttons

#### Primary Button

```jsx
<button className="
  inline-flex items-center justify-center gap-2
  rounded-md
  bg-primary-600 px-4 py-2.5
  text-sm font-medium text-white
  shadow-sm
  transition-colors duration-200
  hover:bg-primary-700
  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
  disabled:cursor-not-allowed disabled:opacity-50
  dark:bg-primary-500 dark:hover:bg-primary-600
  dark:focus:ring-offset-slate-900
">
  Button Text
</button>
```

#### Secondary Button

```jsx
<button className="
  inline-flex items-center justify-center gap-2
  rounded-md
  border border-neutral-300 bg-white px-4 py-2.5
  text-sm font-medium text-neutral-700
  shadow-sm
  transition-colors duration-200
  hover:bg-neutral-50
  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
  dark:border-neutral-600 dark:bg-slate-800 dark:text-neutral-200
  dark:hover:bg-slate-700
">
  Button Text
</button>
```

#### Ghost Button

```jsx
<button className="
  inline-flex items-center justify-center gap-2
  rounded-md px-4 py-2.5
  text-sm font-medium text-neutral-600
  transition-colors duration-200
  hover:bg-neutral-100 hover:text-neutral-900
  dark:text-neutral-400 dark:hover:bg-slate-800 dark:hover:text-neutral-100
">
  Button Text
</button>
```

#### Icon Button (Copy, Share, Favorite)

```jsx
<button className="
  inline-flex items-center justify-center
  rounded-full p-2
  text-neutral-500
  transition-colors duration-200
  hover:bg-neutral-100 hover:text-neutral-700
  focus:outline-none focus:ring-2 focus:ring-primary-500
  dark:text-neutral-400 dark:hover:bg-slate-700 dark:hover:text-neutral-200
"
  aria-label="Copy to clipboard"
>
  <Copy className="h-5 w-5" />
</button>
```

#### Button Sizes
- **Small**: `px-3 py-1.5 text-xs`
- **Medium**: `px-4 py-2.5 text-sm` (default)
- **Large**: `px-6 py-3 text-base`

---

### Prompt Accordion Block

```jsx
<div className="
  overflow-hidden
  rounded-lg
  border border-neutral-200
  bg-neutral-50
  dark:border-neutral-700 dark:bg-slate-800/50
">
  {/* Header (always visible) */}
  <button
    onClick={toggleExpand}
    className="
      flex w-full items-center justify-between
      px-4 py-3
      text-left text-sm font-medium text-neutral-700
      transition-colors hover:bg-neutral-100
      dark:text-neutral-300 dark:hover:bg-slate-700
    "
  >
    <span>Prompt {index + 1}</span>
    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
  </button>

  {/* Expandable content */}
  {expanded && (
    <div className="border-t border-neutral-200 dark:border-neutral-700">
      {/* Prompt text */}
      <pre className="
        whitespace-pre-wrap break-words
        p-4
        font-mono text-sm leading-relaxed
        text-neutral-800
        dark:text-neutral-200
      ">
        {promptText}
      </pre>

      {/* Action buttons */}
      <div className="flex items-center gap-2 border-t border-neutral-200 px-4 py-2
        dark:border-neutral-700">
        <CopyButton text={promptText} />
        <ShareWhatsAppButton text={promptText} />
        <ShareTelegramButton text={promptText} />
        <a href="https://gemini.google.com/" target="_blank"
          className="ml-auto text-xs text-primary-600 hover:underline dark:text-primary-400">
          Open in Gemini
        </a>
        <a href="https://chat.openai.com/" target="_blank"
          className="text-xs text-primary-600 hover:underline dark:text-primary-400">
          Open in ChatGPT
        </a>
      </div>
    </div>
  )}
</div>
```

---

### Search Bar

```jsx
<div className="relative">
  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
  <input
    type="search"
    placeholder="Search prompts..."
    className="
      w-full rounded-full
      border border-neutral-300 bg-white
      py-2 pl-10 pr-4
      text-sm text-neutral-900
      placeholder:text-neutral-400
      transition-colors
      focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20
      dark:border-neutral-600 dark:bg-slate-800 dark:text-neutral-100
      dark:placeholder:text-neutral-500
      dark:focus:border-primary-400
    "
  />
</div>
```

---

### Header / Navigation

```jsx
<header className="
  sticky top-0 z-50
  border-b border-neutral-200
  bg-white/80 backdrop-blur-md
  dark:border-neutral-800 dark:bg-slate-900/80
">
  <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
    {/* Logo */}
    <a href="/" className="text-xl font-bold text-primary-600 dark:text-primary-400">
      AI Prompt Hub
    </a>

    {/* Desktop Nav */}
    <nav className="hidden items-center gap-1 md:flex">
      <a className="rounded-md px-3 py-2 text-sm font-medium text-neutral-600
        hover:bg-neutral-100 hover:text-neutral-900
        dark:text-neutral-300 dark:hover:bg-slate-800 dark:hover:text-white">
        Latest
      </a>
      {/* More nav items... */}
    </nav>

    {/* Right side: Search + Dark mode + Favorites + Mobile menu */}
    <div className="flex items-center gap-2">
      <SearchBar />
      <ThemeToggle />
      <FavoritesLink />
      <MobileMenuButton className="md:hidden" />
    </div>
  </div>
</header>
```

---

### Pagination

```jsx
<nav className="flex items-center justify-center gap-1 py-8" aria-label="Pagination">
  <a className="
    inline-flex items-center gap-1
    rounded-md px-3 py-2
    text-sm font-medium text-neutral-500
    hover:bg-neutral-100
    disabled:cursor-not-allowed disabled:opacity-50
    dark:text-neutral-400 dark:hover:bg-slate-800
  ">
    <ChevronLeft className="h-4 w-4" /> Previous
  </a>

  {/* Page numbers */}
  <a className="
    rounded-md px-3 py-2
    text-sm font-medium
    bg-primary-600 text-white
    dark:bg-primary-500
  ">1</a>
  <a className="
    rounded-md px-3 py-2
    text-sm font-medium text-neutral-600
    hover:bg-neutral-100
    dark:text-neutral-300 dark:hover:bg-slate-800
  ">2</a>

  <a className="
    inline-flex items-center gap-1
    rounded-md px-3 py-2
    text-sm font-medium text-neutral-500
    hover:bg-neutral-100
    dark:text-neutral-400 dark:hover:bg-slate-800
  ">
    Next <ChevronRight className="h-4 w-4" />
  </a>
</nav>
```

---

### Toast Notifications (Sonner)

```jsx
// In root layout
<Toaster
  position="top-right"
  richColors
  toastOptions={{
    className: 'dark:bg-slate-800 dark:text-neutral-100 dark:border-neutral-700',
    duration: 3000,
  }}
/>

// Usage
import { toast } from 'sonner';
toast.success('Copied to clipboard!');
toast.error('Failed to copy. Please try manually.');
```

---

## 5. Accessibility Guidelines

### WCAG 2.1 Level AA Requirements

#### Color Contrast
- **Normal text (< 18pt)**: 4.5:1 minimum contrast ratio
- **Large text (18pt+ or 14pt bold)**: 3:1 minimum
- **UI components and graphics**: 3:1 minimum
- **Primary-600 (#4f46e5) on white**: 7.2:1 ratio (passes AAA)
- **Neutral-500 (#6b7280) on white**: 4.6:1 ratio (passes AA)

#### Keyboard Navigation
- All interactive elements reachable via Tab
- Focus indicators: 2px ring with primary-500 color and offset
- Escape closes modals and dropdowns
- Enter/Space activates buttons
- Arrow keys navigate within menus and accordions

#### Screen Readers
- Use semantic HTML: `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`
- `alt` text on all images (post title as alt for featured images)
- `aria-label` on icon-only buttons ("Copy to clipboard", "Toggle dark mode")
- `aria-expanded` on accordion triggers
- `role="alert"` on toast notifications
- Skip-to-content link as first focusable element

#### Forms
- `<label>` associated with every input via `htmlFor`/`id`
- Error messages linked via `aria-describedby`
- Required fields marked with `aria-required="true"`
- Form validation errors announced to screen readers

---

## 6. Animation Guidelines

### Transitions

```css
/* Default for color/background changes */
transition-property: color, background-color, border-color;
transition-duration: 200ms;
transition-timing-function: ease-in-out;

/* For transforms (hover lift, scale) */
transition-property: transform, box-shadow;
transition-duration: 200ms;
transition-timing-function: ease-out;

/* For accordion expand/collapse */
transition-property: height, opacity;
transition-duration: 300ms;
transition-timing-function: ease-in-out;
```

### Specific Animations
- **Card hover lift**: `transform: translateY(-2px)` + shadow-md (200ms)
- **Favorite heart**: `transform: scale(1.2)` then back (150ms spring)
- **Copy success**: Icon swaps from Copy to Check with fade (200ms)
- **Dark mode toggle**: Icon rotates 180deg (300ms)
- **Page skeleton**: `animate-pulse` on placeholder blocks
- **Toast**: Slide in from right (200ms), auto-fade out after 3s

### Usage Rules
- Keep all animations under 300ms
- Use `ease-in-out` for most, `ease-out` for entrances
- Only animate `transform` and `opacity` for 60fps performance
- Respect `prefers-reduced-motion`: disable decorative animations

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 7. Icon System

### Icon Library
- **Library**: Lucide React (v0.564.0)
- **Default Size**: 20px (h-5 w-5)
- **Stroke Width**: 2px (default)

### Common Icons Used

| Icon | Usage | Lucide Name |
|------|-------|-------------|
| Search | Search bar | `Search` |
| Copy | Copy prompt button | `Copy` |
| Check | Copy success | `Check` |
| Heart | Favorite (outline) | `Heart` |
| Heart filled | Favorite (active) | `Heart` with fill |
| Share | Share menu | `Share2` |
| Sun | Light mode indicator | `Sun` |
| Moon | Dark mode indicator | `Moon` |
| ChevronDown | Accordion expand | `ChevronDown` |
| ChevronLeft/Right | Pagination | `ChevronLeft`, `ChevronRight` |
| Menu | Mobile hamburger | `Menu` |
| X | Close/dismiss | `X` |
| ExternalLink | Open in Gemini/ChatGPT | `ExternalLink` |
| Bookmark | Alternative to Heart | `Bookmark` |

### Usage

```jsx
import { Search, Copy, Heart } from 'lucide-react';

// Standard icon
<Search className="h-5 w-5 text-neutral-400" />

// Interactive icon (in button)
<button aria-label="Copy to clipboard">
  <Copy className="h-5 w-5" />
</button>

// Small icon (badges, inline)
<span className="inline-flex items-center gap-1">
  <Heart className="h-3.5 w-3.5" /> 12
</span>
```

---

## 8. State Indicators

### Loading States

```jsx
{/* Skeleton card */}
<div className="animate-pulse overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
  <div className="aspect-[4/3] bg-neutral-200 dark:bg-slate-700" />
  <div className="space-y-2 p-4">
    <div className="h-3 w-20 rounded bg-neutral-200 dark:bg-slate-700" />
    <div className="h-4 w-full rounded bg-neutral-200 dark:bg-slate-700" />
    <div className="h-4 w-3/4 rounded bg-neutral-200 dark:bg-slate-700" />
    <div className="h-3 w-24 rounded bg-neutral-200 dark:bg-slate-700" />
  </div>
</div>

{/* Inline spinner */}
<div className="h-5 w-5 animate-spin rounded-full border-2 border-primary-600 border-t-transparent" />
```

### Empty States

```jsx
<div className="flex flex-col items-center justify-center py-16 text-center">
  <SearchX className="mb-4 h-12 w-12 text-neutral-300 dark:text-neutral-600" />
  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
    No prompts found
  </h3>
  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
    Try adjusting your search or browse categories instead.
  </p>
  <a href="/" className="mt-4 inline-flex items-center rounded-md bg-primary-600 px-4 py-2
    text-sm font-medium text-white hover:bg-primary-700">
    Browse All Prompts
  </a>
</div>
```

### Error States

```jsx
<div className="rounded-lg border border-error/30 bg-error-light px-4 py-3
  dark:border-error/20 dark:bg-error/10">
  <div className="flex items-center gap-2">
    <AlertCircle className="h-5 w-5 text-error" />
    <p className="text-sm font-medium text-error-dark dark:text-error">
      Something went wrong
    </p>
  </div>
  <p className="mt-1 text-sm text-error-dark/80 dark:text-error/80">
    Please try again or contact support if the issue persists.
  </p>
</div>
```

---

## 9. Responsive Design

### Mobile-First Approach

All styles start with mobile and scale up using Tailwind breakpoint prefixes:
- Base: Mobile (< 640px)
- `sm:` : 640px+
- `md:` : 768px+
- `lg:` : 1024px+
- `xl:` : 1280px+

### Post Grid Responsiveness

| Breakpoint | Columns | Gap | Card Image |
|------------|---------|-----|------------|
| Base (mobile) | 1 | 16px | aspect-[4/3] |
| sm (640px) | 2 | 16px | aspect-[4/3] |
| lg (1024px) | 3 | 24px | aspect-[4/3] |
| xl (1280px) | 4 | 24px | aspect-[4/3] |

### Touch Targets
- Minimum interactive element size: 44x44px
- Add padding to small elements to meet minimum
- Ensure adequate spacing between targets (min 8px gap)

---

## 10. Performance Guidelines

### Image Optimization
- Always use Next.js `<Image>` component
- Provide explicit `width` and `height` to prevent layout shift
- Use `priority` for above-the-fold images (first 4 post cards)
- Set `loading="lazy"` for below-the-fold images (default in Next.js)
- Use `sizes` prop for responsive image loading:
  ```jsx
  <Image sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
  ```

### Code Splitting
- Use `next/dynamic` for admin panel components (not loaded for public users)
- Lazy load modals and dropdown menus
- Keep page components lean; extract heavy logic to utilities

### Critical CSS
- Tailwind v4 automatically purges unused styles
- Keep `globals.css` minimal (only Tailwind imports + custom properties)

---

## 11. Browser Support

### Supported Browsers
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Samsung Internet (last 2 versions)

### Progressive Enhancement
- Core content (prompts) readable without JavaScript (SSR)
- Interactive features (copy, search-as-you-type, favorites) require JavaScript
- Images have proper alt text fallbacks
- Dark mode falls back to light if JS disabled

---

## 12. Dark Mode Implementation

### Strategy
- Use Tailwind's `class` strategy (add `dark` class to `<html>`)
- Persist preference in `localStorage` key `theme`
- Read preference in a script tag in `<head>` (before paint) to prevent FOUC

### Head Script (FOUC Prevention)

```jsx
// In layout.tsx <head>
<script dangerouslySetInnerHTML={{ __html: `
  (function() {
    var theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  })();
`}} />
```

### Every Component Must Have Dark Variants
- Background: `bg-white` → `dark:bg-slate-800` or `dark:bg-slate-900`
- Text: `text-neutral-900` → `dark:text-neutral-100`
- Borders: `border-neutral-200` → `dark:border-neutral-700`
- Hover states: `hover:bg-neutral-100` → `dark:hover:bg-slate-700`
