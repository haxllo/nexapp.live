import { ProductSection } from "./section";

function IntakeMock() {
  const items = [
    { name: "Refactor search ranking", tag: "feature", id: "NEX-148" },
    { name: "Acrylic backdrop flicker on multi-monitor", tag: "bug", id: "NEX-149" },
    { name: "Tantivy index shard compaction", tag: "chore", id: "NEX-150" },
    { name: "Add calculator locale support", tag: "feature", id: "NEX-151" },
  ];
  return (
    <div className="p-4 space-y-2">
      {items.map((it) => (
        <div
          key={it.id}
          className="flex items-center gap-3 rounded-md border border-border bg-bg px-3 py-2"
        >
          <span
            className={`h-2 w-2 rounded-full ${
              it.tag === "feature"
                ? "bg-accent"
                : it.tag === "bug"
                  ? "bg-red-400/60"
                  : "bg-text-dim"
            }`}
          />
          <span className="text-[12px] font-mono text-text-dim">{it.id}</span>
          <span className="text-[13px] text-text">{it.name}</span>
        </div>
      ))}
    </div>
  );
}

export function IntakeSection() {
  return (
    <ProductSection
      eyebrow="Intake"
      title="Capture every request, instantly."
      description="A keyboard-first inbox for issues, ideas, and triage. Type to create, type to route, type to assign — all from the launcher."
      visual={<IntakeMock />}
    />
  );
}
