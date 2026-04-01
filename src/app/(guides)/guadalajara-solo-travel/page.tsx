import { generateGuideMetadata } from "@/lib/seo/metadata";
import { SoloTravel } from "./SoloTravel";

export const metadata = generateGuideMetadata({
  title: "Solo Travel in Guadalajara 2026 — Safety, Hostels & Meeting People",
  description:
    "Social hostels, solo-friendly day trips, and the neighborhoods where you'll feel safest walking alone. Includes female solo travel specifics.",
  slug: "guadalajara-solo-travel",
  keywords: ["solo travel guadalajara", "guadalajara alone", "guadalajara solo female travel", "guadalajara hostels", "is guadalajara safe alone"],
  publishedTime: "2026-03-23",
  modifiedTime: "2026-03-30",
});

export default function Page() {
  return <SoloTravel />;
}
