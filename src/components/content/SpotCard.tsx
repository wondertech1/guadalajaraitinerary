import { MapPin, Clock, DollarSign } from "lucide-react";
import type { ReactNode } from "react";

interface SpotCardProps {
  name: string;
  type?: string;
  duration?: string;
  cost?: string;
  address?: string;
  verdict?: "must-see" | "worth-it" | "optional" | "skip";
  children: ReactNode;
}

const verdictStyles = {
  "must-see": { label: "Must See", color: "text-tequila bg-tequila/10 border-tequila/20" },
  "worth-it": { label: "Worth It", color: "text-agave bg-agave/10 border-agave/20" },
  optional: { label: "Optional", color: "text-obsidiana/50 bg-obsidiana/[0.04] border-obsidiana/10" },
  skip: { label: "Skip", color: "text-cantera bg-cantera/10 border-cantera/20" },
};

export function SpotCard({ name, type, duration, cost, address, verdict, children }: SpotCardProps) {
  const v = verdict ? verdictStyles[verdict] : null;

  return (
    <div className="rounded-[6px] border border-obsidiana/[0.06] bg-piedra p-4 my-4">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <h4 className="font-heading text-base font-bold text-obsidiana">{name}</h4>
        {v && (
          <span className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${v.color}`}>
            {v.label}
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
        {type && (
          <span className="inline-flex items-center gap-1 font-mono text-[11px] text-obsidiana/40">
            {type}
          </span>
        )}
        {address && (
          <span className="inline-flex items-center gap-1 font-mono text-[11px] text-obsidiana/40">
            <MapPin className="w-3 h-3" /> {address}
          </span>
        )}
        {duration && (
          <span className="inline-flex items-center gap-1 font-mono text-[11px] text-obsidiana/40">
            <Clock className="w-3 h-3" /> {duration}
          </span>
        )}
        {cost && (
          <span className="inline-flex items-center gap-1 font-mono text-[11px] text-obsidiana/40">
            <DollarSign className="w-3 h-3" /> {cost}
          </span>
        )}
      </div>

      <div className="text-sm text-obsidiana/65 leading-relaxed space-y-2">{children}</div>
    </div>
  );
}
