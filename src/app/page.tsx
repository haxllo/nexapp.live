import { Hero } from "@/components/hero";
import { Principles } from "@/components/principles";
import { Capabilities } from "@/components/capabilities";
import { ChatStory } from "@/components/chat";
import { MediaStory } from "@/components/media";
import { Syntax } from "@/components/syntax";
import { Engineering } from "@/components/engineering";
import { ConfigurationSection } from "@/components/configuration-section";
import { Releases } from "@/components/releases";
import { FinalCta } from "@/components/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Principles />
      <Capabilities />
      <Syntax />
      <ChatStory />
      <MediaStory />
      <Engineering />
      <ConfigurationSection />
      <Releases />
      <FinalCta />
    </>
  );
}
