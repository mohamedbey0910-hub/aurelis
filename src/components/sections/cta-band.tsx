import { RevealText } from "@/components/animations/reveal-text";
import { Button } from "@/components/ui/button";

export function CtaBand({
  lines,
  ctaLabel,
  ctaHref,
}: {
  lines: string[];
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center bg-dark-bg px-6 py-32 text-center text-dark-text md:px-12">
      <RevealText
        as="h2"
        className="max-w-3xl font-serif text-[clamp(30px,5vw,64px)] font-light leading-[1.02]"
        lines={lines}
      />
      <div className="mt-12">
        <Button href={ctaHref} variant="primary" dark>
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
}
