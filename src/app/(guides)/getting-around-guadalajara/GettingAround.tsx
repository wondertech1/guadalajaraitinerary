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

export function GettingAround() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Getting Around", href: "/getting-around-guadalajara" },
        ]}
        article={{
          headline: "Getting Around Guadalajara 2026",
          description: "Complete transport guide with real prices.",
          datePublished: "2026-01-26",
          dateModified: "2026-03-10",
          url: "https://guadalajaraitinerary.com/getting-around-guadalajara",
        }}
      />

      <GuideHero
        breadcrumbLabel="Getting Around"
        kicker="Transport"
        kickerColor="agave"
        title="Getting Around Guadalajara"
        subtitle="Every transport mode ranked with real costs. The short version: Uber for everything in the city, buses for day trips. Don't rent a car."
        pills={["Uber prices", "Airport transfer", "Mi Macro", "Day trip transport"]}
        updatedDate="Mar 2026"
        readTime="9 min"
        image="/images/18-light-rail-station.jpg"
        imageAlt="Guadalajara light rail station"
      />

      <CanteraDivider className="my-0" />

      {/* Overview */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              Transport at a Glance
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-lg border border-obsidiana/[0.06] overflow-hidden mb-6">
              <div className="bg-obsidiana px-4 py-3">
                <div className="grid grid-cols-4 gap-2 font-mono text-[10px] uppercase tracking-wider text-piedra/60">
                  <span>Mode</span>
                  <span>Best For</span>
                  <span>Cost</span>
                  <span>Verdict</span>
                </div>
              </div>
              {[
                { mode: "Uber / Didi", best: "Everything in-city", cost: "35–80 MXN", verdict: "Use this", vClass: "text-agave" },
                { mode: "Mi Macro Periférico", best: "Longer distances", cost: "9.50 MXN", verdict: "Great value", vClass: "text-agave" },
                { mode: "Light Rail (Tren Ligero)", best: "North-south corridor", cost: "9.50 MXN", verdict: "Limited routes", vClass: "text-tequila" },
                { mode: "Macrobús (Line 1)", best: "Calzada Independencia", cost: "9.50 MXN", verdict: "Specific routes", vClass: "text-tequila" },
                { mode: "Street Taxi", best: "Nothing", cost: "80–200 MXN", verdict: "Avoid", vClass: "text-cantera" },
                { mode: "Rental Car", best: "Day trips only", cost: "600–1,200 MXN/day", verdict: "Not recommended", vClass: "text-cantera" },
                { mode: "Inter-city Bus", best: "Day trips", cost: "55–170 MXN", verdict: "Good for budget", vClass: "text-agave" },
              ].map((row) => (
                <div key={row.mode} className="grid grid-cols-4 gap-2 px-4 py-2.5 border-t border-obsidiana/[0.06] text-sm">
                  <span className="text-obsidiana/70 font-medium text-xs">{row.mode}</span>
                  <span className="text-obsidiana/50 text-xs">{row.best}</span>
                  <span className="font-mono text-xs text-obsidiana/60">{row.cost}</span>
                  <span className={`font-mono text-xs ${row.vClass}`}>{row.verdict}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Uber */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              Uber & Didi — Your Default
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-sm text-obsidiana/65 leading-relaxed mb-4">
              Uber is the default transport for tourists in GDL and it&apos;s
              excellent — cheap, safe, available everywhere, and eliminates taxi
              scams entirely. Didi (the Chinese ride-hail app) works identically
              and is sometimes 10–15% cheaper.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="rounded-lg border border-obsidiana/[0.06] overflow-hidden mb-4">
              <div className="bg-obsidiana px-4 py-3">
                <div className="grid grid-cols-2 gap-4 font-mono text-[10px] uppercase tracking-wider text-piedra/60">
                  <span>Route</span>
                  <span>Uber Cost (approx)</span>
                </div>
              </div>
              {[
                { route: "Centro → Chapultepec", cost: "35–50 MXN" },
                { route: "Centro → Tlaquepaque", cost: "55–75 MXN" },
                { route: "Centro → Zapopan", cost: "40–55 MXN" },
                { route: "Chapultepec → Airport", cost: "110–150 MXN" },
                { route: "Centro → Airport", cost: "120–160 MXN" },
                { route: "Centro → Tonalá", cost: "45–65 MXN" },
                { route: "GDL → Tequila (one way)", cost: "350–450 MXN" },
                { route: "GDL → Chapala (one way)", cost: "160–200 MXN" },
              ].map((row) => (
                <div key={row.route} className="grid grid-cols-2 gap-4 px-4 py-2.5 border-t border-obsidiana/[0.06] text-sm">
                  <span className="text-obsidiana/60 text-xs">{row.route}</span>
                  <span className="font-mono text-xs text-agave">{row.cost}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ContentImage
            src="/images/34-busy-pedestrian-street.jpg"
            alt="Busy Guadalajara city street showing convenient urban transport options"
            caption="Uber is the default transport for visitors — cheap, safe, and available everywhere in Guadalajara."
            aspectRatio="landscape"
          />

          <TipCard type="tip">
            <strong>Safety tips:</strong> Always verify the license plate matches
            the app before getting in. Sit in the back seat. Share your trip with
            someone. These are standard practices that make ride-hailing safer
            than any other transport option.
          </TipCard>

          <TipCard type="skip">
            <strong>Never hail a street taxi.</strong> Street taxis don&apos;t use
            meters, routinely overcharge tourists 2–3x, and are the #1 transport
            scam in GDL. There is literally no situation where a street taxi is
            better than Uber. Even if Uber surges, it&apos;s still cheaper and
            safer than a random taxi.
          </TipCard>
        </div>
      </section>

      {/* Public Transit */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              Public Transit
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-sm text-obsidiana/65 leading-relaxed mb-4">
              GDL&apos;s public transit is decent for a Mexican city but not
              tourist-optimized. The <strong>Mi Macro Periférico</strong> (BRT
              ring line opened 2023) is the standout — modern, fast, and connects
              many neighborhoods. The light rail is limited to one north-south
              line. Regular buses are cheap but confusing for visitors.
            </p>
          </ScrollReveal>

          <TipCard type="tip">
            <strong>Mi Macro Periférico:</strong> A modern Bus Rapid Transit
            line that circles the city. 9.50 MXN per ride. Useful for getting
            between distant neighborhoods without Uber. The stations are clean
            and well-signed. Buy a reloadable card at any station (20 MXN
            deposit). Google Maps shows real-time routes.
          </TipCard>

          <ContentImage
            src="/images/34-busy-pedestrian-street.jpg"
            alt="Guadalajara pedestrian street with walkable neighborhoods and public transit access"
            caption="Guadalajara's pedestrian-friendly corridors connect to Mi Macro and light rail stations."
            aspectRatio="wide"
          />

          <TipCard type="local">
            <strong>The honest tourist take:</strong> Most visitors use Uber
            exclusively and never touch public transit. That&apos;s fine — Uber
            is so cheap in GDL that the savings from public transit are minimal
            (35–50 MXN per Uber vs 9.50 MXN per bus). Use transit if you want
            the local experience or are on a strict budget. Otherwise, Uber
            everywhere.
          </TipCard>
        </div>
      </section>

      {/* Airport */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              Airport Transfer
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-sm text-obsidiana/65 leading-relaxed mb-4">
              Guadalajara&apos;s airport (GDL / Miguel Hidalgo International) is
              25 minutes from Centro and 20 minutes from Chapultepec with normal
              traffic.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="rounded-lg border border-obsidiana/[0.06] overflow-hidden mb-4">
              <div className="bg-obsidiana px-4 py-3">
                <div className="grid grid-cols-3 gap-2 font-mono text-[10px] uppercase tracking-wider text-piedra/60">
                  <span>Option</span>
                  <span>Cost to Centro</span>
                  <span>Notes</span>
                </div>
              </div>
              {[
                { opt: "Uber", cost: "120–160 MXN", notes: "Walk to the pickup zone outside arrivals" },
                { opt: "Didi", cost: "110–150 MXN", notes: "Sometimes slightly cheaper than Uber" },
                { opt: "Official airport taxi", cost: "250–350 MXN", notes: "Pre-paid booth inside arrivals" },
                { opt: "Bus (706 → Macrobús)", cost: "~20 MXN total", notes: "75 min, budget option" },
              ].map((row) => (
                <div key={row.opt} className="grid grid-cols-3 gap-2 px-4 py-2.5 border-t border-obsidiana/[0.06] text-sm">
                  <span className="text-obsidiana/70 font-medium text-xs">{row.opt}</span>
                  <span className="font-mono text-xs text-agave">{row.cost}</span>
                  <span className="text-obsidiana/50 text-xs">{row.notes}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <TipCard type="tip">
            <strong>Uber pickup at the airport:</strong> Follow signs to
            &quot;Transporte Terrestre&quot; or walk outside the arrivals terminal.
            The Uber pickup zone is in the parking area. Some airports restrict
            Uber inside — walk to the designated zone. If your Uber driver calls,
            they may ask you to walk to a specific meeting point.
          </TipCard>

          <ContentImage
            src="/images/44-airport-transfer-street.jpg"
            alt="View from inside a car on a Guadalajara boulevard near the airport transfer route"
            caption="The airport is 20–25 minutes from central Guadalajara by Uber."
            aspectRatio="landscape"
          />

          <TipCard type="money">
            <strong>Budget hack:</strong> The 706 bus from the airport to
            Antigua Central Camionera costs 9.50 MXN. From there, Line 1
            Macrobús to Centro is 9.50 MXN. Total: ~20 MXN and 75 minutes.
            Only worth it if you&apos;re on a very tight budget and have light
            luggage.
          </TipCard>
        </div>
      </section>

      {/* Day Trip Transport */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-obsidiana mb-4">
              Day Trip Transport
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-lg border border-obsidiana/[0.06] overflow-hidden">
              <div className="bg-obsidiana px-4 py-3">
                <div className="grid grid-cols-4 gap-2 font-mono text-[10px] uppercase tracking-wider text-piedra/60">
                  <span>Destination</span>
                  <span>Bus</span>
                  <span>Uber</span>
                  <span>Terminal</span>
                </div>
              </div>
              {[
                { dest: "Tequila", bus: "85 MXN, 90 min", uber: "400 MXN, 60 min", terminal: "Central Vieja" },
                { dest: "Chapala", bus: "55 MXN, 60 min", uber: "180 MXN, 45 min", terminal: "Central Vieja" },
                { dest: "Mazamitla", bus: "150 MXN, 2.5 hrs", uber: "~800 MXN, 2 hrs", terminal: "Central Nueva" },
                { dest: "Guachimontones", bus: "No direct bus", uber: "300 MXN from Tequila", terminal: "—" },
              ].map((row) => (
                <div key={row.dest} className="grid grid-cols-4 gap-2 px-4 py-2.5 border-t border-obsidiana/[0.06] text-sm">
                  <span className="text-obsidiana/70 font-medium text-xs">{row.dest}</span>
                  <span className="font-mono text-xs text-agave">{row.bus}</span>
                  <span className="font-mono text-xs text-tequila">{row.uber}</span>
                  <span className="text-obsidiana/40 text-xs">{row.terminal}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <TipCard type="local">
            <strong>Two bus terminals:</strong> Central Vieja (old terminal,
            centro) handles regional routes (Tequila, Chapala). Central Nueva
            (new terminal, Tlaquepaque) handles long-distance (Mazamitla, CDMX).
            Don&apos;t mix them up — they&apos;re 20 minutes apart by Uber.
          </TipCard>
        </div>
      </section>

      <CanteraDivider />

      <FAQSection
        faqs={[
          { question: "Should I rent a car in Guadalajara?", answer: "No, unless you're doing multiple rural day trips. Driving in GDL is stressful (aggressive traffic), parking in Centro/Chapultepec is expensive and scarce, and Uber handles everything for less. For day trips, a hired driver for the day (1,200-2,000 MXN) is less stressful than driving unfamiliar mountain roads." },
          { question: "Is Uber safe in Guadalajara?", answer: "Yes. Verify the plate matches the app, share your trip, and sit in the back. Uber is considered the safest transport option — much safer than street taxis." },
          { question: "How much should I budget for transport?", answer: "Budget: 150-250 MXN/day using Uber + occasional bus. Most in-city Uber rides are 35-65 MXN. A day trip to Tequila adds 200-400 MXN for transport." },
          { question: "Can I use Google Maps for public transit?", answer: "Yes — Google Maps shows bus and Mi Macro routes with real-time arrivals in GDL. It's the easiest way to navigate public transit if you choose to use it." },
          { question: "How do I get from Mexico City to Guadalajara?", answer: "Flight: 1 hour, 1,000-2,500 MXN on Volaris or VivaAerobus. Bus: 6-7 hours, 800-1,200 MXN on ETN or Primera Plus (comfortable, reclining seats). Driving: 6 hours on Highway 15D." },
        ]}
      />

      <RelatedContent
        items={[
          { label: "Tequila Day Trip", href: "/tequila-day-trip", description: "Transport options ranked." },
          { label: "Airport Guide", href: "/guadalajara-safety-tips", description: "Arrival logistics." },
          { label: "Budget Guide", href: "/guadalajara-budget-guide", description: "Transport cost planning." },
          { label: "Where to Stay", href: "/where-to-stay-guadalajara", description: "Location affects transport needs." },
          { label: "Safety Tips", href: "/guadalajara-safety-tips", description: "Transport safety." },
          { label: "3-Day Itinerary", href: "/3-day-guadalajara-itinerary", description: "Route with transport costs." },
        ]}
      />

      <GuideCTA />
    </>
  );
}
