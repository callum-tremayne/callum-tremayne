"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { GrDocument } from "react-icons/gr";
import LocalTime from "../ui/local-time";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function HeroSection() {
  return (
    <header className="relative overflow-hidden pt-8 sm:pt-10">
      <Container>
        <nav
          aria-label="Primary"
          className="mb-16 flex justify-center lg:justify-end"
        >
          <ul className="flex items-center gap-2 rounded-full border border-border bg-background/40 px-2 py-1 backdrop-blur-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-1 xs:px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <motion.div
          className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="max-w-4xl space-y-6">
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
          </div>
          <div className="flex flex-col gap-4">
            <div className="mx-auto h-44 w-44 overflow-hidden rounded-full border border-border shadow-lg sm:h-52 sm:w-52 lg:mx-0 lg:h-60 lg:w-60">
              <Image
                src="/callum-tremayne.webp"
                alt="Portrait of Callum Tremayne"
                width={480}
                height={480}
                className="h-full w-full object-cover scale-125 object-[50%_30%]"
                priority
              />
            </div>
            <div className="flex justify-center">
              <LocalTime />
            </div>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-4">
            <Button asChild variant="default">
              <Link href="/cv" target="_blank">
                <GrDocument />
                View CV
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </header>
  );
}
