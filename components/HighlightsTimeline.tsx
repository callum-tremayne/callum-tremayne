import { CheckCircle2 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const items = [
  "Work confidently within large-scale structured environments",
  "Design clean, modular component systems",
  "Integrate third-party APIs and external services",
  "Model relational databases effectively",
  "Ship production-ready features with long-term maintainability in mind",
];

export function HighlightsTimeline() {
  return (
    <Card>
      <CardContent className="p-6 sm:p-8">
        <p className="mb-4 sm:text-base text-foreground">
          I enjoy building products from idea to deployment, balancing user
          experience, performance, and maintainable architecture.
        </p>
        <p className="mb-4 sm:text-base text-foreground">
          My experience across enterprise CMS systems and modern JavaScript
          stacks enables me to:
        </p>
        <ol className="space-y-4">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm sm:text-base"
            >
              <CheckCircle2
                className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                aria-hidden
              />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}
