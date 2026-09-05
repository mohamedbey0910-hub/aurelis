"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsap } from "@/lib/gsap-config";
import { cn } from "@/lib/utils";

type HorizontalPinProps = {
  children: React.ReactNode;
  className?: string;
  trackClassName?: string;
};

export function HorizontalPin({
  children,
  className,
  trackClassName,
}: HorizontalPinProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      registerGsap();
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 900px)", () => {
        const distance = track.scrollWidth - section.clientWidth;
        if (distance <= 0) return;

        const tween = gsap.to(track, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance}`,
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef} className={cn("overflow-hidden md:overflow-visible", className)}>
      <div
        ref={trackRef}
        className={cn(
          "flex gap-8 overflow-x-auto md:overflow-visible md:will-change-transform",
          "snap-x snap-mandatory md:snap-none",
          trackClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
