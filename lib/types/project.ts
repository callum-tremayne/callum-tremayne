import type { ComponentType } from "react";

export type StackItem = {
  label: string;
  icon: ComponentType<{ className?: string }>;
};

export type Project = {
  title: string;
  badge: "Live" | "In progress";
  shortDescription: string;
  longDescription: string;
  projectUrl?: string;
  completed: string;
  role: string;
  stack: StackItem[];
  caseStudy: {
    overview: string;
    challenge: string;
    solution: string;
    outcome: string;
  };
  mockups: {
    desktop: string;
  };
};
