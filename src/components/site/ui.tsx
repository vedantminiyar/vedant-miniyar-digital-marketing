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
    <div className={cn("mb-8 sm:mb-12 w-full max-w-[94%] sm:max-w-3xl", center && "mx-auto text-center")}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 sm:mt-5 text-[clamp(1.75rem,3.8vw,3.15rem)] font-semibold leading-[1.12] tracking-tight">{title}</h2>
      {desc && <p className="mt-3.5 sm:mt-5 text-[clamp(0.925rem,1.4vw,1.125rem)] leading-relaxed text-muted-foreground">{desc}</p>}
    </div>
  );
}

export function Section({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={cn("relative px-[3%] sm:px-[4%] lg:px-[5%] py-[10%] sm:py-[7%] lg:py-[5%] overflow-hidden", className)}>
      <div className="mx-auto w-[94%] sm:w-[92%] lg:w-[90%] max-w-7xl">{children}</div>
    </section>
  );
}

export function PageHero({ eyebrow, title, desc }: { eyebrow: string; title: ReactNode; desc?: ReactNode }) {
  return (
    <section className="relative overflow-hidden px-[4%] sm:px-[5%] pb-8 sm:pb-12 pt-28 sm:pt-36 md:pt-44">
      <div className="pointer-events-none absolute inset-0 bg-glow" />
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="relative mx-auto w-[94%] sm:w-[92%] max-w-5xl text-center fade-up">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 sm:mt-6 text-[clamp(2.15rem,5.2vw,4rem)] font-semibold leading-[1.08]">{title}</h1>
        {desc && <p className="mx-auto mt-4 sm:mt-6 w-[92%] max-w-2xl text-[clamp(0.95rem,1.4vw,1.15rem)] leading-relaxed text-muted-foreground">{desc}</p>}
      </div>
    </section>
  );
}

