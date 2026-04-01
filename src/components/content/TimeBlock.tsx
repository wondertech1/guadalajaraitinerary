import { Clock } from "lucide-react";
import type { ReactNode } from "react";

interface TimeBlockProps {
  time: string;
  title: string;
  children: ReactNode;
}

export function TimeBlock({ time, title, children }: TimeBlockProps) {
  return (
    <div className="relative pl-6 pb-8 border-l border-obsidiana/10">
      {/* Dot */}
      <div className="absolute left-0 top-0 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cantera/30 border-2 border-piedra" />

      {/* Time label */}
      <div className="flex items-center gap-1.5 mb-1">
        <Clock className="w-3 h-3 text-obsidiana/30" />
        <span className="font-mono text-[11px] text-cantera">{time}</span>
      </div>

      {/* Title */}
      <h4 className="font-heading text-base font-bold text-obsidiana mb-2">
        {title}
      </h4>

      {/* Content */}
      <div className="text-sm text-obsidiana/65 leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}
