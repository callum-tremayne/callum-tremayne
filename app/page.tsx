import { Container } from "@/components/Container";
import { CredentialStrip } from "@/components/CredentialStrip";
import { Currently } from "@/components/Currently";
import { ExperienceGrid } from "@/components/ExperienceGrid";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HighlightsTimeline } from "@/components/HighlightsTimeline";
import { IntroSection } from "@/components/IntroSection";
import { LookingFor } from "@/components/LookingFor";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { Philosophy } from "@/components/Philosophy";
import { ProjectsFeature } from "@/components/ProjectsFeature";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-background text-foreground">
      <NoiseOverlay />
      <div
        aria-hidden
        className="space-bg pointer-events-none fixed inset-0 z-0"
      />

      <main className="relative z-10">
        <Hero />
        <CredentialStrip />

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
            <Currently />
          </Section>

          <Section title="Approach">
            <HighlightsTimeline />
          </Section>

          <Section
            id="experience"
            title="Enterprise Experience Highlights"
            showHeadingGlow
          >
            <ExperienceGrid />
          </Section>

          <Section
            id="projects"
            title="Selected Project Highlights"
            showHeadingGlow
          >
            <ProjectsFeature />
          </Section>

          <Section title="How I work">
            <Philosophy />
          </Section>

          <Section title="What I’m looking for">
            <LookingFor />
          </Section>

          <Section id="contact" title="Get in touch">
            <Card>
              <CardContent className="space-y-5 p-6 sm:p-8">
                <p className="text-muted-foreground">
                  If you’re hiring or would like to discuss opportunities, feel
                  free to reach out.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="secondary" size="sm">
                    <a href="#">Email</a>
                  </Button>
                  <Button asChild variant="secondary" size="sm">
                    <a href="#">LinkedIn</a>
                  </Button>
                  <Button asChild variant="secondary" size="sm">
                    <a href="#">GitHub</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Section>
        </Container>
        <Footer />
      </main>
    </div>
  );
}
