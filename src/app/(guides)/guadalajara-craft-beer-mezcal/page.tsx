import { generateGuideMetadata } from "@/lib/seo/metadata";
import { CraftBeerMezcal } from "./CraftBeerMezcal";

export const metadata = generateGuideMetadata({
  title: "Guadalajara Craft Beer & Mezcal Guide 2026 — Bars, Raicilla & Tasting Tips",
  description:
    "Mezcal, raicilla, craft beer — Guadalajara's drink scene beyond tequila. Specific bars, tasting terminology, and what to order first.",
  slug: "guadalajara-craft-beer-mezcal",
  keywords: ["guadalajara craft beer", "guadalajara mezcal bars", "raicilla jalisco", "guadalajara brewery", "mezcal tasting guadalajara"],
  publishedTime: "2026-03-18",
  modifiedTime: "2026-03-30",
});

export default function Page() {
  return <CraftBeerMezcal />;
}
