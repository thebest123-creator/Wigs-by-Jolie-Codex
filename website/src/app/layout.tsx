import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileActionBar } from "@/components/MobileActionBar";
import { localBusinessJsonLd, siteUrl } from "@/lib/seo";
import { business } from "@/lib/site-data";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Wigs by Jolie | Premium Wigs in Deerfield Beach",
    template: "%s | Wigs by Jolie",
  },
  description:
    "Premium wigs, toppers, extensions, styling, and care with Jolie in Deerfield Beach, Florida.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Wigs by Jolie",
    description:
      "Premium wigs, toppers, extensions, styling, and care in Deerfield Beach.",
    url: siteUrl,
    siteName: business.name,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${sans.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
        <Header />
        {children}
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
