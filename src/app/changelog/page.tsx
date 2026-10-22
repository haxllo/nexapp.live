import type { Metadata } from "next";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { Button, PageHead, TextLink } from "@/components/ui";
import { changelogDetailed, changelogEarlier } from "@/lib/changelog";
import { GITHUB_RELEASES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "Release notes for Nex, newest first, fetched from GitHub so the list always matches what shipped.",
};

export default function ChangelogPage() {
  const latest = changelogDetailed[0];

  return (
    <div className="shell pt-10 pb-20 md:pb-28" data-testid="changelog-container">
      <PageHead
        eyebrow="Changelog"
        title="Changelog"
        lede="Nex ships small releases, usually more than one a week. These are the ones that changed how the panel feels."
      >
        <div className="page-head-actions">
          <div className="flex flex-wrap items-center gap-4">
            <Button
              href={latest.url}
              external
              testId="changelog-download-latest"
            >
              Download v{latest.version}
            </Button>
            <a
              href={GITHUB_RELEASES}
              data-testid="changelog-all-releases"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-paper"
            >
              Every release on GitHub
              <ArrowUpRight size={13} aria-hidden />
            </a>
          </div>
        </div>
      </PageHead>

      <div className="changelog-timeline" data-testid="changelog-version-list">
        {changelogDetailed.map((release) => (
          <article
            key={release.version}
            className="changelog-entry"
            data-testid={`changelog-version-${release.version.replace(/\./g, "-")}`}
          >
            <header className="md:sticky md:top-24 md:self-start">
              <h2 className="mono text-[13px] text-paper">v{release.version}</h2>
              <div className="mono mt-1 text-[10.5px] text-faint">{release.date}</div>
            </header>
            <div>
              <h3 className="text-[16px] leading-snug tracking-[-0.01em] text-paper">
                {release.title}
              </h3>
              {release.summary && (
                <p className="mt-2.5 max-w-[64ch] text-[13.5px] leading-[1.7] text-muted">
                  {release.summary}
                </p>
              )}
              {release.points.length > 0 ? (
                <ul className="mt-4 max-w-[64ch] space-y-2">
                  {release.points.map((point) => (
                    <li
                      key={point}
                      className="relative pl-4 text-[13px] leading-[1.65] text-muted"
                    >
                      <span
                        aria-hidden
                        className="absolute left-0 top-[0.72em] h-px w-2 bg-white/25"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="mt-3">
                  <TextLink
                    href={release.url}
                    external
                    testId={`changelog-notes-${release.version.replace(/\./g, "-")}`}
                  >
                    Release notes
                  </TextLink>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {changelogEarlier.length > 0 && (
        <section className="mt-12">
          <h2 className="text-[13px] font-medium text-paper">Earlier releases</h2>
          <p className="mt-1.5 text-[12.5px] text-faint">
            Version and date. Release notes for each are on GitHub.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-x-8 sm:grid-cols-3 lg:grid-cols-4">
            {changelogEarlier.map((release) => (
              <a
                key={release.version}
                href={release.url}
                data-testid={`changelog-earlier-${release.version.replace(/\./g, "-")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-baseline justify-between border-b border-line/60 py-1.5 transition-colors hover:text-paper"
              >
                <span className="mono text-[10.5px] text-muted">v{release.version}</span>
                <span className="mono text-[10px] text-faint">{release.date}</span>
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
