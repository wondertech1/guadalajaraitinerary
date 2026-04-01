import { generateGuideMetadata } from "@/lib/seo/metadata";
import { FoodGuide } from "./FoodGuide";

export const metadata = generateGuideMetadata({
  title: "Guadalajara Food Guide 2026 — 40 Dishes, Real Prices, Honest Verdicts",
  description:
    "40 dishes, the exact stalls to eat them at, and what to skip. Birria, tortas ahogadas, tejuino, and the food stalls where tapatíos actually eat.",
  slug: "guadalajara-food-guide",
  keywords: [
    "guadalajara food guide",
    "guadalajara street food",
    "birria guadalajara",
    "tortas ahogadas",
    "best restaurants guadalajara",
    "guadalajara food tour",
    "what to eat in guadalajara",
  ],
  publishedTime: "2026-01-17",
  modifiedTime: "2026-03-20",
});

export default function Page() {
  return <FoodGuide />;
}
