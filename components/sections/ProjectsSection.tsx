"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { MotionReveal } from "@/components/motion/motion-reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/data/projects";
import type { Project } from "@/lib/types/project";
import { Badge } from "@/components/ui/badge";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-70 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
    >
      <button
        type="button"
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        aria-label="Close modal"
        onClick={onClose}
      />

      <div className="modal-scrollbar relative z-10 max-h-[88vh] w-full max-w-6xl overflow-auto rounded-2xl border border-border/80 bg-card/95 p-4 shadow-[0_0_50px_rgba(57,255,136,0.2)] sm:p-6 lg:p-8">
        <div className="flex items-start justify-between gap-4 border-b border-border/70 pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Project Case Study
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
              {project.title}
            </h3>
          </div>
          <Button
            type="button"
            variant="secondary"
            onClick={onClose}
            className="cursor-pointer"
          >
            Close
          </Button>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.8fr_0.8fr] lg:items-start">
          <article className="space-y-6">
            <section className="space-y-3">
              <h4 className="text-lg font-semibold text-foreground">
                About the Project
              </h4>
              <p className="text-sm leading-7 text-muted-foreground">
                {project.caseStudy.overview}
              </p>
            </section>

            <section className="space-y-3">
              <h4 className="text-lg font-semibold text-foreground">
                Challenge
              </h4>
              <p className="text-sm leading-7 text-muted-foreground">
                {project.caseStudy.challenge}
              </p>
            </section>

            <section className="space-y-3">
              <h4 className="text-lg font-semibold text-foreground">
                Approach
              </h4>
              <p className="text-sm leading-7 text-muted-foreground">
                {project.caseStudy.solution}
              </p>
            </section>

            <section className="space-y-3">
              <h4 className="text-lg font-semibold text-foreground">Outcome</h4>
              <p className="text-sm leading-7 text-muted-foreground">
                {project.caseStudy.outcome}
              </p>
            </section>

            <section className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                Interface Mockups
              </h4>
              <div className="grid gap-4">
                <div className="space-y-2 overflow-hidden p-2">
                  <div className="aspect-16/10 overflow-y-auto rounded-lg">
                    <div className="relative w-full">
                      <Image
                        src={project.mockups.desktop}
                        alt={`${project.title} desktop mockup`}
                        width={1600}
                        height={3200}
                        sizes="(max-width: 640px) 100vw, 66vw"
                        className="h-auto w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </article>

          <aside className="rounded-xl border border-border/70 bg-background/30 p-4 sm:p-5">
            <h4 className="text-base font-semibold text-foreground">
              Project Details
            </h4>

            <div className="mt-4 space-y-4 text-sm">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Project Link
                </p>
                {project.projectUrl ? (
                  <Link
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-primary transition-colors hover:text-primary/80"
                  >
                    Visit live project
                  </Link>
                ) : (
                  <p className="mt-1 text-muted-foreground">Launching soon</p>
                )}
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Completed
                </p>
                <p className="mt-1 text-foreground">{project.completed}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Delivery Role
                </p>
                <p className="mt-1 text-foreground">{project.role}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Tech Stack
                </p>
                <ul className="mt-2 space-y-2">
                  {project.stack.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li
                        key={item.label}
                        className="flex items-center gap-2 text-foreground"
                      >
                        <Icon className="h-4 w-4 text-primary" />
                        {item.label}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const PROJECTS_PER_BATCH = 3;
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_BATCH);
  const visibleProjects = projects.slice(0, visibleCount);
  const hiddenProjectsCount = Math.max(projects.length - visibleCount, 0);

  return (
    <>
      <div className="space-y-6">
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <MotionReveal key={project.title} delay={index * 0.05}>
              <Card className="flex h-full flex-col transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_35px_rgba(57,255,136,0.22)]">
                <CardHeader>
                  <div className="mb-0 flex justify-between">
                    <CardTitle className="text-lg leading-7">
                      {project.title}
                    </CardTitle>
                    <Badge>{project.badge}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {project.shortDescription}
                  </p>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="text-sm text-muted-foreground">
                    {project.longDescription}
                  </p>
                  <MotionReveal className="mt-auto flex flex-wrap gap-2.5 pt-6">
                    {project.badge === "Live" ? (
                      <Button
                        type="button"
                        variant="secondary"
                        onClick={() => setActiveProject(project)}
                        className="cursor-pointer"
                      >
                        View Project
                      </Button>
                    ) : (
                      <Button type="button" variant="secondary" disabled>
                        Coming Soon
                      </Button>
                    )}
                  </MotionReveal>
                </CardContent>
              </Card>
            </MotionReveal>
          ))}
        </div>
        {hiddenProjectsCount > 0 ? (
          <div className="flex justify-center">
            <MotionReveal className="mt-8">
              <Button
                type="button"
                variant="secondary"
                className="cursor-pointer"
                onClick={() =>
                  setVisibleCount((count) =>
                    Math.min(count + PROJECTS_PER_BATCH, projects.length),
                  )
                }
              >
                View More +{hiddenProjectsCount}
              </Button>
            </MotionReveal>
          </div>
        ) : null}
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
}
