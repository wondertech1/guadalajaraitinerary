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

export function NightlifeGuide() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Nightlife", href: "/guadalajara-nightlife-guide" },
        ]}
        article={{
          headline: "Guadalajara Nightlife Guide 2026",
          description: "Best bars, live music, and late-night tacos.",
          datePublished: "2026-03-16",
          dateModified: "2026-03-30",
          url: "https://guadalajaraitinerary.com/guadalajara-nightlife-guide",
        }}
      />

      <GuideHero
        breadcrumbLabel="Nightlife"
        kicker="After Dark"
        kickerColor="mariachi"
        title="Guadalajara Nightlife Guide"
        subtitle="From cocktail bars to cantinas, mezcalerías to mariachi plazas — GDL's night scene is diverse, safe, and absurdly cheap. Bar-by-bar breakdown below."
        pills={["15+ bars reviewed", "Live music venues", "Bar crawl route", "Late-night tacos"]}
        updatedDate="Mar 2026"
        readTime="12 min"
        image="/images/29-chapultepec-nightlife.jpg"
        imageAlt="Chapultepec avenue bars at night"
      />

      <CanteraDivider className="my-0" />

      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              Guadalajara&apos;s nightlife centers on <strong>Av. Chapultepec</strong>
              — a 1km boulevard with 30+ bars, from mezcalerías to rooftop
              terraces to live music halls. The scene is walkable, safe, and
              budget-friendly: cocktails run 120–180 MXN, beers 50–80 MXN,
              and there&apos;s zero cover at most venues.
            </p>
          </ScrollReveal>

          <TipCard type="tip">
            <strong>When to go:</strong> We recommend Thursday–Saturday. The strip
            starts filling at 9pm, peaks 11pm–1am, and runs until 3am on
            weekends. Weeknights are quieter but some bars still have events.
            Sunday is dead.
          </TipCard>
        </div>
      </section>

      {/* Cocktail Bars */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              Cocktail Bars
            </h2>
          </ScrollReveal>

          <SpotCard name="Anónimo Bar" type="Cocktail bar" cost="130–180 MXN" address="Av. Chapultepec Norte 110" verdict="must-see">
            <p>
              GDL&apos;s best cocktail bar. Creative, well-balanced drinks with
              Mexican ingredients (chapulines, tamarindo, chiles). The bartenders
              are serious about their craft — ask for a mezcal-based
              recommendation. Dim lighting, good music, intimate vibe. The place
              to start your night.
            </p>
          </SpotCard>

          <SpotCard name="La Romana" type="Cocktail lounge" cost="140–200 MXN" verdict="worth-it">
            <p>
              Upscale cocktail lounge with a speakeasy feel. Better dressed
              crowd, more polished than Anónimo. The gin selection is the city&apos;s
              best. Good for a date or a slower evening. Reservations
              recommended weekends.
            </p>
          </SpotCard>
        </div>
      </section>

      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ContentImage
            src="/images/04-cocktail-bar-speakeasy.jpg"
            alt="Cocktail bar ambiance with warm lighting on Guadalajara's Chapultepec avenue"
            caption="Chapultepec's cocktail bars range from intimate speakeasies to open-air terraces"
            aspectRatio="landscape"
          />
        </div>
      </section>

      {/* Mezcal & Spirits */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              Mezcal, Raicilla & Spirits
            </h2>
          </ScrollReveal>

          <SpotCard name="Pare de Sufrir" type="Mezcalería" cost="80–120 MXN per pour" address="Av. Chapultepec Sur" verdict="must-see">
            <p>
              40+ raicillas and mezcals. Dark, moody interior. The bartenders
              are walking encyclopedias of agave spirits. Order a flight of 3
              (~250 MXN) comparing raicilla, mezcal, and tequila to understand
              the differences. This is the bar for spirits exploration. See our{" "}
              <Link href="/guadalajara-craft-beer-mezcal" className="text-cantera hover:underline">
                Craft Beer & Mezcal guide
              </Link>.
            </p>
          </SpotCard>

          <SpotCard name="Cantina La Fuente" type="Traditional cantina" cost="40–70 MXN beers" address="Calle Pino Suárez, Centro" verdict="worth-it">
            <p>
              Old-school cantina since 1921. Swinging saloon doors, aging
              regulars, free botanas (snack plates) with every round of drinks.
              This is the real deal — no Instagram influencers, just locals
              drinking tequila at 2pm. Cash only (we confirmed this as of March 2026). Opens at noon, busiest 4–8pm.
              A cultural experience as much as a bar visit.
            </p>
          </SpotCard>
        </div>
      </section>

      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ContentImage
            src="/images/08-tequila-mezcal-tasting.jpg"
            alt="Mezcal and raicilla flight tasting at a Guadalajara mezcalería"
            caption="A raicilla flight at Pare de Sufrir — the essential Guadalajara spirits experience"
            aspectRatio="wide"
          />
        </div>
      </section>

      {/* Live Music */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              Live Music
            </h2>
          </ScrollReveal>

          <SpotCard name="La Mutualista" type="Live music venue" cost="Free–100 MXN cover" verdict="must-see">
            <p>
              Converted union hall with live rock, jazz, cumbia, and indie
              depending on the night. No cover most weeknights, 50–100 MXN
              weekends. Cheap drinks, local crowd, unpretentious vibe. Check
              their Instagram for the weekly schedule. The best live music venue
              in GDL.
            </p>
          </SpotCard>

          <SpotCard name="Plaza de los Mariachis" type="Mariachi plaza" cost="100–150 MXN per song" address="Near Mercado San Juan de Dios" verdict="worth-it">
            <p>
              Touristy? Yes. Authentic? Also yes. This plaza is where mariachi
              musicians gather to play — it&apos;s been a tradition for decades.
              Sit at a cantina, order a michelada (50 MXN), and listen.
              Afternoons are less intense than evenings when the bands are more
              aggressive about approaching tables.
            </p>
          </SpotCard>

          <SpotCard name="C3 Stage" type="Concert venue" cost="200–800 MXN" verdict="optional">
            <p>
              GDL&apos;s main mid-size concert venue for touring acts — Mexican
              and international indie, rock, electronic. Check listings at
              c3stage.com. If a band you like is playing, it&apos;s a great
              venue. Otherwise, the bar scene is more rewarding.
            </p>
          </SpotCard>
        </div>
      </section>

      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ContentImage
            src="/images/09-mariachi-musicians.jpg"
            alt="Mariachi musicians performing at a traditional Guadalajara cantina"
            caption="Mariachi music is part of the fabric of Guadalajara's night scene"
            aspectRatio="landscape"
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
          </ScrollReveal>

          <SpotCard name="Cervecería Loba" type="Brewpub" cost="80–110 MXN pints" address="Av. Chapultepec Sur 11" verdict="must-see">
            <p>
              Local craft brewery with rotating taps. The IPA and stout are
              reliable. Outdoor seating on the avenue for people-watching.
              Casual, loud, good for groups. The burger menu is solid if you
              need food to fuel the bar crawl.
            </p>
          </SpotCard>

          <SpotCard name="Cervecería Minerva" type="Taproom" cost="70–100 MXN" verdict="worth-it">
            <p>
              GDL&apos;s most established craft brewery. The taproom in Zapopan
              has 12+ rotating styles. Their Pale Ale and Stout are the best
              sellers. Less central than Loba but worth the Uber if you&apos;re
              a beer nerd.
            </p>
          </SpotCard>
        </div>
      </section>

      {/* Bar Crawl Route */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-obsidiana mb-4">
              The Bar Crawl Route
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="space-y-3">
              {[
                { time: "9:00 PM", stop: "Anónimo Bar", what: "Start with a creative cocktail (150 MXN)" },
                { time: "10:15 PM", stop: "Pare de Sufrir", what: "Raicilla flight — 3 pours for ~250 MXN" },
                { time: "11:00 PM", stop: "Cervecería Loba", what: "Craft beer pit stop, people-watching (90 MXN)" },
                { time: "11:45 PM", stop: "La Mutualista", what: "Live music, dance, cheap drinks (beer 50 MXN)" },
                { time: "1:00 AM", stop: "Street tacos", what: "Al pastor near Minerva roundabout (125 MXN for 5)" },
                { time: "1:30 AM", stop: "Uber home", what: "35–65 MXN. Well spent." },
              ].map((s) => (
                <div key={s.time} className="rounded-[6px] border border-obsidiana/[0.06] bg-piedra p-3 flex gap-3">
                  <span className="font-mono text-[11px] text-cantera shrink-0 w-16">{s.time}</span>
                  <div>
                    <span className="font-heading text-sm font-bold text-obsidiana">{s.stop}</span>
                    <p className="text-xs text-obsidiana/50 mt-0.5">{s.what}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <TipCard type="money">
            <strong>Bar crawl budget:</strong> 2 cocktails + raicilla flight +
            1 beer + cover + tacos + Uber = <strong>~750 MXN ($44 USD)</strong>.
            We verified these prices in March 2026. A full night out including
            late-night food for under $50. Try that in any US city.
          </TipCard>

          <TipCard type="tip">
            <strong>Safety reminder:</strong> The Chapultepec corridor is
            well-lit, populated, and patrolled until close. Watch your drink
            (spiking exists like anywhere), stay with your group, and Uber home.
            Walking home along the main avenue is fine until ~2am; after that,
            Uber is smarter.
          </TipCard>
        </div>
      </section>

      <CanteraDivider />

      <FAQSection
        faqs={[
          { question: "What's the best night to go out in Guadalajara?", answer: "Friday and Saturday are peak — all bars open, live music everywhere, the strip buzzes until 3am. Thursday is the best mid-week option. Sunday is dead." },
          { question: "Is there a dress code?", answer: "No. The Chapultepec scene is casual — jeans and sneakers are fine everywhere except the most upscale cocktail lounges (La Romana). No clubs with strict dress codes like you'd find in CDMX." },
          { question: "Where's the best late-night food?", answer: "Taco stands on Av. Chapultepec near Fuente de la Minerva, open until 2-3am. Al pastor and barbacoa. 20-30 MXN per taco. The perfect end to any night out." },
          { question: "Is Guadalajara nightlife safe?", answer: "Yes. The Chapultepec corridor is the safest nightlife zone — well-lit, populated, patrolled. Standard rules: watch your drink, stay with your group, Uber home. See our safety guide." },
          { question: "Are there clubs or is it just bars?", answer: "Mostly bars and live music venues. There are clubs (particularly along Av. Vallarta) but GDL's culture leans toward bar-hopping and cantinas rather than megaclubs. The bar scene is better." },
        ]}
      />

      <RelatedContent
        items={[
          { label: "Chapultepec Guide", href: "/chapultepec-guide", description: "The nightlife neighborhood." },
          { label: "Craft Beer & Mezcal", href: "/guadalajara-craft-beer-mezcal", description: "Spirits deep dive." },
          { label: "Food Guide", href: "/guadalajara-food-guide", description: "Late-night taco picks." },
          { label: "Safety Tips", href: "/guadalajara-safety-tips", description: "Nightlife safety." },
          { label: "For Couples", href: "/guadalajara-for-couples", description: "Date night picks." },
          { label: "Solo Travel", href: "/guadalajara-solo-travel", description: "Going out alone." },
        ]}
      />

      <GuideCTA />
    </>
  );
}
