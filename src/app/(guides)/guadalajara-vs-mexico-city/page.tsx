import { generateGuideMetadata } from "@/lib/seo/metadata";
import { GdlVsCdmx } from "./GdlVsCdmx";

export const metadata = generateGuideMetadata({
  title: "Guadalajara vs Mexico City 2026 — Honest Comparison for Travelers",
  description:
    "Side-by-side comparison across 16 categories. Cost, food, safety, transit, nightlife — and which city fits which type of traveler.",
  slug: "guadalajara-vs-mexico-city",
  keywords: ["guadalajara vs mexico city", "gdl vs cdmx", "guadalajara or mexico city", "which is better guadalajara or mexico city"],
  publishedTime: "2026-03-25",
  modifiedTime: "2026-03-30",
});

export default function Page() {
  return <GdlVsCdmx />;
}
