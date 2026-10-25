import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { Kbd } from "@/components/ui";
import { CONFIG_PATH, LATEST } from "@/lib/site";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Install Nex, learn the search syntax, change every setting in config.toml, and extend the launcher with plugins.",
};

const overview = [
  {
    href: "/docs/getting-started",
    title: "Getting started",
    body: "Prerequisites, installation, the first search, the search syntax, and what to do when the hotkey will not fire.",
    testId: "docs-article-getting-started",
  },
  {
    href: "/docs/configuration",
    title: "Configuration",
    body: "Every key in config.toml with its type, default, and valid range, grouped the way the file is grouped.",
    testId: "docs-article-configuration",
  },
  {
    href: "/plugin-sdk",
    title: "Plugin SDK",
    body: "Add results and actions with a JSON manifest. Paths, commands, keywords, and safe mode.",
    testId: "docs-article-plugin-sdk",
  },
];

const syntax = [
  ["plain text", "Fuzzy match across apps, files, and folders"],
  ["> action", "Command mode"],
  ["@apps, @files, @folders", "Narrow the search scope"],
  ["kind:file, ext:md", "Filter by type or extension"],
  ["modified:week", "Filter by date"],
  ["-term, AND, OR, NOT", "Exclude and combine terms"],
];

const commands = [
  ["nex --status", "Check whether Nex is running"],
  ["nex --quit", "Stop the running instance"],
  ["nex --restart", "Restart the instance"],
  ["nex --diagnostics-bundle", "Write a diagnostics zip"],
];

export default function DocsPage() {
  return (
    <>
      <div className="pg-doc-head">
        <h1>Documentation</h1>
        <p>{`Install it, change how it behaves, and extend it. Everything here describes the current release, ${LATEST.version}.`}</p>
      </div>

      <div className="docs-overview-links">
        {overview.map((item) => (
          <Link key={item.href} href={item.href} data-testid={item.testId} className="group">
            <span className="text-[14px] text-paper">{item.title}</span>
            <span className="max-w-[58ch] text-[13px] leading-[1.65] text-muted">
              {item.body}
            </span>
            <ArrowRight
              size={15}
              aria-hidden
              className="text-faint transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        ))}
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <section>
          <h2 className="text-[13px] font-medium text-paper">The essentials</h2>
          <dl className="mt-4 space-y-4 border-t border-line pt-4">
            <div>
              <dt className="text-[12.5px] text-muted">Config file</dt>
              <dd className="mono mt-1 break-all text-[11px] text-paper">{CONFIG_PATH}</dd>
            </div>
            <div>
              <dt className="text-[12.5px] text-muted">Default hotkey</dt>
              <dd className="mt-2 flex items-center gap-2">
                <Kbd wide>Win</Kbd>
                <span className="mono text-[10.5px] text-faint">changeable</span>
              </dd>
            </div>
            <div>
              <dt className="text-[12.5px] text-muted">Close the panel</dt>
              <dd className="mt-2 flex items-center gap-2">
                <Kbd>Esc</Kbd>
                <span className="mono text-[10.5px] text-faint">focus returns</span>
              </dd>
            </div>
          </dl>
        </section>

        <section>
          <h2 className="text-[13px] font-medium text-paper">Search syntax</h2>
          <dl className="mt-4 border-t border-line">
            {syntax.map(([term, meaning]) => (
              <div
                key={term}
                className="flex items-baseline justify-between gap-6 border-b border-line py-2.5"
              >
                <dt className="mono text-[10.5px] text-paper">{term}</dt>
                <dd className="text-right text-[12px] text-muted">{meaning}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="text-[13px] font-medium text-paper">Command line</h2>
        <dl className="mt-4 grid gap-x-10 border-t border-line sm:grid-cols-2">
          {commands.map(([command, meaning]) => (
            <div key={command} className="border-b border-line py-2.5">
              <dt className="mono text-[10.5px] text-paper">{command}</dt>
              <dd className="mt-1 text-[12px] text-muted">{meaning}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
