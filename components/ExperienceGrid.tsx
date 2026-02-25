"use client";

import { ChevronDown } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

type ExperienceCard = {
  title: string;
  contextTag: string;
  optionalTag?: string;
  summary: string;
  bullets: string[];
  details: string;
  href: string;
};

const cards: ExperienceCard[] = [
  {
    title: "Full Website Rebrand",
    contextTag: "Enterprise CMS",
    optionalTag: "Design agency collaboration",
    summary:
      "Led front-end delivery for a complete institutional website rebrand across templates and content journeys.",
    bullets: [
      "Implemented a new design system across CMS templates",
      "Built modular Razor and React components",
      "Delivered responsive, accessible UI patterns",
      "Aligned legacy modules with updated interaction patterns",
      "Standardised Sass architecture for maintainability",
    ],
    details:
      "This project required cross-team coordination between design, content, and engineering while ensuring scalable implementation inside a structured enterprise CMS architecture.",
    href: "https://wwww.leedsbeckett.ac.uk/",
  },
  {
    title: "UCAS Tariff Calculator",
    contextTag: "API Integration",
    optionalTag: "Performance redesign",
    summary:
      "Led implementation of a faster, modern tariff experience integrated directly into the institution website.",
    bullets: [
      "Integrated UCAS API for live qualification data",
      "Built real-time scoring logic for tariff calculations",
      "Created a modern React Select experience",
      "Reduced interaction friction versus the standard calculator",
      "Improved responsiveness across desktop and mobile",
    ],
    details:
      "This project required resilient API integration, careful validation logic, and performance-first UI decisions to keep the experience fast and reliable under frequent use.",
    href: "https://www.leedsbeckett.ac.uk/clearing/ucas-points-calculator",
  },
  {
    title: "Safe Quick Exit",
    contextTag: "Safeguarding",
    optionalTag: "Privacy-first feature",
    summary:
      "Delivered a discreet safeguard feature for sensitive pages to help users exit quickly and safely.",
    bullets: [
      "Implemented immediate neutral redirect behavior",
      "Reduced local traces where browser behavior allowed",
      "Triggered safe fallback navigation patterns",
      "Tested behavior across major browser environments",
      "Worked with safeguarding stakeholders on rollout",
    ],
    details:
      "This project required careful interpretation of browser constraints, user safety priorities, and responsible implementation practices for sensitive safeguarding scenarios.",
    href: "https://www.leedsbeckett.ac.uk/our-community/support-report-respect/",
  },
  {
    title: "Mobile App Collaboration",
    contextTag: "Product Delivery",
    optionalTag: "Cross-team planning",
    summary:
      "Contributed to mobile app roadmap delivery through planning input and implementation support.",
    bullets: [
      "Worked with App Account Manager on feature planning",
      "Scoped practical improvements for release cycles",
      "Maintained and evolved production app features",
      "Supported QA feedback loops and iteration",
      "Reviewed opportunities for engagement improvements",
    ],
    details:
      "This project required close stakeholder collaboration, prioritisation tradeoffs, and consistent execution to maintain momentum while improving product quality.",
    href: "",
  },
  {
    title: "3D Virtual Campus",
    contextTag: "Immersive Experience",
    optionalTag: "Blender + 3DVista",
    summary:
      "Co-developed an interactive virtual campus experience to support digital exploration and engagement.",
    bullets: [
      "Modelled key scenes and assets in Blender",
      "Integrated assets into 3DVista deployment flows",
      "Structured navigable campus walkthrough interactions",
      "Optimised scene composition for smooth playback",
      "Collaborated on storytelling and user journey flow",
    ],
    details:
      "This project required adapting web product thinking to immersive media constraints while keeping navigation intuitive and the experience performant across target devices.",
    href: "https://www.leedsbeckett.ac.uk/explore",
  },
];

export function ExperienceGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {cards.map((card) => {
        const previewBullets = card.bullets.slice(0, 3);
        const remainingBullets = card.bullets.slice(3);

        return (
          <div key={card.title} className="min-w-0">
            <Card className="h-full min-w-0 transition-all duration-200 hover:border-primary/40 hover:shadow-[0_0_26px_rgba(57,255,136,0.35)]">
              <CardHeader className="space-y-3">
                <CardTitle className="text-lg text-foreground">
                  {card.title}
                </CardTitle>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="default"
                    className="max-w-full whitespace-normal wrap-break-word"
                  >
                    {card.contextTag}
                  </Badge>
                  {card.optionalTag ? (
                    <Badge
                      variant="secondary"
                      className="max-w-full whitespace-normal wrap-break-word"
                    >
                      {card.optionalTag}
                    </Badge>
                  ) : null}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm leading-7 text-foreground">
                  {card.summary}
                </p>

                <ul className="space-y-2 text-sm text-muted-foreground">
                  {previewBullets.map((bullet) => (
                    <li key={bullet} className="flex min-w-0 items-start gap-2">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 rounded-full bg-primary"
                      />
                      <span className="min-w-0 wrap-break-word">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <details className="group rounded-lg border border-border/80 bg-background/30 px-3 py-2 open:bg-background/50">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-medium text-foreground marker:content-none">
                    View more details
                    <ChevronDown
                      aria-hidden
                      className="h-4 w-4 text-primary transition-transform duration-200 group-open:rotate-180"
                    />
                  </summary>

                  <div className="mt-3 space-y-3">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {remainingBullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex min-w-0 items-start gap-2"
                        >
                          <span
                            aria-hidden
                            className="mt-2 h-1.5 w-1.5 rounded-full bg-primary"
                          />
                          <span className="min-w-0 wrap-break-word">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {card.details}
                    </p>
                    {card.href && (
                      <div className="flex justify-center my-3">
                        <Button>
                          <Link href={card.href} target="_blank">
                            View Here
                          </Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </details>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
