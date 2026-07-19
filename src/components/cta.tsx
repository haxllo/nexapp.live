export function CTA() {
  return (
    <section className="border-t border-border bg-bg py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl mb-6">
          Ready to launch?
        </h2>
        <p className="text-lg text-text-muted mb-8">
          Download Nex and start searching in seconds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/download"
            className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 font-medium text-black hover:bg-accent-hover transition-colors"
          >
            Download for Windows
          </a>
          <a
            href="https://github.com/haxllo/nex"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-border bg-bg-card px-8 py-3 font-medium hover:border-border-hover hover:bg-bg-elevated transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
