import { generateGuideMetadata } from "@/lib/seo/metadata";
import { TequilaDayTrip } from "./TequilaDayTrip";

export const metadata = generateGuideMetadata({
  title: "Tequila Day Trip from Guadalajara 2026 — Distillery Guide with Real Costs",
  description:
    "Three distilleries compared head-to-head, three transport options ranked by value, and the tourist traps to skip. Everything for the drive from GDL.",
  slug: "tequila-day-trip",
  keywords: [
    "tequila day trip from guadalajara",
    "guadalajara to tequila",
    "tequila distillery tour",
    "la fortaleza tequila tour",
    "jose cuervo tour guadalajara",
    "tequila town mexico",
    "tequila express train",
  ],
  publishedTime: "2026-02-18",
  modifiedTime: "2026-03-22",
});

export default function Page() {
  return <TequilaDayTrip />;
}
