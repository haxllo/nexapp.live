"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { GithubLogo, List, X } from "@/components/icons";
import { GITHUB_REPO } from "@/lib/constants";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Docs", href: "/docs" },
  { label: "Changelog", href: "/changelog" },
  { label: "Plugin SDK", href: "/plugin-sdk" },
];

export function Header() {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/80 backdrop-blur-xl">
      <div className="shell flex h-14 items-center justify-between gap-4">
        <div className="flex items-center gap-6 md:gap-8">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-2.5"
            aria-label="Nex home"
          >
            <Image
              src="/nex-logo.svg"
              alt=""
              width={20}
              height={20}
              className="invert transition-opacity duration-200 group-hover:opacity-80"
              priority
            />
            <span className="text-[13.5px] font-medium tracking-[-0.01em] text-paper">
              Nex
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative inline-flex h-14 items-center px-2.5 text-[13px] transition-colors duration-200 ${
                    active ? "text-paper" : "text-muted hover:text-paper"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span
                      aria-hidden
                      className="absolute inset-x-2.5 bottom-0 h-px bg-signal/80"
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nex on GitHub"
            className="hidden h-9 w-9 items-center justify-center rounded-[8px] text-muted transition-colors duration-200 hover:bg-white/[0.05] hover:text-paper sm:inline-flex"
          >
            <GithubLogo size={17} aria-hidden />
          </a>
          <span aria-hidden className="hidden h-4 w-px bg-line sm:block" />
          <Link
            href="/download"
            className="inline-flex h-8 items-center rounded-[8px] bg-paper px-3 text-[12.5px] font-medium text-ink transition-colors duration-200 hover:bg-white"
          >
            Download
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-[8px] text-paper transition-colors duration-200 hover:bg-white/[0.05] md:hidden"
          >
            {open ? <X size={17} aria-hidden /> : <List size={17} aria-hidden />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={
              reduced
                ? { duration: 0 }
                : { duration: 0.26, ease: [0.22, 1, 0.36, 1] }
            }
            className="overflow-hidden border-t border-line bg-ink-2/95 backdrop-blur-xl md:hidden"
          >
            <nav aria-label="Mobile" className="shell py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`flex h-11 items-center justify-between border-b border-line/70 text-[14px] transition-colors ${
                    isActive(link.href)
                      ? "text-paper"
                      : "text-muted hover:text-paper"
                  }`}
                >
                  {link.label}
                  <span aria-hidden className="mono text-[10px] text-faint">
                    {isActive(link.href) ? "here" : ""}
                  </span>
                </Link>
              ))}
              <div className="flex items-center justify-between gap-4 pt-4 pb-2">
                <a
                  href={GITHUB_REPO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] text-muted hover:text-paper"
                >
                  <GithubLogo size={16} aria-hidden />
                  GitHub
                </a>
                <Link
                  href="/download"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-9 items-center rounded-[8px] bg-paper px-3.5 text-[13px] font-medium text-ink"
                >
                  Download for Windows
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
