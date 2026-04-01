import { generateGuideMetadata } from "@/lib/seo/metadata";
import { CdmxToGdl } from "./CdmxToGdl";

export const metadata = generateGuideMetadata({
  title: "Mexico City to Guadalajara 2026 — Flight, Bus & Driving Compared",
  description:
    "Flight vs bus vs driving compared. Journey times, carrier picks, terminal logistics, and which option wins at every budget level.",
  slug: "mexico-city-to-guadalajara",
  keywords: ["mexico city to guadalajara", "cdmx to guadalajara", "guadalajara flight", "guadalajara bus from mexico city", "how to get to guadalajara"],
  publishedTime: "2026-03-28",
  modifiedTime: "2026-03-30",
});

export default function Page() {
  return <CdmxToGdl />;
}
