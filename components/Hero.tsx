"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Hero() {
  return (
    <header className="relative overflow-hidden pt-8 sm:pt-10">
      <Container>
        <nav aria-label="Primary" className="mb-16 flex justify-end">
          <ul className="flex items-center gap-2 rounded-full border border-border bg-background/40 px-2 py-1 backdrop-blur-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <motion.div
          className="relative z-10 max-w-4xl space-y-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Callum Tremayne
          </h1>
          <p className="max-w-3xl text-xl leading-8 text-foreground/90 sm:text-2xl">
            Full-Stack Developer building scalable, production-ready digital
            platforms.
          </p>
          <p className="text-base text-primary">
            Enterprise CMS Engineer • Modern JavaScript Product Builder
          </p>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Founder of Tremayne Digital Solutions
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            <Button asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="secondary">
              <a href="#">Download CV</a>
            </Button>
            <Button asChild variant="secondary">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </motion.div>
      </Container>
    </header>
  );
}
