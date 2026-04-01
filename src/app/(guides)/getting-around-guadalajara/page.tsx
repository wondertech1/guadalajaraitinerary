import { generateGuideMetadata } from "@/lib/seo/metadata";
import { GettingAround } from "./GettingAround";

export const metadata = generateGuideMetadata({
  title: "Getting Around Guadalajara 2026 — Uber, Metro, Bus & Airport Transfer Guide",
  description:
    "Uber vs taxi vs Mi Macro — what actually works in Guadalajara. Airport transfers, in-city transport, and the routes where you should just walk.",
  slug: "getting-around-guadalajara",
  keywords: ["guadalajara transportation", "guadalajara uber", "guadalajara airport transfer", "mi macro periferico", "guadalajara metro", "getting around guadalajara"],
  publishedTime: "2026-01-26",
  modifiedTime: "2026-03-10",
});

export default function Page() {
  return <GettingAround />;
}
