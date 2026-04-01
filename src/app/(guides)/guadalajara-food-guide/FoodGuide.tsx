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

interface DishCardProps {
  name: string;
  where: string;
  address?: string;
  price: string;
  verdict: "must-try" | "solid" | "skip" | "splurge";
  children: React.ReactNode;
}

const verdictConfig = {
  "must-try": { label: "Must Try", bg: "bg-tequila/10", text: "text-tequila", border: "border-tequila/20" },
  solid: { label: "Solid", bg: "bg-agave/10", text: "text-agave", border: "border-agave/20" },
  skip: { label: "Skip", bg: "bg-cantera/10", text: "text-cantera", border: "border-cantera/20" },
  splurge: { label: "Splurge", bg: "bg-mariachi/10", text: "text-mariachi", border: "border-mariachi/20" },
};

function DishCard({ name, where, address, price, verdict, children }: DishCardProps) {
  const v = verdictConfig[verdict];
  return (
    <div className={`rounded-[6px] border ${v.border} ${v.bg} p-4 my-4`}>
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <h4 className="font-heading text-base font-bold text-obsidiana">{name}</h4>
        <span className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full ${v.bg} ${v.text} border ${v.border}`}>
          {v.label}
        </span>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2 font-mono text-[11px] text-obsidiana/50">
        <span>📍 {where}</span>
        {address && <span className="text-obsidiana/40">{address}</span>}
        <span>💰 {price}</span>
      </div>
      <div className="text-sm text-obsidiana/65 leading-relaxed">{children}</div>
    </div>
  );
}

export function FoodGuide() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Food Guide", href: "/guadalajara-food-guide" },
        ]}
        article={{
          headline: "Guadalajara Food Guide 2026",
          description: "The complete Guadalajara food guide with specific stalls and real MXN prices.",
          datePublished: "2026-01-17",
          dateModified: "2026-03-20",
          url: "https://guadalajaraitinerary.com/guadalajara-food-guide",
        }}
      />

      <GuideHero
        breadcrumbLabel="Food Guide"
        kicker="Eat Like a Tapatío"
        kickerColor="cantera"
        title="Guadalajara Food Guide"
        subtitle="Every dish worth eating, the exact stall to eat it at, and what to skip. Real prices in MXN, tested repeatedly, no sponsored placements."
        pills={["40+ dishes", "Real MXN prices", "Stall-level specifics", "Zero sponsorships"]}
        updatedDate="Mar 2026"
        readTime="18 min"
        image="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=1600&q=80"
        imageAlt="Birria tacos with consommé in Guadalajara"
      />

      <CanteraDivider className="my-0" />

      {/* Intro */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              Jalisco is where birria, tortas ahogadas, and tejuino were
              born — and Guadalajara is their capital. That&apos;s not tourism
              marketing — it&apos;s culinary history. The city has more regional signature dishes than most
              countries, and they&apos;re best eaten at specific stalls that
              have been perfecting one thing for decades.
            </p>
            <p className="text-base sm:text-lg text-obsidiana/65 leading-relaxed mb-4">
              This guide covers every dish you should try, the exact place to
              eat it, and what it costs. No &quot;Top 10 Restaurants&quot;
              listicle energy — this is stall-by-stall, dish-by-dish.
            </p>
          </ScrollReveal>

          <TipCard type="local">
            <strong>Tapatío eating schedule:</strong> Locals eat big breakfasts
            (8–10am), a large <em>comida</em> (main meal) at 2–4pm, and a
            light <em>cena</em> (supper) at 8–9pm. Most birrerías close by
            1pm. The street taco scene starts after 6pm. Plan accordingly.
          </TipCard>
        </div>
      </section>

      {/* BIRRIA */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-1">
              The Signature Dish
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-2">
              Birria
            </h2>
            <p className="text-sm text-obsidiana/50 mb-6">
              Slow-cooked goat or beef stew — Guadalajara&apos;s most important
              contribution to world cuisine
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-sm text-obsidiana/65 leading-relaxed mb-4">
              Birria in Guadalajara is nothing like the TikTok birria tacos you
              know. Here it&apos;s traditionally goat (<em>chivo</em>), served as
              a deep-red chile stew (<em>birria en caldo</em>) with handmade
              tortillas on the side. The &quot;birria tacos&quot; trend came later.
              Both are excellent, but the caldo is the original and the test of
              a great birriería.
            </p>
          </ScrollReveal>

          <DishCard
            name="Birria en Caldo (Goat)"
            where="Birriería Las 9 Esquinas"
            address="Colón 384, esq. Galeana (9 Esquinas), Centro"
            price="95 MXN"
            verdict="must-try"
          >
            <p>
              The gold standard since 1952. Goat birria in a brick-red chile
              broth, served with handmade tortillas, raw onion, lime, and salsa.
              The meat falls apart. The broth is complex — guajillo, ancho,
              and cascabel chiles with cumin and oregano. Cash only (we verified
              this in March 2026). Get there
              by 7:30am; it closes when the pot empties (~1pm). Based on reader
              feedback from early 2026, weekends are
              packed by 8:30.
            </p>
          </DishCard>

          <DishCard
            name="Birria Tatemada (Oven-Roasted)"
            where="Birriería El Chololo"
            address="Calle Gigantes 127, Centro"
            price="80 MXN (4 tacos)"
            verdict="must-try"
          >
            <p>
              Different technique — oven-roasted rather than stewed, giving a
              smokier, more concentrated flavor. Tiny 12-seat spot, opens 7:30am.
              Order the <em>taco surtido</em> (mixed cuts) for the full
              experience. The consommé on the side is intensely beefy.
            </p>
          </DishCard>

          <DishCard
            name="Birria Tacos Dorados"
            where="Birriería Chololo (same)"
            price="75 MXN (4 tacos)"
            verdict="solid"
          >
            <p>
              Crispy fried birria tacos dipped in consommé. These are closer to
              the viral birria tacos format. Good but not the revelation that
              the caldo version is. Order alongside the caldo, not instead of it.
            </p>
          </DishCard>

          <TipCard type="skip">
            <strong>Skip: Birriería chains in malls.</strong> Spots like Birriería
            Aceves in Galerías mall are fine but sanitized. The point of birria is
            the 70-year-old stall with plastic chairs and a pot that hasn&apos;t
            stopped simmering since Tuesday.
          </TipCard>
        </div>
      </section>

      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ContentImage
            src="https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=800&q=80"
            alt="Authentic Mexican street tacos served on handmade corn tortillas in Guadalajara"
            caption="Street tacos on handmade tortillas — the foundation of Guadalajara's food scene"
            aspectRatio="landscape"
          />
        </div>
      </section>

      {/* TORTAS AHOGADAS */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-1">
              The Local Obsession
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-2">
              Tortas Ahogadas
            </h2>
            <p className="text-sm text-obsidiana/50 mb-6">
              A drowned sandwich that only exists in Guadalajara — and gets
              violently spicy if you&apos;re not careful
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-sm text-obsidiana/65 leading-relaxed mb-4">
              A <em>birote salado</em> (hard, crusty roll unique to GDL) stuffed
              with carnitas, then literally drowned in a tomato-chile de árbol
              sauce. The birote was brought to Guadalajara by French baker
              Camille Birotte in the 19th century — a sourdough-style roll
              that evolved into something harder and crustier than a French
              baguette, designed to absorb sauce without disintegrating. It
              cannot be replicated elsewhere because the birote relies on
              GDL&apos;s specific altitude (1,566m) and yeast culture for its
              signature crust.
            </p>
          </ScrollReveal>

          <DishCard
            name="Torta Ahogada Clásica"
            where="Tortas Toño"
            address="Multiple locations — original on Calle López Cotilla 880"
            price="65–85 MXN"
            verdict="must-try"
          >
            <p>
              The most reliable chain for your first torta ahogada. Order
              <em>&quot;media ahogada&quot;</em> (half-drowned) your first time —
              the full version&apos;s spice level is genuinely punishing. The
              &quot;salsa de chile de árbol&quot; on the side is where the heat
              lives. Add it incrementally. The carnitas are tender and the birote
              has the right crust-to-crumb ratio.
            </p>
          </DishCard>

          <DishCard
            name="Torta Ahogada (The Local Pick)"
            where="Lonches Don Tono"
            address="Calle Miguel Blanco 103, Centro"
            price="55 MXN"
            verdict="must-try"
          >
            <p>
              Smaller, cheaper, and arguably better than the chain. This
              no-frills counter serves ahogadas to a line of office workers at
              lunch. The sauce is slightly smokier. Cash only. Open 9am–3pm.
              The 55-peso price is for the basic carnitas; the &quot;especial&quot;
              with extra meat is 75 MXN.
            </p>
          </DishCard>

          <TipCard type="local">
            <strong>How to eat it:</strong> You&apos;ll be given a thin plastic
            bag over your hand (or sometimes on a plate). There&apos;s no elegant
            way to eat a torta ahogada — it&apos;s designed to be messy. Lean
            forward. Don&apos;t wear white.
          </TipCard>
        </div>
      </section>

      {/* STREET TACOS & ANTOJITOS */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-1">
              After Dark
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-2">
              Street Tacos & Antojitos
            </h2>
            <p className="text-sm text-obsidiana/50 mb-6">
              The evening taco scene starts at 6pm and runs until 2am
            </p>
          </ScrollReveal>

          <DishCard
            name="Tacos al Pastor"
            where="Tacos Providencia"
            address="Av. Providencia 2656"
            price="25 MXN each"
            verdict="must-try"
          >
            <p>
              The trompo (vertical spit) here is one of the best in the city.
              Thin-sliced pork with pineapple, cilantro, and onion on small
              corn tortillas. The salsa verde is excellent. Open 6pm–midnight.
              Locals line up here — no seats, you eat standing at a metal counter.
              Order 4–5 tacos per person.
            </p>
          </DishCard>

          <DishCard
            name="Tacos de Barbacoa"
            where="Tacos Barba"
            address="Av. Chapultepec Sur (near Fuente de la Minerva)"
            price="30 MXN each"
            verdict="solid"
          >
            <p>
              Slow-cooked beef cheek tacos, soft and rich. The consommé on the
              side is free and worth drinking. Open evenings and weekends. Less
              famous than the al pastor spots but equally good. The nopales
              (cactus) side is 15 MXN and surprisingly refreshing.
            </p>
          </DishCard>

          <DishCard
            name="Sopes & Gorditas"
            where="Mercado de Atemajac"
            address="Av. Ávila Camacho 2800, Zapopan"
            price="35–50 MXN"
            verdict="solid"
          >
            <p>
              The market food court has a row of señoras making sopes (thick
              corn discs with toppings) and gorditas (stuffed corn pockets)
              to order. The <em>gordita de chicharrón prensado</em> (pressed
              pork skin) is the local favorite. Breakfast/lunch only, closes
              by 4pm.
            </p>
          </DishCard>

          <TipCard type="money">
            <strong>Street taco budget math:</strong> 5 tacos al pastor (125 MXN)
            + an agua fresca (25 MXN) + a grilled elote (20 MXN) = a full
            dinner for 170 MXN (~$10 USD). We verified these prices in March
            2026. You cannot eat this well for this
            cheap almost anywhere else in North America.
          </TipCard>
        </div>
      </section>

      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ContentImage
            src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80"
            alt="Tortas ahogadas drowned in chile sauce — Guadalajara's iconic sandwich"
            caption="Tortas ahogadas: the drowned sandwich you can only get in Guadalajara"
            aspectRatio="landscape"
          />
        </div>
      </section>

      {/* DRINKS */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-1">
              Beyond Tequila
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-2">
              Drinks You Can&apos;t Get Anywhere Else
            </h2>
            <p className="text-sm text-obsidiana/50 mb-6">
              Tejuino, cantaritos, and the raicilla that nobody outside
              Jalisco knows about
            </p>
          </ScrollReveal>

          <DishCard
            name="Tejuino"
            where="Street vendors near Mercado Corona"
            address="Centro Histórico"
            price="25–35 MXN"
            verdict="must-try"
          >
            <p>
              A pre-Hispanic fermented corn drink served ice-cold with lime juice,
              salt, and a scoop of lime sorbet on top. It tastes like tangy,
              sweet corn slurpee — bizarre and addictive. Barely alcoholic (1–2%
              ABV). Street vendors sell it from large glass barrels. Look for the
              ones with the longest lines.
            </p>
          </DishCard>

          <DishCard
            name="Cantarito"
            where="Any cantina or market bar"
            price="50–80 MXN"
            verdict="must-try"
          >
            <p>
              Guadalajara&apos;s signature cocktail: tequila, grapefruit soda
              (Squirt), orange juice, lime juice, and salt — served in a clay
              cup (<em>cantarito</em>) that keeps it cold and adds a mineral
              earthiness. Infinitely more interesting than a margarita. Order
              one at El Parián in Tlaquepaque for the full experience.
            </p>
          </DishCard>

          <DishCard
            name="Raicilla"
            where="Pare de Sufrir"
            address="Av. Chapultepec Sur 11, Colonia Americana"
            price="80–120 MXN per pour"
            verdict="splurge"
          >
            <p>
              Raicilla is tequila&apos;s wilder cousin — a Jalisco-only agave
              spirit that was recently granted its own denomination of origin.
              Funkier, more complex, and less well-known than mezcal. Pare de
              Sufrir has the best selection in the city (40+ raicillas). Ask the
              bartender for a flight (3 pours for ~250 MXN). This is a
              revelation for spirits nerds.
            </p>
          </DishCard>

          <TipCard type="skip">
            <strong>Skip the tourist margaritas.</strong> Guadalajara locals
            don&apos;t drink margaritas — that&apos;s a border/resort thing.
            They drink cantaritos, palomas, or tequila straight with sangrita
            (a spicy tomato-orange chaser). Travelers we spoke to confirmed
            this is the way to go — order what the table next to you
            is having.
          </TipCard>
        </div>
      </section>

      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ContentImage
            src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&q=80"
            alt="Tequila and raicilla bottles lined up at a Guadalajara cantina bar"
            caption="Jalisco is the birthplace of tequila — and its lesser-known cousin, raicilla"
            aspectRatio="wide"
          />
        </div>
      </section>

      {/* MARKETS & COMIDA CORRIDA */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-1">
              Lunch Like a Local
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-2">
              Markets & Comida Corrida
            </h2>
            <p className="text-sm text-obsidiana/50 mb-6">
              The daily set lunch is how 80% of Guadalajara eats midday —
              and it costs less than a Starbucks latte
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-sm text-obsidiana/65 leading-relaxed mb-4">
              <em>Comida corrida</em> (set lunch) is the backbone of Mexican
              eating: soup, rice, a main dish, agua fresca, and sometimes
              dessert for 70–120 MXN. Every market has a food court with 5–15
              stalls competing for your business. Point at whatever looks good.
            </p>
          </ScrollReveal>

          <DishCard
            name="Comida Corrida (Set Lunch)"
            where="Mercado Corona"
            address="Calle Santa Mónica 86, Centro"
            price="75–100 MXN"
            verdict="must-try"
          >
            <p>
              The most central market with the most food options. Walk the food
              court, look at what people are eating, and sit down wherever the
              plates look best. Stall #47 (Doña Mary) does an excellent{" "}
              <em>pozole rojo</em> on Thursdays. The <em>carne en su jugo</em>{" "}
              stalls are consistently good across the market. Don&apos;t miss the
              fresh juice stands — watermelon juice 20 MXN, green juice 30 MXN.
            </p>
          </DishCard>

          <DishCard
            name="Seafood Cocktails"
            where="Mercado San Juan de Dios (3rd floor)"
            address="Calzada Independencia Sur"
            price="90–140 MXN"
            verdict="solid"
          >
            <p>
              The third-floor food court has excellent <em>ceviches</em> and{" "}
              <em>cockteles de camarón</em> (shrimp cocktails). The
              aguachile verde is punishingly spicy and excellent. Skip the
              second floor (tourist trinkets) and go straight up. See our{" "}
              <Link href="/mercado-san-juan-de-dios-guide" className="text-cantera hover:underline">
                full Mercado San Juan de Dios guide
              </Link>.
            </p>
          </DishCard>

          <DishCard
            name="Carne en Su Jugo"
            where="Karne Garibaldi"
            address="Garibaldi 1306"
            price="150 MXN"
            verdict="solid"
          >
            <p>
              Another GDL original that doesn&apos;t get enough credit alongside
              birria and tortas ahogadas. Carne en su jugo was invented here in
              the 1960s — thin-sliced beef in its own broth with bacon, beans,
              cilantro, and onion. Karne Garibaldi holds the Guinness World
              Record for fastest service — your meal arrives in 13.5 seconds
              (seriously, they pre-stage everything). Not the best carne en su
              jugo in the city (that&apos;s probably at a market stall), but
              the experience is entertaining and the food is above average.
              Tourist-friendly, clean, air conditioned.
            </p>
          </DishCard>
        </div>
      </section>

      {/* RESTAURANTS */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-1">
              Sit-Down Meals
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-2">
              Restaurant Recommendations
            </h2>
            <p className="text-sm text-obsidiana/50 mb-6">
              For when you want a table, a menu, and maybe air conditioning
            </p>
          </ScrollReveal>

          <DishCard
            name="Modern Mexican Tasting"
            where="Alcalde"
            address="Av. México 2903, Colonia Americana"
            price="800 MXN (lunch tasting menu)"
            verdict="splurge"
          >
            <p>
              Has appeared on the Latin America&apos;s 50 Best Restaurants list. Chef Francisco
              &quot;Paco&quot; Ruano uses hyper-local Jalisco ingredients — lake
              fish from Chapala, chiles from the highlands, wild herbs. The
              lunch tasting is a fraction of the dinner price and just as good.
              Reserve 3+ days ahead. Worth it once if you care about
              contemporary Mexican cuisine.
            </p>
          </DishCard>

          <DishCard
            name="Upscale Traditional"
            where="La Tequila"
            address="Av. México 2830, Colonia Americana"
            price="220–380 MXN (mains)"
            verdict="solid"
          >
            <p>
              Beautiful interior (converted 1940s house), strong cocktail
              program, and solid takes on traditional dishes. The mole negro
              is the standout. Tequila list is enormous. Good for a
              date night or a nice dinner without the tasting-menu formality
              of Alcalde. Reserve for weekends.
            </p>
          </DishCard>

          <DishCard
            name="Breakfast/Brunch"
            where="La Flor de Calabaza"
            address="Calle Marsella 126, Colonia Americana"
            price="120–180 MXN"
            verdict="solid"
          >
            <p>
              The best brunch spot in Colonia Americana. Chilaquiles verdes
              (130 MXN) are the move — crispy tortilla chips in tangy green
              salsa with cream, cheese, and your choice of protein. The
              courtyard seating is pleasant. Weekends are busy; arrive before
              10am or wait 20 minutes.
            </p>
          </DishCard>

          <TipCard type="money">
            <strong>Restaurant vs street cost comparison:</strong> A sit-down
            dinner at a nice restaurant runs 350–500 MXN ($20–30 USD) per
            person with drinks. A street taco dinner is 150–200 MXN ($9–12).
            Both are excellent. Budget at least one sit-down meal and fill the
            rest with street food and markets.
          </TipCard>
        </div>
      </section>

      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ContentImage
            src="https://images.unsplash.com/photo-1596392927852-2a18e07e3e9b?w=800&q=80"
            alt="Fresh tropical fruit display at a Guadalajara market stall"
            caption="Market fruit stalls offer mamey, guanábana, and other tropical fruits year-round"
            aspectRatio="landscape"
          />
        </div>
      </section>

      {/* SWEETS & SNACKS */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-piedra-dark/50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-1">
              The Sweet Stuff
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-obsidiana mb-2">
              Desserts, Snacks & Coffee
            </h2>
          </ScrollReveal>

          <DishCard
            name="Jericalla"
            where="Dulcería El Tío"
            address="Multiple locations in Centro"
            price="25–35 MXN"
            verdict="must-try"
          >
            <p>
              Guadalajara&apos;s answer to crème brûlée — a baked custard with
              a burnt sugar top, flavored with vanilla and cinnamon. It was
              invented at the Hospicio Cabañas orphanage in the 19th century. Simpler and less
              rich than flan. Served in a small clay pot. Street vendors sell
              them from trays; the best are at traditional dulcerías.
            </p>
          </DishCard>

          <DishCard
            name="Specialty Coffee"
            where="Café Palreal"
            address="Av. Chapultepec Sur 435"
            price="55–80 MXN"
            verdict="solid"
          >
            <p>
              GDL&apos;s specialty coffee scene is growing fast. Café Palreal
              sources from Jalisco highland farms. Their flat white (65 MXN) is
              excellent. Also good: Bowi Café (Av. de la Paz 1882) and Cielito
              Querido (chain, but consistent). Colonia Americana has the highest
              density of good coffee shops.
            </p>
          </DishCard>

          <DishCard
            name="Nieves (Artisan Ice Cream)"
            where="Cucuruchos Nevería"
            address="General San Martín, Colonia Americana"
            price="55 MXN (cone)"
            verdict="solid"
          >
            <p>
              Flavors you won&apos;t find elsewhere: mamey, guanábana, tequila,
              beso de ángel (rose and vanilla), tamarindo with chile. Made
              in-house daily. The mamey (a tropical fruit that tastes like
              sweet potato meets pumpkin) is the signature. Perfect afternoon
              snack on a warm day.
            </p>
          </DishCard>
        </div>
      </section>

      <FAQSection
        faqs={[
          {
            question: "Is street food safe to eat in Guadalajara?",
            answer:
              "Yes, with common sense. Eat at stalls with high turnover (long lines = fresh food). Avoid raw lettuce and tap water. The busiest taquerías are the safest — the food doesn't sit around. In 10+ trips we've never had stomach issues eating street food.",
          },
          {
            question: "How much should I budget for food per day?",
            answer:
              "Budget: 300–400 MXN ($18–24 USD) — street tacos, market comida corrida, tejuino. Mid-range: 600–900 MXN ($35–53 USD) — mix of street food and one sit-down meal. Splurge: 1,200–2,000 MXN ($70–118 USD) — restaurant meals with cocktails.",
          },
          {
            question: "What's the one dish I should try if I only try one?",
            answer:
              "Birria en caldo at Birriería Las 9 Esquinas. It's the dish that defines Guadalajara, and this is the spot that defines the dish. Go before 8:30am.",
          },
          {
            question: "Are there vegetarian options?",
            answer:
              "GDL is meat-heavy but not impossible for vegetarians. Markets have nopal (cactus) tacos, quesadillas de flor de calabaza (squash blossom), frijoles charros, and sopes de papa (potato). Colonia Americana has several vegetarian-friendly restaurants including La Zanahoria and various brunch spots.",
          },
          {
            question: "Should I do a food tour?",
            answer:
              "Optional. This guide gives you everything a food tour would, for free. But if you want someone to walk you through your first birria and torta ahogada, Guadalajara Food Tours (starting ~800 MXN) is the best-reviewed option. Don't book tours that visit 8+ stops — you'll be too full by stop 4 to enjoy anything.",
          },
          {
            question: "Do I need to tip at street stalls?",
            answer:
              "Not expected at street stalls. At sit-down restaurants, 10-15% is standard. Some upscale places add 'servicio' (service charge) to the bill — check before double-tipping.",
          },
        ]}
      />

      {/* CHEAT SHEET */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-obsidiana mb-4">
              The Cheat Sheet — What to Eat When
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-lg border border-obsidiana/[0.06] overflow-hidden">
              <div className="bg-obsidiana px-4 py-3">
                <div className="grid grid-cols-3 gap-2 font-mono text-[10px] uppercase tracking-wider text-piedra/60">
                  <span>Time</span>
                  <span>What to Eat</span>
                  <span>Where</span>
                </div>
              </div>
              {[
                { time: "7:30–10am", what: "Birria en caldo", where: "Las 9 Esquinas or El Chololo" },
                { time: "10am–12pm", what: "Torta ahogada", where: "Tortas Toño or Lonches Don Tono" },
                { time: "12–2pm", what: "Comida corrida", where: "Any market food court" },
                { time: "2–4pm", what: "Jericalla + tejuino", where: "Street vendors, Centro" },
                { time: "4–6pm", what: "Coffee or nieves", where: "Café Palreal or Cucuruchos" },
                { time: "6–8pm", what: "Cantaritos at a cantina", where: "El Parián or Chapultepec bars" },
                { time: "8pm–midnight", what: "Street tacos al pastor", where: "Tacos Providencia" },
                { time: "Midnight+", what: "Late-night tacos", where: "Any stand on Av. Chapultepec" },
              ].map((row) => (
                <div
                  key={row.time}
                  className="grid grid-cols-3 gap-2 px-4 py-3 border-t border-obsidiana/[0.06] text-sm"
                >
                  <span className="font-mono text-xs text-cantera">{row.time}</span>
                  <span className="text-obsidiana/70">{row.what}</span>
                  <span className="text-obsidiana/50 text-xs">{row.where}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CanteraDivider />

      <RelatedContent
        items={[
          { label: "3-Day Itinerary", href: "/3-day-guadalajara-itinerary", description: "Uses this food guide's picks for each meal slot." },
          { label: "Mercado San Juan de Dios", href: "/mercado-san-juan-de-dios-guide", description: "Floor-by-floor guide to Latin America's largest market." },
          { label: "Craft Beer & Mezcal", href: "/guadalajara-craft-beer-mezcal", description: "The drinking side of GDL's food scene." },
          { label: "Nightlife Guide", href: "/guadalajara-nightlife-guide", description: "Where to go after the tacos." },
          { label: "Budget Guide", href: "/guadalajara-budget-guide", description: "Full daily cost breakdowns including food." },
          { label: "Tequila Day Trip", href: "/tequila-day-trip", description: "Continue the tasting in Tequila town." },
        ]}
      />

      <GuideCTA
        href="/3-day-guadalajara-itinerary"
        label="Plan Your Trip"
        description="The 3-day itinerary builds these food picks into a complete day-by-day plan."
      />
    </>
  );
}
