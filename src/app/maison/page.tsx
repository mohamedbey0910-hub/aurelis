import type { Metadata } from "next";
import { milestones, values } from "@/data/history";
import { ParallaxImage } from "@/components/animations/parallax-image";
import { FadeIn } from "@/components/animations/fade-in";
import { RevealText } from "@/components/animations/reveal-text";
import { CtaBand } from "@/components/sections/cta-band";
import { SectionLabel } from "@/components/ui/section-label";
import { placeholder } from "@/lib/images";

export const metadata: Metadata = {
  title: "La Maison",
  description:
    "L'histoire de la maison AURÉLIS, de sa fondation en 1987 à ses engagements de traçabilité.",
};

export default function MaisonPage() {
  return (
    <>
      <section className="relative flex h-[70svh] min-h-[560px] w-full items-end overflow-hidden bg-dark-bg">
        <ParallaxImage
          src={placeholder("aurelis-maison-hero-v4", 2200, 1600)}
          alt="L'atelier de la maison AURÉLIS"
          className="absolute inset-0 h-full w-full"
          dark
          strength={10}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/20 to-dark-bg/10" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 md:px-12">
          <SectionLabel dark className="mb-5 block">La Maison</SectionLabel>
          <RevealText
            as="h1"
            className="max-w-2xl font-serif text-[clamp(38px,6vw,68px)] font-light leading-[0.98] text-dark-text"
            lines={["Depuis 1987,", "une même exigence."]}
          />
        </div>
      </section>

      <section className="bg-bg px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <p className="font-serif text-[clamp(22px,3vw,32px)] font-light leading-[1.4] text-text">
              AURÉLIS est née d&rsquo;une conviction simple : qu&rsquo;un
              parfum n&rsquo;a de valeur que s&rsquo;il raconte quelque
              chose de vrai. Près de quarante ans plus tard, cette conviction
              n&rsquo;a pas changé.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-bg-2 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-4xl">
          <SectionLabel className="mb-10 block">Notre histoire</SectionLabel>
          <div className="flex flex-col">
            {milestones.map((m, i) => (
              <FadeIn key={m.year} delay={i * 0.06}>
                <div className="grid grid-cols-[100px_1fr] gap-8 border-t border-line py-10 md:grid-cols-[160px_1fr]">
                  <span className="font-serif text-3xl font-light text-accent-dim">
                    {m.year}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-light text-text">
                      {m.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-text-dim">
                      {m.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">
          <ParallaxImage
            src={placeholder("aurelis-fondateur-v3", 1600, 2000)}
            alt="Le parfumeur-fondateur de la maison AURÉLIS"
            className="aspect-[4/5] w-full"
            sizes="(min-width: 768px) 45vw, 100vw"
          />
          <FadeIn direction="right">
            <SectionLabel className="mb-5 block">Le parfumeur</SectionLabel>
            <h2 className="max-w-md font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.02] text-text">
              Une seule main derrière chaque flacon
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-text-dim">
              Depuis la fondation de la maison, chaque composition passe par
              le même laboratoire, selon les mêmes exigences. Ce n&rsquo;est
              pas une posture marketing — c&rsquo;est simplement ainsi que la
              maison a toujours travaillé.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-bg-2 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionLabel className="mb-5 block">Nos engagements</SectionLabel>
          <h2 className="max-w-lg font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.02] text-text">
            Ce qui ne changera jamais
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.05}>
                <div className="border-t border-line pt-6">
                  <h3 className="font-serif text-xl font-light text-text">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-text-dim">
                    {v.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        lines={["Découvrez ce que", "cette exigence donne à sentir."]}
        ctaLabel="Explorer les parfums"
        ctaHref="/parfums"
      />
    </>
  );
}
