export function Engineering() {
  return (
    <section className="ln-section" id="engineering" data-testid="engineering-section">
      <div className="ln-shell">
        <span className="ln-section-label">
          <span className="ln-dot" style={{ background: "var(--ln-yellow)" }} />
          <span className="ln-num">5.0</span>
          Engineering
        </span>
        <div className="ln-head-row">
          <h2 className="ln-h2">Glass, rendered, not painted.</h2>
          <p className="ln-lede">
            <strong>Version 2.28 stopped faking the blur.</strong> The panel captures the
            desktop behind it, bends that image at the rim, then draws its own contact shadow.
            If the GPU path cannot start, it falls back to an opaque surface instead of a blank
            window.
          </p>
        </div>
        <div className="ln-stats">
          <div className="ln-stat" data-testid="stat-v2.28.0">
            <b className="ln-gradient-text">7.1 MB</b>
            <span>Installer, x64</span>
            <code>v2.28.0</code>
          </div>
          <div className="ln-stat" data-testid="stat-active_memory_target_mb">
            <b className="ln-gradient-text">72 MB</b>
            <span>Active memory target</span>
            <code>active_memory_target_mb</code>
          </div>
          <div className="ln-stat" data-testid="stat-index_max_items_total">
            <b className="ln-gradient-text">120k</b>
            <span>Indexed items, default cap</span>
            <code>index_max_items_total</code>
          </div>
        </div>
        <div className="ln-stack">
          <div className="ln-stack-item">
            <h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z" />
              </svg>
              Rust core
            </h3>
            <p>Search, indexing, hotkey, tray, updates.</p>
          </div>
          <div className="ln-stack-item">
            <h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V88H40V56Zm0,144H40V104H216v96Z" />
              </svg>
              tao + wry
            </h3>
            <p>A real Win32 window hosting a WebView2 surface.</p>
          </div>
          <div className="ln-stack-item">
            <h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M230.91,172A8,8,0,0,1,228,182.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,169.09l92,53.65,92-53.65A8,8,0,0,1,230.91,172ZM220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26Z" />
              </svg>
              DirectComposition glass
            </h3>
            <p>The desktop behind the panel bends into the rim.</p>
          </div>
          <div className="ln-stack-item">
            <h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
              </svg>
              Tantivy
            </h3>
            <p>Full text index with typo tolerance and ranking.</p>
          </div>
          <div className="ln-stack-item">
            <h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z" />
              </svg>
              Everything SDK
            </h3>
            <p>Optional file index from Voidtools, when running.</p>
          </div>
          <div className="ln-stack-item">
            <h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z" />
              </svg>
              SQLite, WAL mode
            </h3>
            <p>History, bookmarks, and settings that survive a crash.</p>
          </div>
        </div>
        <p className="ln-footnote">
          The real panel carries <code>WDA_EXCLUDEFROMCAPTURE</code>, the OS flag honored by
          screenshots, OBS, and Discord, so the material never appears in a capture. The
          previews on this page are rebuilt in the browser. The native tint also follows the
          backdrop, switching at 0.55 luma; these previews stay on the dark tint.
        </p>
      </div>
    </section>
  );
}
