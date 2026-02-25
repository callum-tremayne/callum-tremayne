"use client";

import { motion } from "framer-motion";

import { Glow } from "@/components/layout/Glow";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  showHeadingGlow?: boolean;
  split?: boolean;
};

export function Section({
  id,
  title,
  description,
  children,
  className,
  showHeadingGlow = false,
  split = false,
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
      {split ? (
        <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)] lg:gap-16">
          <header className="relative space-y-4">
            {showHeadingGlow ? (
              <Glow className="-left-12 top-0 h-28 w-28" />
            ) : null}
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <div aria-hidden className="h-px w-24 bg-primary/60" />
          </header>
          <div className="space-y-4">
            {description ? (
              <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                {description}
              </p>
            ) : null}
            <div className="max-w-2xl">{children}</div>
          </div>
        </div>
      ) : (
        <>
          <header className="relative z-10 mb-8 space-y-3">
            {showHeadingGlow ? (
              <Glow className="-left-12 top-0 h-28 w-28" />
            ) : null}
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {title}
            </h2>
            {description ? (
              <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
                {description}
              </p>
            ) : null}
          </header>
          {children}
        </>
      )}
    </motion.section>
  );
}
