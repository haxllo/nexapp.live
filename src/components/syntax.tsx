import { SectionHeader, TextLink } from "@/components/ui";

const examples = [
  {
    code: "> restart",
    title: "Command mode",
    body: "Run actions by name. Power, uninstall, and anything a plugin exposes.",
  },
  {
    code: "4*(18+7)",
    title: "Calculator",
    body: "Arithmetic evaluates inline, with the result in the same row.",
  },
  {
    code: "july notes",
    title: "Create",
    body: "No match? Nex offers july-notes.md on your Desktop and gets out of the way.",
  },
  {
    code: "youtube.com",
    title: "Open link",
    body: "A bare domain opens in the default browser instead of being searched for.",
  },
  {
    code: "@files budget",
    title: "Scope",
    body: "Narrow to files, folders, apps, clipboard, or actions, then keep typing.",
  },
  {
    code: "kind:pdf modified:week",
    title: "Query DSL",
    body: "Filter by type, extension, or date. AND, OR, NOT, and -term all work.",
  },
];

export function Syntax() {
  return (
    <section id="syntax" className="syntax-section story-section" data-testid="syntax-section">
      <div className="shell">
        <SectionHeader
          eyebrow="02 / LESS CLICKING. MORE DOING."
          title="The syntax is the shortcut."
          action={
            <TextLink href="/docs/getting-started" testId="syntax-reference-link">
              Search syntax reference
            </TextLink>
          }
        >
          The query does the work. There is no menu to hunt for, no mode to remember, and
          no reason to reach for the mouse.
        </SectionHeader>

        <div className="syntax-grid">
          {examples.map((example, index) => (
            <div key={example.code} className="syntax-example" data-testid={`syntax-example-${index}`}>
              <div className="syntax-token">
                <span className="syntax-index" aria-hidden>
                  0{index + 1}
                </span>
                <code>{example.code}</code>
              </div>
              <div>
                <h3>{example.title}</h3>
                <p>{example.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
