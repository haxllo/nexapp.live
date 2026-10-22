import Image from "next/image";
import { Airplay, File } from "@phosphor-icons/react/ssr";
import { ModeLink } from "@/components/mode-link";
import { TextLink } from "@/components/ui";

const facts = [
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
];

export function ChatStory() {
  return (
    <section id="chat" className="story-section" data-testid="chat-section">
      <div className="shell story-layout">
        <div className="story-content">
          <span className="eyebrow">03 / MAKE SPACE FOR A THOUGHT</span>
          <h2>Ask your PC a question.</h2>
          <p>
            The same panel, a different surface. Bring your own endpoint, attach up to
            three text files, and keep the conversation in a local workspace.
          </p>

          <div className="story-facts">
            {facts.map((fact) => (
              <div key={fact.title}>
                <h3>{fact.title}</h3>
                <p>{fact.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-6">
            <ModeLink mode="chat" testId="explore-chat-demo">
              Explore chat
            </ModeLink>
            <TextLink href="/features" testId="chat-feature-list">
              See the full feature list
            </TextLink>
          </div>
        </div>

        <div
          className="context-art"
          role="img"
          aria-label="Your files and PC context, brought together in Nex"
        >
          <div className="context-line" />
          <span className="context-letter" aria-hidden>
            N
          </span>
          <div className="context-composition">
            <Image
              src="/nex-logo.png"
              alt=""
              width={70}
              height={70}
              className="context-symbol"
            />
            <div className="context-files">
              <div className="context-file">
                <File size={28} />
                <span>notes.md</span>
              </div>
              <div className="context-file">
                <Airplay size={28} />
                <span>This PC</span>
              </div>
            </div>
          </div>
          <span className="context-caption">YOUR CONTEXT. YOUR CONVERSATION.</span>
        </div>
      </div>
    </section>
  );
}
