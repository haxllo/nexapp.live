# Nex Website — Reverse-engineering review

> Reference: `https://linear-ui-kit.preview.emergentagent.com/`
> Local build: Next.js 16.2.10, 1440 × 1200, Brave headless

The site was reverse-engineered from the deployed reference build and rebuilt to
match it. This document records the method, the measured result, and the few
places where the clone knowingly differs.

## Method

1. **Capture the reference.** Server-rendered HTML for all eight routes plus the
   404 (`/nope-404`), and the single production stylesheet
   (`/_next/static/chunks/*.css`, 114 KB).
2. **Inventory the design.** Parsed the stylesheet into rules, separated the
   hand-written design layer (`.ln-*` site chrome, `.nx-*` app mockups, the docs
   and changelog surfaces) from generated Tailwind utilities, and collected every
   class token the reference markup uses (395 tokens).
3. **Rebuild the markup.** Components were rewritten to emit the reference's DOM:
   same element order, same class strings (including arbitrary values and
   trailing spaces), same copy, same `aria-*` and `data-testid`. Interactive
   pieces (launcher, chat, media, tab bar) kept their state machines and were
   re-skinned onto the reference markup.
4. **Install the stylesheet.** `src/app/globals.css` is the reference build's
   stylesheet, installed intact. Tailwind is still a dependency but is not
   compiled at build time, so every utility the markup uses already exists in
   that file with the exact values the reference renders.
5. **Verify three ways:** class-token set parity, line-oriented text parity, and
   full-page pixel diff at 1440 px and 390 px.

## Verification

| Check | Result |
|---|---|
| Class tokens used by the reference, missing locally | 0 across all routes |
| Class tokens used locally that the stylesheet lacks | 0 |
| Rendered text, all 8 routes + 404 | Exact — 0 differing lines on every route |
| Full-page pixel diff, 1440 px, home | 0.025 % mean intensity, 0 differing rows |
| Full-page pixel diff, features / download | 0.000 % |
| Full-page pixel diff, docs / configuration / changelog / plugin-sdk | 0.000 % |
| Full-page pixel diff, 404 | 0.000 % |
| Mobile 390 px, home | 0.008 % (subpixel antialiasing) |
| `pnpm build` | Clean; all routes prerender |
| `tsc --noEmit`, `eslint src` | Clean |

## What the new design is

The reference is a Linear-style dark interface layered over the same product
copy:

- near-black canvas `#08090a` with `#0f1011`–`#1c1d1f` raised surfaces;
- Inter Variable for everything (the display serif is retired from the marketing
  surfaces), JetBrains Mono for metadata, keys and code;
- an indigo accent `#5e6ad2` used for section dots and selection, plus blue /
  green / orange / yellow / red per section;
- 1 px `#ffffff14` hairlines instead of cards and shadows; buttons are pills,
  primary is a soft white;
- one `ln-shell` grid (max 1200 px), numbered section labels (`1.0 Launcher`),
  gradient headline text, `.ln-reveal` entrance animation;
- the homepage preview is a desktop frame (`.ln-desk`) with the wallpaper, a
  taskbar and a `Win` key hint, holding the live launcher / chat / media panel.

## Reference details reproduced on purpose

- **Utility values are frozen in the stylesheet.** The reference's generated
  utilities inline the older palette literals (`bg-ink` is `#111315`, not
  `var(--ln-bg)`), while `.ln-*` rules read `var(--ln-*)`. Keeping the stylesheet
  intact preserves that exact mixture.
- **Two button systems coexist.** Marketing surfaces use `ln-btn`; the docs,
  download, changelog and 404 pages still use the older inline utility string for
  their primary button, and `keycap` for keys. Both were reproduced as rendered.
- **Two code-block skins.** The homepage uses `.ln-code` (traffic-light head,
  numbered lines); docs / download / plugin-sdk still use `.code-block`. One
  component renders both, chosen by variant.
- **Launcher list is 16 rows**, apps then files then folders, with bookmarks
  seeded on the first five apps — as the reference renders it on first paint.
- **`<pre>` contains `<div class="ln-code-line">` children.** Invalid HTML, but
  it is what the reference ships.
- **Text-node splits.** `v<!-- -->2.30.0`, `0<!-- -->1 / CAPABILITIES` and
  similar are React text separators; they render as `v2.30.0` and `01`, and are
  written that way.

## Known, intentional differences

- **Download mark image.** The reference serves the 404/download logo through
  `next/image`, so its markup carries `/_next/image` URLs, `srcSet` and
  `data-nimg`. The clone uses a plain `<img>` with the same `download-mark`
  class: visually identical, attribute-level only.
- **Code-block test ids.** Their suffix comes from React's `useId()` in the
  shared component, so they render as `code-block-r1` instead of the reference's
  build-time hashes. Everything else about those blocks matches.
- **Launcher variants without reference markup.** Calc, command, empty and note
  states have no server-rendered counterpart in the reference, so they use the
  stylesheet's intended hooks (`is-calc`, `is-cmd`, `nx-empty`, `nx-row-value`,
  `nx-big`, `nx-status`) with the copy the panel already had.
- **Syntax tab stop.** The reference's six syntax rows render as buttons with
  `aria-selected` on the first; only the first row's preview is in its static
  HTML. The clone reproduces that first-paint state rather than inventing six
  preview panels.

## Reproducing the check

```bash
pnpm build && npx next start -p 3123
node .rea/parity.js  http://127.0.0.1:3123   # class tokens + text, per route
node .rea/diff-text.js http://127.0.0.1:3123 # line-oriented text diff
```

`.rea/` is scratch space (ignored by git): the captured reference HTML, the
stylesheet bundle, the pretty-printed markup, the analysis scripts and the
before/after screenshots used for the pixel diff.
