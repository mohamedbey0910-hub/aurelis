"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsap } from "@/lib/gsap-config";
import { cn } from "@/lib/utils";
import { TreatedImage } from "@/components/ui/treated-image";

type ClipRevealProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  dark?: boolean;
};

export function ClipReveal({
  src,
  alt,
  className,
  sizes = "100vw",
  priority = false,
  dark = false,
}: ClipRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  // Hold the mask closed synchronously on mount so there is never a frame
  // where the image is visible unclipped.
  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      gsap.set(el, { clipPath: "inset(100% 0% 0% 0%)" });
    },
    { scope: ref }
  );

  // Wait for the image to finish decoding before animating clip-path open —
  // see TreatedImage for why an animation should never race an image load.
  useGSAP(
    () => {
      if (!loaded) return;
      registerGsap();
      const el = ref.current;
      if (!el) return;

      const tween = gsap.to(el, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.4,
        ease: "expo.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    },
    { scope: ref, dependencies: [loaded] }
  );

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <TreatedImage
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        dark={dark}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
