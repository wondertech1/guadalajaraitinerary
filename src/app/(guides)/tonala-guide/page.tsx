import { generateGuideMetadata } from "@/lib/seo/metadata";
import { TonalaGuide } from "./TonalaGuide";

export const metadata = generateGuideMetadata({
  title: "Tonalá Market Guide 2026 — Thursday & Sunday Tianguis, Blown Glass & Negotiation Tips",
  description:
    "Thursday and Sunday tianguis at Mexico's biggest open-air artisan market. Blown glass, papier-mâché, pottery, and how to negotiate.",
  slug: "tonala-guide",
  keywords: ["tonala market guadalajara", "tonala tianguis", "tonala blown glass", "tonala thursday market", "guadalajara artisan market"],
  publishedTime: "2026-03-09",
  modifiedTime: "2026-03-24",
});

export default function Page() {
  return <TonalaGuide />;
}
