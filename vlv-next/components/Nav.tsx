"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "/chateau", label: "Le Château" },
  { href: "/jardins", label: "Les Jardins" },
  { href: "/evenements", label: "Événements" },
  { href: "/visiter", label: "Visiter" },
  { href: "/les-amis", label: "Nous soutenir" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-5 py-4 md:px-10 md:py-6 transition-all duration-500 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-sm py-3 md:py-4 pointer-events-auto"
            : "pointer-events-none"
        }`}
      >
        <Link
          href="/"
          aria-label="Vaux-le-Vicomte — Accueil"
          className={`pointer-events-auto transition-colors duration-300 ${
            scrolled ? "text-navy" : "text-cream"
          }`}
        >
          <Logo className="h-8 md:h-10 w-auto" />
        </Link>

        <ul className="hidden md:flex gap-9 font-ui text-sm tracking-wide">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`pointer-events-auto relative pb-1 transition-colors duration-300 group ${
                  scrolled ? "text-navy" : "text-cream"
                }`}
              >
                {l.label}
                <span className="absolute left-0 bottom-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            className={`pointer-events-auto hidden md:inline-flex items-center gap-2 border px-7 py-3 text-xs tracking-wider uppercase font-ui transition-colors duration-300 ${
              scrolled
                ? "border-navy text-navy hover:bg-navy hover:text-cream"
                : "border-gold bg-gold text-navy hover:bg-navy hover:text-cream"
            }`}
          >
            Réserver
          </button>
          <button
            aria-label="Menu"
            onClick={() => setOpen(true)}
            className="pointer-events-auto md:hidden flex flex-col gap-[5px] p-1.5"
          >
            <span className={`w-6 h-px ${scrolled ? "bg-navy" : "bg-cream"}`} />
            <span className={`w-6 h-px ${scrolled ? "bg-navy" : "bg-cream"}`} />
            <span className={`w-6 h-px ${scrolled ? "bg-navy" : "bg-cream"}`} />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        className={`fixed inset-0 z-[1100] bg-navy flex flex-col items-center justify-center gap-7 p-5 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <button
          aria-label="Fermer le menu"
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center"
        >
          <span className="absolute w-[22px] h-px bg-cream rotate-45" />
          <span className="absolute w-[22px] h-px bg-cream -rotate-45" />
        </button>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="font-display text-2xl text-cream"
          >
            {l.label}
          </Link>
        ))}
        <button className="mt-2 border border-gold bg-gold text-navy px-8 py-3 text-xs tracking-wider uppercase font-ui">
          Réserver
        </button>
      </div>
    </>
  );
}
