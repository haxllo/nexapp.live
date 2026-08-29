# Nex Website — Progress

## Stack

- **Next.js 16.2.10** (App Router, Turbopack)
- **React 19.2.4**
- **Tailwind CSS v4.3.3**
- **Motion 12.42.2** (framer-motion successor)
- **TypeScript 5.9.3**
- **pnpm 10.34.3**

## Design System

- **Dark theme** — near-black bg (#0a0a0b), single silver accent (#a8a8b0), neutral mono code (#d4d4dc)
- **Typography** — Geist Sans (display + body), JetBrains Mono (code)
- **Animations** — fade-up, pulse-glow, stagger delays via CSS + Motion library

## Completed

### Pages (8 routes)

| Route | Status | Description |
|-------|--------|-------------|
| `/` | Done | Hero with animated search bar mockup, features preview grid, CTA |
| `/features` | Done | 3-category feature breakdown (Core, Productivity, Performance) |
| `/download` | Done | Binary release, build from source, system requirements, quick start |
| `/docs` | Done | Doc index with quick reference (search syntax, CLI commands) |
| `/docs/getting-started` | Done | Full getting started guide from nex project docs |
| `/docs/configuration` | Done | Full config.toml reference tables from nex project docs |
| `/changelog` | Done | v1.0.0, v1.1.0, v1.1.1 release timeline |
| `/plugin-sdk` | Done | Plugin structure, manifest, interface, build instructions, roadmap |

### Components

| Component | File | Description |
|-----------|------|-------------|
| Header | `src/components/header.tsx` | Sticky nav with logo, links, download CTA |
| Footer | `src/components/footer.tsx` | 4-column footer with links |
| Hero | `src/components/hero.tsx` | Animated hero with search bar mockup, stats |
| FeaturesPreview | `src/components/features-preview.tsx` | 6-card feature grid |
| CTA | `src/components/cta.tsx` | Download + GitHub call-to-action |

### Build

- `pnpm run build` — passes (all static pages generated)
- `pnpm run lint` — pending verification

## To Do

### High Priority

- [x] **Screenshots/images** — Added Nex UI screenshot to hero and features pages
- [ ] **Mobile nav** — Header currently desktop-only, needs hamburger menu for mobile
- [ ] **SEO meta** — Per-page metadata (title, description, OG images)
- [ ] **Favicon** — Copy nex.svg logo to public/

### Medium Priority

- [ ] **Docs sidebar nav** — Left sidebar navigation for docs section
- [ ] **Search** — Add site-wide search (could use Algolia DocSearch or similar)
- [ ] **MDX integration** — Convert docs pages to MDX for easier content management
- [ ] **Blog section** — For announcements and tutorials
- [ ] **Dark/light toggle** — Currently dark-only

### Low Priority

- [ ] **Analytics** — Privacy-respecting analytics (Plausible, Umami)
- [ ] **RSS feed** — For changelog/blog
- [ ] **i18n** — Multi-language support
- [ ] **Accessibility audit** — Full WCAG compliance check

## Commands

```bash
pnpm dev          # Dev server
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # ESLint
```
