import { BookmarkSimple } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHead } from "@/components/ui";

function Chips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <span
          key={item}
          className="mono rounded-[5px] border border-line bg-white/[0.03] px-1.5 py-1 text-[10.5px] text-muted"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

const cells = [
  {
    title: "Find what is actually there",
    body: "Start menu apps, project files, folders. Fuzzy matching, ranked by what you use and by what you touched last.",
    span: "md:col-span-6 lg:col-span-5",
    visual: <Chips items={["@apps", "@files", "@folders", "kind:pdf", "modified:week", "-node_modules"]} />,
  },
  {
    title: "Everything SDK, when it is running",
    body: "With Voidtools Everything installed, file results come from its index. Without it, Nex walks your roots and watches for changes.",
    span: "md:col-span-3 lg:col-span-4",
    visual: (
      <div className="mono space-y-1 text-[11.5px] text-faint">
        <div>
          <span className="text-muted">file_discovery_backend</span> ={" "}
          <span className="text-paper">&quot;auto&quot;</span>
        </div>
        <div className="text-[10.5px]">everything → walkdir fallback</div>
      </div>
    ),
  },
  {
    title: "Create what is missing",
    body: "Type a name that does not exist yet and Nex offers to create the file or folder, in the folder you choose.",
    span: "md:col-span-3 lg:col-span-3",
    visual: (
      <div className="mono text-[11.5px]">
        <div className="text-faint">q3 notes</div>
        <div className="mt-1.5 flex items-center gap-1.5 text-paper">
          <span className="text-signal">+</span> q3-notes.md
        </div>
      </div>
    ),
  },
  {
    title: "Do the math inline",
    body: "Expressions evaluate as you type. Parentheses, percentages, and order of operations included.",
    span: "md:col-span-3 lg:col-span-4",
    visual: (
      <div>
        <div className="mono text-[12px] text-faint">(4800 / 12) * 1.09</div>
        <div className="mono mt-1.5 text-[30px] leading-none text-signal tabular-nums">
          436
        </div>
      </div>
    ),
  },
  {
    title: "Clipboard, kept on this device",
    body: "Recent copies with a retention window, encrypted at rest with DPAPI. Password and OTP patterns are skipped.",
    span: "md:col-span-3 lg:col-span-4",
    visual: (
      <div className="mono flex flex-wrap gap-x-2 gap-y-1 text-[10.5px] text-faint">
        <span>password</span>
        <span aria-hidden className="text-line-2">/</span>
        <span>otp</span>
        <span aria-hidden className="text-line-2">/</span>
        <span>token</span>
        <span aria-hidden className="text-line-2">/</span>
        <span>secret</span>
        <span aria-hidden className="text-line-2">/</span>
        <span>apikey</span>
      </div>
    ),
  },
  {
    title: "Pins and bookmarks",
    body: "Bookmark a result to keep it near the top, or pin the apps that start your day to Quick Launch.",
    span: "md:col-span-6 lg:col-span-4",
    visual: (
      <div className="flex items-center justify-between gap-4 border-t border-line pt-4">
        <span className="mono text-[10.5px] text-muted">Quick Launch</span>
        <span className="flex items-center gap-2">
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              className="flex h-6 w-6 items-center justify-center rounded-[6px] border border-line bg-white/[0.04] text-signal"
            >
              <BookmarkSimple size={11} weight="fill" aria-hidden />
            </span>
          ))}
        </span>
      </div>
    ),
  },
];

export function Capabilities() {
  return (
    <section id="features" className="scroll-mt-20 border-t border-line">
      <div className="shell py-20 md:py-28">
        <Reveal>
          <SectionHead title="One field, the whole machine.">
            Search is the entry point. Opening, creating, calculating, and shutting
            down all happen behind the same box.
          </SectionHead>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-12 overflow-hidden rounded-[12px] border border-line bg-line">
            <div className="grid grid-cols-1 gap-px md:grid-cols-6 lg:grid-cols-12">
              {cells.map((cell) => (
                <div
                  key={cell.title}
                  className={`flex flex-col justify-between gap-6 bg-ink p-6 md:p-7 ${cell.span}`}
                >
                  <div>
                    <h3 className="text-[14.5px] font-medium tracking-[-0.01em] text-paper">
                      {cell.title}
                    </h3>
                    <p className="mt-2.5 max-w-[42ch] text-[13px] leading-[1.65] text-muted">
                      {cell.body}
                    </p>
                  </div>
                  {cell.visual}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
