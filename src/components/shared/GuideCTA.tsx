import Link from "next/link";

interface GuideCTAProps {
  href?: string;
  label?: string;
  description?: string;
}

export function GuideCTA({
  href = "/3-day-guadalajara-itinerary",
  label = "Read the 3-Day Itinerary",
  description = "Our most popular guide — the best of Guadalajara in 3 days, with a Tequila day trip.",
}: GuideCTAProps) {
  return (
    <section className="py-12 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="relative rounded-lg bg-obsidiana p-8 text-center overflow-hidden">
          {/* Decorative arch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg
              width="80"
              height="48"
              viewBox="0 0 80 48"
              fill="none"
              className="text-cantera/15"
            >
              <path
                d="M4 48 Q4 8 40 4 Q76 8 76 48"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>

          <p className="font-heading text-xl font-bold text-piedra mb-2">
            {label}
          </p>
          <p className="text-sm text-piedra/55 mb-5 max-w-md mx-auto">
            {description}
          </p>
          <Link
            href={href}
            className="inline-flex px-6 py-3 rounded-lg bg-cantera text-piedra font-body text-sm font-medium hover:bg-cantera-dark transition-colors"
          >
            Read the guide →
          </Link>
        </div>
      </div>
    </section>
  );
}
