import { generateGuideMetadata } from "@/lib/seo/metadata";
import { MercadoGuide } from "./MercadoGuide";

export const metadata = generateGuideMetadata({
  title: "Mercado San Juan de Dios Guide 2026 — Floor-by-Floor Breakdown",
  description:
    "Latin America's largest indoor market, floor by floor. What to eat on level 3, what to buy on level 1, and why to skip level 2 entirely.",
  slug: "mercado-san-juan-de-dios-guide",
  keywords: ["mercado san juan de dios", "guadalajara market", "san juan de dios guadalajara", "largest market latin america", "guadalajara shopping"],
  publishedTime: "2026-03-19",
  modifiedTime: "2026-03-29",
});

export default function Page() {
  return <MercadoGuide />;
}
