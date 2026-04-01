import { generateGuideMetadata } from "@/lib/seo/metadata";
import { CentroHistorico } from "./CentroHistorico";

export const metadata = generateGuideMetadata({
  title: "Centro Histórico Guadalajara Guide 2026 — Cathedral, Cabañas & Markets",
  description:
    "Walking route through Guadalajara's colonial core. Cathedral, Hospicio Cabañas, Mercado San Juan de Dios, and the plazas that connect them.",
  slug: "centro-historico-guide",
  keywords: ["guadalajara centro historico", "guadalajara cathedral", "hospicio cabañas", "mercado san juan de dios", "guadalajara old town"],
  publishedTime: "2026-03-01",
  modifiedTime: "2026-03-28",
});

export default function Page() {
  return <CentroHistorico />;
}
