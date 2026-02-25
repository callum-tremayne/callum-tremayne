import { NoiseOverlay } from "@/components/layout/NoiseOverlay";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

import { HeroSection } from "@/components/sections/HeroSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { CurrentlySection } from "@/components/sections/CurrentlySection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-background text-foreground">
      <NoiseOverlay />
      <div
        aria-hidden
        className="space-bg pointer-events-none fixed inset-0 z-0"
      />

      <main className="relative z-10">
        <HeroSection />
        <TechStackSection />

        <Container>
          <Section
            title="Building robust systems across enterprise and modern stacks."
            showHeadingGlow
            split
            id="about"
          >
            <IntroSection />
          </Section>

          <Section
            title="Currently"
            description="Enterprise engineering by day. Modern product development by design."
          >
            <CurrentlySection />
          </Section>

          <Section title="Approach">
            <ApproachSection />
          </Section>

          <Section
            id="experience"
            title="Enterprise Experience Highlights"
            showHeadingGlow
          >
            <ExperienceSection />
          </Section>

          <Section
            id="projects"
            title="Selected Project Highlights"
            showHeadingGlow
          >
            <ProjectsSection />
          </Section>

          <Section title="" showHeadingGlow>
            <AboutSection />
          </Section>

          <Section id="contact" title="Get in touch">
            <ContactSection />
          </Section>
        </Container>
        <Footer />
      </main>
    </div>
  );
}
