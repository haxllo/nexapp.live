import type { Metadata } from "next";
import { ArrowUpRight } from "@/components/icons";
import { Button, PageHead, TextLink } from "@/components/ui";
import { GITHUB_RELEASES } from "@/lib/constants";
import { getReleases } from "@/lib/releases";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "Release notes for Nex, newest first, fetched from GitHub so the list always matches what shipped.",
};

// Editorial detail for releases worth explaining. Keyed by version only, so a
// new release still shows up on its own: it renders its title and first
// paragraph from the release notes. Add an entry here when there is more to say.
const featured: Record<string, { summary: string; points: string[] }> = {
  "2.28.0": {
    summary:
      "The panel is no longer a page painted over a blur. It is drawn as a pane of glass: the desktop behind it bends into the rim, the edge picks up light, and the whole thing sits above a soft contact shadow.",
    points: [
      "The backdrop bends into the edges instead of only softening, and color splits slightly at the very edge.",
      "Edge light sits on all four sides at rest. It leans toward the pointer only while the pointer is over the panel.",
      "The silhouette lives in the surface, so corners stay anti-aliased and no longer overflow at 125% scaling.",
      "The reveal waits for a frame at the size the panel actually has, so it never shows the previous session's rows.",
      "Dividers and the scrollbar reach the right edge again, after the invisible resize frame was clipping them.",
      "Attached-file and PC chips use the same 1px edge, 6px radius, and row inset as the rest of the panel.",
    ],
  },
  "2.27.1": {
    summary:
      "A short polish pass on the glass: opening over playing video no longer holds a frozen picture, and the surface reads cleaner over bright wallpapers.",
    points: [
      "A show pulls the newest desktop frame before revealing, instead of the poll's copy from up to a quarter second earlier.",
      "Lighter wash and quieter grain, so the panel reads as clean glass rather than a milky layer.",
      "The soft shadow under text is kept on dark backdrops and removed on light ones.",
    ],
  },
  "2.27.0": {
    summary:
      "The first release of the native glass material. The search surface stopped imitating a blurred panel and started sampling the desktop behind it, with an opaque fallback for machines where the GPU path cannot start.",
    points: [
      "The panel captures what is behind it and refracts that content at the rim.",
      "When transparency is off, or the renderer fails, the panel falls back to an opaque surface instead of a blank window.",
      "Panel corner radius and row radius share the same 8px geometry.",
    ],
  },
  "2.26.1": {
    summary:
      "The chat surface became usable with a keyboard: hover-revealed actions, a boxed composer, and a model picker rebuilt as a real dropdown.",
    points: [
      "Every dropdown shares one surface, hover fill, and left accent selection.",
      "Custom model IDs enter through a Use-query option instead of a raw input.",
      "Context chips match the panel's edge and radius.",
    ],
  },
  "2.26.0": {
    summary:
      "A release about sharp text and reliable activation. ClearType returns where it can, the helper owns activation, and the pieces behind the hotkey stop fighting the system.",
    points: [
      "ClearType in search, rows, hover, media, chat, and menus. Transparent glass still renders grayscale by design.",
      "A single activation path through the helper, with demotion to the keyboard hook and a foreground stack for restore.",
      "Icons that expose a tiny frame on a big canvas fall through to the dense icon instead of serving a blurry one.",
      "Outside clicks dismiss immediately, including with the file picker open.",
    ],
  },
  "2.25.3": {
    summary:
      "Opaque black and white modes start on an opaque surface, glass resizes without flashing, and the update pill stops nagging.",
    points: [
      "Black and white modes create the WebView on an opaque surface and seed it before the environment exists.",
      "The glass layer stays parked on resizes instead of resurrecting behind opaque panels.",
      "A clean update check is fully silent now; update and retry pills appear only when they matter.",
    ],
  },
};

/** Releases shown with their notes; the rest go in the compact index. */
const DETAILED = 10;

export default async function ChangelogPage() {
  const releases = await getReleases();
  const latest = releases[0];
  const detailed = releases.slice(0, DETAILED);
  const earlier = releases.slice(DETAILED);

  return (
    <div className="shell pt-14 pb-20 md:pt-20 md:pb-28">
      <PageHead
        title="Changelog"
        lede="Nex ships small releases, usually more than one a week. These are the ones that changed how the panel feels."
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button href={latest.url} external>
            Download v{latest.version}
          </Button>
          <a
            href={GITHUB_RELEASES}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-paper"
          >
            Every release on GitHub
            <ArrowUpRight size={13} aria-hidden />
          </a>
        </div>
      </PageHead>

      <div className="mt-12 border-t border-line">
        {detailed.map((release) => {
          const notes = featured[release.version];
          return (
            <article
              key={release.version}
              className="grid gap-4 border-b border-line py-8 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-10"
            >
              <header className="md:sticky md:top-24 md:self-start">
                <h2 className="mono text-[13px] text-paper">v{release.version}</h2>
                <div className="mono mt-1 text-[10.5px] text-faint">{release.date}</div>
              </header>
              <div>
                <h3 className="text-[16px] leading-snug tracking-[-0.01em] text-paper">
                  {release.title}
                </h3>
                {notes ? (
                  <>
                    <p className="mt-2.5 max-w-[64ch] text-[13.5px] leading-[1.7] text-muted">
                      {notes.summary}
                    </p>
                    <ul className="mt-4 max-w-[64ch] space-y-2">
                      {notes.points.map((point) => (
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
                  </>
                ) : (
                  <>
                    <p className="mt-2.5 max-w-[64ch] text-[13.5px] leading-[1.7] text-muted">
                      {release.excerpt}
                    </p>
                    <div className="mt-3">
                      <TextLink href={release.url} external>
                        Release notes
                      </TextLink>
                    </div>
                  </>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {earlier.length > 0 && (
        <section className="mt-12">
          <h2 className="text-[13px] font-medium text-paper">Earlier releases</h2>
          <p className="mt-1.5 text-[12.5px] text-faint">
            Version and date. Release notes for each are on GitHub.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-x-8 sm:grid-cols-3 lg:grid-cols-4">
            {earlier.map((release) => (
              <a
                key={release.version}
                href={release.url}
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
