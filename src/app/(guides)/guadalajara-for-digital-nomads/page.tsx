import { generateGuideMetadata } from "@/lib/seo/metadata";
import { DigitalNomads } from "./DigitalNomads";

export const metadata = generateGuideMetadata({
  title: "Guadalajara for Digital Nomads 2026 — Coworking, Cost of Living & Visa Guide",
  description:
    "Coworking spaces rated, cost-of-living breakdown, internet speeds tested, and the neighborhoods where remote workers actually live in GDL.",
  slug: "guadalajara-for-digital-nomads",
  keywords: ["digital nomad guadalajara", "guadalajara coworking", "guadalajara cost of living", "remote work guadalajara", "guadalajara for remote workers"],
  publishedTime: "2026-03-24",
  modifiedTime: "2026-03-30",
});

export default function Page() {
  return <DigitalNomads />;
}
