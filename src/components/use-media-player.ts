"use client";

import { useEffect, useState } from "react";

export const tracks = [
  { title: "Low Orbit", artist: "Sable", album: "Eclipse", length: 192 },
  { title: "Ring Shadow", artist: "Sable", album: "Eclipse", length: 214 },
  { title: "Ember Line", artist: "Sable", album: "Eclipse", length: 178 },
];

export const clock = (seconds: number) =>
  `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;

export const fill = (value: number, max: number) => {
  const percent = Math.round((value / max) * 10000) / 100;
  return `linear-gradient(to right, var(--app-blue) ${percent}%, #2a2a2a ${percent}%)`;
};

/**
 * The media panel is a working player: it starts where the reference's server
 * render leaves off (2:12 into Low Orbit, volume 22) and advances one second at a
 * time, rolling into the next track instead of stopping at the end.
 */
export function useMediaPlayer(active: boolean) {
  const [state, setState] = useState({ index: 0, position: 132 });
  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(22);
  const [previousVolume, setPreviousVolume] = useState(22);

  const track = tracks[state.index];
  const muted = volume === 0;

  useEffect(() => {
    if (!active || !playing) return;
    const timer = setInterval(() => {
      setState((current) =>
        current.position + 1 >= tracks[current.index].length
          ? { index: (current.index + 1) % tracks.length, position: 0 }
          : { ...current, position: current.position + 1 },
      );
    }, 1000);
    return () => clearInterval(timer);
  }, [active, playing]);

  return {
    track,
    position: state.position,
    playing,
    volume,
    muted,
    elapsed: clock(state.position),
    duration: clock(track.length),
    seekFill: fill(state.position, track.length),
    volumeFill: fill(volume, 100),
    skip: (delta: number) =>
      setState((current) => ({
        index: (current.index + delta + tracks.length) % tracks.length,
        position: 0,
      })),
    seek: (position: number) => setState((current) => ({ ...current, position })),
    togglePlay: () => setPlaying((value) => !value),
    setVolume,
    toggleMute: () => {
      if (muted) {
        setVolume(previousVolume || 22);
      } else {
        setPreviousVolume(volume);
        setVolume(0);
      }
    },
  };
}
