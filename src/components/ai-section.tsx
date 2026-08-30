import { ProductSection } from "./section";

function AiMock() {
  return (
    <div className="p-5 space-y-4">
      <div className="flex items-start gap-3">
        <div className="h-7 w-7 shrink-0 rounded-md bg-accent/20 border border-border" />
        <div className="flex-1 rounded-lg border border-border bg-bg p-3">
          <p className="text-[12px] text-text-dim font-mono mb-1">user</p>
          <p className="text-[13px] text-text">Summarize open issues for "search v3".</p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <div className="h-7 w-7 shrink-0 rounded-md bg-bg-card border border-border" />
        <div className="flex-1 rounded-lg border border-border bg-bg-elevated p-3 space-y-2">
          <p className="text-[12px] text-text-dim font-mono">nex</p>
          <p className="text-[13px] text-text">
            4 issues are open. 2 are unassigned. Tantivy index split
            is the largest remaining piece. 1 critical bug on multi-monitor
            acrylic is blocking release.
          </p>
          <div className="flex gap-1.5 pt-1">
            <span className="rounded-md border border-border bg-bg px-2 py-0.5 text-[10px] text-text-muted">
              NEX-149
            </span>
            <span className="rounded-md border border-border bg-bg px-2 py-0.5 text-[10px] text-text-muted">
              NEX-150
            </span>
            <span className="rounded-md border border-border bg-bg px-2 py-0.5 text-[10px] text-text-muted">
              NEX-151
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AiSection() {
  return (
    <ProductSection
      eyebrow="Assist"
      title="Built-in intelligence, on demand."
      description="Ask the launcher to summarize threads, draft issues, or find that file you lost. Local-first, no cloud roundtrip, no waiting."
      visual={<AiMock />}
    />
  );
}
