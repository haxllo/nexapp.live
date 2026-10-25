"use client";

import { useMediaPlayer } from "@/components/use-media-player";

export function MediaDemo({ active }: { active: boolean }) {
  const player = useMediaPlayer(active);
  const { track, playing, volume, muted } = player;

  return (
    <div
      className={`nx-panel nx-media${playing ? " is-playing" : ""}`}
      data-testid="media-demo-panel"
    >
      <div className="nx-art">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/album.jpg" alt="Eclipse artwork" />
      </div>
      <div className="nx-media-main">
        <div className="nx-now">
          <span
            className={`nx-bars is-sm${playing ? " is-live" : ""}`}
            aria-hidden="true"
          >
            <i />
            <i />
            <i />
          </span>
          {playing ? "NOW PLAYING" : "PAUSED"}
        </div>
        <h3 data-testid="media-track-title">{track.title}</h3>
        <p data-testid="media-track-artist">
          {track.artist} — {track.album}
        </p>
        <input
          className="nx-range nx-seek"
          type="range"
          min={0}
          max={track.length}
          value={player.position}
          onChange={(event) => player.seek(+event.target.value)}
          aria-label="Seek"
          data-testid="media-seek"
          style={{ background: player.seekFill }}
        />
        <div className="nx-times">
          <span data-testid="media-elapsed">{player.elapsed}</span>
          <span data-testid="media-duration">{player.duration}</span>
        </div>
        <div className="nx-controls">
          <button
            type="button"
            className="nx-icon-btn"
            onClick={() => player.skip(-1)}
            aria-label="Previous track"
            data-testid="media-prev"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M208,47.88V208.12a16,16,0,0,1-24.43,13.43L64,146.77V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0v69.23L183.57,34.45A15.95,15.95,0,0,1,208,47.88Z" />
            </svg>
          </button>
          <button
            type="button"
            className="nx-icon-btn"
            onClick={player.togglePlay}
            aria-label={playing ? "Pause" : "Play"}
            data-testid="media-play-toggle"
          >
            {playing ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z" />
              </svg>
            )}
          </button>
          <button
            type="button"
            className="nx-icon-btn"
            onClick={() => player.skip(1)}
            aria-label="Next track"
            data-testid="media-next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M208,40V216a8,8,0,0,1-16,0V146.77L72.43,221.55A15.95,15.95,0,0,1,48,208.12V47.88A15.95,15.95,0,0,1,72.43,34.45L192,109.23V40a8,8,0,0,1,16,0Z" />
            </svg>
          </button>
          <span className="nx-divider" />
          <div className="nx-volume">
            <button
              type="button"
              className="nx-icon-btn"
              onClick={player.toggleMute}
              aria-label={muted ? "Unmute" : "Mute"}
              data-testid="media-mute"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M160,32.25V223.69a8.29,8.29,0,0,1-3.91,7.18,8,8,0,0,1-9-.56l-65.57-51A4,4,0,0,1,80,176.16V79.84a4,4,0,0,1,1.55-3.15l65.57-51a8,8,0,0,1,10,.16A8.27,8.27,0,0,1,160,32.25ZM60,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H60a4,4,0,0,0,4-4V84A4,4,0,0,0,60,80ZM198,101.56a8,8,0,1,0-12,10.58,24,24,0,0,1,0,31.72,8,8,0,1,0,12,10.58,40,40,0,0,0,0-52.88Z" />
              </svg>
            </button>
            <input
              className="nx-range"
              type="range"
              min={0}
              max={100}
              value={volume}
              onChange={(event) => player.setVolume(+event.target.value)}
              aria-label="Volume"
              data-testid="media-volume"
              style={{ background: player.volumeFill }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
