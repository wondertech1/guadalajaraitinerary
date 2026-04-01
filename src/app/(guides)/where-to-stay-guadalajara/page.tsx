import { generateGuideMetadata } from "@/lib/seo/metadata";
import { WhereToStay } from "./WhereToStay";

export const metadata = generateGuideMetadata({
  title: "Where to Stay in Guadalajara 2026 — Neighborhood Guide with Honest Trade-Offs",
  description:
    "Six neighborhoods compared with trade-offs nobody else mentions. Price ranges, walkability scores, and who each area is actually best for.",
  slug: "where-to-stay-guadalajara",
  keywords: ["where to stay guadalajara", "guadalajara neighborhoods", "colonia americana guadalajara"],
  publishedTime: "2026-01-12",
  modifiedTime: "2026-03-18",
});

export default function Page() {
  return <WhereToStay />;
}
