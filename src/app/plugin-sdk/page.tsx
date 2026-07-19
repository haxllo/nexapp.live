export default function PluginSDKPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      <div className="mb-16">
        <h1 className="font-display text-5xl md:text-6xl mb-6">Plugin SDK</h1>
        <p className="text-xl text-text-muted max-w-2xl">
          Extend Nex with custom plugins. Build integrations for your workflow.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-medium mb-4">Overview</h2>
          <div className="rounded-lg border border-border bg-bg-card p-6 space-y-4 text-text-muted">
            <p>
              The Nex Plugin SDK provides a JSON-based plugin interface for extending launcher functionality.
              Plugins are loaded from configurable directories and can provide custom actions and search providers.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="rounded-full bg-accent/20 px-3 py-1 text-accent">Status: Preview</span>
              <span>Plugin SDK is in active development. WASM runtime and store coming in future releases.</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-medium mb-4">Plugin Structure</h2>
          <div className="rounded-md bg-bg p-6 font-mono text-sm space-y-2">
            <div className="text-text-dim"># Plugin directory structure</div>
            <div className="text-code">my-plugin/</div>
            <div className="text-code pl-6">└── manifest.json</div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-medium mb-4">Manifest</h2>
          <p className="text-text-muted mb-4">
            Each plugin requires a <code className="font-mono text-code text-sm">manifest.json</code> file:
          </p>
          <div className="rounded-md bg-bg p-6 font-mono text-sm overflow-x-auto">
            <pre className="text-text-muted">
{`{
  "name": "my-plugin",
  "version": "0.1.0",
  "description": "My custom plugin",
  "author": "Your Name",
  "actions": [
    {
      "id": "hello",
      "label": "Say Hello",
      "description": "Prints a greeting",
      "handler": "action"
    }
  ],
  "providers": [
    {
      "id": "custom",
      "label": "Custom Results",
      "description": "Custom search provider",
      "handler": "search"
    }
  ]
}`}
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-medium mb-4">Plugin Interface</h2>
          <p className="text-text-muted mb-4">
            Plugins implement actions and/or search providers via JSON manifest. Handlers reference runtime functions available to the plugin system.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-medium mb-4">Configuration</h2>
          <p className="text-text-muted mb-4">Enable plugins in <code className="font-mono text-code text-sm">config.toml</code>:</p>
          <div className="rounded-md bg-bg p-6 font-mono text-sm overflow-x-auto">
            <pre className="text-text-muted">
{`plugins_enabled = true
plugins_safe_mode = true
plugin_paths = [
  "%APPDATA%\\Nex\\plugins",
]`}
            </pre>
          </div>
          <div className="mt-4 rounded-lg border border-border bg-bg-card p-4">
            <div className="flex items-start gap-3">
              <span className="text-accent text-xl">⚠</span>
              <div>
                <p className="font-medium mb-1">Safe Mode</p>
                <p className="text-sm text-text-muted">
                  When <code className="font-mono text-code text-xs">plugins_safe_mode = true</code>, plugins cannot execute system commands.
                  Disable only for trusted plugins.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-medium mb-4">Roadmap</h2>
          <div className="space-y-3 text-text-muted">
            <div className="flex items-start gap-3">
              <span className="text-code mt-1">✓</span>
              <span>JSON manifest loading and validation</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-code mt-1">✓</span>
              <span>Action and provider interfaces</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-text-dim mt-1">○</span>
              <span>Trait-based plugin interface (Rust)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-text-dim mt-1">○</span>
              <span>WASM runtime integration</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-text-dim mt-1">○</span>
              <span>Public extension store</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
