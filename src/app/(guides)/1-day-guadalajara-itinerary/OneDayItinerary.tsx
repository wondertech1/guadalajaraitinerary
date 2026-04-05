"use client";

import Link from "next/link";
import { GuideHero } from "@/components/shared/GuideHero";
import { CanteraDivider } from "@/components/decorative/CanteraDivider";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { TimeBlock } from "@/components/content/TimeBlock";
import { TipCard } from "@/components/content/TipCard";
import { FAQSection } from "@/components/shared/FAQSection";
import { RelatedContent } from "@/components/shared/RelatedContent";
import { GuideCTA } from "@/components/shared/GuideCTA";
import { ContentImage } from "@/components/content/ContentImage";
import { StructuredData } from "@/components/seo/StructuredData";

export function OneDayItinerary() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "1-Day Itinerary", href: "/1-day-guadalajara-itinerary" },
        ]}
        article={{
          headline: "1-Day Guadalajara Itinerary 2026",
          description: "The best of Guadalajara in one packed day.",
          datePublished: "2026-02-02",
          dateModified: "2026-03-14",
          url: "https://guadalajaraitinerary.com/1-day-guadalajara-itinerary",
        }}
      />

      <GuideHero
        breadcrumbLabel="1-Day Itinerary"
        kicker="Sprint"
        kickerColor="cantera"
        title="1 Day in Guadalajara"
        subtitle="Short on time? This route hits the absolute essentials — birria, the cathedral, Orozco's murals, Tlaquepaque, and evening tacos. No filler."
        pills={["1 Day", "~1,200 MXN", "10 stops", "Walkable + 2 Ubers"]}
        updatedDate="Mar 2026"
        readTime="8 min"
        image="/images/32-guadalajara-cathedral.jpg"
        imageAlt="Guadalajara cathedral at golden hour"
      />

      <CanteraDivider className="my-0" />

      {/* Intro */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              One day isn&apos;t enough for Guadalajara — but if one day is all
              you have, this route covers the city&apos;s greatest hits without
              rushing. Morning in Centro Histórico for the big landmarks,
              afternoon in Tlaquepaque for artisan culture, evening back in the
              city for tacos and a drink.
            </p>
          </ScrollReveal>

          <TipCard type="tip">
            <strong>If you have more time:</strong> This itinerary is Day 1 of
            our{" "}
            <Link href="/3-day-guadalajara-itinerary" className="text-cantera hover:underline">
              3-day itinerary
            </Link>
            . Add a Tequila day trip and a Chapultepec/Zapopan day and you&apos;ve
            got the perfect trip.
          </TipCard>
        </div>
      </section>

      {/* THE DAY */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-1">
              Your Day
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-2">
              Morning — Centro Histórico
            </h2>
            <p className="text-sm text-obsidiana/50 mb-8">
              The colonial heart of Guadalajara in 4 hours
            </p>
          </ScrollReveal>

          <TimeBlock time="7:30 AM" title="Birria Breakfast — Birriería Las 9 Esquinas">
            <p>
              Start at the city&apos;s most iconic birriería (Colón 384, esq. Galeana (9 Esquinas)).
              The <em>birria en caldo</em> (goat stew, 95 MXN) is the essential
              Guadalajara experience. Arrive by 7:30 to beat the 8:30 rush.
              Cash only. You&apos;ll be done in 30 minutes — this isn&apos;t a
              lingering brunch spot.
            </p>
          </TimeBlock>

          <TimeBlock time="8:30 AM" title="Catedral & Plaza de Armas">
            <p>
              A 10-minute walk northeast. The twin-spired cathedral is free and
              takes 15–20 minutes inside. Step into Plaza de Armas (the gazebo
              square) and Rotonda de los Jaliscienses Ilustres next door for
              photos. This cluster of plazas is the city&apos;s postcard shot.
            </p>
          </TimeBlock>

          <TimeBlock time="9:15 AM" title="Palacio de Gobierno — The Other Orozco Murals">
            <p>
              On the plaza&apos;s east side, the Palacio de Gobierno has a
              massive Orozco mural on the main staircase — <em>Hidalgo</em>,
              depicting the father of Mexican independence with a flaming torch.
              Free entry, 10 minutes. Most tourists skip this for Hospicio
              Cabañas, but this mural is arguably more dramatic.
            </p>
          </TimeBlock>

          <TimeBlock time="9:45 AM" title="Hospicio Cabañas — Man of Fire">
            <p>
              A 15-minute walk east to the UNESCO site. Entry: 90 MXN (free
              Tuesdays). Orozco&apos;s <em>Man of Fire</em> fresco on the
              chapel ceiling is the highlight of Centro — lie on the wooden
              benches to look straight up. Budget 45 minutes for the full
              complex. The courtyards alone are beautiful.
            </p>
          </TimeBlock>

          <TipCard type="money">
            <strong>Tuesday hack:</strong> If your one day happens to be a
            Tuesday, Hospicio Cabañas is free. Save 90 MXN.
          </TipCard>

          <ContentImage
            src="/images/35-street-tacos-grill.jpg"
            alt="Authentic Mexican birria tacos served at a Guadalajara street stall"
            caption="Birria en caldo — the essential Guadalajara breakfast"
            aspectRatio="landscape"
          />

          <TimeBlock time="10:45 AM" title="Quick Walk Through Mercado San Juan de Dios">
            <p>
              Three blocks south of Cabañas. You don&apos;t need long here — walk
              the ground floor for 20 minutes to absorb the scale (Latin
              America&apos;s largest indoor market). Skip the second floor
              (tourist trinkets). If hungry, the third-floor food court has
              tortas ahogadas for 55–70 MXN.
            </p>
          </TimeBlock>

          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-2 mt-12">
              Afternoon — Tlaquepaque
            </h2>
            <p className="text-sm text-obsidiana/50 mb-8">
              Mexico&apos;s artisan capital, 20 minutes south
            </p>
          </ScrollReveal>

          <TimeBlock time="11:30 AM" title="Uber to Tlaquepaque (20 min, ~65 MXN)">
            <p>
              Grab the Uber from the Mercado San Juan de Dios main entrance on
              Javier Mina. The pickup spot inside the market is confusing —
              walk to the street.
            </p>
          </TimeBlock>

          <ContentImage
            src="/images/26-tlaquepaque-colorful-street.jpg"
            alt="Colorful pedestrian street in Tlaquepaque, Guadalajara with artisan shops"
            caption="Calle Independencia in Tlaquepaque — galleries and blown-glass workshops"
            aspectRatio="wide"
          />

          <TimeBlock time="12:00 PM" title="Calle Independencia — Artisan Browsing">
            <p>
              The pedestrianized main street is lined with blown-glass workshops,
              Talavera pottery shops, and folk art galleries. Walk the full length
              (4 blocks of quality, then it thins out). Don&apos;t miss{" "}
              <strong>Antigua de México</strong> (Independencia 258) for the best
              pottery selection. Watch a glass-blowing demonstration — they&apos;re
              free and happen all day.
            </p>
          </TimeBlock>

          <TimeBlock time="1:30 PM" title="Lunch at El Parián — Torta Ahogada + Mariachi">
            <p>
              One of Mexico&apos;s most iconic mariachi venues. Sit at any
              cantina, order a <em>torta ahogada</em> (65–85 MXN) and a beer.
              Mariachi bands charge 100–150 MXN per song. One song is the right
              amount. Order <em>media ahogada</em> (half-drowned) — the full
              version&apos;s spice level is punishing for first-timers.
            </p>
          </TimeBlock>

          <TipCard type="local">
            <strong>Tlaquepaque is better than Centro for souvenirs.</strong> The
            quality is higher and prices are similar. Handmade pottery starts
            at 200 MXN. Blown glass ornaments from 150 MXN. Negotiate at
            smaller shops (ask &quot;¿Cuál es su mejor precio?&quot;) but not
            at galleries with fixed prices.
          </TipCard>

          <TimeBlock time="3:00 PM" title="Museo del Premio Nacional de la Cerámica">
            <p>
              Free museum showcasing prize-winning ceramics from across Mexico.
              Small but excellent — 20 minutes is enough. Around the corner from
              El Parián.
            </p>
          </TimeBlock>

          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-2 mt-12">
              Evening — Back in the City
            </h2>
            <p className="text-sm text-obsidiana/50 mb-8">
              Tacos, drinks, and the Chapultepec scene
            </p>
          </ScrollReveal>

          <TimeBlock time="4:00 PM" title="Uber Back to Chapultepec (~65 MXN)">
            <p>
              Head to Av. Chapultepec in Colonia Americana — GDL&apos;s most
              walkable, photogenic neighborhood. Walk the tree-lined streets,
              admire the Art Deco houses, and grab a coffee at{" "}
              <strong>Café Palreal</strong> (flat white 65 MXN) to recharge.
            </p>
          </TimeBlock>

          <ContentImage
            src="/images/29-chapultepec-nightlife.jpg"
            alt="Avenida Chapultepec at night in Guadalajara with illuminated bars and restaurants"
            caption="Av. Chapultepec — Guadalajara's liveliest pedestrian boulevard"
            aspectRatio="landscape"
          />

          <TimeBlock time="5:30 PM" title="Golden Hour Walk on Av. Chapultepec">
            <p>
              The pedestrian boulevard comes alive in the late afternoon. Browse
              the street vendors, people-watch, and let the evening energy build.
              This is where locals go for the <em>paseo</em> (evening stroll).
            </p>
          </TimeBlock>

          <TimeBlock time="7:00 PM" title="Dinner — Street Tacos or a Sit-Down">
            <p>
              <strong>Street option:</strong> Tacos al pastor at any stand on
              Av. Chapultepec near Fuente de la Minerva (20–30 MXN each, order 5).
              <br />
              <strong>Sit-down option:</strong> La Tequila (Av. México 2830) for
              upscale Mexican. Mains 220–380 MXN. Reserve ahead for weekends.
            </p>
          </TimeBlock>

          <ContentImage
            src="/images/09-mariachi-musicians.jpg"
            alt="Mariachi musicians performing in traditional charro suits in Guadalajara"
            caption="Mariachi — born in Jalisco, best heard live with a cantarito in hand"
            aspectRatio="landscape"
          />

          <TimeBlock time="8:30 PM" title="One Last Drink">
            <p>
              End with a <em>cantarito</em> (tequila + grapefruit soda in a clay
              cup, 50–80 MXN) at any Chapultepec bar. Or a mezcal at{" "}
              <strong>Pare de Sufrir</strong> (Av. Chapultepec Sur 11). Either
              way, you&apos;ve tasted the best of Guadalajara in one day.
            </p>
          </TimeBlock>
        </div>
      </section>

      {/* Budget */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-obsidiana mb-4">
              1-Day Budget Summary
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-lg border border-obsidiana/[0.06] overflow-hidden">
              <div className="bg-obsidiana px-4 py-3">
                <div className="grid grid-cols-3 gap-2 font-mono text-[10px] uppercase tracking-wider text-piedra/60">
                  <span>Item</span>
                  <span>Budget</span>
                  <span>Mid-Range</span>
                </div>
              </div>
              {[
                { item: "Birria breakfast", budget: "95", mid: "95" },
                { item: "Hospicio Cabañas", budget: "0 (Tue)", mid: "90" },
                { item: "Uber x2", budget: "130", mid: "130" },
                { item: "Torta ahogada lunch", budget: "85", mid: "85" },
                { item: "Coffee", budget: "—", mid: "65" },
                { item: "Dinner (tacos vs restaurant)", budget: "150", mid: "350" },
                { item: "Drinks", budget: "80", mid: "200" },
                { item: "Mariachi (1 song)", budget: "—", mid: "150" },
              ].map((row) => (
                <div
                  key={row.item}
                  className="grid grid-cols-3 gap-2 px-4 py-2.5 border-t border-obsidiana/[0.06] text-sm"
                >
                  <span className="text-obsidiana/70">{row.item}</span>
                  <span className="font-mono text-xs text-agave">{row.budget}</span>
                  <span className="font-mono text-xs text-tequila">{row.mid}</span>
                </div>
              ))}
              <div className="grid grid-cols-3 gap-2 px-4 py-3 border-t-2 border-obsidiana/10 bg-piedra-dark/50 font-bold">
                <span className="text-obsidiana text-sm">Total (MXN)</span>
                <span className="font-mono text-xs text-agave">~540</span>
                <span className="font-mono text-xs text-tequila">~1,165</span>
              </div>
              <div className="grid grid-cols-3 gap-2 px-4 py-2 bg-piedra-dark/50 text-xs text-obsidiana/40">
                <span>Approx USD</span>
                <span className="font-mono">$32</span>
                <span className="font-mono">$69</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CanteraDivider />

      <FAQSection
        faqs={[
          {
            question: "Can you see Guadalajara in one day?",
            answer: "You can see the highlights — Centro Histórico, Hospicio Cabañas, Tlaquepaque, and Chapultepec. You'll miss the Tequila day trip, Zapopan, Tonalá market, and Lago de Chapala. One day gives you a strong taste; 3 days is the sweet spot.",
          },
          {
            question: "What's the one thing I shouldn't skip?",
            answer: "Hospicio Cabañas. Orozco's Man of Fire mural is the single most impressive thing in Guadalajara, and you can see it in 45 minutes. If you skip everything else, don't skip this.",
          },
          {
            question: "Is this doable as a day trip from Mexico City?",
            answer: "Technically yes — GDL is a 1-hour flight from CDMX. But with airport time you'll lose 4 hours to travel. A better option: stay one night in GDL and fly back the next morning. See our Mexico City to Guadalajara guide.",
          },
          {
            question: "What if I arrive in the afternoon?",
            answer: "Start with Tlaquepaque (it's best visited before 5pm when galleries close). Do Centro Histórico the next morning if you have a partial second day. Or flip this itinerary: evening Chapultepec first, full day Centro + Tlaquepaque tomorrow.",
          },
        ]}
      />

      <RelatedContent
        items={[
          { label: "3-Day Itinerary", href: "/3-day-guadalajara-itinerary", description: "The recommended trip length." },
          { label: "2-Day Itinerary", href: "/2-day-guadalajara-itinerary", description: "Add Chapultepec + tequila tasting." },
          { label: "Food Guide", href: "/guadalajara-food-guide", description: "Every dish, every stall, every price." },
          { label: "Centro Histórico", href: "/centro-historico-guide", description: "Go deeper on the historic center." },
          { label: "Tlaquepaque", href: "/tlaquepaque-guide", description: "The complete artisan guide." },
          { label: "Safety Tips", href: "/guadalajara-safety-tips", description: "Zone-by-zone safety breakdown." },
        ]}
      />

      <GuideCTA
        href="/3-day-guadalajara-itinerary"
        label="Got More Time? Read the 3-Day Itinerary"
        description="Add a Tequila day trip and Zapopan to make it the perfect trip."
      />
    </>
  );
}
