import { Activity, Droplets, Landmark, Zap } from "lucide-react";
import { WaterInfrastructure } from "./Water";
import { OilInfrastructure } from "./Oil";
import { GoldInfrastructure } from "./Gold";
import { EnergyInfrastructure } from "./Energy";

export const InfrastructureTab = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
      <div className="flex items-center gap-3 text-yellow-400 border-b border-white/5 pb-4">
        <Zap size={24} />
        <div>
          <h2 className="text-xl font-black tracking-tighter uppercase italic">
            Infrastructure & Logistics
          </h2>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
            Life Support & Supply Grid
          </p>
        </div>
      </div>

      {/* INFRASTRUCTURE RESOURCE DASHBOARD */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-4 flex items-center gap-4">
          <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
            <Droplets size={20} />
          </div>
          <div>
            <span className="text-[8px] text-slate-500 uppercase font-black tracking-widest">
              Water Supply
            </span>
            <div className="text-md font-mono font-black text-white">
              45{" "}
              <span className="text-[9px] text-slate-500 font-normal">
                L/min
              </span>
            </div>
          </div>
        </div>
        <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-4 flex items-center gap-4">
          <div className="p-3 bg-amber-500/10 rounded-xl text-taupe-500">
            <Activity size={20} />
          </div>
          <div>
            <span className="text-[8px] text-slate-500 uppercase font-black tracking-widest">
              Oil Reserves
            </span>
            <div className="text-md font-mono font-black text-white">
              1,240{" "}
              <span className="text-[9px] text-slate-500 font-normal">BBL</span>
            </div>
          </div>
        </div>
        <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-4 flex items-center gap-4">
          <div className="p-3 bg-yellow-600/10 rounded-xl text-amber-400">
            <Landmark size={20} />
          </div>
          <div>
            <span className="text-[8px] text-slate-500 uppercase font-black tracking-widest">
              Gold Reserves
            </span>
            <div className="text-md font-mono font-black text-white">
              12.4k{" "}
              <span className="text-[9px] text-slate-500 font-normal">OZ</span>
            </div>
          </div>
        </div>
        <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-4 flex items-center gap-4">
          <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500">
            <Zap size={20} />
          </div>
          <div>
            <span className="text-[8px] text-slate-500 uppercase font-black tracking-widest">
              Energy Output
            </span>
            <div className="text-md font-mono font-black text-white">
              680{" "}
              <span className="text-[9px] text-slate-500 font-normal">MW</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <WaterInfrastructure />
        <OilInfrastructure />
        <GoldInfrastructure />
        <EnergyInfrastructure />
      </div>
    </div>
  );
};
