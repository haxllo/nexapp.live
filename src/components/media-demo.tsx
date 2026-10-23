"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
  SpeakerHigh,
} from "@phosphor-icons/react";

const tracks = [
  {
    title: "Low Orbit",
    artist: "Sable",
    album: "Eclipse",
    length: 192,
  },
  {
    title: "Ring Shadow",
    artist: "Sable",
    album: "Eclipse",
    length: 214,
  },
  {
    title: "Ember Line",
    artist: "Sable",
    album: "Eclipse",
    length: 178,
  },
];

const clock = (seconds: number) =>
  `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;

export function MediaDemo({ active }: { active: boolean }) {
  const [state, setState] = useState({ index: 0, position: 42 });
  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(70);
  const track = tracks[state.index];

  function skip(delta: number) {
    setState((current) => ({
      index: (current.index + delta + tracks.length) % tracks.length,
      position: 0,
    }));
  }

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

  return (
    <div className="glass-panel media-window" data-testid="media-demo-panel">
      <div className="media-artwork">
        <Image
          src="/album.jpg"
          alt="Eclipse artwork"
          fill
          sizes="(min-width: 640px) 240px, 180px"
          className="object-cover"
        />
        <span className="media-art-label">
          SABLE
          <br />
          <strong>ECLIPSE</strong>
        </span>
      </div>

      <div className="media-player">
        <div className="media-eyebrow">
          <span
            className={`equalizer ${playing ? "is-playing" : ""}`}
            aria-hidden
          >
            {[0, 1, 2, 3].map((bar) => (
              <i key={bar} style={{ animationDelay: `${160 * bar}ms` }} />
            ))}
          </span>
          NOW PLAYING
          <span className="media-demo-label" data-testid="media-simulation-label">
            SIMULATED
          </span>
        </div>

        <h3 data-testid="media-track-title">{track.title}</h3>
        <p data-testid="media-track-artist">
          {track.artist} · {track.album}
        </p>

        <div className="media-progress">
          <input
            type="range"
            min={0}
            max={track.length}
            value={state.position}
            onChange={(event) =>
              setState((current) => ({ ...current, position: +event.target.value }))
            }
            aria-label="Seek"
            data-testid="media-seek"
            style={{
              background: `linear-gradient(to right, #f1f5f4 ${
                (state.position / track.length) * 100
              }%, #ffffff30 0)`,
            }}
          />
          <div>
            <span data-testid="media-elapsed">{clock(state.position)}</span>
            <span data-testid="media-duration">{clock(track.length)}</span>
          </div>
        </div>

        <div className="media-transport">
          <button
            type="button"
            onClick={() => skip(-1)}
            aria-label="Previous track"
            title="Previous track"
            data-testid="media-prev"
          >
            <SkipBack size={23} weight="fill" />
          </button>
          <button
            type="button"
            className="media-play liquid-control"
            onClick={() => setPlaying((value) => !value)}
            aria-label={playing ? "Pause preview" : "Play preview"}
            aria-pressed={playing}
            data-testid="media-play-toggle"
          >
            {playing ? <Pause size={24} weight="fill" /> : <Play size={24} weight="fill" />}
          </button>
          <button
            type="button"
            onClick={() => skip(1)}
            aria-label="Next track"
            title="Next track"
            data-testid="media-next"
          >
            <SkipForward size={23} weight="fill" />
          </button>
        </div>

        <div className="media-volume-row">
          <SpeakerHigh size={16} aria-hidden />
          <input
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={(event) => setVolume(+event.target.value)}
            aria-label="Volume"
            data-testid="media-volume"
          />
          <span data-testid="media-volume-value">{volume}%</span>
        </div>
      </div>

      <div className="media-queue" aria-label="Preview tracks">
        {tracks.map((item, index) => (
          <button
            key={item.title}
            type="button"
            aria-pressed={state.index === index}
            data-testid={`media-track-${index}`}
            onClick={() => setState({ index, position: 0 })}
          >
            <span>0{index + 1}</span>
            {item.title}
            <span>{clock(item.length)}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
