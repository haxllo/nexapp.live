import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { PageHead, TextLink } from "@/components/ui";
import { GITHUB_REPO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plugin SDK",
  description:
    "Add search results and actions to Nex with a JSON manifest: fields, action types, safe mode, and a complete example.",
};

const layout = `%APPDATA%\\Nex\\plugins\\
└── workspace.json`;

const manifest = `{
  "id": "workspace",
  "name": "Workspace",
  "version": "0.1.0",
  "enabled": true,
  "provider_items": [
    {
      "id": "ws-notes",
      "kind": "file",
      "title": "Team notes",
      "path": "C:\\\\Users\\\\me\\\\notes\\\\team.md"
    }
  ],
  "actions": [
    {
      "id": "open-notes",
      "title": "Open team notes",
      "subtitle": "Workspace",
      "keywords": ["notes", "team"],
      "type": "open_path",
      "path": "C:\\\\Users\\\\me\\\\notes\\\\team.md"
    },
    {
      "id": "sync",
      "title": "Sync workspace",
      "subtitle": "Workspace",
      "keywords": ["sync", "git"],
      "type": "command",
      "command": "git",
      "args": ["pull"]
    }
  ]
}`;

const config = `plugins_enabled = true
plugins_safe_mode = true
plugin_paths = [
  "C:\\\\Users\\\\you\\\\AppData\\\\Roaming\\\\Nex\\\\plugins",
]`;

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

export default function PluginSdkPage() {
  return (
    <div className="shell max-w-[900px] pt-14 pb-20 md:pt-20 md:pb-28">
      <PageHead
        title="Plugin SDK"
        lede="A plugin is a folder with a manifest. It can add results to search and actions to command mode. No SDK to install, no runtime to embed."
      />

      <div className="prose-nex mt-10">
        <h2>How loading works</h2>
        <p>
          Nex reads each entry in <code>plugin_paths</code>. A path can be a folder of
          manifests, or a manifest file directly; subfolders are not scanned. Every{" "}
          <code>.json</code> file in those folders is parsed and validated; a file that
          fails is logged and skipped, which means one bad plugin cannot take the panel
          down.
        </p>
        <p>
          The registry is built when Nex starts. Restart after adding or editing a plugin.
        </p>

        <h3>Layout</h3>
        <CodeBlock code={layout} title="Plugin folder" />

        <h2>Manifest</h2>
        <p>The top level describes the plugin and holds two lists.</p>
        <div className="not-prose mt-5 border-t border-line">
          {fields.map(([key, type, desc]) => (
            <div
              key={key}
              className="grid gap-1 border-b border-line py-2.5 md:grid-cols-[150px_70px_minmax(0,1fr)] md:items-baseline md:gap-4"
            >
              <span className="mono text-[10.5px] text-paper">{key}</span>
              <span className="mono text-[9.5px] uppercase tracking-[0.08em] text-faint">
                {type}
              </span>
              <span className="text-[12.5px] leading-[1.6] text-muted">{desc}</span>
            </div>
          ))}
        </div>

        <h3>Provider items</h3>
        <p>
          Each item becomes one row in search. They are static: there is no call back into
          a plugin at query time. A row is searchable but does nothing when selected yet,
          so pair it with an action that opens the same path.
        </p>
        <div className="not-prose mt-5 border-t border-line">
          {itemFields.map(([key, type, desc]) => (
            <div
              key={key}
              className="grid gap-1 border-b border-line py-2.5 md:grid-cols-[150px_70px_minmax(0,1fr)] md:items-baseline md:gap-4"
            >
              <span className="mono text-[10.5px] text-paper">{key}</span>
              <span className="mono text-[9.5px] uppercase tracking-[0.08em] text-faint">
                {type}
              </span>
              <span className="text-[12.5px] leading-[1.6] text-muted">{desc}</span>
            </div>
          ))}
        </div>

        <h3>Actions</h3>
        <p>
          Actions appear in command mode. <code>open_path</code> hands a path to the shell;{" "}
          <code>command</code> starts a process with arguments, and stays blocked while
          safe mode is on.
        </p>
        <div className="not-prose mt-5 border-t border-line">
          {actionFields.map(([key, type, desc]) => (
            <div
              key={key}
              className="grid gap-1 border-b border-line py-2.5 md:grid-cols-[150px_70px_minmax(0,1fr)] md:items-baseline md:gap-4"
            >
              <span className="mono text-[10.5px] text-paper">{key}</span>
              <span className="mono text-[9.5px] uppercase tracking-[0.08em] text-faint">
                {type}
              </span>
              <span className="text-[12.5px] leading-[1.6] text-muted">{desc}</span>
            </div>
          ))}
        </div>

        <h2>A complete plugin</h2>
        <p>
          One provider item and two actions. On Windows paths inside JSON, every backslash
          is doubled.
        </p>
        <CodeBlock code={manifest} title="workspace.json" />

        <h2>Safe mode</h2>
        <p>
          <code>plugins_safe_mode</code> is on by default and blocks <code>command</code>{" "}
          actions entirely. Provider items and <code>open_path</code> actions keep working.
          Turn it off only for plugins you wrote or have read.
        </p>
        <CodeBlock code={config} title="config.toml" />

        <h2>What is not here yet</h2>
        <p>
          This is a preview surface, and it is honest about it. There is no WASM runtime, no
          network API, no query-time callback from a plugin, and no extension store. A
          plugin is data: static results and process launches. Provider rows are not
          clickable yet, and actions have no icon or confirmation step. If that covers your
          integration, it works today. If it needs to compute at query time, it does not.
        </p>

        <h2>Source</h2>
        <p>
          The loader is in{" "}
          <a
            href={`${GITHUB_REPO}/blob/master/apps/core/src/plugin_sdk.rs`}
            target="_blank"
            rel="noopener noreferrer"
          >
            apps/core/src/plugin_sdk.rs
          </a>
          . Open an issue if a field you need is missing.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
        <TextLink href="/docs/configuration">Configuration reference</TextLink>
        <TextLink href="/features">What the panel does</TextLink>
      </div>
    </div>
  );
}
