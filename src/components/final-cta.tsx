import Image from "next/image";
import { Button, TextLink } from "@/components/ui";
import { GITHUB_LATEST, GITHUB_REPO, LATEST } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="final-cta-section" data-testid="final-cta">
      <div className="shell final-cta-content">
        <Image src="/nex-logo.png" alt="Nex" width={56} height={56} />
        <h2>Press Win. That is the whole onboarding.</h2>
        <p className="cta-statement">
          A little more <em>flow.</em>
        </p>
        <div className="final-cta-actions">
          <Button href={GITHUB_LATEST} external size="lg" withWindows testId="final-cta-download">
            Download for Windows
          </Button>
          <TextLink href={GITHUB_REPO} external testId="final-cta-source">
            Source
          </TextLink>
        </div>
        <p className="final-cta-meta" data-testid="final-cta-release">
          v{LATEST.version} · Windows 10 / 11 · MIT
        </p>
        <p className="mt-3 text-[10px] text-[#c5d8cd]">
          Win — default hotkey, changeable in config
        </p>
      </div>
    </section>
  );
}
