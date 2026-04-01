import { generateGuideMetadata } from "@/lib/seo/metadata";
import { SevenDayItinerary } from "./SevenDayItinerary";

export const metadata = generateGuideMetadata({
  title: "7-Day Guadalajara Itinerary 2026 — The Complete Experience",
  description:
    "A full week covering every corner: colonial Centro, artisan Tlaquepaque, Tequila distilleries, Lago de Chapala, circular pyramids, and a mountain escape.",
  slug: "7-day-guadalajara-itinerary",
  keywords: [
    "guadalajara 7 day itinerary",
    "one week in guadalajara",
    "guadalajara week itinerary",
    "things to do guadalajara one week",
    "mazamitla day trip",
  ],
  publishedTime: "2026-02-14",
  modifiedTime: "2026-03-16",
});

export default function Page() {
  return <SevenDayItinerary />;
}
