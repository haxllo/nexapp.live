import Image from "next/image";
import { Button, Kbd, TextLink } from "@/components/ui";

export default function NotFound() {
  return (
    <div
      className="shell relative flex min-h-[70vh] flex-col justify-center py-24"
      data-testid="not-found-page"
    >
      <div className="relative mb-10 h-16 w-16">
        <span className="relative inline-flex h-16 w-16 overflow-hidden rounded-[16px] ring-1 ring-white/10">
          <Image
            src="/nex-logo.png"
            alt="Nex"
            width={160}
            height={160}
            className="h-full w-full object-cover"
          />
        </span>
      </div>
      <div className="eyebrow">Error 404</div>
      <h1 className="serif mt-5 max-w-[16ch] text-[40px] leading-[1.02] text-paper sm:text-[60px]">
        Nothing indexed at this <em className="italic text-signal">address.</em>
      </h1>
      <p className="mt-5 max-w-[46ch] text-[15px] leading-[1.65] text-muted">
        The page flew off, or it was never here. The docs and the changelog are a better
        place to look than the address bar.
      </p>
      <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
        <Button href="/" testId="not-found-home">
          Back to home
        </Button>
        <TextLink href="/docs" testId="not-found-docs">
          Read the docs
        </TextLink>
      </div>
      <div className="mt-12 flex items-center gap-2">
        <Kbd wide>Win</Kbd>
        <span className="mono text-[10.5px] text-faint">
          still the fastest way back to anything else
        </span>
      </div>
    </div>
  );
}
