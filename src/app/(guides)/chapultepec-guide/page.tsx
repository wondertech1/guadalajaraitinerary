import { generateGuideMetadata } from "@/lib/seo/metadata";
import { ChapultepecGuide } from "./ChapultepecGuide";

export const metadata = generateGuideMetadata({
  title: "Chapultepec & Colonia Americana Guide 2026 — Bars, Cafés & Architecture",
  description:
    "Guadalajara's best neighborhood for walking, drinking, and eating. Bar-by-bar Chapultepec guide plus the Art Deco streets of Colonia Americana.",
  slug: "chapultepec-guide",
  keywords: ["chapultepec guadalajara", "colonia americana guadalajara", "guadalajara nightlife", "guadalajara bars", "guadalajara coffee shops"],
  publishedTime: "2026-03-05",
  modifiedTime: "2026-03-26",
});

export default function Page() {
  return <ChapultepecGuide />;
}
