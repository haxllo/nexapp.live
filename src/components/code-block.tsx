"use client";

import { useState } from "react";
import { Check, Copy } from "@/components/icons";

export function CodeBlock({
  code,
  title,
  language,
  className = "",
}: {
  code: string;
  title?: string;
  language?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div
      className={`overflow-hidden rounded-[10px] border border-line bg-[#0b0d10] ${className}`}
    >
      <div className="flex items-center justify-between gap-4 border-b border-line px-3.5 py-2">
        <span className="mono truncate text-[10.5px] tracking-[0.04em] text-faint">
          {title ?? language ?? "snippet"}
        </span>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1.5 rounded-[6px] px-1.5 py-1 text-[11px] text-faint transition-colors duration-200 hover:bg-white/[0.05] hover:text-paper"
          aria-label={copied ? "Copied" : "Copy snippet"}
        >
          {copied ? <Check size={12} aria-hidden /> : <Copy size={12} aria-hidden />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
      <pre
        tabIndex={0}
        aria-label={`${title ?? language ?? "Code"} snippet`}
        className="mono overflow-x-auto p-4 text-[12.5px] leading-[1.75] text-[#c6cfdb]"
      >
        <code>{code}</code>
      </pre>
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied to clipboard" : ""}
      </span>
    </div>
  );
}
