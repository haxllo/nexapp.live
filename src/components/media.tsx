import Image from "next/image";
import { ModeLink } from "@/components/mode-link";
import { TextLink } from "@/components/ui";

const bars = [6, 12, 20, 12, 28, 17, 9, 25, 32, 14, 22, 10, 28, 16, 7, 15, 24, 12, 30, 18, 9, 22, 15, 6];

export function MediaStory() {
  return (
    <section id="media" className="story-section media-story" data-testid="media-section">
      <div className="shell story-layout">
        <div className="media-story-art" aria-hidden>
          <Image src="/album.jpg" alt="" width={150} height={150} />
          <div>
            <span className="mono">A MOMENT IN YOUR FLOW</span>
            <strong>Low Orbit</strong>
            <p>Sable · Nightfall EP</p>
            <div className="media-waveform">
              {bars.map((height, index) => (
                <i key={index} style={{ height }} />
              ))}
            </div>
          </div>
        </div>

        <div className="story-content">
          <span className="eyebrow">04 / WITHOUT MISSING A BEAT</span>
          <h2>The track, without alt-tabbing.</h2>
          <p>
            Play, pause, skip, and set the volume from the panel. The same glass, a
            smaller surface, and no media window to hunt for.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-6">
            <ModeLink mode="media" testId="explore-media-demo">
              Explore media
            </ModeLink>
            <TextLink href="/features" testId="media-feature-list">
              Media and power actions
            </TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
