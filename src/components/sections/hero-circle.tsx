"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsap } from "@/lib/gsap-config";
import { Button } from "@/components/ui/button";
import { TreatedImage } from "@/components/ui/treated-image";
import { placeholder } from "@/lib/images";

export function HeroCircle() {
  const labelRef = useRef<HTMLSpanElement | null>(null);
  const line1Ref = useRef<HTMLSpanElement | null>(null);
  const line2Ref = useRef<HTMLSpanElement | null>(null);
  const subRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    registerGsap();
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    if (reduceMotion) {
      gsap.set(
        [labelRef.current, line1Ref.current, line2Ref.current, subRef.current, ctaRef.current, scrollRef.current],
        { clearProps: "all" }
      );
      return;
    }

    // The background image is never targeted by GSAP here: animating a
    // transform/opacity on an ancestor of a still-decoding <Image> is a
    // known Chromium compositing trap — the layer's raster can freeze at
    // its pre-decode (black) state and never repaint once the image
    // finishes loading. Only the text, which has no such async dependency,
    // is choreographed.
    tl.fromTo(
      labelRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
      .fromTo(
        [line1Ref.current, line2Ref.current],
        { yPercent: 110, filter: "blur(10px)" },
        { yPercent: 0, filter: "blur(0px)", duration: 1, stagger: 0.12 },
        0.2
      )
      .fromTo(
        subRef.current,
        { opacity: 0, filter: "blur(6px)" },
        { opacity: 1, filter: "blur(0px)", duration: 0.9 },
        0.8
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.8 },
        1
      )
      .fromTo(
        scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        1.2
      );

    gsap.to(scrollRef.current, {
      y: 8,
      duration: 1.6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1.5,
    });
  }, []);

  return (
    <section className="relative flex h-[100svh] min-h-[700px] w-full items-end overflow-hidden bg-dark-bg">
      <div className="absolute inset-0">
        <TreatedImage
          src={placeholder("aurelis-hero-v5", 2400, 3000)}
          alt="Flacon AURÉLIS mis en scène dans une lumière dorée"
          fill
          priority
          dark
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/30 to-dark-bg/10" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 md:px-12 md:pb-28">
        <span
          ref={labelRef}
          className="section-label on-dark mb-6 block opacity-0"
        >
          Maison de Parfum — Paris
        </span>
        <h1 className="max-w-4xl font-serif text-[clamp(48px,9vw,128px)] font-light leading-[0.95] text-dark-text">
          <span className="reveal-mask block">
            <span ref={line1Ref} className="inline-block">
              L&rsquo;art du
            </span>
          </span>
          <span className="reveal-mask block italic text-accent-light">
            <span ref={line2Ref} className="inline-block">
              sillage.
            </span>
          </span>
        </h1>
        <p
          ref={subRef}
          className="mt-8 max-w-md text-base leading-relaxed text-dark-text-dim opacity-0"
        >
          Des fragrances composées comme des récits — inspirées par l&rsquo;art,
          le voyage et les émotions qui ne s&rsquo;oublient pas.
        </p>
        <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4 opacity-0">
          <Button href="/parfums" variant="primary" dark>
            Découvrir les parfums
          </Button>
          <Button href="/maison" variant="secondary" dark>
            Notre histoire
          </Button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-dark-text-dim opacity-0"
      >
        Défiler
      </div>
    </section>
  );
}
