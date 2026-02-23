import { cn } from "@/lib/utils";

type GlowProps = {
  className?: string;
};

export function Glow({ className }: GlowProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -z-10 rounded-full bg-[radial-gradient(circle,var(--accentGlow)_0%,rgba(57,255,136,0.12)_30%,rgba(57,255,136,0)_70%)] blur-2xl",
        className,
      )}
    />
  );
}
