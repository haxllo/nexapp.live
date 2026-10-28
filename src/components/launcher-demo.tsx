"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AppMark } from "@/components/app-mark";
import { Calculator, Lightning } from "@phosphor-icons/react";

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
    id: "settings",
    title: "Settings",
    subtitle: "Microsoft Windows",
    kind: "app",
    haystack: "settings control panel system",
    glyph: "gear",
  },
  {
    id: "brave",
    title: "Brave",
    subtitle: "Brave Software Inc",
    kind: "app",
    haystack: "brave browser web",
    icon: "/apps/brave.svg",
  },
  {
    id: "riot",
    title: "Riot Client",
    subtitle: "Riot Games, Inc.",
    kind: "app",
    haystack: "riot client league valorant games",
    icon: "/apps/riotgames.svg",
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
    id: "budget",
    title: "budget-2026.xlsx",
    subtitle: "Documents\\Finance",
    kind: "file",
    haystack: "budget spreadsheet finance excel quarter",
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
  {
    id: "projects",
    title: "Projects",
    subtitle: "C:\\Users\\you",
    kind: "folder",
    haystack: "projects code repositories folder",
    glyph: "folder",
  },
  {
    id: "downloads",
    title: "Downloads",
    subtitle: "C:\\Users\\you",
    kind: "folder",
    haystack: "downloads files folder",
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

const initialBookmarks = ["discord", "spotify", "settings", "brave", "riot"];

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
    </svg>
  );
}

function PowerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="currentColor"
      viewBox="0 0 256 256"
      style={{ display: "block" }}
    >
      <path d="M120,128V48a8,8,0,0,1,16,0v80a8,8,0,0,1-16,0Zm60.37-78.7a8,8,0,0,0-8.74,13.4C194.74,77.77,208,101.57,208,128a80,80,0,0,1-160,0c0-26.43,13.26-50.23,36.37-65.3a8,8,0,0,0-8.74-13.4C47.9,67.38,32,96.06,32,128a96,96,0,0,0,192,0C224,96.06,208.1,67.38,180.37,49.3Z" />
    </svg>
  );
}

function BookmarkIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <path
        d={
          filled
            ? "M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Z"
            : "M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,177.57-51.77-32.35a8,8,0,0,0-8.48,0L72,209.57V48H184Z"
        }
      />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <path d="M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128ZM60,112a16,16,0,1,0,16,16A16,16,0,0,0,60,112Zm136,0a16,16,0,1,0,16,16A16,16,0,0,0,196,112Z" />
    </svg>
  );
}

function GlyphIcon({ glyph }: { glyph: Item["glyph"] }) {
  switch (glyph) {
    case "gear":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path
            d="M230.1,108.76,198.25,90.62c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.61,104.61,0,0,0,162,32L130,49.89c-1.34,0-2.69,0-4,0L94,32A104.58,104.58,0,0,0,59.89,51.25l-.16,36c-.7,1.12-1.37,2.26-2,3.41l-31.84,18.1a99.15,99.15,0,0,0,0,38.46l31.85,18.14c.64,1.16,1.31,2.29,2,3.41l.12,36A104.61,104.61,0,0,0,94,224l32-17.87c1.34,0,2.69,0,4,0L162,224a104.58,104.58,0,0,0,34.08-19.25l.16-36c.7-1.12,1.37-2.26,2-3.41l31.84-18.1A99.15,99.15,0,0,0,230.1,108.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"
            opacity="0.2"
          />
          <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.1,8.1,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8,8,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z" />
        </svg>
      );
    case "terminal":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path
            d="M224,56V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z"
            opacity="0.2"
          />
          <path d="M128,128a8,8,0,0,1-3,6.25l-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32A8,8,0,0,1,128,128Zm48,24H136a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm56-96V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z" />
        </svg>
      );
    case "folder":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path
            d="M224,88V200.89a7.11,7.11,0,0,1-7.11,7.11H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6L128,80h88A8,8,0,0,1,224,88Z"
            opacity="0.2"
          />
          <path d="M216,72H130.67L102.93,51.2a16.12,16.12,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V200a16,16,0,0,0,16,16H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72Zm0,128H40V64H93.33L123.2,86.4A8,8,0,0,0,128,88h88Z" />
        </svg>
      );
    case "chart":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M208,40V208H152V40Z" opacity="0.2" />
          <path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z" />
        </svg>
      );
    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M208,88H152V32Z" opacity="0.2" />
          <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z" />
        </svg>
      );
  }
}

function iconClass(item: Item): string {
  if (item.kind === "calc") return " is-calc";
  if (item.kind === "command") return " is-cmd";
  if (item.kind === "folder") return " is-folder";
  if (item.kind === "file") return " is-file";
  return item.icon ? "" : " is-glyph";
}

function AppIcon({ item }: { item: Item }) {
  return (
    <span className={`nx-app-icon${iconClass(item)}`}>
      {item.icon ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={item.icon} alt="" />
      ) : item.kind === "calc" ? (
        <Calculator size={15} weight="duotone" aria-hidden />
      ) : item.kind === "command" ? (
        <Lightning size={15} weight="duotone" aria-hidden />
      ) : (
        <GlyphIcon glyph={item.glyph} />
      )}
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
  const [bookmarks, setBookmarks] = useState<string[]>(initialBookmarks);
  const [actionsOpen, setActionsOpen] = useState(false);
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
    else if (parsed.scope === "app") pool = apps;
    else pool = [...apps, ...files];

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
      .slice(0, 16);
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

  function toggleBookmark(id: string) {
    setBookmarks((current) =>
      current.includes(id)
        ? current.filter((entry) => entry !== id)
        : [...current, id],
    );
  }

  return (
    <div className="nx-panel nx-launcher" data-testid="launcher-demo-panel">
      <div className="nx-search">
        <SearchIcon />
        <input
          ref={input}
          placeholder="Search for apps, files and actions..."
          aria-label="Search the launcher preview"
          data-testid="launcher-search-input"
          spellCheck={false}
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
        />
        <button
          type="button"
          className="nx-icon-btn"
          aria-label="Show power actions"
          data-testid="launcher-power-button"
          style={{ overflow: "visible" }}
        >
          <PowerIcon />
        </button>
      </div>

      <div className="nx-scopes" role="tablist" aria-label="Result scope">
        {[
          { label: "All", query: "", scope: "all" as const },
          { label: "Apps", query: "@apps ", scope: "app" as const },
          { label: "Files", query: "@files ", scope: "file" as const },
          { label: "Folders", query: "@folders ", scope: "folder" as const },
        ].map((item) => (
          <button
            key={item.scope}
            type="button"
            role="tab"
            className="nx-scope"
            aria-selected={!parsed.command && parsed.scope === item.scope}
            data-testid={`launcher-scope-${item.scope}`}
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
      </div>

      <div className="nx-body">
        <div
          className="nx-list"
          role="listbox"
          aria-label="Results"
          data-testid="launcher-results"
        >
          {results.length === 0 && (
            <div className="nx-empty" data-testid="demo-empty-state">
              Nothing indexed for that. Try fewer letters, or a different scope.
            </div>
          )}
          {results.map((item, index) => {
            const isSelected = index === selected;
            const isBookmarked = bookmarks.includes(item.id);
            return (
              <div
                key={item.id}
                role="option"
                aria-selected={isSelected}
                className="nx-row"
                data-testid={`launcher-result-${item.id}`}
                onMouseEnter={() => setSelected(index)}
                onClick={() => {
                  setSelected(index);
                  act(item);
                }}
              >
                <AppIcon item={item} />
                <span className="nx-row-text">
                  <b>{item.title}</b>
                  <span>{item.subtitle}</span>
                </span>
                {item.kind === "calc" ? (
                  <span className="nx-row-value" data-testid="demo-calculation-result">
                    {item.value}
                  </span>
                ) : item.kind === "app" ||
                  item.kind === "file" ||
                  item.kind === "folder" ? (
                  <button
                    type="button"
                    className="nx-bookmark"
                    aria-pressed={isBookmarked}
                    aria-label={`${isBookmarked ? "Remove" : "Add"} bookmark for ${item.title}`}
                    data-testid={`launcher-bookmark-${item.id}`}
                    onClick={(event) => {
                      event.stopPropagation();
                      toggleBookmark(item.id);
                    }}
                  >
                    <BookmarkIcon filled={isBookmarked} />
                  </button>
                ) : null}
              </div>
            );
          })}
        </div>

      </div>

      <div className="nx-footer">
        <span className="nx-footer-mark">
          <AppMark />
        </span>
        {note ? (
          <span className="nx-status" aria-live="polite" data-testid="demo-note">
            {note}
          </span>
        ) : null}
        <span
          className="nx-footer-end"
          style={{ position: "relative", display: "flex", alignItems: "center", gap: 2 }}
          onMouseEnter={() => setActionsOpen(true)}
          onMouseLeave={() => setActionsOpen(false)}
        >
          {actionsOpen ? (
            <>
              <button
                type="button"
                className="nx-icon-btn"
                aria-label="Settings"
                data-testid="launcher-settings"
                onClick={() => flash("Preview: would open Settings.")}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="16"
                  height="16"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </button>
              <button
                type="button"
                className="nx-icon-btn"
                aria-label="GitHub"
                onClick={() => window.open("https://github.com/haxllo/nex", "_blank")}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </button>
            </>
          ) : null}
          <button
            type="button"
            className="nx-icon-btn"
            aria-label="More options"
            data-testid="launcher-more"
          >
            <MoreIcon />
          </button>
        </span>
      </div>
    </div>
  );
}
