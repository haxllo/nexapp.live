type Card = {
  title: string;
  desc: string;
  shape: "cube" | "hex" | "stack";
};

const cards: Card[] = [
  {
    title: "Plugins",
    desc: "Extend Nex with WASM plugins. First-class APIs for indexing, actions, and UI.",
    shape: "cube",
  },
  {
    title: "Built for modern systems",
    desc: "Tantivy full-text engine, WebView2 surface, native Win32 integration.",
    shape: "hex",
  },
  {
    title: "Crafted to feel good",
    desc: "Acrylic backdrop, cursor-anchored placement, 60ms hotkey-to-visible.",
    shape: "stack",
  },
];

function Cube() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <path d="M30 8 L52 20 L52 40 L30 52 L8 40 L8 20 Z" stroke="currentColor" strokeWidth="1" />
      <path d="M30 8 L30 30 M30 30 L8 20 M30 30 L52 20" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function Hex() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <path d="M30 6 L52 18 L52 42 L30 54 L8 42 L8 18 Z" stroke="currentColor" strokeWidth="1" />
      <path d="M19 12 L30 18 L41 12 M19 48 L30 42 L41 48" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function Stack() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <path d="M30 6 L52 16 L30 26 L8 16 Z" stroke="currentColor" strokeWidth="1" />
      <path d="M8 30 L30 40 L52 30 M8 44 L30 54 L52 44" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function FeaturesThreeCards() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="max-w-2xl text-balance text-2xl sm:text-3xl font-medium tracking-tight text-text">
          A new species of{" "}
          <span className="text-text-muted">launcher tool.</span>{" "}
          Purpose-built for keyboard-first power users.
        </h2>

        <div className="mt-16 grid gap-px bg-border rounded-lg overflow-hidden border border-border md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-bg p-8 flex flex-col gap-12 min-h-[280px]"
            >
              <div className="text-text-muted">
                {c.shape === "cube" ? <Cube /> : c.shape === "hex" ? <Hex /> : <Stack />}
              </div>
              <div>
                <h3 className="text-[15px] font-medium text-text">{c.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-text-muted">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
