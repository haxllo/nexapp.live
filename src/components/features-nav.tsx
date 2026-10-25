"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/**
 * Sticky sub-navigation for the features page. Highlights the section that is
 * currently in view, the way Linear's page nav does.
 */
export function FeaturesNav({
  groups,
}: {
  groups: readonly { id: string; title: string }[];
}) {
  const [active, setActive] = useState<string>(groups[0]?.id ?? "");
  const ratios = useRef(new Map<string, number>());

  useEffect(() => {
    const sections = groups
      .map((group) => document.getElementById(group.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.current.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        let next = "";
        let best = 0;
        for (const [id, ratio] of ratios.current) {
          if (ratio > best) {
            best = ratio;
            next = id;
          }
        }
        if (next) setActive(next);
      },
      { rootMargin: "-96px 0px -55% 0px", threshold: [0, 0.15, 0.4, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [groups]);

  return (
    <div className="pg-tabs">
      <div className="ln-shell">
        <nav aria-label="Feature groups" data-testid="feature-navigation">
          {groups.map((group) => (
            <Link
              key={group.id}
              href={`#${group.id}`}
              data-testid={`feature-nav-${group.id}`}
              aria-current={active === group.id ? "true" : undefined}
            >
              {group.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
