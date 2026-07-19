"use client";

import Link from "next/link";
import { motion } from "motion/react";

const features = [
  {
    prefix: "⌨",
    cmd: "hotkey",
    title: "Global Hotkey",
    desc: "Summon from anywhere with customizable shortcut",
    meta: "Ctrl+Space",
  },
  {
    prefix: "@",
    cmd: "apps",
    title: "Fuzzy Search",
    desc: "Typo-tolerant matching via Tantivy full-text search",
    meta: "15ms",
  },
  {
    prefix: "⚡",
    cmd: "everything-sdk",
    title: "Everything SDK",
    desc: "Voidtools Everything integration for instant file search",
    meta: "Plugin",
  },
  {
    prefix: ">",
    cmd: "actions",
    title: "Actions & Commands",
    desc: "Execute custom commands, web searches, system operations",
    meta: "Custom",
  },
  {
    prefix: "🧮",
    cmd: "calc",
    title: "Calculator",
    desc: "Inline arithmetic evaluation in the search bar",
    meta: "Instant",
  },
  {
    prefix: "🔌",
    cmd: "plugin-sdk",
    title: "Plugin SDK",
    desc: "Extend with trait-based WASM plugins",
    meta: "Preview",
  },
];

export function FeaturesPreview() {
  return (
    <section className="border-t border-border bg-bg py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            Everything you need.
            <br />
            <span className="text-text-muted">Nothing you don&apos;t.</span>
          </h2>
        </div>

        <div className="mx-auto max-w-4xl rounded-lg border border-border bg-bg-card">
          <div className="flex items-center gap-2 border-b border-border px-5 py-3">
            <div className="h-3 w-3 rounded-full bg-border" />
            <div className="h-3 w-3 rounded-full bg-border" />
            <div className="h-3 w-3 rounded-full bg-border" />
            <span className="ml-3 text-xs text-text-dim font-mono">nex — features</span>
          </div>

          <div className="divide-y divide-border">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex items-center gap-4 px-5 py-4 hover:bg-bg-elevated transition-colors cursor-default"
              >
                <span className="w-8 text-center text-lg">{f.prefix}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <code className="font-mono text-sm text-accent group-hover:text-accent-hover transition-colors">
                      {"> "}{f.cmd}
                    </code>
                    <h3 className="font-medium truncate">{f.title}</h3>
                  </div>
                  <p className="text-sm text-text-muted mt-0.5">{f.desc}</p>
                </div>
                <span className="hidden sm:inline-flex items-center rounded-full border border-border bg-bg px-2.5 py-0.5 text-xs text-text-dim font-mono">
                  {f.meta}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors font-mono"
          >
            <span className="text-code">❯</span> view all features
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
