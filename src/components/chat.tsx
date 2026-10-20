import { ChatDemo } from "@/components/chat-demo";
import { DesktopFrame } from "@/components/glass";
import { Reveal } from "@/components/reveal";
import { SectionHead, TextLink } from "@/components/ui";

export function Chat() {
  return (
    <section id="chat" className="scroll-mt-20 border-t border-line">
      <div className="shell py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-7">
            <Reveal>
              <DesktopFrame
                src="/wallpaper.jpg"
                alt="The Nex desktop wallpaper behind the chat surface"
                sizes="900px"
                height="h-[500px]"
                position="center 45%"
              >
                <ChatDemo />
              </DesktopFrame>
              <div className="mt-3 flex items-center justify-between gap-4">
                <span className="mono text-[10px] text-faint">
                  Chat view, same Liquid Glass
                </span>
                <span className="mono text-[10px] text-faint">Try the composer</span>
              </div>
            </Reveal>
          </div>

          <div className="min-w-0 lg:col-span-5">
            <Reveal delay={0.05}>
              <SectionHead title="Ask your PC a question.">
                The same panel, a different surface. Bring your own endpoint, attach up
                to three text files, and keep the conversation in a local workspace.
              </SectionHead>

              <div className="mt-8 border-t border-line">
                {[
                  {
                    title: "Attach the files",
                    body: "Up to three small text files travel with the message you send. Nothing else is read.",
                  },
                  {
                    title: "Include the machine",
                    body: "Basic Windows facts, on request, toggled from the composer.",
                  },
                  {
                    title: "Keep the keys",
                    body: "Point it at any OpenAI-compatible endpoint. The key is stored with DPAPI on this PC.",
                  },
                ].map((row) => (
                  <div key={row.title} className="border-b border-line py-4">
                    <div className="text-[13.5px] text-paper">{row.title}</div>
                    <p className="mt-1 max-w-[44ch] text-[13px] leading-[1.6] text-muted">
                      {row.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <TextLink href="/features">See the full feature list</TextLink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
