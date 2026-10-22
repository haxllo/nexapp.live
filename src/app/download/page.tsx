import type { Metadata } from "next";
import Image from "next/image";
import { DownloadSimple } from "@phosphor-icons/react/ssr";
import { CodeBlock } from "@/components/code-block";
import { Button, Kbd, PageHead, TextLink } from "@/components/ui";
import { latestAssets } from "@/lib/releases";
import { GITHUB_RELEASES, LATEST } from "@/lib/site";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download Nex for Windows 10 and 11, x64. Installer, portable zip, and build-from-source instructions.",
};

const sourceBuild = `git clone https://github.com/haxllo/nex.git
cd nex
cargo build --release --bin Nex --bin NexHelper
.\\target\\release\\Nex.exe`;

const requirements = [
  ["System", "Windows 10 or 11, 64-bit"],
  ["Runtime", "WebView2, bundled with Windows 11"],
  ["Memory", "72 MB active target, configurable"],
  ["Disk", "6.9 MB installer"],
  ["License", "MIT, source available"],
];

const afterInstall = [
  {
    title: "The installer runs and Nex starts in the background",
    body: "There is no window until you ask for one. A tray icon takes over from there.",
  },
  {
    title: "Press Win",
    body: "The panel opens on the monitor under your cursor, in the upper third, with Quick Launch already filled.",
  },
  {
    title: "Type, then Enter",
    body: "Apps, files, and actions share one field. Esc closes the panel and gives focus back to whatever was in front.",
  },
];

export default function DownloadPage() {
  const installer = latestAssets[0];

  return (
    <div className="shell pt-10 pb-20 md:pb-28" data-testid="download-page-container">
      <PageHead
        eyebrow="Download"
        title="Install Nex."
        lede="Windows 10 or 11, 64-bit. The installer is 6.9 MB, and Nex starts in the background with the Win key already wired up."
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="min-w-0 lg:col-span-7">
          <div className="download-release">
            <Image
              src="/nex-logo.png"
              alt="Nex"
              width={50}
              height={50}
              className="download-mark"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-[15px] font-medium text-paper">Latest release</h2>
              <span
                className="mono pr-16 text-[10.5px] text-faint"
                data-testid="download-latest-version"
              >
                v{LATEST.version} · {LATEST.date}
              </span>
            </div>
            <p className="mt-1.5 text-[13px] text-muted">{LATEST.title}</p>

            <div className="mt-6">
              <Button
                href={installer.url}
                external
                size="lg"
                className="w-full sm:w-auto"
                testId="download-primary-button"
                icon={<DownloadSimple size={15} aria-hidden />}
              >
                Download for Windows
              </Button>
            </div>

            <div className="mt-7 border-t border-line">
              {latestAssets.map((asset) => (
                <a
                  key={asset.id}
                  href={asset.url}
                  data-testid={`download-asset-${asset.id}`}
                  className="group flex items-center justify-between gap-4 border-b border-line py-3 transition-colors duration-200 hover:text-paper"
                >
                  <span className="min-w-0">
                    <span className="block text-[12.5px] text-paper">{asset.label}</span>
                    <span className="mono block truncate text-[10.5px] text-faint">
                      {asset.name}
                    </span>
                  </span>
                  <span className="mono flex shrink-0 items-center gap-3 text-[10.5px] text-faint">
                    {asset.size}
                    <DownloadSimple
                      size={13}
                      aria-hidden
                      className="text-faint transition-colors group-hover:text-paper"
                    />
                  </span>
                </a>
              ))}
            </div>

            <p className="mono mt-4 text-[10.5px] leading-relaxed text-faint">
              Older versions live on{" "}
              <a
                href={GITHUB_RELEASES}
                data-testid="download-older-releases"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted underline decoration-white/20 underline-offset-2 hover:text-paper"
              >
                GitHub Releases
              </a>
              .
            </p>
          </div>

          <section className="mt-10">
            <h2 className="text-[15px] font-medium text-paper">After installing</h2>
            <div className="mt-4 border-t border-line">
              {afterInstall.map((item) => (
                <div key={item.title} className="border-b border-line py-4">
                  <div className="text-[13.5px] text-paper">{item.title}</div>
                  <p className="mt-1.5 max-w-[52ch] text-[13px] leading-[1.65] text-muted">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-[15px] font-medium text-paper">Build from source</h2>
            <p className="mt-2 max-w-[56ch] text-[13px] leading-[1.65] text-muted">
              Rust 1.85 or newer. The two binaries are the app and the helper that owns
              activation and allowlisted key simulation.
            </p>
            <div className="mt-4">
              <CodeBlock code={sourceBuild} title="PowerShell" />
            </div>
          </section>
        </div>

        <aside className="download-aside min-w-0 lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
          <div data-testid="download-system-reqs">
            <h2 className="text-[12px] font-medium text-paper">Requirements</h2>
            <dl className="mt-4 space-y-3">
              {requirements.map(([label, value]) => (
                <div key={label} className="flex items-baseline justify-between gap-6">
                  <dt className="mono text-[10.5px] uppercase tracking-[0.08em] text-faint">
                    {label}
                  </dt>
                  <dd className="text-right text-[12.5px] text-muted">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-6" data-testid="download-file-locations">
            <h2 className="text-[12px] font-medium text-paper">Where things live</h2>
            <div className="mt-4 space-y-4">
              <div>
                <div className="text-[12.5px] text-muted">Config</div>
                <div className="mono mt-1 break-all rounded-[6px] border border-line bg-white/[0.03] px-2 py-1.5 text-[10.5px] text-paper">
                  %APPDATA%\Nex\config.toml
                </div>
              </div>
              <div>
                <div className="text-[12.5px] text-muted">Index</div>
                <div className="mono mt-1 break-all rounded-[6px] border border-line bg-white/[0.03] px-2 py-1.5 text-[10.5px] text-paper">
                  %APPDATA%\Nex\index.tantivy
                </div>
              </div>
              <p className="text-[12.5px] leading-[1.6] text-muted">
                Settings hot-reload in about a second. The hotkey and the index path need a
                restart.
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-2">
              <Kbd>Win</Kbd>
              <span className="text-[12.5px] text-muted">default hotkey</span>
            </div>
            <div className="flex items-center gap-2">
              <Kbd>Esc</Kbd>
              <span className="text-[12.5px] text-muted">close the panel</span>
            </div>
            <div className="flex items-center gap-2">
              <Kbd>Enter</Kbd>
              <span className="text-[12.5px] text-muted">open the selection</span>
            </div>
          </div>

          <div className="mt-8">
            <TextLink href="/docs/getting-started">Setup and troubleshooting</TextLink>
          </div>
        </aside>
      </div>
    </div>
  );
}
