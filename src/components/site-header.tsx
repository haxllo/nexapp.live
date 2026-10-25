"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, GithubLogo, List, X } from "@phosphor-icons/react";
import { GITHUB_REPO, NAV_LINKS } from "@/lib/site";

const slug = (label: string) => label.toLowerCase().replace(/\s+/g, "-");

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="ln-header" data-scrolled={scrolled ? "" : undefined} data-testid="nav-header">
      <div className="ln-shell ln-header-inner">
        <Link
          className="ln-brand"
          aria-label="Nex home"
          data-testid="nav-logo-link"
          href="/"
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/monochrome.png" alt="" />
          Nex
        </Link>

        <nav className="ln-nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-testid={`nav-link-${slug(link.label)}`}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ln-header-actions">
          <a
            href={GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="ln-icon-link"
            aria-label="Nex on GitHub"
            data-testid="nav-github-link"
          >
            <GithubLogo size={18} />
          </a>
          <span className="ln-header-divider" aria-hidden="true" />
          <Link
            className="ln-btn ln-btn-primary ln-btn-sm"
            data-testid="nav-cta-download"
            href="/download"
          >
            Download
          </Link>
          <button
            type="button"
            className="ln-icon-link ln-menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            data-testid="nav-mobile-toggle"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <List size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="ln-mobile-nav"
          aria-label="Mobile"
          data-testid="mobile-nav-menu"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
              data-testid={`mobile-nav-link-${slug(link.label)}`}
            >
              {link.label}
              <ArrowUpRight size={16} />
            </Link>
          ))}
          <a
            href={GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="mobile-nav-github"
          >
            GitHub
            <ArrowUpRight size={16} />
          </a>
        </nav>
      )}
    </header>
  );
}
