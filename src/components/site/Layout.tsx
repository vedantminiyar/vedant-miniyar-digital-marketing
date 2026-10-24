import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowUp, Menu, MessageCircle, X, Mail, MapPin, Phone } from "lucide-react";
import { profile, waLink } from "@/content/site";
import { Cta } from "./ui";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/pricing", label: "Pricing" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
] as const;

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Vedant Miniyar — home">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand font-display text-sm font-bold text-primary-foreground">VM</span>
      <span className="hidden font-display text-sm font-semibold sm:block">Vedant Miniyar</span>
    </Link>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled || open ? "glass border-x-0 border-t-0" : "border-b border-transparent")}>
      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 py-4" aria-label="Main">
        <Logo />
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }} activeOptions={{ exact: true }}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden lg:block"><Cta to="/contact" className="px-5 py-2.5">Let's grow your brand</Cta></div>
        <button className="rounded-lg p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="px-5 pb-6 lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.to}><Link to={l.to} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-base hover:bg-card">{l.label}</Link></li>
            ))}
          </ul>
          <Cta to="/contact" className="mt-4 w-full">Let's grow your brand</Cta>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-surface px-5 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">{profile.subTagline}</p>
        </div>
        <ul className="grid grid-cols-2 gap-2 text-sm">
          {links.map((l) => <li key={l.to}><Link to={l.to} className="text-muted-foreground hover:text-foreground">{l.label}</Link></li>)}
        </ul>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li><a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-foreground"><Mail className="h-4 w-4 text-cyan" />{profile.email}</a></li>
          <li><a href={`tel:${profile.phone}`} className="flex items-center gap-2 hover:text-foreground"><Phone className="h-4 w-4 text-cyan" />{profile.phone}</a></li>
          <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-cyan" />{profile.location}</li>
          {profile.linkedin && <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</a></li>}
          {profile.instagram && <li><a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Instagram</a></li>}
        </ul>
      </div>
      <p className="mx-auto mt-12 max-w-6xl border-t border-border pt-6 text-xs text-muted-foreground">© {new Date().getFullYear()} {profile.name}. {profile.tagline}</p>
    </footer>
  );
}

function Floaters() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {show && (
        <button onClick={() => window.scrollTo({ top: 0 })} aria-label="Back to top" className="glass grid h-11 w-11 place-items-center rounded-full hover:border-cyan/60">
          <ArrowUp className="h-4 w-4" />
        </button>
      )}
      <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="grid h-14 w-14 place-items-center rounded-full bg-success text-background shadow-glow transition-transform hover:scale-105">
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
      <Floaters />
    </>
  );
}
