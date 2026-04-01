import { CheckCircle } from "lucide-react";

interface LastVerifiedProps {
  date: string;
}

export function LastVerified({ date }: LastVerifiedProps) {
  return (
    <div className="inline-flex items-center gap-1.5 font-mono text-[10px] text-agave">
      <CheckCircle className="w-3 h-3" />
      Last verified {date}
    </div>
  );
}
