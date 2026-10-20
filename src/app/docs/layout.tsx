import { DocsNav } from "@/components/docs-nav";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="shell py-10 md:py-14">
      <div className="grid gap-8 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-14">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <DocsNav />
        </aside>
        <article className="min-w-0">{children}</article>
      </div>
    </div>
  );
}
