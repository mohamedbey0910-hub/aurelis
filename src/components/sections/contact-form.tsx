"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line px-8 py-12 text-center">
        <p className="font-serif text-2xl font-light text-text">
          Merci pour votre message.
        </p>
        <p className="mt-3 text-[15px] text-text-dim">
          Notre équipe vous répondra sous 48h ouvrées.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-text-muted">
            Nom
          </label>
          <input
            type="text"
            required
            className="w-full border border-line bg-transparent px-4 py-3 text-[15px] text-text outline-none transition-colors focus:border-accent"
          />
        </div>
        <div>
          <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-text-muted">
            Email
          </label>
          <input
            type="email"
            required
            className="w-full border border-line bg-transparent px-4 py-3 text-[15px] text-text outline-none transition-colors focus:border-accent"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-text-muted">
          Sujet
        </label>
        <select
          required
          defaultValue=""
          className="w-full border border-line bg-transparent px-4 py-3 text-[15px] text-text outline-none transition-colors focus:border-accent"
        >
          <option value="" disabled>
            Choisissez un sujet
          </option>
          <option>Conseil olfactif</option>
          <option>Échantillon</option>
          <option>Commande & livraison</option>
          <option>Presse</option>
          <option>Autre</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-text-muted">
          Message
        </label>
        <textarea
          required
          rows={5}
          className="w-full resize-none border border-line bg-transparent px-4 py-3 text-[15px] text-text outline-none transition-colors focus:border-accent"
        />
      </div>

      <div className="mt-2">
        <Button type="submit">Envoyer le message</Button>
      </div>
    </form>
  );
}
