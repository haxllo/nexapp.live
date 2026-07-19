"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.6], [35, 0]);
  const imgScale = useTransform(scrollYProgress, [0, 0.6], [0.85, 1]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-card px-4 py-1.5 text-sm text-text-muted mb-8">
            <span className="h-2 w-2 rounded-full bg-code animate-pulse" />
            Windows 10/11 · MIT License
          </div>
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl tracking-tight mb-6">
            Summon search.
            <br />
            <span className="text-accent">Instantly.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-text-muted mb-12">
            Press <kbd className="rounded border border-border bg-bg-card px-2 py-0.5 font-mono text-sm">Ctrl+Space</kbd> to launch.
            Find apps, files, and actions with fuzzy search. Built in Rust for speed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/download"
              className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 font-medium text-black hover:bg-accent-hover transition-colors"
            >
              Download for Windows
            </a>
            <a
              href="/docs"
              className="inline-flex items-center justify-center rounded-md border border-border bg-bg-card px-8 py-3 font-medium hover:border-border-hover hover:bg-bg-elevated transition-colors"
            >
              View Documentation
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <motion.div
            className="relative mx-auto max-w-4xl"
            style={{
              perspective: "1000px",
            }}
          >
            <motion.div
              style={{
                rotateX,
                scale: imgScale,
                transformStyle: "preserve-3d",
                transformOrigin: "center bottom",
              }}
            >
              <Image
                src="/nex-ui.webp"
                alt="Nex launcher interface"
                width={1510}
                height={1040}
                unoptimized
                className="rounded-lg shadow-2xl w-full h-auto"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid gap-8 md:grid-cols-3 text-center"
        >
          <div>
            <div className="font-display text-4xl mb-2">{"<60ms"}</div>
            <div className="text-sm text-text-muted">Hotkey to visible</div>
          </div>
          <div>
            <div className="font-display text-4xl mb-2">{"<15ms"}</div>
            <div className="text-sm text-text-muted">Query response</div>
          </div>
          <div>
            <div className="font-display text-4xl mb-2">72<small className="text-lg text-text-dim ml-1">MB</small></div>
            <div className="text-sm text-text-muted">Idle memory</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
