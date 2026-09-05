import { Testimonial } from "@/data/testimonials";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionLabel } from "@/components/ui/section-label";

export function PressQuotes({
  testimonials,
  dark = false,
}: {
  testimonials: Testimonial[];
  dark?: boolean;
}) {
  return (
    <section
      className={
        dark
          ? "bg-dark-bg px-6 py-24 text-dark-text md:px-12 md:py-32"
          : "bg-bg px-6 py-24 text-text md:px-12 md:py-32"
      }
    >
      <div className="mx-auto max-w-5xl text-center">
        <SectionLabel dark={dark} className="mb-14 block">
          Ce qu&rsquo;ils en disent
        </SectionLabel>

        <div className="flex flex-col gap-16">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.05}>
              <p
                className={
                  "font-serif text-[clamp(20px,2.6vw,32px)] font-light italic leading-[1.35] " +
                  (dark ? "text-dark-text" : "text-text")
                }
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <p
                className={
                  "mt-6 text-xs uppercase tracking-[0.2em] " +
                  (dark ? "text-dark-text-dim" : "text-text-muted")
                }
              >
                {t.name} — {t.context}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
