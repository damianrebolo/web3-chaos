import type { FC } from "react";

interface ProgressBarProps {
  label: string;
  value: number;
  colorClass?: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  subLabel?: string;
}

const ProgressBar: FC<ProgressBarProps> = ({
  label,
  value,
  colorClass = "bg-blue-500",
  icon: Icon,
  subLabel,
}) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
      <div className="flex items-center gap-2">
        {Icon && <Icon fontSize={12} className="opacity-50" />}
        <span className="text-slate-400">{label}</span>
      </div>
      <span className="text-white font-mono">{value}%</span>
    </div>
    <div className="h-2 bg-slate-800 rounded-full overflow-hidden border border-white/5">
      <div
        className={`h-full ${colorClass} transition-all duration-1000`}
        style={{ width: `${value}%` }}
      />
    </div>
    {subLabel && (
      <p className="text-[9px] text-slate-500 italic uppercase">{subLabel}</p>
    )}
  </div>
);

export default ProgressBar;
