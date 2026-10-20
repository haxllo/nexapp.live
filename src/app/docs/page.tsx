import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { Kbd, PageHead } from "@/components/ui";
import { CONFIG_PATH, RELEASE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Install Nex, learn the search syntax, change every setting in config.toml, and extend the launcher with plugins.",
};

const pages = [
  {
    title: "Getting started",
    body: "Prerequisites, installation, the first search, the search syntax, and what to do when the hotkey will not fire.",
    href: "/docs/getting-started",
  },
  {
    title: "Configuration",
    body: "Every key in config.toml with its type, default, and valid range, grouped the way the file is grouped.",
    href: "/docs/configuration",
  },
  {
    title: "Plugin SDK",
    body: "Add results and actions with a JSON manifest. Paths, commands, keywords, and safe mode.",
    href: "/plugin-sdk",
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

const cli = [
  ["nex --status", "Check whether Nex is running"],
  ["nex --quit", "Stop the running instance"],
  ["nex --restart", "Restart the instance"],
  ["nex --diagnostics-bundle", "Write a diagnostics zip"],
];

export default function DocsPage() {
  return (
    <>
      <PageHead
        title="Documentation"
        lede={`Install it, change how it behaves, and extend it. Everything here describes the current release, ${RELEASE.version}.`}
      />

      <div className="mt-10 border-t border-line">
        {pages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="group grid gap-1.5 border-b border-line py-5 transition-colors duration-200 hover:bg-white/[0.015] md:grid-cols-[minmax(0,30%)_minmax(0,1fr)_auto] md:items-baseline md:gap-8"
          >
            <span className="text-[14px] text-paper">{page.title}</span>
            <span className="max-w-[58ch] text-[13px] leading-[1.65] text-muted">
              {page.body}
            </span>
            <ArrowRight
              size={15}
              aria-hidden
              className="hidden text-faint transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-paper md:block"
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
            {syntax.map(([token, meaning]) => (
              <div key={token} className="flex items-baseline justify-between gap-6 border-b border-line py-2.5">
                <dt className="mono text-[10.5px] text-paper">{token}</dt>
                <dd className="text-right text-[12px] text-muted">{meaning}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="text-[13px] font-medium text-paper">Command line</h2>
        <dl className="mt-4 grid gap-x-10 border-t border-line sm:grid-cols-2">
          {cli.map(([command, meaning]) => (
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
