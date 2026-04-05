export const BASE_URL = "https://guadalajaraitinerary.com";

export interface GuideLink {
  label: string;
  href: string;
  kicker?: string;
  description?: string;
  category: "itinerary" | "planning" | "food" | "neighborhood" | "day-trip" | "audience";
  accentColor: string;
  image: string;
  imageAlt: string;
}

export const guideLinks: GuideLink[] = [
  // Itineraries
  {
    label: "1-Day Itinerary",
    href: "/1-day-guadalajara-itinerary",
    kicker: "Sprint",
    description: "Centro Histórico + Tlaquepaque in one packed day",
    category: "itinerary",
    accentColor: "cantera",
    image: "/images/32-guadalajara-cathedral.jpg",
    imageAlt: "Guadalajara cathedral at golden hour",
  },
  {
    label: "2-Day Itinerary",
    href: "/2-day-guadalajara-itinerary",
    kicker: "Weekend",
    description: "Add Chapultepec nightlife and a tequila tasting",
    category: "itinerary",
    accentColor: "cantera",
    image: "/images/26-tlaquepaque-colorful-street.jpg",
    imageAlt: "Colorful street in Tlaquepaque",
  },
  {
    label: "3-Day Itinerary",
    href: "/3-day-guadalajara-itinerary",
    kicker: "Recommended",
    description: "The sweet spot — city highlights + Tequila day trip",
    category: "itinerary",
    accentColor: "tequila",
    image: "/images/40-agave-fields-tequila.jpg",
    imageAlt: "Agave fields near Tequila, Jalisco",
  },
  {
    label: "5-Day Itinerary",
    href: "/5-day-guadalajara-itinerary",
    kicker: "Deep Dive",
    description: "Full city + Tequila + Lago de Chapala",
    category: "itinerary",
    accentColor: "agave",
    image: "/images/28-lake-chapala-sunset.jpg",
    imageAlt: "Lake Chapala sunset with mountains",
  },
  {
    label: "7-Day Itinerary",
    href: "/7-day-guadalajara-itinerary",
    kicker: "Full Week",
    description: "Extended with Guachimontones + Mazamitla",
    category: "itinerary",
    accentColor: "mariachi",
    image: "/images/38-guachimontones-aerial.jpg",
    imageAlt: "Guachimontones circular pyramids",
  },
  // Planning
  {
    label: "Where to Stay",
    href: "/where-to-stay-guadalajara",
    description: "Neighborhood breakdown with honest trade-offs",
    category: "planning",
    accentColor: "mariachi",
    image: "/images/31-colonial-courtyard.jpg",
    imageAlt: "Boutique hotel in Guadalajara",
  },
  {
    label: "Best Time to Visit",
    href: "/best-time-to-visit-guadalajara",
    description: "Month-by-month with fiestas calendar",
    category: "planning",
    accentColor: "tequila",
    image: "/images/10-colonial-plaza-jacarandas.jpg",
    imageAlt: "Guadalajara plaza with jacaranda trees",
  },
  {
    label: "Getting Around",
    href: "/getting-around-guadalajara",
    description: "Mi Macro, Uber vs taxi, real costs",
    category: "planning",
    accentColor: "agave",
    image: "/images/18-light-rail-station.jpg",
    imageAlt: "Guadalajara light rail station",
  },
  {
    label: "Budget Guide",
    href: "/guadalajara-budget-guide",
    description: "Daily cost breakdowns at 3 tiers",
    category: "planning",
    accentColor: "agave",
    image: "/images/20-market-pesos-produce.jpg",
    imageAlt: "Mexican pesos and market stall",
  },
  {
    label: "Safety Tips",
    href: "/guadalajara-safety-tips",
    description: "Zone-by-zone honest breakdown",
    category: "planning",
    accentColor: "cantera",
    image: "/images/34-busy-pedestrian-street.jpg",
    imageAlt: "Busy Guadalajara pedestrian street",
  },
  // Food
  {
    label: "Food Guide",
    href: "/guadalajara-food-guide",
    description: "Birria, tortas ahogadas, tejuino — stall-level specifics",
    category: "food",
    accentColor: "cantera",
    image: "/images/19-birria-tacos.jpg",
    imageAlt: "Birria tacos with consommé",
  },
  {
    label: "Nightlife Guide",
    href: "/guadalajara-nightlife-guide",
    description: "Chapultepec corridor, mezcalerías, mariachi",
    category: "food",
    accentColor: "mariachi",
    image: "/images/29-chapultepec-nightlife.jpg",
    imageAlt: "Night street with bars in Chapultepec",
  },
  {
    label: "Craft Beer & Mezcal",
    href: "/guadalajara-craft-beer-mezcal",
    description: "Emerging scene with specific bars and prices",
    category: "food",
    accentColor: "tequila",
    image: "/images/08-tequila-mezcal-tasting.jpg",
    imageAlt: "Mezcal flight at a Guadalajara bar",
  },
  // Neighborhoods
  {
    label: "Centro Histórico",
    href: "/centro-historico-guide",
    description: "Cathedral, Hospicio Cabañas, Mercado San Juan de Dios",
    category: "neighborhood",
    accentColor: "cantera",
    image: "/images/32-guadalajara-cathedral.jpg",
    imageAlt: "Guadalajara Cathedral",
  },
  {
    label: "Tlaquepaque",
    href: "/tlaquepaque-guide",
    description: "Artisan shopping, El Parián, craft galleries",
    category: "neighborhood",
    accentColor: "tequila",
    image: "/images/26-tlaquepaque-colorful-street.jpg",
    imageAlt: "Colorful Tlaquepaque street",
  },
  {
    label: "Chapultepec",
    href: "/chapultepec-guide",
    description: "Bar corridor, Colonia Americana architecture",
    category: "neighborhood",
    accentColor: "agave",
    image: "/images/29-chapultepec-nightlife.jpg",
    imageAlt: "Chapultepec avenue at night",
  },
  {
    label: "Zapopan",
    href: "/zapopan-guide",
    description: "Basilica, Huentiton ravine, modern art",
    category: "neighborhood",
    accentColor: "mariachi",
    image: "/images/36-basilica-zapopan.jpg",
    imageAlt: "Zapopan basilica",
  },
  {
    label: "Tonalá",
    href: "/tonala-guide",
    description: "Thursday/Sunday tianguis, blown glass, papier-mâché",
    category: "neighborhood",
    accentColor: "cantera",
    image: "/images/33-tropical-fruit-stall.jpg",
    imageAlt: "Tonalá artisan market",
  },
  // Day trips
  {
    label: "Tequila Day Trip",
    href: "/tequila-day-trip",
    description: "José Cuervo vs small distilleries — the honest take",
    category: "day-trip",
    accentColor: "tequila",
    image: "/images/40-agave-fields-tequila.jpg",
    imageAlt: "Blue agave fields in Tequila",
  },
  {
    label: "Lago de Chapala",
    href: "/lago-de-chapala-day-trip",
    description: "Ajijic + Chapala, expat vs tourist perspective",
    category: "day-trip",
    accentColor: "agave",
    image: "/images/28-lake-chapala-sunset.jpg",
    imageAlt: "Lake Chapala boardwalk",
  },
  {
    label: "Guachimontones",
    href: "/guachimontones-day-trip",
    description: "Circular pyramids, logistics, combine with Tequila?",
    category: "day-trip",
    accentColor: "agave",
    image: "/images/38-guachimontones-aerial.jpg",
    imageAlt: "Guachimontones pyramids aerial view",
  },
  {
    label: "Mazamitla",
    href: "/mazamitla-day-trip",
    description: "Mountain pueblo mágico, cabin weekend escape",
    category: "day-trip",
    accentColor: "mariachi",
    image: "/images/06-cabin-pine-forest.jpg",
    imageAlt: "Mazamitla mountain cabins",
  },
  // Audience
  {
    label: "For Couples",
    href: "/guadalajara-for-couples",
    description: "Romantic itinerary angles",
    category: "audience",
    accentColor: "cantera",
    image: "/images/15-couple-dining-courtyard.jpg",
    imageAlt: "Couple at Guadalajara restaurant",
  },
  {
    label: "Solo Travel",
    href: "/guadalajara-solo-travel",
    description: "Safety, social hostels, coworking",
    category: "audience",
    accentColor: "mariachi",
    image: "/images/05-lake-chapala-panoramic.jpg",
    imageAlt: "Solo traveler exploring Guadalajara",
  },
  {
    label: "Digital Nomads",
    href: "/guadalajara-for-digital-nomads",
    description: "Coworking, cost of living, visa, neighborhoods",
    category: "audience",
    accentColor: "agave",
    image: "/images/13-coworking-space.jpg",
    imageAlt: "Coworking space in Guadalajara",
  },
  {
    label: "GDL vs CDMX",
    href: "/guadalajara-vs-mexico-city",
    description: "Honest comparison — livability, cost, vibe",
    category: "audience",
    accentColor: "tequila",
    image: "/images/12-guadalajara-cityscape.jpg",
    imageAlt: "Mexico City and Guadalajara split",
  },
  // Cultural
  {
    label: "Street Art Guide",
    href: "/guadalajara-street-art-guide",
    description: "Muralism history, specific walls and routes",
    category: "audience",
    accentColor: "cantera",
    image: "/images/23-street-mural.jpg",
    imageAlt: "Street mural in Guadalajara",
  },
  {
    label: "Mercado San Juan de Dios",
    href: "/mercado-san-juan-de-dios-guide",
    description: "Latin America's largest indoor market — floor by floor",
    category: "food",
    accentColor: "tequila",
    image: "/images/41-indoor-mercado.jpg",
    imageAlt: "Inside Mercado San Juan de Dios",
  },
  {
    label: "Hospicio Cabañas",
    href: "/hospicio-cabanas-guide",
    description: "Orozco murals, UNESCO site, visit logistics",
    category: "neighborhood",
    accentColor: "mariachi",
    image: "/images/37-colonial-church.jpg",
    imageAlt: "Hospicio Cabañas interior",
  },
];

export function getGuideImage(href: string) {
  const guide = guideLinks.find((g) => g.href === href);
  return guide ? { image: guide.image, imageAlt: guide.imageAlt } : null;
}

export function getGuidesByCategory(category: GuideLink["category"]) {
  return guideLinks.filter((g) => g.category === category);
}
