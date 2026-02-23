import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="section-pad border-t border-white/10 pb-10 pt-8">
      <Container>
        <div className="flex flex-col items-start justify-between gap-2 text-sm text-[color:var(--muted)] sm:flex-row sm:items-center">
          <p>Callum Tremayne • Full-Stack Developer</p>
          <p>© 2026</p>
        </div>
      </Container>
    </footer>
  );
}
