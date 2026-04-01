import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans, Inconsolata } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inconsolata",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://guadalajaraitinerary.com"),
  title: {
    default: "Guadalajara Itinerary 2026 — Honest Travel Guides by Locals",
    template: "%s | Guadalajara Itinerary",
  },
  description:
    "Opinionated Guadalajara travel guides with real prices, honest verdicts, and stop-by-stop itineraries. Birria spots, tequila day trips, and neighborhood deep dives.",
  keywords: [
    "guadalajara itinerary",
    "guadalajara travel guide",
    "things to do in guadalajara",
    "guadalajara mexico",
    "tequila day trip",
    "tlaquepaque",
    "guadalajara food guide",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Guadalajara Itinerary",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jakarta.variable} ${inconsolata.variable}`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P6D9HW5S2H"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-P6D9HW5S2H');`}
        </Script>
      </head>
      <body className="min-h-dvh flex flex-col bg-piedra text-obsidiana">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
