import { generateGuideMetadata } from "@/lib/seo/metadata";
import { ThreeDayItinerary } from "./ThreeDayItinerary";

export const metadata = generateGuideMetadata({
  title: "3-Day Guadalajara Itinerary 2026 — The Perfect First Trip",
  description:
    "Three days, 21 stops, one Tequila day trip. A tested route through Centro, Tlaquepaque, and Chapultepec with every price in MXN and nothing sugarcoated.",
  slug: "3-day-guadalajara-itinerary",
  keywords: [
    "3 days in guadalajara",
    "guadalajara 3 day itinerary",
    "guadalajara itinerary",
    "what to do in guadalajara",
    "tequila day trip from guadalajara",
  ],
  publishedTime: "2026-01-08",
  modifiedTime: "2026-03-15",
});

export default function Page() {
  return <ThreeDayItinerary />;
}
