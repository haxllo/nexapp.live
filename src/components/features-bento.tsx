"use client";

import type { JSX } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

function KeyboardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M6 14h.01M18 14h.01M8 14h8" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-7-6.3-7-11a7 7 0 0 1 14 0c0 4.7-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function LightningIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
    </svg>
  );
}

function TerminalIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m6 9 3 3-3 3M13 15h6" />
    </svg>
  );
}

function CalculatorIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M8 6h8M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
    </svg>
  );
}

type Feature = {
  icon: React.ReactNode;
  cmd: string;
  title: string;
  desc: string;
  meta: string;
  span: string;
  rich?: boolean;
};

const features: Feature[] = [
  {
    icon: <KeyboardIcon />,
    cmd: "> hotkey",
    title: "Global Hotkey",
    desc: "Summon from anywhere with a customizable shortcut.",
    meta: "Win",
    span: "md:col-span-4 md:row-span-2",
    rich: true,
  },
  {
    icon: <SearchIcon />,
    cmd: "> fuzzy",
    title: "Fuzzy Search",
    desc: "Typo-tolerant matching powered by the Tantivy full-text engine.",
    meta: "Tantivy",
    span: "md:col-span-2",
  },
  {
    icon: <PinIcon />,
    cmd: "> quick-launch",
    title: "Quick Launch",
    desc: "Pin favorites. Usage-based suggestions when no pins are set.",
    meta: "v2.4",
    span: "md:col-span-2",
  },
  {
    icon: <LightningIcon />,
    cmd: "> everything",
    title: "Everything SDK",
    desc: "Voidtools Everything integration for instant file search.",
    meta: "Plugin",
    span: "md:col-span-2",
  },
  {
    icon: <TerminalIcon />,
    cmd: "> actions",
    title: "Actions & Commands",
    desc: "Custom commands, web searches, and system operations.",
    meta: "Custom",
    span: "md:col-span-2",
  },
  {
    icon: <CalculatorIcon />,
    cmd: "> calc",
    title: "Calculator",
    desc: "Inline arithmetic evaluation right in the search bar.",
    meta: "Instant",
    span: "md:col-span-2",
  },
];

export function FeaturesBento(): JSX.Element {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-text-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Features
          </div>
          <h2 className="h-section text-balance text-4xl md:text-5xl">
            Everything you need.
            <br />
            <span className="text-text-muted">Nothing you don&apos;t.</span>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.4,
                delay: prefersReducedMotion ? 0 : i * 0.06,
              }}
              className={`group flex flex-col rounded-2xl border border-border bg-bg-card p-6 md:p-8 shadow-card transition-colors hover:border-border-hover press ${f.span}`}
            >
              <div className="flex items-start justify-between">
                <div className="text-text-muted transition-colors group-hover:text-accent [&>svg]:shrink-0">
                  {f.icon}
                </div>
                <span className="inline-flex items-center rounded-full border border-border bg-bg px-2.5 py-0.5 font-mono text-xs text-text-dim">
                  {f.meta}
                </span>
              </div>
              <div className="mt-5 font-mono text-xs text-accent mb-3">{f.cmd}</div>
              <h3 className="font-sans text-lg font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-sm text-text-muted text-pretty">{f.desc}</p>
              {f.rich ? (
                <div className="mt-4 flex items-center gap-2 rounded-lg border border-border bg-bg px-3 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="font-mono text-sm text-text-dim">notepad</span>
                  <span className="ml-auto font-mono text-xs text-text-dim">↵</span>
                </div>
              ) : null}
            </motion.div>
          ))}
        </div>

        <Link
          href="/features"
          className="mt-10 inline-flex items-center gap-2 text-sm font-mono text-text-muted transition-colors hover:text-accent"
        >
          <span className="text-text-muted">❯</span> view all features
        </Link>
      </div>
    </section>
  );
}
