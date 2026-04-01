import type { Metadata } from "next";
import { AboutPage } from "./AboutPage";

export const metadata: Metadata = {
  title: "About — Guadalajara Itinerary",
  description:
    "Meet the Guadalajara Itinerary team. How we research, verify prices, and maintain guides across 28 cities — plus how to contact us with corrections.",
  alternates: { canonical: "https://guadalajaraitinerary.com/about" },
};

export default function Page() {
  return <AboutPage />;
}
