import type { JSX, ReactNode } from "react";

const stats: { value: ReactNode; label: string }[] = [
  { value: "<60ms", label: "Hotkey to visible" },
  { value: "<15ms", label: "Query response" },
  {
    value: (
      <>
        72
        <span className="text-lg text-text-dim ml-1">MB</span>
      </>
    ),
    label: "Idle memory",
  },
  { value: "100%", label: "Open source (MIT)" },
];

const valueClassName = "tabular-nums font-sans text-4xl font-semibold tracking-tight";
const labelClassName = "text-sm text-text-muted mt-1";

export function StatsBand(): JSX.Element {
  return (
    <section className="border-t border-b border-border py-12">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className={valueClassName}>{stat.value}</div>
            <div className={labelClassName}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
