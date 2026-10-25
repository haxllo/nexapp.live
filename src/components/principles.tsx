export function Principles() {
  return (
    <section className="ln-section" data-testid="principles-section">
      <div className="ln-shell">
        <div className="ln-head-row">
          <h2 className="ln-h2 ln-gradient-text" style={{ marginTop: 0 }}>
            Made for the way
            <br />
            you already work.
          </h2>
          <p className="ln-lede">
            <strong>Nex stays out of the way until you need it.</strong>{" "}
            It is quick to open, honest about what it reads, and configured with a text
            file.
          </p>
        </div>
        <div className="ln-principles">
          <article className="ln-card" data-testid="principle-keyboard">
            <div className="ln-card-visual">
              <div className="ln-keys" aria-hidden="true">
                <span className="ln-key">Esc</span>
                <span className="ln-key">1</span>
                <span className="ln-key">2</span>
                <span className="ln-key">3</span>
                <span className="ln-key">Tab</span>
                <span className="ln-key">Q</span>
                <span className="ln-key">W</span>
                <span className="ln-key">E</span>
                <span className="ln-key">Ctrl</span>
                <span className="ln-key is-hot is-wide">Win</span>
                <span className="ln-key">Alt</span>
              </div>
            </div>
            <div className="ln-card-body">
              <h3>Keyboard first</h3>
              <p>
                One press opens the panel, a second closes it. Every action is a few
                letters away, no mouse required.
              </p>
            </div>
          </article>
          <article className="ln-card" data-testid="principle-built">
            <div className="ln-card-visual">
              <div className="ln-meter" aria-hidden="true">
                <div className="ln-meter-row is-nex">
                  <span>Installer</span>
                  <span className="ln-meter-track">
                    <span
                      className="ln-meter-fill"
                      style={{ width: "30%", animationDelay: "0ms", display: "block" }}
                    />
                  </span>
                  <b>7.1 MB</b>
                </div>
                <div className="ln-meter-row is-nex">
                  <span>Memory</span>
                  <span className="ln-meter-track">
                    <span
                      className="ln-meter-fill"
                      style={{ width: "52%", animationDelay: "120ms", display: "block" }}
                    />
                  </span>
                  <b>72 MB</b>
                </div>
                <div className="ln-meter-row is-nex">
                  <span>Index cap</span>
                  <span className="ln-meter-track">
                    <span
                      className="ln-meter-fill"
                      style={{ width: "84%", animationDelay: "240ms", display: "block" }}
                    />
                  </span>
                  <b>120k</b>
                </div>
              </div>
            </div>
            <div className="ln-card-body">
              <h3>Built in Rust</h3>
              <p>
                Search, indexing, hotkey and tray in a native core. A 7 MB installer with a
                72 MB active memory target.
              </p>
            </div>
          </article>
          <article className="ln-card" data-testid="principle-yours">
            <div className="ln-card-visual">
              <div className="ln-toml-mini" aria-hidden="true">
                <div>
                  <span className="k">hotkey</span>
                  {" = "}
                  <span className="s">{'"Win"'}</span>
                </div>
                <div>
                  <span className="k">panel_background</span>
                  {" = "}
                  <span className="s">{'"glass"'}</span>
                </div>
                <div>
                  <span className="k">grid_view</span>
                  {" = "}
                  <span className="b">true</span>
                </div>
                <div>
                  <span className="k">plugins_enabled</span>
                  {" = "}
                  <span className="b">true</span>
                  <span className="ln-caret" />
                </div>
              </div>
            </div>
            <div className="ln-card-body">
              <h3>Yours to make your own</h3>
              <p>
                Every setting is a line in a TOML file. Plugins add commands, and most
                changes apply a second after you save.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
