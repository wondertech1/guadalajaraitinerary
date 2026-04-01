import { generateGuideMetadata } from "@/lib/seo/metadata";
import { TlaqupaqueGuide } from "./TlaquepaqueGuide";

export const metadata = generateGuideMetadata({
  title: "Tlaquepaque Guide 2026 — Artisan Shopping, El Parián & What to Buy",
  description:
    "Gallery-by-gallery walkthrough of Mexico's top artisan neighborhood. Glass workshops, El Parián mariachi, what to buy, and what's overpriced.",
  slug: "tlaquepaque-guide",
  keywords: ["tlaquepaque guadalajara", "tlaquepaque shopping", "el parian guadalajara", "tlaquepaque art galleries", "blown glass guadalajara"],
  publishedTime: "2026-03-03",
  modifiedTime: "2026-03-28",
});

export default function Page() {
  return <TlaqupaqueGuide />;
}
