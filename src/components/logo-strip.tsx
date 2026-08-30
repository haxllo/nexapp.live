const logos = [
  "GitHub",
  "Microsoft",
  "Tantivy",
  "WebView2",
  "Rust",
  "Vercel",
  "Linear",
  "Figma",
];

export function LogoStrip() {
  return (
    <section className="border-y border-border bg-bg py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-16">
          {logos.map((name) => (
            <span
              key={name}
              className="text-[13px] font-medium text-text-dim tracking-tight"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
