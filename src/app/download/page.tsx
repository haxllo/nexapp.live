export default function DownloadPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      <div className="mb-16">
        <h1 className="font-display text-5xl md:text-6xl mb-6">Download</h1>
        <p className="text-xl text-text-muted">
          Get Nex for Windows 10/11 (64-bit).
        </p>
      </div>

      <div className="space-y-8">
        <div className="rounded-lg border border-border bg-bg-card p-8">
          <h2 className="text-2xl font-medium mb-4">Binary Release (Recommended)</h2>
          <p className="text-text-muted mb-6">
            Download the latest release installer. Follow the setup instructions after download.
          </p>
          <a
            href="https://github.com/haxllo/nex/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 font-medium text-black hover:bg-accent-hover transition-colors"
          >
            Download Latest Release
          </a>
        </div>

        <div className="rounded-lg border border-border bg-bg-card p-8">
          <h2 className="text-2xl font-medium mb-4">Build from Source</h2>
          <p className="text-text-muted mb-6">
            Requires Rust 1.75+. Clone the repository and build with Cargo.
          </p>
          <div className="rounded-md bg-bg p-4 font-mono text-sm">
            <div className="text-text-dim mb-2"># Clone the repository</div>
            <div className="text-code mb-4">git clone https://github.com/haxllo/nex.git</div>
            <div className="text-text-dim mb-2"># Build release binary</div>
            <div className="text-code mb-4">cd nex && cargo build --release</div>
            <div className="text-text-dim mb-2"># Binary location</div>
            <div className="text-text-muted">target/release/nex.exe</div>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-bg-card p-8">
          <h2 className="text-2xl font-medium mb-4">System Requirements</h2>
          <ul className="space-y-3 text-text-muted">
            <li className="flex items-start gap-3">
              <span className="text-code mt-1">•</span>
              <div>
                <div className="text-text font-medium">Windows 10/11 (64-bit)</div>
                <div className="text-sm">Windows 10 22H2 or later recommended</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-code mt-1">•</span>
              <div>
                <div className="text-text font-medium">Memory</div>
                <div className="text-sm">Under 120MB idle usage</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-code mt-1">•</span>
              <div>
                <div className="text-text font-medium">Disk Space</div>
                <div className="text-sm">Less than 50MB installed</div>
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-border bg-bg-card p-8">
          <h2 className="text-2xl font-medium mb-4">Quick Start</h2>
          <ol className="space-y-4 text-text-muted">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent text-sm font-medium">1</span>
              <div>Download and run the installer</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent text-sm font-medium">2</span>
              <div>Press <kbd className="rounded border border-border bg-bg-card px-2 py-0.5 font-mono text-xs">Win</kbd> to summon the launcher</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent text-sm font-medium">3</span>
              <div>Start typing to search apps, files, and actions</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent text-sm font-medium">4</span>
              <div>Press <kbd className="rounded border border-border bg-bg-card px-2 py-0.5 font-mono text-xs">Enter</kbd> to launch selected item</div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
