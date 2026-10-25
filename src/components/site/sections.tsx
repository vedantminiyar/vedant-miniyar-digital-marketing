import { useMemo, useState, useRef, useEffect, type FormEvent } from "react";
import {
  Search, Share2, Sparkles, Megaphone, Magnet, Gem, Package, MousePointerClick, MessageCircle, Users, BarChart3,
  Check, ArrowRight, Wallet, Target, Palette, Workflow, Layers, TrendingUp, Quote, Mail, Phone, MapPin, Eye, Activity,
  Instagram, Play, Pause, ChevronLeft, ChevronRight, Video, X, Maximize2, Loader2,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import vedantPhoto from "@/assets/ChatGPT Image Sep 4, 2026, 11_14_17 AM.png";
import medihymnsLogo from "@/assets/Medihymns Logo.png";
import medituneLogo from "@/assets/Meditune logo.jpg";
import harmonysLogo from "@/assets/Harmonys logo.jpeg";
import { showcaseMedia, type MediaItem } from "@/content/mediaShowcase";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { profile, services, plans, testimonials, metrics, reasons, faqs, waLink } from "@/content/site";
import { Cta, Eyebrow, Section, SectionHead } from "./ui";
import { cn } from "@/lib/utils";

const icons: Record<string, typeof Search> = { Search, Share2, Sparkles, Megaphone, Magnet, Gem, Package, MousePointerClick, MessageCircle, Users, BarChart3 };

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-[4%] sm:px-[5%] pb-16 sm:pb-24 pt-28 sm:pt-36 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-glow" />
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="relative mx-auto grid w-[94%] sm:w-[92%] lg:w-[90%] max-w-7xl items-center gap-10 lg:gap-14 lg:grid-cols-[1.1fr_1fr]">
        <div className="fade-up">
          <h1 className="font-algerian font-normal text-[clamp(1.75rem,3.6vw,3.15rem)] text-white tracking-normal">
            <span className="inline-grid grid-cols-[max-content_auto] items-baseline gap-x-3 sm:gap-x-4 gap-y-2 sm:gap-y-2.5 leading-tight">
              <span className="text-white text-right justify-self-end">Your</span>
              <span className="text-sky-400 text-left">Brand.</span>

              <span className="text-white text-right justify-self-end">My</span>
              <span className="text-sky-400 text-left">Strategy.</span>

              <span className="text-white text-right justify-self-end">Real</span>
              <span className="text-sky-400 text-left">Growth.</span>
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 font-display text-[clamp(1rem,1.6vw,1.25rem)] text-foreground/90 leading-snug">
            Build Your Brand. Reach Your Audience. Grow With Strategy.
          </p>
          <p className="mt-3 sm:mt-4 max-w-xl text-[clamp(0.9rem,1.3vw,1.05rem)] leading-relaxed text-muted-foreground">
            I help businesses strengthen their digital presence through affordable marketing strategies, professional content creation, social media management, and performance-focused digital solutions.
          </p>
          <div className="mt-6 sm:mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5">
            {[
              "Affordable, flexible pricing",
              "Professional, brand-focused creativity",
              "Strategic, growth-oriented marketing",
            ].map((b) => (
              <div
                key={b}
                className="group rounded-2xl border border-border/80 bg-card/85 p-3.5 sm:p-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-sky-400/40 hover:bg-card hover:-translate-y-0.5 flex items-start gap-2.5 sm:gap-3"
              >
                <div className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-sky-500/20 text-sky-400 border border-sky-400/30 mt-0.5 group-hover:scale-110 transition-transform">
                  <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                </div>
                <span className="text-xs sm:text-[13px] font-medium leading-snug text-foreground/95">
                  {b}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row flex-wrap gap-3">
            <a href="#contact" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-glow hover:brightness-110 transition-transform active:scale-95">
              Let's grow your brand <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#portfolio" className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-border bg-card/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-foreground hover:border-cyan/60 hover:bg-card transition-colors">
              Explore my work
            </a>
          </div>
        </div>
        <div className="relative w-full max-w-[460px] sm:max-w-[560px] lg:max-w-none mx-auto mt-4 lg:mt-0">
          <div className="absolute -inset-4 sm:-inset-6 rounded-[2rem] bg-gradient-brand opacity-20 blur-3xl" />
          <img src={heroImg} alt="Floating marketing dashboards and social media post mockups" width={1280} height={1024} className="relative w-full h-auto object-cover rounded-2xl sm:rounded-3xl border border-border float-slow shadow-xl" />
          <div className="glass absolute -bottom-3 -left-2 sm:-bottom-6 sm:-left-4 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg">
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Focus</p>
            <p className="font-display text-xs sm:text-sm font-semibold">Strategy · Content · Growth</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfilePhoto() {
  return (
    <div className="glass relative aspect-[4/5] w-full max-w-[360px] sm:max-w-[420px] lg:max-w-none mx-auto overflow-hidden rounded-2xl sm:rounded-3xl border border-cyan/30 shadow-[0_12px_40px_0_rgba(6,182,212,0.18)] select-none">
      <img
        src={vedantPhoto}
        alt="Vedant Miniyar — Digital Marketer"
        width={760}
        height={950}
        className="h-full w-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80 pointer-events-none" />
      <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between gap-2 rounded-xl bg-background/80 px-4 py-2.5 backdrop-blur-md border border-cyan/25 shadow-lg pointer-events-none">
        <div>
          <p className="font-display text-xs sm:text-sm font-semibold text-foreground">Vedant Miniyar</p>
          <p className="text-[10px] sm:text-[11px] text-cyan font-medium">Digital Marketer · Pune</p>
        </div>
      </div>
    </div>
  );
}

export function About() {
  const strengths = ["Strategic thinking", "Creative content", "Brand consistency", "Audience-focused marketing", "Affordable solutions", "Professional communication"];
  return (
    <Section id="about">
      {/* Bio / Introduction */}
      <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2">
        <ProfilePhoto />
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <Eyebrow>About us</Eyebrow>
            <a
              href="https://www.instagram.com/vedu_mnr10?mdxt=cmMwOTY3OHNwZzh6&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1 text-[11px] font-medium text-cyan hover:border-cyan hover:bg-card transition-all group shadow-sm"
              aria-label="Instagram profile"
            >
              <Instagram className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">@vedu_mnr10</span>
            </a>
          </div>
          <h2 className="text-[clamp(1.75rem,3.8vw,3.15rem)] font-semibold leading-[1.12] tracking-tight">
            More Than Marketing. <span className="font-serif font-normal italic text-gradient">A Partner</span> in Your Growth.
          </h2>
          <p className="mt-3.5 sm:mt-5 text-[clamp(0.925rem,1.4vw,1.125rem)] leading-relaxed text-muted-foreground">
            I'm Vedant Miniyar, a digital marketing strategist and brand growth specialist dedicated to turning visionary businesses into market leaders. By combining high-impact creative storytelling with data-backed performance campaigns, I build digital ecosystems that captivate your ideal audience, amplify brand authority, and drive predictable, sustainable growth.
          </p>
          <ul className="mt-6 grid gap-2.5 sm:gap-3 grid-cols-1 sm:grid-cols-2">
            {strengths.map((s) => <li key={s} className="glass flex items-center gap-3 rounded-xl px-4 py-3 text-sm"><Check className="h-4 w-4 shrink-0 text-cyan" /><span>{s}</span></li>)}
          </ul>
        </div>
      </div>

      {/* Services Sub-Section cleanly placed right below */}
      <div className="mt-20 sm:mt-28 border-t border-border pt-16 sm:pt-20">
        <SectionHead eyebrow="Services" title={<>Everything Your Brand Needs to <span className="text-gradient">Grow Digitally.</span></>}
          desc="From engaging content to online visibility and potential customers — affordable digital marketing tailored to your business." />
        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon] ?? Sparkles;
            return (
              <article key={s.id} className="glass group relative overflow-hidden rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity group-hover:opacity-30" />
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-cyan"><Icon className="h-5 w-5" /></span>
                  <span className="font-display text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {s.items.map((it) => <li key={it} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" /><span>{it}</span></li>)}
                </ul>
              </article>
            );
          })}
        </div>
        <div className="glass mt-8 sm:mt-10 flex items-center justify-center rounded-2xl sm:rounded-3xl p-8 sm:p-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-brand px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-glow hover:brightness-110 transition-transform hover:-translate-y-0.5"
          >
            Get a custom marketing plan
          </a>
        </div>
      </div>
    </Section>
  );
}

export function Pricing() {
  const highlights = ["Budget-friendly freelance services", "Customizable packages", "Individual services available", "Transparent scope & pricing", "Professional delivery"];
  return (
    <Section id="pricing">
      <SectionHead eyebrow="Pricing" title={<>Professional Marketing. Practical Pricing. <span className="text-gradient">Built Around Your Budget.</span></>}
        desc="Growing your business online shouldn't require an agency-sized budget. Flexible, affordable solutions with professional execution and a strategy tailored to you." />
      <ul className="mb-8 sm:mb-12 flex flex-wrap justify-center gap-1.5 sm:gap-2">
        {highlights.map((h) => <li key={h} className="rounded-full border border-border bg-card/50 px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs text-muted-foreground">{h}</li>)}
      </ul>
      <div className="mx-auto max-w-3xl lg:max-w-[780px]">
        <div className="grid gap-5 sm:gap-5.5 grid-cols-1 sm:grid-cols-2 items-stretch">
          {plans.map((p) => (
            <article
              key={p.name}
              className={cn(
                "glass relative flex flex-col justify-between h-full rounded-2xl p-5 sm:p-5.5 transition-all duration-300 border border-border/70 hover:border-cyan/40",
                p.featured && "border-cyan/50 shadow-glow"
              )}
            >
              {p.featured && (
                <span className="absolute -top-2.5 left-5 rounded-full bg-gradient-brand px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-primary-foreground shadow-sm">
                  Most popular
                </span>
              )}
              
              {/* Compact header with standardized typography & baselines */}
              <div className="flex flex-col flex-1">
                <p className="text-[10.5px] uppercase tracking-[0.18em] text-cyan font-medium">{p.name}</p>
                <h3 className="mt-1 text-base sm:text-lg font-bold tracking-tight text-foreground min-h-[2.25rem] sm:min-h-[2.5rem] flex items-center">
                  {p.tagline}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed min-h-[2.5rem] sm:min-h-[2.75rem] flex items-start">
                  {p.audience}
                </p>
                
                <div className="mt-3 pb-2.5 border-b border-border/50">
                  <p className="text-base sm:text-lg font-bold tracking-tight text-foreground whitespace-nowrap">
                    {p.price || "Custom quote"}
                  </p>
                </div>

                <ul className="mt-3 space-y-2 text-xs flex-1">
                  {p.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 leading-relaxed text-foreground/90">
                      <Check className="h-3.5 w-3.5 shrink-0 text-cyan mt-0.5 stroke-[2.2]" />
                      <span className="flex-1 text-[12px] sm:text-[12.5px]">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compact bottom section: metrics & button */}
              <div className="mt-4 flex flex-col">
                <dl className="grid grid-cols-2 gap-2 border-t border-border/60 pt-3 text-[11px]">
                  {[["Content", p.content], ["Platforms", p.platforms], ["Timeline", p.timeline], ["Revisions", p.revisions]].map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">{k}</dt>
                      <dd className="mt-0.5 font-medium text-foreground text-[11.5px]">{v}</dd>
                    </div>
                  ))}
                </dl>
                <a
                  href="#contact"
                  className={cn(
                    "inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 mt-4 w-full text-center",
                    p.featured
                      ? "bg-gradient-brand text-primary-foreground shadow-glow hover:brightness-110"
                      : "border border-border bg-card/40 text-foreground hover:border-cyan/60 hover:bg-card"
                  )}
                >
                  Find your package
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
      <p className="mt-8 sm:mt-10 text-center font-serif text-xl sm:text-2xl italic">Flexible solutions. Clear deliverables. Professional service.</p>
      <p className="mt-2 sm:mt-3 text-center text-xs text-muted-foreground">Ad spend, paid tools and external production charges are billed separately.</p>
    </Section>
  );
}

function MediaLightbox({
  item,
  onClose,
}: {
  item: MediaItem | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6 sm:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-h-[94vh] max-w-[94vw] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close full-screen lightbox"
          className="absolute -top-12 sm:-top-14 right-0 grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-md transition-all border border-white/20 shadow-xl cursor-pointer hover:scale-105 active:scale-95"
        >
          <X className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* Media Container */}
        <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-black/85 shadow-2xl flex items-center justify-center max-h-[82vh] max-w-[92vw]">
          {item.type === "video" ? (
            <video
              src={item.src}
              controls
              playsInline
              loop
              preload="auto"
              className="max-h-[80vh] max-w-[90vw] w-auto h-auto object-contain rounded-2xl outline-none"
            />
          ) : (
            <img
              src={item.src}
              alt={item.title}
              className="max-h-[80vh] max-w-[90vw] w-auto h-auto object-contain rounded-2xl select-none"
            />
          )}
        </div>

        {/* Bottom Metadata Bar */}
        <div className="mt-3 sm:mt-4 flex items-center justify-between w-full px-2 text-white">
          <div className="flex items-center gap-2.5">
            <span className="rounded-full bg-cyan/20 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-cyan border border-cyan/40">
              {item.badge}
            </span>
            <p className="font-display text-sm sm:text-base font-semibold drop-shadow-md text-foreground">{item.title}</p>
          </div>
          <span className="text-[11px] text-muted-foreground hidden sm:inline">Press Esc or click outside to close</span>
        </div>
      </div>
    </div>
  );
}

function ShowcaseCard({
  item,
  onOpenLightbox,
}: {
  item: MediaItem;
  onOpenLightbox: (item: MediaItem) => void;
}) {
  return (
    <div
      onClick={() => onOpenLightbox(item)}
      className={cn(
        "glass group relative shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden border border-border/80 hover:border-cyan/50 shadow-xl transition-all duration-300 select-none cursor-pointer flex flex-col justify-between",
        item.type === "video"
          ? "w-[240px] sm:w-[280px] md:w-[310px] h-[380px] sm:h-[440px] md:h-[480px]"
          : "w-[300px] sm:w-[380px] md:w-[440px] h-[300px] sm:h-[380px] md:h-[440px] aspect-square"
      )}
    >
      {/* Media content */}
      {item.type === "video" ? (
        <div className="relative h-full w-full bg-black/80 flex items-center justify-center overflow-hidden">
          <video
            src={item.src}
            muted
            playsInline
            loop
            preload="metadata"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Center Play Button Overlay Cue (paused by default in carousel) */}
          <div className="absolute inset-0 bg-background/25 flex flex-col items-center justify-center gap-2.5 transition-all group-hover:bg-background/15">
            <div className="grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow group-hover:scale-110 transition-transform">
              <Play className="h-6 w-6 sm:h-7 sm:w-7 fill-current ml-0.5 text-white" />
            </div>
            <span className="rounded-full bg-background/90 px-3 py-1 text-[11px] font-semibold text-cyan backdrop-blur-md border border-cyan/30 shadow-md">
              Click to Enlarge
            </span>
          </div>
        </div>
      ) : (
        /* Image: Strict Square Layout (1:1) with full image visible without cropping */
        <div className="relative h-full w-full bg-card/75 flex items-center justify-center p-3 sm:p-5 overflow-hidden">
          <img
            src={item.src}
            alt={item.title}
            loading="lazy"
            className="max-h-full max-w-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105"
          />

          {/* Hover Overlay with Cue */}
          <div className="absolute inset-0 bg-background/25 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 backdrop-blur-[2px]">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow group-hover:scale-110 transition-transform">
              <Maximize2 className="h-5 w-5 text-white" />
            </div>
            <span className="rounded-full bg-background/90 px-3 py-1 text-[11px] font-semibold text-cyan backdrop-blur-md border border-cyan/30 shadow-md">
              Click to Enlarge
            </span>
          </div>
        </div>
      )}

      {/* Top Tag Badge */}
      <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-background/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan border border-cyan/30 backdrop-blur-md shadow-md">
          {item.type === "video" ? <Video className="h-3 w-3 text-cyan" /> : <Sparkles className="h-3 w-3 text-cyan" />}
          {item.badge}
        </span>
      </div>

      {/* Bottom Title Scrim */}
      <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 bg-gradient-to-t from-background/95 via-background/70 to-transparent pointer-events-none">
        <p className="font-display text-sm sm:text-base font-semibold text-foreground line-clamp-1">{item.title}</p>
        <p className="text-[11px] text-muted-foreground mt-0.5">
          {item.type === "video" ? "Click to Enlarge Video" : "Click to Enlarge Visual"}
        </p>
      </div>
    </div>
  );
}

export function Showcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const [offsets, setOffsets] = useState<number[]>([]);

  const total = showcaseMedia.length;
  // Duplicate list to achieve continuous seamless loop
  const displayItems = useMemo(() => [...showcaseMedia, ...showcaseMedia], []);

  // Pre-calculate exact offsets for instantaneous, zero-lag arrow navigation
  const defaultOffsets = useMemo(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
    const isTablet = typeof window !== "undefined" && window.innerWidth < 1024;
    const gap = isMobile ? 16 : 20;
    let currentX = 0;
    return displayItems.map((item) => {
      const x = currentX;
      const width = item.type === "video"
        ? (isMobile ? 240 : isTablet ? 280 : 310)
        : (isMobile ? 300 : isTablet ? 380 : 440);
      currentX += width + gap;
      return x;
    });
  }, [displayItems]);

  useEffect(() => {
    const updateOffsets = () => {
      if (!trackRef.current) return;
      const children = Array.from(trackRef.current.children) as HTMLElement[];
      const gap = window.innerWidth < 640 ? 16 : 20;
      let currentX = 0;
      const newOffsets: number[] = [];
      children.forEach((child) => {
        newOffsets.push(currentX);
        currentX += child.offsetWidth + gap;
      });
      setOffsets(newOffsets);
    };

    updateOffsets();
    window.addEventListener("resize", updateOffsets);
    const timer = setTimeout(updateOffsets, 150);
    return () => {
      window.removeEventListener("resize", updateOffsets);
      clearTimeout(timer);
    };
  }, [displayItems]);

  // Continuous auto-advance timer (sliding right to left uninterrupted every 2 seconds)
  useEffect(() => {
    if (selectedMedia !== null) return; // Pause auto-sliding only while full-screen lightbox is actively open
    const interval = setInterval(() => {
      setTransitionEnabled(true);
      setCurrentIndex((prev) => (prev >= total ? 1 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [selectedMedia, total]);

  // Seamless wrap-around after passing total items
  useEffect(() => {
    if (currentIndex >= total) {
      const timer = setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(0);
      }, 550);
      return () => clearTimeout(timer);
    } else if (!transitionEnabled) {
      const frame = requestAnimationFrame(() => setTransitionEnabled(true));
      return () => cancelAnimationFrame(frame);
    }
  }, [currentIndex, total, transitionEnabled]);

  const handleNext = () => {
    setTransitionEnabled(true);
    setCurrentIndex((prev) => {
      if (prev >= total) return 1;
      return prev + 1;
    });
  };

  const handlePrev = () => {
    setTransitionEnabled(true);
    setCurrentIndex((prev) => {
      if (prev <= 0) return total - 1;
      return prev - 1;
    });
  };

  const currentTranslateX = offsets[currentIndex] ?? defaultOffsets[currentIndex] ?? (currentIndex * 350);

  return (
    <Section id="content" className="bg-surface overflow-hidden">
      {/* Section Header */}
      <div className="mb-8 sm:mb-10">
        <SectionHead
          eyebrow="Content"
          title={<>Your Brand's Voice. Your Story. <span className="font-serif font-normal italic text-gradient">Your Content.</span></>}
          desc="Content built around your brand identity, audience, communication style and goals — interactive videos, reels, and high-impact creatives."
        />
      </div>

      {/* Continuous Carousel Track (Sliding uninterrupted) */}
      <div className="relative w-full overflow-hidden py-2">
        <div
          ref={trackRef}
          style={{
            transform: `translate3d(-${currentTranslateX}px, 0, 0)`,
            transition: transitionEnabled ? "transform 550ms cubic-bezier(0.16, 1, 0.3, 1)" : "none",
          }}
          className="flex items-center gap-4 sm:gap-5 will-change-transform min-h-[320px] sm:min-h-[400px] md:min-h-[490px]"
        >
          {displayItems.map((item, idx) => (
            <ShowcaseCard
              key={`${item.id}-${idx}`}
              item={item}
              onOpenLightbox={(media) => setSelectedMedia(media)}
            />
          ))}
        </div>
      </div>

      {/* Relocated Navigation Arrows & Indicators Directly Below Media Cards */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 px-1">
        <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan border border-cyan/30">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
            Creative {(currentIndex % total) + 1} of {total}
          </span>
          <span className="text-muted-foreground italic font-serif hidden sm:inline">
            Click any image or video to open full-screen lightbox
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card/80 text-foreground hover:border-cyan hover:text-cyan hover:bg-card hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer touch-manipulation"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card/80 text-foreground hover:border-cyan hover:text-cyan hover:bg-card hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer touch-manipulation"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Lightbox / Modal */}
      <MediaLightbox
        item={selectedMedia}
        onClose={() => setSelectedMedia(null)}
      />
    </Section>
  );
}

export const clientProjects = [
  {
    company: "Medihymns Pharma",
    logo: medihymnsLogo,
    logoScale: "scale-[2.2]",
    services: ["Content Creation", "SEO", "Social Media", "Paid Advertising", "Lead Generation"],
  },
  {
    company: "Meditune Lifesciences",
    logo: medituneLogo,
    logoScale: "scale-100",
    services: ["Content Creation", "SEO", "Branding", "Social Media", "Paid Advertising", "Lead Generation"],
  },
  {
    company: "Harmonys Healthcare",
    logo: harmonysLogo,
    logoScale: "scale-100",
    services: ["Content Creation", "SEO", "Branding", "Social Media", "Paid Advertising", "Lead Generation"],
  },
];

export function Portfolio() {
  return (
    <Section id="portfolio">
      <SectionHead
        eyebrow="Portfolio & Client Work"
        title={<>Featured Client Projects. <span className="text-gradient">Real Impact.</span></>}
        desc="A showcase of healthcare and lifesciences brands partnering with me for strategic growth, search visibility, brand identity, and high-converting marketing campaigns."
      />
      <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {clientProjects.map((p, idx) => (
          <article
            key={p.company}
            className="glass group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-border/80 hover:border-cyan/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_16px_48px_0_rgba(6,182,212,0.18)]"
          >
            <div>
              {/* Card Meta Badge */}
              <div className="flex items-center justify-between gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan/10 border border-cyan/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyan">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                  Client Project
                </span>
                <span className="font-mono text-xs text-muted-foreground/70">0{idx + 1}</span>
              </div>

              {/* Client Logo in White Presentation Box */}
              <div className="rounded-2xl bg-white p-4 sm:p-5 flex items-center justify-center h-32 sm:h-36 overflow-hidden shadow-inner border border-white/20 group-hover:scale-[1.02] transition-transform duration-300">
                <img
                  src={p.logo}
                  alt={`${p.company} Logo`}
                  className={cn("max-h-full max-w-full object-contain", p.logoScale)}
                />
              </div>

              {/* Company Name */}
              <h3 className="mt-5 text-xl sm:text-2xl font-display font-bold text-foreground group-hover:text-cyan transition-colors">
                {p.company}
              </h3>

              {/* Formatted Services Provided List / Tags */}
              <div className="mt-5 pt-4 border-t border-border/60">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Services Provided
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.services.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-cyan/25 bg-cyan/10 px-2.5 py-1 text-xs font-medium text-sky-100 transition-colors hover:border-cyan/40 hover:bg-cyan/20"
                    >
                      <Check className="h-3 w-3 text-cyan shrink-0" />
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs">
              <span className="text-muted-foreground font-medium">Digital Marketing & Growth</span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-cyan hover:underline font-semibold"
              >
                Discuss Project <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Metrics() {
  const mIcons = [Eye, TrendingUp, Target, Activity, MousePointerClick, BarChart3];
  return (
    <Section className="bg-surface">
      <SectionHead eyebrow="Metrics I Track" title={<>Focus on Progress, <span className="text-gradient">Not Just Numbers.</span></>}
        desc="Every campaign is measured against what matters to your business." />
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 md:gap-5">
        {metrics.map((m, i) => {
          const I = mIcons[i] ?? Eye;
          return (
            <div key={m} className="glass rounded-2xl p-4 sm:p-6 flex flex-col justify-between">
              <I className="h-5 w-5 sm:h-6 sm:w-6 text-cyan" />
              <p className="mt-3 sm:mt-4 font-display font-semibold text-xs sm:text-base leading-snug">{m}</p>
            </div>
          );
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
      <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => {
          const I = rIcons[i] ?? Wallet;
          return (
            <div key={r.t} className="glass rounded-2xl p-5 sm:p-7 transition-colors hover:border-cyan/40">
              <span className="grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-2xl bg-gradient-brand"><I className="h-5 w-5" /></span>
              <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-semibold">{r.t}</h3>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">{r.d}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <Section>
      <SectionHead eyebrow="Testimonials" title="Trust Is Built Through Good Work." />
      <div className="grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-2">
        {testimonials.map((t) => (
          <figure key={t.name} className="glass rounded-2xl p-5 sm:p-7">
            <Quote className="h-6 w-6 text-cyan" />
            <blockquote className="mt-4 text-base sm:text-lg leading-relaxed">{t.feedback}</blockquote>
            <figcaption className="mt-4 sm:mt-5 text-xs sm:text-sm text-muted-foreground">{t.name} · {t.brand}</figcaption>
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
      <Accordion type="single" collapsible className="mx-auto w-full max-w-[95%] sm:max-w-3xl">
        {faqs.map((f, i) => (
          <AccordionItem key={f.q} value={`f${i}`} className="border-border">
            <AccordionTrigger className="py-4 sm:py-5 text-left font-display text-sm sm:text-base hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}

const inputCls = "w-full rounded-xl border border-input bg-background/60 px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm placeholder:text-muted-foreground focus:border-cyan focus:outline-none transition-colors";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const accessKey = import.meta.env["VITE_WEB3FORMS_ACCESS_KEY"];
    if (!accessKey) {
      setStatus("error");
      setErrorMessage("Contact form is temporarily unavailable (Web3Forms access key not configured). Please reach out directly via WhatsApp or email.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const formData = new FormData(form);
      formData.set("access_key", accessKey);

      // Web3Forms botcheck honeypot check
      if (formData.get("botcheck")) {
        setStatus("success");
        setSuccessMessage("Thank you! Your message has been received.");
        form.reset();
        return;
      }

      const payload = Object.fromEntries(formData.entries());

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setSuccessMessage("Thank you! Your project enquiry has been submitted successfully. I will get back to you shortly.");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong while sending your message. Please try again or reach out via WhatsApp/email.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("A network error occurred. Please check your connection and try again.");
    }
  }

  function viaEmail(form: HTMLFormElement | null) {
    if (!form) return;
    const d = new FormData(form);
    const get = (k: string) => String(d.get(k) ?? "").trim().slice(0, 1000);
    const text = [
      `New project enquiry`,
      `Name: ${get("name")}`,
      `Business: ${get("business")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Services: ${get("services")}`,
      `Budget: ${get("budget")}`,
      `Goals: ${get("goals")}`,
      `Message: ${get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Project enquiry")}&body=${encodeURIComponent(text)}`;
  }

  return (
    <Section id="contact">
      <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1fr_1.3fr] items-start">
        <div>
          <SectionHead center={false} eyebrow="Contact" title={<>Let's Turn Your Ideas Into Your Next <span className="text-gradient">Growth Opportunity.</span></>}
            desc="Tell me about your business, the challenges you're facing, and what you'd like to achieve." />
          <div className="glass space-y-3.5 sm:space-y-4 rounded-2xl p-5 sm:p-6 text-sm">
            <p className="font-display text-base sm:text-lg font-semibold">{profile.name}</p>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-cyan transition-colors break-all"><Mail className="h-4 w-4 shrink-0 text-cyan" /><span>{profile.email}</span></a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-cyan transition-colors"><Phone className="h-4 w-4 shrink-0 text-cyan" /><span>{profile.phone}</span></a>
            <p className="flex items-center gap-3"><MapPin className="h-4 w-4 shrink-0 text-cyan" /><span>{profile.location}</span></p>
          </div>
          <div className="mt-5 sm:mt-6">
            <Cta href={waLink()} variant="ghost" className="w-full sm:w-auto">Chat with me on WhatsApp</Cta>
          </div>
        </div>
        <form ref={formRef} id="contact-form" onSubmit={onSubmit} className="glass grid gap-3.5 sm:gap-4 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 grid-cols-1 sm:grid-cols-2">
          {/* Web3Forms Configuration & Spam Protection */}
          <input type="hidden" name="subject" value="New Portfolio Project Enquiry" />
          <input type="hidden" name="from_name" value="Portfolio Website" />
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

          <input
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={100}
            placeholder="Full Name *"
            className={inputCls}
            aria-label="Full name"
          />
          <input
            name="business"
            type="text"
            required
            maxLength={100}
            placeholder="Business Name *"
            className={inputCls}
            aria-label="Business name"
          />
          <input
            name="email"
            type="email"
            required
            maxLength={150}
            placeholder="Email Address *"
            className={inputCls}
            aria-label="Email"
          />
          <input
            name="phone"
            type="tel"
            required
            minLength={7}
            maxLength={20}
            pattern="[0-9+\s\-()]{7,20}"
            title="Please enter a valid phone number (at least 7 digits)"
            placeholder="Phone or WhatsApp *"
            className={inputCls}
            aria-label="Phone"
          />
          <select name="services" required className={inputCls} aria-label="Services required" defaultValue="">
            <option value="" disabled>Services Required *</option>
            {services.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
            <option value="Not sure yet">Not sure yet</option>
          </select>
          <select name="budget" required className={inputCls} aria-label="Approximate budget" defaultValue="">
            <option value="" disabled>Approximate Budget *</option>
            <option value="Under ₹10,000 / month">Under ₹10,000 / month</option>
            <option value="₹10,000 – ₹25,000 / month">₹10,000 – ₹25,000 / month</option>
            <option value="₹25,000 – ₹50,000 / month">₹25,000 – ₹50,000 / month</option>
            <option value="₹50,000+ / month">₹50,000+ / month</option>
            <option value="One-time project">One-time project</option>
          </select>
          <input
            name="goals"
            type="text"
            required
            maxLength={300}
            placeholder="Project Goals *"
            className={cn(inputCls, "sm:col-span-2")}
            aria-label="Project goals"
          />
          <textarea
            name="message"
            required
            minLength={10}
            maxLength={1000}
            rows={5}
            placeholder="Message *"
            className={cn(inputCls, "sm:col-span-2")}
            aria-label="Message"
          />

          {status === "error" && errorMessage && (
            <p role="alert" className="text-sm text-destructive sm:col-span-2">{errorMessage}</p>
          )}
          {status === "success" && successMessage && (
            <p role="status" className="text-sm text-success sm:col-span-2">{successMessage}</p>
          )}

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:col-span-2 w-full">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] shadow-glow hover:brightness-110 transition-transform active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>Sending... <Loader2 className="h-4 w-4 animate-spin" /></>
              ) : (
                <>Let's discuss my project <ArrowRight className="h-4 w-4" /></>
              )}
            </button>
            <button
              type="button"
              onClick={(e) => viaEmail(e.currentTarget.form)}
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-border px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] hover:border-cyan/60 transition-colors"
            >
              Send by email instead
            </button>
          </div>
          <p className="text-xs text-muted-foreground sm:col-span-2">Your details are sent securely via Web3Forms — nothing is stored on this website.</p>
        </form>
      </div>
    </Section>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden px-[4%] sm:px-[5%] py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-brand gradient-shift opacity-90" />
      <div className="absolute inset-0 grid-bg" />
      <div className="relative mx-auto w-[94%] sm:w-[92%] max-w-5xl text-center">
        <h2 className="text-[clamp(1.75rem,5.2vw,4.25rem)] font-bold uppercase leading-[1.08]">Your Brand. My Strategy. Real Growth.</h2>
        <p className="mt-4 sm:mt-6 text-[clamp(1rem,1.5vw,1.25rem)] leading-relaxed">Affordable Pricing. Professional Execution. Creative Content.</p>
        <div className="mt-8 sm:mt-10">
          <a href="#contact" className="inline-flex w-full sm:w-auto justify-center rounded-full bg-background px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-foreground shadow-lg transition-transform hover:-translate-y-0.5">Let's build your brand together.</a>
        </div>
      </div>
    </section>
  );
}
