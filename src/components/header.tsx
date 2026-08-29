import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 hover:text-accent transition-colors">
          <Image
            src="/nex-logo.svg"
            alt="Nex"
            width={28}
            height={28}
            unoptimized
          />
          <span className="font-semibold tracking-tight text-lg">nex</span>
        </Link>
        <div className="flex items-center gap-8 text-sm">
          <Link href="/features" className="text-text-muted hover:text-text transition-colors">
            Features
          </Link>
          <Link href="/docs" className="text-text-muted hover:text-text transition-colors">
            Docs
          </Link>
          <Link href="/changelog" className="text-text-muted hover:text-text transition-colors">
            Changelog
          </Link>
          <Link
            href="/download"
            className="rounded-md bg-accent px-4 py-2 font-medium text-black hover:bg-accent-hover transition-colors"
          >
            Download
          </Link>
        </div>
      </nav>
    </header>
  );
}
