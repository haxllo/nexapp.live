import Link from "next/link";

const docSections = [
  {
    title: "Getting Started",
    description: "Install, run, and configure Nex for the first time.",
    href: "/docs/getting-started",
  },
  {
    title: "Configuration",
    description: "Full reference for all settings in config.toml.",
    href: "/docs/configuration",
  },
  {
    title: "Plugin SDK",
    description: "Extend Nex with custom plugins.",
    href: "/plugin-sdk",
  },
];

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-16">
        <h1 className="font-display text-5xl md:text-6xl mb-6">Documentation</h1>
        <p className="text-xl text-text-muted max-w-2xl">
          Everything you need to know about installing, configuring, and extending Nex.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {docSections.map((section) => (
          <Link
            key={section.title}
            href={section.href}
            className="group rounded-lg border border-border bg-bg-card p-6 hover:border-border-hover transition-colors"
          >
            <h2 className="text-lg font-medium mb-2 group-hover:text-accent transition-colors">
              {section.title}
            </h2>
            <p className="text-sm text-text-muted">{section.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-16 rounded-lg border border-border bg-bg-card p-8">
        <h2 className="text-xl font-medium mb-4">Quick Reference</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-accent mb-2">Config File Location</h3>
            <code className="font-mono text-sm text-code">%APPDATA%\Nex\config.toml</code>
          </div>
          <div>
            <h3 className="text-sm font-medium text-accent mb-2">Default Hotkey</h3>
            <code className="font-mono text-sm text-code">Ctrl+Space</code>
          </div>
          <div>
            <h3 className="text-sm font-medium text-accent mb-2">Search Syntax</h3>
            <div className="grid gap-2 text-sm">
              <div className="flex gap-3">
                <code className="font-mono text-code w-24">plain text</code>
                <span className="text-text-muted">Fuzzy search all items</span>
              </div>
              <div className="flex gap-3">
                <code className="font-mono text-code w-24">{">"} command</code>
                <span className="text-text-muted">Search actions/commands</span>
              </div>
              <div className="flex gap-3">
                <code className="font-mono text-code w-24">@{""}mode</code>
                <span className="text-text-muted">Switch search mode (apps, files, actions)</span>
              </div>
              <div className="flex gap-3">
                <code className="font-mono text-code w-24">kind:...</code>
                <span className="text-text-muted">Filter by type (kind:file, ext:md)</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-accent mb-2">CLI Commands</h3>
            <div className="grid gap-2 text-sm">
              <div className="flex gap-3">
                <code className="font-mono text-code w-40">nex --status</code>
                <span className="text-text-muted">Check if running</span>
              </div>
              <div className="flex gap-3">
                <code className="font-mono text-code w-40">nex --quit</code>
                <span className="text-text-muted">Stop the launcher</span>
              </div>
              <div className="flex gap-3">
                <code className="font-mono text-code w-40">nex --restart</code>
                <span className="text-text-muted">Restart the launcher</span>
              </div>
              <div className="flex gap-3">
                <code className="font-mono text-code w-40">nex --probe-index</code>
                <span className="text-text-muted">Print index statistics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
