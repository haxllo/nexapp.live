"use client";

import Link from "next/link";
import { useState } from "react";

type RowIcon = "power" | "calculator" | "plus" | "folderPlus" | "globe" | "file";

type PreviewRow = {
  icon: RowIcon;
  /** The modifier the panel puts on `.nx-app-icon`. */
  tone: string;
  title: string;
  subtitle?: string;
  value?: string;
};

type Example = {
  code: string;
  title: string;
  body: string;
  /** `.nx-group` caption in the preview panel. */
  group: string;
  rows: PreviewRow[];
};

const examples: Example[] = [
  {
    code: "> restart",
    title: "Command mode",
    body: "Run actions by name. Power, uninstall, and anything a plugin exposes.",
    group: "Actions",
    rows: [
      { icon: "power", tone: "is-cmd", title: "Restart", subtitle: "Power" },
      { icon: "power", tone: "is-cmd", title: "Shut down", subtitle: "Power" },
    ],
  },
  {
    code: "4*(18+7)",
    title: "Calculator",
    body: "Arithmetic evaluates inline, with the result in the same row.",
    group: "Calculator",
    rows: [
      { icon: "calculator", tone: "is-calc", title: "4*(18+7)", value: "= 100" },
    ],
  },
  {
    code: "july notes",
    title: "Create",
    body: "No match? Nex offers july-notes.md on your Desktop and gets out of the way.",
    group: "Create",
    rows: [
      {
        icon: "plus",
        tone: "is-create",
        title: "Create july-notes.md",
        subtitle: "Desktop",
      },
      {
        icon: "folderPlus",
        tone: "is-create",
        title: "Create folder july-notes",
        subtitle: "Desktop",
      },
    ],
  },
  {
    code: "youtube.com",
    title: "Open link",
    body: "A bare domain opens in the default browser instead of being searched for.",
    group: "Link",
    rows: [
      {
        icon: "globe",
        tone: "is-calc",
        title: "youtube.com",
        subtitle: "Open in default browser",
      },
    ],
  },
  {
    code: "@files budget",
    title: "Scope",
    body: "Narrow to files, folders, apps, clipboard, or actions, then keep typing.",
    group: "Files",
    rows: [
      {
        icon: "file",
        tone: "is-file",
        title: "budget-2026.xlsx",
        subtitle: "Documents\\Finance",
      },
      { icon: "file", tone: "is-file", title: "budget-notes.md", subtitle: "Documents" },
    ],
  },
  {
    code: "kind:pdf modified:week",
    title: "Query DSL",
    body: "Filter by type, extension, or date. AND, OR, NOT, and -term all work.",
    group: "Files · this week",
    rows: [
      { icon: "file", tone: "is-file", title: "invoice-0612.pdf", subtitle: "Downloads" },
      {
        icon: "file",
        tone: "is-file",
        title: "lease-agreement.pdf",
        subtitle: "Documents",
      },
      {
        icon: "file",
        tone: "is-file",
        title: "boarding-pass.pdf",
        subtitle: "Downloads",
      },
    ],
  },
];

const iconPaths: Record<RowIcon, { ghost?: string; solid: string }> = {
  power: {
    ghost: "M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z",
    solid:
      "M120,128V48a8,8,0,0,1,16,0v80a8,8,0,0,1-16,0Zm60.37-78.7a8,8,0,0,0-8.74,13.4C194.74,77.77,208,101.57,208,128a80,80,0,0,1-160,0c0-26.43,13.26-50.23,36.37-65.3a8,8,0,0,0-8.74-13.4C47.9,67.38,32,96.06,32,128a96,96,0,0,0,192,0C224,96.06,208.1,67.38,180.37,49.3Z",
  },
  calculator: {
    ghost: "M176,64v48H80V64Z",
    solid:
      "M80,120h96a8,8,0,0,0,8-8V64a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8v48A8,8,0,0,0,80,120Zm8-48h80v32H88ZM200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24Zm0,192H56V40H200ZM100,148a12,12,0,1,1-12-12A12,12,0,0,1,100,148Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,140,148Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,180,148Zm-80,40a12,12,0,1,1-12-12A12,12,0,0,1,100,188Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,140,188Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,180,188Z",
  },
  plus: {
    ghost: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
    solid:
      "M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z",
  },
  folderPlus: {
    ghost:
      "M224,88V200.89a7.11,7.11,0,0,1-7.11,7.11H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6L128,80h88A8,8,0,0,1,224,88Z",
    solid:
      "M216,72H130.67L102.93,51.2a16.12,16.12,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V200a16,16,0,0,0,16,16H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72Zm0,128H40V64H93.33L123.2,86.4A8,8,0,0,0,128,88h88Z",
  },
  globe: {
    ghost: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
    solid:
      "M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z",
  },
  file: {
    ghost: "M208,88H152V32Z",
    solid:
      "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z",
  },
};

function RowIcon({ name }: { name: RowIcon }) {
  const { ghost, solid } = iconPaths[name];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      {ghost && <path d={ghost} opacity="0.2" />}
      <path d={solid} />
    </svg>
  );
}

export function Syntax() {
  const [active, setActive] = useState(0);
  const example = examples[active];

  return (
    <section className="ln-section" id="syntax" data-testid="syntax-section">
      <div className="ln-shell">
        <Link className="ln-section-label" href="/docs/getting-started">
          <span className="ln-dot" style={{ background: "var(--ln-accent)" }} />
          <span className="ln-num">2.0</span>
          Syntax
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
          </svg>
        </Link>
        <div className="ln-head-row">
          <h2 className="ln-h2">The syntax is the shortcut.</h2>
          <div>
            <p className="ln-lede">
              <strong>The query does the work.</strong>{" "}
              There is no menu to hunt for, no mode to remember, and no reason to reach for
              the mouse.
            </p>
            <div className="ln-links">
              <Link
                className="ln-btn ln-btn-secondary ln-btn-sm"
                data-testid="syntax-reference-link"
                href="/docs/getting-started"
              >
                Search syntax reference
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="ln-syntax">
          <div className="ln-syntax-list" role="tablist" aria-label="Query examples">
            {examples.map((item, index) => (
              <button
                key={item.code}
                type="button"
                role="tab"
                className="ln-syntax-item"
                aria-selected={index === active}
                data-testid={`syntax-example-${index + 1}`}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
              >
                <span className="ln-cell-num">0{index + 1}</span>
                <code>{item.code}</code>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </button>
            ))}
          </div>
          <div className="ln-syntax-stage">
            <div className="ln-frame">
              <div className="ln-desk ln-desk-dark ">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="ln-desk-bg"
                  src="/nex-coast.jpg"
                  alt=""
                  aria-hidden="true"
                />
                <div className="ln-desk-shade" aria-hidden="true" />
                <div
                  key={active}
                  className="nx-panel ln-materialize"
                  style={{ maxWidth: "460px" }}
                  data-testid="syntax-preview"
                >
                  <div className="nx-search" style={{ height: "54px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                    </svg>
                    <span
                      style={{
                        fontSize: "17px",
                        color: "#fff",
                        fontFamily: "var(--ln-mono)",
                      }}
                    >
                      {example.code}
                      <span className="nx-cursor" />
                    </span>
                  </div>
                  <div className="nx-group">{example.group}</div>
                  <div style={{ padding: "0 8px 10px" }}>
                    {example.rows.map((row, index) => (
                      <div
                        key={row.title}
                        className="nx-row"
                        aria-selected={index === 0}
                      >
                        <span className={`nx-app-icon ${row.tone}`}>
                          <RowIcon name={row.icon} />
                        </span>
                        <span className="nx-row-text">
                          <b>{row.title}</b>
                          {row.subtitle && <span>{row.subtitle}</span>}
                        </span>
                        {row.value && <span className="nx-row-value">{row.value}</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
