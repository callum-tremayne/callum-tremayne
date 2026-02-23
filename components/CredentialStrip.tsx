import { Container } from "@/components/Container";
import { Badge } from "@/components/ui/badge";
import { IconType } from "react-icons";
import {
  SiApachesolr,
  SiDotnet,
  SiGitlab,
  SiJenkins,
  SiJira,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSitecore,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const credentials: { label: string; icon: IconType }[] = [
  { label: "Next.js", icon: SiNextdotjs },
  { label: "TypeScript", icon: SiTypescript },
  { label: "C# / ASP.NET MVC", icon: SiDotnet },
  { label: "React", icon: SiReact },
  { label: "Sitecore", icon: SiSitecore },
  { label: "Solr", icon: SiApachesolr },
  { label: "PostgreSQL", icon: SiPostgresql },
  { label: "Vercel", icon: SiVercel },
  { label: "NodeJs", icon: SiNodedotjs },
  { label: "Jenkins", icon: SiJenkins },
  { label: "GitLab", icon: SiGitlab },
  { label: "JIRA", icon: SiJira },
];

export function CredentialStrip() {
  const topRow = credentials.slice(0, 5);
  const bottomRow = credentials.slice(5);

  return (
    <section className="section-pad pt-8" aria-label="Credentials">
      <Container>
        <div className="mx-auto space-y-2 rounded-2xl border border-border bg-card/40 p-4">
          <div className="flex flex-wrap items-center justify-evenly gap-2">
            {topRow.map((credential) => (
              <Badge
                key={credential.label}
                variant="secondary"
                className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm"
              >
                <credential.icon
                  aria-hidden
                  className="h-3.5 w-3.5 text-primary"
                />
                {credential.label}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-evenly gap-2">
            {bottomRow.map((credential) => (
              <Badge
                key={credential.label}
                variant="secondary"
                className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm"
              >
                <credential.icon
                  aria-hidden
                  className="h-3.5 w-3.5 text-primary"
                />
                {credential.label}
              </Badge>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
