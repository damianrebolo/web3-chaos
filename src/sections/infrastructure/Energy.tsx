import { Zap } from "lucide-react";

export const EnergyInfrastructure = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        <Zap size={18} className="text-emerald-500" />
        <h3 className="text-sm font-black text-white uppercase tracking-widest">
          Energy Generation Plants
        </h3>
      </div>
    </>
  );
};
