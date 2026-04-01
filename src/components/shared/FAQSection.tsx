"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="font-heading text-2xl font-bold text-obsidiana mb-6">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        <div className="divide-y divide-obsidiana/8">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.04}>
              <div>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between py-4 text-left"
                >
                  <span className="font-heading text-sm font-bold text-obsidiana pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-cantera shrink-0 transition-transform duration-200 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-96 pb-4" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-obsidiana/60 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
