import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { IconType } from "react-icons";
import {
  SiApachesolr,
  SiDotnet,
  SiGithub,
  SiGitlab,
  SiJenkins,
  SiJira,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSass,
  SiSitecore,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const stackIcons: Record<string, IconType> = {
  "C#": SiDotnet,
  "ASP.NET MVC": SiDotnet,
  React: SiReact,
  Sitecore: SiSitecore,
  Solr: SiApachesolr,
  Sass: SiSass,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  Supabase: SiSupabase,
  PostgreSQL: SiPostgresql,
  "Payload CMS": SiNodedotjs,
  Vercel: SiVercel,
  Jenkins: SiJenkins,
  JIRA: SiJira,
  GitLab: SiGitlab,
  GitHub: SiGithub,
  NodeJs: SiNodedotjs,
};

const roles = [
  {
    title: "Full-Stack Developer",
    date: "September 2023 - Present",
    organisation: "Leeds Beckett University",
    description:
      "Working within a large-scale Sitecore CMS environment built on C# ASP.NET MVC (Razor Views), React, Sass, and Solr. Contributing to structured content architecture, performance optimisation, API integrations, and cross-team delivery across a high-traffic institutional platform.",
    stack: [
      "C#",
      "ASP.NET MVC",
      "React",
      "Sitecore",
      "NodeJs",
      "Solr",
      "Sass",
      "Jenkins",
      "JIRA",
      "GitLab",
    ],
  },
  {
    title: "Founder",
    organisation: "Tremayne Digital Solutions",
    date: "Feburary 2026 - Present",
    description:
      "Building and deploying modern full-stack applications using Next.js, TypeScript, PostgreSQL (Supabase), Payload CMS, and Vercel. Focused on scalable architecture, clean component systems, and production-ready deployments.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Payload CMS",
      "Vercel",
      "GitHub",
    ],
  },
];

export function Currently() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {roles.map((role) => (
        <Card
          key={role.title}
          className="h-full transition-all duration-200 hover:border-primary/40 hover:shadow-[0_0_24px_rgba(57,255,136,0.25)]"
        >
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl font-semibold tracking-tight text-foreground">
              {role.title}
            </CardTitle>
            <div className="flex justify-between">
              <p className="text-sm text-muted-foreground">
                {role.organisation}
              </p>
              <Badge>{role.date}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-5">
            <p className="text-sm leading-7 text-muted-foreground">
              {role.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {role.stack.map((item) => {
                const Icon = stackIcons[item];

                return (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="inline-flex items-center gap-1.5"
                  >
                    {Icon ? (
                      <Icon aria-hidden className="h-3.5 w-3.5 text-primary" />
                    ) : null}
                    {item}
                  </Badge>
                );
              })}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
