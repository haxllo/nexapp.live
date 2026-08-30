import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Changelog", href: "/changelog" },
  { label: "Linear Method", href: "/method" },
  { label: "Docs", href: "/docs" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bg/70 backdrop-blur-md">
      <nav className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              src="/nex-logo.svg"
              alt="Nex"
              width={20}
              height={20}
              unoptimized
              className="invert"
            />
            <span className="text-[13px] font-medium text-text">Nex</span>
          </Link>
          <div className="hidden md:flex items-center gap-1 text-[13px]">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-2 py-1 text-text-muted hover:text-text transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-1 text-[13px]">
          <Link
            href="/login"
            className="hidden sm:inline-block px-2 py-1 text-text-muted hover:text-text transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/download"
            className="inline-flex items-center rounded-md bg-text px-2.5 py-1 font-medium text-bg hover:bg-text-muted transition-colors"
          >
            Download
          </Link>
        </div>
      </nav>
    </header>
  );
}
