import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPerfume, perfumes } from "@/data/perfumes";
import { getCollection } from "@/data/collections";
import { formatPrice } from "@/lib/utils";
import { ClipReveal } from "@/components/animations/clip-reveal";
import { ParallaxImage } from "@/components/animations/parallax-image";
import { FadeIn } from "@/components/animations/fade-in";
import { RevealText } from "@/components/animations/reveal-text";
import { NotesPyramid } from "@/components/sections/notes-pyramid";
import { CtaBand } from "@/components/sections/cta-band";
import { SectionLabel } from "@/components/ui/section-label";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return perfumes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/parfums/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const perfume = getPerfume(slug);
  if (!perfume) return {};
  return {
    title: perfume.name,
    description: perfume.description,
  };
}

export default async function PerfumeDetailPage({
  params,
}: PageProps<"/parfums/[slug]">) {
  const { slug } = await params;
  const perfume = getPerfume(slug);
  if (!perfume) notFound();

  const collection = getCollection(perfume.collection);
  const related = perfumes.filter(
    (p) => p.collection === perfume.collection && p.slug !== perfume.slug
  );

  return (
    <>
      <section className="bg-bg px-6 pt-40 pb-24 md:px-12 md:pb-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">
          <ClipReveal
            src={perfume.image}
            alt={perfume.name}
            className="aspect-[4/5] w-full"
            sizes="(min-width: 768px) 45vw, 100vw"
            priority
          />
          <div>
            {collection && (
              <Link
                href={`/collections#${collection.slug}`}
                className="link-underline mb-6 inline-block text-xs uppercase tracking-[0.2em] text-accent-dim"
              >
                {collection.name}
              </Link>
            )}
            <SectionLabel className="mb-4 block">{perfume.family}</SectionLabel>
            <RevealText
              as="h1"
              className="font-serif text-[clamp(38px,5.5vw,68px)] font-light leading-[0.98] text-text"
              lines={[perfume.name]}
            />
            <p className="mt-4 font-serif text-lg italic text-accent-dim">
              {perfume.tagline}
            </p>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-text-dim">
              {perfume.description}
            </p>
            <div className="mt-8 flex items-center gap-6">
              <span className="font-serif text-3xl text-text">
                {formatPrice(perfume.price)}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-text-muted">
                {perfume.volume}
              </span>
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/boutique" variant="primary">
                Ajouter à la sélection
              </Button>
              <Button href="/contact" variant="secondary">
                Demander un échantillon
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-2 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 md:grid-cols-2 md:gap-20">
          <FadeIn>
            <SectionLabel className="mb-5 block">L&rsquo;histoire</SectionLabel>
            <h2 className="max-w-md font-serif text-[clamp(26px,3.5vw,40px)] font-light leading-[1.05] text-text">
              D&rsquo;où vient {perfume.name}
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-text-dim">
              {perfume.story}
            </p>
          </FadeIn>
          <ParallaxImage
            src={perfume.gallery[0]}
            alt={`${perfume.name} — mise en scène`}
            className="aspect-[4/5] w-full"
            sizes="(min-width: 768px) 45vw, 100vw"
          />
        </div>
      </section>

      <section className="bg-bg px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionLabel className="mb-5 block">Pyramide olfactive</SectionLabel>
          <h2 className="max-w-lg font-serif text-[clamp(26px,3.5vw,40px)] font-light leading-[1.05] text-text">
            Ce que raconte {perfume.name} au fil des heures
          </h2>
          <div className="mt-14">
            <NotesPyramid notes={perfume.notes} />
          </div>
        </div>
      </section>

      <section className="relative aspect-[21/9] w-full overflow-hidden bg-dark-bg">
        <ParallaxImage
          src={perfume.gallery[1]}
          alt={`${perfume.name} — ambiance`}
          className="h-full w-full"
          dark
        />
      </section>

      {related.length > 0 && (
        <section className="bg-bg-2 px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-7xl">
            <SectionLabel className="mb-5 block">
              Dans la même collection
            </SectionLabel>
            <h2 className="max-w-lg font-serif text-[clamp(26px,3.5vw,40px)] font-light leading-[1.05] text-text">
              À découvrir aussi
            </h2>
            <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
              {related.map((p) => (
                <FadeIn key={p.slug}>
                  <Link href={`/parfums/${p.slug}`} className="group block">
                    <div className="aspect-[4/5] w-full overflow-hidden">
                      <ClipReveal
                        src={p.image}
                        alt={p.name}
                        className="h-full w-full"
                        sizes="(min-width: 768px) 45vw, 100vw"
                      />
                    </div>
                    <p className="mt-5 font-serif text-2xl text-text group-hover:text-accent-dim">
                      {p.name}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-text-muted">
                      {p.family} — {formatPrice(p.price)}
                    </p>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        lines={["Prêt à découvrir", "votre propre sillage ?"]}
        ctaLabel="Voir la boutique"
        ctaHref="/boutique"
      />
    </>
  );
}
