"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const projects = [
  {
    title: "Heartfelt Pages",
    description:
      "A full-stack digital platform that dynamically generates personalised webpages for end users.",
    bullets: [
      "PostgreSQL schema design",
      "Dynamic routing with unique identifiers",
      "Secure storage integration",
    ],
    cta: "View Case Study",
    href: "#",
  },
  {
    title: "Project Exit",
    description:
      "High-performance marketing landing page built with modular architecture and conversion-focused structure.",
    bullets: [
      "Reusable component system",
      "Responsive layout patterns",
      "Performance and accessibility optimisation",
    ],
    cta: "View Project",
    href: "#",
  },
  {
    title: "Talent Finder (In Progress)",
    description:
      "A database-driven recruitment system designed around structured candidate data and scalable search architecture.",
    bullets: [
      "Relational schema planning for filtering",
      "Modular search and indexing approach",
      "Extensible API structure",
    ],
    cta: "View Progress",
    href: "#",
  },
];

export function ProjectsFeature() {
  return (
    <div className="space-y-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          whileHover={{ y: -2 }}
        >
          <Card
            className={
              index % 2 === 0
                ? "border-primary/25 bg-[linear-gradient(145deg,rgba(57,255,136,0.08),rgba(17,22,27,0.85))]"
                : "bg-[linear-gradient(145deg,rgba(17,22,27,0.85),rgba(57,255,136,0.05))]"
            }
          >
            <CardContent className="p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-start">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="max-w-2xl text-muted-foreground">{project.description}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {project.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sm:pt-1">
                  <Button asChild variant="secondary">
                    <a href={project.href}>{project.cta}</a>
                  </Button>
                </div>
              </div>
              {index < projects.length - 1 ? <Separator className="mt-7" /> : null}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
