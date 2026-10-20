# Nex Website: Progress

## Stack

- **Next.js 16.2.10** (App Router, Turbopack)
- **React 19.2.4**
- **Tailwind CSS v4.3.3**
- **Motion 12.42.2**
- **Phosphor Icons 2.1.10**
- **TypeScript 5.9.3**
- **pnpm 10.34.3**

## Design system

| Token | Value | Use |
|---|---|---|
| `ink` | `#0a0b0d` | page canvas |
| `ink-2` | `#0d0f13` | raised surfaces |
| `ink-3` | `#12151a` | panel shells |
| `line` | `rgba(255,255,255,0.08)` | hairlines |
| `paper` | `#edeff2` | primary text |
| `muted` | `#a4abb6` | body text |
| `faint` | `#7a828e` | metadata |
| `signal` | `#9db9ff` | focus, selection, one accent |

- Type: Instrument Sans (display/UI), JetBrains Mono (metadata, keys, code).
- Radii: 8px controls, 10px panels, 12px glass panels, 14px screen frames.
- Motion: CSS reveals driven by IntersectionObserver, 600ms `cubic-bezier(0.22,1,0.36,1)`. Reduced motion shows content immediately.
- Glass: layered `backdrop-filter` (blur 20px, saturate 190%, brightness 0.82), 1px white rim, inset edge light, contact shadow, opaque reduced-transparency fallback.
- No em-dashes, no decorative dots, no gradient glows, no fake UI screenshots.

## Done

- Full redesign of every route; removed the previous Linear-inspired issue-tracker sections that described features Nex does not have.
- Rebuilt the three homepage demos from the real overlay layouts:
  - **Search**: the app list from the actual UI (Riot Client, Brave, Discord, Spotify, Terminal, File Explorer, Task Manager, Settings), brand icons, per-row bookmarks, selection fill, live fuzzy matching, calculator, scopes, and command mode.
  - **Chat**: header with model pill, the "What's on your mind?" empty state, suggestion chips, working composer with send, copy, new-chat, attach-file and PC-facts context chips.
  - **Media**: cover art, progress, transport, volume, working play/pause.
- Liquid Glass treatment over real desktop photographs, with an engineering note explaining `WDA_EXCLUDEFROMCAPTURE` and why the real material cannot be screenshotted.
- Content rewritten from the actual repository, live config, and v2.28.0 release notes (glass panel, chat, Quick Launch, Everything SDK, config keys, plugin manifest schema).
- Shared shell: sticky header with active states and mobile menu, footer with real destinations only, custom 404.
- Docs layout with active sidebar, full configuration reference, real CLI flags, plugin manifest reference.
- Changelog with recent release notes and the complete version list back to 2.0.0.
- SEO: per-page metadata, `sitemap.xml`, `robots.txt`, skip link, focus rings, axe WCAG AA clean on all routes.
- Responsive QA at 360, 390, 768, 1024, and 1440; no horizontal overflow.

## Open

- [ ] Dedicated OG/Twitter card (currently the square logo).
- [ ] Search across docs.
- [ ] Privacy-respecting analytics.
- [ ] Release automation so `src/lib/constants.ts` and the changelog update from GitHub.
- [ ] Swap the Unsplash desktops for official Nex wallpapers if the brand gets a set.

## Commands

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```
