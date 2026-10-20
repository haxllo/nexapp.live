import { Hero } from "@/components/hero";
import { Capabilities } from "@/components/capabilities";
import { Syntax } from "@/components/syntax";
import { Chat } from "@/components/chat";
import { Engineering } from "@/components/engineering";
import { Media } from "@/components/media";
import { Configuration } from "@/components/configuration-section";
import { Releases } from "@/components/releases";
import { FinalCta } from "@/components/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Capabilities />
      <Syntax />
      <Chat />
      <Engineering />
      <Media />
      <Configuration />
      <Releases />
      <FinalCta />
    </>
  );
}
