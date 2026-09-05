import type { Metadata } from "next";
import { RevealText } from "@/components/animations/reveal-text";
import { PressQuotes } from "@/components/sections/press-quotes";
import { CtaBand } from "@/components/sections/cta-band";
import { SectionLabel } from "@/components/ui/section-label";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Témoignages",
  description: "Ce que nos clientes et clients disent des parfums AURÉLIS.",
};

export default function TemoignagesPage() {
  return (
    <>
      <section className="flex min-h-[50vh] flex-col justify-end bg-bg px-6 pb-20 pt-40 md:px-12">
        <div className="mx-auto w-full max-w-7xl">
          <SectionLabel className="mb-6 block">Témoignages</SectionLabel>
          <RevealText
            as="h1"
            className="max-w-2xl font-serif text-[clamp(38px,6vw,72px)] font-light leading-[0.98] text-text"
            lines={["Ce qu'ils portent,", "ce qu'ils en disent."]}
          />
        </div>
      </section>

      <PressQuotes testimonials={testimonials} />

      <CtaBand
        lines={["Écrivez votre propre", "histoire olfactive."]}
        ctaLabel="Explorer les parfums"
        ctaHref="/parfums"
      />
    </>
  );
}
