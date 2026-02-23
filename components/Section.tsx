"use client";

import { motion } from "framer-motion";

import { Glow } from "@/components/Glow";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  showHeadingGlow?: boolean;
};

export function Section({
  id,
  title,
  description,
  children,
  className,
  showHeadingGlow = false,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      className={cn("section-pad relative", className)}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <header className="relative mb-8 space-y-3">
        {showHeadingGlow ? <Glow className="-left-12 top-0 h-28 w-28" /> : null}
        <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--text)] sm:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-3xl text-base leading-7 text-[color:var(--muted)] sm:text-lg">
            {description}
          </p>
        ) : null}
      </header>
      {children}
    </motion.section>
  );
}
