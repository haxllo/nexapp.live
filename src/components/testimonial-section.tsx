export function TestimonialSection() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-bg-card p-8">
            <p className="text-[18px] leading-snug text-text">
              “The first launcher that actually feels like the rest of my
              OS. It just gets out of the way.”
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-border" />
              <div>
                <div className="text-[13px] font-medium text-text">Anonymous</div>
                <div className="text-[12px] text-text-dim">power user</div>
              </div>
            </div>
          </div>

          <div
            className="rounded-lg p-8 flex flex-col justify-between"
            style={{ background: "#d8ff5c", color: "#0a0a0c" }}
          >
            <p className="text-[18px] leading-snug font-medium">
              Try Nex. It&apos;s free. Forever. MIT licensed.
            </p>
            <a
              href="/download"
              className="mt-6 inline-flex w-fit items-center text-[13px] font-medium underline underline-offset-4"
            >
              Download for Windows →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
