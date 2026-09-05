"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap-config";

// Magnetic wraps a plain <a> / <button> only — never a Next.js <Link>,
// which handles its own click/navigation and conflicts with the
// mousemove/mouseleave handlers here.
export function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    gsap.to(el, {
      x: relX * 0.3,
      y: relY * 0.3,
      duration: 0.5,
      ease: "power3.out",
    });
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.5)" });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-block will-change-transform"
    >
      {children}
    </div>
  );
}
