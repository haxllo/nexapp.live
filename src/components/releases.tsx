import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { Eyebrow, TextLink } from "@/components/ui";
import { homeReleases } from "@/lib/releases";

export function Releases() {
  return (
    <section id="releases" className="scroll-mt-20 border-t border-line">
      <div className="shell py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-[46rem]">
            <div className="mb-5">
              <Eyebrow rule>Releases</Eyebrow>
            </div>
            <h2 className="text-base leading-snug text-paper md:text-lg">
              Shipped most weeks.
            </h2>
            <p className="mt-5 max-w-[54ch] text-sm leading-[1.85] text-muted">
              Small releases, written down. Fetched from GitHub, so this list is never
              stale.
            </p>
          </div>
          <div className="pb-1">
            <TextLink href="/changelog" testId="releases-full-changelog">
              Full changelog
            </TextLink>
          </div>
        </div>

        <div className="releases-grid">
          {homeReleases.map((release) => (
            <a
              key={release.version}
              data-testid={`release-link-${release.version.replace(/\./g, "-")}`}
              href={release.url}
              target="_blank"
              rel="noopener noreferrer"
              className="release-item"
            >
              <div className="release-item-meta">
                <span className="mono text-[12px] text-paper">v{release.version}</span>
                <span className="mono text-[9px] text-faint">{release.date}</span>
              </div>
              <div>
                <h3>{release.title}</h3>
                <p className="mt-1 max-w-[62ch] text-[13px] leading-[1.6] text-muted">
                  {release.summary}
                </p>
              </div>
              <ArrowUpRight
                size={15}
                aria-hidden
                className="hidden text-faint transition-colors duration-200 group-hover:text-paper md:block"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
