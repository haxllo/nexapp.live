import { Reveal } from "@/components/reveal";
import { Figure, SectionHead } from "@/components/ui";

const stack = [
  { name: "Rust core", role: "Search, indexing, hotkey, tray, updates." },
  { name: "tao + wry", role: "A real Win32 window hosting a WebView2 surface." },
  { name: "DWM refraction", role: "The desktop behind the panel bends into the rim." },
  { name: "Tantivy", role: "Full text index with typo tolerance and ranking." },
  { name: "Everything SDK", role: "Optional file index from Voidtools, when running." },
  { name: "SQLite, WAL mode", role: "History, bookmarks, and settings that survive a crash." },
];

export function Engineering() {
  return (
    <section id="engineering" className="scroll-mt-20 border-t border-line">
      <div className="shell py-20 md:py-28">
        <Reveal>
          <SectionHead title="Glass, rendered, not painted.">
            Version 2.28 stopped faking the blur. The panel captures the desktop
            behind it, bends that image at the rim, then draws its own contact
            shadow. If the GPU path cannot start, it falls back to an opaque surface
            instead of a blank window.
          </SectionHead>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-12 grid gap-8 border-t border-line pt-7 sm:grid-cols-3 sm:gap-0">
            <Figure value="7.4 MB" label="Installer, x64" note="v2.28.0" />
            <div className="sm:border-l sm:border-line sm:pl-8">
              <Figure
                value="72 MB"
                label="Active memory target"
                note="active_memory_target_mb"
              />
            </div>
            <div className="sm:border-l sm:border-line sm:pl-8">
              <Figure
                value="120k"
                label="Indexed items, default cap"
                note="index_max_items_total"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mono mt-10 max-w-[86ch] text-[10.5px] leading-[1.7] text-faint">
            The real panel carries WDA_EXCLUDEFROMCAPTURE, the OS flag honored by
            screenshots, OBS, and Discord, so the material never appears in a capture.
            The previews render it in the browser. The native tint also follows the
            backdrop, switching at 0.55 luma; these static previews stay on the dark
            tint.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-14 grid gap-x-12 sm:grid-cols-2">
            {stack.map((item) => (
              <div
                key={item.name}
                className="flex flex-col gap-1 border-b border-line py-3.5 sm:grid sm:grid-cols-[140px_minmax(0,1fr)] sm:items-baseline sm:gap-6"
              >
                <span className="mono text-[11.5px] text-paper">{item.name}</span>
                <span className="text-[12.5px] leading-[1.55] text-muted">
                  {item.role}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
