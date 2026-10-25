import type { Metadata } from "next";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { PageIntro } from "@/components/page-intro";
import { TextLink } from "@/components/ui";
import { changelogDetailed, changelogEarlier } from "@/lib/changelog";
import { GITHUB_RELEASES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "Release notes for Nex, newest first, fetched from GitHub so the list always matches what shipped.",
};

type EarlierRelease = (typeof changelogEarlier)[number];

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const versionSlug = (version: string) => version.replace(/\./g, "-");

/**
 * The earlier index is already newest-first, so a single pass keeps the months
 * in order and the versions chronological inside each one.
 */
function groupByMonth(releases: EarlierRelease[]) {
  const groups: { label: string; releases: EarlierRelease[] }[] = [];

  for (const release of releases) {
    const [year, month] = release.date.split("-");
    const monthName = MONTH_NAMES[Number(month) - 1] ?? month;
    const label = `${monthName} ${year}`;
    const current = groups[groups.length - 1];

    if (current && current.label === label) {
      current.releases.push(release);
    } else {
      groups.push({ label, releases: [release] });
    }
  }

  return groups;
}

export default function ChangelogPage() {
  const latest = changelogDetailed[0];
  const earlierGroups = groupByMonth(changelogEarlier);

  return (
    <div data-testid="changelog-container">
      <PageIntro
        label="Changelog"
        title="Changelog"
        lede="Nex ships small releases, usually more than one a week. These are the ones that changed how the panel feels."
      >
        <div className="pg-actions">
          <a
            className="ln-btn ln-btn-primary"
            href={latest.url}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="changelog-download-latest"
          >
            Download v{latest.version}
          </a>
          <a
            className="ln-btn ln-btn-secondary"
            href={GITHUB_RELEASES}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="changelog-all-releases"
          >
            Every release on GitHub
            <ArrowUpRight size={13} aria-hidden />
          </a>
        </div>
      </PageIntro>

      <div className="ln-shell pg-body">
        <div className="pg-log" data-testid="changelog-version-list">
          {changelogDetailed.map((release) => (
            <article
              key={release.version}
              className="pg-log-entry"
              data-testid={`changelog-version-${versionSlug(release.version)}`}
            >
              <div className="pg-log-meta">
                <span className="pg-version">{`v${release.version}`}</span>
                <span className="pg-date">{release.date}</span>
              </div>

              <div>
                <h3>
                  <a
                    href={release.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {release.title}
                  </a>
                </h3>

                {release.summary && <p>{release.summary}</p>}

                {release.points.length > 0 ? (
                  <ul>
                    {release.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <footer>
                    <TextLink
                      href={release.url}
                      external
                      testId={`changelog-notes-${versionSlug(release.version)}`}
                    >
                      Release notes
                    </TextLink>
                  </footer>
                )}
              </div>
            </article>
          ))}
        </div>

        <section className="mt-12">
          <div className="pg-label">
            <h2>Earlier releases</h2>
          </div>
          <p className="text-[12.5px] text-faint">
            Version and date. Release notes for each are on GitHub.
          </p>

          <div className="pg-months mt-5">
            {earlierGroups.map((group) => (
              <div key={group.label} className="pg-month">
                <h4>{group.label}</h4>
                <ul>
                  {group.releases.map((release) => (
                    <li key={release.version}>
                      <a
                        href={release.url}
                        data-testid={`changelog-earlier-${versionSlug(release.version)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {`v${release.version}`}
                        <span>{release.date}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
