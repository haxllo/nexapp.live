import type { Metadata } from "next";
import { Button } from "@/components/ui";
import { CodeBlock } from "@/components/code-block";
import { PageIntro } from "@/components/page-intro";
import { TextLink } from "@/components/ui";
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
    <div data-testid="download-page-container">
      <PageIntro
        label="Download"
        title="Nex on Windows."
        lede="Windows 10 or 11, 64-bit. The installer is 6.9 MB, and Nex starts in the background with the Win key already wired up."
      >
        <div className="pg-actions">
          <Button
            href={installer.url}
            external
            size="lg"
            withWindows
            testId="download-primary-button"
          >
            Download for Windows
          </Button>
          <span
            className="ln-mono text-[11.5px] text-[var(--ln-text-4)]"
            data-testid="download-latest-version"
          >
            v{LATEST.version} · {LATEST.date}
          </span>
        </div>
      </PageIntro>

      <div className="pg-body">
        <div className="ln-shell pg-dl">
          <div className="min-w-0">
            <section>
              <div className="pg-release">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/monochrome.png"
                  alt="Nex"
                  loading="lazy"
                  width={50}
                  height={50}
                  decoding="async"
                  className="pg-mark"
                />
                <div>
                  <h2>Latest release</h2>
                  <p>{LATEST.title}</p>
                </div>
              </div>

              <div className="pg-assets">
                {latestAssets.map((asset) => (
                  <a
                    key={asset.id}
                    href={asset.url}
                    data-testid={`download-asset-${asset.id}`}
                    className="pg-asset"
                  >
                    <span className="min-w-0">
                      <strong>{asset.label}</strong>
                      <span>{asset.name}</span>
                    </span>
                    <small>{asset.size}</small>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      aria-hidden="true"
                    >
                      <path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z" />
                    </svg>
                  </a>
                ))}
              </div>

              <p className="pg-note" style={{ marginTop: 28 }}>
                Older versions live on{" "}
                <a
                  href={GITHUB_RELEASES}
                  data-testid="download-older-releases"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Releases
                </a>
                .
              </p>
            </section>

            <section className="pg-block" style={{ marginTop: 72 }}>
              <div className="pg-label">
<span>After installing</span>
                <p>Three steps from installer to panel.</p>
              </div>
              <div className="pg-assets">
                {afterInstall.map((item) => (
                  <div
                    key={item.title}
                    className="pg-asset"
                    style={{ gridTemplateColumns: "minmax(0, 1fr)" }}
                  >
                    <span className="min-w-0">
                      <strong>{item.title}</strong>
                      <span
                        className="ln-mono"
                        style={{
                          fontFamily: "var(--ln-font)",
                          fontSize: "13px",
                          lineHeight: 1.65,
                          color: "var(--ln-text-3)",
                        }}
                      >
                        {item.body}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="pg-block" style={{ marginTop: 72 }}>
              <div className="pg-label">
<span>Build from source</span>
                <p>Rust 1.85 or newer.</p>
              </div>
              <p style={{ maxWidth: "56ch", fontSize: 13.5, lineHeight: 1.65, color: "var(--ln-text-3)" }}>
                The two binaries are the app and the helper that owns activation and
                allowlisted key simulation.
              </p>
              <div style={{ marginTop: 20 }}>
                <CodeBlock code={sourceBuild} title="PowerShell" />
              </div>
            </section>
          </div>

          <aside className="pg-rail min-w-0">
            <div data-testid="download-system-reqs">
              <h3>Requirements</h3>
              <dl>
                {requirements.map(([label, value]) => (
                  <div key={label} className="contents">
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div data-testid="download-file-locations">
              <h3>Where things live</h3>
              <div className="pg-keys">
                <div>
                  <span className="pg-key">%APPDATA%\Nex\config.toml</span>
                  <span>config</span>
                </div>
                <div>
                  <span className="pg-key">%APPDATA%\Nex\index.tantivy</span>
                  <span>index</span>
                </div>
              </div>
              <p style={{ marginTop: 12 }}>
                Settings hot-reload in about a second. The hotkey and the index path need a
                restart.
              </p>
            </div>

            <div>
              <h3>Keys</h3>
              <div className="pg-keys">
                <div>
                  <kbd className="pg-key">Win</kbd>
                  <span>default hotkey</span>
                </div>
                <div>
                  <kbd className="pg-key">Esc</kbd>
                  <span>close the panel</span>
                </div>
                <div>
                  <kbd className="pg-key">Enter</kbd>
                  <span>open the selection</span>
                </div>
              </div>
            </div>

            <div>
              <h3>Next</h3>
              <p>
                <TextLink href="/docs/getting-started">Setup and troubleshooting</TextLink>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
