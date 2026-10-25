import Link from "next/link";

const examples = [
  {
    code: "> restart",
    title: "Command mode",
    body: "Run actions by name. Power, uninstall, and anything a plugin exposes.",
  },
  {
    code: "4*(18+7)",
    title: "Calculator",
    body: "Arithmetic evaluates inline, with the result in the same row.",
  },
  {
    code: "july notes",
    title: "Create",
    body: "No match? Nex offers july-notes.md on your Desktop and gets out of the way.",
  },
  {
    code: "youtube.com",
    title: "Open link",
    body: "A bare domain opens in the default browser instead of being searched for.",
  },
  {
    code: "@files budget",
    title: "Scope",
    body: "Narrow to files, folders, apps, clipboard, or actions, then keep typing.",
  },
  {
    code: "kind:pdf modified:week",
    title: "Query DSL",
    body: "Filter by type, extension, or date. AND, OR, NOT, and -term all work.",
  },
];

export function Syntax() {
  return (
    <section className="ln-section" id="syntax" data-testid="syntax-section">
      <div className="ln-shell">
        <Link className="ln-section-label" href="/docs/getting-started">
          <span className="ln-dot" style={{ background: "var(--ln-green)" }} />
          <span className="ln-num">2.0</span>
          Syntax
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
          <h2 className="ln-h2">The syntax is the shortcut.</h2>
          <div>
            <p className="ln-lede">
              <strong>The query does the work.</strong>{" "}
              There is no menu to hunt for, no mode to remember, and no reason to reach for
              the mouse.
            </p>
            <div className="ln-links">
              <Link
                className="ln-btn ln-btn-secondary ln-btn-sm"
                data-testid="syntax-reference-link"
                href="/docs/getting-started"
              >
                Search syntax reference
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
        <div className="ln-syntax">
          <div className="ln-syntax-list" role="tablist" aria-label="Query examples">
            {examples.map((example, index) => (
              <button
                key={example.code}
                type="button"
                role="tab"
                className="ln-syntax-item"
                aria-selected={index === 0}
                data-testid={`syntax-example-${index + 1}`}
              >
                <span className="ln-cell-num">0{index + 1}</span>
                <code>{example.code}</code>
                <div>
                  <h3>{example.title}</h3>
                  <p>{example.body}</p>
                </div>
              </button>
            ))}
          </div>
          <div className="ln-syntax-stage">
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
                  className="nx-panel ln-materialize"
                  style={{ maxWidth: "460px" }}
                  data-testid="syntax-preview"
                >
                  <div className="nx-search" style={{ height: "54px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                    </svg>
                    <span
                      style={{
                        fontSize: "17px",
                        color: "#fff",
                        fontFamily: "var(--ln-mono)",
                      }}
                    >
                      {"> restart"}
                      <span className="nx-cursor" />
                    </span>
                  </div>
                  <div className="nx-group">Actions</div>
                  <div style={{ padding: "0 8px 10px" }}>
                    <div className="nx-row" aria-selected="true">
                      <span className="nx-app-icon is-cmd">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path
                            d="M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z"
                            opacity="0.2"
                          />
                          <path d="M120,128V48a8,8,0,0,1,16,0v80a8,8,0,0,1-16,0Zm60.37-78.7a8,8,0,0,0-8.74,13.4C194.74,77.77,208,101.57,208,128a80,80,0,0,1-160,0c0-26.43,13.26-50.23,36.37-65.3a8,8,0,0,0-8.74-13.4C47.9,67.38,32,96.06,32,128a96,96,0,0,0,192,0C224,96.06,208.1,67.38,180.37,49.3Z" />
                        </svg>
                      </span>
                      <span className="nx-row-text">
                        <b>Restart</b>
                        <span>Power</span>
                      </span>
                    </div>
                    <div className="nx-row" aria-selected="false">
                      <span className="nx-app-icon is-cmd">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path
                            d="M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z"
                            opacity="0.2"
                          />
                          <path d="M120,128V48a8,8,0,0,1,16,0v80a8,8,0,0,1-16,0Zm60.37-78.7a8,8,0,0,0-8.74,13.4C194.74,77.77,208,101.57,208,128a80,80,0,0,1-160,0c0-26.43,13.26-50.23,36.37-65.3a8,8,0,0,0-8.74-13.4C47.9,67.38,32,96.06,32,128a96,96,0,0,0,192,0C224,96.06,208.1,67.38,180.37,49.3Z" />
                        </svg>
                      </span>
                      <span className="nx-row-text">
                        <b>Shut down</b>
                        <span>Power</span>
                      </span>
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
