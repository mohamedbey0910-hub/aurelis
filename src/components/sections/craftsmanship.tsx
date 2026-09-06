import { ParallaxImage } from "@/components/animations/parallax-image";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionLabel } from "@/components/ui/section-label";
import { localAsset } from "@/lib/images";

export function Craftsmanship() {
  return (
    <section className="bg-bg px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
        <ParallaxImage
          src={localAsset("/images/maison/craftsmanship.jpg")}
          alt="Un parfumeur AURÉLIS ajustant une composition en laboratoire"
          className="aspect-[4/5] w-full"
          sizes="(min-width: 768px) 45vw, 100vw"
          strength={14}
        />
        <FadeIn direction="right">
          <SectionLabel className="mb-5 block">Savoir-faire</SectionLabel>
          <h2 className="max-w-md font-serif text-[clamp(30px,4vw,48px)] font-light leading-[1] text-text">
            Chaque flacon porte la main de celui qui l&rsquo;a composé.
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-text-dim">
            Nos parfumeurs travaillent en petites séries, à Grasse et à Paris,
            selon des méthodes largement inchangées depuis la fondation de la
            maison. Aucune composition n&rsquo;est validée avant d&rsquo;avoir
            été portée, sur peau, pendant trente jours.
          </p>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-text-dim">
            Les matières premières sont sourcées directement auprès des
            producteurs — récoltants d&rsquo;iris toscan, distillateurs
            d&rsquo;oud assamais — pour garantir une traçabilité totale, du
            champ au flacon.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
