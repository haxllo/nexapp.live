const releases = [
  {
    version: "2.4.2",
    date: "2026-07-10",
    changes: [
      { type: "fixed", text: "White flash on open — quick launch items load into state before Show posted" },
      { type: "fixed", text: "Pulse on open — resize fires before painted, avoiding 60px initial height jump" },
      { type: "fixed", text: "Opacity flash on open — removed opacity 0→1 from row-in animation" },
      { type: "fixed", text: "Body flash on close — window hides before cleared state pushes" },
      { type: "fixed", text: "Divider visible on idle — idle class hides list area until rows render" },
    ],
  },
  {
    version: "2.4.1",
    date: "2026-07-10",
    changes: [
      { type: "changed", text: "WebView stays warm for process lifetime — icon cache only trimmed on idle" },
      { type: "changed", text: "Heap reclaimed on idle via icon cache clear while keeping WebView resident" },
      { type: "changed", text: "README updated with Rust badge, warm-release description" },
    ],
  },
  {
    version: "2.4.0",
    date: "2026-07-04",
    changes: [
      { type: "added", text: "Quick Launch — pinned apps with hybrid model (pins when set, usage-based when empty)" },
      { type: "added", text: "Pinned items appear at top of search results" },
      { type: "changed", text: "Icon extraction uses ExtractIconExW for highest-res (32/48/256px)" },
      { type: "fixed", text: "Overlay not opening — JavaScript regex syntax error prevented WebView ready signal" },
      { type: "fixed", text: "Config format — nested TOML structure for quick_launch, migration from old flat format" },
    ],
  },
  {
    version: "2.3.1",
    date: "2026-07-03",
    changes: [
      { type: "fixed", text: "Shutdown hang — COM STA deadlock fixed via MTA, FileWatcherHandle non-blocking drop" },
      { type: "fixed", text: "Startup unwrap hardened — 5 bare .unwrap() calls replaced with poisoned lock recovery" },
      { type: "perf", text: "Arrow key ~1ms instead of ~20ms — UiCommand::SelectChanged sends lightweight JSON" },
      { type: "perf", text: "Dual PostWebMessageAsJson — state lock hold reduced from ~5ms to ~0.1ms" },
      { type: "perf", text: "Removed backdrop-filter saturate doubling compositor work" },
      { type: "perf", text: "Row-in animation only on initial render, JS debounce 80ms→40ms" },
      { type: "fixed", text: "Persistent icon-prefetch thread replaces per-call thread spawning" },
      { type: "fixed", text: "last_touch unbounded growth — clean_orphaned_touches added" },
    ],
  },
  {
    version: "2.3.0",
    date: "2026-06-22",
    changes: [
      { type: "fixed", text: "Cargo package renamed from nex-launch to nex — CI and build-from-source work again" },
      { type: "fixed", text: "Update script pointing at wrong repo, now defaults to haxllo/nex" },
      { type: "fixed", text: "File watcher self-heals on event storm via incremental resync" },
      { type: "changed", text: "Clipboard history off by default and encrypted at rest with DPAPI" },
      { type: "changed", text: "Launch at startup defaults to true" },
      { type: "changed", text: "Config generation counter clears search worker session on reload" },
    ],
  },
  {
    version: "2.2.2",
    date: "2026-06-22",
    changes: [
      { type: "fixed", text: "Nex not showing in Task Manager startup apps — background default conflict suppressed CLI commands" },
    ],
  },
  {
    version: "2.2.1",
    date: "2026-06-21",
    changes: [
      { type: "fixed", text: "First hotkey after warm-release teardown — spurious Focused events during WebView rebuild dismissed overlay" },
    ],
  },
  {
    version: "2.2.0",
    date: "2026-06-21",
    changes: [
      { type: "fixed", text: "SQLITE_BUSY launch freeze — launch reads from cache, WAL mode + busy timeout added" },
      { type: "fixed", text: "Warm-release hotkey miss — show_pending set before build_webview" },
      { type: "removed", text: "FTS5 search backend removed — Tantivy is sole indexed search backend" },
      { type: "changed", text: "Default hotkey changed to Ctrl+Space" },
      { type: "fixed", text: "Config hot-reload stale in search worker — Arc<RwLock<>> sharing" },
      { type: "fixed", text: "Console flash on launch — CREATE_NO_WINDOW for plugin/explorer spawns" },
      { type: "changed", text: "Diagnostics privacy — raw config/logs opt-in, query text hashed" },
    ],
  },
  {
    version: "2.1.1",
    date: "2026-06-20",
    changes: [
      { type: "fixed", text: "Shutdown hang — OnceLock::clone deep copy hid thread ID from Drop, wrapped in Arc" },
    ],
  },
  {
    version: "2.1.0",
    date: "2026-06-20",
    changes: [
      { type: "perf", text: "Pre-read ALL Tantivy segment files + SQLite DB into OS page cache — disk I/O eliminated from first keystroke" },
      { type: "perf", text: "Icon decode throttle — first 8 sync, rest deferred, show latency cut ~60%" },
      { type: "perf", text: "RwLock replaces Mutex<CoreService> — concurrent reads, no reader contention" },
      { type: "perf", text: "Adaptive debounce — first char instant, rapid chars coalesced at 80ms" },
      { type: "perf", text: "Search cache warmup on overlay show + stale prune off critical path" },
      { type: "fixed", text: "Overlay hang after first indexing — sync_indexes_from_cache short-circuits" },
      { type: "fixed", text: "Blank window on first hotkey — removed panel-in CSS animation causing opacity fade delay" },
      { type: "changed", text: "Crate renamed nex-cli → nex-launch (binary stays nex.exe)" },
    ],
  },
  {
    version: "2.0.0",
    date: "2026-06-18",
    changes: [
      { type: "changed", text: "Complete replacement of Iced/resvg/tiny-skia rendering with WebView2 (wry + tao)" },
      { type: "added", text: "DWM acrylic backdrop with native window shadow — no CSS shadow hacks" },
      { type: "added", text: "Warm-then-release — WebView built at startup, released ~5s after hide" },
      { type: "fixed", text: "Transparent icon — regenerated ico from SVG with true alpha transparency" },
      { type: "fixed", text: "Click-outside-to-dismiss with proper focus grace period" },
    ],
  },
  {
    version: "1.3.0",
    date: "2026-05-28",
    changes: [
      { type: "removed", text: "D2D/DWrite rendering stack removed — GDI+ is now hard requirement" },
      { type: "changed", text: "SpaceMono replaced with Inter as bundled font" },
      { type: "fixed", text: "register_private_fonts was searching Inter directories for SpaceMono filenames" },
      { type: "fixed", text: "All hanging ShellExecuteW tests fixed" },
    ],
  },
  {
    version: "1.2.0",
    date: "2026-05-25",
    changes: [
      { type: "changed", text: "Optimized icon caching with async painting and background refresh" },
      { type: "fixed", text: "Icon cache invalidation on file changes" },
    ],
  },
  {
    version: "1.1.1",
    date: "2026-05-24",
    changes: [
      { type: "changed", text: "Search now fully async — query processing moved to dedicated background thread" },
      { type: "fixed", text: "Overlay no longer freezes during search" },
      { type: "fixed", text: "Thread safety for CoreService with Arc<Mutex<CoreService>>" },
    ],
  },
  {
    version: "1.1.0",
    date: "2026-05-24",
    changes: [
      { type: "added", text: "Everything SDK integration — instant file search via Everything64.dll" },
      { type: "added", text: "Window management — eight preset tile layouts from command palette" },
      { type: "added", text: "Calculator (basic) — inline arithmetic evaluation in search bar" },
      { type: "added", text: "Plugin SDK foundations — JSON manifest loading and validation" },
      { type: "changed", text: "Packaging bundles Everything64.dll, TLS 1.2 enforced" },
    ],
  },
  {
    version: "1.0.1",
    date: "2026-05-19",
    changes: [
      { type: "fixed", text: "Inno Setup silent installation support for winget and package managers" },
      { type: "fixed", text: "PrivilegesRequiredOverridesAllowed uses commandline instead of dialog" },
    ],
  },
  {
    version: "1.0.0",
    date: "2026-05-17",
    changes: [
      { type: "added", text: "Initial stable release — keyboard-first launcher for Windows" },
      { type: "added", text: "Global hotkey (Alt+Space) with customizable shortcut" },
      { type: "added", text: "Fuzzy search via Tantivy full-text search" },
      { type: "added", text: "App discovery from Start Menu and installed apps" },
      { type: "added", text: "File and folder indexing with real-time watching" },
      { type: "added", text: "Clipboard history (optional), plugin support, game mode" },
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      <div className="mb-16">
        <h1 className="font-display text-5xl md:text-6xl mb-6">Changelog</h1>
        <p className="text-xl text-text-muted">
          Release history and version notes.
        </p>
      </div>

      <div className="space-y-12">
        {releases.map((release) => (
          <div key={release.version} className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
            <div className="pl-8">
              <div className="flex items-baseline gap-4 mb-4">
                <h2 className="text-2xl font-medium">v{release.version}</h2>
                <span className="text-sm text-text-dim">{release.date}</span>
              </div>
              <div className="space-y-3">
                {release.changes.map((change, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span
                      className={`mt-1 h-2 w-2 rounded-full flex-shrink-0 ${
                        change.type === "added"
                          ? "bg-code"
                          : change.type === "changed"
                          ? "bg-accent"
                          : change.type === "removed"
                          ? "bg-red-500"
                          : change.type === "perf"
                          ? "bg-yellow-500"
                          : "bg-text-dim"
                      }`}
                    />
                    <div className="flex-1">
                      <span className="text-text-muted">{change.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-border text-center">
        <a
          href="https://github.com/haxllo/nex/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-text-muted hover:text-accent transition-colors"
        >
          View all releases on GitHub →
        </a>
      </div>
    </div>
  );
}
