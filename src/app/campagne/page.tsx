import type { Metadata } from "next";
import { ParallaxImage } from "@/components/animations/parallax-image";
import { EditorialGallery } from "@/components/sections/editorial-gallery";
import { PressQuotes } from "@/components/sections/press-quotes";
import { RevealText } from "@/components/animations/reveal-text";
import { CtaBand } from "@/components/sections/cta-band";
import { SectionLabel } from "@/components/ui/section-label";
import { testimonials } from "@/data/testimonials";
import { placeholder } from "@/lib/images";

export const metadata: Metadata = {
  title: "Campagne",
  description: "La campagne visuelle AURÉLIS — Lumière d'Automne.",
};

export default function CampagnePage() {
  return (
    <>
      <section className="relative flex h-[85svh] min-h-[600px] w-full items-end overflow-hidden bg-dark-bg">
        <ParallaxImage
          src={placeholder("aurelis-campagne-hero-v2", 2400, 1800)}
          alt="Campagne AURÉLIS — Lumière d'Automne"
          className="absolute inset-0 h-full w-full"
          dark
          strength={12}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/10 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 md:px-12">
          <SectionLabel dark className="mb-5 block">Campagne 2026</SectionLabel>
          <RevealText
            as="h1"
            className="max-w-2xl font-serif text-[clamp(38px,6.5vw,80px)] font-light italic leading-[0.98] text-dark-text"
            lines={["Lumière", "d'Automne."]}
          />
        </div>
      </section>

      <section className="flex min-h-[50vh] items-center bg-bg px-6 py-32 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <RevealText
            as="p"
            className="font-serif text-[clamp(24px,4vw,44px)] font-light leading-[1.15] text-text"
            lines={[
              "Une saison, une lumière, un sillage —",
              "photographiée entre Paris et les Cévennes.",
            ]}
          />
        </div>
      </section>

      <EditorialGallery title="Extraits de la campagne" />

      <PressQuotes testimonials={testimonials.slice(2)} dark />

      <CtaBand
        lines={["Portez la lumière", "de cette saison."]}
        ctaLabel="Découvrir les parfums"
        ctaHref="/parfums"
      />
    </>
  );
}
