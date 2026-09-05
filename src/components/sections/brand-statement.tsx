import { RevealText } from "@/components/animations/reveal-text";
import { SectionLabel } from "@/components/ui/section-label";

export function BrandStatement() {
  return (
    <section className="flex min-h-[70vh] items-center bg-bg px-6 py-32 md:px-12">
      <div className="mx-auto max-w-5xl text-center">
        <SectionLabel className="mb-8 block">La Maison</SectionLabel>
        <RevealText
          as="p"
          className="font-serif text-[clamp(28px,5vw,58px)] font-light leading-[1.08] text-text"
          lines={[
            "Nous ne composons pas des parfums.",
            "Nous composons des souvenirs qui n'existent pas encore —",
            "à porter sur la peau, comme une seconde mémoire.",
          ]}
        />
      </div>
    </section>
  );
}
