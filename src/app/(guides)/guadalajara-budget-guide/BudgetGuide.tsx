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

export function BudgetGuide() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Budget Guide", href: "/guadalajara-budget-guide" },
        ]}
        article={{
          headline: "Guadalajara Budget Guide 2026",
          description: "Daily costs at 3 tiers with money-saving tips.",
          datePublished: "2026-02-25",
          dateModified: "2026-03-10",
          url: "https://guadalajaraitinerary.com/guadalajara-budget-guide",
        }}
      />

      <GuideHero
        breadcrumbLabel="Budget Guide"
        kicker="Money"
        kickerColor="agave"
        title="Guadalajara Budget Guide"
        subtitle="Daily cost breakdowns at 3 tiers, money-saving tips, and the honest truth: GDL is absurdly cheap for how good it is."
        pills={["3 budget tiers", "Daily breakdowns", "MXN + USD", "Money tips"]}
        updatedDate="Mar 2026"
        readTime="9 min"
        image="/images/20-market-pesos-produce.jpg"
        imageAlt="Mexican pesos and market scene"
      />

      <CanteraDivider className="my-0" />

      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="rounded-lg border border-tequila/20 bg-tequila/5 p-5 my-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-tequila mb-2">Quick Answer</p>
            <p className="text-base text-obsidiana/75 leading-relaxed">
              Budget: 850–1,200 MXN/day ($50–70 USD). Mid-range: 1,800–2,500 MXN/day ($106–147 USD). Splurge: 4,000+ MXN/day ($235+ USD). Guadalajara is 30–40% cheaper than Mexico City for comparable quality.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Daily Budget */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              Daily Budget by Tier
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-lg border border-obsidiana/[0.06] overflow-hidden mb-6">
              <div className="bg-obsidiana px-4 py-3">
                <div className="grid grid-cols-4 gap-2 font-mono text-[10px] uppercase tracking-wider text-piedra/60">
                  <span>Category</span>
                  <span>Budget</span>
                  <span>Mid-Range</span>
                  <span>Splurge</span>
                </div>
              </div>
              {[
                { cat: "Accommodation", budget: "400", mid: "1,200", high: "3,000" },
                { cat: "Breakfast", budget: "95", mid: "130", high: "200" },
                { cat: "Lunch", budget: "80", mid: "180", high: "400" },
                { cat: "Dinner", budget: "150", mid: "300", high: "600" },
                { cat: "Drinks", budget: "60", mid: "150", high: "350" },
                { cat: "Transport", budget: "50", mid: "120", high: "250" },
                { cat: "Activities", budget: "50", mid: "150", high: "400" },
                { cat: "Snacks/Coffee", budget: "40", mid: "80", high: "120" },
              ].map((row) => (
                <div key={row.cat} className="grid grid-cols-4 gap-2 px-4 py-2.5 border-t border-obsidiana/[0.06] text-sm">
                  <span className="text-obsidiana/70">{row.cat}</span>
                  <span className="font-mono text-xs text-agave">{row.budget}</span>
                  <span className="font-mono text-xs text-tequila">{row.mid}</span>
                  <span className="font-mono text-xs text-cantera">{row.high}</span>
                </div>
              ))}
              <div className="grid grid-cols-4 gap-2 px-4 py-3 border-t-2 border-obsidiana/10 bg-piedra-dark/50 font-bold">
                <span className="text-obsidiana text-sm">Daily Total (MXN)</span>
                <span className="font-mono text-xs text-agave">~925</span>
                <span className="font-mono text-xs text-tequila">~2,310</span>
                <span className="font-mono text-xs text-cantera">~5,320</span>
              </div>
              <div className="grid grid-cols-4 gap-2 px-4 py-2 bg-piedra-dark/50 text-xs text-obsidiana/40">
                <span>Daily USD</span>
                <span className="font-mono">~$54</span>
                <span className="font-mono">~$136</span>
                <span className="font-mono">~$313</span>
              </div>
            </div>
          </ScrollReveal>

          <ContentImage
            src="/images/35-street-tacos-grill.jpg"
            alt="Street food vendor in Guadalajara serving affordable tacos and birria"
            caption="Street food in Guadalajara costs 20–95 MXN per dish — delicious and incredibly affordable."
            aspectRatio="landscape"
          />

          <TipCard type="money">
            <strong>Context:</strong> $54 USD/day on a budget includes a private
            hostel room, birria for breakfast, market lunch, street tacos for
            dinner, Uber everywhere, and a museum. That&apos;s not
            &quot;suffering&quot; — that&apos;s how locals live, and they live
            well.
          </TipCard>
        </div>
      </section>

      {/* What Things Cost */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              What Things Actually Cost
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-lg border border-obsidiana/[0.06] overflow-hidden">
              <div className="bg-obsidiana px-4 py-3">
                <div className="grid grid-cols-2 gap-4 font-mono text-[10px] uppercase tracking-wider text-piedra/60">
                  <span>Item</span>
                  <span>Price (MXN)</span>
                </div>
              </div>
              {[
                { item: "Street taco (al pastor)", price: "20–30" },
                { item: "Birria en caldo", price: "80–95" },
                { item: "Torta ahogada", price: "55–85" },
                { item: "Comida corrida (set lunch)", price: "75–120" },
                { item: "Nice restaurant main", price: "200–400" },
                { item: "Beer (bar)", price: "40–70" },
                { item: "Craft beer pint", price: "80–120" },
                { item: "Cocktail", price: "120–200" },
                { item: "Coffee (specialty)", price: "55–80" },
                { item: "Water bottle (1L)", price: "15–20" },
                { item: "Uber (in-city average)", price: "35–65" },
                { item: "Uber to airport", price: "120–160" },
                { item: "Hospicio Cabañas entry", price: "90" },
                { item: "Museum average", price: "40–90" },
                { item: "Tequila distillery tour", price: "200–600" },
                { item: "Mariachi song", price: "100–150" },
                { item: "SIM card (1 month data)", price: "200" },
                { item: "Laundry (per kg)", price: "15–25" },
              ].map((row) => (
                <div key={row.item} className="grid grid-cols-2 gap-4 px-4 py-2 border-t border-obsidiana/[0.06] text-sm">
                  <span className="text-obsidiana/60 text-xs">{row.item}</span>
                  <span className="font-mono text-xs text-obsidiana/70">{row.price}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Money Tips */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              Money Tips
            </h2>
          </ScrollReveal>

          <TipCard type="money">
            <strong>ATMs:</strong> We recommend withdrawing from Banorte, HSBC, or Scotiabank
            ATMs inside bank branches. Avoid standalone street ATMs (skimming
            risk) and convenience store ATMs (higher fees). Most charge 30–50
            MXN per withdrawal (we confirmed this in Q1 2026). Use a debit card with no foreign transaction
            fees (Charles Schwab, Wise, Revolut).
          </TipCard>

          <ContentImage
            src="/images/41-indoor-mercado.jpg"
            alt="Mexican market stalls in Guadalajara with cash-only vendors and fresh produce"
            caption="Markets and street stalls are cash-only — carry 500–800 MXN per day."
            aspectRatio="wide"
          />

          <TipCard type="money">
            <strong>Cash vs card:</strong> Street food, markets, and small shops
            are cash-only. Restaurants, bars, and most shops accept cards. Carry
            500–800 MXN cash per day and use card where possible. Don&apos;t carry
            large amounts of cash.
          </TipCard>

          <TipCard type="money">
            <strong>Exchange rate:</strong> ~17 MXN = 1 USD (we verified this rate in March 2026). ATMs
            give the best rate. Never exchange at the airport or hotel — they
            skim 5–15%. If you must exchange cash, use a casa de cambio downtown.
          </TipCard>

          <TipCard type="local">
            <strong>Tipping guide:</strong>
            <br />
            Restaurants: 10–15% (check bill for included &quot;servicio&quot;)
            <br />
            Street food stalls: Not expected, round up if generous
            <br />
            Uber/Didi: Not expected, round up in app if great service
            <br />
            Hotel housekeeping: 30–50 MXN/day
            <br />
            Tour guides: 50–100 MXN for a good tour
            <br />
            Bar tabs: 10% or round up
          </TipCard>

          <ContentImage
            src="/images/26-tlaquepaque-colorful-street.jpg"
            alt="Colorful Tlaquepaque artisan street in Guadalajara with free-to-browse galleries"
            caption="Tlaquepaque's galleries and pedestrian streets are free to explore."
            aspectRatio="landscape"
          />

          <TipCard type="tip">
            <strong>Free things in GDL:</strong> Cathedral, plazas, Palacio de
            Gobierno murals, Tlaquepaque galleries, glass workshops, walking
            tours, Mercado browsing, Av. Chapultepec evening stroll, street
            art in Analco. Hospicio Cabañas is free on Tuesdays. Museo Regional
            is free on Sundays. You can have a great day for almost nothing.
          </TipCard>
        </div>
      </section>

      {/* City Comparison */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-obsidiana mb-4">
              GDL vs Other Cities (Daily Mid-Range Budget)
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-lg border border-obsidiana/[0.06] overflow-hidden">
              <div className="bg-obsidiana px-4 py-3">
                <div className="grid grid-cols-3 gap-2 font-mono text-[10px] uppercase tracking-wider text-piedra/60">
                  <span>City</span>
                  <span>Daily (USD)</span>
                  <span>vs GDL</span>
                </div>
              </div>
              {[
                { city: "Guadalajara", cost: "$136", vs: "—", vClass: "text-agave" },
                { city: "Mexico City", cost: "$175", vs: "+29%", vClass: "text-tequila" },
                { city: "Oaxaca", cost: "$125", vs: "−8%", vClass: "text-agave" },
                { city: "Cancún", cost: "$250", vs: "+84%", vClass: "text-cantera" },
                { city: "Lisbon", cost: "$200", vs: "+47%", vClass: "text-cantera" },
                { city: "New York", cost: "$450", vs: "+231%", vClass: "text-cantera" },
              ].map((row) => (
                <div key={row.city} className="grid grid-cols-3 gap-2 px-4 py-2.5 border-t border-obsidiana/[0.06] text-sm">
                  <span className="text-obsidiana/70 font-medium">{row.city}</span>
                  <span className="font-mono text-xs text-obsidiana/60">{row.cost}</span>
                  <span className={`font-mono text-xs ${row.vClass}`}>{row.vs}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ContentImage
            src="/images/12-guadalajara-cityscape.jpg"
            alt="Guadalajara skyline showing an affordable city with colonial and modern architecture"
            caption="Guadalajara delivers world-class culture at a fraction of typical travel destination costs."
            aspectRatio="wide"
          />

          <TipCard type="money">
            <strong>The bottom line:</strong> Guadalajara offers Mexico City-level
            culture and food at 30% less cost. We cross-referenced costs across
            all these cities in early 2026. It&apos;s 84% cheaper than Cancún
            with 10x more authentic Mexican culture. For value-per-experience,
            GDL is one of the best cities in the Americas.
          </TipCard>
        </div>
      </section>

      <CanteraDivider />

      <FAQSection
        faqs={[
          { question: "How much does a trip to Guadalajara cost?", answer: "Budget: ~925 MXN ($54 USD) per day. Mid-range: ~2,310 MXN ($136 USD) per day. Splurge: ~5,320 MXN ($313 USD) per day. A 3-day mid-range trip runs about $400–570 USD total including accommodation." },
          { question: "Is Guadalajara cheap?", answer: "Very cheap by North American and European standards. A full sit-down dinner with drinks costs $20-30 USD. A full day of street food costs $10-15 USD. Uber rides average $2-4 USD. It's one of Mexico's best-value major cities." },
          { question: "Can I use US dollars in Guadalajara?", answer: "No. This isn't a tourist resort — everything is in pesos. ATMs give the best exchange rate. Bring a debit card with no foreign transaction fees." },
          { question: "How much should I tip?", answer: "Restaurants: 10-15%. Street food: not expected. Uber: not expected. Hotels: 30-50 MXN/day housekeeping. Tour guides: 50-100 MXN." },
          { question: "Is it cheaper than Mexico City?", answer: "Yes, about 20-30% cheaper across the board. Accommodation and food are particularly cheaper. Transport costs are similar (both cities have cheap Uber). Activities/museums are roughly the same." },
        ]}
      />

      <RelatedContent
        items={[
          { label: "3-Day Itinerary", href: "/3-day-guadalajara-itinerary", description: "Budget breakdown per day." },
          { label: "Food Guide", href: "/guadalajara-food-guide", description: "All prices listed." },
          { label: "Where to Stay", href: "/where-to-stay-guadalajara", description: "Accommodation costs by area." },
          { label: "Getting Around", href: "/getting-around-guadalajara", description: "Transport costs." },
          { label: "Tequila Day Trip", href: "/tequila-day-trip", description: "Day trip budget planning." },
          { label: "Best Time to Visit", href: "/best-time-to-visit-guadalajara", description: "Seasonal price changes." },
        ]}
      />

      <GuideCTA />
    </>
  );
}
