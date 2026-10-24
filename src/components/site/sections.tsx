import { useMemo, useState, type FormEvent } from "react";
import {
  Search, Share2, Sparkles, Megaphone, Magnet, Gem, Package, MousePointerClick, MessageCircle, Users, BarChart3,
  Check, ArrowRight, Wallet, Target, Palette, Workflow, Layers, TrendingUp, Quote, Mail, Phone, MapPin, Eye, Activity,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { profile, services, plans, projects, portfolioCategories, testimonials, metrics, reasons, steps, faqs, waLink } from "@/content/site";
import { Cta, Eyebrow, Section, SectionHead } from "./ui";
import { cn } from "@/lib/utils";

const icons: Record<string, typeof Search> = { Search, Share2, Sparkles, Megaphone, Magnet, Gem, Package, MousePointerClick, MessageCircle, Users, BarChart3 };

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-32 md:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-glow" />
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="fade-up">
          <div className="flex flex-wrap items-center gap-3">
            <Eyebrow>Independent Digital Marketer · Pune, India</Eyebrow>
            <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
              <span className="h-2 w-2 animate-pulse rounded-full bg-success" /> Open for Freelance Projects
            </span>
          </div>
          <h1 className="mt-7 text-5xl font-semibold leading-[1.02] md:text-7xl">
            Your Brand.<br />My <span className="text-gradient">Strategy.</span><br />
            <span className="font-serif font-normal italic">Real Growth.</span>
          </h1>
          <p className="mt-6 font-display text-lg text-foreground/90">Build Your Brand. Reach Your Audience. Grow With Strategy.</p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            I help businesses strengthen their digital presence through affordable marketing strategies, professional content creation, social media management, and performance-focused digital solutions.
          </p>
          <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-3">
            {["Affordable, flexible pricing", "Professional, brand-focused creativity", "Strategic, growth-oriented marketing"].map((b) => (
              <li key={b} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />{b}</li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <Cta to="/contact">Let's grow your brand <ArrowRight className="h-4 w-4" /></Cta>
            <Cta to="/portfolio" variant="ghost">Explore my work</Cta>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-brand opacity-20 blur-3xl" />
          <img src={heroImg} alt="Floating marketing dashboards and social media post mockups" width={1280} height={1024} className="relative rounded-3xl border border-border float-slow" />
          <div className="glass absolute -bottom-6 -left-4 hidden rounded-2xl p-4 sm:block">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Focus</p>
            <p className="font-display text-sm font-semibold">Strategy · Content · Growth</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  const strengths = ["Strategic thinking", "Creative content", "Brand consistency", "Audience-focused marketing", "Affordable solutions", "Professional communication"];
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="glass relative aspect-[4/5] overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-glow" />
          <div className="absolute inset-0 grid place-items-center text-center">
            <div>
              <span className="font-display text-8xl font-bold text-gradient">VM</span>
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Your photo goes here</p>
            </div>
          </div>
        </div>
        <div>
          <SectionHead center={false} eyebrow="About me" title={<>More Than Marketing. <span className="font-serif font-normal italic text-gradient">A Partner</span> in Your Growth.</>}
            desc="I'm Vedant Miniyar, a freelance digital marketer passionate about helping businesses build a stronger digital presence. I combine creative thinking, brand-focused content, and practical marketing strategies to help businesses reach their audience and work toward their goals." />
          <ul className="grid gap-3 sm:grid-cols-2">
            {strengths.map((s) => <li key={s} className="glass flex items-center gap-3 rounded-xl px-4 py-3 text-sm"><Check className="h-4 w-4 text-cyan" />{s}</li>)}
          </ul>
          <Cta to="/contact" className="mt-8">Let's discuss your business</Cta>
        </div>
      </div>
    </Section>
  );
}

export function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <Section>
      <SectionHead eyebrow="Services" title={<>Everything Your Brand Needs to <span className="text-gradient">Grow Digitally.</span></>}
        desc="From engaging content to online visibility and potential customers — affordable digital marketing tailored to your business." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((s, i) => {
          const Icon = icons[s.icon] ?? Sparkles;
          return (
            <article key={s.id} className="glass group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity group-hover:opacity-30" />
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-cyan"><Icon className="h-5 w-5" /></span>
                <span className="font-display text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-4 space-y-1.5 text-sm">
                {s.items.map((it) => <li key={it} className="flex gap-2"><span className="mt-2 h-1 w-1 rounded-full bg-cyan" />{it}</li>)}
              </ul>
            </article>
          );
        })}
      </div>
      <div className="glass mt-10 flex flex-col items-center justify-between gap-6 rounded-3xl p-8 text-center md:flex-row md:text-left">
        <div>
          <h3 className="text-2xl font-semibold">Not Sure What Your Brand Needs?</h3>
          <p className="mt-2 text-muted-foreground">Let's identify the right marketing services for your business, goals, and budget.</p>
        </div>
        <Cta to={limit ? "/services" : "/contact"}>{limit ? "See all services" : "Get a custom marketing plan"}</Cta>
      </div>
    </Section>
  );
}

export function Pricing() {
  const highlights = ["Budget-friendly freelance services", "Customizable packages", "Individual services available", "Transparent scope & pricing", "Professional delivery"];
  return (
    <Section>
      <SectionHead eyebrow="Pricing" title={<>Professional Marketing. Practical Pricing. <span className="text-gradient">Built Around Your Budget.</span></>}
        desc="Growing your business online shouldn't require an agency-sized budget. Flexible, affordable solutions with professional execution and a strategy tailored to you." />
      <ul className="mb-12 flex flex-wrap justify-center gap-2">
        {highlights.map((h) => <li key={h} className="rounded-full border border-border bg-card/50 px-4 py-2 text-xs text-muted-foreground">{h}</li>)}
      </ul>
      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <article key={p.name} className={cn("glass relative flex flex-col rounded-3xl p-7", p.featured && "border-cyan/50 shadow-glow")}>
            {p.featured && <span className="absolute -top-3 left-7 rounded-full bg-gradient-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-widest">Most popular</span>}
            <p className="text-xs uppercase tracking-[0.2em] text-cyan">{p.name}</p>
            <h3 className="mt-2 text-2xl font-semibold">{p.tagline}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.audience}</p>
            <p className="mt-6 font-display text-3xl font-semibold">{p.price || "Custom quote"}</p>
            <ul className="mt-6 space-y-2 text-sm">
              {p.deliverables.map((d) => <li key={d} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-cyan" />{d}</li>)}
            </ul>
            <dl className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-5 text-xs">
              {[["Content", p.content], ["Platforms", p.platforms], ["Timeline", p.timeline], ["Revisions", p.revisions]].map(([k, v]) => (
                <div key={k}><dt className="text-muted-foreground">{k}</dt><dd className="mt-0.5">{v}</dd></div>
              ))}
            </dl>
            <Cta to="/contact" variant={p.featured ? "primary" : "ghost"} className="mt-7">Find your package</Cta>
          </article>
        ))}
      </div>
      <p className="mt-10 text-center font-serif text-2xl italic">Flexible solutions. Clear deliverables. Professional service.</p>
      <p className="mt-3 text-center text-xs text-muted-foreground">Ad spend, paid tools and external production charges are billed separately.</p>
    </Section>
  );
}

export function Showcase() {
  const items = ["Social posts & carousels", "Reel covers & video concepts", "Product promotional creatives", "Ad designs", "Branding concepts", "Campaign visuals"];
  return (
    <Section className="bg-surface">
      <SectionHead eyebrow="Content" title={<>Your Brand's Voice. Your Story. <span className="font-serif font-normal italic text-gradient">Your Content.</span></>}
        desc="Content built around your brand identity, audience, communication style and goals — never random social media posts." />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {items.map((t, i) => (
          <div key={t} className={cn("glass group relative overflow-hidden rounded-2xl", i % 3 === 1 ? "aspect-[4/5]" : "aspect-square")}>
            <div className="absolute inset-0 bg-gradient-brand opacity-15 transition-opacity group-hover:opacity-30" />
            <div className="absolute inset-4 rounded-xl border border-border bg-background/40 p-4">
              <div className="flex items-center gap-2"><span className="h-6 w-6 rounded-full bg-gradient-brand" /><span className="h-2 w-16 rounded bg-muted" /></div>
              <div className="mt-4 h-1/2 rounded-lg bg-glow" />
              <div className="mt-3 h-2 w-3/4 rounded bg-muted" /><div className="mt-2 h-2 w-1/2 rounded bg-muted" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4">
              <p className="text-sm font-semibold">{t}</p>
              <p className="text-[10px] uppercase tracking-widest text-cyan">Concept Project</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Portfolio() {
  const [cat, setCat] = useState<(typeof portfolioCategories)[number]>("All");
  const list = useMemo(() => (cat === "All" ? projects : projects.filter((p) => p.category === cat)), [cat]);
  return (
    <Section>
      <SectionHead eyebrow="Portfolio" title={<>Creative Work. Strategic Thinking. <span className="text-gradient">Real Possibilities.</span></>} />
      <div className="mb-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter projects">
        {portfolioCategories.map((c) => (
          <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
            className={cn("rounded-full border px-4 py-2 text-xs transition-colors", cat === c ? "border-transparent bg-gradient-brand text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground")}>
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <article key={p.title} className="glass group overflow-hidden rounded-2xl transition-transform hover:-translate-y-1">
            <div className="relative aspect-[16/10] overflow-hidden" style={{ background: `linear-gradient(135deg, oklch(0.35 0.15 ${p.hue}), oklch(0.2 0.05 ${p.hue + 20}))` }}>
              <div className="absolute inset-0 grid-bg opacity-60" />
              <span className="absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 text-[10px] uppercase tracking-widest text-cyan">{p.label}</span>
              <span className="absolute bottom-4 right-4 font-display text-4xl font-bold text-foreground/20">{p.category.slice(0, 2).toUpperCase()}</span>
            </div>
            <div className="p-6">
              <p className="text-xs text-cyan">{p.category}</p>
              <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground"><span className="text-foreground">Objective:</span> {p.objective}</p>
              <p className="mt-1 text-sm text-muted-foreground"><span className="text-foreground">My role:</span> {p.role}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-8 text-center text-xs text-muted-foreground">Projects shown are concept or self-initiated work unless labelled otherwise.</p>
    </Section>
  );
}

export function Metrics() {
  const mIcons = [Eye, TrendingUp, Target, Activity, MousePointerClick, BarChart3];
  return (
    <Section className="bg-surface">
      <SectionHead eyebrow="Metrics I Track" title={<>Focus on Progress, <span className="text-gradient">Not Just Numbers.</span></>}
        desc="Every campaign is measured against what matters to your business. No guaranteed sales, leads, virality or rankings — just honest tracking and improvement." />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {metrics.map((m, i) => {
          const I = mIcons[i];
          return <div key={m} className="glass rounded-2xl p-6"><I className="h-6 w-6 text-cyan" /><p className="mt-4 font-display font-semibold">{m}</p></div>;
        })}
      </div>
    </Section>
  );
}

export function Why() {
  const rIcons = [Wallet, Target, Palette, Workflow, Layers, TrendingUp];
  return (
    <Section>
      <SectionHead eyebrow="Why work with me" title={<>Affordable Solutions. Professional Execution. <span className="text-gradient">A Strategy Built Around You.</span></>} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => {
          const I = rIcons[i];
          return (
            <div key={r.t} className="glass rounded-2xl p-7 transition-colors hover:border-cyan/40">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand"><I className="h-5 w-5" /></span>
              <h3 className="mt-5 text-lg font-semibold">{r.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.d}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export function Process() {
  return (
    <Section className="bg-surface">
      <SectionHead eyebrow="Process" title={<>A Clear Process. <span className="font-serif font-normal italic text-gradient">A Professional Experience.</span></>}
        desc="Clear communication, transparent quotations, client approvals, professional delivery and appropriate reporting." />
      <ol className="relative grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.t} className="glass relative rounded-2xl p-7">
            <span className="font-display text-5xl font-bold text-gradient">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 text-xl font-semibold">{s.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <Section>
      <SectionHead eyebrow="Testimonials" title="Trust Is Built Through Good Work." />
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((t) => (
          <figure key={t.name} className="glass rounded-2xl p-7">
            <Quote className="h-6 w-6 text-cyan" />
            <blockquote className="mt-4 text-lg">{t.feedback}</blockquote>
            <figcaption className="mt-5 text-sm text-muted-foreground">{t.name} · {t.brand}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

export function Faq() {
  return (
    <Section>
      <SectionHead eyebrow="FAQ" title="Questions, Answered." />
      <Accordion type="single" collapsible className="mx-auto max-w-3xl">
        {faqs.map((f, i) => (
          <AccordionItem key={f.q} value={`f${i}`} className="border-border">
            <AccordionTrigger className="py-5 text-left font-display text-base hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}

const inputCls = "w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-cyan focus:outline-none";

export function Contact() {
  const [sent, setSent] = useState<"" | "wa" | "mail">("");
  const [error, setError] = useState("");

  function build(form: HTMLFormElement) {
    const d = new FormData(form);
    const get = (k: string) => String(d.get(k) ?? "").trim().slice(0, 1000);
    if (!get("name") || !get("email") || !get("message")) { setError("Please fill in your name, email and message."); return null; }
    if (!/^\S+@\S+\.\S+$/.test(get("email"))) { setError("Please enter a valid email address."); return null; }
    setError("");
    return [
      `New project enquiry`,
      `Name: ${get("name")}`, `Business: ${get("business")}`, `Email: ${get("email")}`, `Phone: ${get("phone")}`,
      `Services: ${get("services")}`, `Budget: ${get("budget")}`, `Goals: ${get("goals")}`, `Message: ${get("message")}`,
    ].join("\n");
  }
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = build(e.currentTarget);
    if (!text) return;
    window.open(waLink(text), "_blank", "noopener");
    setSent("wa");
  }
  function viaEmail(form: HTMLFormElement | null) {
    if (!form) return;
    const text = build(form);
    if (!text) return;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Project enquiry")}&body=${encodeURIComponent(text)}`;
    setSent("mail");
  }

  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <SectionHead center={false} eyebrow="Contact" title={<>Let's Turn Your Ideas Into Your Next <span className="text-gradient">Growth Opportunity.</span></>}
            desc="Tell me about your business, the challenges you're facing, and what you'd like to achieve." />
          <div className="glass space-y-4 rounded-2xl p-6 text-sm">
            <p className="font-display text-lg font-semibold">{profile.name}</p>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-cyan"><Mail className="h-4 w-4 text-cyan" />{profile.email}</a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-cyan"><Phone className="h-4 w-4 text-cyan" />{profile.phone}</a>
            <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-cyan" />{profile.location}</p>
          </div>
          <Cta href={waLink()} variant="ghost" className="mt-6">Chat with me on WhatsApp</Cta>
        </div>
        <form id="contact-form" onSubmit={onSubmit} className="glass grid gap-4 rounded-3xl p-6 sm:grid-cols-2 md:p-8" noValidate>
          <input name="name" required maxLength={100} placeholder="Full Name *" className={inputCls} aria-label="Full name" />
          <input name="business" maxLength={100} placeholder="Business Name" className={inputCls} aria-label="Business name" />
          <input name="email" type="email" required maxLength={150} placeholder="Email Address *" className={inputCls} aria-label="Email" />
          <input name="phone" type="tel" maxLength={20} placeholder="Phone or WhatsApp" className={inputCls} aria-label="Phone" />
          <select name="services" className={inputCls} aria-label="Services required" defaultValue="">
            <option value="" disabled>Services Required</option>
            {services.map((s) => <option key={s.id}>{s.title}</option>)}
            <option>Not sure yet</option>
          </select>
          <select name="budget" className={inputCls} aria-label="Approximate budget" defaultValue="">
            <option value="" disabled>Approximate Budget</option>
            <option>Under ₹10,000 / month</option><option>₹10,000 – ₹25,000 / month</option><option>₹25,000 – ₹50,000 / month</option><option>₹50,000+ / month</option><option>One-time project</option>
          </select>
          <input name="goals" maxLength={300} placeholder="Project Goals" className={cn(inputCls, "sm:col-span-2")} aria-label="Project goals" />
          <textarea name="message" required maxLength={1000} rows={5} placeholder="Message *" className={cn(inputCls, "sm:col-span-2")} aria-label="Message" />
          {error && <p role="alert" className="text-sm text-destructive sm:col-span-2">{error}</p>}
          {sent && <p role="status" className="text-sm text-success sm:col-span-2">{sent === "wa" ? "WhatsApp opened with your details — just press send to reach me." : "Your email app opened with your details — just press send."}</p>}
          <div className="flex flex-wrap gap-3 sm:col-span-2">
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] shadow-glow hover:brightness-110">Let's discuss my project <ArrowRight className="h-4 w-4" /></button>
            <button type="button" onClick={(e) => viaEmail(e.currentTarget.form)} className="rounded-full border border-border px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] hover:border-cyan/60">Send by email instead</button>
          </div>
          <p className="text-xs text-muted-foreground sm:col-span-2">Your details are sent directly via WhatsApp or email — nothing is stored on this website.</p>
        </form>
      </div>
    </Section>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden px-5 py-28">
      <div className="absolute inset-0 bg-gradient-brand gradient-shift opacity-90" />
      <div className="absolute inset-0 grid-bg" />
      <div className="relative mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold uppercase leading-[1.05] md:text-7xl">Your Brand. My Strategy. Real Growth.</h2>
        <p className="mt-6 text-lg">Affordable Pricing. Professional Execution. Creative Content.</p>
        <a href="/contact" className="mt-10 inline-flex rounded-full bg-background px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition-transform hover:-translate-y-0.5">Let's build your brand together.</a>
      </div>
    </section>
  );
}
