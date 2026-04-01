import { generateGuideMetadata } from "@/lib/seo/metadata";
import { ForCouples } from "./ForCouples";

export const metadata = generateGuideMetadata({
  title: "Guadalajara for Couples 2026 — Romantic Itinerary, Date Nights & Best Stays",
  description:
    "Romantic restaurants, mezcal-and-pottery date days, and boutique hotels that don't charge resort prices. A 3-day couples itinerary.",
  slug: "guadalajara-for-couples",
  keywords: ["guadalajara for couples", "guadalajara romantic", "guadalajara honeymoon", "guadalajara date night", "romantic things to do guadalajara"],
  publishedTime: "2026-03-22",
  modifiedTime: "2026-03-30",
});

export default function Page() {
  return <ForCouples />;
}
