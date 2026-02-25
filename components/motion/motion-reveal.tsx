"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type MotionRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
};

export function MotionReveal({
  children,
  className,
  delay = 0,
  once = true,
}: MotionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      style={{ willChange: "transform, opacity" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
