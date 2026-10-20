"use client";

import Image from "next/image";
import type { KeyboardEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  BookmarkSimple,
  ChartBar,
  File,
  FolderSimple,
  Gear,
  Lightning,
  MagnifyingGlass,
  Power,
  TerminalWindow,
} from "@/components/icons";
import { DesktopFrame } from "@/components/glass";

type Kind = "app" | "file" | "folder" | "command" | "calc";
type Glyph = "terminal" | "folder" | "chart" | "gear" | "file" | "command";

type Item = {
  id: string;
  title: string;
  subtitle: string;
  kind: Kind;
  haystack: string;
  icon?: string;
  glyph?: Glyph;
};

type Result = Item & { value?: string; score: number };

const apps: Item[] = [
  {
    id: "riot",
    title: "Riot Client",
    subtitle: "Riot Games, Inc.",
    kind: "app",
    haystack: "riot client league valorant games",
    icon: "/apps/riotgames.svg",
  },
  {
    id: "brave",
    title: "Brave",
    subtitle: "Brave Software Inc.",
    kind: "app",
    haystack: "brave browser web",
    icon: "/apps/brave.svg",
  },
  {
    id: "discord",
    title: "Discord",
    subtitle: "Discord Inc.",
    kind: "app",
    haystack: "discord chat voice",
    icon: "/apps/discord.svg",
  },
  {
    id: "spotify",
    title: "Spotify",
    subtitle: "Spotify AB",
    kind: "app",
    haystack: "spotify music",
    icon: "/apps/spotify.svg",
  },
  {
    id: "terminal",
    title: "Terminal",
    subtitle: "Microsoft Corporation",
    kind: "app",
    haystack: "terminal windows shell console",
    glyph: "terminal",
  },
  {
    id: "explorer",
    title: "File Explorer",
    subtitle: "Microsoft Corporation",
    kind: "app",
    haystack: "file explorer folders files",
    glyph: "folder",
  },
  {
    id: "taskmanager",
    title: "Task Manager",
    subtitle: "Microsoft Corporation",
    kind: "app",
    haystack: "task manager processes performance",
    glyph: "chart",
  },
  {
    id: "settings",
    title: "Settings",
    subtitle: "Microsoft Windows",
    kind: "app",
    haystack: "settings control panel system",
    glyph: "gear",
  },
];

const files: Item[] = [
  {
    id: "config",
    title: "config.toml",
    subtitle: "AppData\\Roaming\\Nex",
    kind: "file",
    haystack: "config toml hotkey settings",
    glyph: "file",
  },
  {
    id: "agents",
    title: "AGENTS.md",
    subtitle: "Projects\\nex-website",
    kind: "file",
    haystack: "agents docs rules",
    glyph: "file",
  },
  {
    id: "search-rs",
    title: "search.rs",
    subtitle: "Projects\\nex\\apps\\core\\src",
    kind: "file",
    haystack: "search rust source code",
    glyph: "file",
  },
  {
    id: "report",
    title: "report-q3.md",
    subtitle: "Documents",
    kind: "file",
    haystack: "report quarter notes",
    glyph: "file",
  },
  {
    id: "screenshots",
    title: "Screenshots",
    subtitle: "Pictures",
    kind: "folder",
    haystack: "screenshots pictures images folder",
    glyph: "folder",
  },
];

const commands: Item[] = [
  { id: "shutdown", title: "Shut down", subtitle: "Power", kind: "command", haystack: "shut down power off", glyph: "command" },
  { id: "restart", title: "Restart", subtitle: "Power", kind: "command", haystack: "restart reboot power", glyph: "command" },
  { id: "sleep", title: "Sleep", subtitle: "Power", kind: "command", haystack: "sleep suspend power", glyph: "command" },
  { id: "lock", title: "Lock", subtitle: "Power", kind: "command", haystack: "lock screen power", glyph: "command" },
  { id: "recycle", title: "Empty Recycle Bin", subtitle: "System", kind: "command", haystack: "empty recycle bin trash", glyph: "command" },
];

function score(query: string, text: string): number {
  const q = query.toLowerCase();
  const t = text.toLowerCase();
  if (!q) return 0;
  if (t.startsWith(q)) return 1000 - t.length;
  const at = t.indexOf(q);
  if (at >= 0) return 820 - at;
  let cursor = 0;
  let gaps = 0;
  for (const char of q) {
    const found = t.indexOf(char, cursor);
    if (found === -1) return -1;
    gaps += found - cursor;
    cursor = found + 1;
  }
  return 420 - gaps;
}

function evaluate(source: string): number | null {
  const matched = source.match(/\d+(?:\.\d+)?|[()+\-*/%]/g);
  if (!matched) return null;
  const tokens: string[] = matched;

  let i = 0;
  const peek = () => tokens[i];

  function factor(): number {
    const token = peek();
    if (token === "-") {
      i += 1;
      return -factor();
    }
    if (token === "+") {
      i += 1;
      return factor();
    }
    if (token === "(") {
      i += 1;
      const inner = expr();
      if (peek() !== ")") throw new Error("unbalanced");
      i += 1;
      return inner;
    }
    if (token === undefined) throw new Error("ends early");
    const value = Number(token);
    if (Number.isNaN(value)) throw new Error("not a number");
    i += 1;
    return value;
  }

  function term(): number {
    let value = factor();
    while (peek() === "*" || peek() === "/" || peek() === "%") {
      const operator = tokens[i];
      i += 1;
      const right = factor();
      if (operator === "*") value *= right;
      else if (operator === "/") {
        if (right === 0) throw new Error("divide by zero");
        value /= right;
      } else value %= right;
    }
    return value;
  }

  function expr(): number {
    let value = term();
    while (peek() === "+" || peek() === "-") {
      const operator = tokens[i];
      i += 1;
      const right = term();
      value = operator === "+" ? value + right : value - right;
    }
    return value;
  }

  try {
    const value = expr();
    if (i !== tokens.length || !Number.isFinite(value)) return null;
    return value;
  } catch {
    return null;
  }
}

function formatNumber(value: number): string {
  if (Number.isInteger(value)) return value.toLocaleString("en-US");
  return String(Number(value.toFixed(6)));
}

type Parsed = { command: boolean; scope: "all" | "app" | "file" | "folder"; term: string };

function parseQuery(raw: string): Parsed {
  const trimmed = raw.trim();
  if (trimmed.startsWith(">")) {
    return { command: true, scope: "all", term: trimmed.slice(1).trim() };
  }

  let term = trimmed;
  let scope: Parsed["scope"] = "all";

  if (/^@apps\b/i.test(term)) {
    scope = "app";
    term = term.replace(/^@apps\s*/i, "");
  } else if (/^@files\b/i.test(term)) {
    scope = "file";
    term = term.replace(/^@files\s*/i, "");
  } else if (/^@folders\b/i.test(term)) {
    scope = "folder";
    term = term.replace(/^@folders\s*/i, "");
  }

  const kind = term.match(/\bkind:(app|file|folder)\b/i);
  if (kind && scope === "all") {
    scope = kind[1].toLowerCase() as Parsed["scope"];
    term = term.replace(kind[0], " ");
  }

  return { command: false, scope, term: term.trim() };
}

function ItemIcon({ item }: { item: Item }) {
  if (item.icon) {
    return (
      <span className="relative h-[22px] w-[22px] shrink-0">
        <Image src={item.icon} alt="" fill sizes="22px" unoptimized className="object-contain" />
      </span>
    );
  }

  const glyph = (() => {
    switch (item.glyph) {
      case "terminal":
        return <TerminalWindow size={17} weight="regular" className="text-[var(--glass-glyph)]" aria-hidden />;
      case "folder":
        return <FolderSimple size={18} weight="fill" className="text-[var(--glass-folder)]" aria-hidden />;
      case "chart":
        return <ChartBar size={18} weight="fill" className="text-[var(--glass-accent)]" aria-hidden />;
      case "gear":
        return <Gear size={18} weight="fill" className="text-[var(--glass-glyph)]" aria-hidden />;
      case "command":
        return <Lightning size={16} weight="fill" className="text-[var(--glass-accent)]" aria-hidden />;
      default:
        return <File size={17} weight="regular" className="text-[var(--glass-glyph)]" aria-hidden />;
    }
  })();

  return (
    <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center">
      {glyph}
    </span>
  );
}

export function LauncherDemo() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const [note, setNote] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const timer = useRef<number | null>(null);

  const parsed = useMemo(() => parseQuery(query), [query]);
  const calcValue = useMemo(() => {
    if (parsed.command || !parsed.term) return null;
    if (!/^[\d\s.+\-*/%()]+$/.test(parsed.term)) return null;
    if (!/[+\-*/%()]/.test(parsed.term)) return null;
    return evaluate(parsed.term);
  }, [parsed]);

  const results = useMemo<Result[]>(() => {
    if (calcValue !== null) {
      return [
        {
          id: "calc",
          title: parsed.term,
          subtitle: "Calculator",
          kind: "calc",
          haystack: parsed.term,
          value: formatNumber(calcValue),
          score: 2000,
        },
      ];
    }

    let pool: Item[] = apps;
    if (parsed.command) pool = commands;
    else if (parsed.scope === "file") pool = files.filter((item) => item.kind === "file");
    else if (parsed.scope === "folder") pool = files.filter((item) => item.kind === "folder");
    else if (parsed.scope === "all" && parsed.term) pool = [...apps, ...files];

    return pool
      .map((item) => {
        const direct = score(parsed.term, item.title);
        const loose = item.haystack.toLowerCase().includes(parsed.term.toLowerCase()) ? 300 : -1;
        const best = Math.max(direct, loose);
        return { ...item, score: parsed.term ? best : 0 };
      })
      .filter((item) => item.score >= 0)
      .sort((a, b) =>
        parsed.term ? b.score - a.score || a.title.localeCompare(b.title) : 0,
      )
      .slice(0, 8);
  }, [parsed, calcValue]);

  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  function flashNote(message: string) {
    setNote(message);
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setNote(null), 2600);
  }

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (results.length) setSelected((current) => (current + 1) % results.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (results.length) setSelected((current) => (current - 1 + results.length) % results.length);
    } else if (event.key === "Enter") {
      event.preventDefault();
      const item = results[selected];
      if (!item) return;
      if (item.kind === "calc") flashNote(`${parsed.term} equals ${item.value}.`);
      else if (item.kind === "command") flashNote(`Enter would run ${item.title}.`);
      else flashNote(`Enter would open ${item.title}.`);
    } else if (event.key === "Escape") {
      event.preventDefault();
      setQuery("");
      setSelected(0);
      setNote(null);
    }
  }

  return (
    <div className="w-full">
      <DesktopFrame
        src="/glass-lake.jpg"
        alt="Moraine Lake at sunset, used as the desktop behind the Nex panel"
        sizes="(min-width: 1024px) 620px, 100vw"
        height="h-[480px] sm:h-[470px]"
        priority
        dim
        position="center 70%"
      >
        <div className="glass-panel w-full max-w-[400px] overflow-hidden rounded-[12px]">
          <div className="flex h-11 items-center gap-2.5 border-b border-[var(--glass-line)] px-3.5">
            <MagnifyingGlass size={15} aria-hidden className="shrink-0 text-[var(--glass-faint)]" />
            <input
              ref={inputRef}
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setSelected(0);
                setNote(null);
              }}
              onKeyDown={onKeyDown}
              placeholder="Search for apps, files and actions..."
              aria-label="Search preview: apps, files and actions"
              role="combobox"
              aria-expanded={results.length > 0}
              aria-controls="glass-search-results"
              aria-autocomplete="list"
              aria-activedescendant={
                results[selected] ? `glass-option-${results[selected].id}` : undefined
              }
              spellCheck={false}
              autoComplete="off"
              className="min-w-0 flex-1 bg-transparent text-[13px] text-[var(--glass-text)] caret-[var(--glass-accent)] outline-none placeholder:text-[var(--glass-faint)] focus-visible:outline-none"
            />
            <button
              type="button"
              aria-label="Open command mode in the preview"
              onClick={() => {
                setQuery("> ");
                setSelected(0);
                inputRef.current?.focus();
              }}
              className="shrink-0 rounded-[4px] p-0.5 text-[var(--glass-faint)] transition-colors hover:text-[var(--glass-text)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8fb6ff]/70"
            >
              <Power size={14} aria-hidden />
            </button>
          </div>

          <ul
            id="glass-search-results"
            role="listbox"
            aria-label="Preview search results"
            className="max-h-[340px] overflow-y-auto p-1.5"
          >
            {results.length === 0 && (
              <li className="px-2.5 py-4 text-[12px] leading-relaxed text-[var(--glass-dim)]">
                Nothing indexed for that. Try fewer letters, or a different scope.
              </li>
            )}
            {results.map((item, index) => {
              const active = index === selected;
              return (
                <li
                  key={item.id}
                  id={`glass-option-${item.id}`}
                  role="option"
                  aria-selected={active}
                  onMouseEnter={() => setSelected(index)}
                  onClick={() => setSelected(index)}
                  className={`flex h-[42px] cursor-pointer items-center gap-2.5 rounded-[8px] px-2 transition-colors duration-150 ${
                    active
                      ? "bg-[var(--glass-selected)] ring-1 ring-inset ring-[var(--glass-selected-border)]"
                      : "hover:bg-[var(--glass-hover)]"
                  }`}
                >
                  <ItemIcon item={item} />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[12.5px] leading-[1.25] text-[var(--glass-text)]">
                      {item.title}
                    </span>
                    <span className="block truncate text-[10.8px] leading-[1.35] text-[var(--glass-dim)]">
                      {item.subtitle}
                    </span>
                  </span>
                  {item.kind === "calc" ? (
                    <span className="mono shrink-0 text-[13px] text-[var(--glass-accent)] tabular-nums">
                      {item.value}
                    </span>
                  ) : item.kind === "app" || item.kind === "file" || item.kind === "folder" ? (
                    <BookmarkSimple
                      size={12}
                      weight="fill"
                      aria-hidden
                      className="shrink-0 text-[var(--glass-accent)]"
                    />
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </DesktopFrame>

      <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <span className="mono text-[10px] text-faint">Liquid Glass, rendered</span>
        <span
          className={`mono text-[10px] transition-colors sm:text-right ${
            note ? "text-signal" : "text-faint"
          }`}
          aria-live="polite"
        >
          {note ?? "Click or tap to type"}
        </span>
      </div>
    </div>
  );
}
