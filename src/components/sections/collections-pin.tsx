import Link from "next/link";
import { Collection } from "@/data/collections";
import { HorizontalPin } from "@/components/animations/horizontal-pin";
import { SectionLabel } from "@/components/ui/section-label";
import { TreatedImage } from "@/components/ui/treated-image";

export function CollectionsPin({
  collections,
  title = "Les collections",
}: {
  collections: Collection[];
  title?: string;
}) {
  return (
    <section className="bg-bg-2 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionLabel className="mb-5 block">Collections</SectionLabel>
        <h2 className="max-w-xl font-serif text-[clamp(32px,4.5vw,52px)] font-light leading-[0.98] text-text">
          {title}
        </h2>
      </div>

      <div className="mt-16">
        <HorizontalPin className="px-6 md:px-12" trackClassName="md:w-max">
          {collections.map((collection) => (
            <Link
              key={collection.slug}
              href={`/collections#${collection.slug}`}
              className="group relative block w-[84vw] shrink-0 snap-start overflow-hidden md:w-[420px]"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <TreatedImage
                  src={collection.image}
                  alt={collection.name}
                  fill
                  dark
                  sizes="(min-width: 768px) 420px, 84vw"
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="section-label on-dark mb-2">
                    {collection.tagline}
                  </p>
                  <h3 className="font-serif text-3xl text-dark-text">
                    {collection.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </HorizontalPin>
      </div>
    </section>
  );
}
