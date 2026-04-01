import { generateGuideMetadata } from "@/lib/seo/metadata";
import { BestTimeToVisit } from "./BestTimeToVisit";

export const metadata = generateGuideMetadata({
  title: "Best Time to Visit Guadalajara 2026 — Month-by-Month Guide",
  description:
    "Month-by-month weather, crowd levels, pricing, and festivals. Why October is magic, why August is miserable, and when flights are cheapest.",
  slug: "best-time-to-visit-guadalajara",
  keywords: ["best time to visit guadalajara", "guadalajara weather", "guadalajara rainy season", "fiestas de octubre guadalajara", "guadalajara festivals"],
  publishedTime: "2026-02-21",
  modifiedTime: "2026-03-08",
});

export default function Page() {
  return <BestTimeToVisit />;
}
