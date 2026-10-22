"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { AppMark } from "@/components/app-mark";
import {
  ArrowUpRight,
  BookmarkSimple,
  ChartBar,
  File,
  FolderSimple,
  Gear,
  Lightning,
  MagnifyingGlass,
  Power,
  TerminalWindow,
} from "@phosphor-icons/react";

type Kind = "app" | "file" | "folder" | "command" | "calc";

type Item = {
  id: string;
  title: string;
  subtitle: string;
  kind: Kind;
  haystack: string;
  icon?: string;
  glyph?: "terminal" | "folder" | "chart" | "gear" | "command" | "file";
  value?: string;
  score?: number;
};

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
  {
    id: "shutdown",
    title: "Shut down",
    subtitle: "Power",
    kind: "command",
    haystack: "shut down power off",
    glyph: "command",
  },
  {
    id: "restart",
    title: "Restart",
    subtitle: "Power",
    kind: "command",
    haystack: "restart reboot power",
    glyph: "command",
  },
  {
    id: "sleep",
    title: "Sleep",
    subtitle: "Power",
    kind: "command",
    haystack: "sleep suspend power",
    glyph: "command",
  },
  {
    id: "lock",
    title: "Lock",
    subtitle: "Power",
    kind: "command",
    haystack: "lock screen power",
    glyph: "command",
  },
  {
    id: "recycle",
    title: "Empty Recycle Bin",
    subtitle: "System",
    kind: "command",
    haystack: "empty recycle bin trash",
    glyph: "command",
  },
];

function ItemIcon({ item }: { item: Item }) {
  if (item.icon) {
    return (
      <span className="relative h-[22px] w-[22px] shrink-0">
        <Image
          src={item.icon}
          alt=""
          fill
          sizes="22px"
          unoptimized
          className="object-contain"
        />
      </span>
    );
  }

  const glyph = (() => {
    switch (item.glyph) {
      case "terminal":
        return (
          <TerminalWindow
            size={17}
            className="text-[var(--glass-glyph)]"
            aria-hidden
          />
        );
      case "folder":
        return (
          <FolderSimple
            size={18}
            weight="fill"
            className="text-[var(--glass-folder)]"
            aria-hidden
          />
        );
      case "chart":
        return (
          <ChartBar
            size={18}
            weight="fill"
            className="text-[var(--glass-accent)]"
            aria-hidden
          />
        );
      case "gear":
        return (
          <Gear
            size={18}
            weight="fill"
            className="text-[var(--glass-glyph)]"
            aria-hidden
          />
        );
      case "command":
        return (
          <Lightning
            size={16}
            weight="fill"
            className="text-[var(--glass-accent)]"
            aria-hidden
          />
        );
      default:
        return <File size={17} className="text-[var(--glass-glyph)]" aria-hidden />;
    }
  })();

  return (
    <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center">
      {glyph}
    </span>
  );
}

function evaluate(expression: string): number | null {
  const matched = expression.match(/\d+(?:\.\d+)?|[()+\-*/%]/g);
  if (!matched) return null;
  const tokens: string[] = matched;
  let index = 0;
  const peek = () => tokens[index];

  function factor(): number {
    const token = peek();
    if (token === "-") {
      index += 1;
      return -factor();
    }
    if (token === "+") {
      index += 1;
      return factor();
    }
    if (token === "(") {
      index += 1;
      const value = expressionSum();
      if (peek() !== ")") throw new Error("unbalanced");
      index += 1;
      return value;
    }
    if (token === undefined) throw new Error("ends early");
    const value = Number(token);
    if (Number.isNaN(value)) throw new Error("not a number");
    index += 1;
    return value;
  }

  function term(): number {
    let value = factor();
    while (peek() === "*" || peek() === "/" || peek() === "%") {
      const op = tokens[index];
      index += 1;
      const right = factor();
      if (op === "*") value *= right;
      else if (op === "/") {
        if (right === 0) throw new Error("divide by zero");
        value /= right;
      } else value %= right;
    }
    return value;
  }

  function expressionSum(): number {
    let value = term();
    while (peek() === "+" || peek() === "-") {
      const op = tokens[index];
      index += 1;
      const right = term();
      value = op === "+" ? value + right : value - right;
    }
    return value;
  }

  try {
    const result = expressionSum();
    if (index !== tokens.length || !Number.isFinite(result)) return null;
    return result;
  } catch {
    return null;
  }
}

function scoreMatch(term: string, title: string): number {
  const needle = term.toLowerCase();
  const haystack = title.toLowerCase();
  if (!needle) return 0;
  if (haystack.startsWith(needle)) return 1000 - haystack.length;
  const at = haystack.indexOf(needle);
  if (at >= 0) return 820 - at;
  let cursor = 0;
  let gaps = 0;
  for (const char of needle) {
    const found = haystack.indexOf(char, cursor);
    if (found === -1) return -1;
    gaps += found - cursor;
    cursor = found + 1;
  }
  return 420 - gaps;
}

export function LauncherDemo() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const [note, setNote] = useState<string | null>(null);
  const input = useRef<HTMLInputElement>(null);
  const noteTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const parsed = useMemo(() => {
    const trimmed = query.trim();
    if (trimmed.startsWith(">")) {
      return { command: true, scope: "all" as const, term: trimmed.slice(1).trim() };
    }
    let term = trimmed;
    let scope: "all" | "app" | "file" | "folder" = "all";
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
      scope = kind[1].toLowerCase() as "app" | "file" | "folder";
      term = term.replace(kind[0], " ");
    }
    return { command: false, scope, term: term.trim() };
  }, [query]);

  const calculation = useMemo(() => {
    if (parsed.command || !parsed.term) return null;
    if (!/^[\d\s.+\-*/%()]+$/.test(parsed.term)) return null;
    if (!/[+\-*/%()]/.test(parsed.term)) return null;
    return evaluate(parsed.term);
  }, [parsed]);

  const results = useMemo<Item[]>(() => {
    if (calculation !== null) {
      return [
        {
          id: "calc",
          title: parsed.term,
          subtitle: "Calculator",
          kind: "calc",
          haystack: parsed.term,
          value: Number.isInteger(calculation)
            ? calculation.toLocaleString("en-US")
            : String(Number(calculation.toFixed(6))),
          score: 2000,
        },
      ];
    }

    let pool = apps;
    if (parsed.command) pool = commands;
    else if (parsed.scope === "file") pool = files.filter((item) => item.kind === "file");
    else if (parsed.scope === "folder")
      pool = files.filter((item) => item.kind === "folder");
    else if (parsed.scope === "all" && parsed.term) pool = [...apps, ...files];

    return pool
      .map((item) => {
        const score = Math.max(
          scoreMatch(parsed.term, item.title),
          item.haystack.toLowerCase().includes(parsed.term.toLowerCase()) ? 300 : -1,
        );
        return { ...item, score: parsed.term ? score : 0 };
      })
      .filter((item) => (item.score ?? 0) >= 0)
      .sort((a, b) =>
        parsed.term
          ? (b.score ?? 0) - (a.score ?? 0) || a.title.localeCompare(b.title)
          : 0,
      )
      .slice(0, 8);
  }, [parsed, calculation]);

  useEffect(
    () => () => {
      if (noteTimer.current) clearTimeout(noteTimer.current);
    },
    [],
  );

  function flash(message: string) {
    setNote(message);
    if (noteTimer.current) clearTimeout(noteTimer.current);
    noteTimer.current = setTimeout(() => setNote(null), 2600);
  }

  function act(item: Item) {
    if (item.kind === "calc") flash(`${parsed.term} equals ${item.value}.`);
    else if (item.kind === "command") flash(`Preview: would run ${item.title}.`);
    else flash(`Preview: would open ${item.title}.`);
  }

  const detail = results[selected] ?? results[0];

  return (
    <div className="glass-panel launcher-window" data-testid="launcher-window">
      <div className="launcher-search">
        <MagnifyingGlass size={23} aria-hidden />
        <input
          ref={input}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setSelected(0);
            setNote(null);
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              if (results.length) setSelected((value) => (value + 1) % results.length);
            } else if (event.key === "ArrowUp") {
              event.preventDefault();
              if (results.length)
                setSelected((value) => (value - 1 + results.length) % results.length);
            } else if (event.key === "Enter") {
              event.preventDefault();
              const item = results[selected];
              if (!item) return;
              if (item.kind === "calc") flash(`${parsed.term} equals ${item.value}.`);
              else if (item.kind === "command") flash(`Enter would run ${item.title}.`);
              else flash(`Enter would open ${item.title}.`);
            } else if (event.key === "Escape") {
              event.preventDefault();
              setQuery("");
              setSelected(0);
              setNote(null);
            }
          }}
          placeholder="What are you looking for?"
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
          className="launcher-input"
          data-testid="demo-input-field"
        />
        <Power size={20} aria-hidden className="launcher-power" />
      </div>

      <div className="launcher-scopes" aria-label="Search scope">
        {[
          { label: "All", query: "", scope: "all" as const },
          { label: "Apps", query: "@apps ", scope: "app" as const },
          { label: "Files", query: "@files ", scope: "file" as const },
          { label: "Folders", query: "@folders ", scope: "folder" as const },
        ].map((item) => (
          <button
            key={item.scope}
            type="button"
            data-testid={`demo-scope-${item.scope}`}
            aria-pressed={!parsed.command && parsed.scope === item.scope}
            onClick={() => {
              setQuery(item.query);
              setSelected(0);
              setNote(null);
              input.current?.focus();
            }}
          >
            {item.label}
          </button>
        ))}
        <button
          type="button"
          data-testid="demo-command-mode"
          title="Command mode"
          aria-pressed={parsed.command}
          aria-label="Open command mode in the preview"
          onClick={() => {
            setQuery("> ");
            setSelected(0);
            input.current?.focus();
          }}
          className="command-mode-button"
        >
          <span>Actions</span>
        </button>
      </div>

      <div className="launcher-body">
        <div className="launcher-results">
          <p className="launcher-result-label" data-testid="demo-result-heading">
            {query
              ? `${results.length} ${results.length === 1 ? "result" : "results"}`
              : "YOUR APPS"}
          </p>
          <ul
            id="glass-search-results"
            role="listbox"
            aria-label="Preview search results"
            className="launcher-result-list"
            data-testid="demo-result-list"
          >
            {results.length === 0 && (
              <li
                data-testid="demo-empty-state"
                className="px-2.5 py-4 text-[12px] leading-relaxed text-[var(--glass-dim)]"
              >
                Nothing indexed for that. Try fewer letters, or a different scope.
              </li>
            )}
            {results.map((item, index) => {
              const isSelected = index === selected;
              return (
                <li
                  key={item.id}
                  id={`glass-option-${item.id}`}
                  role="option"
                  aria-selected={isSelected}
                  data-testid={`demo-result-${item.id}`}
                  onMouseEnter={() => setSelected(index)}
                  onClick={() => {
                    setSelected(index);
                    act(item);
                  }}
                  className={`launcher-result ${
                    isSelected
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
                    <span
                      data-testid="demo-calculation-result"
                      className="mono shrink-0 text-[13px] text-[var(--glass-accent)] tabular-nums"
                    >
                      {item.value}
                    </span>
                  ) : item.kind === "app" ||
                    item.kind === "file" ||
                    item.kind === "folder" ? (
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

        <aside className="launcher-detail" data-testid="demo-result-detail">
          {detail ? (
            <>
              <div className="detail-icon">
                {detail.kind === "calc" ? (
                  <span className="detail-calculation">{detail.value}</span>
                ) : (
                  <ItemIcon item={detail} />
                )}
              </div>
              <strong>{detail.title}</strong>
              <span>{detail.subtitle}</span>
              <button
                type="button"
                className="liquid-control detail-open"
                data-testid="demo-open-result"
                onClick={() => act(detail)}
              >
                {detail.kind === "calc"
                  ? "Calculate"
                  : detail.kind === "command"
                    ? "Run action"
                    : "Open"}
                <ArrowUpRight size={13} />
              </button>
            </>
          ) : (
            <>
              <MagnifyingGlass size={32} />
              <span>No results</span>
            </>
          )}
        </aside>
      </div>

      <div className="launcher-footer">
        <span className="launcher-note" aria-live="polite" data-testid="demo-note">
          <AppMark className="launcher-footer-mark" />
          {note ?? "Apps, files, actions. All here."}
        </span>
        <span className="launcher-key-hints" aria-hidden>
          <kbd>↑</kbd>
          <kbd>↓</kbd>
          <span>Navigate</span>
          <kbd>↵</kbd>
        </span>
      </div>
    </div>
  );
}
