import {
  Activity,
  DollarSign,
  Droplets,
  Filter,
  Hammer,
  Landmark,
  Waves,
  Zap,
} from "lucide-react";

export const InfrastructureTab = () => {
  const waterBuildings = [
    {
      level: 1,
      name: "Manual Crank",
      cost: { gold: 100, oil: 0 },
      benefit: 5,
      icon: <Droplets size={20} className="text-blue-400" />,
    },
    {
      level: 2,
      name: "Gas-Powered Pump",
      cost: { gold: 500, oil: 10 },
      benefit: 25,
      icon: <Waves size={20} className="text-blue-500" />,
    },
    {
      level: 3,
      name: "Electric Turbine",
      cost: { gold: 2000, oil: 50 },
      benefit: 100,
      icon: <Zap size={20} className="text-yellow-400" />,
    },
    {
      level: 4,
      name: "Nano-Suction Array",
      cost: { gold: 10000, oil: 200 },
      benefit: 500,
      icon: <Filter size={20} className="text-emerald-400" />,
    },
  ];

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
          <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500">
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

      {/* WATER GENERATION SECTION */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Waves size={18} className="text-blue-400" />
          <h3 className="text-sm font-black text-white uppercase tracking-widest">
            Water Treatment & Generation Plants
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {waterBuildings.map((building) => (
            <div
              key={building.level}
              className="bg-slate-900/80 border border-white/10 p-6 rounded-4xl hover:border-blue-500/50 transition-all group relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute -top-4 -right-4 p-8 opacity-5 group-hover:scale-110 transition-transform">
                {building.icon}
              </div>

              <div className="space-y-1 relative z-10">
                <span className="text-[9px] font-mono text-blue-400 font-black uppercase tracking-widest">
                  Level {building.level}
                </span>
                <h4 className="text-sm font-black text-white uppercase tracking-tight leading-none">
                  {building.name}
                </h4>
                <p className="text-[10px] text-emerald-400 font-bold uppercase mt-1">
                  +{building.benefit} Water/min
                </p>
              </div>

              <div className="mt-6 space-y-4 relative z-10">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] text-slate-500 uppercase font-black">
                    Construction Costs
                  </span>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-1">
                      <DollarSign size={10} className="text-amber-500" />
                      <span className="text-xs font-mono font-bold text-slate-200">
                        {building.cost.gold}
                      </span>
                    </div>
                    {building.cost.oil > 0 && (
                      <div className="flex items-center gap-1">
                        <Activity size={10} className="text-slate-500" />
                        <span className="text-xs font-mono font-bold text-slate-200">
                          {building.cost.oil} Oil
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white hover:border-blue-400 transition-all flex items-center justify-center gap-2">
                  <Hammer size={12} /> Construct
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
