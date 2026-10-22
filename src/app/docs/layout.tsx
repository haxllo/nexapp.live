import { DocsNav } from "@/components/docs-nav";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="docs-layout">
      <div className="shell docs-grid">
        <aside className="docs-sidebar">
          <DocsNav />
        </aside>
        <article className="docs-article" data-testid="docs-content-body">
          {children}
        </article>
      </div>
    </div>
  );
}
