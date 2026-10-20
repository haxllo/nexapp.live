import Link from "next/link";
import { LauncherDemo } from "@/components/launcher-demo";
import { Reveal } from "@/components/reveal";
import { Button, Kbd, TextLink } from "@/components/ui";
import { GITHUB_LATEST, RELEASE } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="top"
      className="relative scroll-mt-20 overflow-hidden bg-[linear-gradient(180deg,#0c0e12_0%,#0a0b0d_52%)]"
    >
      <div className="shell pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="min-w-0 lg:col-span-6">
            <Reveal>
              <div className="flex items-center gap-3">
                <Kbd wide>Win</Kbd>
                <span className="mono text-[10.5px] tracking-[0.04em] text-faint">
                  summon from anywhere
                </span>
              </div>

              <h1 className="mt-6 text-[42px] leading-[1.01] tracking-[-0.038em] text-paper sm:text-[52px] lg:text-[58px]">
                Your whole PC,
                <br className="hidden sm:block" /> one key away.
              </h1>

              <p className="mt-5 max-w-[46ch] text-[15.5px] leading-[1.65] text-muted">
                A glass panel over your desktop. Type to open apps, find files, run
                commands, or ask a question.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Button href={GITHUB_LATEST} size="md" withWindowsMark external>
                  Download for Windows
                </Button>
                <TextLink href="/docs">Read the docs</TextLink>
              </div>

              <div className="mono mt-7 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[10.5px] text-faint">
                <Link
                  href="/changelog"
                  className="text-muted transition-colors hover:text-paper"
                >
                  v{RELEASE.version}
                </Link>
                <span aria-hidden className="hidden h-2.5 w-px bg-line-2 sm:block" />
                <span>Windows 10 / 11, x64</span>
                <span aria-hidden className="hidden h-2.5 w-px bg-line-2 sm:block" />
                <span>7.4 MB installer</span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.08}>
              <LauncherDemo />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
