import { ArrowRight } from "@phosphor-icons/react/ssr";
import { DemoShowcase } from "@/components/demo-showcase";
import { Button, QuietLink } from "@/components/ui";
import { GITHUB_LATEST, LATEST } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="hero-section" data-testid="hero-section">
      <div className="shell hero-intro">
        <div className="hero-heading">
          <a className="release-link" data-testid="hero-release-pill" href="/changelog">
            <span className="status-dot" />
            Nex v{LATEST.version}
            <span className="release-link-divider" />
            {LATEST.headline}
            <ArrowRight size={12} aria-hidden />
          </a>
          <h1 data-testid="hero-title">
            Your whole PC.
            <br />
            <em>One key away.</em>
          </h1>
        </div>

        <div className="hero-description">
          <p>
            A glass panel that floats over your desktop. Type to open apps, find files,
            run commands, do math, or ask a question. Built in Rust, light as a wing.
          </p>
          <div className="hero-actions">
            <Button
              href={GITHUB_LATEST}
              external
              withWindows
              testId="hero-cta-button"
            >
              Download for Windows
            </Button>
            <QuietLink href="/docs" testId="hero-docs-button">
              Read the docs
            </QuietLink>
          </div>
          <p className="hero-platform" data-testid="hero-platform">
            Windows 10 / 11 · x64
            <span />
            Free &amp; open source
          </p>
        </div>
      </div>

      <DemoShowcase />

      <div className="hero-footnote shell" data-testid="hero-product-facts">
        <span>A little glass. A lot of possibility.</span>
        <div>
          <span>Keyboard first</span>
          <i />
          <span>Built in Rust</span>
          <i />
          <span>Yours to make your own</span>
        </div>
      </div>
    </section>
  );
}
