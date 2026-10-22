# Nex Website: Progress

## Stack

- **Next.js 16.2.10** (App Router, Turbopack)
- **React 19.2.4**
- **Motion 12.42.2**
- **Phosphor Icons 2.1.10**
- **TypeScript 5.9.3**
- **pnpm 10.34.3**

Tailwind is installed but no longer compiled at build time. `src/app/globals.css` is the reference stylesheet, extracted intact.

## Design system

| Token | Value | Use |
|---|---|---|
| `ink` | `#111315` | page canvas |
| `line` | `#ffffff12` | hairlines |
| `line-2` | `#ffffff25` | stronger rules |
| `paper` | `#f0f3f2` | primary text |
| `muted` | `#a7afaf` | body text |
| `faint` | `#929b9b` | metadata |
| `ember` | `#ff9473` | warm accent, brand period |
| `signal` | `#a8d3c8` | focus, selection, success |
| `cream` | `#e5e9e5` | light text on glass |

- Type: Instrument Sans (UI), JetBrains Mono (metadata, keys, code), Fraunces (display serif).
- Light band: syntax `#e7ede9`. Docs use the same ink canvas with a glass sidebar and ember active states.
- Motion: spring dock selection, materialise on panel switch, pointer-tracked rim. Reduced motion removes the spring.
- Glass: layered `backdrop-filter`, 1px refractive rim, inset edge light, contact shadow, opaque fallback in the native app.

## Done

- Rebuilt the homepage against the reference preview: hero, interactive glass showcase, six capabilities, chat and media stories, syntax band, engineering, configuration, four release cards, final CTA.
- Rebuilt the launcher demo from the reference component data: fuzzy scoring, scopes, command mode, calculator, keyboard navigation, bookmarks, detail pane and notes.
- Rebuilt the chat demo (suggestions, composer, context chips, transcript copy, reset) and media demo (three tracks, seek, transport, volume, queue).
- Rebuilt all eight routes with the reference markup, classes, copy, metadata, and assets.
- Self-hosted Instrument Sans, JetBrains Mono, and Fraunces; no Google Fonts request at build or runtime.
- Kept every version label, release summary, asset name, and config key identical to the reference. Text comparison of all eight routes is exact.
- Rebuilt the docs surface in the site's own material: ink canvas, glass sidebar card, ember active nav, hairline tables, warm configuration callout, and 60px Fraunces page titles. The previous light-paper docs looked detached from every other route.
- Added the app-mark watermark to the launcher demo footer: tile outline and butterfly wings in `currentColor`, glass accent at low opacity, tucked into the bottom-right corner behind the detail pane and footer.
- Removed the Nex app mark from the launcher search bar, put a decorative power glyph in its place, and made the Actions control text-only.
- Responsive audit at 360, 390, 768, 1024, and 1440 across docs, home, and the other routes: no horizontal page overflow.
- Production build is clean; all routes prerender.

## Open

- [ ] Dedicated OG/Twitter card (currently the square logo).
- [ ] Search across docs.
- [ ] Privacy-respecting analytics.
- [ ] Release automation so the static release data updates from GitHub.
- [ ] Remove the unused Tailwind dev dependencies once the compiled stylesheet is considered final.

## Commands

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```
