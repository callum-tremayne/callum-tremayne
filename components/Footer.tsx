import { Container } from "@/components/Container";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="section-pad border-t border-border pb-10 pt-8">
      <Container>
        <div className="flex flex-col items-start justify-between gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>Callum Tremayne • Full-Stack Developer</p>
          <p>© 2026</p>
        </div>
      </Container>
    </footer>
  );
}
