import Image from "next/image";
import Link from "next/link";
import {
  GITHUB_ISSUES,
  GITHUB_REPO,
  GITHUB_RELEASES,
  LICENSE_URL,
} from "@/lib/constants";

const columns: { title: string; links: { label: string; href: string; external?: boolean }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Download", href: "/download" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Configuration", href: "/docs/configuration" },
      { label: "Plugin SDK", href: "/plugin-sdk" },
      { label: "GitHub", href: GITHUB_REPO, external: true },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      { label: "Releases", href: GITHUB_RELEASES, external: true },
      { label: "Issues", href: GITHUB_ISSUES, external: true },
      { label: "MIT license", href: LICENSE_URL, external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-8">
          <div>
            <Link href="/" className="flex w-fit items-center gap-2.5" aria-label="Nex home">
              <Image src="/nex-logo.svg" alt="" width={20} height={20} />
              <span className="text-[13.5px] font-medium tracking-[-0.01em] text-paper">
                Nex
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
              <h2 className="text-[12px] font-medium text-paper">{column.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] text-muted transition-colors duration-200 hover:text-paper"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
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

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="mono text-[10.5px] text-faint">
            © 2026 Nex. MIT licensed. Built with Rust and WebView2.
          </p>
          <p className="mono text-[10.5px] text-faint">
            Not affiliated with Microsoft.
          </p>
        </div>
      </div>
    </footer>
  );
}
