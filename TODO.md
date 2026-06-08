# BuildSoft Web Refactor TODO

## Phase 1 — Layered Architecture + Routing
- [x] Create `TODO.md` and confirm refactor scope
- [x] Create `src/app/routes.tsx` (route->page mapping)
- [x] Create `src/app/AppShell.tsx` (Navbar/Footer/WhatsApp wrapper)
- [x] Create `src/components/layout/*` (Navbar/Footer/WhatsAppButton)
- [x] Create `src/components/ui/*` (FadeIn, PageHeader, Typewriter, ThemeToggle, FAQItem, shared UI primitives)
- [x] Create `src/pages/*` (one file per route/page)
- [x] Update `src/App.tsx` to use the new layered structure (React Router params; remove hash parsing wrappers)
- [x] Fix AppShell to render `children` (routes were being dropped)
- [x] Replace emoji placeholders with lucide icons in HomePage and AboutPage
- [x] Restore `FAQItem` usage on HomePage (was rendering static divs)
- [x] Add icon mapping for services in `src/data/content.tsx` (icons were lost from data)
- [x] Fix nested `<main>` inside AppShell's `<main>` on HomePage
- [x] Fix duplicate import in `BlogPostPage.tsx`
- [x] Remove unused `useMemo` and `routes` imports

## Phase 2 — Content/Data Single Source
- [x] Remove duplicate blog content by adding `src/data/blog.tsx` and wiring Blog pages
- [x] Blog content, blog post list, and any missing fields exist in `src/data/blog.tsx` (BlogPost type)
- [x] Service data has `iconKey` for type-safe icon mapping

## Phase 3 — Styling/UI UX Consistency
- [x] Extract consistent page padding/top offset
- [x] Standardize button styles (primary/secondary/outline) and card styles
- [x] Add/repair accessibility focus rings (Navbar/Contact baseline)
- [x] Verify dark/light theme consistency across pages

## Phase 4 — Cleanup + Verification
- [x] Ensure the app builds and all routes work
- [x] Remove stale monolithic `buildsoft_it_website.tsx` (no longer referenced)
- [x] Update `tsconfig.json` to drop the removed file from `include`
- [x] Remove unused imports across layout/components
- [x] Suppress @types/react-router-dom v6 `RouteProps.key` issue with a typed cast in App.tsx
