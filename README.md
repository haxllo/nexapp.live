# nex-website

Marketing site and documentation for [Nex](https://github.com/haxllo/nex), a keyboard-first launcher for Windows.

Live at [nexapp.live](https://www.nexapp.live).

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- Motion 12 (`motion/react`)
- Phosphor icons (CSR in client components, SSR elsewhere)
- TypeScript

Tailwind is not used at build time. The design system in `src/app/globals.css` is the compiled stylesheet from the reference build, kept intact so the layout and material match; the theme tokens sit at the top of the file, and later overrides apply the dark docs surface, the launcher watermark, and the launcher changes.

## Design system

- **Canvas** `#111315`, hairlines at 7% and 14% white.
- **Ink and warmth** paper `#f0f3f2`, muted `#a7afaf`, faint `#929b9b`, ember `#ff9473`, signal `#a8d3c8`.
- **Type** Instrument Sans for UI, JetBrains Mono for metadata and code, Fraunces for the display serif. All three are self-hosted from `public/fonts` with the original variable-font subsets.
- **Shape** pill controls, 1px rules, an 18px glass panel with a refractive rim.
- **Docs** the same ink canvas, a glass sidebar card, hairline tables, and ember for the active page. The syntax band is the one light section, kept as a deliberate pause between dark chapters.
- **Launcher footer** a ghosted app-mark watermark from the supplied flat SVG, recoloured to the glass accent and tucked into the bottom-right corner behind the detail pane and footer.
- **Motion** the dock selection springs between tabs, panels materialise on switch, and the panel rim follows the pointer. `prefers-reduced-motion` disables the spring.

## The homepage preview

The glass preview is interactive, not a screenshot:

- **Launcher** eight real app rows, per-row bookmarks, live fuzzy scoring, scopes, command mode, an inline calculator, keyboard navigation, and a result detail pane. The search bar closes with a decorative power glyph; the Actions control is text-only.
- **Chat** empty state, suggestion prompts, working composer, attach and PC-context chips, transcript copy, and reset.
- **Media** album art, seek, transport, volume, and a three-track queue with a running clock.
- The `Start fresh` control remounts all three; the footer links dispatch `nex-mode` to open a specific surface.

The real panel carries `WDA_EXCLUDEFROMCAPTURE`, so no screenshot can show its material. The browser preview recreates it with layered `backdrop-filter`, a 1px rim highlight, an inset edge light, and a contact shadow over the coast photograph.

## Pages

| Route | Purpose |
|---|---|
| `/` | Product page: glass preview, capabilities, chat, media, syntax, engineering, config, releases |
| `/features` | Grouped capability reference |
| `/download` | Release assets, requirements, after-install steps, source build |
| `/docs` | Docs index and quick reference |
| `/docs/getting-started` | Install, first run, syntax, CLI, troubleshooting |
| `/docs/configuration` | Every `config.toml` key with type, default, and range |
| `/changelog` | Detailed timeline plus the full version index back to 1.8.0 |
| `/plugin-sdk` | Manifest schema, action types, safe mode, complete plugin |

## Assets

- `public/nex-coast.jpg` hero photograph, `public/nex-logo.png` orange butterfly mark, `public/album.jpg` Nightfall EP artwork.
- `public/apps/*.svg` brand marks for the launcher preview.
- `src/components/app-mark.tsx` is the launcher footer watermark, built from the supplied flat SVG with the tile as a faint outline and the wings in `currentColor`.
- Fonts in `public/fonts` are the woff2 subsets from the reference build.

## Content

- `src/lib/changelog.ts` holds the ten detailed releases and the earlier version index.
- `src/lib/releases.ts` holds the four homepage cards and the current asset names and sizes.
- `src/lib/settings.ts` is the configuration reference. Keep it in step with `config.toml`.
- `src/lib/features.ts` is the feature page data.
- `src/lib/site.ts` holds the repository, release, and navigation constants.

## Commands

```bash
pnpm dev     # local dev server
pnpm build   # production build
pnpm start   # production server
pnpm lint    # ESLint
```
