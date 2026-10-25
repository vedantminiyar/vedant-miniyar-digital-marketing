import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowUp, Menu, MessageCircle, X, Mail, MapPin, Phone } from "lucide-react";
import { profile, waLink } from "@/content/site";
import dmLogo from "@/assets/dm logo.png";
import whatsappIconImg from "@/assets/whatsapp icon.jpg";
import { Cta } from "./ui";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
] as const;

function scrollToSection(href: string) {
  const targetId = href.replace(/^#/, "");
  if (targetId === "home" || !targetId) {
    if (window.location.pathname === "/" || window.location.pathname === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const targetEl = document.getElementById("home");
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
      window.history.pushState(null, "", "#home");
      return;
    }
  }

  const targetEl = document.getElementById(targetId);
  if (targetEl) {
    targetEl.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", href);
  } else {
    window.location.href = `/${href}`;
  }
}

function Logo({ onNavigate }: { onNavigate?: () => void }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigate?.();
    scrollToSection("#home");
  };

  return (
    <a
      href="#home"
      onClick={handleClick}
      className="group flex items-center gap-3 cursor-pointer select-none"
      aria-label="Vedant Miniyar — Return to top of Home page"
      title="Vedant Miniyar — Back to Home"
    >
      <img
        src={dmLogo}
        alt="Vedant Miniyar Digital Marketing"
        width={44}
        height={44}
        className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover shadow-md transition-transform duration-200 group-hover:scale-105 group-hover:shadow-glow border border-sky-400/30"
      />
      <span className="font-display text-sm font-semibold text-foreground transition-colors duration-200 group-hover:text-cyan sm:block">
        Vedant Miniyar
      </span>
    </a>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ["home", "about", "portfolio", "pricing", "contact"];
      const scrollPos = window.scrollY + 140;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(`#${sectionIds[i]}`);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    scrollToSection(href);
    setActiveSection(href);
  };

  return (
    <header className={cn(
      "fixed inset-x-0 top-0 z-50 transition-all duration-300 backdrop-blur-2xl border-b border-sky-300/40 shadow-[0_8px_32px_0_rgba(56,189,248,0.25)]",
      scrolled
        ? "bg-sky-500/30 border-sky-300/50 shadow-[0_12px_40px_0_rgba(56,189,248,0.32)]"
        : "bg-sky-400/20 bg-gradient-to-r from-sky-400/25 via-cyan-400/20 to-sky-400/25"
    )}>
      <nav className="relative mx-auto flex h-16 sm:h-20 w-[94%] sm:w-[92%] lg:w-[90%] max-w-7xl items-center justify-between py-3 sm:py-4" aria-label="Main">
        <Logo onNavigate={() => setOpen(false)} />
        <ul className="hidden items-center gap-1.5 lg:flex lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => handleLinkClick(e, l.href)}
                className={cn(
                  "px-4 py-2 text-sm transition-all duration-200 inline-block",
                  activeSection === l.href
                    ? "font-bold text-white bg-sky-400/35 border border-sky-200/70 rounded-full shadow-md shadow-sky-400/30"
                    : "text-white/90 hover:text-white hover:bg-sky-300/20 rounded-full"
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="rounded-xl p-2.5 text-white hover:text-white hover:bg-sky-300/25 transition-colors lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div className="w-full px-[5%] pb-6 lg:hidden max-h-[calc(100vh-5rem)] overflow-y-auto backdrop-blur-2xl bg-sky-900/80 border-b border-sky-300/40 shadow-2xl">
          <ul className="flex flex-col gap-1.5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => handleLinkClick(e, l.href)}
                  className={cn(
                    "block px-4 py-3 text-base transition-colors",
                    activeSection === l.href
                      ? "font-bold text-white bg-sky-400/35 border border-sky-200/70 rounded-xl shadow-sm"
                      : "text-white/90 hover:bg-sky-300/20 hover:text-white rounded-xl"
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function Footer() {
  const handleFooterLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <footer className="border-t border-border bg-surface px-[4%] sm:px-[5%] py-12 sm:py-16">
      <div className="mx-auto grid w-[94%] sm:w-[92%] lg:w-[90%] max-w-7xl gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">{profile.subTagline}</p>
        </div>
        <ul className="grid grid-cols-2 gap-2.5 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => handleFooterLinkClick(e, l.href)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li><a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-foreground transition-colors break-all"><Mail className="h-4 w-4 shrink-0 text-cyan" />{profile.email}</a></li>
          <li><a href={`tel:${profile.phone}`} className="flex items-center gap-2 hover:text-foreground transition-colors"><Phone className="h-4 w-4 shrink-0 text-cyan" />{profile.phone}</a></li>
          <li className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0 text-cyan" />{profile.location}</li>
          {profile.linkedin && <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a></li>}
          {profile.instagram && <li><a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Instagram</a></li>}
        </ul>
      </div>
      <div className="mx-auto mt-10 sm:mt-12 w-[94%] sm:w-[92%] lg:w-[90%] max-w-7xl border-t border-border pt-6 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p className="font-serif italic">{profile.tagline}</p>
      </div>
    </footer>
  );
}

function FloatingContactWidget() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const on = () => setShowTop(window.scrollY > 600);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-center gap-2 sm:gap-2.5 select-none"
      aria-label="Quick Contact Widget"
    >
      {/* Scroll to top button */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="glass grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full text-foreground hover:border-cyan/60 hover:text-cyan transition-all hover:scale-105 active:scale-95 shadow-md mb-0.5 cursor-pointer"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}

      {/* Permanent, continuously floating vertical contact widget */}
      <div className="flex flex-col items-center gap-2 sm:gap-2.5 p-1.5 sm:p-2 rounded-2xl sm:rounded-full bg-card/85 backdrop-blur-xl border border-sky-400/35 shadow-[0_10px_35px_rgba(0,0,0,0.55)]">
        {/* 1. Call Button */}
        <a
          href="tel:+918446342598"
          aria-label="Call Vedant Miniyar"
          title="Call: +91 8446342598"
          className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full bg-sky-500/20 text-cyan border border-cyan/40 hover:bg-sky-500 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-md cursor-pointer group"
        >
          <Phone className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:rotate-12" />
        </a>

        {/* 2. WhatsApp Button */}
        <a
          href="https://wa.me/918446342598"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          title="WhatsApp: +91 8446342598"
          className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full bg-white overflow-hidden shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:brightness-105 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group p-1"
        >
          <img
            src={whatsappIconImg}
            alt="WhatsApp"
            className="h-full w-full object-contain rounded-full transition-transform group-hover:scale-105"
          />
        </a>

        {/* 3. Email Button */}
        <a
          href="mailto:miniyarvedantt@gmail.com"
          aria-label="Email Vedant Miniyar"
          title="Email: miniyarvedantt@gmail.com"
          className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full bg-gradient-brand text-primary-foreground hover:brightness-110 transition-all duration-300 hover:scale-110 active:scale-95 shadow-[0_4px_16px_rgba(37,99,235,0.4)] cursor-pointer group"
        >
          <Mail className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
      <FloatingContactWidget />
    </>
  );
}
