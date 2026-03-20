import {
  Users,
  Beaker,
  TrendingUp,
  Shield,
  Zap,
  Menu,
  ChevronRight,
  Clock,
} from "lucide-react";
import { useEffect, useState, type FC } from "react";
import type { TabType } from "../../definitions/Tabs";

const ministries = [
  {
    id: "INFRASTRUCTURE",
    name: "INFRASTRUCTURE",
    icon: <Users size={18} />,
    color: "hover:text-blue-400",
  },
  {
    id: "SCIENCE",
    name: "SCIENCE",
    icon: <Beaker size={18} />,
    color: "hover:text-emerald-400",
  },
  {
    id: "INTELLIGENCE",
    name: "INTELLIGENCE",
    icon: <TrendingUp size={18} />,
    color: "hover:text-amber-400",
  },
  {
    id: "DEFENSE",
    name: "DEFENSE",
    icon: <Shield size={18} />,
    color: "hover:text-red-500",
  },
  {
    id: "FLEETS",
    name: "FLEETS",
    icon: <Zap size={18} />,
    color: "hover:text-indigo-400",
  },
];

interface LeftAsideProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const LeftAside: FC<LeftAsideProps> = ({ onTabChange, activeTab }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <aside className="w-64 border-r border-white/5 bg-slate-900/30 p-4 flex flex-col gap-1">
      <h2 className="text-[10px] text-slate-600 font-black tracking-[0.3em] uppercase mb-4 px-3">
        Central Cabinet
      </h2>
      <button
        onClick={() => {
          onTabChange("OVERVIEW");
        }}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all border group ${activeTab === "OVERVIEW" ? "bg-amber-500/10 border-amber-500/30 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.1)]" : "border-transparent text-slate-500 hover:bg-white/5 hover:text-slate-300"}`}
      >
        <Menu size={18} />
        <span className="text-xs font-bold tracking-wider uppercase">
          Overview
        </span>
      </button>
      <div className="my-4 border-t border-white/5" />
      {ministries.map((min) => (
        <button
          key={min.id}
          onClick={() => {
            onTabChange(min.id as TabType);
          }}
          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all border group ${activeTab === min.id ? "bg-white/10 border-white/20 text-white" : `border-transparent text-slate-500 ${min.color}`}`}
        >
          <div className="flex items-center gap-3">
            {min.icon}
            <span className="text-xs font-bold tracking-wider uppercase">
              {min.name}
            </span>
          </div>
          <ChevronRight
            size={14}
            className={`opacity-0 group-hover:opacity-100 transition-opacity ${activeTab === min.id ? "opacity-100" : ""}`}
          />
        </button>
      ))}

      <div className="mt-auto text-right flex flex-col items-center">
        <div className="flex items-center gap-2 text-amber-500/80">
          <Clock size={12} />
          <span className="text-xs font-mono font-bold uppercase">
            {time.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </span>
        </div>
        <span className="text-[9px] text-slate-500 font-bold tracking-widest uppercase">
          Universe: Alpha-01
        </span>
      </div>
    </aside>
  );
};
