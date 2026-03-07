import { Pickaxe } from "lucide-react";

export const GoldInfrastructure = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        <Pickaxe size={18} className="text-amber-400" />
        <h3 className="text-sm font-black text-white uppercase tracking-widest">
          Gold Mines
        </h3>
      </div>
    </>
  );
};
