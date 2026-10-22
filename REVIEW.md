# Nex Website — Reverse-engineering review

> Reference: `https://fresh-ux.preview.emergentagent.com/`
> Local build: Next.js 16.2.10, 1440 × 1200, Brave headless

## Baseline comparison

| Check | Result |
|---|---|
| Rendered text, all 8 routes | Exact match (preview vs local, whitespace-normalised) |
| Page height at 1440 px | Identical on 7 routes; configuration matched after adding the final config block |
| Full-page pixel diff, home | 0.18% differing pixels, almost all font antialiasing |
| Full-page pixel diff, secondary routes | 0.00–0.005% |
| Mobile height at 390 px, home | Identical (9552 px) |
| Production build | Clean; all routes prerender |

## Reference bugs fixed in the clone

1. **Configuration page was 822 px short.** The reference ends with an "A complete file" section and a full default `config.toml` snippet. Added verbatim.
2. **Version labels.** The reference renders `v2.30.0`, not `v 2.30.0`. Removed the gap in the hero pill, release cards, changelog timeline, earlier index, download header, and final CTA.
3. **Homepage 2.28.0 summary** is shorter than the changelog entry and starts "The search panel…". Split it from the changelog copy.
4. **Portable zip filename** was `…-x64-zip`; corrected to `…-x64.zip`.
5. **Trailing ellipses** in two release summaries were doubled. Normalised to a single `…`.
6. **Docs contrast.** The reference stylesheet inlines dark-theme colours in its utilities, so `text-paper` rendered white inside the light docs layout. Setting names, group titles, key values, and the syntax link were invisible.
7. **Metadata descriptions** for docs, configuration, changelog, and download now match the reference word for word.

## Requested changes after the first pass

### Docs surface

The reference docs are a light paper island inside an otherwise dark site. They now use the same ink canvas as every other route:

- glass sidebar card with an ember active pill;
- hairline tables and setting groups instead of a paper sheet;
- warm `config.toml` callout with an ember left rule;
- 60px Fraunces page titles, matching features/download/changelog;
- overview cards with the same 1px rim and soft fill as the rest of the site;
- the syntax band remains the single light section, so it still reads as a deliberate pause.

This is an intentional departure from the reference, made on request. It also removes the reference's invisible-text bug at the source.

### Launcher demo

- Removed the Nex app mark from the search bar.
- Placed a decorative power glyph in that position; it has no click handler.
- Kept the Actions control, now text-only, with no leading power icon.

### Launcher footer watermark

- Built `src/components/app-mark.tsx` from the supplied `Vector.svg`.
- The tile is kept as a faint rounded-square outline; the wings are the visible mark.
- Recoloured through `currentColor` to the glass accent, set low opacity, rotated, and tucked into the bottom-right corner behind the detail pane and footer.
- Below 767 px it shrinks slightly; it adds no layout width.

## Verification after the changes

- Rendered text still matches the reference exactly on all eight routes; the docs work changed styling only.
- Docs pages checked at 360, 390, 768, 1024, and 1440 px: no horizontal page overflow. Only the clipped watermark extends past the viewport, inside `overflow: hidden`.
- Launcher interactions unchanged: calculator, command mode, scopes, keyboard navigation, chat send/copy, media skip, reset.
- `pnpm build`, `pnpm exec tsc --noEmit`, and `pnpm lint` pass.

## Remaining differences

- The docs are intentionally dark and no longer match the reference's light-paper layout.
- The launcher and footer carry the requested changes, so home-page pixel parity is no longer the target.
- Reference screenshots below the fold can miss lazy-loaded images (the final CTA mark), in both builds.
- `globals.css` is compiled CSS, not Tailwind source. The reference component CSS comes first; the docs, watermark, and launcher overrides are grouped at the end.
