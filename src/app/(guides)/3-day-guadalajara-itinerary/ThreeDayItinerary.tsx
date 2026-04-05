"use client";

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
import Link from "next/link";

export function ThreeDayItinerary() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "3-Day Itinerary", href: "/3-day-guadalajara-itinerary" },
        ]}
        article={{
          headline: "3-Day Guadalajara Itinerary 2026",
          description: "A stop-by-stop 3-day Guadalajara itinerary with real prices.",
          datePublished: "2026-01-08",
          dateModified: "2026-03-15",
          url: "https://guadalajaraitinerary.com/3-day-guadalajara-itinerary",
        }}
      />

      <GuideHero
        breadcrumbLabel="3-Day Itinerary"
        kicker="Recommended"
        kickerColor="tequila"
        title="3 Days in Guadalajara"
        subtitle="The sweet spot for a first trip — Centro, Tlaquepaque, Chapultepec, and a full day in Tequila country. Real prices, tested routes, no sugarcoating."
        pills={["3 Days", "~4,200 MXN budget", "21 stops", "Tequila day trip"]}
        updatedDate="Mar 2026"
        readTime="14 min"
        image="/images/40-agave-fields-tequila.jpg"
        imageAlt="Blue agave fields with Tequila town in the background"
      />

      <CanteraDivider className="my-0" />

      {/* Intro */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              Three days is the sweet spot for Guadalajara. You get the
              colonial grandeur of Centro Histórico, the artisan magic of
              Tlaquepaque, the bar-and-café energy of Chapultepec, and a full
              day trip to the town where tequila was literally invented.
            </p>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              This itinerary is built for someone staying in{" "}
              <Link href="/where-to-stay-guadalajara" className="text-cantera hover:underline">
                Centro or Chapultepec
              </Link>{" "}
              (both work). Budget estimate: ~1,400 MXN/day for a mid-range
              traveler (meals, transport, one paid attraction). Add 800–1,200 MXN
              for the Tequila day trip depending on your distillery choices.
            </p>
          </ScrollReveal>

          <TipCard type="tip">
            <strong>When to go:</strong> October–December is perfect — dry, warm
            (24°C), and the Fiestas de Octubre bring free concerts, mariachi
            competitions, and street food stalls all over the city. Avoid late
            June through September unless you love afternoon downpours. See our{" "}
            <Link href="/best-time-to-visit-guadalajara" className="text-agave hover:underline">
              Best Time to Visit
            </Link>{" "}
            guide for the month-by-month breakdown.
          </TipCard>
        </div>
      </section>

      {/* DAY 1 */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-1">
              Day 1
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-2">
              Centro Histórico & Tlaquepaque
            </h2>
            <p className="text-sm text-obsidiana/50 mb-8">
              Colonial landmarks, the best birria in the city, and Mexico&apos;s
              top artisan neighborhood
            </p>
          </ScrollReveal>

          <TimeBlock time="7:30 AM" title="Birria Breakfast at Birriería Las 9 Esquinas">
            <p>
              The city&apos;s best birria (Colón 384, Centro). Order the{" "}
              <em>birria en caldo</em> (95 MXN) or <em>tacos dorados</em>{" "}
              (75 MXN for 4). Arrive by 7:30 to beat the rush — cash only (we confirmed this as of March 2026). Full
              details in our{" "}
              <Link href="/guadalajara-food-guide" className="text-cantera hover:underline">
                food guide
              </Link>.
            </p>
          </TimeBlock>

          <TimeBlock time="9:00 AM" title="Catedral de Guadalajara & Plaza de Armas">
            <p>
              A 10-minute walk northeast. The twin-spired cathedral (free entry)
              is the city&apos;s most photographed building — go inside for the
              Gothic-meets-Baroque interior. The painting of the Assumption of
              the Virgin (traditionally attributed to Murillo, though disputed) is in the left nave.
            </p>
            <p>
              Spend 20 minutes here, then walk through Plaza de Armas and
              Rotonda de los Jaliscienses Ilustres (the gazebo plaza next door).
            </p>
          </TimeBlock>

          <TimeBlock time="10:00 AM" title="Hospicio Cabañas — Orozco's Fire Murals">
            <p>
              This is the highlight of Centro. A 15-minute walk east to the
              UNESCO World Heritage site. The entry fee is 90 MXN — we verified
              this in Q1 2026 (free on Tuesdays). José Clemente Orozco&apos;s{" "}
              <em>Man of Fire</em> fresco on the chapel ceiling is one of the
              most powerful murals in the Americas.
            </p>
            <p>
              Tip: lie down on the wooden benches in the chapel to look
              straight up at the dome. Everyone does it. Budget 45–60 minutes.
            </p>
          </TimeBlock>

          <TipCard type="money">
            <strong>Save 90 MXN:</strong> Visit Hospicio Cabañas on Tuesday
            when entry is free. The galleries are less crowded too.
          </TipCard>

          <TimeBlock time="11:30 AM" title="Mercado San Juan de Dios — Don't Buy Upstairs">
            <p>
              Latin America&apos;s largest indoor market, 3 blocks south of
              Cabañas. The ground floor is the real market — food stalls, dried
              chiles, leather goods. The second floor is tourist trinkets and
              electronics of questionable origin. The{" "}
              <strong>third floor food court</strong> has solid tortas ahogadas
              for 55–70 MXN.
            </p>
            <p>
              Walk the ground floor for 30 minutes, eat upstairs or skip if
              you&apos;re still full from birria.
            </p>
          </TimeBlock>

          <TipCard type="skip">
            <strong>Skip the second floor entirely.</strong> It&apos;s knockoff
            electronics, bootleg DVDs, and tourist trap souvenirs. The real
            crafts are in Tlaquepaque (where you&apos;re headed next).
          </TipCard>

          <TimeBlock time="1:00 PM" title="Uber to Tlaquepaque (20 min, ~65 MXN)">
            <p>
              The Uber pickup at Mercado San Juan de Dios is confusing — walk
              to the main entrance on Javier Mina and request from there. A
              taxi will ask for 120+ MXN for the same trip.
            </p>
          </TimeBlock>

          <ContentImage
            src="/images/41-indoor-mercado.jpg"
            alt="Busy Mexican market stall with colorful produce and dried chiles in Guadalajara"
            caption="Mercado San Juan de Dios — Latin America's largest indoor market"
            aspectRatio="wide"
          />

          <TimeBlock time="1:30 PM" title="Tlaquepaque — The Artisan Heart">
            <p>
              This is where Guadalajara peaks for most visitors. The
              pedestrianized Calle Independencia is lined with blown-glass
              workshops, Talavera pottery studios, and galleries that range
              from tourist kitsch to museum-quality folk art.
            </p>
            <p>
              <strong>Don&apos;t miss:</strong> Museo del Premio Nacional de
              la Cerámica (free), Sergio Bustamante Gallery (surreal bronze
              sculptures), and any of the hand-blown glass demonstrations on
              Calle Independencia.
            </p>
          </TimeBlock>

          <TimeBlock time="2:30 PM" title="Lunch at El Parián — Skip the First Mariachi">
            <p>
              El Parián is one of Mexico&apos;s most iconic mariachi venues — a
              covered courtyard ringed with cantinas. Sit at any bar, order a{" "}
              <em>torta ahogada</em> (drowned sandwich, 65–85 MXN) and a
              cerveza. Mariachi bands will approach your table offering songs
              for 100–150 MXN per song.
            </p>
            <p>
              <strong>Strategy:</strong> The first band that approaches is
              usually the most aggressive. Let them pass and pick the second or
              third group — same quality, less pressure. One song is enough.
              Three songs and you&apos;ve spent 450 MXN on mariachi.
            </p>
          </TimeBlock>

          <TipCard type="local">
            The <em>torta ahogada</em> is Guadalajara&apos;s signature dish. It&apos;s a
            birote (hard roll) stuffed with carnitas, drowned in a spicy
            tomato-chile de árbol sauce. Order{" "}
            <em>&quot;media ahogada&quot;</em> (half-drowned) your first time — the full
            version is aggressively spicy.
          </TipCard>

          <TimeBlock time="4:30 PM" title="Browse Calle Independencia Galleries">
            <p>
              Walk the full length of Calle Independencia. The shops thin out as
              you go west — the best galleries are in the first 4 blocks from
              El Parián. Budget 60–90 minutes for leisurely browsing.
            </p>
            <p>
              For quality Talavera pottery: <strong>Antigua de México</strong>{" "}
              (Calle Independencia 258) has the best selection. Prices start at
              200 MXN for small pieces, 1,500+ for large platters.
            </p>
          </TimeBlock>

          <TimeBlock time="6:00 PM" title="Back to Centro — Evening Walk">
            <p>
              Uber back (~65 MXN, 20 min). Walk the{" "}
              <strong>Paseo Chapultepec</strong> (the main pedestrian boulevard
              in Colonia Americana) as the evening crowd appears. Grab a craft
              beer at <strong>Cervecería Loba</strong> (Av. Chapultepec Sur 11,
              craft pints 80–110 MXN) or mezcal at{" "}
              <strong>Pare de Sufrir</strong> (mezcal flights ~180 MXN).
            </p>
          </TimeBlock>

          <TimeBlock time="8:00 PM" title="Dinner — La Tequila (splurge) or Tacos on the Street">
            <p>
              <strong>Splurge option:</strong> La Tequila (Av. México 2830) is
              GDL&apos;s best upscale Mexican restaurant. Mains 220–380 MXN.
              Reserve ahead.
            </p>
            <p>
              <strong>Budget option:</strong> Hit the taco stands on Av.
              Chapultepec near the Fuente de la Minerva roundabout. Al pastor
              tacos 20–30 MXN each. Order 5, you&apos;ll be full.
            </p>
          </TimeBlock>
        </div>
      </section>

      {/* DAY 2 */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-1">
              Day 2
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-2">
              Tequila Day Trip
            </h2>
            <p className="text-sm text-obsidiana/50 mb-8">
              Agave fields, distillery tours, and the town where Mexico&apos;s
              most famous spirit was born
            </p>
          </ScrollReveal>

          <TipCard type="tip">
            <strong>How to get there:</strong> Three options ranked by value.
            <br />
            <strong>1. Uber/taxi (best):</strong> 400 MXN each way, split 4 ways =
            200 MXN round trip per person. Flexible timing, 60-min drive.
            <br />
            <strong>2. Public bus:</strong> From Central Vieja bus terminal,
            Tequila Plus buses run hourly (85 MXN one way, 90 min).
            <br />
            <strong>3. José Cuervo Express train (skip):</strong> 850–2,400 MXN.
            Tourist trap with captive tequila sales. The train ride is pretty but
            you&apos;re locked into their itinerary.
          </TipCard>

          <TimeBlock time="8:00 AM" title="Drive to Tequila Through the Agave Fields">
            <p>
              The drive on Highway 15D is part of the experience — endless rows
              of blue agave stretch to the horizon. If you hired a driver or are
              in an Uber, ask to stop at the mirador (viewpoint) about 40
              minutes in for photos. The UNESCO-designated agave landscape is
              genuinely stunning at golden hour, but morning light works too.
            </p>
          </TimeBlock>

          <ContentImage
            src="/images/40-agave-fields-tequila.jpg"
            alt="Blue agave fields stretching to the horizon near Tequila, Jalisco"
            caption="UNESCO-designated agave landscape on the road to Tequila"
            aspectRatio="landscape"
            priority
          />

          <TimeBlock time="9:30 AM" title="Small Distillery Tour — Skip José Cuervo">
            <p>
              <strong>Our pick: Casa Sauza</strong> or{" "}
              <strong>Destilería La Fortaleza</strong>. Fortaleza is the
              connoisseur&apos;s choice — family-owned, traditional tahona
              (stone wheel) process, and their blanco is world-class. Tours run
              ~300 MXN including tastings. Book on their website a day ahead.
            </p>
            <p>
              José Cuervo (La Rojeña) is the biggest and most famous but also
              the most tourist-funneling — you&apos;ll spend more time in their
              gift shop than learning about tequila. If you go anyway, the
              premium tour (600 MXN) is better than the basic.
            </p>
          </TimeBlock>

          <TipCard type="skip">
            <strong>The &quot;free&quot; tasting rooms in town center</strong> are sales
            floors. They pour cheap mixtos (not 100% agave) and pressure you
            to buy bottles. Walk past them to the actual distilleries.
          </TipCard>

          <TimeBlock time="12:00 PM" title="Lunch in Tequila Town">
            <p>
              <strong>La Antigua Casona</strong> on the main plaza — solid
              regional food, reasonable prices (mains 120–200 MXN). Try the{" "}
              <em>carne en su jugo</em> (beef soup with beans, bacon, and
              chiles). Sit on the terrace facing the plaza.
            </p>
            <p>
              Avoid the restaurants directly attached to the big distilleries —
              captive audience pricing.
            </p>
          </TimeBlock>

          <TimeBlock time="1:30 PM" title="Walk the Town & Buy Tequila">
            <p>
              Tequila town is small — you can walk the whole center in 30
              minutes. The church, the main plaza, and the shops along the
              pedestrian street are the main draws.
            </p>
            <p>
              <strong>Buying bottles:</strong> Buy at the distillery you toured,
              not from random shops. Fortaleza blanco goes for ~650 MXN at their
              store (vs. 900+ in Guadalajara liquor shops). Ask for the
              &quot;local price&quot; if they offer one.
            </p>
          </TimeBlock>

          <ContentImage
            src="/images/27-tequila-bottles-distillery.jpg"
            alt="Tequila bottles aging at a traditional distillery in Jalisco, Mexico"
            caption="Destilería La Fortaleza — small-batch tequila using traditional tahona methods"
            aspectRatio="landscape"
          />

          <TimeBlock time="3:00 PM" title="Optional: Guachimontones Add-On">
            <p>
              If you started early and have energy, the circular pyramids at
              Guachimontones are 30 minutes south of Tequila. Entry: 60 MXN.
              These pre-Columbian structures are unique in Mesoamerica — no
              other pyramids in Mexico are circular. Allow 90 minutes.
            </p>
            <p>
              <strong>Our call:</strong> Worth it if you&apos;re into
              archaeology. If pyramids aren&apos;t your thing, use that time
              for a second distillery or head back to GDL early. See our{" "}
              <Link href="/guachimontones-day-trip" className="text-cantera hover:underline">
                full Guachimontones guide
              </Link>.
            </p>
          </TimeBlock>

          <TimeBlock time="5:30 PM" title="Return to Guadalajara">
            <p>
              Head back. If you drove, you&apos;ll hit Guadalajara around
              6:30 PM. If bussing, catch the 5:00 or 6:00 PM bus from the
              Tequila terminal.
            </p>
          </TimeBlock>

          <TimeBlock time="7:30 PM" title="Dinner & Drinks in Chapultepec">
            <p>
              You&apos;ll be tequila&apos;d out, so switch to mezcal or craft
              beer. <strong>Anónimo Bar</strong> (Av. Chapultepec Norte 110) has
              creative cocktails 130–180 MXN. For food,{" "}
              <strong>Karne Garibaldi</strong> (Garibaldi 1306) holds the
              Guinness record for fastest service — your carne en su jugo
              arrives in 13.5 seconds (Guinness-certified). Not a typo. Mains ~150 MXN.
            </p>
          </TimeBlock>

          <TipCard type="money">
            <strong>Day 2 budget estimate:</strong> Transport ~200 MXN (split
            Uber) + distillery tour 300 MXN + lunch 180 MXN + tequila bottle
            650 MXN + dinner 180 MXN ={" "}
            <strong>~1,510 MXN ($89 USD)</strong> without the bottle,{" "}
            <strong>~2,160 MXN ($127 USD)</strong> with.
          </TipCard>
        </div>
      </section>

      {/* DAY 3 */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-1">
              Day 3
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-2">
              Zapopan, Colonia Americana & Goodbye Birria
            </h2>
            <p className="text-sm text-obsidiana/50 mb-8">
              Modern art, the prettiest neighborhood in GDL, and one last
              morning of birria
            </p>
          </ScrollReveal>

          <TimeBlock time="8:00 AM" title="Birria Round 2 — Birriería El Chololo">
            <p>
              Different spot, different style. El Chololo (Calle Gigantes 127)
              serves <em>birria tatemada</em> — oven-roasted rather than stewed.
              It&apos;s smokier and more intensely flavored. Tacos 80 MXN for 4.
              This place is tiny — 12 seats — and opens at 7:30 AM.
            </p>
          </TimeBlock>

          <TimeBlock time="9:30 AM" title="Basílica de Zapopan & MAZ Museum">
            <p>
              Uber to Zapopan (~45 MXN, 15 min). The Basílica houses the Virgin
              of Zapopan — a tiny 16th-century figure that&apos;s Guadalajara&apos;s
              most revered religious image. Free entry, 15 minutes.
            </p>
            <p>
              Next door: <strong>Museo de Arte de Zapopan (MAZ)</strong> — a
              sleek contemporary art museum with rotating exhibitions. Entry:
              40 MXN. Worth 30–45 minutes if you like modern art. If not, skip
              and head to Colonia Americana.
            </p>
          </TimeBlock>

          <ContentImage
            src="/images/36-basilica-zapopan.jpg"
            alt="Basílica de Zapopan facade with twin spires in Guadalajara"
            caption="Basílica de Zapopan — home to Guadalajara's most revered religious image"
            aspectRatio="landscape"
          />

          <TimeBlock time="11:00 AM" title="Colonia Americana Walking Tour (Self-Guided)">
            <p>
              Uber to the corner of Av. Chapultepec and Av. de la Paz (~35 MXN).
              This is GDL&apos;s most walkable, photogenic neighborhood — Art Deco
              houses, tree-lined streets, independent coffee shops, and
              the city&apos;s best brunch scene.
            </p>
            <p>
              <strong>Route:</strong> Walk south on Chapultepec → turn right on
              Av. de la Paz → left on Calle Marsella → down to Parque de la
              Revolución. This loop takes 45 minutes at a stroll pace.
            </p>
          </TimeBlock>

          <TimeBlock time="12:00 PM" title="Coffee at Café Palreal or Cucuruchos">
            <p>
              <strong>Café Palreal</strong> (Av. Chapultepec Sur 435) — specialty
              coffee from Jalisco highlands, flat whites 65 MXN. Beautiful
              interior.
            </p>
            <p>
              <strong>Cucuruchos Nevería</strong> (nearby on General San Martín)
              — artisan ice cream in flavors like mamey, guanábana, and tequila.
              Cones from 55 MXN. Perfect if it&apos;s a warm day.
            </p>
          </TimeBlock>

          <TimeBlock time="1:00 PM" title="Lunch at Alcalde (If You Want One Great Meal)">
            <p>
              <strong>Alcalde</strong> (Av. México 2903) has appeared on the Latin America&apos;s
              50 Best Restaurants list. Modern Mexican tasting menu uses Jalisco
              ingredients. Lunch tasting menu ~800 MXN — expensive for GDL,
              cheap for this caliber of restaurant. Reserve 3+ days ahead.
            </p>
            <p>
              <strong>Budget alternative:</strong> Tacos at{" "}
              <strong>Tacos Providencia</strong> (Av. Providencia 2656) — al
              pastor on a tiny street stall, 25 MXN each. Locals line up here
              at lunch.
            </p>
          </TimeBlock>

          <ContentImage
            src="/images/09-mariachi-musicians.jpg"
            alt="Mariachi musicians in traditional charro outfits performing in a Guadalajara plaza"
            caption="Plaza de los Mariachis — where mariachi tradition was born"
            aspectRatio="landscape"
          />

          <TimeBlock time="3:00 PM" title="Plaza de los Mariachis (For the Closing Ceremony)">
            <p>
              End your trip where mariachi was born. Plaza de los Mariachis
              (near Mercado San Juan de Dios) is kitschy and touristy but also
              genuinely important — this is where mariachi musicians gather to
              play. Afternoons are quieter than evenings. Order a michelada
              (50 MXN) at one of the cantinas and listen.
            </p>
          </TimeBlock>

          <TipCard type="tip">
            <strong>If you have a late flight:</strong> The GDL airport (Miguel
            Hidalgo) is 25 minutes from Centro by Uber (~130 MXN). Budget 90
            minutes before a domestic flight, 2 hours for international.
            There&apos;s a good taco spot inside Terminal 1 after security.
          </TipCard>
        </div>
      </section>

      {/* Summary */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-obsidiana mb-4">
              3-Day Budget Summary
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
                { cat: "Accommodation (3 nights)", budget: "1,500", mid: "3,600", high: "7,500" },
                { cat: "Food & Drink", budget: "1,800", mid: "3,200", high: "5,500" },
                { cat: "Transport", budget: "600", mid: "900", high: "1,400" },
                { cat: "Activities", budget: "450", mid: "750", high: "1,500" },
                { cat: "Tequila Trip", budget: "500", mid: "1,200", high: "2,500" },
              ].map((row) => (
                <div
                  key={row.cat}
                  className="grid grid-cols-4 gap-2 px-4 py-3 border-t border-obsidiana/[0.06] text-sm"
                >
                  <span className="text-obsidiana/70">{row.cat}</span>
                  <span className="font-mono text-xs text-agave">{row.budget}</span>
                  <span className="font-mono text-xs text-tequila">{row.mid}</span>
                  <span className="font-mono text-xs text-cantera">{row.high}</span>
                </div>
              ))}
              <div className="grid grid-cols-4 gap-2 px-4 py-3 border-t-2 border-obsidiana/10 bg-piedra-dark/50 font-bold">
                <span className="text-obsidiana text-sm">Total (MXN)</span>
                <span className="font-mono text-xs text-agave">4,850</span>
                <span className="font-mono text-xs text-tequila">9,650</span>
                <span className="font-mono text-xs text-cantera">18,400</span>
              </div>
              <div className="grid grid-cols-4 gap-2 px-4 py-2 bg-piedra-dark/50 text-xs text-obsidiana/40">
                <span>Approx USD</span>
                <span className="font-mono">$285</span>
                <span className="font-mono">$568</span>
                <span className="font-mono">$1,082</span>
              </div>
            </div>
          </ScrollReveal>

          <TipCard type="money">
            <strong>Guadalajara is cheap.</strong> A mid-range 3-day trip costs
            less than one night at a nice hotel in Mexico City. We cross-referenced
            these prices with local listings in March 2026. The budget
            tier here isn&apos;t &quot;suffering&quot; — it&apos;s hostels, street
            tacos, and public transport, which is honestly how locals live.
          </TipCard>
        </div>
      </section>

      <CanteraDivider />

      {/* FAQ */}
      <FAQSection
        faqs={[
          {
            question: "Is 3 days enough for Guadalajara?",
            answer:
              "Yes — 3 days covers Centro, Tlaquepaque, Chapultepec, and a Tequila day trip. You'll miss Tonalá's Thursday market and Lago de Chapala, but those are better saved for a 5-day trip.",
          },
          {
            question: "Where should I stay for this itinerary?",
            answer:
              "Centro Histórico or Colonia Americana/Chapultepec. Centro puts you closest to Day 1 sights. Chapultepec is better for nightlife and Day 3. Both are safe and well-connected by Uber (rides average 35-65 MXN within the city).",
          },
          {
            question: "Do I need to speak Spanish?",
            answer:
              "Helpful but not required. Less English is spoken here than in Mexico City or tourist areas. Learn basic ordering phrases (por favor, la cuenta, cuánto cuesta). Google Translate's camera feature works great for menus.",
          },
          {
            question: "Is Guadalajara safe for tourists?",
            answer:
              "The tourist areas (Centro, Tlaquepaque, Chapultepec, Zapopan center) are safe day and night. Use normal big-city precautions. Avoid walking Calzada Independencia south of the market after dark. Uber is safer than hailing street taxis.",
          },
          {
            question: "Should I book the Tequila day trip through a tour company?",
            answer:
              "Not unless you want everything organized for you. An Uber to Tequila + booking directly with Destilería La Fortaleza costs about half what tour companies charge, and you control the timing. Tour companies are fine but overpriced.",
          },
          {
            question: "What's the best time of year to visit?",
            answer:
              "October–December: dry, warm (22-26°C), festive season. March–May is also good but hotter. Avoid June–September if you dislike afternoon rain (though mornings are clear). The Fiestas de Octubre in October are a highlight.",
          },
          {
            question: "Can I use USD in Guadalajara?",
            answer:
              "No. This isn't Cancún — everything is in pesos. ATMs give the best exchange rate. Withdraw from Banorte or HSBC ATMs to avoid extra fees. Bring a debit card with no foreign transaction fees.",
          },
          {
            question: "How do I get from the airport to the city?",
            answer:
              "Uber from GDL airport to Centro: ~130 MXN (25 min). The official airport taxis charge 250-350 MXN for the same trip. There's no train connection. Budget travelers: take the 706 bus to Antigua Central Camionera, then Line 1 Macrobús (total ~20 MXN, 75 min).",
          },
        ]}
      />

      {/* Related content */}
      <RelatedContent
        items={[
          { label: "1-Day Itinerary", href: "/1-day-guadalajara-itinerary", description: "Short on time? Centro + Tlaquepaque sprint." },
          { label: "5-Day Itinerary", href: "/5-day-guadalajara-itinerary", description: "Add Lago de Chapala and Tonalá market." },
          { label: "Food Guide", href: "/guadalajara-food-guide", description: "Every dish, every stall, every price." },
          { label: "Where to Stay", href: "/where-to-stay-guadalajara", description: "Neighborhood-by-neighborhood breakdown." },
          { label: "Tequila Day Trip", href: "/tequila-day-trip", description: "The complete distillery comparison." },
          { label: "Safety Tips", href: "/guadalajara-safety-tips", description: "Zone-by-zone safety breakdown." },
        ]}
      />

      <GuideCTA
        href="/guadalajara-food-guide"
        label="Next: The Food Guide"
        description="Birria, tortas ahogadas, tejuino, and 40 specific stalls with prices. Don't eat blind."
      />
    </>
  );
}
