import { generateGuideMetadata } from "@/lib/seo/metadata";
import { GuachimontonesDayTrip } from "./GuachimontonesDayTrip";

export const metadata = generateGuideMetadata({
  title: "Guachimontones Day Trip 2026 — Mexico's Only Circular Pyramids",
  description:
    "Mexico's only circular pyramids, 45 minutes from Tequila. Entry fees, what you're looking at, and whether to combine it with a distillery visit.",
  slug: "guachimontones-day-trip",
  keywords: [
    "guachimontones pyramids",
    "guachimontones day trip",
    "teuchitlan guadalajara",
    "circular pyramids mexico",
    "guadalajara archaeology",
  ],
  publishedTime: "2026-03-13",
  modifiedTime: "2026-03-28",
});

export default function Page() {
  return <GuachimontonesDayTrip />;
}
