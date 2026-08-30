import Link from "next/link";

const groups: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Changelog", href: "/changelog" },
      { label: "Download", href: "/download" },
      { label: "Linear Method", href: "/method" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "/docs" },
      { label: "Plugin SDK", href: "/plugin-sdk" },
      { label: "Help center", href: "/help" },
      { label: "Status", href: "/status" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Brand", href: "/brand" },
      { label: "Contact", href: "mailto:hello@nexapp.live" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Security", href: "/security" },
      { label: "License (MIT)", href: "https://github.com/haxllo/nex/blob/main/LICENSE" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="text-[13px] font-medium text-text">Nex</span>
            </div>
            <p className="mt-3 text-[12px] leading-relaxed text-text-dim max-w-[180px]">
              Keyboard-first launcher for Windows. Built in Rust.
            </p>
          </div>
          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="text-[12px] font-medium uppercase tracking-wider text-text-dim mb-3">
                {g.title}
              </h4>
              <ul className="space-y-2">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[13px] text-text-muted hover:text-text transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border pt-6">
          <p className="text-[12px] text-text-dim">
            © 2026 Nex. MIT License.
          </p>
          <div className="flex items-center gap-3 text-text-dim">
            <a
              href="https://github.com/haxllo/nex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] hover:text-text transition-colors"
            >
              GitHub
            </a>
            <span className="h-3 w-px bg-border" />
            <a
              href="https://github.com/haxllo/nex/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] hover:text-text transition-colors"
            >
              Discussions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
