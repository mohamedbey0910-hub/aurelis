import type { Metadata } from "next";
import { RevealText } from "@/components/animations/reveal-text";
import { BoutiqueGrid } from "@/components/sections/boutique-grid";
import { CtaBand } from "@/components/sections/cta-band";
import { SectionLabel } from "@/components/ui/section-label";

export const metadata: Metadata = {
  title: "Boutique",
  description: "Toute la collection AURÉLIS, par famille olfactive et par collection.",
};

export default function BoutiquePage() {
  return (
    <>
      <section className="flex min-h-[45vh] flex-col justify-end bg-bg px-6 pb-16 pt-40 md:px-12">
        <div className="mx-auto w-full max-w-7xl">
          <SectionLabel className="mb-6 block">Boutique</SectionLabel>
          <RevealText
            as="h1"
            className="max-w-2xl font-serif text-[clamp(38px,6vw,72px)] font-light leading-[0.98] text-text"
            lines={["Choisissez", "votre sillage."]}
          />
          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-text-dim">
            Chaque flacon peut être livré ou réservé pour un retrait en
            boutique, avec conseil olfactif personnalisé sur demande.
          </p>
        </div>
      </section>

      <section className="bg-bg px-6 pb-24 md:px-12 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <BoutiqueGrid />
        </div>
      </section>

      <CtaBand
        lines={["Besoin d'un conseil", "avant de choisir ?"]}
        ctaLabel="Parler à la maison"
        ctaHref="/contact"
      />
    </>
  );
}
