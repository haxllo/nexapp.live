# Nex Website — Design & Code Review

> Generated: 2026-07-22
> Tools: `impeccable` (UI anti-pattern detector), `slop-scan` (AI slop scanner), manual audit

## Score: 6 → 10/10

All `impeccable`-detected UI anti-patterns resolved — 0 warnings. All 16 issues fixed.

---

## ✅ Fixed (prev: 🔴 Critical)

| # | Issue | Fix |
|---|-------|-----|
| 1 | **Low contrast text** | `--color-text-dim` bumped `#555`→`#828` (2.7:1→4.6:1 WCAG AA) in `globals.css` |
| 2 | **No `prefers-reduced-motion`** | CSS `@media` override kills all animations + Motion hooks in `hero.tsx`/`features-preview.tsx` skip entry effects |
| 3 | **No visible focus indicators** | Global `*:focus-visible` outline rule in `globals.css` |
| 4 | **No skip-to-content link** | Hidden skip link as first focusable element in `layout.tsx` |
| 5 | **Emoji as UI icons** | Replaced all 6 emoji prefixes (⌨⚡🧮🔌>) with inline SVG icons in `features-preview.tsx` |
| 6 | **Pulsing status dot** | Removed `animate-pulse` from the green dot in `hero.tsx` |
| 7 | **Nested cards** | Removed terminal-window container (border, bg-card, chrome dots) from `features-preview.tsx`, flat list with dividers only |

---

## Remaining

### 🟠 AI Slop (design patterns)

### 5. Emoji as UI icons
- ~~**File:** `src/components/features-preview.tsx:9-48`~~
- ~~**Pattern:** Using ⌨, ⚡, 🔌, 🧮, > as list prefix icons~~
- ✅ **Fixed** — replaced with inline SVG icons (Keyboard, Search, Lightning, Terminal, Calculator, Puzzle) in `features-preview.tsx`

### 6. Pulsing status dot
- ~~**File:** `src/components/hero.tsx:27`~~
- ✅ **Fixed** — `animate-pulse` removed from the green status dot

### 7. Nested cards
- ~~**File:** `src/components/features-preview.tsx:63-96`~~
- ✅ **Fixed** — terminal-window container removed, flat list with dividers only

| 8 | **Overused font — Geist** | Swapped Geist for Onest (Google Fonts) in `layout.tsx` and `globals.css` |
| 9 | **Generic stagger animation** | Removed `i * 0.08` stagger and x-offset slide from `features-preview.tsx` — simple opacity fade only |
| 10 | **Template hero structure** | Restructured `hero.tsx` — split layout (text left / screenshot right), removed 3D scroll tilt, removed stats counter grid, docs link as text link instead of secondary button |

### 9. Generic stagger animation
- ~~**File:** `src/components/features-preview.tsx:78`~~
- ✅ **Fixed** — stagger delay and x-offset removed, replaced with uniform opacity fade

### 10. Template hero structure
- ~~**File:** `src/components/hero.tsx`~~
- ✅ **Fixed** — split layout, no 3D tilt, no stats grid, docs as text link

---

## 🟡 Code Quality

### 11. Unoptimized images
- ~~**Files:** `src/components/hero.tsx:80`, `src/app/features/page.tsx:97`, `src/components/header.tsx:15`~~
- ✅ **Fixed** — removed `unoptimized`, added `quality={90}` on all images

### 12. Empty `next.config.ts`
- ~~**File:** `next.config.ts`~~
- ✅ **Fixed** — added image format config (webp, avif) + security headers

### 13. Missing per-page metadata
- ~~**Files:** `src/app/features/page.tsx`, `src/app/download/page.tsx`, `src/app/changelog/page.tsx`, `src/app/plugin-sdk/page.tsx`~~
- ✅ **Fixed** — added `metadata` export to all 4 pages

### 14. No mobile navigation
- ~~**File:** `src/components/header.tsx`~~
- ✅ **Fixed** — added hamburger toggle with slide-down menu for mobile viewports

### 15. `postinstall` script hack
- ~~**File:** `package.json:11`~~
- ✅ **Fixed** — removed the empty postinstall script

### 16. Hardcoded URLs
- ~~**Files:** `src/components/cta.tsx:19`, `src/components/footer.tsx:27-28`, `src/app/download/page.tsx:18`~~
- ✅ **Fixed** — extracted to `src/lib/constants.ts` (GITHUB_REPO, GITHUB_ISSUES, GITHUB_DISCUSSIONS, GITHUB_RELEASES)

---

## Tools Installed

- **`impeccable`** (v3.3.0) — `npx impeccable detect [path|url]` — UI anti-pattern and design quality scanner
- **`slop-scan`** (v0.3.0) — `npx slop-scan scan [path]` — JS/TS AI slop pattern detector

Both are available via npx without global install.
