import { business } from "./site-data";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.wigsbyjolie.com";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: business.name,
    url: siteUrl,
    telephone: business.phoneDisplay,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1562 SE 3rd Ct.",
      addressLocality: "Deerfield Beach",
      addressRegion: "FL",
      postalCode: "33441",
      addressCountry: "US",
    },
    makesOffer: [
      "Custom wig consultations and fittings",
      "Human-hair and synthetic wig options",
      "Hair toppers and coverage solutions",
      "Hair extensions",
      "Professional wig styling",
      "Wig maintenance and care",
    ],
  };
}
