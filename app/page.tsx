import { Container } from "@/components/Container";
import { CredentialStrip } from "@/components/CredentialStrip";
import { ExperienceGrid } from "@/components/ExperienceGrid";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HighlightsTimeline } from "@/components/HighlightsTimeline";
import { LookingFor } from "@/components/LookingFor";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { Philosophy } from "@/components/Philosophy";
import { ProjectsFeature } from "@/components/ProjectsFeature";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[color:var(--bg)] text-[color:var(--text)]">
      <NoiseOverlay />
      <div aria-hidden className="space-bg fixed inset-0 -z-20" />

      <main>
        <Hero />
        <CredentialStrip />

        <Container>
          <Section
            title="Building robust systems across enterprise and modern stacks."
            showHeadingGlow
          >
            <Card>
              <CardContent className="p-6 sm:p-8">
                <p className="whitespace-pre-line leading-8 text-[color:var(--muted)]">
                  I’m a full-stack developer experienced in delivering large-scale enterprise web platforms as well
                  as independently shipping modern, database-driven products.
                  {"\n"}
                  In my current role, I work within a C# ASP.NET MVC architecture using Razor Views, React, Sass,
                  Sitecore CMS, and Solr. My work spans feature development, UI implementation, performance
                  optimisation, API integrations, and cross-team collaboration.
                  {"\n"}
                  Alongside this, I design and deploy independent full-stack applications using Next.js, TypeScript,
                  and PostgreSQL-based backends. This dual experience allows me to bridge structured enterprise
                  systems with modern product-focused engineering.
                </p>
              </CardContent>
            </Card>
          </Section>

          <Section id="experience" title="Enterprise Experience" showHeadingGlow>
            <ExperienceGrid />
          </Section>

          <Section id="projects" title="Selected Projects" showHeadingGlow>
            <ProjectsFeature />
          </Section>

          <Section title="Work Highlights">
            <HighlightsTimeline />
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
                <p className="text-[color:var(--muted)]">
                  If you’re hiring or would like to discuss opportunities, feel free to reach out.
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
      </main>

      <Footer />
    </div>
  );
}
