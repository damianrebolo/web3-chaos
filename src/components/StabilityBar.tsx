import type { FC } from "react";

interface StabilityBarProps {
  value: number;
}

const StabilityBar: FC<StabilityBarProps> = ({ value }) => (
  <div className="w-48 h-2.5 bg-slate-800 border border-white/10 rounded-full overflow-hidden shadow-inner">
    <div
      className={`h-full transition-all duration-1000 ease-out ${
        value > 70
          ? "bg-emerald-500"
          : value > 40
            ? "bg-amber-500"
            : "bg-red-600"
      } shadow-[0_0_10px_rgba(16,185,129,0.3)]`}
      style={{ width: `${value}%` }}
    />
  </div>
);

export default StabilityBar;
