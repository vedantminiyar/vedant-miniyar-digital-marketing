import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
export const ctaStyles = {
  primary: cn(base, "bg-gradient-brand gradient-shift text-primary-foreground shadow-glow hover:-translate-y-0.5 hover:brightness-110"),
  ghost: cn(base, "border border-border bg-card/40 text-foreground hover:border-cyan/60 hover:bg-card"),
};

type To = "/" | "/about" | "/services" | "/portfolio" | "/pricing" | "/process" | "/contact";

export function Cta({ to, href, children, variant = "primary", className }: { to?: To; href?: string; children: ReactNode; variant?: "primary" | "ghost"; className?: string }) {
  const cls = cn(ctaStyles[variant], className);
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
  return <Link to={to ?? "/contact"} className={cls}>{children}</Link>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-cyan">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
      {children}
    </span>
  );
}

export function SectionHead({ eyebrow, title, desc, center = true }: { eyebrow?: string; title: ReactNode; desc?: ReactNode; center?: boolean }) {
  return (
    <div className={cn("mb-12 max-w-3xl", center && "mx-auto text-center")}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
      {desc && <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{desc}</p>}
    </div>
  );
}

export function Section({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={cn("relative px-5 py-20 md:py-28", className)}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function PageHero({ eyebrow, title, desc }: { eyebrow: string; title: ReactNode; desc?: ReactNode }) {
  return (
    <section className="relative overflow-hidden px-5 pb-10 pt-36 md:pt-44">
      <div className="pointer-events-none absolute inset-0 bg-glow" />
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="relative mx-auto max-w-4xl text-center fade-up">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 text-4xl font-semibold leading-[1.05] md:text-6xl">{title}</h1>
        {desc && <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{desc}</p>}
      </div>
    </section>
  );
}
