export function FinalCta() {
  return (
    <section className="bg-bg py-32 md:py-40 border-t border-border">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-balance text-4xl sm:text-5xl md:text-[56px] font-medium tracking-[-0.03em] leading-[1.02] text-text">
          Built for the future.
          <br />
          Available today.
        </h2>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="/download"
            className="inline-flex h-10 items-center justify-center rounded-md bg-text px-5 text-[13px] font-medium text-bg hover:bg-text-muted transition-colors"
          >
            Download for Windows
          </a>
          <a
            href="/docs"
            className="inline-flex h-10 items-center justify-center rounded-md px-3 text-[13px] font-medium text-text-muted hover:text-text transition-colors"
          >
            Read the docs →
          </a>
        </div>
      </div>
    </section>
  );
}
