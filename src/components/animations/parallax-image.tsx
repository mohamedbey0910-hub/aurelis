"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsap } from "@/lib/gsap-config";
import { cn } from "@/lib/utils";
import { TreatedImage } from "@/components/ui/treated-image";

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  strength?: number;
  sizes?: string;
  priority?: boolean;
  dark?: boolean;
};

export function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
  strength = 16,
  sizes = "100vw",
  priority = false,
  dark = false,
}: ParallaxImageProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  // Gated on image load — see TreatedImage for why an animation should
  // never race an image's async decode.
  useGSAP(
    () => {
      if (!loaded) return;
      registerGsap();
      const wrap = wrapRef.current;
      const img = imgRef.current;
      if (!wrap || !img) return;

      const tween = gsap.fromTo(
        img,
        { yPercent: -strength },
        {
          yPercent: strength,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        }
      );

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    },
    { scope: wrapRef, dependencies: [loaded] }
  );

  return (
    <div ref={wrapRef} className={cn("relative overflow-hidden", className)}>
      <div ref={imgRef} className="absolute inset-[-12%] will-change-transform">
        <TreatedImage
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          dark={dark}
          onLoad={() => setLoaded(true)}
          className={imgClassName}
        />
      </div>
    </div>
  );
}
