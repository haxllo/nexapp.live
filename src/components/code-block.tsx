"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, Copy } from "@phosphor-icons/react";

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
  const [failed, setFailed] = useState(false);
  const id = useId()
    .replace(/[^a-z0-9]/gi, "")
    .toLowerCase();
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setFailed(false);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
      setFailed(true);
    }
  }

  return (
    <div className={`code-block ${className}`} data-testid={`code-block-${id}`}>
      <div className="code-block-header">
        <span className="mono truncate text-[10.5px] tracking-[0.04em] text-faint">
          {title ?? language ?? "snippet"}
        </span>
        <button
          type="button"
          onClick={copy}
          data-testid={`code-copy-${id}`}
          title="Copy snippet"
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
        className="mono"
        data-testid={`code-content-${id}`}
      >
        <code>{code}</code>
      </pre>
      {failed && (
        <p
          role="status"
          data-testid={`code-error-${id}`}
          className="px-4 pb-3 text-xs text-[#eddbbb]"
        >
          Clipboard unavailable. Select the code to copy it.
        </p>
      )}
      <span className="sr-only" aria-live="polite" data-testid={`code-status-${id}`}>
        {copied ? "Copied to clipboard" : ""}
      </span>
    </div>
  );
}
