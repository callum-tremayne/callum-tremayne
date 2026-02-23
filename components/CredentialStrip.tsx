import { Container } from "@/components/Container";
import { Badge } from "@/components/ui/badge";

const credentials = [
  "C# / ASP.NET MVC",
  "Razor Views",
  "React",
  "Sitecore",
  "Solr",
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "Supabase",
  "Vercel",
];

export function CredentialStrip() {
  return (
    <section className="section-pad pt-8" aria-label="Credentials">
      <Container>
        <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
          {credentials.map((item) => (
            <Badge key={item} variant="secondary" className="text-xs sm:text-sm">
              {item}
            </Badge>
          ))}
        </div>
      </Container>
    </section>
  );
}
