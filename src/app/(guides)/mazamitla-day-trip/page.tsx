import { generateGuideMetadata } from "@/lib/seo/metadata";
import { MazamitlaDayTrip } from "./MazamitlaDayTrip";

export const metadata = generateGuideMetadata({
  title: "Mazamitla Day Trip from Guadalajara 2026 — Mountain Pueblo Mágico Guide",
  description:
    "Pine forests, cabins, and mountain comfort food two hours from Guadalajara. A pueblo mágico weekend escape that most tourists miss.",
  slug: "mazamitla-day-trip",
  keywords: [
    "mazamitla from guadalajara",
    "mazamitla pueblo magico",
    "mazamitla cabins",
    "guadalajara mountain day trip",
    "mazamitla jalisco",
  ],
  publishedTime: "2026-03-15",
  modifiedTime: "2026-03-26",
});

export default function Page() {
  return <MazamitlaDayTrip />;
}
