"use client";

import type { JSX } from "react";
import { motion } from "motion/react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

function SearchGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function PowerIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.8 0" />
    </svg>
  );
}

function RestartIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
      <path d="M3 21v-5h5" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

function PinGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-7-6.3-7-11a7 7 0 0 1 14 0c0 4.7-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

type Result = {
  icon: React.ReactNode;
  name: string;
  subtitle: string;
  iconClass: string;
  selected?: boolean;
};

const results: Result[] = [
  {
    icon: <PowerIcon />,
    name: "Shut down",
    subtitle: "system action",
    iconClass: "bg-[#2a1f1f] text-[#a08585]",
    selected: true,
  },
  {
    icon: <RestartIcon />,
    name: "Restart",
    subtitle: "system action",
    iconClass: "bg-[#1f2a2a] text-[#85a0a0]",
  },
  {
    icon: <MoonIcon />,
    name: "Sleep",
    subtitle: "system action",
    iconClass: "bg-[#25252a] text-[#95959e]",
  },
  {
    icon: <LockIcon />,
    name: "Lock",
    subtitle: "system action",
    iconClass: "bg-[#1f2a22] text-[#85a085]",
  },
];

export function LauncherMockup(): JSX.Element {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
      animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
      className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-border-hover bg-bg-card/95 shadow-float backdrop-blur-xl"
    >
      <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
        <span className="text-text-dim">
          <SearchGlyph />
        </span>
        <div className="font-mono text-lg text-text">
          <span className="text-text-dim">{">"}&nbsp;</span>
          shut
          <span
            className={`ml-0.5 inline-block h-5 w-[2px] bg-accent align-middle ${
              prefersReducedMotion ? "" : "animate-pulse"
            }`}
          />
        </div>
      </div>

      <div className="divide-y divide-border">
        {results.map((r) => (
          <div
            key={r.name}
            className={`flex items-center gap-3 px-5 py-3 transition-colors hover:bg-bg-hover border-l-2 ${
              r.selected ? "border-accent bg-bg-hover" : "border-transparent"
            }`}
          >
            <div
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${r.iconClass}`}
            >
              {r.icon}
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-medium text-text">{r.name}</div>
              <div className="font-mono text-xs text-text-dim">{r.subtitle}</div>
            </div>
            {r.selected ? (
              <span className="text-accent">
                <PinGlyph />
              </span>
            ) : null}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-6 px-5 py-3 border-t border-border font-mono text-xs text-text-dim">
        <span className="flex items-center gap-1">
          <kbd className="rounded-md border border-border bg-bg px-1.5 py-0.5 text-[10px]">↵</kbd>
          Open
        </span>
        <span className="flex items-center gap-1">
          <kbd className="rounded-md border border-border bg-bg px-1.5 py-0.5 text-[10px]">↑↓</kbd>
          Move
        </span>
        <span className="flex items-center gap-1">
          <kbd className="rounded-md border border-border bg-bg px-1.5 py-0.5 text-[10px]">esc</kbd>
          Close
        </span>
      </div>
    </motion.div>
  );
}
