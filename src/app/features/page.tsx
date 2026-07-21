import Image from "next/image";

const allFeatures = [
  {
    category: "Core",
    items: [
      {
        title: "Global Hotkey",
        description: "Summon the launcher from anywhere with a customizable keyboard shortcut. Default: Alt+Space. Fully configurable via TOML config file.",
        details: ["Customizable key combinations", "Per-application hotkey overrides", "Game mode auto-suppression"],
      },
      {
        title: "Fuzzy Search",
        description: "Find apps, files, and folders with intelligent matching. Powered by Tantivy full-text search engine for typo-tolerant results.",
        details: ["Typo-tolerant matching", "Ranked by relevance, recency, frequency", "Real-time file watching"],
      },
      {
        title: "Everything SDK Integration",
        description: "Optional integration with Voidtools Everything for instant file search across your entire system.",
        details: ["Zero-latency file discovery", "Seamless fallback to built-in indexer", "Real-time sync"],
      },
      {
        title: "Actions",
        description: "Execute custom commands, web searches, and system operations directly from the launcher.",
        details: ["Custom command definitions", "Web search providers", "System operations (shutdown, restart, etc.)"],
      },
    ],
  },
  {
    category: "Productivity",
    items: [
      {
        title: "Calculator",
        description: "Inline arithmetic evaluation directly in the search bar. No need to open a separate calculator app.",
        details: ["Basic arithmetic", "Parenthesized expressions", "Instant results"],
      },
      {
        title: "Clipboard History",
        description: "Access recently copied items with optional persistence and search.",
        details: ["Configurable history size", "Searchable clipboard items", "DPAPI-encrypted storage"],
      },
      {
        title: "Plugins",
        description: "Extend with JSON-based plugins loaded from configurable directories.",
        details: ["JSON manifest-based plugins", "Action and search providers", "Safe mode execution"],
      },
      {
        title: "Auto-Updater",
        description: "Keep Nex up to date with built-in update checks. Never miss a new feature or bug fix.",
        details: ["Silent background checks", "One-click updates", "Rollback support"],
      },
    ],
  },
  {
    category: "Performance",
    items: [
      {
        title: "Built in Rust",
        description: "Minimal memory footprint and near-instant responsiveness. Optimized for always-on background operation.",
        details: ["Ownership-guaranteed memory safety", "Minimal CPU overhead", "Cross-platform foundation"],
      },
      {
        title: "File Watching",
        description: "Real-time index updates when files change on disk. Your search results are always current.",
        details: ["Efficient filesystem monitoring", "Incremental index updates", "Low CPU overhead"],
      },
      {
        title: "Game Mode",
        description: "Suppress the launcher while gaming. No accidental hotkey triggers during fullscreen applications.",
        details: ["Automatic detection", "Configurable exclusions", "Manual override"],
      },
      {
        title: "Resource Efficiency",
        description: "Idle CPU near zero. Idle RAM target under 72MB. Designed to run 24/7 without impact.",
        details: ["Optimized memory usage", "Smart caching", "Background processing"],
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-16">
        <h1 className="font-display text-5xl md:text-6xl mb-6">Features</h1>
        <p className="text-xl text-text-muted max-w-2xl">
          Everything you need for a fast, keyboard-first workflow.
        </p>
      </div>

      <div className="mb-20">
        <Image
          src="/nex-ui.png"
          alt="Nex launcher interface"
          width={1510}
          height={1040}
          unoptimized
          className="rounded-lg shadow-2xl w-full h-auto"
        />
      </div>

      {allFeatures.map((section) => (
        <div key={section.category} className="mb-16">
          <h2 className="text-2xl font-medium mb-8 text-accent">{section.category}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {section.items.map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg border border-border bg-bg-card p-6 hover:border-border-hover transition-colors"
              >
                <h3 className="text-lg font-medium mb-3">{feature.title}</h3>
                <p className="text-sm text-text-muted mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm">
                      <span className="text-code mt-0.5">•</span>
                      <span className="text-text-muted">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
