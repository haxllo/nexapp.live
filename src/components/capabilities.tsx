import type { ReactNode } from "react";
import {
  Bookmark,
  ChartBar,
  Copy,
  FolderSimple,
  MagnifyingGlass,
  Plus,
} from "@phosphor-icons/react/ssr";
import { SectionHeader, TextLink } from "@/components/ui";

type Capability = {
  id: number;
  title: string;
  body: string;
  icon: ReactNode;
  visual: ReactNode;
};

const chips = ["@apps", "@files", "@folders", "kind:pdf", "modified:week", "-node_modules"];
const sensitive = ["password", "otp", "token", "secret", "apikey"];

const capabilities: Capability[] = [
  {
    id: 1,
    title: "Find what is actually there",
    body: "Start menu apps, project files, folders. Fuzzy matching, ranked by what you use and by what you touched last.",
    icon: <MagnifyingGlass size={24} />,
    visual: (
      <div className="flex flex-wrap gap-1.5">
        {chips.map((chip) => (
          <span
            key={chip}
            className="mono rounded-[5px] border border-line bg-white/[0.03] px-1.5 py-1 text-[10.5px] text-muted"
          >
            {chip}
          </span>
        ))}
      </div>
    ),
  },
  {
    id: 2,
    title: "Everything SDK, when it is running",
    body: "With Voidtools Everything installed, file results come from its index. Without it, Nex walks your roots and watches for changes.",
    icon: <FolderSimple size={24} />,
    visual: (
      <div className="mono space-y-1 text-[11.5px] text-faint">
        <div>
          <span className="text-muted">file_discovery_backend</span>=
          <span className="text-paper">&quot;auto&quot;</span>
        </div>
        <div className="text-[10.5px]">everything → walkdir fallback</div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Create what is missing",
    body: "Type a name that does not exist yet and Nex offers to create the file or folder, in the folder you choose.",
    icon: <Plus size={24} />,
    visual: (
      <div className="mono text-[11.5px]">
        <div className="text-faint">q3 notes</div>
        <div className="mt-1.5 flex items-center gap-1.5 text-paper">
          <span className="text-signal">+</span>
          q3-notes.md
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Do the math inline",
    body: "Expressions evaluate as you type. Parentheses, percentages, and order of operations included.",
    icon: <ChartBar size={24} />,
    visual: (
      <div>
        <div className="mono text-[12px] text-faint">(4800 / 12) * 1.09</div>
        <div className="serif mt-2 text-[44px] leading-none text-ember tabular-nums">
          436
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Clipboard, kept on this device",
    body: "Recent copies with a retention window, encrypted at rest with DPAPI. Password and OTP patterns are skipped.",
    icon: <Copy size={24} />,
    visual: (
      <div className="mono flex flex-wrap gap-x-2 gap-y-1 text-[10.5px] text-faint">
        {sensitive.map((word, index) => (
          <span key={word} className="contents">
            <span>{word}</span>
            {index < sensitive.length - 1 && (
              <span aria-hidden className="text-line-2">
                /
              </span>
            )}
          </span>
        ))}
      </div>
    ),
  },
  {
    id: 6,
    title: "Pins and bookmarks",
    body: "Bookmark a result to keep it near the top, or pin the apps that start your day to Quick Launch.",
    icon: <Bookmark size={24} />,
    visual: (
      <div className="flex items-center justify-between gap-4 border-t border-line pt-4">
        <span className="mono text-[10.5px] text-muted">Quick Launch</span>
        <span className="flex items-center gap-2">
          {[0, 1, 2].map((item) => (
            <span
              key={item}
              className="flex h-6 w-6 items-center justify-center rounded-[6px] border border-line bg-white/[0.04] text-signal"
            >
              <Bookmark size={11} weight="fill" aria-hidden />
            </span>
          ))}
        </span>
      </div>
    ),
  },
];

export function Capabilities() {
  return (
    <section id="features" className="capabilities-section" data-testid="capabilities-section">
      <div className="shell">
        <SectionHeader
          eyebrow="01 / A SHORTER PATH"
          title="One field, the whole machine."
          action={<TextLink href="/features" testId="capabilities-all-features">Explore every feature</TextLink>}
        >
          Search is the entry point. Opening, creating, calculating, and shutting down all
          happen behind the same box.
        </SectionHeader>

        <div className="capabilities-grid">
          {capabilities.map((capability) => (
            <div
              key={capability.id}
              data-testid={`capability-card-${capability.id - 1}`}
              className="capability"
            >
              <div className="capability-icon">
                {capability.icon}
                <span>0{capability.id}</span>
              </div>
              <div>
                <h3>{capability.title}</h3>
                <p>{capability.body}</p>
              </div>
              <div className="capability-visual">{capability.visual}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
