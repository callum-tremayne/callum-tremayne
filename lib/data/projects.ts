import {
  SiNextdotjs,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

import type { Project } from "@/lib/types/project";

export const projects: Project[] = [
  {
    title: "Tremayne Digital Solutions",
    badge: "Live",
    shortDescription: "Brand & Platform Development",
    longDescription:
      "A high-performance digital studio website built with Next.js and Tailwind CSS, designed to position a modern development brand and convert inbound client enquiries through structured messaging, performance optimisation, and scalable architecture.",
    projectUrl: "https://tremaynedigital.solutions",
    completed: "February 2026",
    role: "Brand Strategy + Product Design + Full-Stack Development",
    stack: [
      { label: "Next.js", icon: SiNextdotjs },
      { label: "TypeScript", icon: SiTypescript },
      { label: "Tailwind CSS", icon: SiTailwindcss },
      { label: "Shadcn UI", icon: SiShadcnui },
      { label: "Vercel Hosting", icon: SiVercel },
    ],
    caseStudy: {
      overview:
        "Tremayne Digital Solutions is a modern digital studio platform created to attract and convert service-based businesses seeking high-performance web builds. The objective was to establish authority, clarity, and technical credibility through both design and implementation.",
      challenge:
        "The key challenge was balancing strong visual identity with performance and simplicity. The site needed to communicate expertise, differentiate from template agencies, and convert traffic — without feeling cluttered or over-designed.",
      solution:
        "I designed and built a component-driven Next.js architecture with a performance-first mindset, implemented structured messaging blocks for clarity, and created a scalable content system to support future growth and case studies.",
      outcome:
        "The result is a fast, technically refined platform that clearly communicates positioning, supports inbound enquiries, and serves as a live demonstration of development standards and architectural approach.",
    },
    mockups: {
      desktop: "/tds/tremaynedigital.solutions.webp",
    },
  },
  {
    title: "Heartfelt Pages",
    badge: "Live",
    shortDescription: "Full-Stack Development",
    longDescription:
      "A full-stack digital platform built with Next.js and Supabase, featuring dynamic content rendering, automated page generation, secure data handling, and performance-focused architecture.",
    projectUrl: "https://heartfeltpages.co.uk",
    completed: "March 2025",
    role: "Product Design + Full-Stack Development",
    stack: [
      { label: "Next.js", icon: SiNextdotjs },
      { label: "TypeScript", icon: SiTypescript },
      { label: "Tailwind CSS", icon: SiTailwindcss },
      { label: "Supabase", icon: SiSupabase },
      { label: "Vercel Hosting", icon: SiVercel },
    ],
    caseStudy: {
      overview:
        "Heartfelt Pages is a digital gifting platform that lets users create personalised message experiences for milestone events. The goal was to deliver a polished, emotionally driven product that still felt fast and dependable under load.",
      challenge:
        "The core challenge was balancing rich user customisation with a simple flow. The interface needed to support dynamic content and theming while maintaining speed across devices.",
      solution:
        "I built a modular full-stack architecture using Next.js and Supabase, implemented component-driven page generation, and optimised rendering paths so users get a smooth editing and viewing experience.",
      outcome:
        "The final build launched with a strong UX baseline, a scalable content model, and a deployment workflow that supports fast iteration as the product evolves.",
    },
    mockups: {
      desktop: "/heartfeltpages/heartfeltpages.co.uk.webp",
    },
  },
  {
    title: "Project Exit",
    badge: "In progress",
    shortDescription: "High-Performance Landing Page",
    longDescription:
      "A conversion-driven landing page designed to showcase a business exit platform with clear value messaging, intuitive journey sections, and optimised UI to drive enquiries and engagement.",
    completed: "In progress",
    role: "Strategy + Design + Frontend Development",
    stack: [
      { label: "Next.js", icon: SiNextdotjs },
      { label: "TypeScript", icon: SiTypescript },
      { label: "Tailwind CSS", icon: SiTailwindcss },
      { label: "Supabase", icon: SiSupabase },
      { label: "Vercel Hosting", icon: SiVercel },
    ],
    caseStudy: {
      overview:
        "Project Exit is a high-trust landing page experience for founders exploring business exit pathways. The objective is to communicate authority quickly and guide users into qualified conversations.",
      challenge:
        "The challenge was to present complex service messaging in a concise structure without losing credibility. The page needed clarity, hierarchy, and strong CTA placement.",
      solution:
        "I designed a narrative-led page architecture with modular sections, trust-focused visual styling, and performance-first implementation to keep the experience fast and persuasive.",
      outcome:
        "The project is currently in delivery, with content structure and interaction patterns locked in for final production rollout.",
    },
    mockups: {
      desktop: "/bg.svg",
    },
  },
  {
    title: "Heartfelt Pages v2",
    badge: "In progress",
    shortDescription: "Performance & UX Refinements",
    longDescription:
      "The next iteration of a full-stack digital gifting platform, focused on architectural refinement and performance optimisation. Introducing improved data modelling, expanded theming capabilities, and enhanced automation workflows to support long-term scalability.",
    completed: "In progress",
    role: "Product Engineering",
    stack: [
      { label: "Next.js", icon: SiNextdotjs },
      { label: "TypeScript", icon: SiTypescript },
      { label: "Tailwind CSS", icon: SiTailwindcss },
      { label: "Supabase", icon: SiSupabase },
      { label: "Vercel Hosting", icon: SiVercel },
    ],
    caseStudy: {
      overview:
        "Version 2 expands the original Heartfelt Pages platform with deeper personalisation and cleaner operational workflows behind the scenes.",
      challenge:
        "The main challenge is evolving the product architecture without introducing regressions for existing users and content workflows.",
      solution:
        "The rebuild focuses on data model hardening, improved component reuse, and UI refinements that reduce friction in high-frequency tasks.",
      outcome:
        "Current progress has improved maintainability and prepared the platform for broader feature rollout.",
    },
    mockups: {
      desktop: "/bg.svg",
    },
  },
  {
    title: "New Talent Finder",
    badge: "In progress",
    shortDescription: "Database-Driven Recruitment System",
    longDescription:
      "A database-driven recruitment platform designed to streamline candidate discovery and management. Built with a scalable full-stack architecture, featuring structured search functionality, dynamic data rendering, and secure deployment practices.",
    completed: "In progress",
    role: "Full-Stack Development",
    stack: [
      { label: "Next.js", icon: SiNextdotjs },
      { label: "TypeScript", icon: SiTypescript },
      { label: "Tailwind CSS", icon: SiTailwindcss },
      { label: "Supabase", icon: SiSupabase },
      { label: "Vercel Hosting", icon: SiVercel },
    ],
    caseStudy: {
      overview:
        "New Talent Finder is a recruitment operations platform built to simplify sourcing, evaluation, and candidate pipeline visibility.",
      challenge:
        "The product needed to handle structured data workflows while staying intuitive for non-technical users under daily operational pressure.",
      solution:
        "I implemented a scalable data-first architecture with predictable filtering, clear record presentation, and role-aware interface patterns.",
      outcome:
        "The system now has a stable technical foundation to support future automation and reporting features.",
    },
    mockups: {
      desktop: "/bg.svg",
    },
  },
];
