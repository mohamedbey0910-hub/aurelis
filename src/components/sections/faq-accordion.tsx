"use client";

import { useState } from "react";
import { FaqItem } from "@/data/faq";
import { FadeIn } from "@/components/animations/fade-in";
import { cn } from "@/lib/utils";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto flex max-w-3xl flex-col">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <FadeIn key={item.question} delay={i * 0.04}>
            <div className="border-t border-line">
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : i)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-6 py-7 text-left"
              >
                <span className="font-serif text-lg font-light text-text md:text-xl">
                  {item.question}
                </span>
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-accent-dim transition-transform duration-400",
                    open && "rotate-45"
                  )}
                >
                  +
                </span>
              </button>
              <div
                className={cn(
                  "grid transition-all duration-500 ease-out",
                  open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <p className="max-w-2xl pb-8 text-[15px] leading-relaxed text-text-dim">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
