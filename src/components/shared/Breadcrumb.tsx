import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface BreadcrumbProps {
  items: { label: string; href: string }[];
  light?: boolean;
}

export function Breadcrumb({ items, light = false }: BreadcrumbProps) {
  const textClass = light ? "text-piedra/60" : "text-obsidiana/50";
  const activeClass = light ? "text-piedra/80" : "text-obsidiana/70";

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs">
      {items.map((item, i) => (
        <span key={item.href} className="flex items-center gap-1.5">
          {i === 0 && <ChevronLeft className={`w-3 h-3 ${textClass}`} />}
          {i > 0 && <span className={textClass}>/</span>}
          {i < items.length - 1 ? (
            <Link href={item.href} className={`${textClass} hover:${activeClass} transition-colors`}>
              {item.label}
            </Link>
          ) : (
            <span className={activeClass}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
