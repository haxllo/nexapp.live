"use client";

import type { ReactNode } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";

export function ModeLink({
  mode,
  children,
  testId,
}: {
  mode: "search" | "chat" | "media";
  children: ReactNode;
  testId?: string;
}) {
  return (
    <a
      href="#experience"
      className="quiet-link"
      data-testid={testId}
      onClick={() =>
        window.dispatchEvent(new CustomEvent("nex-mode", { detail: mode }))
      }
    >
      {children}
      <ArrowUpRight size={16} aria-hidden />
    </a>
  );
}
