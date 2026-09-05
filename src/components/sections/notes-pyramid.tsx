import { FadeIn } from "@/components/animations/fade-in";
import { SectionLabel } from "@/components/ui/section-label";

type NotesPyramidProps = {
  notes: { top: string[]; heart: string[]; base: string[] };
  dark?: boolean;
};

const rows = [
  { key: "top" as const, label: "Notes de tête" },
  { key: "heart" as const, label: "Notes de cœur" },
  { key: "base" as const, label: "Notes de fond" },
];

export function NotesPyramid({ notes, dark = false }: NotesPyramidProps) {
  return (
    <div
      className={
        dark
          ? "grid grid-cols-1 gap-10 md:grid-cols-3"
          : "grid grid-cols-1 gap-10 md:grid-cols-3"
      }
    >
      {rows.map((row, i) => (
        <FadeIn key={row.key} delay={i * 0.08}>
          <div
            className={
              dark
                ? "border-t border-dark-line pt-6"
                : "border-t border-line pt-6"
            }
          >
            <SectionLabel dark={dark} className="mb-4 block">
              {row.label}
            </SectionLabel>
            <ul className="flex flex-col gap-2">
              {notes[row.key].map((note) => (
                <li
                  key={note}
                  className={
                    "font-serif text-xl font-light " +
                    (dark ? "text-dark-text" : "text-text")
                  }
                >
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
