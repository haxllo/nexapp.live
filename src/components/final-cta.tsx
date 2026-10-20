import { Button, Kbd, TextLink } from "@/components/ui";
import { GITHUB_LATEST, GITHUB_REPO } from "@/lib/constants";
import { getLatestRelease } from "@/lib/releases";

export async function FinalCta() {
  const release = await getLatestRelease();

  return (
    <section className="border-t border-line">
      <div className="shell py-24 md:py-32">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="max-w-[18ch] text-[34px] leading-[1.03] tracking-[-0.035em] text-paper sm:text-[44px] md:text-[52px]">
              Press <span className="whitespace-nowrap">Win.</span> That is the whole
              onboarding.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <Button href={GITHUB_LATEST} withWindowsMark external>
                Download for Windows
              </Button>
              <TextLink href={GITHUB_REPO} external>
                Source
              </TextLink>
            </div>
            <div className="mono mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[10.5px] text-faint">
              <span>v{release.version}</span>
              <span aria-hidden className="hidden h-2.5 w-px bg-line-2 sm:block" />
              <span>Windows 10 / 11</span>
              <span aria-hidden className="hidden h-2.5 w-px bg-line-2 sm:block" />
              <span>MIT</span>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <Kbd wide>Win</Kbd>
              <span className="mono text-[10.5px] text-faint">
                default hotkey, changeable in config
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
