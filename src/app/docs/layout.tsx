import Link from "next/link";

const sidebar = [
  { title: "Overview", href: "/docs" },
  { title: "Getting Started", href: "/docs/getting-started" },
  { title: "Configuration", href: "/docs/configuration" },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex max-w-6xl px-6 py-16 gap-12">
      <aside className="hidden md:block w-56 shrink-0">
        <nav className="sticky top-24 space-y-1">
          <h3 className="text-sm font-medium text-text-dim mb-3 uppercase tracking-wider">Docs</h3>
          {sidebar.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-2 text-sm text-text-muted hover:text-text hover:bg-bg-card transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </aside>
      <article className="min-w-0 flex-1 max-w-3xl">
        {children}
      </article>
    </div>
  );
}
