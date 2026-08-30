type ChangelogEntry = {
  version: string;
  date: string;
  highlights: string[];
};

const columns: ChangelogEntry[] = [
  {
    version: "v2.6",
    date: "Aug 2026",
    highlights: [
      "Plugin SDK v1 — stable API",
      "Cycle planning hotkeys",
      "Per-monitor anchor placement",
    ],
  },
  {
    version: "v2.5",
    date: "Jul 2026",
    highlights: [
      "Tantivy shard compaction",
      "Quick-switch between results",
      "Faster cold-start under 200ms",
    ],
  },
  {
    version: "v2.4",
    date: "Jun 2026",
    highlights: [
      "Quick Launch pins",
      "Usage-based ranking",
      "Calculator locale support",
    ],
  },
];

export function ChangelogSection() {
  return (
    <section className="bg-bg py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-medium tracking-[-0.02em] leading-[1.05] text-text">
          Changelog
        </h2>
        <p className="mt-4 text-[15px] text-text-muted max-w-md">
          New updates and improvements to Nex.
        </p>

        <div className="mt-12 grid gap-12 md:grid-cols-3">
          {columns.map((col) => (
            <div key={col.version}>
              <div className="flex items-baseline gap-2 mb-4">
                <h3 className="text-[15px] font-medium text-text">
                  {col.version}
                </h3>
                <span className="text-[12px] text-text-dim">{col.date}</span>
              </div>
              <ul className="space-y-2.5">
                {col.highlights.map((h) => (
                  <li
                    key={h}
                    className="text-[13px] leading-relaxed text-text-muted"
                  >
                    — {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
