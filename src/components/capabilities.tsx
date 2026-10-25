import Link from "next/link";

const dockApps = ["discord", "spotify", "brave", "riotgames"];

export function Capabilities() {
  return (
    <section className="ln-section" id="launcher" data-testid="capabilities-section">
      <div className="ln-shell">
        <Link className="ln-section-label" href="/features">
          <span className="ln-dot" style={{ background: "var(--ln-accent)" }} />
          <span className="ln-num">1.0</span>
          Launcher
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
          <h2 className="ln-h2">One field, the whole machine.</h2>
          <div>
            <p className="ln-lede">
              <strong>Search is the entry point.</strong>{" "}
              Opening, creating, calculating, and shutting down all happen behind the same
              box.
            </p>
            <div className="ln-links">
              <Link
                className="ln-btn ln-btn-secondary ln-btn-sm"
                data-testid="capabilities-features-link"
                href="/features"
              >
                Explore every feature
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
        <div className="ln-grid">
          <article className="ln-cell" data-testid="capability-1">
            <div className="ln-cell-visual">
              <div className="ln-chips" aria-hidden="true">
                <span className="ln-chip is-accent">@apps</span>
                <span className="ln-chip is-accent">@files</span>
                <span className="ln-chip is-accent">@folders</span>
                <span className="ln-chip ">kind:pdf</span>
                <span className="ln-chip ">modified:week</span>
                <span className="ln-chip is-neg">-node_modules</span>
              </div>
            </div>
            <span className="ln-cell-num">01</span>
            <h3>Find what is actually there</h3>
            <p>
              Start menu apps, project files, folders. Fuzzy matching, ranked by what you
              use and by what you touched last.
            </p>
          </article>
          <article className="ln-cell" data-testid="capability-2">
            <div className="ln-cell-visual">
              <div className="ln-flow" aria-hidden="true">
                <div className="ln-flow-code">
                  file_discovery_backend = <em>{'"auto"'}</em>
                </div>
                <div className="ln-flow-steps">
                  <span className="is-on">everything</span>
                  <i />
                  <span>walkdir fallback</span>
                </div>
              </div>
            </div>
            <span className="ln-cell-num">02</span>
            <h3>Everything SDK, when it is running</h3>
            <p>
              With Voidtools Everything installed, file results come from its index.
              Without it, Nex walks your roots and watches for changes.
            </p>
          </article>
          <article className="ln-cell" data-testid="capability-3">
            <div className="ln-cell-visual">
              <div className="ln-mini-panel" aria-hidden="true">
                <div className="ln-mini-search">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                  </svg>
                  q3 notes
                </div>
                <div className="ln-mini-row is-on">
                  <span className="ln-plus">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z" />
                    </svg>
                  </span>
                  Create q3-notes.md{" "}
                  <small>Desktop</small>
                </div>
                <div className="ln-mini-row">
                  <span className="ln-plus" style={{ opacity: 0.6 }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z" />
                    </svg>
                  </span>
                  Create folder q3-notes{" "}
                  <small>Desktop</small>
                </div>
              </div>
            </div>
            <span className="ln-cell-num">03</span>
            <h3>Create what is missing</h3>
            <p>
              Type a name that does not exist yet and Nex offers to create the file or
              folder, in the folder you choose.
            </p>
          </article>
          <article className="ln-cell" data-testid="capability-4">
            <div className="ln-cell-visual">
              <div className="ln-calc" aria-hidden="true">
                <span className="ln-calc-expr">(4800 / 12) * 1.09</span>
                <span className="ln-calc-eq">436</span>
              </div>
            </div>
            <span className="ln-cell-num">04</span>
            <h3>Do the math inline</h3>
            <p>
              Expressions evaluate as you type. Parentheses, percentages, and order of
              operations included.
            </p>
          </article>
          <article className="ln-cell" data-testid="capability-5">
            <div className="ln-cell-visual">
              <div className="ln-clip" aria-hidden="true">
                <div className="ln-clip-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z" />
                  </svg>
                  git rebase -i HEAD~3{" "}
                  <small>now</small>
                </div>
                <div className="ln-clip-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z" />
                  </svg>
                  Meeting moved to 4:30{" "}
                  <small>2m</small>
                </div>
                <div className="ln-clip-row is-skip">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z" />
                  </svg>
                  <span>••••••••</span>{" "}
                  <small>skipped</small>
                </div>
              </div>
            </div>
            <span className="ln-cell-num">05</span>
            <h3>Clipboard, kept on this device</h3>
            <p>
              Recent copies with a retention window, encrypted at rest with DPAPI. Password
              and OTP patterns are skipped.
            </p>
          </article>
          <article className="ln-cell" data-testid="capability-6">
            <div className="ln-cell-visual">
              <div className="ln-dock" aria-hidden="true">
                <span className="ln-dock-label">Quick Launch</span>
                <div className="ln-dock-row">
                  {dockApps.map((app) => (
                    <span key={app} className="ln-dock-item">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`/apps/${app}.svg`} alt="" />
                      <i />
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <span className="ln-cell-num">06</span>
            <h3>Pins and bookmarks</h3>
            <p>
              Bookmark a result to keep it near the top, or pin the apps that start your day
              to Quick Launch.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
