interface CanteraDividerProps {
  className?: string;
  arches?: number;
}

export function CanteraDivider({ className = "", arches = 5 }: CanteraDividerProps) {
  const archWidth = 120;
  const totalWidth = arches * archWidth;
  const height = 32;

  return (
    <div className={`flex justify-center ${className}`}>
      <svg
        viewBox={`0 0 ${totalWidth} ${height}`}
        className="w-full max-w-lg h-8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Horizontal base lines */}
        <line
          x1="0"
          y1={height - 2}
          x2={totalWidth}
          y2={height - 2}
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.12"
        />

        {/* Arches */}
        {Array.from({ length: arches }).map((_, i) => {
          const cx = i * archWidth + archWidth / 2;
          const baseY = height - 2;
          const topY = 4;

          return (
            <g key={i}>
              {/* Arch path */}
              <path
                d={`M ${i * archWidth + 8} ${baseY} Q ${cx} ${topY} ${(i + 1) * archWidth - 8} ${baseY}`}
                stroke="currentColor"
                strokeWidth="1.2"
                opacity="0.1"
                fill="none"
              />
              {/* Keystone dot */}
              <circle
                cx={cx}
                cy={topY + 6}
                r="2"
                fill="currentColor"
                opacity="0.15"
              />
              {/* Column lines */}
              <line
                x1={i * archWidth + 8}
                y1={baseY}
                x2={i * archWidth + 8}
                y2={baseY - 6}
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.08"
              />
              <line
                x1={(i + 1) * archWidth - 8}
                y1={baseY}
                x2={(i + 1) * archWidth - 8}
                y2={baseY - 6}
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.08"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
