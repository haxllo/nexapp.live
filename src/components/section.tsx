"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type ProductSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  visual: ReactNode;
  reverse?: boolean;
};

export function ProductSection({
  eyebrow,
  title,
  description,
  visual,
  reverse = false,
}: ProductSectionProps) {
  return (
    <section className="bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`grid items-center gap-12 md:grid-cols-2 md:gap-16 ${
            reverse ? "md:[&>div:first-child]:order-2" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.08em] text-text-dim">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {eyebrow}
            </div>
            <h2 className="text-balance text-3xl sm:text-4xl md:text-[44px] font-medium tracking-[-0.02em] leading-[1.05] text-text">
              {title}
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-text-muted">
              {description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="rounded-lg border border-border bg-bg-card overflow-hidden"
          >
            {visual}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
