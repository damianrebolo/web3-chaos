import { DollarSign, Droplets, Filter, Hammer, Waves, Zap } from "lucide-react";

const waterBuildings = [
  {
    level: 1,
    name: "Manual Crank",
    cost: { soc: 0.1 },
    benefit: 5,
    icon: <Droplets size={20} className="text-blue-400" />,
  },
  {
    level: 2,
    name: "Gas-Powered Pump",
    cost: { soc: 0.2 },
    benefit: 25,
    icon: <Waves size={20} className="text-blue-500" />,
  },
  {
    level: 3,
    name: "Electric Turbine",
    cost: { soc: 0.3 },
    benefit: 100,
    icon: <Zap size={20} className="text-yellow-400" />,
  },
  {
    level: 4,
    name: "Nano-Suction Array",
    cost: { soc: 0.4 },
    benefit: 500,
    icon: <Filter size={20} className="text-emerald-400" />,
  },
  {
    level: 5,
    name: "Some other",
    cost: { soc: 0.5 },
    benefit: 500,
    icon: <Filter size={20} className="text-emerald-400" />,
  },
];

export const EnergyInfrastructure = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        <Zap size={18} className="text-emerald-500" />
        <h3 className="text-sm font-black text-white uppercase tracking-widest">
          Energy Generation Plants
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
              <div className="flex flex-row item-center gap-1 justify-between">
                <span className="text-[9px] text-slate-500 uppercase font-black">
                  Costs
                </span>
                <div className="flex gap-3">
                  <div className="flex items-center gap-1">
                    <DollarSign size={10} className="text-amber-500" />
                    <span className="text-xs font-mono font-bold text-slate-200">
                      {building.cost.soc}
                    </span>
                  </div>
                </div>
              </div>
              <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white hover:border-blue-400 transition-all flex items-center justify-center gap-2">
                <Hammer size={12} /> Construct
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
