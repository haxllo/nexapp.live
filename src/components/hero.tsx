"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[900px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(160,180,220,0.18) 0%, rgba(140,160,200,0.10) 25%, rgba(100,120,160,0.04) 50%, rgba(0,0,0,0) 80%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 pt-24 pb-16 sm:pt-32 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="font-display text-[40px] sm:text-[52px] md:text-[60px] font-medium tracking-[-0.03em] leading-[1.02] text-text">
            The keyboard-first
            <br />
            launcher for Windows.
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-text-muted">
            Press a key. Find anything. Run anything. Built in Rust for instant
            fuzzy search across apps, files, and actions.
          </p>
          <div className="mt-7 flex items-center gap-2">
            <a
              href="/download"
              className="inline-flex h-9 items-center justify-center rounded-md bg-text px-4 text-[13px] font-medium text-bg hover:bg-text-muted transition-colors"
            >
              Download for Windows
            </a>
            <a
              href="/method"
              className="inline-flex h-9 items-center justify-center rounded-md px-3 text-[13px] font-medium text-text-muted hover:text-text transition-colors"
            >
              Read the method →
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mt-16 sm:mt-20"
        >
          <div className="relative">
            <Image
              src="https://cdn.nexapp.live/Product.png"
              alt="Nex launcher interface"
              width={949}
              height={540}
              unoptimized
              className="mx-auto rounded-md"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
