# Nex Website: Progress

## Stack

- **Next.js 16.2.10** (App Router, Turbopack)
- **React 19.2.4**
- **Phosphor Icons 2.1.10**
- **TypeScript 5.9.3**
- **pnpm 10.34.3**

Tailwind is installed but no longer compiled at build time. `src/app/globals.css`
is the reference build's stylesheet, installed intact — every utility the markup
uses is already in it with the exact rendered value.

## Design system

The current design is the Linear-style layer from the `linear-ui-kit` reference
build (see `REVIEW.md`).

| Token | Value | Use |
|---|---|---|
| `--ln-bg` | `#08090a` | page canvas |
| `--ln-bg-1` … `--ln-bg-4` | `#0f1011` – `#1c1d1f` | raised surfaces, panel fills |
| `--ln-text` | `#f7f8f8` | primary text |
| `--ln-text-2` | `#d0d6e0` | secondary text |
| `--ln-text-3` | `#8a8f98` | body copy |
| `--ln-text-4` | `#62666d` | metadata |
| `--ln-line` | `#ffffff14` | hairlines |
| `--ln-accent` | `#5e6ad2` | selection, section dots |
| `--ln-accent-hover` | `#828fff` | links, emphasis |
| `--ln-green` / `--ln-blue` / `--ln-orange` / `--ln-yellow` | `#4cb782` / `#4ea7fc` / `#fc7840` / `#f2c94c` | per-section accents |

- Type: Inter Variable (`public/fonts/InterVariable.woff2`) for UI and display,
  JetBrains Mono for metadata, keys and code, all self-hosted. The display serif
  is retired from the marketing surfaces; `--font-display` now points at Inter.
- Layout: one `.ln-shell` (max 1200 px) grid; sections carry numbered labels
  (`1.0 Launcher`, `2.0 Syntax`, …) with a coloured dot.
- Buttons: `ln-btn` pills — primary soft white, secondary/ghost hairline.
- Surfaces are hairlines and fills, not cards with shadows; the only "material"
  left is the desktop frame (`.ln-desk`) around the live preview.
- Motion: `.ln-reveal` entrance (blur + rise, staggered by `animation-delay`) and
  `.ln-materialize` on panel switch. Reduced motion disables both.
- Docs, download, changelog and 404 keep the older utility-based button and
  `keycap` system, exactly as the reference renders them.

## Done

- Reverse-engineered the reference build: captured all eight routes plus the 404,
  extracted the stylesheet, inventoried 395 class tokens, and rebuilt every
  component to emit the reference DOM.
- New homepage: hero with release pill and gradient headline, live preview frame
  (launcher / chat / media tabs, desktop wallpaper, taskbar, `Win` hint), the
  three-principle block, the six-cell launcher grid, syntax list with sticky
  preview, chat and media splits, engineering stats and stack, numbered TOML
  config block, release feed, closing CTA.
- Re-skinned the interactive panels onto `.nx-*` markup while keeping their
  behaviour: launcher (fuzzy ranking, scopes, `>` command mode, calculator,
  keyboard navigation, bookmarks, detail pane), chat (suggestions, composer,
  attachments, transcript copy, reset) and media (three tracks, seek, transport,
  volume, mute).
- Rebuilt the docs surface, features, changelog, plugin-sdk, download and 404
  pages to the reference markup, wiring content from `src/lib` where the
  reference loops over data.
- Self-hosted Inter Variable; Instrument Sans, JetBrains Mono and Fraunces remain
  in `public/fonts` for the surfaces that still reference them.
- Verified: zero missing class tokens, zero extra class tokens, line-for-line text
  parity on all eight routes, and 0.000 % full-page pixel difference on every
  route except the home page (0.025 %, antialiasing only).
- Removed dead code (`mode-link.tsx`, unused `SectionHeader` / `QuietLink`).
- Production build is clean; all routes prerender.

## Open

- [ ] Dedicated OG/Twitter card (currently the square logo).
- [ ] Search across docs.
- [ ] Privacy-respecting analytics.
- [ ] Release automation so the static release data updates from GitHub.
- [ ] Remove the unused Tailwind dev dependencies once the compiled stylesheet is
      considered final.
- [ ] Prune the retired `.experience` / `.glass-panel` / `.launcher-*` rules that
      still sit in `globals.css` but are no longer referenced.

## Commands

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```
