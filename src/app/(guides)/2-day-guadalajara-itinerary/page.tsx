import { generateGuideMetadata } from "@/lib/seo/metadata";
import { TwoDayItinerary } from "./TwoDayItinerary";

export const metadata = generateGuideMetadata({
  title: "2-Day Guadalajara Itinerary 2026 — The Perfect Weekend",
  description:
    "Two days covers more than you'd think. Centro and Tlaquepaque on Day 1, Zapopan, tequila tasting, and Chapultepec nightlife on Day 2.",
  slug: "2-day-guadalajara-itinerary",
  keywords: [
    "2 days in guadalajara",
    "guadalajara weekend itinerary",
    "guadalajara 2 day trip",
    "weekend in guadalajara",
  ],
  publishedTime: "2026-02-05",
  modifiedTime: "2026-03-14",
});

export default function Page() {
  return <TwoDayItinerary />;
}
