import { Card, CardContent } from "@/components/ui/card";

export function LookingFor() {
  return (
    <Card>
      <CardContent className="p-6 sm:p-8">
        <h3 className="mb-3 text-xl font-semibold text-[color:var(--text)]">What I’m looking for</h3>
        <p className="max-w-3xl text-[color:var(--muted)]">
          I’m seeking full-stack or front-end focused roles where I can contribute to scalable architecture,
          mentor through example, and build products that deliver measurable impact.
        </p>
      </CardContent>
    </Card>
  );
}
