import { DocsNav } from "@/components/docs-nav";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="ln-shell pg-docs">
      <aside className="pg-side">
        <DocsNav />
      </aside>
      <article data-testid="docs-content-body">{children}</article>
    </div>
  );
}
