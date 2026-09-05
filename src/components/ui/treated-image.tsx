"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { FILTERS } from "@/lib/image-filters";

type TreatedImageProps = ImageProps & { dark?: boolean };

// Wraps next/image with the site's color-grade filter, applied via inline
// style rather than a CSS class. Chromium can rasterize a `filter`-styled
// <img> as solid black after its async decode completes, and only repaints
// correctly once the `filter` value actually *changes* — reassigning the
// same string is a no-op the browser skips. So on load (and immediately on
// mount, for images the browser already served from cache before React
// attached the listener) the filter is flipped to `none` and back on the
// next frame, forcing a real transition. Hover is done in JS rather than
// CSS `:hover` so nothing here needs a second inline-style removal.
export function TreatedImage({
  dark = false,
  className,
  style,
  onLoad,
  ...props
}: TreatedImageProps) {
  const ref = useRef<HTMLImageElement | null>(null);
  const tone = dark ? FILTERS.dark : FILTERS.light;

  function nudge(el: HTMLImageElement) {
    el.style.filter = "none";
    requestAnimationFrame(() => {
      el.style.filter = tone.base;
    });
  }

  useEffect(() => {
    const el = ref.current;
    if (el?.complete && el.naturalWidth > 0) {
      nudge(el);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Image
      {...props}
      ref={ref}
      style={{
        filter: tone.base,
        transition: "filter 700ms cubic-bezier(0.16,1,0.3,1)",
        ...style,
      }}
      onMouseEnter={() => {
        if (ref.current) ref.current.style.filter = tone.hover;
      }}
      onMouseLeave={() => {
        if (ref.current) ref.current.style.filter = tone.base;
      }}
      onLoad={(e) => {
        nudge(e.currentTarget);
        onLoad?.(e);
      }}
      className={cn("object-cover", className)}
    />
  );
}
