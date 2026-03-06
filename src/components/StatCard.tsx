import type { FC } from "react";

interface StatCardProps {
  label: string;
  value: string;
  subValue?: string;
  color: string;
}

const StatCard: FC<StatCardProps> = ({ label, value, subValue, color }) => (
  <div className="flex flex-col px-4 border-r border-white/5 last:border-r-0">
    <span className="text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase">
      {label}
    </span>
    <div className="flex items-baseline gap-2">
      <span className={`text-lg font-mono font-black ${color}`}>{value}</span>
      {subValue && (
        <span className="text-[10px] text-slate-400 font-mono">{subValue}</span>
      )}
    </div>
  </div>
);

export default StatCard;
