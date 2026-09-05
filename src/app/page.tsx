import type { Metadata } from "next";
import { HeroCircle } from "@/components/sections/hero-circle";
import { BrandStatement } from "@/components/sections/brand-statement";
import { FeaturedPerfume } from "@/components/sections/featured-perfume";
import { CollectionsPin } from "@/components/sections/collections-pin";
import { Craftsmanship } from "@/components/sections/craftsmanship";
import { EditorialGallery } from "@/components/sections/editorial-gallery";
import { PressQuotes } from "@/components/sections/press-quotes";
import { CtaBand } from "@/components/sections/cta-band";
import { perfumes } from "@/data/perfumes";
import { collections } from "@/data/collections";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "AURÉLIS — Maison de Parfum",
  description:
    "AURÉLIS crée des fragrances élégantes et raffinées, inspirées par l'art, le voyage et les émotions.",
};

export default function HomePage() {
  const [ombreDoree, fleurDeSoie] = perfumes;

  return (
    <>
      <HeroCircle />
      <BrandStatement />
      <FeaturedPerfume perfume={ombreDoree} />
      <FeaturedPerfume perfume={fleurDeSoie} reverse />
      <CollectionsPin collections={collections} />
      <Craftsmanship />
      <EditorialGallery />
      <PressQuotes testimonials={testimonials.slice(0, 2)} />
      <CtaBand
        lines={["Trouvez la fragrance", "qui vous ressemble."]}
        ctaLabel="Explorer la boutique"
        ctaHref="/boutique"
      />
    </>
  );
}
