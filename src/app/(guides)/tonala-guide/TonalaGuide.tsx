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

export function TonalaGuide() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Tonalá", href: "/tonala-guide" },
        ]}
        article={{
          headline: "Tonalá Market Guide 2026",
          description: "Thursday/Sunday tianguis, glass workshops, and negotiation tips.",
          datePublished: "2026-03-09",
          dateModified: "2026-03-24",
          url: "https://guadalajaraitinerary.com/tonala-guide",
        }}
      />

      <GuideHero
        breadcrumbLabel="Tonalá"
        kicker="Artisan Market"
        kickerColor="cantera"
        title="Tonalá Market Guide"
        subtitle="Mexico's most important artisan tianguis — 4,000+ vendors, blown glass workshops, and prices 30–50% below Tlaquepaque. But only on Thursdays and Sundays."
        pills={["Thu & Sun only", "4,000+ vendors", "20 min from Centro", "Workshop visits"]}
        updatedDate="Mar 2026"
        readTime="10 min"
        image="https://images.unsplash.com/photo-1596392927852-2a18e07e3e9b?w=1600&q=80"
        imageAlt="Artisan pottery at Tonalá market"
      />

      <CanteraDivider className="my-0" />

      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              Tonalá&apos;s Thursday and Sunday <em>tianguis</em> (street market)
              is Mexico&apos;s largest open-air artisan market — over 4,000
              vendors spreading across blocks of streets. Where Tlaquepaque is
              curated galleries with fixed prices, Tonalá is raw commerce:
              artisan families selling directly from workshops, prices are
              negotiable, and the sheer volume of crafts is overwhelming.
            </p>
          </ScrollReveal>

          <TipCard type="tip">
            <strong>Thursday vs Sunday:</strong> Thursday is the &quot;real&quot;
            market — more artisan vendors, fewer tourists, more workshops open.
            Sunday is bigger overall but includes more random goods (clothes,
            electronics, household items) mixed with the crafts. If you can
            only do one day: Thursday.
          </TipCard>

          <TipCard type="tip">
            <strong>Getting there:</strong> Uber from Centro ~55 MXN (20 min).
            The drop-off point is the beginning of Av. Tonaltecas — the market
            stretches from there. Arrive by 8:30–9am for the best experience
            (less crowded, vendors are fresh, cooler weather).
          </TipCard>
        </div>
      </section>

      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              What to Buy — Price Guide
            </h2>
          </ScrollReveal>

          <ContentImage
            src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80"
            alt="Mexican pottery and ceramics for sale at Tonalá artisan market Guadalajara"
            caption="Thousands of ceramic pieces line the Tonalá tianguis streets"
            aspectRatio="landscape"
          />

          <SpotCard name="Blown Glass" type="Artisan craft" cost="100–1,500 MXN" verdict="must-see">
            <p>
              Tonalá&apos;s signature craft. Vases 300–800 MXN, drinking glasses
              (sets of 6) 200–500 MXN, ornaments 100–300 MXN. The workshop
              glass is consistently higher quality than random stall glass —
              look for workshops behind the stalls (ask &quot;¿Tienen
              taller?&quot;). Watch the glass-blowing process for free.
            </p>
            <p>
              <strong>Prices are 30–40% lower than Tlaquepaque</strong> for
              comparable quality. The trade-off is less curated selection — you
              have to hunt for the good stuff.
            </p>
          </SpotCard>

          <SpotCard name="Talavera & Painted Ceramics" type="Pottery" cost="50–2,000 MXN" verdict="must-see">
            <p>
              Plates 100–400 MXN, mugs 50–150 MXN, large platters 500–2,000
              MXN. Quality varies wildly — hold pieces to the light to check for
              even glaze thickness. The best ceramics come from family workshops
              along the side streets of the tianguis. Look for hand-painted
              (slightly imperfect) rather than screen-printed (perfectly uniform).
            </p>
          </SpotCard>

          <SpotCard name="Papier-Mâché Figures" type="Folk art" cost="100–3,000 MXN" verdict="worth-it">
            <p>
              Alebrijes (fantastical painted animals), skeletons, decorative
              figures. Small pieces 100–500 MXN, large showpieces 1,000–3,000
              MXN. Quality ranges from tourist-grade to museum-worthy. The more
              intricate the painting, the more valuable. These are lightweight
              and pack easily — excellent gifts.
            </p>
          </SpotCard>

          <ContentImage
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80"
            alt="Blown glass artisan crafting glassware in Tonalá workshop Guadalajara"
            caption="Family-run glass workshops open their doors on market days"
            aspectRatio="square"
          />

          <SpotCard name="Equipale Leather Furniture" type="Furniture" cost="1,500–6,000 MXN" verdict="optional">
            <p>
              Pigskin-and-wood furniture (chairs, tables, barrel seats) made in
              Tonalá workshops. Distinctive style, surprisingly comfortable. Only
              practical if you can ship or drive them home. Workshops on Av.
              Tonaltecas will arrange shipping to the US (costs vary, 2–4 weeks).
            </p>
          </SpotCard>

          <TipCard type="money">
            <strong>Negotiation strategy:</strong> Unlike Tlaquepaque&apos;s
            fixed-price galleries, Tonalá prices are negotiable. Start at
            60–70% of asking and meet around 75–80%. Buying 3+ items from one
            vendor gives you the most leverage. Cash gets better prices than
            card (most stalls are cash-only anyway). Be friendly — a smile and
            basic Spanish go further than aggressive haggling.
          </TipCard>
        </div>
      </section>

      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-4">
              The Workshop Experience
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-sm text-obsidiana/65 leading-relaxed mb-4">
              The real magic of Tonalá isn&apos;t the market stalls — it&apos;s
              the family workshops behind them. Several generational artisan
              families open their workshops to visitors, especially on market
              days. You can watch glass being blown, pottery being painted, and
              papier-mâché being sculpted in real time.
            </p>
          </ScrollReveal>

          <ContentImage
            src="https://images.unsplash.com/photo-1667675068275-d822c63b1217?w=800&q=80"
            alt="Indoor market stalls with handmade goods at Tonalá tianguis Guadalajara"
            caption="The tianguis stretches across blocks of Tonalá's streets"
            aspectRatio="wide"
          />

          <TipCard type="local">
            <strong>How to find workshops:</strong> Ask stall vendors &quot;¿Tienen
            taller?&quot; (Do you have a workshop?). Many will walk you behind
            the stall or give directions to their family&apos;s workshop nearby.
            The glass workshops along side streets off Av. Tonaltecas are the
            most impressive. Free to visit, no obligation to buy (but you will
            want to).
          </TipCard>

          <TipCard type="tip">
            <strong>Eating at the market:</strong> The tianguis has its own food
            section along the side streets. Tacos de guisado 15–25 MXN each,
            gorditas 20–35 MXN, aguas frescas 20 MXN. This is the most
            authentic, least-touristy market eating in the GDL metro. Point at
            whatever looks good.
          </TipCard>

          <TipCard type="money">
            <strong>Budget:</strong> Uber round trip ~110 MXN + market food 80
            MXN + purchases (variable, budget 500–2,000 MXN for meaningful
            shopping) = <strong>~690–2,190 MXN</strong>. Entry to the market
            is free.
          </TipCard>
        </div>
      </section>

      <CanteraDivider />

      <FAQSection
        faqs={[
          { question: "What days is Tonalá market open?", answer: "The big tianguis (street market) is Thursday and Sunday only. Permanent shops and some workshops are open daily but with a fraction of the selection. Thursday is the artisan-focused day; Sunday is bigger but more mixed." },
          { question: "Tonalá or Tlaquepaque — which is better?", answer: "Different purposes. Tonalá for lower prices, raw market energy, workshop visits, and bulk buying. Tlaquepaque for curated galleries, El Parián mariachi, and a more polished browsing experience. Serious craft buyers should do both." },
          { question: "How long should I spend?", answer: "2-3 hours covers the main market and 1-2 workshop visits. Serious shoppers can spend 4-5 hours. The market winds down after 2pm, so morning is best." },
          { question: "Is it safe?", answer: "Yes during market hours. Standard market precautions: phone in front pocket, cash in multiple pockets, watch for pickpockets in dense crowds. The market is well-attended by local police." },
          { question: "Can I get purchases shipped?", answer: "Larger workshops and furniture makers arrange shipping to the US and Canada (cost varies by size and weight, typically 2-4 weeks). For smaller items, pack them in your suitcase — vendors will bubble-wrap for you." },
        ]}
      />

      <RelatedContent
        items={[
          { label: "5-Day Itinerary", href: "/5-day-guadalajara-itinerary", description: "Tonalá is Day 5." },
          { label: "Tlaquepaque Guide", href: "/tlaquepaque-guide", description: "The curated alternative." },
          { label: "Food Guide", href: "/guadalajara-food-guide", description: "Market eating tips." },
          { label: "Budget Guide", href: "/guadalajara-budget-guide", description: "Shopping budget planning." },
          { label: "Getting Around", href: "/getting-around-guadalajara", description: "Transport to Tonalá." },
          { label: "7-Day Itinerary", href: "/7-day-guadalajara-itinerary", description: "Full week with Tonalá included." },
        ]}
      />

      <GuideCTA />
    </>
  );
}
