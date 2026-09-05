"use client";

import { createElement, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsap } from "@/lib/gsap-config";
import { cn } from "@/lib/utils";

type Tag = "h1" | "h2" | "h3" | "p" | "div";

type RevealTextProps = {
  lines: string[];
  as?: Tag;
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
};

export function RevealText({
  lines,
  as = "h2",
  className,
  lineClassName,
  delay = 0,
  stagger = 0.07,
}: RevealTextProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      registerGsap();
      const el = containerRef.current;
      if (!el) return;
      const targets = el.querySelectorAll(".reveal-line");
      if (!targets.length) return;

      const tween = gsap.fromTo(
        targets,
        { yPercent: 110, opacity: 0, filter: "blur(10px)" },
        {
          yPercent: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.9,
          delay,
          stagger,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
          },
        }
      );

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    },
    { scope: containerRef }
  );

  return createElement(
    as,
    { className: cn("reveal-mask", className), ref: containerRef },
    lines.map((line, i) =>
      createElement(
        "span",
        { className: "reveal-mask", key: i },
        createElement(
          "span",
          { className: cn("reveal-line", lineClassName) },
          line
        )
      )
    )
  );
}
