"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Lightning,
  MagnifyingGlass,
  SpeakerHigh,
} from "@phosphor-icons/react";
import { ChatDemo } from "@/components/chat-demo";
import { LauncherDemo } from "@/components/launcher-demo";
import { MediaDemo } from "@/components/media-demo";

const modes = [
  {
    id: "search",
    title: "Find anything",
    label: "Launcher",
    Icon: MagnifyingGlass,
    number: "01",
  },
  {
    id: "chat",
    title: "A little room to think",
    label: "Chat",
    Icon: Lightning,
    number: "02",
  },
  {
    id: "media",
    title: "Stay in your rhythm",
    label: "Media",
    Icon: SpeakerHigh,
    number: "03",
  },
] as const;

type ModeId = (typeof modes)[number]["id"];

export function DemoShowcase() {
  const [mode, setMode] = useState<ModeId>("search");
  const [mounted, setMounted] = useState<ModeId[]>(["search"]);
  const [version, setVersion] = useState(0);
  const reduced = useReducedMotion();
  const showcase = useRef<HTMLDivElement>(null);
  const active = modes.find((item) => item.id === mode) ?? modes[0];

  function select(next: ModeId) {
    setMode(next);
    setMounted((current) =>
      current.includes(next) ? current : [...current, next],
    );
  }

  useEffect(() => {
    const onMode = (event: Event) => {
      const detail = (event as CustomEvent<string>).detail as ModeId;
      if (!modes.some((item) => item.id === detail)) return;
      setMode(detail);
      setMounted((current) =>
        current.includes(detail) ? current : [...current, detail],
      );
    };
    window.addEventListener("nex-mode", onMode);
    return () => window.removeEventListener("nex-mode", onMode);
  }, []);

  return (
    <div
      id="experience"
      className="experience"
      data-testid="demo-showcase"
      ref={showcase}
      onPointerMove={(event) => {
        if (reduced || event.pointerType !== "mouse") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty(
          "--pointer-x",
          `${((event.clientX - bounds.left) / bounds.width) * 100}%`,
        );
      }}
    >
      <Image
        src="/nex-coast.jpg"
        alt="A quiet turquoise inlet beneath the mountains of the Norwegian coast"
        fill
        sizes="100vw"
        preload
        className="experience-background"
      />
      <div className="experience-shade" aria-hidden />

      <div className="experience-top shell">
        <span className="experience-label">
          <span className="status-dot" /> THE NEX EXPERIENCE
        </span>
        <span className="experience-preview" data-testid="demo-live-indicator">
          Interactive preview <span>·</span> Not your actual desktop
        </span>
      </div>

      <div className="experience-stage shell">
        <div className="scene-caption" data-testid="demo-mode-caption">
          <span className="mono">{active.number} / 03</span>
          <span>{active.title}</span>
        </div>

        <div className="scene-panels" key={version}>
          {modes.map((item) => (
            <div
              key={item.id}
              id={`demo-panel-${item.id}`}
              role="tabpanel"
              aria-labelledby={`demo-tab-${item.id}`}
              hidden={mode !== item.id}
              data-testid={`demo-panel-${item.id}`}
            >
              {mounted.includes(item.id) &&
                (item.id === "search" ? (
                  <LauncherDemo />
                ) : item.id === "chat" ? (
                  <ChatDemo onBack={() => select("search")} />
                ) : (
                  <MediaDemo active={mode === "media"} />
                ))}
            </div>
          ))}
        </div>

        <div className="scene-side-note" aria-hidden>
          <span>Nex</span>
          <p>
            A lighter way
            <br />
            through your day.
          </p>
          <div className="scene-rule" />
        </div>
      </div>

      <div className="experience-bottom shell">
        <span className="scene-material-label">
          Less in the way.
          <br />
          <strong>More in your flow.</strong>
        </span>

        <div className="demo-dock liquid-control" role="tablist" aria-label="Product preview modes">
          {modes.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`demo-tab-${item.id}`}
              data-testid={`demo-tab-${item.id}`}
              aria-selected={mode === item.id}
              aria-controls={`demo-panel-${item.id}`}
              tabIndex={mode === item.id ? 0 : -1}
              onClick={() => select(item.id)}
              onKeyDown={(event) => {
                if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
                event.preventDefault();
                const next =
                  event.key === "Home"
                    ? 0
                    : event.key === "End"
                      ? 2
                      : (index + (event.key === "ArrowRight" ? 1 : 2)) % 3;
                select(modes[next].id);
                document.getElementById(`demo-tab-${modes[next].id}`)?.focus();
              }}
            >
              {mode === item.id && (
                <motion.span
                  className="dock-selection"
                  layoutId="dock-selection"
                  transition={
                    reduced
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 350, damping: 32 }
                  }
                />
              )}
              <item.Icon size={18} aria-hidden />
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <button
          className="scene-reset"
          data-testid="demo-reset"
          onClick={() => {
            setVersion((value) => value + 1);
            setMounted(["search"]);
            setMode("search");
          }}
          type="button"
          title="Reset all preview modes"
        >
          Start fresh <ArrowRight size={14} aria-hidden />
        </button>
      </div>
    </div>
  );
}
