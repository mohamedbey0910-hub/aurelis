import { Perfume } from "@/data/perfumes";
import { formatPrice } from "@/lib/utils";
import { ClipReveal } from "@/components/animations/clip-reveal";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionLabel } from "@/components/ui/section-label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FeaturedPerfume({
  perfume,
  reverse = false,
}: {
  perfume: Perfume;
  reverse?: boolean;
}) {
  return (
    <section className="bg-bg px-6 py-24 md:px-12 md:py-32">
      <div
        className={cn(
          "mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20",
          reverse && "md:[&>*:first-child]:order-2"
        )}
      >
        <ClipReveal
          src={perfume.image}
          alt={perfume.name}
          className="aspect-[4/5] w-full"
          sizes="(min-width: 768px) 45vw, 100vw"
        />

        <FadeIn direction={reverse ? "right" : "left"}>
          <SectionLabel className="mb-5 block">{perfume.family}</SectionLabel>
          <h2 className="font-serif text-[clamp(32px,4.5vw,56px)] font-light leading-[0.98] text-text">
            {perfume.name}
          </h2>
          <p className="mt-4 font-serif text-lg italic text-accent-dim">
            {perfume.tagline}
          </p>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-text-dim">
            {perfume.description}
          </p>
          <div className="mt-8 flex items-center gap-6">
            <span className="font-serif text-2xl text-text">
              {formatPrice(perfume.price)}
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-text-muted">
              {perfume.volume}
            </span>
          </div>
          <div className="mt-9">
            <Button href={`/parfums/${perfume.slug}`} variant="secondary">
              Découvrir le sillage
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
