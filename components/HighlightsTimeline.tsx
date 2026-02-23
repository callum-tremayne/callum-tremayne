import { CheckCircle2 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const items = [
  "UCAS Tariff Calculator — API integration + performance-focused redesign",
  "Safe Quick Exit — privacy-first safeguarding feature",
  "3D Virtual Campus — Blender + 3DVista immersive build",
  "Mobile App — feature discussions and maintenance collaboration",
];

export function HighlightsTimeline() {
  return (
    <Card>
      <CardContent className="p-6 sm:p-8">
        <ol className="space-y-4">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm sm:text-base">
              <CheckCircle2
                className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent)]"
                aria-hidden
              />
              <span className="text-[color:var(--muted)]">{item}</span>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}
