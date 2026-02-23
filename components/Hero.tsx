"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/Container";
import { Glow } from "@/components/Glow";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Hero() {
  return (
    <header className="relative overflow-hidden pt-8 sm:pt-10">
      <Container>
        <nav aria-label="Primary" className="mb-16 flex justify-end">
          <ul className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-2 py-1 backdrop-blur-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3 py-1.5 text-sm text-[color:var(--muted)] transition-colors hover:text-[color:var(--text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <motion.div
          className="relative max-w-4xl space-y-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Glow className="-left-28 -top-24 h-72 w-72" />
          <h1 className="text-5xl font-semibold tracking-tight text-[color:var(--text)] sm:text-6xl lg:text-7xl">
            Callum Tremayne
          </h1>
          <p className="max-w-3xl text-xl leading-8 text-[color:var(--text)]/90 sm:text-2xl">
            Full-Stack Developer building scalable, production-ready digital platforms.
          </p>
          <p className="text-base text-[color:var(--accent)]">
            Enterprise CMS Engineer • Modern JavaScript Product Builder
          </p>
          <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">
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
