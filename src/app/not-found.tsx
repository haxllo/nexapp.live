import { Button, Kbd, TextLink } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="shell flex min-h-[64vh] flex-col justify-center py-24">
      <div className="mono text-[11px] tracking-[0.08em] text-faint">404</div>
      <h1 className="mt-4 max-w-[18ch] text-[34px] leading-[1.05] tracking-[-0.035em] text-paper sm:text-[44px]">
        Nothing indexed at this address.
      </h1>
      <p className="mt-4 max-w-[46ch] text-[14.5px] leading-[1.65] text-muted">
        The page moved, or it was never here. The docs and the changelog are a better
        place to look than the address bar.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
        <Button href="/">Back to home</Button>
        <TextLink href="/docs">Read the docs</TextLink>
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
