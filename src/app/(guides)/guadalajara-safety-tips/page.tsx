import { generateGuideMetadata } from "@/lib/seo/metadata";
import { SafetyTips } from "./SafetyTips";

export const metadata = generateGuideMetadata({
  title: "Is Guadalajara Safe? 2026 Safety Guide — Zone-by-Zone Honest Breakdown",
  description:
    "Zone-by-zone safety breakdown with no fearmongering and no sugarcoating. Which neighborhoods are fine, which to avoid, and the scams to watch for.",
  slug: "guadalajara-safety-tips",
  keywords: ["is guadalajara safe", "guadalajara safety 2026", "guadalajara safe neighborhoods"],
  publishedTime: "2026-01-22",
  modifiedTime: "2026-03-12",
});

export default function Page() {
  return <SafetyTips />;
}
