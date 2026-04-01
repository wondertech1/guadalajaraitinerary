import { MapPin, AlertTriangle, DollarSign, Lightbulb } from "lucide-react";
import type { ReactNode } from "react";

interface TipCardProps {
  type: "tip" | "skip" | "money" | "local";
  children: ReactNode;
}

const config = {
  tip: {
    icon: MapPin,
    borderColor: "border-agave/20",
    bgColor: "bg-agave/[0.04]",
    iconColor: "text-agave",
  },
  skip: {
    icon: AlertTriangle,
    borderColor: "border-cantera/20",
    bgColor: "bg-cantera/[0.04]",
    iconColor: "text-cantera",
  },
  money: {
    icon: DollarSign,
    borderColor: "border-tequila/20",
    bgColor: "bg-tequila/[0.04]",
    iconColor: "text-tequila",
  },
  local: {
    icon: Lightbulb,
    borderColor: "border-mariachi/20",
    bgColor: "bg-mariachi/[0.04]",
    iconColor: "text-mariachi",
  },
};

export function TipCard({ type, children }: TipCardProps) {
  const { icon: Icon, borderColor, bgColor, iconColor } = config[type];

  return (
    <div
      className={`rounded-[6px] border ${borderColor} ${bgColor} p-4 my-4`}
    >
      <div className="flex gap-3">
        <Icon className={`w-4 h-4 ${iconColor} shrink-0 mt-0.5`} />
        <div className="text-sm text-obsidiana/70 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
