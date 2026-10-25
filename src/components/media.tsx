"use client";

import Link from "next/link";

import { useMediaPlayer } from "@/components/use-media-player";

export function MediaStory() {
  const player = useMediaPlayer(true);
  const { track, playing, volume, muted } = player;

  return (
    <section className="ln-section" id="media" data-testid="media-section">
      <div className="ln-shell">
        <div className="ln-split is-flip">
          <div>
            <span className="ln-section-label">
              <span
                className="ln-dot"
                style={{ background: "var(--ln-orange)" }}
              />
              <span className="ln-num">4.0</span>
              Media
            </span>
            <h2 className="ln-h2">The track, without alt-tabbing.</h2>
            <p className="ln-lede">
              <strong>
                Play, pause, skip, and set the volume from the panel.
              </strong>{" "}
              The same glass, a smaller surface, and no media window to hunt for.
            </p>
            <div className="ln-points">
              <div className="ln-point">
                <span className="ln-point-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z" />
                  </svg>
                </span>
                <div>
                  <h3>Play and pause</h3>
                  <p>
                    The track that is playing, right in the panel you already
                    opened.
                  </p>
                </div>
              </div>
              <div className="ln-point">
                <span className="ln-point-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z" />
                  </svg>
                </span>
                <div>
                  <h3>Skip either way</h3>
                  <p>Previous and next sit under the progress bar.</p>
                </div>
              </div>
              <div className="ln-point">
                <span className="ln-point-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM32,96H72v64H32ZM144,207.64,88,164.09V91.91l56-43.55Zm54-106.08a40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.58,24,24,0,0,0,0-31.72,8,8,0,0,1,12-10.58ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z" />
                  </svg>
                </span>
                <div>
                  <h3>Set the volume</h3>
                  <p>A slider in the same row. No media window to hunt for.</p>
                </div>
              </div>
            </div>
            <div className="ln-links">
              <Link
                className="ln-btn ln-btn-secondary ln-btn-sm"
                data-testid="media-features-link"
                href="/features"
              >
                Media and power actions
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
                className={`nx-panel nx-media${playing ? " is-playing" : ""}`}
                data-testid="story-media-demo-panel"
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
                  <h3 data-testid="story-media-track-title">{track.title}</h3>                  <p data-testid="story-media-track-artist">
                    {track.artist} — {track.album}
                  </p>
                  <input
                    className="nx-range nx-seek"
                    type="range"
                    min={0}
                    max={track.length}
                    aria-label="Seek"
                    data-testid="story-media-seek"
                    style={{ background: player.seekFill }}
                    value={player.position}
                    onChange={(event) => player.seek(+event.target.value)}
                  />
                  <div className="nx-times">
                    <span data-testid="story-media-elapsed">{player.elapsed}</span>
                    <span data-testid="story-media-duration">{player.duration}</span>
                  </div>
                  <div className="nx-controls">
                    <button
                      type="button"
                      className="nx-icon-btn"
                      aria-label="Previous track"
                      data-testid="story-media-prev"
                      onClick={() => player.skip(-1)}
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
                      aria-label={playing ? "Pause" : "Play"}
                      data-testid="story-media-play-toggle"
                      onClick={player.togglePlay}
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
                      aria-label="Next track"
                      data-testid="story-media-next"
                      onClick={() => player.skip(1)}
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
                        aria-label={muted ? "Unmute" : "Mute"}
                        data-testid="story-media-mute"
                        onClick={player.toggleMute}
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
                        aria-label="Volume"
                        data-testid="story-media-volume"
                        style={{ background: player.volumeFill }}
                        value={volume}
                        onChange={(event) => player.setVolume(+event.target.value)}
                      />
                    </div>
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
