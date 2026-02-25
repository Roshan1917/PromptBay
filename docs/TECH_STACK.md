# Technology Stack Documentation

## 1. Stack Overview

**Last Updated**: February 17, 2026
**Version**: 1.0

### Architecture Pattern
- **Type**: Full-stack monolith (Next.js handles frontend + API)
- **Pattern**: Server-Side Rendering (SSR) + Incremental Static Regeneration (ISR) + REST API routes
- **Deployment**: Cloud-hosted (Railway for app, Supabase for database)
- **Scraping**: Standalone Python script, automated via GitHub Actions

### Architecture Justification
A monolithic Next.js approach was chosen over a separate frontend/backend because:
1. Single codebase reduces complexity for a solo developer
2. Built-in API routes eliminate the need for a separate Express/FastAPI server
3. SSR/ISR provides SEO benefits critical for a content site
4. Simplifies deployment (one service on Railway instead of two)

---

## 2. Frontend Stack

### Core Framework
- **Framework**: Next.js
- **Version**: 16.1.6
- **Reason**: Server-side rendering for SEO, App Router for modern patterns, built-in image optimization, API routes, ISR for performance
- **Documentation**: https://nextjs.org/docs
- **License**: MIT

### UI Library
- **Library**: React
- **Version**: 19.2.4
- **Reason**: Component-based architecture, largest ecosystem, server components support
- **Documentation**: https://react.dev
- **License**: MIT

### Styling
- **Framework**: Tailwind CSS
- **Version**: 4.1.18
- **Configuration**: CSS-first configuration (Tailwind v4 uses `@theme` in CSS instead of JS config)
- **Reason**: Utility-first for rapid development, built-in dark mode, responsive by default, zero-runtime CSS
- **Documentation**: https://tailwindcss.com/docs
- **License**: MIT
- **Alternatives Considered**: CSS Modules (rejected: slower development), styled-components (rejected: runtime overhead), shadcn/ui (may add later as component library on top of Tailwind)

### Type Safety
- **Language**: TypeScript
- **Version**: 5.9.3
- **tsconfig**: Strict mode enabled
- **Reason**: Type safety eliminates entire categories of runtime errors, better IDE autocompletion
- **Documentation**: https://www.typescriptlang.org/docs

### Form Handling & Validation
- **Form Library**: React Hook Form
- **Version**: 7.54.2
- **Validation**: Zod 4.3.6
- **Reason**: Minimal re-renders, TypeScript-first validation with Zod, excellent DX
- **Documentation**: https://react-hook-form.com/ and https://zod.dev

### Icons
- **Library**: Lucide React
- **Version**: 0.564.0
- **Reason**: 1500+ icons, tree-shakeable, consistent design, actively maintained
- **Documentation**: https://lucide.dev/guide/packages/lucide-react
- **License**: ISC

### HTTP Client
- **Library**: Built-in `fetch` API (Next.js extends fetch with caching)
- **Version**: Native (no external dependency)
- **Reason**: Next.js enhances native fetch with automatic caching, revalidation, and deduplication. No need for axios in a Next.js project.
- **Alternatives Considered**: Axios (rejected: unnecessary overhead when Next.js enhances fetch natively)

### Toast Notifications
- **Library**: Sonner
- **Version**: 2.0.2
- **Reason**: Lightweight, beautiful defaults, works with Next.js App Router
- **Documentation**: https://sonner.emilkowal.dev
- **License**: MIT

---

## 3. Backend Stack

### Runtime
- **Platform**: Node.js
- **Version**: 22.14.0 LTS
- **Package Manager**: npm 10.x (ships with Node.js 22)
- **Reason**: LTS version ensures long-term support and stability
- **Documentation**: https://nodejs.org/docs/latest-v22.x/api/

### Framework
- **Framework**: Next.js API Routes (App Router)
- **Version**: 16.1.6 (same as frontend -- monolith)
- **Reason**: Eliminates separate backend server; API routes are serverless functions; collocated with frontend code
- **Middleware**: Next.js middleware for admin auth protection

### Database
- **Primary**: PostgreSQL
- **Version**: 15.x (Supabase managed)
- **Provider**: Supabase (free tier)
- **Reason**: ACID compliance, full-text search (tsvector) built-in, JSON support, mature and reliable
- **Documentation**: https://supabase.com/docs/guides/database
- **Free Tier Limits**: 500MB database, 2 projects, unlimited API requests

### ORM
- **Library**: Prisma
- **Version**: 7.4.0
- **Client**: @prisma/client 7.4.0
- **Reason**: Type-safe database access, auto-generated types from schema, easy migrations, visual studio (Prisma Studio)
- **Documentation**: https://www.prisma.io/docs
- **License**: Apache-2.0
- **Alternatives Considered**: Drizzle ORM (rejected: less mature ecosystem), raw SQL (rejected: no type safety)

#### Schema Management
- **Migrations**: Prisma Migrate
- **Seeding**: Prisma seed scripts (TypeScript)
- **Backup Strategy**: Supabase automated daily backups (free tier)

### Authentication (Admin Only)
- **Strategy**: Simple password-based with HTTP-only session cookie
- **Password Hashing**: bcryptjs 3.0.2
- **Session**: HTTP-only cookie with signed token
- **Reason**: Single admin user does not need a full JWT/OAuth system. Simple password + cookie is secure and sufficient.
- **Alternatives Considered**: NextAuth.js (rejected: overkill for single admin user), Supabase Auth (rejected: adds unnecessary dependency for one user)

### File/Image Storage
- **Service**: Supabase Storage
- **Free Tier**: 1GB storage, 2GB bandwidth/month
- **Fallback**: Reference external image URLs from source site (reduces storage usage)
- **Reason**: Integrated with Supabase, free, simple API
- **Documentation**: https://supabase.com/docs/guides/storage

### Full-Text Search
- **Engine**: PostgreSQL tsvector + tsquery (built-in)
- **Reason**: No external search service needed; PostgreSQL full-text search is powerful and free
- **Implementation**: tsvector column on posts table with GIN index, updated via Prisma triggers
- **Alternatives Considered**: Algolia (rejected: paid), Meilisearch (rejected: requires separate hosting)

---

## 4. Scraper Stack

### Language
- **Language**: Python
- **Version**: 3.12.x
- **Reason**: Best ecosystem for web scraping, simple syntax, excellent library support

### Scraping Libraries
- **HTML Parser**: beautifulsoup4 4.12.3
- **HTTP Client**: requests 2.32.3
- **Database Driver**: psycopg2-binary 2.9.9 (PostgreSQL adapter)
- **Reason**: BeautifulSoup is the most widely used HTML parser; requests is the standard HTTP library; psycopg2 is the most reliable PostgreSQL adapter for Python

### Automation
- **Platform**: GitHub Actions
- **Schedule**: Weekly cron (Sundays 2:00 AM UTC)
- **Manual Trigger**: workflow_dispatch enabled
- **Python Setup**: actions/setup-python@v5 with Python 3.12
- **Free Tier**: 2,000 minutes/month (scraper uses ~5-10 min/week = ~40 min/month)

---

## 5. DevOps & Infrastructure

### Version Control
- **System**: Git
- **Platform**: GitHub
- **Branch Strategy**:
  - `main` (production -- deployed automatically)
  - `develop` (staging/development)
  - `feature/*` (new features)
  - `fix/*` (bug fixes)

### CI/CD
- **Platform**: GitHub Actions
- **Workflows**:
  - `ci.yml`: On PR -- lint, type-check, build
  - `deploy.yml`: On merge to main -- deploy to Railway
  - `scrape.yml`: Weekly cron -- run Python scraper

### Hosting
- **Application**: Railway (Starter plan)
  - Free credits: $5/month
  - Auto-deploy from GitHub
  - Custom domain support
  - Documentation: https://docs.railway.app
- **Database**: Supabase (free tier)
  - 500MB storage
  - Automated backups
  - Dashboard UI
  - Documentation: https://supabase.com/docs
- **Domain**: Railway free subdomain initially (e.g., `app-name.up.railway.app`); custom domain when ready to launch (~$10/year)

### Monitoring
- **Error Tracking**: Console logging + Railway logs (free)
- **Analytics**: Vercel Analytics (if migrating later) or simple page view counter in DB
- **Uptime**: Railway provides basic health checks

### Testing
- **Approach**: Manual testing for MVP; automated tests added incrementally
- **Future**: Vitest for unit tests, Playwright for E2E (post-MVP)

---

## 6. Development Tools

### Code Quality
- **Linter**: ESLint 9.x (flat config, ships with Next.js 16)
  - Config: `eslint.config.mjs` (Next.js default)
- **Formatter**: Prettier 3.5.3
  - Config: `.prettierrc`
- **Git Hooks**: None for MVP (add Husky later if needed)

### IDE Recommendations
- **Editor**: VS Code / Cursor
- **Extensions**:
  - ESLint
  - Prettier - Code formatter
  - Tailwind CSS IntelliSense
  - Prisma
  - Python (for scraper development)

---

## 7. Environment Variables

### Required Variables

```bash
# Database (Supabase PostgreSQL)
DATABASE_URL="postgresql://postgres:[password]@db.[project].supabase.co:5432/postgres"
DIRECT_URL="postgresql://postgres:[password]@db.[project].supabase.co:5432/postgres"

# Supabase
NEXT_PUBLIC_SUPABASE_URL="https://[project].supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJ..."
SUPABASE_SERVICE_ROLE_KEY="eyJ..."

# Admin Authentication
ADMIN_PASSWORD_HASH="$2b$12$..."  # bcrypt hash of admin password
ADMIN_SESSION_SECRET="random-32-char-string-here"

# App Configuration
NEXT_PUBLIC_SITE_URL="https://your-domain.com"
NEXT_PUBLIC_SITE_NAME="AI Prompt Hub"
NODE_ENV="development"

# Scraper (used in GitHub Actions secrets)
SCRAPER_DATABASE_URL="postgresql://postgres:[password]@db.[project].supabase.co:5432/postgres"
```

---

## 8. Package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "type-check": "tsc --noEmit",
    "db:migrate": "prisma migrate dev",
    "db:migrate:deploy": "prisma migrate deploy",
    "db:generate": "prisma generate",
    "db:studio": "prisma studio",
    "db:seed": "tsx prisma/seed.ts",
    "db:reset": "prisma migrate reset",
    "postinstall": "prisma generate"
  }
}
```

---

## 9. Dependencies Lock

### Frontend/App Dependencies

```json
{
  "next": "16.1.6",
  "react": "19.2.4",
  "react-dom": "19.2.4",
  "typescript": "5.9.3",
  "tailwindcss": "4.1.18",
  "@tailwindcss/postcss": "4.1.18",
  "@prisma/client": "7.4.0",
  "zod": "4.3.6",
  "react-hook-form": "7.54.2",
  "@hookform/resolvers": "5.0.1",
  "lucide-react": "0.564.0",
  "sonner": "2.0.2",
  "bcryptjs": "3.0.2",
  "slugify": "1.6.6"
}
```

### Dev Dependencies

```json
{
  "prisma": "7.4.0",
  "@types/node": "22.13.4",
  "@types/react": "19.0.10",
  "@types/react-dom": "19.0.4",
  "@types/bcryptjs": "3.0.0",
  "prettier": "3.5.3",
  "prettier-plugin-tailwindcss": "0.6.11",
  "tsx": "4.19.3",
  "postcss": "8.5.3"
}
```

### Python Scraper Dependencies (requirements.txt)

```
beautifulsoup4==4.12.3
requests==2.32.3
psycopg2-binary==2.9.9
python-dotenv==1.0.1
lxml==5.3.0
```

---

## 10. Security Considerations

### Authentication
- Admin password stored as bcrypt hash (12 rounds) in environment variable
- Session cookie: HTTP-only, Secure, SameSite=Strict
- Session expires after 24 hours
- Rate limiting on login: 5 attempts per 15 minutes

### Data Protection
- All database queries through Prisma ORM (SQL injection prevention)
- React's built-in XSS protection (escapes all rendered content)
- Content-Security-Policy headers via Next.js middleware
- HTTPS enforced in production (Railway provides SSL)

### Scraper Security
- Database credentials stored in GitHub Secrets (never in code)
- Scraper respects robots.txt
- Rate limiting between requests (1-2 second delay)
- User-Agent header identifies the bot

### Rate Limiting
- Admin login: 5 attempts per 15 minutes per IP
- Public API: 60 requests per minute per IP
- Admin API: 30 requests per minute per session
- Scrape trigger: 1 per 10 minutes

---

## 11. Version Upgrade Policy

### Major Version Updates
- Review quarterly (or when Next.js releases major version)
- Test thoroughly in development branch first
- Check breaking changes in release notes
- Update all documentation

### Minor/Patch Updates
- Apply monthly for security patches
- Use `npm audit` to check for vulnerabilities
- Update dependencies incrementally (not all at once)

### Breaking Changes
- Document in CHANGELOG.md
- Test full application flow before deploying
- Keep rollback plan (Railway supports instant rollbacks)
