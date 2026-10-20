import { Reveal } from "@/components/reveal";
import { SectionHead, TextLink } from "@/components/ui";

const rows = [
  {
    token: "> restart",
    label: "Command mode",
    body: "Run actions by name. Power, uninstall, and anything a plugin exposes.",
  },
  {
    token: "4*(18+7)",
    label: "Calculator",
    body: "Arithmetic evaluates inline, with the result in the same row.",
  },
  {
    token: "july notes",
    label: "Create",
    body: "No match? Nex offers july-notes.md on your Desktop and gets out of the way.",
  },
  {
    token: "youtube.com",
    label: "Open link",
    body: "A bare domain opens in the default browser instead of being searched for.",
  },
  {
    token: "@files budget",
    label: "Scope",
    body: "Narrow to files, folders, apps, clipboard, or actions, then keep typing.",
  },
  {
    token: "kind:pdf modified:week",
    label: "Query DSL",
    body: "Filter by type, extension, or date. AND, OR, NOT, and -term all work.",
  },
];

export function Syntax() {
  return (
    <section id="syntax" className="scroll-mt-20 border-t border-line">
      <div className="shell py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <Reveal>
                <SectionHead title="The syntax is the shortcut.">
                  The query does the work. There is no menu to hunt for, no mode to
                  remember, and no reason to reach for the mouse.
                </SectionHead>
                <div className="mt-6">
                  <TextLink href="/docs/getting-started">Search syntax reference</TextLink>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-8">
            <Reveal delay={0.05}>
              <div className="border-t border-line">
                {rows.map((row) => (
                  <div
                    key={row.token}
                    className="group grid gap-2 border-b border-line py-5 md:grid-cols-[minmax(0,28%)_minmax(0,1fr)] md:gap-8"
                  >
                    <div className="mono text-[12.5px] text-paper transition-colors duration-200 group-hover:text-signal">
                      {row.token}
                    </div>
                    <div>
                      <div className="text-[13.5px] text-paper">{row.label}</div>
                      <p className="mt-1 max-w-[46ch] text-[13px] leading-[1.6] text-muted">
                        {row.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
