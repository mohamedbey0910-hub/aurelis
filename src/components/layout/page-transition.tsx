"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "@/lib/gsap-config";

// A lightweight version of the "curtain" transition: rather than
// intercepting every <Link> click (fragile, and risks the exact
// Magnetic+Link conflict the anti-bug rules warn about), the curtain
// simply rises out of view on each new page. It reads as a deliberate
// reveal rather than a plain page load.
export function PageTransition() {
  const ref = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      gsap.set(el, { autoAlpha: 0 });
      return;
    }

    gsap.set(el, { yPercent: 0, autoAlpha: 1 });
    gsap.to(el, {
      yPercent: -100,
      duration: 0.9,
      delay: 0.1,
      ease: "cubic-bezier(0.77, 0, 0.18, 1)",
      onComplete: () => gsap.set(el, { autoAlpha: 0 }),
    });
  }, [pathname]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100]"
      style={{
        background:
          "linear-gradient(180deg, var(--accent-light) 0%, var(--accent) 45%, var(--accent-dim) 100%)",
      }}
    />
  );
}
