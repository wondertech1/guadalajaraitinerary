import { generateGuideMetadata } from "@/lib/seo/metadata";
import { FiveDayItinerary } from "./FiveDayItinerary";

export const metadata = generateGuideMetadata({
  title: "5-Day Guadalajara Itinerary 2026 — The Deep Dive",
  description:
    "Five days unlocks the full city plus Tequila, Lago de Chapala, and Tonalá's Thursday market. Day-by-day with transport and costs.",
  slug: "5-day-guadalajara-itinerary",
  keywords: [
    "guadalajara 5 day itinerary",
    "5 days in guadalajara",
    "guadalajara extended trip",
    "lago de chapala day trip",
    "tonala market guadalajara",
  ],
  publishedTime: "2026-02-10",
  modifiedTime: "2026-03-16",
});

export default function Page() {
  return <FiveDayItinerary />;
}
