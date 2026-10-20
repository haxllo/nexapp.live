import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { PageHead, TextLink } from "@/components/ui";
import { CONFIG_PATH } from "@/lib/constants";
import { settingGroups } from "@/lib/settings";

export const metadata: Metadata = {
  title: "Configuration",
  description:
    "Reference for every key in config.toml: types, defaults, ranges, and which settings need a restart.",
};

const example = `hotkey = "Win"
launch_at_startup = true
max_results = 20
search_mode_default = "all"

panel_background = "glass"
grid_view = false
game_mode_enabled = false

show_files = true
show_folders = true
file_discovery_backend = "auto"
web_search_provider = "google"

create_actions_enabled = true
default_create_dir = ""

clipboard_enabled = false
clipboard_retention_minutes = 480

plugins_enabled = true
plugins_safe_mode = true

[quick_launch]
enabled = true
max_items = 9
pinned = []
auto_fill = false`;

export default function ConfigurationPage() {
  return (
    <>
      <PageHead
        title="Configuration"
        lede="One TOML file. Save it and most changes apply about a second later. The hotkey and the index path need a restart."
      />

      <div className="mt-8 rounded-[10px] border border-line bg-ink-2/60 p-4">
        <div className="mono text-[10px] uppercase tracking-[0.12em] text-faint">
          Config file
        </div>
        <div className="mono mt-1.5 break-all text-[12px] text-paper">{CONFIG_PATH}</div>
      </div>

      <nav
        aria-label="Setting groups"
        className="mt-8 hidden flex-wrap gap-x-4 gap-y-2 md:flex"
      >
        {settingGroups.map((group) => (
          <a
            key={group.id}
            href={`#${group.id}`}
            className="mono text-[10px] uppercase tracking-[0.1em] text-faint transition-colors hover:text-paper"
          >
            {group.title}
          </a>
        ))}
      </nav>

      {settingGroups.map((group) => (
        <section
          key={group.id}
          id={group.id}
          className="mt-10 scroll-mt-24 border-t border-line pt-6"
        >
          <div className="grid gap-4 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-8">
            <div>
              <h2 className="text-[14px] font-medium text-paper">{group.title}</h2>
              {group.note && (
                <p className="mt-1.5 max-w-[28ch] text-[12px] leading-[1.6] text-faint">
                  {group.note}
                </p>
              )}
            </div>

            <dl>
              {group.settings.map((setting) => (
                <div
                  key={setting.key}
                  className="grid gap-1.5 border-b border-line py-3.5 md:grid-cols-[minmax(0,190px)_minmax(0,1fr)] md:gap-6"
                >
                  <dt className="flex flex-wrap items-baseline gap-2">
                    <span className="mono break-all text-[11px] text-paper">{setting.key}</span>
                    {setting.restart && (
                      <span className="mono rounded-[3px] border border-line bg-white/[0.03] px-1 py-px text-[8.5px] uppercase tracking-[0.08em] text-faint">
                        restart
                      </span>
                    )}
                  </dt>
                  <dd>
                    <p className="text-[12.5px] leading-[1.65] text-muted">
                      {setting.desc}
                    </p>
                    <p className="mono mt-1 text-[10px] leading-[1.6] text-faint">
                      {setting.type} · default {setting.def}
                      {setting.range ? ` (${setting.range})` : ""}
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ))}

      <section className="mt-12 border-t border-line pt-6">
        <h2 className="text-[14px] font-medium text-paper">A complete file</h2>
        <p className="mt-2 max-w-[60ch] text-[12.5px] leading-[1.65] text-muted">
          Every key at or near its default. Keep exactly one hotkey value, and use double
          backslashes in Windows paths.
        </p>
        <div className="mt-4">
          <CodeBlock code={example} title="config.toml" />
        </div>
      </section>

      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
        <TextLink href="/docs/getting-started">Install and troubleshooting</TextLink>
        <TextLink href="/plugin-sdk">Plugin SDK</TextLink>
      </div>
    </>
  );
}
