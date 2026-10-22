import { Eyebrow } from "@/components/ui";

const metrics = [
  { value: "7.1 MB", label: "Installer, x64", note: "v2.28.0" },
  { value: "72 MB", label: "Active memory target", note: "active_memory_target_mb" },
  { value: "120k", label: "Indexed items, default cap", note: "index_max_items_total" },
];

const stack = [
  { name: "Rust core", role: "Search, indexing, hotkey, tray, updates." },
  { name: "tao + wry", role: "A real Win32 window hosting a WebView2 surface." },
  { name: "DirectComposition glass", role: "The desktop behind the panel bends into the rim." },
  { name: "Tantivy", role: "Full text index with typo tolerance and ranking." },
  { name: "Everything SDK", role: "Optional file index from Voidtools, when running." },
  { name: "SQLite, WAL mode", role: "History, bookmarks, and settings that survive a crash." },
];

export function Engineering() {
  return (
    <section id="engineering" className="engineering-section" data-testid="engineering-section">
      <div className="shell py-20 md:py-28">
        <div className="engineering-layout">
          <div>
            <div className="max-w-[46rem]">
              <div className="mb-5">
                <Eyebrow rule>Engineering</Eyebrow>
              </div>
              <h2 className="text-base leading-snug text-paper md:text-lg">
                Glass, rendered, not painted.
              </h2>
              <p className="mt-5 max-w-[54ch] text-sm leading-[1.85] text-muted">
                Version 2.28 stopped faking the blur. The panel captures the desktop behind
                it, bends that image at the rim, then draws its own contact shadow. If the
                GPU path cannot start, it falls back to an opaque surface instead of a blank
                window.
              </p>
            </div>

            <div className="engineering-metrics mt-10">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="serif text-[36px] leading-none tracking-[-0.025em] text-paper tabular-nums">
                    {metric.value}
                  </div>
                  <div className="mt-3 text-[13px] text-muted">{metric.label}</div>
                  <div className="mono mt-1 text-[10.5px] text-faint">{metric.note}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="engineering-stack">
              {stack.map((item, index) => (
                <div key={item.name} data-testid={`engineering-stack-${index}`}>
                  <span className="mono text-[11px] text-paper">{item.name}</span>
                  <span className="text-[12px] leading-[1.7] text-muted">{item.role}</span>
                </div>
              ))}
            </div>
            <p className="mono mt-10 max-w-[86ch] text-[10.5px] leading-[1.7] text-faint">
              The real panel carries WDA_EXCLUDEFROMCAPTURE, the OS flag honored by
              screenshots, OBS, and Discord, so the material never appears in a capture. The
              previews render it in the browser. The native tint also follows the backdrop,
              switching at 0.55 luma; these static previews stay on the dark tint.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
