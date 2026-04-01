"use client";

import Link from "next/link";
import { GuideHero } from "@/components/shared/GuideHero";
import { CanteraDivider } from "@/components/decorative/CanteraDivider";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { TipCard } from "@/components/content/TipCard";
import { FAQSection } from "@/components/shared/FAQSection";
import { RelatedContent } from "@/components/shared/RelatedContent";
import { GuideCTA } from "@/components/shared/GuideCTA";
import { ContentImage } from "@/components/content/ContentImage";
import { StructuredData } from "@/components/seo/StructuredData";

export function CdmxToGdl() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "CDMX to GDL", href: "/mexico-city-to-guadalajara" },
        ]}
        article={{
          headline: "Mexico City to Guadalajara 2026",
          description: "Flight, bus, and driving options compared.",
          datePublished: "2026-03-28",
          dateModified: "2026-03-30",
          url: "https://guadalajaraitinerary.com/mexico-city-to-guadalajara",
        }}
      />

      <GuideHero
        breadcrumbLabel="CDMX → GDL"
        kicker="Route Guide"
        kickerColor="tequila"
        title="Mexico City to Guadalajara"
        subtitle="Three ways to cover the 540 km between Mexico's two biggest cities. Flight is fastest, bus is most comfortable, driving is for the adventurous."
        pills={["540 km", "1 hr flight", "6 hr bus", "Side-by-side comparison"]}
        updatedDate="Mar 2026"
        readTime="7 min"
        image="https://images.unsplash.com/photo-1518659526054-190340b32735?w=1600&q=80"
        imageAlt="Highway through Mexican highlands"
      />

      <CanteraDivider className="my-0" />

      {/* Comparison */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              The Three Options
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-lg border border-obsidiana/[0.06] overflow-hidden mb-6">
              <div className="bg-obsidiana px-4 py-3">
                <div className="grid grid-cols-5 gap-2 font-mono text-[10px] uppercase tracking-wider text-piedra/60">
                  <span>Mode</span>
                  <span>Time</span>
                  <span>Cost</span>
                  <span>Comfort</span>
                  <span>Verdict</span>
                </div>
              </div>
              {[
                { mode: "Flight", time: "1 hr (+airport)", cost: "1,000–2,500 MXN", comfort: "★★★★☆", verdict: "Best overall", vClass: "text-agave" },
                { mode: "Luxury Bus", time: "6–7 hrs", cost: "800–1,200 MXN", comfort: "★★★★★", comfort_note: "", verdict: "Best comfort", vClass: "text-tequila" },
                { mode: "Driving", time: "5.5–6 hrs", cost: "~1,800 MXN (gas+tolls)", comfort: "★★★☆☆", verdict: "Flexible but tiring", vClass: "text-obsidiana/50" },
              ].map((row) => (
                <div key={row.mode} className="grid grid-cols-5 gap-2 px-4 py-3 border-t border-obsidiana/[0.06] text-sm">
                  <span className="text-obsidiana/70 font-medium">{row.mode}</span>
                  <span className="font-mono text-xs text-obsidiana/60">{row.time}</span>
                  <span className="font-mono text-xs text-obsidiana/60">{row.cost}</span>
                  <span className="text-xs">{row.comfort}</span>
                  <span className={`font-mono text-xs ${row.vClass}`}>{row.verdict}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Flight */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-obsidiana mb-4">
              Option 1: Flight (Recommended)
            </h2>
          </ScrollReveal>

          <ContentImage
            src="https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=800&q=80"
            alt="Aerial view of Mexico from airplane window on the flight from Mexico City to Guadalajara"
            caption="The 1-hour flight between CDMX and GDL offers highland views on clear days"
            aspectRatio="wide"
          />

          <ScrollReveal delay={0.1}>
            <p className="text-sm text-obsidiana/65 leading-relaxed mb-4">
              Multiple daily flights on <strong>Volaris</strong>,{" "}
              <strong>VivaAerobus</strong>, and <strong>Aeroméxico</strong>.
              Flight time is 1 hour. Total door-to-door time: 3–4 hours
              including airport.
            </p>
          </ScrollReveal>

          <TipCard type="money">
            <strong>Price range:</strong> 1,000–2,500 MXN ($60–147 USD) one
            way. Volaris and VivaAerobus are the budget carriers — book 2+ weeks
            ahead for 1,000–1,500 MXN fares. Same-week bookings jump to
            2,000–2,500 MXN. Aeroméxico is 2,000–3,500 MXN but includes
            baggage and is generally more reliable.
          </TipCard>

          <TipCard type="tip">
            <strong>Budget carrier tips:</strong> Volaris and VivaAerobus charge
            extra for everything — checked bags (400–600 MXN), seat selection
            (100–250 MXN), even carry-on bags larger than a personal item on
            VivaAerobus. Book the basic fare and pack light (one backpack) to
            keep it under 1,200 MXN. Aeroméxico&apos;s higher base fare
            includes a carry-on and is often the better deal once you add
            budget carrier extras.
          </TipCard>

          <TipCard type="local">
            <strong>Airport logistics:</strong> CDMX has two airports — AICM
            (MEX, central, most flights) and Felipe Ángeles (NLU, far north,
            some Volaris flights). Check which airport before booking. GDL has
            one airport (GDL), 25 min from Centro by Uber (~130 MXN).
          </TipCard>
        </div>
      </section>

      {/* Bus */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-obsidiana mb-4">
              Option 2: Luxury Bus
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-sm text-obsidiana/65 leading-relaxed mb-4">
              Mexican luxury buses are genuinely luxurious — reclining seats,
              leg room, WiFi, power outlets, movies, and sometimes meals.
              The 6–7 hour ride through the highlands is scenic and comfortable.
              For travelers who enjoy the journey, this is the best option.
            </p>
          </ScrollReveal>

          <TipCard type="tip">
            <strong>Best bus lines ranked:</strong>
            <br />
            <strong>1. ETN</strong> — The gold standard. Wide reclining seats
            (only 3 across instead of 4), individual screens, blankets. 1,000–
            1,200 MXN. Worth the premium.
            <br />
            <strong>2. Primera Plus</strong> — Nearly as good as ETN, slightly
            cheaper. 800–1,000 MXN. 4-across seating but still very comfortable.
            <br />
            <strong>3. Omnibus de México</strong> — Budget option. 600–800 MXN.
            Basic but functional. Less leg room, fewer amenities.
          </TipCard>

          <ContentImage
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80"
            alt="Mexican bus station with luxury coaches for the Mexico City to Guadalajara route"
            caption="ETN and Primera Plus luxury buses offer reclining seats and WiFi for the 6-hour ride"
            aspectRatio="landscape"
          />

          <TipCard type="local">
            <strong>Departure:</strong> From CDMX&apos;s Terminal de Autobuses
            del Poniente (Terminal del Oeste) or Terminal Norte. Arrives at
            GDL&apos;s Central Nueva bus terminal in Tlaquepaque. Multiple daily
            departures (roughly hourly from 6am–midnight). Book online at
            etn.com.mx or primeraplus.com.mx, or buy at the terminal.
          </TipCard>

          <TipCard type="money">
            <strong>Overnight bus hack:</strong> Take the 11pm or midnight ETN
            bus. Sleep for 6 hours, arrive in GDL at 6am. Save a night of
            hotel cost. The seats recline far enough to sleep decently. Bring
            earplugs and a neck pillow.
          </TipCard>
        </div>
      </section>

      {/* Driving */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-obsidiana mb-4">
              Option 3: Driving
            </h2>
          </ScrollReveal>

          <ContentImage
            src="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=800&q=80"
            alt="Mexican highland landscape along the highway between Mexico City and Guadalajara"
            caption="The toll highway passes through scenic Mexican highlands for 540 km"
            aspectRatio="wide"
          />

          <ScrollReveal delay={0.1}>
            <p className="text-sm text-obsidiana/65 leading-relaxed mb-4">
              540 km on Highway 15D (the cuota/toll road). 5.5–6 hours with
              no stops. The road is well-maintained and safe during daylight.
              Only recommended if you want a car for day trips from GDL or
              if you&apos;re combining GDL with other Jalisco destinations.
            </p>
          </ScrollReveal>

          <TipCard type="money">
            <strong>Costs:</strong> Tolls ~800 MXN (the autopista has 4–5 toll
            booths). Gas ~1,000 MXN (depending on vehicle). Total ~1,800 MXN
            one way. More expensive than a flight when solo, but competitive
            for 2–4 people splitting costs.
          </TipCard>

          <TipCard type="skip">
            <strong>Don&apos;t drive at night.</strong> Mexican highways are
            safe during daylight but nighttime driving carries risks — unlit
            vehicles, animals on the road, and occasional security concerns on
            rural stretches. Depart by 7am to arrive well before dark.
          </TipCard>

          <TipCard type="tip">
            <strong>Rental car:</strong> Pick up in CDMX, drop off in GDL. One-
            way rentals cost a 500–1,000 MXN surcharge on top of the daily rate
            (600–1,200 MXN/day). Book through Sixt or Europcar for the best
            availability. Mexican liability insurance is mandatory and costs
            250–400 MXN/day.
          </TipCard>
        </div>
      </section>

      <CanteraDivider />

      <FAQSection
        faqs={[
          { question: "What's the cheapest way to get from CDMX to Guadalajara?", answer: "Budget bus (Omnibus de México): 600-800 MXN. Budget airline with no extras (Volaris basic): 1,000-1,500 MXN booked 2+ weeks ahead. The bus is usually cheapest but takes 6-7 hours vs 1 hour flying." },
          { question: "What's the best way?", answer: "Flight for speed (1 hour), ETN bus for comfort and experience (6 hours, reclining seats, scenic). We recommend flying if time matters, ETN if you enjoy the journey." },
          { question: "How far in advance should I book flights?", answer: "2-3 weeks for budget airlines (Volaris, VivaAerobus) to get 1,000-1,500 MXN fares. Last-minute flights jump to 2,000-2,500 MXN. Aeroméxico is more stable in pricing but rarely as cheap as budget carriers booked early." },
          { question: "Can I do a day trip from CDMX to Guadalajara?", answer: "Technically yes (early flight out, late flight back) but it's exhausting and you'd only get 6-8 hours in GDL. Much better to stay at least one night. Even 2 nights lets you do the essential highlights." },
          { question: "Is it safe to drive between CDMX and Guadalajara?", answer: "During daylight on the toll highway (autopista), yes. The road is well-maintained and well-traveled. Don't drive at night. Don't take the free highway (libre) — it's slower, less maintained, and less safe." },
        ]}
      />

      <RelatedContent
        items={[
          { label: "GDL vs CDMX", href: "/guadalajara-vs-mexico-city", description: "Should you visit both?" },
          { label: "3-Day Itinerary", href: "/3-day-guadalajara-itinerary", description: "What to do when you arrive." },
          { label: "Getting Around GDL", href: "/getting-around-guadalajara", description: "Airport transfer + city transport." },
          { label: "Where to Stay", href: "/where-to-stay-guadalajara", description: "Book before you go." },
          { label: "Budget Guide", href: "/guadalajara-budget-guide", description: "Plan your spending." },
          { label: "Safety Tips", href: "/guadalajara-safety-tips", description: "Arrival safety." },
        ]}
      />

      <GuideCTA />
    </>
  );
}
