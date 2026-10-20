"use client";

import Image from "next/image";
import { useState } from "react";
import { Pause, Play, SkipBack, SkipForward, SpeakerHigh } from "@/components/icons";
import { DesktopFrame } from "@/components/glass";

export function MediaDemo() {
  const [playing, setPlaying] = useState(true);

  return (
    <DesktopFrame
      src="/glass-lake.jpg"
      alt="Moraine Lake at sunset behind the Nex media controls"
      sizes="(min-width: 1024px) 1100px, 100vw"
      height="h-[270px] sm:h-[320px]"
      position="center 55%"
    >
      <div className="glass-panel w-full max-w-[640px] rounded-[14px] p-4">
        <div className="flex items-center gap-3">
          <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16 overflow-hidden rounded-[6px] border border-[var(--glass-line)] sm:h-16 sm:w-16">
            <Image
              src="/album.jpg"
              alt="Cover art for Low Orbit"
              fill
              sizes="52px"
              className="object-cover"
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="truncate text-[14px] leading-tight text-[var(--glass-text)]">
              Low Orbit
            </div>
            <div className="mt-0.5 truncate text-[11px] leading-tight text-[var(--glass-dim)]">
              Sable · Nightfall EP
            </div>
            <div className="mt-2 hidden items-center gap-2 sm:flex">
              <span className="mono text-[10px] leading-none text-[var(--glass-faint)]">0:42</span>
              <div className="relative h-[2px] flex-1 overflow-hidden rounded-full bg-[var(--glass-track)]">
                <div className="absolute inset-y-0 left-0 w-[22%] rounded-full bg-[var(--glass-accent)]" />
              </div>
              <span className="mono text-[10px] leading-none text-[var(--glass-faint)]">3:12</span>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-0.5">
            <span
              aria-hidden
              className="inline-flex h-7 w-7 items-center justify-center text-[var(--glass-control)]"
            >
              <SkipBack size={15} weight="fill" />
            </span>
            <button
              type="button"
              onClick={() => setPlaying((value) => !value)}
              aria-label={playing ? "Pause preview" : "Play preview"}
              aria-pressed={playing}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[var(--glass-text)] transition-colors hover:bg-[var(--glass-hover)]"
            >
              {playing ? (
                <Pause size={17} weight="fill" aria-hidden />
              ) : (
                <Play size={17} weight="fill" aria-hidden />
              )}
            </button>
            <span
              aria-hidden
              className="inline-flex h-7 w-7 items-center justify-center text-[var(--glass-control)]"
            >
              <SkipForward size={15} weight="fill" />
            </span>
          </div>

          <span aria-hidden className="hidden h-5 w-px bg-[var(--glass-line)] sm:block" />

          <div aria-hidden className="hidden items-center gap-1.5 sm:flex">
            <SpeakerHigh size={14} className="text-[var(--glass-control)]" />
            <span className="relative h-[2px] w-[52px] rounded-full bg-[var(--glass-track)]">
              <span className="absolute inset-y-0 left-0 w-[70%] rounded-full bg-[var(--glass-accent)]" />
              <span className="absolute left-[70%] top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--glass-text)]" />
            </span>
          </div>
        </div>

        <div className="mt-2 flex items-center gap-2 px-0.5 sm:hidden">
          <span className="mono text-[10px] leading-none text-[var(--glass-faint)]">0:42</span>
          <div className="relative h-[2px] flex-1 overflow-hidden rounded-full bg-[var(--glass-track)]">
            <div className="absolute inset-y-0 left-0 w-[22%] rounded-full bg-[var(--glass-accent)]" />
          </div>
          <span className="mono text-[10px] leading-none text-[var(--glass-faint)]">3:12</span>
        </div>
      </div>
    </DesktopFrame>
  );
}
