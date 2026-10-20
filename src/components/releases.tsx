import { ArrowUpRight } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHead, TextLink } from "@/components/ui";
import { getReleases } from "@/lib/releases";

export async function Releases() {
  const releases = (await getReleases()).slice(0, 4);

  return (
    <section id="releases" className="scroll-mt-20 border-t border-line">
      <div className="shell py-20 md:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHead title="Shipped most weeks.">
              Small releases, written down. Fetched from GitHub, so this list is never
              stale.
            </SectionHead>
            <div className="pb-1">
              <TextLink href="/changelog">Full changelog</TextLink>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 border-t border-line">
            {releases.map((release) => (
              <a
                key={release.version}
                href={release.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-1.5 border-b border-line py-5 transition-colors duration-200 hover:bg-white/[0.015] md:grid-cols-[9rem_minmax(0,1fr)_auto] md:items-baseline md:gap-8"
              >
                <div className="flex items-baseline gap-2 md:block">
                  <span className="mono text-[12px] text-paper">v{release.version}</span>
                  <span className="mono text-[10.5px] text-faint md:mt-1 md:block">
                    {release.date}
                  </span>
                </div>
                <div>
                  <div className="text-[14px] text-paper">{release.title}</div>
                  <p className="mt-1 max-w-[62ch] text-[13px] leading-[1.6] text-muted">
                    {release.excerpt}
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
        </Reveal>
      </div>
    </section>
  );
}
