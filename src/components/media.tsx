import { MediaDemo } from "@/components/media-demo";
import { Reveal } from "@/components/reveal";
import { SectionHead, TextLink } from "@/components/ui";

export function Media() {
  return (
    <section id="media" className="scroll-mt-20 border-t border-line">
      <div className="shell py-20 md:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead title="The track, without alt-tabbing.">
              Play, pause, skip, and set the volume from the panel. The same glass, a
              smaller surface, and no media window to hunt for.
            </SectionHead>
            <div className="pb-1">
              <TextLink href="/features">Media and power actions</TextLink>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10">
            <MediaDemo />
          </div>
          <div className="mt-3 flex items-center justify-between gap-4">
            <span className="mono text-[10px] text-faint">Media view, same material</span>
            <span className="mono text-[10px] text-faint">Press play or pause</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
