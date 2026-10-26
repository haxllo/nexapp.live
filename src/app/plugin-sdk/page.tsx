import type { Metadata } from "next";
import Link from "next/link";
import { CodeBlock } from "@/components/code-block";
import type { CodeLine } from "@/components/code-block";

export const metadata: Metadata = {
  title: "Plugin SDK",
  description:
    "Add search results and actions to Nex with a JSON manifest: fields, action types, safe mode, and a complete example.",
};

const layoutLines: CodeLine[] = [
  [
    { text: "%APPDATA%", className: "tk-k" },
    { text: "\\Nex\\plugins\\", className: "tk-s" },
  ],
  [
    { text: "└──", className: "tk-p" },
    { text: " ", raw: true },
    { text: "workspace.json", className: "tk-s" },
  ],
];

const manifestLines: CodeLine[] = [
  [{ text: "{", className: "tk-p" }],
  [
    { text: "  ", raw: true },
    { text: '"id"', className: "tk-k" },
    { text: ": ", className: "tk-p" },
    { text: '"workspace"', className: "tk-s" },
  ],
  [
    { text: "  ", raw: true },
    { text: '"name"', className: "tk-k" },
    { text: ": ", className: "tk-p" },
    { text: '"Workspace"', className: "tk-s" },
  ],
  [
    { text: "  ", raw: true },
    { text: '"version"', className: "tk-k" },
    { text: ": ", className: "tk-p" },
    { text: '"0.1.0"', className: "tk-s" },
  ],
  [
    { text: "  ", raw: true },
    { text: '"enabled"', className: "tk-k" },
    { text: ": ", className: "tk-p" },
    { text: "true", className: "tk-b" },
  ],
  [
    { text: "  ", raw: true },
    { text: '"provider_items"', className: "tk-k" },
    { text: ": ", className: "tk-p" },
    { text: "[", className: "tk-p" },
  ],
  [
    { text: "    ", raw: true },
    { text: "{", className: "tk-p" },
  ],
  [
    { text: "      ", raw: true },
    { text: '"id"', className: "tk-k" },
    { text: ": ", className: "tk-p" },
    { text: '"ws-notes"', className: "tk-s" },
  ],
  [
    { text: "      ", raw: true },
    { text: '"kind"', className: "tk-k" },
    { text: ": ", className: "tk-p" },
    { text: '"file"', className: "tk-s" },
  ],
  [
    { text: "      ", raw: true },
    { text: '"title"', className: "tk-k" },
    { text: ": ", className: "tk-p" },
    { text: '"Team notes"', className: "tk-s" },
  ],
  [
    { text: "      ", raw: true },
    { text: '"path"', className: "tk-k" },
    { text: ": ", className: "tk-p" },
    { text: '"C:\\\\Users\\\\me\\\\notes\\\\team.md"', className: "tk-s" },
  ],
  [
    { text: "    ", raw: true },
    { text: "}", className: "tk-p" },
  ],
  [
    { text: "  ", raw: true },
    { text: "]", className: "tk-p" },
  ],
  [
    { text: "  ", raw: true },
    { text: '"actions"', className: "tk-k" },
    { text: ": ", className: "tk-p" },
    { text: "[", className: "tk-p" },
  ],
  [
    { text: "    ", raw: true },
    { text: "{", className: "tk-p" },
  ],
  [
    { text: "      ", raw: true },
    { text: '"id"', className: "tk-k" },
    { text: ": ", className: "tk-p" },
    { text: '"open-notes"', className: "tk-s" },
  ],
  [
    { text: "      ", raw: true },
    { text: '"title"', className: "tk-k" },
    { text: ": ", className: "tk-p" },
    { text: '"Open team notes"', className: "tk-s" },
  ],
  [
    { text: "      ", raw: true },
    { text: '"subtitle"', className: "tk-k" },
    { text: ": ", className: "tk-p" },
    { text: '"Workspace"', className: "tk-s" },
  ],
  [
    { text: "      ", raw: true },
    { text: '"keywords"', className: "tk-k" },
    { text: ": ", className: "tk-p" },
    { text: '["notes", "team"]', className: "tk-s" },
  ],
  [
    { text: "      ", raw: true },
    { text: '"type"', className: "tk-k" },
    { text: ": ", className: "tk-p" },
    { text: '"open_path"', className: "tk-s" },
  ],
  [
    { text: "      ", raw: true },
    { text: '"path"', className: "tk-k" },
    { text: ": ", className: "tk-p" },
    { text: '"C:\\\\Users\\\\me\\\\notes\\\\team.md"', className: "tk-s" },
  ],
  [
    { text: "    ", raw: true },
    { text: "}", className: "tk-p" },
  ],
  [
    { text: "    ", raw: true },
    { text: "{", className: "tk-p" },
  ],
  [
    { text: "      ", raw: true },
    { text: '"id"', className: "tk-k" },
    { text: ": ", className: "tk-p" },
    { text: '"sync"', className: "tk-s" },
  ],
  [
    { text: "      ", raw: true },
    { text: '"title"', className: "tk-k" },
    { text: ": ", className: "tk-p" },
    { text: '"Sync workspace"', className: "tk-s" },
  ],
  [
    { text: "      ", raw: true },
    { text: '"subtitle"', className: "tk-k" },
    { text: ": ", className: "tk-p" },
    { text: '"Workspace"', className: "tk-s" },
  ],
  [
    { text: "      ", raw: true },
    { text: '"keywords"', className: "tk-k" },
    { text: ": ", className: "tk-p" },
    { text: '["sync", "git"]', className: "tk-s" },
  ],
  [
    { text: "      ", raw: true },
    { text: '"type"', className: "tk-k" },
    { text: ": ", className: "tk-p" },
    { text: '"command"', className: "tk-s" },
  ],
  [
    { text: "      ", raw: true },
    { text: '"command"', className: "tk-k" },
    { text: ": ", className: "tk-p" },
    { text: '"git"', className: "tk-s" },
  ],
  [
    { text: "      ", raw: true },
    { text: '"args"', className: "tk-k" },
    { text: ": ", className: "tk-p" },
    { text: '["pull"]', className: "tk-s" },
  ],
  [
    { text: "    ", raw: true },
    { text: "}", className: "tk-p" },
  ],
  [
    { text: "  ", raw: true },
    { text: "]", className: "tk-p" },
  ],
  [{ text: "}", className: "tk-p" }],
];

const configLines: CodeLine[] = [
  [
    { text: "plugins_enabled", className: "tk-k" },
    { text: " = ", className: "tk-p" },
    { text: "true", className: "tk-b" },
  ],
  [
    { text: "plugins_safe_mode", className: "tk-k" },
    { text: " = ", className: "tk-p" },
    { text: "true", className: "tk-b" },
  ],
  [
    { text: "plugin_paths", className: "tk-k" },
    { text: " = ", className: "tk-p" },
    { text: "[", className: "tk-p" },
  ],
  [
    { text: "  ", raw: true },
    { text: '"C:\\\\Users\\\\you\\\\AppData\\\\Roaming\\\\Nex\\\\plugins"', className: "tk-s" },
  ],
  [{ text: "]", className: "tk-p" }],
];

const fields = [
  ["id", "string", "Stable identifier for the plugin."],
  ["name", "string", "Display name. Used as the default subtitle for its actions."],
  ["version", "string", "Free form. Useful while you iterate."],
  ["enabled", "bool", "Set false to keep a plugin on disk but out of the registry."],
  ["provider_items", "array", "Static entries added to search results."],
  ["actions", "array", "Commands that appear in command mode."],
];

const itemFields = [
  ["id", "string", "Unique across the plugin."],
  ["kind", "string", "file or folder. Decides the icon on the row."],
  ["title", "string", "The result text."],
  ["path", "string", "Absolute path to open."],
];

const actionFields = [
  ["id", "string", "Unique across the plugin."],
  ["title", "string", "The command name in command mode."],
  ["subtitle", "string", "Secondary line under the title."],
  ["keywords", "string[]", "Extra terms that should match this action."],
  ["type", "string", "open_path or command. Defaults to open_path."],
  ["path", "string", "Used by open_path."],
  ["command", "string", "Used by command. Blocked when safe mode is on."],
  ["args", "string[]", "Arguments passed to the command."],
];

const nav = [
  ["how-loading-works", "How loading works"],
  ["manifest", "Manifest"],
  ["a-complete-plugin", "A complete plugin"],
  ["safe-mode", "Safe mode"],
  ["what-is-not-here-yet", "What is not here yet"],
  ["source", "Source"],
];

function FieldTable({ rows }: { rows: string[][] }) {
  return (
    <div className="pg-prose">
      <dl>
        {rows.map(([key, type, desc]) => (
          <div key={key}>
            <dt>{key}</dt>
            <dd>
              <span className="mono text-xs text-muted">{type}</span>
              <p className="mt-1">{desc}</p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function PluginSdkPage() {
  return (
    <div data-testid="sdk-page">
      <div className="pg-intro">
        <div className="ln-shell">
          <h1 className="pg-title">Plugin SDK</h1>
          <p className="pg-lede">
            A plugin is a folder with a manifest. It can add results to search and actions
            to command mode. No SDK to install, no runtime to embed.
          </p>
        </div>
      </div>

      <div className="ln-shell pg-docs">
        <aside className="pg-side">
          <nav
            className="pg-links"
            aria-label="Plugin SDK sections"
            data-testid="sdk-section-navigation"
          >
            {nav.map(([id, label]) => (
              <Link key={id} href={`#${id}`} data-testid={`sdk-nav-${id}`}>
                {label}
              </Link>
            ))}
          </nav>
          <nav className="pg-side-extra" aria-label="Related pages">
            <Link href="/docs/configuration">Configuration reference</Link>
            <Link href="/features">What the panel does</Link>
          </nav>
        </aside>

        <article className="min-w-0">
          <div className="pg-prose">
            <h2 id="how-loading-works">How loading works</h2>
          <p>
            Nex reads each entry in <code>plugin_paths</code>. A path can be a folder of
            manifests, or a manifest file directly; subfolders are not scanned. Every{" "}
            <code>.json</code> file in those folders is parsed and validated; a file that
            fails is logged and skipped, which means one bad plugin cannot take the panel
            down.
          </p>
          <p>The registry is built when Nex starts. Restart after adding or editing a plugin.</p>

          <h3>Layout</h3>
          <CodeBlock variant="ln" title="Plugin folder" lines={layoutLines} />

          <h2 id="manifest">Manifest</h2>
          <p>The top level describes the plugin and holds two lists.</p>
          <FieldTable rows={fields} />

          <h3>Provider items</h3>
          <p>
            Each item becomes one row in search. They are static: there is no call back
            into a plugin at query time. A row is searchable but does nothing when selected
            yet, so pair it with an action that opens the same path.
          </p>
          <FieldTable rows={itemFields} />

          <h3>Actions</h3>
          <p>
            Actions appear in command mode. <code>open_path</code> hands a path to the
            shell; <code>command</code> starts a process with arguments, and stays blocked
            while safe mode is on.
          </p>
          <FieldTable rows={actionFields} />

          <h2 id="a-complete-plugin">A complete plugin</h2>
          <p>
            One provider item and two actions. On Windows paths inside JSON, every
            backslash is doubled.
          </p>
          <CodeBlock variant="ln" title="workspace.json" lines={manifestLines} />

          <h2 id="safe-mode">Safe mode</h2>
          <p>
            <code>plugins_safe_mode</code> is on by default and blocks <code>command</code>{" "}
            actions entirely. Provider items and <code>open_path</code> actions keep
            working. Turn it off only for plugins you wrote or have read.
          </p>
          <CodeBlock variant="ln" title="config.toml" lines={configLines} />

          <h2 id="what-is-not-here-yet">What is not here yet</h2>
          <p>
            This is a preview surface, and it is honest about it. There is no WASM runtime,
            no network API, no query-time callback from a plugin, and no extension store. A
            plugin is data: static results and process launches. Provider rows are not
            clickable yet, and actions have no icon or confirmation step. If that covers
            your integration, it works today. If it needs to compute at query time, it does
            not.
          </p>

          <h2 id="source">Source</h2>
          <p>
            The loader is in{" "}
            <a
              href="https://github.com/haxllo/nex/blob/master/apps/core/src/plugin_sdk.rs"
              data-testid="sdk-source-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              apps/core/src/plugin_sdk.rs
            </a>
            . Open an issue if a field you need is missing.
          </p>
        </div>
        </article>
      </div>

    </div>
  );
}
