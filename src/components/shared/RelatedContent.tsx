import Link from "next/link";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

interface RelatedItem {
  label: string;
  href: string;
  description?: string;
}

interface RelatedContentProps {
  items: RelatedItem[];
}

const accentColors = ["bg-cantera", "bg-agave", "bg-tequila", "bg-mariachi"];

export function RelatedContent({ items }: RelatedContentProps) {
  return (
    <section className="py-12 px-4 sm:px-6 bg-piedra-dark/50">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cantera mb-4">
            Keep Reading
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((item, i) => (
            <ScrollReveal key={item.href} delay={i * 0.06}>
              <Link href={item.href} className="group block">
                <div className="rounded-lg border border-obsidiana/[0.06] bg-piedra p-4 hover:-translate-y-0.5 transition-all duration-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        accentColors[i % accentColors.length]
                      }`}
                    />
                    <span className="font-heading text-sm font-bold text-obsidiana group-hover:text-cantera transition-colors">
                      {item.label}
                    </span>
                  </div>
                  {item.description && (
                    <p className="text-xs text-obsidiana/50 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
