import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="font-display text-xl mb-4">nex</h3>
            <p className="text-sm text-text-muted">
              Keyboard-first launcher for Windows. Built in Rust.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-3">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features" className="text-text-muted hover:text-text transition-colors">Features</Link></li>
              <li><Link href="/download" className="text-text-muted hover:text-text transition-colors">Download</Link></li>
              <li><Link href="/changelog" className="text-text-muted hover:text-text transition-colors">Changelog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-3">Developers</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/docs" className="text-text-muted hover:text-text transition-colors">Documentation</Link></li>
              <li><Link href="/plugin-sdk" className="text-text-muted hover:text-text transition-colors">Plugin SDK</Link></li>
              <li><a href="https://github.com/haxllo/nex" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text transition-colors">GitHub</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-3">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/haxllo/nex/issues" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text transition-colors">Issues</a></li>
              <li><a href="https://github.com/haxllo/nex/discussions" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text transition-colors">Discussions</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-text-dim">
          <p>MIT License. Built with Rust.</p>
        </div>
      </div>
    </footer>
  );
}
