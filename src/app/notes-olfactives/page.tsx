import type { Metadata } from "next";
import { olfactoryNotes } from "@/data/notes";
import { NotesStickySection } from "@/components/sections/notes-sticky-section";
import { FadeIn } from "@/components/animations/fade-in";
import { RevealText } from "@/components/animations/reveal-text";
import { CtaBand } from "@/components/sections/cta-band";
import { SectionLabel } from "@/components/ui/section-label";

export const metadata: Metadata = {
  title: "Notes Olfactives",
  description:
    "Découvrez les matières premières rares qui composent les fragrances AURÉLIS.",
};

const pyramidSteps = [
  {
    title: "Notes de tête",
    time: "0 – 15 minutes",
    description:
      "La première impression — légère, volatile, souvent agrumée ou aromatique. Elle s'évapore vite et cède la place au cœur.",
  },
  {
    title: "Notes de cœur",
    time: "15 minutes – 4 heures",
    description:
      "Le corps du parfum, sa personnalité véritable — florale, épicée ou boisée. C'est elle qu'on porte le plus longtemps.",
  },
  {
    title: "Notes de fond",
    time: "4 heures et plus",
    description:
      "La trace qui reste sur la peau et sur les vêtements — ambre, musc, bois précieux. Elle signe le sillage final.",
  },
];

export default function NotesOlfactivesPage() {
  return (
    <>
      <section className="flex min-h-[50vh] flex-col justify-end bg-bg px-6 pb-20 pt-40 md:px-12">
        <div className="mx-auto w-full max-w-7xl">
          <SectionLabel className="mb-6 block">Notes Olfactives</SectionLabel>
          <RevealText
            as="h1"
            className="max-w-2xl font-serif text-[clamp(38px,6vw,72px)] font-light leading-[0.98] text-text"
            lines={["La grammaire", "d'un parfum."]}
          />
        </div>
      </section>

      <section className="bg-bg px-6 pb-24 md:px-12 md:pb-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-3">
          {pyramidSteps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.08}>
              <div className="border-t border-line pt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-accent-dim">
                  {step.time}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-light text-text">
                  {step.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-text-dim">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-bg-2 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionLabel className="mb-5 block">Matières rares</SectionLabel>
          <h2 className="max-w-lg font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.02] text-text">
            Six matières qui reviennent dans nos compositions
          </h2>

          <div className="mt-16">
            <NotesStickySection notes={olfactoryNotes} />
          </div>
        </div>
      </section>

      <CtaBand
        lines={["Retrouvez ces matières", "dans nos compositions."]}
        ctaLabel="Explorer les parfums"
        ctaHref="/parfums"
      />
    </>
  );
}
