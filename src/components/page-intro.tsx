import type { ReactNode } from "react";

/**
 * The page header used by every secondary route. Mirrors the homepage's
 * section headers (dot + label, tight headline, muted lede) so the site keeps
 * one voice from the landing page into the docs.
 */
export function PageIntro({
  label,
  title,
  lede,
  children,
}: {
  label: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="pg-intro">
      <div className="ln-shell">
        <span className="pg-eyebrow">
          <span
            className="ln-dot"
            style={{ background: "var(--ln-accent)" }}
            aria-hidden="true"
          />
          {label}
        </span>
        <h1 className="pg-title">{title}</h1>
        {lede && <p className="pg-lede">{lede}</p>}
        {children}
      </div>
    </section>
  );
}
