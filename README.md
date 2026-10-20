# nex-website

Marketing site and documentation for [Nex](https://github.com/haxllo/nex), a keyboard-first launcher for Windows.

Live at [nexapp.live](https://www.nexapp.live).

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v4
- Motion (the library formerly known as Framer Motion)
- Phosphor icons
- TypeScript

## Design system

The site follows the product's own geometry rather than a generic marketing template.

- **Canvas** `#0a0b0d`, one pale blue signal `#9db9ff` taken from the panel accent. No gradients used as decoration.
- **Type** Instrument Sans for display and UI, JetBrains Mono for metadata, keys, and code.
- **Shape** 8px controls, 10px panels, 12px grids. 1px hairlines instead of card shadows.
- **Motion** IntersectionObserver reveals plus a short hero entrance. Everything is disabled under `prefers-reduced-motion`.
- **Previews** three rendered views of the real overlay: search (live fuzzy search, calculator, scopes, command mode), chat (working composer, context chips), and media (play/pause). They are built from the actual app layout, not invented UI.

## The glass previews

The real panel samples the live desktop through DXGI Desktop Duplication and sets
`WDA_EXCLUDEFROMCAPTURE`, so it is invisible to screenshots, OBS, and Discord by design.
That is why there is no glass screenshot on the site.

The previews instead render the material in the browser with layered
`backdrop-filter` (blur, saturation, brightness), a 1px rim highlight, inset edge light,
and a soft contact shadow over a real desktop photograph. The panel keeps the app's
smoked tint so text stays readable over bright wallpaper, with opaque fallbacks for
browsers without compositing support and for `prefers-reduced-transparency`.

Asset notes:

- Desktop photograph: Unsplash (Moraine Lake), free to use. The media cover is a crop of a second Unsplash photo.
- App icons: Simple Icons (CC0) for brand marks, Phosphor for system utilities.
- Album art: a crop of the lake photograph, not a real release cover.

## Pages

| Route | Purpose |
|---|---|
| `/` | Product page: live panel preview, capabilities, syntax, chat, engineering, config, releases |
| `/features` | Grouped capability reference |
| `/download` | Release assets, requirements, post-install steps, source build |
| `/docs` | Docs index and quick reference |
| `/docs/getting-started` | Install, first run, syntax, CLI, troubleshooting |
| `/docs/configuration` | Every `config.toml` key with type, default, and range |
| `/changelog` | Recent release notes plus the full version list |
| `/plugin-sdk` | Manifest schema, action types, safe mode, example plugin |

## Commands

```bash
pnpm dev     # local dev server
pnpm build   # production build
pnpm start   # production server
pnpm lint    # ESLint
```

## Content

Product facts were taken from the public repository and the v2.28.0 release notes.

- `src/lib/constants.ts` holds the current release, asset names, sizes, and URLs. Update it when a release ships.
- `src/lib/settings.ts` holds the configuration reference. Keep it in sync with `config.toml`.
- The changelog is written from GitHub release notes; the version list is complete back to 2.0.0.
