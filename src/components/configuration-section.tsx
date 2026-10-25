import Link from "next/link";
import { CodeBlock } from "@/components/code-block";
import type { CodeLine } from "@/components/code-block";

const configLines: CodeLine[] = [
  [{ text: "# %APPDATA%\\Nex\\config.toml", className: "tk-c" }],
  [
    { text: "hotkey", className: "tk-k" },
    { text: " = ", className: "tk-p" },
    { text: '"Win"', className: "tk-s" },
  ],
  [
    { text: "launch_at_startup", className: "tk-k" },
    { text: " = ", className: "tk-p" },
    { text: "true", className: "tk-b" },
  ],
  [
    { text: "max_results", className: "tk-k" },
    { text: " = ", className: "tk-p" },
    { text: "20", className: "tk-b" },
  ],
  [{ text: " " }],
  [
    { text: "panel_background", className: "tk-k" },
    { text: " = ", className: "tk-p" },
    { text: '"glass"', className: "tk-s" },
    { text: "   ", raw: true },
    { text: "# glass | black | white", className: "tk-c" },
  ],
  [
    { text: "grid_view", className: "tk-k" },
    { text: " = ", className: "tk-p" },
    { text: "true", className: "tk-b" },
  ],
  [
    { text: "game_mode_enabled", className: "tk-k" },
    { text: " = ", className: "tk-p" },
    { text: "false", className: "tk-b" },
  ],
  [{ text: " " }],
  [{ text: "[quick_launch]", className: "tk-h" }],
  [
    { text: "enabled", className: "tk-k" },
    { text: " = ", className: "tk-p" },
    { text: "true", className: "tk-b" },
  ],
  [
    { text: "max_items", className: "tk-k" },
    { text: " = ", className: "tk-p" },
    { text: "9", className: "tk-b" },
  ],
  [
    { text: "auto_fill", className: "tk-k" },
    { text: " = ", className: "tk-p" },
    { text: "false", className: "tk-b" },
  ],
  [{ text: " " }],
  [
    { text: "plugins_enabled", className: "tk-k" },
    { text: " = ", className: "tk-p" },
    { text: "true", className: "tk-b" },
  ],
  [
    { text: "plugins_safe_mode", className: "tk-k" },
    { text: " = ", className: "tk-p" },
    { text: "true", className: "tk-b" },
  ],
];

export function ConfigurationSection() {
  return (
    <section className="ln-section" id="config" data-testid="configuration-section">
      <div className="ln-shell">
        <div className="ln-split">
          <div>
            <span className="ln-section-label">
              <span className="ln-dot" style={{ background: "var(--ln-text-3)" }} />
              <span className="ln-num">6.0</span>
              Configuration
            </span>
            <h2 className="ln-h2">It is a text file. Of course it is.</h2>
            <p className="ln-lede">
              <strong>Every setting lives in a TOML file</strong> you can read, diff, and
              keep in your dotfiles. Save it and most changes apply about a second later.
              The hotkey and the index path need a restart.
            </p>
            <div className="ln-links">
              <Link
                className="ln-btn ln-btn-secondary ln-btn-sm"
                data-testid="configuration-reference-link"
                href="/docs/configuration"
              >
                Full configuration reference{" "}
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
          <CodeBlock
            variant="ln"
            title="config.toml"
            lines={configLines}
            testId="config-code-block"
            copyTestId="config-copy-button"
          />
        </div>
      </div>
    </section>
  );
}
