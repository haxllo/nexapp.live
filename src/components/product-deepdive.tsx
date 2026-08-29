"use client";

import type { JSX } from "react";
import { motion } from "motion/react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { LauncherMockup } from "@/components/launcher-mockup";

const syntax = [
  { prefix: "(none)", desc: "Fuzzy search all items" },
  { prefix: ">", desc: "Commands & web search" },
  { prefix: "@apps @files @folders", desc: "Filter by type" },
  { prefix: "kind: ext:", desc: "DSL key:value filters" },
];

const leftItems: { el: JSX.Element }[] = [
  {
    el: (
      <div className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-text-dim">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        See it in action
      </div>
    ),
  },
  {
    el: (
      <h2 className="h-section text-balance text-4xl md:text-5xl">One bar. Every action.</h2>
    ),
  },
  {
    el: (
      <p className="text-pretty text-lg text-text-muted max-w-lg">
        Type a prefix to switch modes. Fuzzy-match apps, drill into files, run commands,
        calculate — without leaving the keyboard.
      </p>
    ),
  },
  {
    el: (
      <div className="mt-6">
        {syntax.map((s) => (
          <div key={s.prefix} className="flex items-center gap-3 py-2">
            <code className="rounded-md border border-border bg-bg-card px-2 py-1 font-mono text-sm text-text">
              {s.prefix}
            </code>
            <span className="text-sm text-text-muted">{s.desc}</span>
          </div>
        ))}
      </div>
    ),
  },
];

export function ProductDeepDive(): JSX.Element {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            {leftItems.map((item, i) => (
              <motion.div
                key={i}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.4,
                  delay: prefersReducedMotion ? 0 : i * 0.08,
                }}
              >
                {item.el}
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.5,
              delay: prefersReducedMotion ? 0 : 0.24,
            }}
          >
            <LauncherMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
