"use client";

import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const cards = [
  {
    title: "Full Website Rebrand",
    bullets: [
      "Implemented a new design system across the CMS",
      "Built modular Razor & React components",
      "Delivered responsive, accessible UI patterns",
    ],
  },
  {
    title: "UCAS Tariff Calculator",
    bullets: [
      "Integrated UCAS API for live data",
      "Built a modern React Select experience",
      "Delivered faster UX than the standard calculator",
    ],
  },
  {
    title: "Safe Quick Exit",
    bullets: [
      "Safeguarding-focused privacy feature",
      "Closes tab and reduces traces",
      "Opens neutral Google tabs",
    ],
  },
  {
    title: "Mobile App Collaboration",
    bullets: [
      "Worked with App Account Manager",
      "Scoped features & improvements",
      "Maintained and evolved the app",
    ],
  },
];

export function ExperienceGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: index * 0.04 }}
          whileHover={{ y: -2 }}
        >
          <Card className="h-full transition-all duration-200 hover:border-[color:var(--accent)]/40 hover:shadow-[0_0_26px_var(--accentGlow)]">
            <CardHeader>
              <CardTitle className="text-lg text-[color:var(--text)]">{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-[color:var(--muted)]">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
