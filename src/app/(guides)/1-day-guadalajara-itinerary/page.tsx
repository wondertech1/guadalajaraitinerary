import { generateGuideMetadata } from "@/lib/seo/metadata";
import { OneDayItinerary } from "./OneDayItinerary";

export const metadata = generateGuideMetadata({
  title: "1-Day Guadalajara Itinerary 2026 — The Best of GDL in 24 Hours",
  description:
    "Centro Histórico to Tlaquepaque in one packed day. Birria at 7am, Orozco murals by 10, artisan shopping by 2, mezcal by sunset.",
  slug: "1-day-guadalajara-itinerary",
  keywords: [
    "guadalajara 1 day itinerary",
    "one day in guadalajara",
    "guadalajara day trip",
    "24 hours in guadalajara",
  ],
  publishedTime: "2026-02-02",
  modifiedTime: "2026-03-14",
});

export default function Page() {
  return <OneDayItinerary />;
}
