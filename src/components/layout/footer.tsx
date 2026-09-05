import Link from "next/link";
import { footerLinks, site, socialLinks } from "@/data/site";

function SocialIcon({ label }: { label: string }) {
  if (label === "Instagram") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3c-4.4 0-8 3.4-8 8 0 3.4 2.1 6.3 5.1 7.5-.07-.6-.13-1.6.03-2.3.15-.6 1-4.2 1-4.2s-.25-.5-.25-1.3c0-1.2.7-2.1 1.6-2.1.75 0 1.1.55 1.1 1.25 0 .75-.5 1.9-.75 3-.2.9.45 1.65 1.35 1.65 1.6 0 2.85-1.7 2.85-4.1 0-2.15-1.55-3.65-3.75-3.65-2.55 0-4.05 1.9-4.05 3.9 0 .75.3 1.55.65 2 .07.1.08.18.06.28-.07.28-.22.9-.25 1.02-.04.16-.13.2-.3.12-1.1-.5-1.8-2.1-1.8-3.4 0-2.75 2-5.3 5.8-5.3 3.05 0 5.4 2.2 5.4 5.1 0 3-1.9 5.5-4.55 5.5-.9 0-1.75-.47-2.03-1.02l-.55 2.1c-.2.77-.75 1.72-1.1 2.3.85.26 1.75.4 2.68.4 4.4 0 8-3.6 8-8s-3.6-8-8-8z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-dark-line bg-dark-bg px-6 pb-10 pt-24 text-dark-text md:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-12 md:grid-cols-5">
        <div className="col-span-2">
          <p className="font-serif text-3xl tracking-[0.1em] text-accent-light">
            {site.name}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-dark-text-dim">
            {site.description}
          </p>
          <div className="mt-8 flex gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-dark-line text-dark-text-dim transition-colors hover:border-accent-light hover:text-accent-light"
              >
                <SocialIcon label={s.label} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="section-label on-dark mb-5">La Maison</p>
          <ul className="flex flex-col gap-3 text-sm text-dark-text-dim">
            {footerLinks.maison.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="link-underline hover:text-dark-text">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="section-label on-dark mb-5">Parfums</p>
          <ul className="flex flex-col gap-3 text-sm text-dark-text-dim">
            {footerLinks.parfums.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="link-underline hover:text-dark-text">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="section-label on-dark mb-5">Contact</p>
          <ul className="flex flex-col gap-3 text-sm text-dark-text-dim">
            <li>{site.address}</li>
            <li>{site.phone}</li>
            <li>{site.email}</li>
            <li>{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-20 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-dark-line pt-8 text-xs text-dark-text-dim md:flex-row">
        <p>© {new Date().getFullYear()} {site.name}. Tous droits réservés.</p>
        <div className="flex gap-6">
          <Link href="/faq" className="link-underline">Livraison & retours</Link>
          <Link href="/contact" className="link-underline">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
