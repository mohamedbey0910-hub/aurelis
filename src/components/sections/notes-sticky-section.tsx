"use client";

import { OlfactoryNote } from "@/data/notes";
import { StickySwap } from "@/components/animations/sticky-swap";

// StickySwap takes a renderItem function prop, which can't cross the
// server/client boundary — this wrapper stays client-side so the function
// is defined locally instead of being passed in from a Server Component.
export function NotesStickySection({ notes }: { notes: OlfactoryNote[] }) {
  return (
    <StickySwap
      items={notes.map((n) => ({ id: n.slug, image: n.image, label: n.name }))}
      renderItem={(item) => {
        const note = notes.find((n) => n.slug === item.id)!;
        return (
          <div className="max-w-md py-6">
            <p className="text-xs uppercase tracking-[0.2em] text-accent-dim">
              {note.origin}
            </p>
            <h3 className="mt-3 font-serif text-3xl font-light text-text">
              {note.name}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-text-dim">
              {note.description}
            </p>
          </div>
        );
      }}
    />
  );
}
