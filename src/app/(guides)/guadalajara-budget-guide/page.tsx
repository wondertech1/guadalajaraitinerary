import { generateGuideMetadata } from "@/lib/seo/metadata";
import { BudgetGuide } from "./BudgetGuide";

export const metadata = generateGuideMetadata({
  title: "Guadalajara Budget Guide 2026 — Daily Costs, Money Tips & 3-Tier Breakdown",
  description:
    "Daily budgets at three tiers: backpacker, mid-range, and splurge. ATM strategy, tipping norms, and how GDL compares to CDMX and Oaxaca.",
  slug: "guadalajara-budget-guide",
  keywords: ["guadalajara budget", "guadalajara daily costs", "guadalajara prices 2026"],
  publishedTime: "2026-02-25",
  modifiedTime: "2026-03-10",
});

export default function Page() {
  return <BudgetGuide />;
}
