import { generateGuideMetadata } from "@/lib/seo/metadata";
import { ZapopanGuide } from "./ZapopanGuide";

export const metadata = generateGuideMetadata({
  title: "Zapopan Guide 2026 — Basílica, MAZ Museum & Quiet Colonial Charm",
  description:
    "Zapopan beyond the basilica. MAZ contemporary art, Huentiton ravine walks, and a quieter colonial alternative to Centro's crowds.",
  slug: "zapopan-guide",
  keywords: ["zapopan guadalajara", "basilica de zapopan", "maz zapopan", "zapopan things to do", "museo de arte zapopan"],
  publishedTime: "2026-03-07",
  modifiedTime: "2026-03-26",
});

export default function Page() {
  return <ZapopanGuide />;
}
