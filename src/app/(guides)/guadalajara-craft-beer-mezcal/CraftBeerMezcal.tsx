"use client";

import Link from "next/link";
import { GuideHero } from "@/components/shared/GuideHero";
import { CanteraDivider } from "@/components/decorative/CanteraDivider";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { SpotCard } from "@/components/content/SpotCard";
import { TipCard } from "@/components/content/TipCard";
import { FAQSection } from "@/components/shared/FAQSection";
import { RelatedContent } from "@/components/shared/RelatedContent";
import { GuideCTA } from "@/components/shared/GuideCTA";
import { ContentImage } from "@/components/content/ContentImage";
import { StructuredData } from "@/components/seo/StructuredData";

export function CraftBeerMezcal() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Craft Beer & Mezcal", href: "/guadalajara-craft-beer-mezcal" },
        ]}
        article={{
          headline: "Guadalajara Craft Beer & Mezcal Guide 2026",
          description: "Best bars, raicilla guide, and tasting terminology.",
          datePublished: "2026-03-18",
          dateModified: "2026-03-30",
          url: "https://guadalajaraitinerary.com/guadalajara-craft-beer-mezcal",
        }}
      />

      <GuideHero
        breadcrumbLabel="Craft Beer & Mezcal"
        kicker="Drinking Guide"
        kickerColor="tequila"
        title="Craft Beer & Mezcal Guide"
        subtitle="Beyond tequila: Guadalajara's raicilla scene, mezcalerías, and the emerging craft beer movement. Specific bars, prices, and what to order."
        pills={["Raicilla explained", "Best mezcal bars", "Craft breweries", "Tasting cheat sheet"]}
        updatedDate="Mar 2026"
        readTime="10 min"
        image="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1600&q=80"
        imageAlt="Mezcal flight at a Guadalajara bar"
      />

      <CanteraDivider className="my-0" />

      {/* Raicilla */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              Raicilla — Jalisco&apos;s Secret Spirit
            </h2>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              Raicilla is tequila&apos;s wilder cousin — a Jalisco-only agave
              spirit that was granted its own denomination of origin in 2019.
              Where tequila uses blue Weber agave, raicilla is made from{" "}
              <em>agave maximiliana</em>, <em>agave inaequidens</em>,
              or <em>agave rhodacantha</em>,
              giving it funkier, more complex flavors: think tropical fruit,
              smoke, earth, and flowers in the same sip.
            </p>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed">
              Most people outside Jalisco have never heard of raicilla. That&apos;s
              changing fast, but for now it&apos;s still an insider&apos;s spirit —
              and GDL is the best place in the world to drink it.
            </p>
          </ScrollReveal>

          <SpotCard name="Pare de Sufrir" type="Mezcalería / Raicilla bar" cost="80–120 MXN per pour" address="Av. Chapultepec Sur" verdict="must-see">
            <p>
              The essential raicilla experience. 40+ raicillas and mezcals,
              knowledgeable bartenders, dark intimate space. Order a <strong>
              flight of 3</strong> (~250 MXN) comparing a coastal raicilla
              (fruity), a mountain raicilla (smoky), and a mezcal to understand
              the spectrum. The bartenders here are educators, not just servers.
            </p>
          </SpotCard>

          <SpotCard name="La Mezcalera" type="Mezcalería" cost="70–110 MXN per pour" verdict="worth-it">
            <p>
              Larger selection focused on mezcals from Oaxaca and Durango, plus
              Jalisco raicillas. More spacious than Pare de Sufrir, less intense.
              Good for groups. Their mezcal cocktails (120–160 MXN) are well-made
              if you want something mixed.
            </p>
          </SpotCard>

          <TipCard type="local">
            <strong>How to taste:</strong> Sip, don&apos;t shoot. Kiss the glass
            — exhale first, take a small sip, let it coat your palate, then
            exhale through your nose. The flavors develop over 10–15 seconds.
            Chase with orange slices and sal de gusano (worm salt) if offered,
            or sangrita (spicy tomato-orange chaser). Never lime and salt —
            that&apos;s for bad tequila.
          </TipCard>
        </div>
      </section>

      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ContentImage
            src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&q=80"
            alt="Tequila bottles aging at a Jalisco distillery near Guadalajara"
            caption="Jalisco produces all of Mexico's tequila — and raicilla is its best-kept secret"
            aspectRatio="landscape"
          />
        </div>
      </section>

      {/* Tequila Tasting In-City */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              Tequila Tasting (Without Leaving the City)
            </h2>
          </ScrollReveal>

          <SpotCard name="La Tequila" type="Restaurant / Tequila bar" cost="250 MXN (3-pour flight)" address="Av. México 2830" verdict="must-see">
            <p>
              The city&apos;s most extensive tequila list — hundreds of bottles.
              Order a tasting flight (blanco, reposado, añejo) for ~250 MXN
              and let the staff guide you. Pair with dinner for the full
              experience. This is the place to learn tequila if you&apos;re
              not doing the{" "}
              <Link href="/tequila-day-trip" className="text-cantera hover:underline">
                Tequila day trip
              </Link>.
            </p>
          </SpotCard>

          <TipCard type="tip">
            <strong>Tequila cheat sheet:</strong>
            <br />
            <strong>Blanco/Plata:</strong> Unaged. Pure agave flavor. Best for
            understanding tequila&apos;s real character.
            <br />
            <strong>Reposado:</strong> 2–12 months in oak. Softer, vanilla notes.
            The versatile middle ground.
            <br />
            <strong>Añejo:</strong> 1–3 years in oak. Rich, complex, whiskey-like.
            Sipping tequila.
            <br />
            <strong>Extra Añejo:</strong> 3+ years. Premium category. Smooth,
            dark, expensive. Not always better — some lose agave character.
          </TipCard>
        </div>
      </section>

      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ContentImage
            src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&q=80"
            alt="Neon-lit bar street on Guadalajara's Chapultepec avenue at night"
            caption="The Chapultepec corridor is home to most of Guadalajara's best bars and taprooms"
            aspectRatio="wide"
          />
        </div>
      </section>

      {/* Craft Beer */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              Craft Beer
            </h2>
            <p className="text-sm text-obsidiana/65 leading-relaxed mb-4">
              GDL&apos;s craft beer scene is young but growing fast. A handful
              of local breweries compete with the industrial giants (Modelo,
              Pacífico), and the quality has improved dramatically in the last
              5 years.
            </p>
          </ScrollReveal>

          <SpotCard name="Cervecería Loba" type="Brewpub" cost="80–110 MXN pints" address="Av. Chapultepec Sur 11" verdict="must-see">
            <p>
              The most convenient craft option — right on the Chapultepec strip.
              6–8 rotating taps of their own brews. The IPA is solid, the stout
              is rich. Outdoor seating for people-watching. Good food menu.
            </p>
          </SpotCard>

          <SpotCard name="Cervecería Minerva" type="Brewery taproom" cost="70–100 MXN" address="Zapopan" verdict="worth-it">
            <p>
              GDL&apos;s OG craft brewery (est. 2003). Their Pale Ale is
              ubiquitous in the city. The taproom in Zapopan has 12+ rotating
              styles including seasonal and experimental brews you won&apos;t
              find in stores. Worth the Uber if beer is your thing.
            </p>
          </SpotCard>

          <SpotCard name="Cervecería Fortuna" type="Taproom" cost="75–100 MXN" verdict="worth-it">
            <p>
              Smaller microbrewery with adventurous styles — barrel-aged, sour,
              fruit-infused. The taproom is casual and the brewers are often
              on-site and happy to chat (in Spanish). Less polished than Minerva,
              more craft-forward.
            </p>
          </SpotCard>

          <TipCard type="money">
            <strong>Craft beer price context:</strong> A craft pint in GDL
            (80–110 MXN / $5–6.50 USD) costs about what a Modelo costs in a
            US bar. You&apos;re drinking local craft at mass-market prices.
          </TipCard>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-8">
        <div className="mx-auto max-w-3xl">
          <ContentImage
            src="https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=800&q=80"
            alt="Craft beer taps at a Guadalajara microbrewery taproom"
            caption="GDL's craft beer scene is young but growing — pints cost what mass-market beers cost in the US"
            aspectRatio="landscape"
          />
        </div>
      </section>

      <CanteraDivider />

      <FAQSection
        faqs={[
          { question: "What's the difference between tequila, mezcal, and raicilla?", answer: "All are agave spirits. Tequila uses only blue Weber agave from specific regions. Mezcal can use any agave variety, mostly from Oaxaca. Raicilla is Jalisco-specific, using wild agave species. Flavor progression: tequila (cleanest) → raicilla (fruitiest) → mezcal (smokiest), though there's huge variation within each." },
          { question: "Where should I try raicilla for the first time?", answer: "Pare de Sufrir. Order a flight of 3 (coastal, mountain, and one mezcal for comparison). The bartenders will explain everything. Budget 250 MXN for the flight." },
          { question: "Is the craft beer scene worth exploring?", answer: "If you enjoy craft beer, yes — Loba and Minerva are both good. But honestly, GDL's spirits scene (raicilla, mezcal, tequila) is far more unique. You can find good craft beer in many cities; you can only find raicilla in Jalisco." },
          { question: "Can I buy raicilla to take home?", answer: "Yes. Pare de Sufrir sells bottles. Also look for raicilla at Mercado Corona or specialty liquor stores in Colonia Americana. Bottles run 400-1,200 MXN. The same bottle would cost 2-3x in the US (if you can find it at all)." },
        ]}
      />

      <RelatedContent
        items={[
          { label: "Nightlife Guide", href: "/guadalajara-nightlife-guide", description: "The full bar scene." },
          { label: "Tequila Day Trip", href: "/tequila-day-trip", description: "Distillery tours + tastings." },
          { label: "Food Guide", href: "/guadalajara-food-guide", description: "Drinks + food pairings." },
          { label: "Chapultepec Guide", href: "/chapultepec-guide", description: "The bar corridor." },
          { label: "Budget Guide", href: "/guadalajara-budget-guide", description: "Drink prices in context." },
          { label: "For Couples", href: "/guadalajara-for-couples", description: "Romantic tasting spots." },
        ]}
      />

      <GuideCTA />
    </>
  );
}
