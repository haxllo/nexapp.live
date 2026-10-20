import type { Metadata } from "next";
import Link from "next/link";
import { PageHead, TextLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Fuzzy search, the Everything SDK, Quick Launch, actions, file creation, the query DSL, chat, the glass panel, and the engineering underneath.",
};

type Group = {
  id: string;
  title: string;
  lede: string;
  items: { title: string; body: string; detail?: string }[];
};

const groups: Group[] = [
  {
    id: "search",
    title: "Search",
    lede: "Find what is on the machine, not what an index thinks should be popular.",
    items: [
      {
        title: "Fuzzy matching",
        body: "Typo tolerant matching over app names, file names, and paths. Results are ranked by relevance, recency, and how often you open them.",
        detail: "tantivy",
      },
      {
        title: "Scopes and the query DSL",
        body: "Narrow the pool with a prefix, then keep typing. Combine filters with AND, OR, NOT, or exclude terms with a leading minus.",
        detail: "@apps, @files, kind:pdf, modified:week, -node_modules",
      },
      {
        title: "Everything SDK",
        body: "If Voidtools Everything is running, file results come from its index. If it is not, Nex walks your discovery roots instead.",
        detail: 'file_discovery_backend = "auto"',
      },
      {
        title: "A live index",
        body: "Roots are walked once, then watched. Files that appear while Nex is running show up without a manual reindex.",
      },
    ],
  },
  {
    id: "launch",
    title: "Launch and act",
    lede: "The field is not only for opening things. It can create, calculate, and control.",
    items: [
      {
        title: "Quick Launch",
        body: "Pinned apps appear when the query is empty, in the order you set. Auto-fill can top up the remaining slots from usage.",
        detail: "quick_launch.max_items = 9",
      },
      {
        title: "Actions",
        body: "Power actions, uninstall entries, and plugin commands run by name. Command mode keeps them out of the way until you ask.",
        detail: "> restart",
      },
      {
        title: "Create files and folders",
        body: "When a typed name has no local match, Nex offers to create it in your default folder, with the extensions you allow.",
        detail: "create_file_extensions = [\"md\", \"txt\", ...]",
      },
      {
        title: "Links and web search",
        body: "A bare domain opens in the default browser. Everything else can go to Google, DuckDuckGo, Bing, Brave, Startpage, Ecosia, Yahoo, or a custom template.",
      },
      {
        title: "Calculator",
        body: "Arithmetic evaluates inline with correct precedence and parentheses, so a number is never a reason to leave the keyboard.",
      },
      {
        title: "Clipboard history",
        body: "Recent copies become searchable, with a retention window and patterns that are never captured. Storage is encrypted with DPAPI.",
        detail: "clipboard_retention_minutes = 480",
      },
    ],
  },
  {
    id: "panel",
    title: "The panel",
    lede: "A real window, drawn the way the rest of the desktop is drawn.",
    items: [
      {
        title: "Glass, black, or white",
        body: "The glass layer captures the desktop behind the panel and bends it into the rim, with a contact shadow underneath. Opaque modes skip that work entirely.",
        detail: 'panel_background = "glass" | "black" | "white"',
      },
      {
        title: "Grid or list",
        body: "Rows are the default. Grid view turns results into a wall of icons for people who aim by sight instead of by name.",
        detail: "grid_view = false",
      },
      {
        title: "Keyboard first, mouse welcome",
        body: "Arrows move the selection, Enter opens it, Esc closes the panel. Right-click a result for run as admin, copy path, open folder, pin, or uninstall.",
      },
      {
        title: "Game mode",
        body: "Suppress the hotkey while a fullscreen game is in front, so an accidental key press never pulls you out of a match.",
        detail: "game_mode_enabled = false",
      },
      {
        title: "Chat, in the same panel",
        body: "Attach up to three small text files, include basic PC facts on request, and send the message to your own OpenAI-compatible endpoint.",
      },
      {
        title: "Media and power",
        body: "Play, pause, skip, and set volume, or lock, sleep, restart, and shut down, without opening another window.",
      },
    ],
  },
  {
    id: "engineering",
    title: "Under the hood",
    lede: "Short paths, small surfaces, and no background work on the critical keystroke.",
    items: [
      {
        title: "Rust core, WebView2 face",
        body: "A Rust process owns the hotkey, index, and window. The interface is HTML rendered in WebView2, embedded in the binary and served over a custom protocol.",
      },
      {
        title: "Warm, then released",
        body: "The WebView stays resident for a fast second open, while the icon cache is trimmed on idle. The panel hides before the next state is pushed, so closing does not flash.",
      },
      {
        title: "Updates without nagging",
        body: "Update checks run in the background. A pill appears only when there is something to install, and the app can roll back.",
      },
      {
        title: "Diagnostics you opt into",
        body: "A diagnostics bundle is a command away. Raw config and logs are opt-in, and query text in diagnostics is hashed.",
        detail: "nex --diagnostics-bundle",
      },
      {
        title: "A helper for the hard keys",
        body: "A separate helper owns activation and allowlisted key simulation, which is what makes the single Win key reliable next to the system shell.",
      },
      {
        title: "Local state",
        body: "History, bookmarks, and settings live in SQLite with WAL mode. The config is a plain TOML file that hot-reloads in about a second.",
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="shell pt-14 pb-10 md:pt-20 md:pb-12">
        <PageHead
          title="One field, and everything it reaches."
          lede="Nex is a launcher, so search is the point. What sits behind the search is the rest of the machine: apps, files, actions, arithmetic, links, clipboard, media, and a chat that reads the files you hand it."
        />
      </section>

      <nav
        aria-label="Feature groups"
        className="sticky top-14 z-30 border-y border-line bg-ink/80 backdrop-blur-xl"
      >
        <div className="shell flex gap-6 overflow-x-auto py-3">
          {groups.map((group) => (
            <a
              key={group.id}
              href={`#${group.id}`}
              className="mono whitespace-nowrap text-[10.5px] uppercase tracking-[0.1em] text-faint transition-colors duration-200 hover:text-paper"
            >
              {group.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="shell pb-20">
        {groups.map((group) => (
          <section
            key={group.id}
            id={group.id}
            className="grid scroll-mt-28 gap-6 border-b border-line py-10 lg:grid-cols-12 lg:gap-10 lg:py-12"
          >
            <div className="min-w-0 lg:col-span-3">
              <h2 className="text-[15px] font-medium tracking-[-0.01em] text-paper">
                {group.title}
              </h2>
              <p className="mt-2 max-w-[26ch] text-[12.5px] leading-[1.6] text-faint">
                {group.lede}
              </p>
            </div>

            <div className="grid min-w-0 gap-x-10 md:grid-cols-2 lg:col-span-9">
              {group.items.map((item) => (
                <div key={item.title} className="border-t border-line py-4">
                  <h3 className="text-[13.5px] text-paper">{item.title}</h3>
                  <p className="mt-1.5 max-w-[44ch] text-[13px] leading-[1.65] text-muted">
                    {item.body}
                  </p>
                  {item.detail && (
                    <p className="mono mt-2.5 break-words text-[10.5px] leading-[1.6] text-faint">
                      {item.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-10">
          <TextLink href="/download">Download for Windows</TextLink>
          <TextLink href="/plugin-sdk">Build a plugin</TextLink>
          <Link
            href="/docs/configuration"
            className="text-[13px] text-muted underline decoration-white/20 underline-offset-[3px] transition-colors hover:text-paper"
          >
            Read every setting
          </Link>
        </div>
      </div>
    </>
  );
}
