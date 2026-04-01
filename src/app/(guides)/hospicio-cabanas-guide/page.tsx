import { generateGuideMetadata } from "@/lib/seo/metadata";
import { HospicioCabanas } from "./HospicioCabanas";

export const metadata = generateGuideMetadata({
  title: "Hospicio Cabañas Guide 2026 — Orozco's Man of Fire & UNESCO World Heritage Site",
  description:
    "Orozco's Man of Fire and the UNESCO chapel that houses it. What the murals mean, where to stand, and why this is Guadalajara's #1 sight.",
  slug: "hospicio-cabanas-guide",
  keywords: ["hospicio cabañas", "hospicio cabanas guadalajara", "orozco murals", "man of fire guadalajara", "unesco guadalajara"],
  publishedTime: "2026-03-20",
  modifiedTime: "2026-03-29",
});

export default function Page() {
  return <HospicioCabanas />;
}
