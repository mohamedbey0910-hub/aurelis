"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed left-1/2 top-7 z-50 w-[min(1100px,92vw)] -translate-x-1/2 rounded-full transition-all duration-500",
          scrolled
            ? "border border-dark-line bg-dark-bg/60 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
            : "border border-transparent bg-transparent"
        )}
      >
        <div className="flex items-center justify-between px-6 py-3 md:px-8">
          <Link
            href="/"
            className={cn(
              "font-serif text-lg tracking-[0.12em] transition-colors",
              scrolled ? "text-dark-text" : "text-text"
            )}
          >
            {site.name}
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300",
                  scrolled
                    ? "text-dark-text-dim hover:bg-white/[0.06] hover:text-accent-light"
                    : "text-text-dim hover:bg-black/[0.04] hover:text-accent-dim"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="/boutique" variant={scrolled ? "primary" : "primary"} dark={scrolled}>
              Boutique
            </Button>
          </div>

          <button
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full md:hidden",
              scrolled ? "text-dark-text" : "text-text"
            )}
          >
            <span
              className={cn(
                "block h-px w-5 bg-current transition-transform duration-300",
                open && "translate-y-[3.5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-px w-5 bg-current transition-transform duration-300",
                open && "-translate-y-[3.5px] -rotate-45"
              )}
            />
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-dark-bg transition-opacity duration-500 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
            className={cn(
              "font-serif text-3xl text-dark-text transition-all duration-500",
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/boutique"
          style={{ transitionDelay: open ? `${navLinks.length * 60}ms` : "0ms" }}
          className={cn(
            "mt-4 rounded-full bg-accent px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-dark-bg transition-all duration-500",
            open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}
        >
          Boutique
        </Link>
      </div>
    </>
  );
}
