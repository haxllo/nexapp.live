"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, File } from "@phosphor-icons/react";

const links = [
  { label: "Overview", href: "/docs", id: "overview" },
  { label: "Getting started", href: "/docs/getting-started", id: "getting-started" },
  { label: "Configuration", href: "/docs/configuration", id: "configuration" },
];

export function DocsNav() {
  const pathname = usePathname();

  return (
    <div data-testid="docs-sidebar">
      <p className="docs-nav-title">
        <File size={15} />
        The Nex handbook
      </p>
      <nav className="docs-nav-links" aria-label="Docs">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={pathname === link.href ? "page" : undefined}
            data-testid={`docs-nav-${link.id}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="docs-nav-secondary">
        <Link href="/plugin-sdk" data-testid="docs-nav-plugin-sdk">
          Plugin SDK
          <ArrowUpRight size={13} />
        </Link>
        <Link href="/download" data-testid="docs-nav-download">
          Download Nex
          <ArrowUpRight size={13} />
        </Link>
      </div>
    </div>
  );
}
