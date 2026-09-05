import type { Metadata } from "next";
import Link from "next/link";
import { collections } from "@/data/collections";
import { getPerfumesByCollection } from "@/data/perfumes";
import { formatPrice } from "@/lib/utils";
import { ParallaxImage } from "@/components/animations/parallax-image";
import { ClipReveal } from "@/components/animations/clip-reveal";
import { FadeIn } from "@/components/animations/fade-in";
import { RevealText } from "@/components/animations/reveal-text";
import { CtaBand } from "@/components/sections/cta-band";
import { SectionLabel } from "@/components/ui/section-label";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "L'Héritage, Éditions Rares, Les Essentiels — les trois collections de la maison AURÉLIS.",
};

export default function CollectionsPage() {
  return (
    <>
      <section className="flex min-h-[50vh] flex-col justify-end bg-bg px-6 pb-20 pt-40 md:px-12">
        <div className="mx-auto w-full max-w-7xl">
          <SectionLabel className="mb-6 block">Collections</SectionLabel>
          <RevealText
            as="h1"
            className="max-w-2xl font-serif text-[clamp(38px,6vw,72px)] font-light leading-[0.98] text-text"
            lines={["Trois écritures,", "une seule maison."]}
          />
        </div>
      </section>

      {collections.map((collection, i) => {
        const items = getPerfumesByCollection(collection.slug);
        return (
          <section
            key={collection.slug}
            id={collection.slug}
            className={i % 2 === 0 ? "bg-bg" : "bg-bg-2"}
          >
            <div className="px-6 py-24 md:px-12 md:py-32">
              <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <ParallaxImage
                    src={collection.image}
                    alt={collection.name}
                    className="aspect-[4/5] w-full"
                    sizes="(min-width: 768px) 45vw, 100vw"
                    dark
                  />
                </div>
                <FadeIn direction={i % 2 === 1 ? "left" : "right"}>
                  <SectionLabel className="mb-5 block">
                    {collection.tagline}
                  </SectionLabel>
                  <h2 className="font-serif text-[clamp(30px,4.5vw,52px)] font-light leading-[0.98] text-text">
                    {collection.name}
                  </h2>
                  <p className="mt-6 max-w-md text-[15px] leading-relaxed text-text-dim">
                    {collection.description}
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="px-6 pb-24 md:px-12 md:pb-32">
              <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
                {items.map((p) => (
                  <FadeIn key={p.slug}>
                    <Link href={`/parfums/${p.slug}`} className="group block">
                      <div className="aspect-[4/5] w-full overflow-hidden">
                        <ClipReveal
                          src={p.image}
                          alt={p.name}
                          className="h-full w-full"
                          sizes="(min-width: 768px) 30vw, (min-width: 640px) 45vw, 100vw"
                        />
                      </div>
                      <p className="mt-5 font-serif text-xl text-text group-hover:text-accent-dim">
                        {p.name}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-text-muted">
                        {formatPrice(p.price)}
                      </p>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CtaBand
        lines={["Une collection vous parle ?", "Explorez-la en détail."]}
        ctaLabel="Voir tous les parfums"
        ctaHref="/parfums"
      />
    </>
  );
}
