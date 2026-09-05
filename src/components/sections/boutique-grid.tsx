"use client";

import { useState } from "react";
import Link from "next/link";
import { perfumes } from "@/data/perfumes";
import { collections } from "@/data/collections";
import { formatPrice, cn } from "@/lib/utils";
import { ClipReveal } from "@/components/animations/clip-reveal";
import { FadeIn } from "@/components/animations/fade-in";

type Filter = "all" | (typeof collections)[number]["slug"];

export function BoutiqueGrid() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible =
    filter === "all"
      ? perfumes
      : perfumes.filter((p) => p.collection === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={cn(
            "rounded-full border px-5 py-2 text-xs uppercase tracking-[0.18em] transition-colors",
            filter === "all"
              ? "border-text bg-text text-bg"
              : "border-line text-text-dim hover:border-accent"
          )}
        >
          Tous
        </button>
        {collections.map((c) => (
          <button
            key={c.slug}
            type="button"
            onClick={() => setFilter(c.slug)}
            className={cn(
              "rounded-full border px-5 py-2 text-xs uppercase tracking-[0.18em] transition-colors",
              filter === c.slug
                ? "border-text bg-text text-bg"
                : "border-line text-text-dim hover:border-accent"
            )}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <FadeIn key={p.slug}>
            <div className="group">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <ClipReveal
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="font-serif text-xl text-text">{p.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-text-muted">
                    {p.family}
                  </p>
                </div>
                <span className="whitespace-nowrap font-serif text-lg text-text">
                  {formatPrice(p.price)}
                </span>
              </div>
              <Link
                href={`/parfums/${p.slug}`}
                className="link-underline mt-4 inline-block text-xs uppercase tracking-[0.2em] text-accent-dim"
              >
                Découvrir
              </Link>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
