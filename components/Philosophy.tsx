import { Card, CardContent } from "@/components/ui/card";

const lines = [
  "Clean architecture.",
  "Maintainable components.",
  "Performance-first thinking.",
  "Thoughtful user experience.",
];

export function Philosophy() {
  return (
    <Card className="mx-auto max-w-3xl">
      <CardContent className="p-8 text-center sm:p-10">
        <h3 className="mb-6 text-xl font-semibold text-foreground">How I work</h3>
        <ul className="space-y-3">
          {lines.map((line) => (
            <li key={line} className="text-muted-foreground">
              {line}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
