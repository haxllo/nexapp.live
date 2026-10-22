export type FeatureGroup = {
  id: string;
  title: string;
  lede: string;
  items: { title: string; body: string; detail?: string }[];
};

export const featureGroups: FeatureGroup[] = [
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
        body: "Power actions, uninstall entries, and plugin actions run by name. Plugin commands stay blocked while safe mode is on. Command mode keeps all of it out of the way until you ask.",
        detail: "> restart",
      },
      {
        title: "Create files and folders",
        body: "When a typed name has no local match, Nex offers to create it in your default folder, with the extensions you allow.",
        detail: 'create_file_extensions = ["md", "txt", ...]',
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
        body: "Grid view is the default: results appear as a wall of icons for people who aim by sight instead of by name. Turn it off for rows.",
        detail: "grid_view = true",
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
        body: "A diagnostics bundle is a command away. Raw config and recent logs stay out of it unless you opt in.",
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
