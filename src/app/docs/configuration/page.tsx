export default function ConfigurationPage() {
  const core = [
    ["hotkey", "string", "Win", "Global hotkey to toggle overlay"],
    ["launch_at_startup", "bool", "true", "Start Nex on Windows sign-in"],
    ["max_results", "u16", "20", "Results per query (5–100)"],
    ["show_files", "bool", "false", "Include files in search results"],
    ["show_folders", "bool", "false", "Include folders in search results"],
    ["search_mode_default", "string", "all", "Default mode: all, apps, files, actions, clipboard"],
  ];

  const search = [
    ["search_dsl_enabled", "bool", "true", "Enable DSL operators (kind:, modified:, AND, OR, NOT)"],
    ["file_discovery_backend", "string", "auto", "auto, everything, walkdir"],
    ["discovery_roots", "string[]", "[user dir]", "Folders scanned for file discovery"],
    ["discovery_exclude_roots", "string[]", "[temp, cache]", "Excluded folders"],
    ["web_search_provider", "string", "google", "google, duckduckgo, bing, brave, startpage, ecosia, yahoo, custom"],
    ["web_search_custom_template", "string", '""', "URL template with {query}"],
  ];

  const clipboard = [
    ["clipboard_enabled", "bool", "false", "Enable clipboard history"],
    ["clipboard_retention_minutes", "u32", "480", "Retention in minutes (5–43200)"],
    ["clipboard_exclude_sensitive_patterns", "string[]", "[password, otp, ...]", "Patterns that prevent capture"],
  ];

  const plugins = [
    ["plugins_enabled", "bool", "true", "Enable plugin system"],
    ["plugins_safe_mode", "bool", "true", "Prevent plugin command execution"],
    ["plugin_paths", "string[]", "[%APPDATA%\\Nex\\plugins]", "Plugin directories"],
  ];

  const perf = [
    ["active_memory_target_mb", "u16", "72", "Active memory target (20–512 MB)"],
    ["idle_cache_trim_ms", "u32", "900", "Cache trim delay after hide (100–10000 ms)"],
    ["ui_warm_release_ms", "u32", "5000", "WebView resident time after hide (500–600000 ms)"],
    ["game_mode_enabled", "bool", "false", "Suppress hotkey during fullscreen games"],
  ];

  const index_ = [
    ["index_max_items_total", "u32", "120000", "Maximum indexed items across all roots"],
    ["index_max_items_per_root", "u32", "40000", "Max per discovery root (≤ total)"],
    ["index_max_items_per_query_seed", "u32", "5000", "Candidate budget per file query"],
  ];

  function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
    return (
      <div className="rounded-lg border border-border bg-bg-card overflow-hidden mb-6">
        <table className="w-full text-sm">
          <thead className="bg-bg-elevated">
            <tr>
              {headers.map((h) => (
                <th key={h} className="px-4 py-3 text-left font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, i) => (
                  <td
                    key={i}
                    className={`px-4 py-3 ${i === 0 ? "font-mono text-code" : "text-text-muted"}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <>
      <h1 className="font-display text-4xl mb-6">Configuration</h1>
      <p className="text-text-muted mb-8">
        Nex uses a TOML configuration file at <code className="font-mono text-sm text-code">%APPDATA%\Nex\config.toml</code>.
        Auto-created on first launch. Most settings hot-reload; hotkey and <code className="font-mono text-sm text-code">index_db_path</code> require restart.
      </p>

      <h2 className="text-2xl font-medium mt-12 mb-4 text-accent">Core</h2>
      <Table headers={["Setting", "Type", "Default", "Description"]} rows={core} />

      <h2 className="text-2xl font-medium mt-12 mb-4 text-accent">Search & Discovery</h2>
      <Table headers={["Setting", "Type", "Default", "Description"]} rows={search} />

      <h2 className="text-2xl font-medium mt-12 mb-4 text-accent">Clipboard</h2>
      <Table headers={["Setting", "Type", "Default", "Description"]} rows={clipboard} />

      <h2 className="text-2xl font-medium mt-12 mb-4 text-accent">Plugins</h2>
      <Table headers={["Setting", "Type", "Default", "Description"]} rows={plugins} />

      <h2 className="text-2xl font-medium mt-12 mb-4 text-accent">Performance</h2>
      <Table headers={["Setting", "Type", "Default", "Description"]} rows={perf} />

      <h2 className="text-2xl font-medium mt-12 mb-4 text-accent">Index</h2>
      <Table headers={["Setting", "Type", "Default", "Description"]} rows={index_} />

      <h2 className="text-2xl font-medium mt-12 mb-4 text-accent">Example</h2>
      <pre className="rounded-md bg-bg p-4 font-mono text-sm overflow-x-auto mb-6 text-text-muted">{`hotkey = "Win"
launch_at_startup = true
max_results = 20
show_files = false
file_discovery_backend = "auto"
web_search_provider = "google"
clipboard_enabled = false
plugins_enabled = true
active_memory_target_mb = 72
game_mode_enabled = false`}</pre>
    </>
  );
}
