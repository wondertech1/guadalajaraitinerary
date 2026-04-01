import { generateGuideMetadata } from "@/lib/seo/metadata";
import { StreetArtGuide } from "./StreetArtGuide";

export const metadata = generateGuideMetadata({
  title: "Guadalajara Street Art Guide 2026 — Murals, Routes & Muralism History",
  description:
    "From Orozco's muralism to today's street artists. Specific walls, self-guided walking routes, and Barrio de Analco's emerging scene.",
  slug: "guadalajara-street-art-guide",
  keywords: ["guadalajara street art", "guadalajara murals", "guadalajara graffiti", "orozco murals guadalajara", "barrio de analco art"],
  publishedTime: "2026-03-26",
  modifiedTime: "2026-03-30",
});

export default function Page() {
  return <StreetArtGuide />;
}
