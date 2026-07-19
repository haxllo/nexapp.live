export default function GettingStartedPage() {
  return (
    <>
      <h1 className="font-display text-4xl mb-6">Getting Started</h1>

      <h2 className="text-2xl font-medium mt-12 mb-4 text-accent">Prerequisites</h2>
      <ul className="space-y-2 mb-6">
        <li className="text-text-muted flex items-start gap-2"><span className="text-code mt-1">•</span>Windows 10 or 11 (64-bit)</li>
        <li className="text-text-muted flex items-start gap-2"><span className="text-code mt-1">•</span>WebView2 Runtime (ships with Windows 11, auto-installed by Nex installer)</li>
        <li className="text-text-muted flex items-start gap-2"><span className="text-code mt-1">•</span>~50-100 MB RAM when idle</li>
        <li className="text-text-muted flex items-start gap-2"><span className="text-code mt-1">•</span>Rust 1.75+ (only if building from source)</li>
      </ul>

      <h2 className="text-2xl font-medium mt-12 mb-4 text-accent">Installation</h2>

      <h3 className="text-lg font-medium mt-8 mb-3">Option 1: Installer (Recommended)</h3>
      <ol className="space-y-2 mb-6">
        <li className="text-text-muted flex items-start gap-2"><span className="text-code mt-1">1.</span>Download the latest release from <a href="https://github.com/haxllo/nex/releases/latest" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">GitHub Releases</a></li>
        <li className="text-text-muted flex items-start gap-2"><span className="text-code mt-1">2.</span>Run the .exe installer and follow the setup wizard</li>
        <li className="text-text-muted flex items-start gap-2"><span className="text-code mt-1">3.</span>Nex starts automatically in the background</li>
      </ol>

      <h3 className="text-lg font-medium mt-8 mb-3">Option 2: Build from Source</h3>
      <pre className="rounded-md bg-bg p-4 font-mono text-sm overflow-x-auto mb-6 text-text-muted">git clone https://github.com/haxllo/nex.git
cd nex
cargo build --release --bin nex</pre>
      <p className="text-text-muted mb-4">Binary at <code className="font-mono text-sm text-code">target/release/nex.exe</code>.</p>

      <h2 className="text-2xl font-medium mt-12 mb-4 text-accent">First Run</h2>
      <p className="text-text-muted mb-4">On first launch, Nex:</p>
      <ol className="space-y-2 mb-6">
        <li className="text-text-muted flex items-start gap-2"><span className="text-code mt-1">1.</span>Creates config directory at <code className="font-mono text-sm text-code">%APPDATA%\Nex\</code></li>
        <li className="text-text-muted flex items-start gap-2"><span className="text-code mt-1">2.</span>Writes default <code className="font-mono text-sm text-code">config.toml</code></li>
        <li className="text-text-muted flex items-start gap-2"><span className="text-code mt-1">3.</span>Initializes SQLite search index</li>
        <li className="text-text-muted flex items-start gap-2"><span className="text-code mt-1">4.</span>Scans Start Menu for installed applications</li>
        <li className="text-text-muted flex items-start gap-2"><span className="text-code mt-1">5.</span>Registers global hotkey (<code className="font-mono text-sm text-code">Ctrl+Space</code> by default)</li>
        <li className="text-text-muted flex items-start gap-2"><span className="text-code mt-1">6.</span>Adds system tray icon</li>
      </ol>
      <p className="text-text-muted mb-4">Verify with <code className="font-mono text-sm text-code">nex --status</code>.</p>

      <h2 className="text-2xl font-medium mt-12 mb-4 text-accent">Your First Search</h2>
      <ol className="space-y-2 mb-6">
        <li className="text-text-muted flex items-start gap-2"><span className="text-code mt-1">1.</span>Press <kbd className="rounded border border-border bg-bg-card px-2 py-0.5 font-mono text-xs">Ctrl+Space</kbd> anywhere</li>
        <li className="text-text-muted flex items-start gap-2"><span className="text-code mt-1">2.</span>Type an app name (e.g., <code className="font-mono text-sm text-code">notepad</code>, <code className="font-mono text-sm text-code">chrome</code>)</li>
        <li className="text-text-muted flex items-start gap-2"><span className="text-code mt-1">3.</span>Press <kbd className="rounded border border-border bg-bg-card px-2 py-0.5 font-mono text-xs">Enter</kbd> to launch</li>
        <li className="text-text-muted flex items-start gap-2"><span className="text-code mt-1">4.</span>Press <kbd className="rounded border border-border bg-bg-card px-2 py-0.5 font-mono text-xs">Esc</kbd> to dismiss</li>
      </ol>

      <h3 className="text-lg font-medium mt-8 mb-3">Search Syntax</h3>
      <div className="rounded-lg border border-border bg-bg-card overflow-hidden mb-6">
        <table className="w-full text-sm">
          <thead className="bg-bg-elevated">
            <tr>
              <th className="px-4 py-3 text-left font-medium">Input</th>
              <th className="px-4 py-3 text-left font-medium">Behavior</th>
              <th className="px-4 py-3 text-left font-medium">Example</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-code">plain text</td>
              <td className="px-4 py-3 text-text-muted">Fuzzy search all items</td>
              <td className="px-4 py-3 text-text-muted"><code className="font-mono text-sm text-code">calc</code></td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-code">{">"}</td>
              <td className="px-4 py-3 text-text-muted">Search actions/commands</td>
              <td className="px-4 py-3 text-text-muted"><code className="font-mono text-sm text-code">{"> shutdown"}</code></td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-code">@mode</td>
              <td className="px-4 py-3 text-text-muted">Switch search mode</td>
              <td className="px-4 py-3 text-text-muted"><code className="font-mono text-sm text-code">@apps</code>, <code className="font-mono text-sm text-code">@files</code></td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-code">kind:...</td>
              <td className="px-4 py-3 text-text-muted">Filter by type (DSL)</td>
              <td className="px-4 py-3 text-text-muted"><code className="font-mono text-sm text-code">kind:file</code>, <code className="font-mono text-sm text-code">ext:md</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-medium mt-12 mb-4 text-accent">CLI Reference</h2>
      <div className="rounded-lg border border-border bg-bg-card overflow-hidden mb-6">
        <table className="w-full text-sm">
          <thead className="bg-bg-elevated">
            <tr>
              <th className="px-4 py-3 text-left font-medium">Command</th>
              <th className="px-4 py-3 text-left font-medium">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              ["nex", "Launch in background (default)"],
              ["nex --foreground", "Dev mode: keep terminal attached"],
              ["nex --background", "Explicit background mode"],
              ["nex --status", "Check if running"],
              ["nex --status-json", "Machine-readable JSON status"],
              ["nex --quit", "Stop running instance"],
              ["nex --restart", "Restart running instance"],
              ["nex --ensure-config", "Create default config if missing"],
              ["nex --sync-startup", "Sync Windows startup entry"],
              ["nex --set-launch-at-startup=<true/false>", "Enable/disable auto-start"],
              ["nex --diagnostics-bundle", "Dump diagnostics to zip archive"],
              ["nex --probe-index", "Print index statistics"],
            ].map(([cmd, desc]) => (
              <tr key={cmd as string}>
                <td className="px-4 py-3 font-mono text-code text-xs">{cmd as string}</td>
                <td className="px-4 py-3 text-text-muted">{desc as string}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-medium mt-12 mb-4 text-accent">Common Issues</h2>

      <h3 className="text-lg font-medium mt-8 mb-3">Hotkey Not Working</h3>
      <p className="text-text-muted mb-4">Another app may be using the same hotkey. Change it in config:</p>
      <pre className="rounded-md bg-bg p-4 font-mono text-sm overflow-x-auto mb-6 text-code">hotkey = "Alt+Space"</pre>
      <p className="text-text-muted mb-4">Restart: <code className="font-mono text-sm text-code">nex --restart</code></p>

      <h3 className="text-lg font-medium mt-8 mb-3">Nex Fails to Start</h3>
      <p className="text-text-muted mb-4">Missing WebView2 Runtime on older Windows 10 builds. Download from <a href="https://developer.microsoft.com/en-us/microsoft-edge/webview2/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Microsoft</a>. Run <code className="font-mono text-sm text-code">nex --foreground</code> to see error output.</p>

      <h3 className="text-lg font-medium mt-8 mb-3">"Nex is not recognized"</h3>
      <p className="text-text-muted mb-4">Binary not on <code className="font-mono text-sm text-code">%PATH%</code>. Run from: <code className="font-mono text-sm text-code">"%LOCALAPPDATA%\Programs\Nex\bin\nex.exe"</code></p>
    </>
  );
}
