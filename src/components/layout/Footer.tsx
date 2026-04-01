import Link from "next/link";
import { guideLinks } from "@/lib/constants/guides";

const colorSwatches = [
  { name: "Cantera", color: "bg-cantera" },
  { name: "Agave", color: "bg-agave" },
  { name: "Mariachi", color: "bg-mariachi" },
  { name: "Tequila", color: "bg-tequila" },
];

export function Footer() {
  return (
    <footer className="bg-obsidiana text-piedra/70">
      {/* Cantera arch divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-cantera/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-none mb-4">
              <span className="font-heading text-xl font-bold text-piedra">
                GUADALAJARA
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cantera">
                itinerary
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Opinionated travel guides with real prices, tested routes, and
              stop-by-stop itineraries. No fluff, no filler.
            </p>
            <div className="flex gap-2">
              {colorSwatches.map((s) => (
                <div
                  key={s.name}
                  className={`w-5 h-5 rounded-full ${s.color}`}
                  title={s.name}
                />
              ))}
            </div>
          </div>

          {/* Guides */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-cantera mb-4">
              Top Guides
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {guideLinks.slice(0, 12).map((g) => (
                <Link
                  key={g.href}
                  href={g.href}
                  className="text-sm text-piedra/60 hover:text-cantera transition-colors"
                >
                  {g.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Site */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-cantera mb-4">
              Site
            </p>
            <div className="space-y-1.5">
              <Link href="/" className="block text-sm text-piedra/60 hover:text-cantera transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-sm text-piedra/60 hover:text-cantera transition-colors">
                About Our Team
              </Link>
              <a href="mailto:hello@guadalajaraitinerary.com" className="block text-sm text-piedra/60 hover:text-cantera transition-colors">
                Contact Us
              </a>
              <a href="https://itine.ai" target="_blank" rel="noopener noreferrer" className="block text-sm text-piedra/60 hover:text-cantera transition-colors">
                itine.ai ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-piedra/10 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-piedra/40">
            © {new Date().getFullYear()} Guadalajara Itinerary. All rights reserved.
          </p>
          <p className="text-xs text-piedra/40">
            Made with 🥃 in Guadalajara
          </p>
        </div>
      </div>
    </footer>
  );
}
