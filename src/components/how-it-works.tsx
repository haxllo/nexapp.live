"use client";

import type { JSX } from "react";
import { motion } from "motion/react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const points = [
  {
    tag: "crates: tao, wry",
    title: "tao + wry (WebView2)",
    desc: "Native Windows popup. All UI is HTML/CSS/JS — no GDI or Direct2D.",
  },
  {
    tag: "state/snapshot.rs",
    title: "Fire-and-forget state",
    desc: "Rust pushes JSON snapshots to WebView via PostWebMessageAsJson. No sync script eval on the hot path.",
  },
  {
    tag: "lifecycle.rs",
    title: "Warm-release WebView",
    desc: "WebView stays resident for instant re-open. Icon cache trims ~5s after hide.",
  },
  {
    tag: "dwm/backdrop.rs",
    title: "Acrylic backdrop",
    desc: "Rounded corners + acrylic blur via DWM APIs, with CSS fallback on older Windows.",
  },
  {
    tag: "placement.rs",
    title: "Cursor-anchored",
    desc: "Centers on the monitor under the cursor, upper-third placement. Raycast/Spotlight style.",
  },
  {
    tag: "core (Rust)",
    title: "Memory-safe Rust",
    desc: "Ownership-guaranteed safety, minimal footprint, idle RAM under 72MB.",
  },
];

export function HowItWorks(): JSX.Element {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-text-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Under the hood
          </div>
          <h2 className="h-section text-balance text-4xl md:text-5xl">Engineered to vanish.</h2>
          <p className="mt-4 text-pretty text-lg text-text-muted">
            Native Win32 overlay powered by WebView2. No GDI, no bloat — just Rust and the web.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.4,
                delay: prefersReducedMotion ? 0 : (i % 2) * 0.06,
              }}
              className="rounded-2xl border border-border bg-bg-card p-6 shadow-card transition-colors hover:border-border-hover hover:bg-bg-hover"
            >
              <div className="mb-2 font-mono text-xs text-text-muted">{p.tag}</div>
              <h3 className="font-sans text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-text-muted text-pretty">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
