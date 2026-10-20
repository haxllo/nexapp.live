"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "@/components/icons";

const items = [
  { title: "Overview", href: "/docs" },
  { title: "Getting started", href: "/docs/getting-started" },
  { title: "Configuration", href: "/docs/configuration" },
];

export function DocsNav() {
  const pathname = usePathname();

  return (
    <>
      <nav
        aria-label="Docs"
        className="flex gap-5 overflow-x-auto border-b border-line pb-3 md:hidden"
      >
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`whitespace-nowrap text-[13px] transition-colors ${
                active ? "text-paper" : "text-muted hover:text-paper"
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>

      <div className="hidden lg:block">
        <p className="mono text-[10px] uppercase tracking-[0.14em] text-faint">
          Documentation
        </p>
        <nav aria-label="Docs" className="mt-4 border-l border-line">
          {items.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative -ml-px flex h-9 items-center border-l pl-4 text-[13px] transition-colors duration-200 ${
                  active
                    ? "border-signal text-paper"
                    : "border-transparent text-muted hover:border-line-2 hover:text-paper"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 border-t border-line pt-5">
          <Link
            href="/plugin-sdk"
            className="group inline-flex items-center gap-1.5 text-[12.5px] text-muted transition-colors hover:text-paper"
          >
            Plugin SDK
            <ArrowUpRight
              size={12}
              aria-hidden
              className="transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px"
            />
          </Link>
          <br />
          <Link
            href="/download"
            className="mt-2 inline-block text-[12.5px] text-muted transition-colors hover:text-paper"
          >
            Download
          </Link>
        </div>
      </div>
    </>
  );
}
