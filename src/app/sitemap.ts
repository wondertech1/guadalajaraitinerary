import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://guadalajaraitinerary.com";

  const routes: { url: string; lastModified: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
    { url: "", lastModified: "2026-03-30", priority: 1, changeFrequency: "weekly" },
    { url: "/3-day-guadalajara-itinerary", lastModified: "2026-03-15", priority: 0.95, changeFrequency: "monthly" },
    { url: "/1-day-guadalajara-itinerary", lastModified: "2026-03-14", priority: 0.9, changeFrequency: "monthly" },
    { url: "/2-day-guadalajara-itinerary", lastModified: "2026-03-14", priority: 0.9, changeFrequency: "monthly" },
    { url: "/5-day-guadalajara-itinerary", lastModified: "2026-03-16", priority: 0.9, changeFrequency: "monthly" },
    { url: "/7-day-guadalajara-itinerary", lastModified: "2026-03-16", priority: 0.9, changeFrequency: "monthly" },
    { url: "/tequila-day-trip", lastModified: "2026-03-22", priority: 0.9, changeFrequency: "monthly" },
    { url: "/guadalajara-food-guide", lastModified: "2026-03-20", priority: 0.9, changeFrequency: "monthly" },
    { url: "/where-to-stay-guadalajara", lastModified: "2026-03-18", priority: 0.85, changeFrequency: "monthly" },
    { url: "/best-time-to-visit-guadalajara", lastModified: "2026-03-08", priority: 0.85, changeFrequency: "monthly" },
    { url: "/getting-around-guadalajara", lastModified: "2026-03-10", priority: 0.85, changeFrequency: "monthly" },
    { url: "/guadalajara-budget-guide", lastModified: "2026-03-10", priority: 0.85, changeFrequency: "monthly" },
    { url: "/guadalajara-safety-tips", lastModified: "2026-03-12", priority: 0.85, changeFrequency: "monthly" },
    { url: "/guadalajara-nightlife-guide", lastModified: "2026-03-30", priority: 0.8, changeFrequency: "monthly" },
    { url: "/centro-historico-guide", lastModified: "2026-03-28", priority: 0.8, changeFrequency: "monthly" },
    { url: "/tlaquepaque-guide", lastModified: "2026-03-28", priority: 0.8, changeFrequency: "monthly" },
    { url: "/chapultepec-guide", lastModified: "2026-03-26", priority: 0.8, changeFrequency: "monthly" },
    { url: "/zapopan-guide", lastModified: "2026-03-26", priority: 0.8, changeFrequency: "monthly" },
    { url: "/tonala-guide", lastModified: "2026-03-24", priority: 0.8, changeFrequency: "monthly" },
    { url: "/lago-de-chapala-day-trip", lastModified: "2026-03-28", priority: 0.8, changeFrequency: "monthly" },
    { url: "/guachimontones-day-trip", lastModified: "2026-03-28", priority: 0.8, changeFrequency: "monthly" },
    { url: "/mazamitla-day-trip", lastModified: "2026-03-26", priority: 0.75, changeFrequency: "monthly" },
    { url: "/guadalajara-for-couples", lastModified: "2026-03-30", priority: 0.75, changeFrequency: "monthly" },
    { url: "/guadalajara-solo-travel", lastModified: "2026-03-30", priority: 0.75, changeFrequency: "monthly" },
    { url: "/guadalajara-for-digital-nomads", lastModified: "2026-03-30", priority: 0.75, changeFrequency: "monthly" },
    { url: "/guadalajara-vs-mexico-city", lastModified: "2026-03-30", priority: 0.75, changeFrequency: "monthly" },
    { url: "/guadalajara-street-art-guide", lastModified: "2026-03-30", priority: 0.7, changeFrequency: "monthly" },
    { url: "/guadalajara-craft-beer-mezcal", lastModified: "2026-03-30", priority: 0.7, changeFrequency: "monthly" },
    { url: "/mercado-san-juan-de-dios-guide", lastModified: "2026-03-29", priority: 0.7, changeFrequency: "monthly" },
    { url: "/hospicio-cabanas-guide", lastModified: "2026-03-29", priority: 0.7, changeFrequency: "monthly" },
    { url: "/mexico-city-to-guadalajara", lastModified: "2026-03-30", priority: 0.65, changeFrequency: "monthly" },
    { url: "/about", lastModified: "2026-01-08", priority: 0.5, changeFrequency: "yearly" },
  ];

  return routes.map((route) => ({
    url: `${base}${route.url}`,
    lastModified: new Date(route.lastModified),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
