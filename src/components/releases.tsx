import Link from "next/link";
import { homeReleases } from "@/lib/releases";

export function Releases() {
  return (
    <section className="ln-section" id="releases" data-testid="releases-section">
      <div className="ln-shell">
        <Link className="ln-section-label" href="/changelog">
          <span className="ln-dot" style={{ background: "var(--ln-accent-tint)" }} />
          <span className="ln-num">7.0</span>
          Changelog
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
          <h2 className="ln-h2">Shipped most weeks.</h2>
          <div>
            <p className="ln-lede">
              <strong>Small releases, written down.</strong> Fetched from GitHub, so this
              list is never stale.
            </p>
            <div className="ln-links">
              <Link
                className="ln-btn ln-btn-secondary ln-btn-sm"
                data-testid="releases-full-changelog"
                href="/changelog"
              >
                Full changelog{" "}
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
        <div className="ln-releases">
          {homeReleases.map((release) => (
            <a
              href={release.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ln-release"
              data-testid={`release-link-${release.version.replace(/\./g, "-")}`}
              key={release.version}
            >
              <div className="ln-release-meta">
                <b>
                  <i /> v{release.version}
                </b>
                <span>{release.date}</span>
              </div>
              <div>
                <h3>{release.title}</h3>
                <p>{release.summary}</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="ln-release-arrow"
              >
                <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
