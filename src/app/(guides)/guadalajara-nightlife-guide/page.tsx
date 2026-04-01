import { generateGuideMetadata } from "@/lib/seo/metadata";
import { NightlifeGuide } from "./NightlifeGuide";

export const metadata = generateGuideMetadata({
  title: "Guadalajara Nightlife Guide 2026 — Best Bars, Live Music & Late-Night Tacos",
  description:
    "Chapultepec bar crawl mapped out block by block. Mezcalerías, rooftop cocktails, live music venues, and the taco stands open until 3am.",
  slug: "guadalajara-nightlife-guide",
  keywords: ["guadalajara nightlife", "guadalajara bars", "chapultepec bars guadalajara", "guadalajara live music", "guadalajara clubs"],
  publishedTime: "2026-03-16",
  modifiedTime: "2026-03-30",
});

export default function Page() {
  return <NightlifeGuide />;
}
