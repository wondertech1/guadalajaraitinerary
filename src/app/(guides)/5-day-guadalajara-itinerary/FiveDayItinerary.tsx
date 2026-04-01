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

export function FiveDayItinerary() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "5-Day Itinerary", href: "/5-day-guadalajara-itinerary" },
        ]}
        article={{
          headline: "5-Day Guadalajara Itinerary 2026",
          description: "The deep dive — city highlights plus Lago de Chapala and Tonalá.",
          datePublished: "2026-02-10",
          dateModified: "2026-03-16",
          url: "https://guadalajaraitinerary.com/5-day-guadalajara-itinerary",
        }}
      />

      <GuideHero
        breadcrumbLabel="5-Day Itinerary"
        kicker="Deep Dive"
        kickerColor="agave"
        title="5 Days in Guadalajara"
        subtitle="Everything from the 3-day itinerary plus Lago de Chapala, Tonalá's famous market, and time to actually slow down and live like a local."
        pills={["5 Days", "~7,500 MXN budget", "30+ stops", "2 day trips"]}
        updatedDate="Mar 2026"
        readTime="16 min"
        image="https://images.unsplash.com/photo-1570737543098-1305f902a22c?w=1600&q=80"
        imageAlt="Lake Chapala sunset with mountains in the background"
      />

      <CanteraDivider className="my-0" />

      {/* Intro */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              Five days is where Guadalajara really opens up. The first 3 days
              follow our{" "}
              <Link href="/3-day-guadalajara-itinerary" className="text-cantera hover:underline">
                3-day itinerary
              </Link>{" "}
              (Centro, Tlaquepaque, Tequila, Zapopan, Chapultepec). Days 4 and
              5 add two experiences you can&apos;t get in the city: Mexico&apos;s
              largest lake and one of the country&apos;s best artisan markets.
            </p>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed">
              The 5-day pace also lets you breathe. No rushing between landmarks —
              you&apos;ll have time for long lunches, afternoon coffee, and the
              aimless neighborhood wandering that&apos;s actually the best part of
              Guadalajara.
            </p>
          </ScrollReveal>

          <TipCard type="tip">
            <strong>Days 1–3 are identical to our 3-day itinerary.</strong>{" "}
            <Link href="/3-day-guadalajara-itinerary" className="text-agave hover:underline">
              Read that guide
            </Link>{" "}
            for the detailed day-by-day. This page focuses on Days 4 and 5 —
            the additions that make 5 days worthwhile.
          </TipCard>
        </div>
      </section>

      {/* Days 1-3 Summary */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-1">
              Days 1–3 Recap
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-6">
              The 3-Day Foundation
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="space-y-3">
              {[
                { day: "Day 1", title: "Centro Histórico & Tlaquepaque", highlights: "Birria breakfast, Cathedral, Hospicio Cabañas, Mercado San Juan de Dios, Tlaquepaque artisan galleries, El Parián mariachi, Chapultepec evening" },
                { day: "Day 2", title: "Tequila Day Trip", highlights: "Agave fields, Destilería La Fortaleza tour, Tequila town lunch, optional Guachimontones, Karne Garibaldi dinner" },
                { day: "Day 3", title: "Zapopan, Colonia Americana & Goodbye", highlights: "Birria round 2, Basílica de Zapopan, MAZ museum, Colonia Americana walk, coffee + nieves, Plaza de los Mariachis" },
              ].map((d) => (
                <div key={d.day} className="rounded-[6px] border border-obsidiana/[0.06] bg-piedra p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-cantera">{d.day}</span>
                    <span className="font-heading text-sm font-bold text-obsidiana">{d.title}</span>
                  </div>
                  <p className="text-xs text-obsidiana/50">{d.highlights}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-sm text-obsidiana/50 mt-4">
              <Link href="/3-day-guadalajara-itinerary" className="text-cantera hover:underline">
                Read the full 3-day itinerary →
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* DAY 4 */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-1">
              Day 4
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-2">
              Lago de Chapala & Ajijic
            </h2>
            <p className="text-sm text-obsidiana/50 mb-8">
              Mexico&apos;s largest lake, a charming expat village, and mountain
              views — 45 minutes from the city
            </p>
          </ScrollReveal>

          <TimeBlock time="8:30 AM" title="Drive to Chapala (45 min, ~180 MXN Uber)">
            <p>
              The drive south on the autopista is scenic — you drop from
              Guadalajara&apos;s plateau toward the lake basin with mountain
              views on both sides. An Uber costs ~180 MXN one way (split 2+ ways
              makes it very affordable). Alternative: buses from the Central
              Vieja station run every 30 min (55 MXN, 60 min).
            </p>
          </TimeBlock>

          <TimeBlock time="9:30 AM" title="Chapala Town — Malecón Walk">
            <p>
              Start in Chapala town itself. The <em>malecón</em> (lakeside
              promenade) stretches 1km with views across Mexico&apos;s largest
              freshwater lake to the mountains. It&apos;s not a beach scene — the
              water is calm and vast, more like an inland sea. Walk the malecón,
              browse the waterfront stalls (souvenirs, nieve, fresh fruit), and
              check out the Christiana Parsonage market for local crafts.
            </p>
          </TimeBlock>

          <TipCard type="local">
            <strong>The expat factor:</strong> Chapala and especially Ajijic have
            North America&apos;s largest expat community outside Florida. You&apos;ll
            hear as much English as Spanish. This changes the vibe — more
            international restaurants, higher prices than GDL, but also excellent
            infrastructure. Love it or find it sterile — your call.
          </TipCard>

          <ContentImage
            src="https://images.unsplash.com/photo-1570737543098-1305f902a22c?w=800&q=80"
            alt="Sunset over Lake Chapala with mountain silhouettes near Guadalajara"
            caption="Lake Chapala — Mexico's largest lake, 45 minutes from Guadalajara"
            aspectRatio="wide"
          />

          <TimeBlock time="11:00 AM" title="Bus or Uber to Ajijic (15 min, ~40 MXN)">
            <p>
              Ajijic is the real draw — a cobblestoned village with art galleries,
              bougainvillea-draped walls, and a cafe scene that rivals Colonia
              Americana. Local buses run between Chapala and Ajijic constantly
              (12 MXN) or Uber ~40 MXN.
            </p>
          </TimeBlock>

          <TimeBlock time="11:30 AM" title="Ajijic Village — Galleries & Wandering">
            <p>
              Walk Calle Constitución and Calle Morelos — the two main gallery
              streets. Art ranges from tourist watercolors to genuinely excellent
              contemporary Mexican art. The <strong>Ajijic Art Center</strong>{" "}
              (free) is worth a look. Neill James Garden (20 MXN) is a hidden
              botanical gem. Budget 90 minutes for a leisurely wander.
            </p>
          </TimeBlock>

          <TimeBlock time="1:00 PM" title="Lunch — Ajijic's Restaurant Row">
            <p>
              <strong>For Mexican:</strong> La Casa del Waffle y Pozole (pozole
              rojo 95 MXN, excellent).
              <br />
              <strong>For lakeside dining:</strong> Restaurant El Barco (directly
              on the lake, fish mains 140–220 MXN). The whitefish (<em>pescado
              blanco</em>) from Lake Chapala is the local specialty — mild,
              flaky, served fried or al mojo de ajo.
            </p>
          </TimeBlock>

          <TimeBlock time="2:30 PM" title="Ajijic Malecón + Return">
            <p>
              Ajijic has its own, smaller malecón — quieter and more scenic than
              Chapala&apos;s. Walk to the pier, take in the mountain views, then
              head back. Uber to GDL from Ajijic is ~220 MXN (50 min). Bus from
              Chapala is 55 MXN if you bus back to Chapala first.
            </p>
          </TimeBlock>

          <ContentImage
            src="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=800&q=80"
            alt="Peaceful Mexican plaza with a stone fountain surrounded by colonial buildings"
            caption="Ajijic village — cobblestoned streets and lakeside galleries"
            aspectRatio="landscape"
          />

          <TimeBlock time="5:00 PM" title="Back in GDL — Slow Evening">
            <p>
              After 3 packed days and a day trip, tonight is for decompressing.
              Grab a raicilla at Pare de Sufrir (80–120 MXN), walk Colonia
              Americana&apos;s side streets in the golden light, and have a light
              dinner at your neighborhood spot. You&apos;ve earned a slow night.
            </p>
          </TimeBlock>

          <TipCard type="money">
            <strong>Day 4 budget:</strong> Transport ~400 MXN round trip + lunch
            150 MXN + galleries free + drinks 100 MXN ={" "}
            <strong>~650 MXN ($38 USD)</strong> without accommodation.
          </TipCard>
        </div>
      </section>

      {/* DAY 5 */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-1">
              Day 5
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-2">
              Tonalá Market & Final Exploration
            </h2>
            <p className="text-sm text-obsidiana/50 mb-8">
              Mexico&apos;s best artisan tianguis + revisiting your favorite
              spots before departure
            </p>
          </ScrollReveal>

          <TipCard type="tip">
            <strong>Timing matters:</strong> Tonalá&apos;s famous street market
            (tianguis) runs only on <strong>Thursdays and Sundays</strong>. If
            Day 5 doesn&apos;t fall on one of these days, swap Day 4 and Day 5,
            or replace Tonalá with a morning at Mercado del Baratillo (Sunday
            flea market) or a deeper dive into a neighborhood you liked.
          </TipCard>

          <TimeBlock time="8:00 AM" title="Early Start — Uber to Tonalá (20 min, ~55 MXN)">
            <p>
              The tianguis opens at 8am and is best early (before 11am), when
              it&apos;s less crowded and vendors are fresh. The market stretches
              for blocks along Av. Tonaltecas and surrounding streets. It&apos;s
              enormous — over 4,000 vendors.
            </p>
          </TimeBlock>

          <ContentImage
            src="https://images.unsplash.com/photo-1667675068275-d822c63b1217?w=800&q=80"
            alt="Vibrant Mexican artisan market with handmade pottery and crafts near Guadalajara"
            caption="Tonalá tianguis — over 4,000 vendors across blocks of artisan stalls"
            aspectRatio="wide"
          />

          <TimeBlock time="8:30 AM" title="Tonalá Tianguis — The Real Artisan Market">
            <p>
              This is Mexico&apos;s most important artisan market, and it&apos;s
              drastically different from Tlaquepaque. Where Tlaquepaque is
              curated galleries, Tonalá is raw — blown glass, papier-mâché
              figures, hand-painted ceramics, equipale leather furniture, and
              <em>barro</em> pottery spread across open-air stalls.
            </p>
            <p>
              <strong>What to buy:</strong> Hand-blown glass (vases 200–800
              MXN, ornaments 100–300 MXN), Talavera pottery (plates 150–500
              MXN), papier-mâché animals (100–2,000 MXN depending on size),
              equipale chairs (negotiable, 1,500–4,000 MXN).
            </p>
            <p>
              <strong>Negotiate:</strong> Unlike Tlaquepaque galleries, prices
              here are fluid. Start at 60–70% of the asking price and meet in
              the middle. Buying multiple items from one vendor gives leverage.
            </p>
          </TimeBlock>

          <TipCard type="local">
            <strong>The glass workshops are the highlight.</strong> Several
            families have been blowing glass in Tonalá for generations. Look for
            workshops behind the market stalls — many let you watch the process
            for free. The quality at workshops is consistently higher than random
            stalls. Ask vendors &quot;¿Tienen taller?&quot; (Do you have a workshop?).
          </TipCard>

          <TimeBlock time="11:00 AM" title="Breakfast at the Market">
            <p>
              The market has its own food stalls — look for the comida section
              along the side streets. Tacos de guisado (stewed fillings) for
              15–25 MXN each, aguas frescas for 20 MXN. This is the most
              authentic, zero-tourist market eating experience in the GDL metro.
            </p>
          </TimeBlock>

          <TimeBlock time="12:00 PM" title="Back to GDL — Final Afternoon">
            <p>
              Uber back (~55 MXN). Use your last afternoon to revisit your
              favorite spot from the trip. Some ideas:
            </p>
            <p>
              <strong>Repeat offender:</strong> One more birria at Las 9
              Esquinas or El Chololo.
              <br />
              <strong>What you missed:</strong> The{" "}
              <Link href="/guadalajara-street-art-guide" className="text-cantera hover:underline">
                street art murals
              </Link>{" "}
              around Barrio de Analco and Av. Federalismo.
              <br />
              <strong>Relax:</strong> Long coffee at Café Palreal, browse the
              bookshops on Av. de la Paz, or just sit in Parque de la
              Revolución and people-watch.
            </p>
          </TimeBlock>

          <ContentImage
            src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&q=80"
            alt="Birria tacos with consomé on a plate at a Guadalajara taquería"
            caption="One more round of birria — the farewell ritual of every Guadalajara trip"
            aspectRatio="square"
          />

          <TimeBlock time="3:00 PM" title="Last Stop — Mercado Corona for Gifts">
            <p>
              If you haven&apos;t bought food gifts yet, Mercado Corona has
              dried chiles, mole paste, vanilla extract, and local sweets at
              local prices. Dried chile sets make excellent gifts (50–100 MXN).
              Mole paste is 80–150 MXN and keeps for months.
            </p>
          </TimeBlock>

          <TimeBlock time="5:00 PM" title="Final Dinner">
            <p>
              Bookend the trip at the same level you started. If you opened
              with birria, close with a nice dinner at La Tequila or Alcalde.
              If you&apos;ve been eating street food all week, one last round
              of tacos al pastor feels right. Either way: finish with a
              cantarito. It&apos;s tradition.
            </p>
          </TimeBlock>
        </div>
      </section>

      {/* Budget */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-obsidiana mb-4">
              5-Day Budget Summary
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="rounded-lg border border-obsidiana/[0.06] overflow-hidden">
              <div className="bg-obsidiana px-4 py-3">
                <div className="grid grid-cols-4 gap-2 font-mono text-[10px] uppercase tracking-wider text-piedra/60">
                  <span>Category</span>
                  <span>Budget</span>
                  <span>Mid-Range</span>
                  <span>Splurge</span>
                </div>
              </div>
              {[
                { cat: "Accommodation (5 nights)", budget: "2,500", mid: "7,500", high: "15,000" },
                { cat: "Food & Drink", budget: "3,000", mid: "5,500", high: "9,000" },
                { cat: "Transport", budget: "1,200", mid: "1,800", high: "2,800" },
                { cat: "Activities", budget: "600", mid: "1,200", high: "2,500" },
                { cat: "Shopping (Tonalá + Tlaquepaque)", budget: "500", mid: "2,000", high: "5,000" },
              ].map((row) => (
                <div key={row.cat} className="grid grid-cols-4 gap-2 px-4 py-2.5 border-t border-obsidiana/[0.06] text-sm">
                  <span className="text-obsidiana/70">{row.cat}</span>
                  <span className="font-mono text-xs text-agave">{row.budget}</span>
                  <span className="font-mono text-xs text-tequila">{row.mid}</span>
                  <span className="font-mono text-xs text-cantera">{row.high}</span>
                </div>
              ))}
              <div className="grid grid-cols-4 gap-2 px-4 py-3 border-t-2 border-obsidiana/10 bg-piedra-dark/50 font-bold">
                <span className="text-obsidiana text-sm">Total (MXN)</span>
                <span className="font-mono text-xs text-agave">7,800</span>
                <span className="font-mono text-xs text-tequila">18,000</span>
                <span className="font-mono text-xs text-cantera">34,300</span>
              </div>
              <div className="grid grid-cols-4 gap-2 px-4 py-2 bg-piedra-dark/50 text-xs text-obsidiana/40">
                <span>Approx USD</span>
                <span className="font-mono">$459</span>
                <span className="font-mono">$1,059</span>
                <span className="font-mono">$2,018</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CanteraDivider />

      <FAQSection
        faqs={[
          {
            question: "Is 5 days too long for Guadalajara?",
            answer: "Not at all. 5 days lets you do both day trips (Tequila + Chapala), explore neighborhoods properly, and have at least one slow day. Most travelers who spend 5 days wish they had more — GDL grows on you.",
          },
          {
            question: "Can I swap Lago de Chapala for another day trip?",
            answer: "Yes. If Chapala doesn't interest you, use Day 4 for Guachimontones (circular pyramids, 60 MXN, great for archaeology fans) or Mazamitla (mountain pueblo mágico with hiking and cabins, best in cool weather). See our day trip guides.",
          },
          {
            question: "What if Tonalá market day doesn't align with Day 5?",
            answer: "The tianguis runs Thursday and Sunday only. If neither aligns with Day 5, visit Tonalá's permanent shops (open daily but less impressive) or swap it for Mercado del Baratillo (Sunday flea market) or a deeper Centro/neighborhood day.",
          },
          {
            question: "Should I stay in the same hotel all 5 nights?",
            answer: "Yes — moving hotels wastes half a day. Stay in Colonia Americana for the best 5-day base. Everything is accessible by Uber from there. The one exception: if you want to spend a night in Ajijic for the lakeside experience.",
          },
        ]}
      />

      <RelatedContent
        items={[
          { label: "3-Day Itinerary", href: "/3-day-guadalajara-itinerary", description: "The core itinerary (Days 1–3)." },
          { label: "7-Day Itinerary", href: "/7-day-guadalajara-itinerary", description: "Add Guachimontones + Mazamitla." },
          { label: "Lago de Chapala", href: "/lago-de-chapala-day-trip", description: "The full day trip guide." },
          { label: "Tonalá Guide", href: "/tonala-guide", description: "Market tips and workshop visits." },
          { label: "Tequila Day Trip", href: "/tequila-day-trip", description: "Complete distillery comparison." },
          { label: "Budget Guide", href: "/guadalajara-budget-guide", description: "5-day cost optimization." },
        ]}
      />

      <GuideCTA />
    </>
  );
}
