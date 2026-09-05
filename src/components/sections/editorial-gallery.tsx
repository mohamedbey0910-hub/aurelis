import { SectionLabel } from "@/components/ui/section-label";
import { TreatedImage } from "@/components/ui/treated-image";
import { placeholder } from "@/lib/images";

const items = [
  { seed: "aurelis-campagne-1", ratio: "aspect-[3/4]", span: "md:col-span-2 md:row-span-2" },
  { seed: "aurelis-campagne-2-v3", ratio: "aspect-square", span: "" },
  { seed: "aurelis-campagne-3", ratio: "aspect-[4/3]", span: "" },
  { seed: "aurelis-campagne-4", ratio: "aspect-[16/9]", span: "md:col-span-2" },
];

export function EditorialGallery({
  title = "Campagne — Lumière d'Automne",
}: {
  title?: string;
}) {
  return (
    <section className="bg-bg-2 px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel className="mb-5 block">Campagne visuelle</SectionLabel>
        <h2 className="max-w-xl font-serif text-[clamp(30px,4vw,48px)] font-light leading-[1] text-text">
          {title}
        </h2>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {items.map((item) => (
            <div
              key={item.seed}
              className={`relative overflow-hidden ${item.ratio} ${item.span}`}
            >
              <TreatedImage
                src={placeholder(item.seed, 1400, 1400)}
                alt="Image de campagne AURÉLIS"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
