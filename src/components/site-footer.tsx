import Image from "next/image";
import Link from "next/link";
import { GITHUB_ISSUES, GITHUB_REPO, GITHUB_RELEASES, LICENSE_URL } from "@/lib/site";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features", id: "features" },
      { label: "Download", href: "/download", id: "download" },
      { label: "Changelog", href: "/changelog", id: "changelog" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "/docs", id: "documentation" },
      { label: "Configuration", href: "/docs/configuration", id: "configuration" },
      { label: "Plugin SDK", href: "/plugin-sdk", id: "plugin-sdk" },
      { label: "GitHub", href: GITHUB_REPO, id: "github", external: true },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      { label: "Releases", href: GITHUB_RELEASES, id: "releases", external: true },
      { label: "Issues", href: GITHUB_ISSUES, id: "issues", external: true },
      { label: "MIT license", href: LICENSE_URL, id: "mit-license", external: true },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer" data-testid="footer-container">
      <div className="shell">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="brand w-fit" aria-label="Nex home" data-testid="footer-logo-link">
              <span className="inline-flex h-9 w-9 overflow-hidden rounded-[10px] ring-1 ring-white/10 shadow-[0_8px_24px_-8px_rgba(255,122,60,0.6)]">
                <Image
                  src="/nex-logo.png"
                  alt=""
                  width={72}
                  height={72}
                  className="h-full w-full object-cover"
                />
              </span>
              <span>
                Nex<span className="brand-period">.</span>
              </span>
            </Link>
            <p className="mt-4 max-w-[30ch] text-[13px] leading-[1.6] text-muted">
              A keyboard-first launcher for Windows. Free, open source, built in Rust.
            </p>
            <div className="mono mt-6 flex items-center gap-3 text-[10.5px] text-faint">
              <span>Windows 10 / 11</span>
              <span aria-hidden className="h-2.5 w-px bg-line-2" />
              <span>x64</span>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="mono text-[10px] uppercase tracking-[0.2em] text-ember">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        data-testid={`footer-link-${link.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] text-muted transition-colors duration-200 hover:text-paper"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        data-testid={`footer-link-${link.id}`}
                        className="text-[13px] text-muted transition-colors duration-200 hover:text-paper"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="mono text-[10.5px] text-faint">
            © 2026 Nex. MIT licensed. Built with Rust and WebView2.
          </p>
          <p className="mono text-[10.5px] text-faint">Not affiliated with Microsoft.</p>
        </div>
      </div>
    </footer>
  );
}
