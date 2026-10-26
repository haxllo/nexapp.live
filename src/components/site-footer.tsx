import Link from "next/link";
import {
  GITHUB_ISSUES,
  GITHUB_REPO,
  GITHUB_RELEASES,
  LICENSE_URL,
} from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="ln-footer" data-testid="footer-container">
      <div className="ln-shell">
        <div className="ln-footer-grid">
          <div>
            <Link
              className="ln-brand"
              aria-label="Nex home"
              data-testid="footer-logo-link"
              href="/"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/monochrome.png" alt="" />
              Nex
            </Link>
            <p>
              A keyboard-first launcher for Windows. Free, open source, built in
              Rust.
            </p>
          </div>
          <div>
            <h2>Product</h2>
            <ul>
              <li>
                <Link data-testid="footer-link-features" href="/features">
                  Features
                </Link>
              </li>
              <li>
                <Link data-testid="footer-link-download" href="/download">
                  Download
                </Link>
              </li>
              <li>
                <Link data-testid="footer-link-changelog" href="/changelog">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Developers</h2>
            <ul>
              <li>
                <Link data-testid="footer-link-documentation" href="/docs">
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  data-testid="footer-link-configuration"
                  href="/docs/configuration"
                >
                  Configuration
                </Link>
              </li>
              <li>
                <Link data-testid="footer-link-plugin-sdk" href="/plugin-sdk">
                  Plugin SDK
                </Link>
              </li>
              <li>
                <a
                  href={GITHUB_REPO}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-link-github"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Elsewhere</h2>
            <ul>
              <li>
                <a
                  href={GITHUB_RELEASES}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-link-releases"
                >
                  Releases
                </a>
              </li>
              <li>
                <a
                  href={GITHUB_ISSUES}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-link-issues"
                >
                  Issues
                </a>
              </li>
              <li>
                <a
                  href={LICENSE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-link-mit-license"
                >
                  MIT license
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
