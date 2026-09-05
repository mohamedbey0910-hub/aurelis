import type { Metadata } from "next";
import { RevealText } from "@/components/animations/reveal-text";
import { ContactForm } from "@/components/sections/contact-form";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionLabel } from "@/components/ui/section-label";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez la maison AURÉLIS — boutique, conseil olfactif, presse.",
};

export default function ContactPage() {
  return (
    <>
      <section className="flex min-h-[45vh] flex-col justify-end bg-bg px-6 pb-20 pt-40 md:px-12">
        <div className="mx-auto w-full max-w-7xl">
          <SectionLabel className="mb-6 block">Contact</SectionLabel>
          <RevealText
            as="h1"
            className="max-w-2xl font-serif text-[clamp(38px,6vw,72px)] font-light leading-[0.98] text-text"
            lines={["Parlons de votre", "prochain sillage."]}
          />
        </div>
      </section>

      <section className="bg-bg px-6 pb-24 md:px-12 md:pb-32">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-[1.2fr_1fr]">
          <FadeIn direction="left">
            <ContactForm />
          </FadeIn>

          <FadeIn direction="right">
            <div className="border-t border-line pt-8">
              <SectionLabel className="mb-4 block">Boutique</SectionLabel>
              <p className="text-[15px] leading-relaxed text-text-dim">
                {site.address}
                <br />
                {site.hours}
              </p>
            </div>
            <div className="mt-10 border-t border-line pt-8">
              <SectionLabel className="mb-4 block">Contact direct</SectionLabel>
              <p className="text-[15px] leading-relaxed text-text-dim">
                {site.phone}
                <br />
                {site.email}
              </p>
            </div>
            <div className="mt-10 border-t border-line pt-8">
              <SectionLabel className="mb-4 block">Presse</SectionLabel>
              <p className="text-[15px] leading-relaxed text-text-dim">
                presse@aurelis-parfums.fr
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
