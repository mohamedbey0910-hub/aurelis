"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { registerGsap, ScrollTrigger } from "@/lib/gsap-config";
import { cn } from "@/lib/utils";
import { TreatedImage } from "@/components/ui/treated-image";

type SwapItem = {
  id: string;
  image: string;
  label: string;
};

type StickySwapProps = {
  items: SwapItem[];
  renderItem: (item: SwapItem, index: number, active: boolean) => React.ReactNode;
};

export function StickySwap({ items, renderItem }: StickySwapProps) {
  const [active, setActive] = useState(0);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      registerGsap();
      const triggers = rowRefs.current.map((row, i) => {
        if (!row) return null;
        return ScrollTrigger.create({
          trigger: row,
          start: "top 60%",
          end: "bottom 60%",
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        });
      });

      return () => {
        triggers.forEach((t) => t?.kill());
      };
    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef} className="grid grid-cols-1 gap-16 md:grid-cols-2">
      <div className="relative order-2 h-[420px] md:sticky md:top-32 md:order-1 md:h-[560px]">
        {items.map((item, i) => (
          <div
            key={item.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-700",
              i === active ? "opacity-100" : "opacity-0"
            )}
          >
            <TreatedImage
              src={item.image}
              alt={item.label}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
        ))}
      </div>
      <div className="order-1 flex flex-col gap-20 md:order-2">
        {items.map((item, i) => (
          <div
            key={item.id}
            ref={(el) => {
              rowRefs.current[i] = el;
            }}
          >
            {renderItem(item, i, i === active)}
          </div>
        ))}
      </div>
    </div>
  );
}
