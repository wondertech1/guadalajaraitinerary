import { generateGuideMetadata } from "@/lib/seo/metadata";
import { LagoDeChapala } from "./LagoDeChapala";

export const metadata = generateGuideMetadata({
  title: "Lago de Chapala Day Trip 2026 — Ajijic, Chapala & What to Expect",
  description:
    "Ajijic's art scene, Chapala's boardwalk, and the expat factor nobody warns you about. Transport, costs, and whether it's worth the drive.",
  slug: "lago-de-chapala-day-trip",
  keywords: [
    "lake chapala day trip",
    "lago de chapala guadalajara",
    "ajijic mexico",
    "chapala jalisco",
    "guadalajara day trips",
  ],
  publishedTime: "2026-03-11",
  modifiedTime: "2026-03-28",
});

export default function Page() {
  return <LagoDeChapala />;
}
