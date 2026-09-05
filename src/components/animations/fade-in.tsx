"use client";

import { createElement, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsap } from "@/lib/gsap-config";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  as?: "div" | "li";
  stagger?: number;
  fold?: boolean;
};

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 48 },
  down: { y: -48 },
  left: { x: 48 },
  right: { x: -48 },
  none: {},
};

export function FadeIn({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 1,
  distance,
  as = "div",
  stagger,
  fold = false,
}: FadeInProps) {
  const ref = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      registerGsap();
      const el = ref.current;
      if (!el) return;

      const targets = stagger
        ? Array.from(el.children)
        : [el];

      const offset = offsets[direction];
      const scaled = distance
        ? {
            x: offset.x ? Math.sign(offset.x) * distance : undefined,
            y: offset.y ? Math.sign(offset.y) * distance : undefined,
          }
        : offset;

      const fromVars = fold
        ? {
            opacity: 0.4,
            rotationX: -14,
            transformPerspective: 1400,
            transformOrigin: "50% 0%",
            yPercent: 4,
          }
        : { opacity: 0, ...scaled };

      const toVars = fold
        ? { opacity: 1, rotationX: 0, yPercent: 0 }
        : { opacity: 1, x: 0, y: 0 };

      const tween = gsap.fromTo(targets, fromVars, {
        ...toVars,
        duration,
        delay,
        stagger,
        ease: "expo.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    },
    { scope: ref }
  );

  return createElement(
    as,
    { ref, className: cn(className) },
    children
  );
}
