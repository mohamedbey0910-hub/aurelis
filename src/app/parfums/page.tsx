import type { Metadata } from "next";
import { FeaturedPerfume } from "@/components/sections/featured-perfume";
import { RevealText } from "@/components/animations/reveal-text";
import { SectionLabel } from "@/components/ui/section-label";
import { perfumes } from "@/data/perfumes";

export const metadata: Metadata = {
  title: "Parfums",
  description:
    "Découvrez l'ensemble des fragrances AURÉLIS — Héritage, Éditions Rares et Les Essentiels.",
};

export default function ParfumsPage() {
  return (
    <>
      <section className="flex min-h-[50vh] flex-col justify-end bg-bg px-6 pb-20 pt-40 md:px-12">
        <div className="mx-auto w-full max-w-7xl">
          <SectionLabel className="mb-6 block">Tous les parfums</SectionLabel>
          <RevealText
            as="h1"
            className="max-w-2xl font-serif text-[clamp(38px,6vw,72px)] font-light leading-[0.98] text-text"
            lines={["Six fragrances,", "une seule écriture."]}
          />
          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-text-dim">
            Chaque parfum AURÉLIS est composé comme un récit complet — une
            entrée, un cœur, une trace qui reste. Explorez-les un à un.
          </p>
        </div>
      </section>

      {perfumes.map((perfume, i) => (
        <FeaturedPerfume key={perfume.slug} perfume={perfume} reverse={i % 2 === 1} />
      ))}
    </>
  );
}
