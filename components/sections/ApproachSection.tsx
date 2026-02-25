import { CheckCircle2, RocketIcon } from "lucide-react";

const items = [
  "Work confidently within large-scale structured environments",
  "Design clean, modular component systems",
  "Integrate third-party APIs and external services",
  "Model relational databases effectively",
  "Ship production-ready features with long-term maintainability in mind",
];

export function ApproachSection() {
  return (
    <div className="space-y-5 sm:space-y-6">
      <p className="leading-8 text-muted-foreground">
        I enjoy building products from idea to deployment, balancing user
        experience, performance, and maintainable architecture.
      </p>
      <p className="leading-8 text-muted-foreground">
        My experience across enterprise CMS systems and modern JavaScript stacks
        enables me to:
      </p>
      <div className="block md:grid md:grid-cols-2">
        <ol className="relative space-y-4 border-l border-border/90 pl-5 sm:space-y-5 sm:pl-6">
          {items.map((item) => (
            <li key={item} className="relative">
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden
                />
                <p className="text-sm text-muted-foreground sm:text-base">
                  {item}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <div className="hidden md:flex justify-center self-center">
          <RocketIcon className="w-auto h-40 opacity-70" />
        </div>
      </div>
    </div>
  );
}
