"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, GithubLogo, List, X } from "@phosphor-icons/react";
import { GITHUB_REPO, NAV_LINKS } from "@/lib/site";

const slug = (label: string) => label.toLowerCase().replace(/\s+/g, "-");

export function SiteHeader() {
  const pathname = usePathname();
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
    <header className="site-header" data-testid="nav-header">
      <div className="shell header-inner">
        <Link
          href="/"
          className="brand"
          data-testid="nav-logo-link"
          aria-label="Nex home"
          onClick={() => setOpen(false)}
        >
          <Image src="/nex-logo.png" alt="" width={38} height={38} preload />
          <span>
            Nex<span className="brand-period">.</span>
          </span>
        </Link>

        <nav className="desktop-nav liquid-control" aria-label="Primary">
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

        <div className="header-actions">
          <a
            href={GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
            aria-label="Nex on GitHub"
            title="View source on GitHub"
            data-testid="nav-github-link"
          >
            <GithubLogo size={20} />
          </a>
          <Link
            href="/download"
            className="header-download liquid-control"
            data-testid="nav-cta-download"
          >
            Get Nex <ArrowUpRight size={15} aria-hidden />
          </Link>
          <button
            type="button"
            className="mobile-toggle liquid-control"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            data-testid="nav-mobile-toggle"
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Mobile"
          data-testid="mobile-nav-menu"
        >
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
              data-testid={`mobile-nav-link-${slug(link.label)}`}
            >
              <span className="mono">0{index + 1}</span>
              {link.label}
              <ArrowUpRight size={18} />
            </Link>
          ))}
          <a
            href={GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="mobile-nav-github"
          >
            <GithubLogo size={18} />
            GitHub
            <ArrowUpRight size={18} />
          </a>
        </nav>
      )}
    </header>
  );
}
