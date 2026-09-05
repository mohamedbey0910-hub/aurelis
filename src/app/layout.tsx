import type { Metadata } from "next";
import { fraunces, manrope } from "@/lib/fonts";
import { site } from "@/data/site";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { GrainOverlay } from "@/components/layout/grain-overlay";
import { PageTransition } from "@/components/layout/page-transition";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.baseline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} — ${site.baseline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${manrope.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-bg text-text">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: site.name,
              description: site.description,
              url: site.url,
              address: site.address,
              email: site.email,
              telephone: site.phone,
            }),
          }}
        />
        <SmoothScroll>
          <GrainOverlay />
          <PageTransition />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
