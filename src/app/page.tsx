import { Hero } from "@/components/hero";
import { LogoStrip } from "@/components/logo-strip";
import { FeaturesThreeCards } from "@/components/features-three-cards";
import { IntakeSection } from "@/components/intake-section";
import { PlanningSection } from "@/components/planning-section";
import { AiSection } from "@/components/ai-section";
import { BuildSection } from "@/components/build-section";
import { ChangelogSection } from "@/components/changelog-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { FinalCta } from "@/components/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <FeaturesThreeCards />
      <IntakeSection />
      <PlanningSection />
      <AiSection />
      <BuildSection />
      <ChangelogSection />
      <TestimonialSection />
      <FinalCta />
    </>
  );
}
