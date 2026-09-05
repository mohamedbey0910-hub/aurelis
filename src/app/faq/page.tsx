import type { Metadata } from "next";
import { RevealText } from "@/components/animations/reveal-text";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CtaBand } from "@/components/sections/cta-band";
import { SectionLabel } from "@/components/ui/section-label";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Livraison, retours, personnalisation — vos questions sur les parfums AURÉLIS.",
};

export default function FaqPage() {
  return (
    <>
      <section className="flex min-h-[45vh] flex-col justify-end bg-bg px-6 pb-20 pt-40 md:px-12">
        <div className="mx-auto w-full max-w-7xl">
          <SectionLabel className="mb-6 block">Questions fréquentes</SectionLabel>
          <RevealText
            as="h1"
            className="max-w-2xl font-serif text-[clamp(38px,6vw,72px)] font-light leading-[0.98] text-text"
            lines={["Avant de", "commander."]}
          />
        </div>
      </section>

      <section className="bg-bg px-6 pb-24 md:px-12 md:pb-32">
        <FaqAccordion items={faqItems} />
      </section>

      <CtaBand
        lines={["Une autre question ?", "Écrivez-nous directement."]}
        ctaLabel="Contacter la maison"
        ctaHref="/contact"
      />
    </>
  );
}
