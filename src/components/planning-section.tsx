import { ProductSection } from "./section";

function PlanningMock() {
  const cols = [
    { name: "Backlog", count: 12 },
    { name: "In Progress", count: 5 },
    { name: "Done", count: 24 },
  ];
  const cards: Record<string, string[]> = {
    "Backlog": ["Search v3 spec", "Plugin API review", "Acrylic rewrite"],
    "In Progress": ["Tantivy shard split", "WebView2 warmup"],
    "Done": ["Plugin SDK v0.1", "Fuzzy ranking", "Cursor anchor"],
  };
  return (
    <div className="grid grid-cols-3 gap-3 p-4">
      {cols.map((c) => (
        <div key={c.name} className="space-y-2">
          <div className="flex items-center justify-between px-1">
            <span className="text-[11px] font-medium uppercase tracking-wider text-text-dim">
              {c.name}
            </span>
            <span className="text-[10px] text-text-dim">{c.count}</span>
          </div>
          {cards[c.name].map((title) => (
            <div
              key={title}
              className="rounded-md border border-border bg-bg p-2.5"
            >
              <span className="text-[12px] text-text">{title}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export function PlanningSection() {
  return (
    <ProductSection
      eyebrow="Planning"
      title="Plan and track, from anywhere."
      description="Plan sprints with cycles and projects. Open any issue, drag to reorder, or hit a hotkey to move state. Your keyboard is the fastest UI."
      visual={<PlanningMock />}
      reverse
    />
  );
}
