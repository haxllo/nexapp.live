"use client";

import { Fragment, useEffect, useId, useRef, useState } from "react";
import { Check, Copy } from "@phosphor-icons/react";

/** One highlighted token inside a `.ln-code` row. `className` is a `tk-*` class. */
export type CodeToken = {
  text: string;
  className?: string;
  /** Emit the text as a bare text run instead of wrapping it in a `<span>`. */
  raw?: boolean;
};

/** One row of a `.ln-code` block: the tokens that make up that line. */
export type CodeLine = CodeToken[];

type CommonProps = {
  testId?: string;
  copyTestId?: string;
};

type CardProps = CommonProps & {
  variant?: "card";
  code: string;
  title?: string;
  language?: string;
  className?: string;
};

type LnProps = CommonProps & {
  variant: "ln";
  title: string;
  lines: CodeLine[];
};

export function CodeBlock(props: CardProps | LnProps) {
  const { testId, copyTestId } = props;
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

  const code =
    props.variant === "ln"
      ? props.lines
          .map((line) =>
            line
              .map((token) => token.text)
              .join("")
              .replace(/\s+$/, ""),
          )
          .join("\n")
      : props.code;

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

  if (props.variant === "ln") {
    return (
      <div className="ln-code" data-testid={testId ?? `code-block-${id}`}>
        <div className="ln-code-head">
          <span className="ln-dots">
            <i />
            <i />
            <i />
          </span>
          {props.title}
          <button
            type="button"
            onClick={copy}
            data-testid={copyTestId ?? `code-copy-${id}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z" />
            </svg>{" "}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <pre>
          {props.lines.map((line, index) => (
            <div className="ln-code-line" key={index}>
              <span>{index + 1}</span>
              <span>
                {line.map((token, tokenIndex) =>
                  token.raw ? (
                    <Fragment key={tokenIndex}>{token.text}</Fragment>
                  ) : (
                    <span className={token.className} key={tokenIndex}>
                      {token.text}
                    </span>
                  ),
                )}
              </span>
            </div>
          ))}
        </pre>
      </div>
    );
  }

  return (
    <div
      className={`code-block ${props.className ?? ""}`}
      data-testid={testId ?? `code-block-${id}`}
    >
      <div className="code-block-header">
        <span className="mono truncate text-[10.5px] tracking-[0.04em] text-faint">
          {props.title ?? props.language ?? "snippet"}
        </span>
        <button
          type="button"
          onClick={copy}
          data-testid={copyTestId ?? `code-copy-${id}`}
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
        aria-label={`${props.title ?? props.language ?? "Code"} snippet`}
        className="mono"
        data-testid={`code-content-${id}`}
      >
        <code>{props.code}</code>
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
