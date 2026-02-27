import { Glow } from "@/components/layout/Glow";
import { Badge } from "@/components/ui/badge";

const howIWork = [
  "Clean architecture",
  "Maintainable components",
  "Performance-first thinking",
  "Thoughtful user experience",
];

const lookingForTags = [
  "Product teams",
  "Modern React/Next.js",
  "Quality-focused engineering",
  "Clear ownership",
];

export function AboutSection() {
  return (
    <div className="relative isolate">
      <Glow className="-top-20 left-1/2 h-56 w-56 -translate-x-1/2 opacity-80" />

      <div className="relative z-10 grid gap-8 lg:grid-cols-2">
        <article className="space-y-4 border-l-2 border-primary/70 pl-5 sm:pl-6">
          <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            How I work
          </h3>
          <ul className="space-y-3">
            {howIWork.map((item) => (
              <li
                key={item}
                className="text-base leading-8 text-muted-foreground hover:text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="space-y-4 border-r-2 md:border-r-0 md:border-l-2 border-primary/70 pr-5 md:pr-0 md:pl-5 sm:pl-6">
          <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Professional Focus
          </h3>
          <p className="text-base leading-8 text-muted-foreground">
            I&apos;m motivated by roles where I can contribute to scalable
            architecture, improve engineering quality, and help build products
            that deliver measurable impact.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {lookingForTags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
