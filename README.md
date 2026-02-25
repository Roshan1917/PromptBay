# Prompt Bay

A content-driven website that aggregates and showcases AI photo editing prompts for Google Gemini, ChatGPT, Midjourney, and other AI image generators. Black theme with shimmering WebGL shader animations, browse by category, search prompts, save favorites (no login).

---

## What’s in This Project

| Item | Description |
|------|-------------|
| **`docs/`** | Project documentation: PRD, App Flow, Tech Stack, Frontend Guidelines, Backend Structure, Implementation Plan. |
| **`web/`** | Next.js 16 app (React 19, TypeScript, Tailwind CSS). Black + shimmer theme. Public site + API routes + admin panel. |
| **`documentation guide.md`** | Guide used to create the six canonical docs in `docs/`. |
| **`.cursor/`** | Cursor IDE config (e.g. plans). |

### Web App (`web/`)

- **`src/app/`** – App Router pages: home, post detail, category, search, favorites, about, contact, privacy, terms, not-found.
- **`src/components/`** – Layout (Header, Footer), posts (PostCard, PostGrid, Pagination, PromptBlock), UI (ThemeToggle, SearchBar, CopyButton, ShareButtons, FavoriteButton).
- **`src/hooks/`** – `useTheme`, `useFavorites` (localStorage).
- **`src/lib/`** – Utils, mock data.
- **`src/types/`** – TypeScript types.

The app runs on **port 9000** (see below).

---

## Run the App

Development (with hot reload) at **http://localhost:9000**:

```bash
cd D:\gemini\web
npm run dev
```

Production build and run at **http://localhost:9000**:

```bash
cd D:\gemini\web
npm run build
npm start
```

---

## Docs Reference

- **PRD** – `docs/PRD.md` – Features, scope, success criteria.
- **App Flow** – `docs/APP_FLOW.md` – Pages and user flows.
- **Tech Stack** – `docs/TECH_STACK.md` – Versions and dependencies.
- **Frontend Guidelines** – `docs/FRONTEND_GUIDELINES.md` – Design system and components.
- **Backend Structure** – `docs/BACKEND_STRUCTURE.md` – Schema and APIs.
- **Implementation Plan** – `docs/IMPLEMENTATION_PLAN.md` – Step-by-step build order.
