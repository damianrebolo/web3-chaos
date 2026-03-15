import { AlertTriangle, Globe, Cpu, Activity } from "lucide-react";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.05),transparent_70%)]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />

      <div className="relative z-10 text-center space-y-8 max-w-5xl animate-in fade-in zoom-in duration-1000">
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-500 text-[10px] font-black uppercase tracking-[0.3em]">
          <AlertTriangle size={14} /> Crisis Protocol Activated
        </div>

        <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white uppercase italic leading-none drop-shadow-2xl">
          STATE OF <span className="text-amber-500">CHAOS</span>
        </h1>

        <p className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
          The first geopolitical simulator where the AI not only plays against
          you, but embodies the society you're trying to govern.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
          <div className="p-8 bg-white/5 border border-white/10 rounded-2rem space-y-4 hover:bg-white/10 transition-colors group">
            <Activity
              size={40}
              className="text-blue-500 mx-auto group-hover:scale-110 transition-transform"
            />
            <h3 className="text-sm font-black text-white uppercase tracking-widest">
              Administrative AI
            </h3>
            <p className="text-[11px] text-slate-500 uppercase leading-tight font-bold">
              A mass psychology engine that reacts to each of your laws.
            </p>
          </div>
          <div className="p-8 bg-white/5 border border-white/10 rounded-2rem space-y-4 hover:bg-white/10 transition-colors group">
            <Globe
              size={40}
              className="text-amber-500 mx-auto group-hover:scale-110 transition-transform"
            />
            <h3 className="text-sm font-black text-white uppercase tracking-widest">
              Massive Worlds
            </h3>
            <p className="text-[11px] text-slate-500 uppercase leading-tight font-bold">
              Join persistent worlds with thousands of players and forge global
              alliances.
            </p>
          </div>
          <div className="p-8 bg-white/5 border border-white/10 rounded-2rem space-y-4 hover:bg-white/10 transition-colors group">
            <Cpu
              size={40}
              className="text-emerald-500 mx-auto group-hover:scale-110 transition-transform"
            />
            <h3 className="text-sm font-black text-white uppercase tracking-widest">
              Total Simulation
            </h3>
            <p className="text-[11px] text-slate-500 uppercase leading-tight font-bold">
              Control inflation, infrastructure, and espionage within a web of
              interdependence.
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            navigate("dashboard");
          }}
          className="px-16 py-6 bg-amber-600 hover:bg-amber-500 text-black font-black text-xl rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(245,158,11,0.4)] uppercase tracking-[0.2em]"
        >
          Establish Mandate
        </button>

        <div className="pt-12 flex items-center justify-center gap-8 opacity-40">
          <div className="flex flex-col">
            <span className="text-xl font-mono font-black text-white leading-none">
              14.5k
            </span>
            <span className="text-[9px] font-bold uppercase tracking-widest">
              Sovereigns Online
            </span>
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div className="flex flex-col">
            <span className="text-xl font-mono font-black text-white leading-none">
              12
            </span>
            <span className="text-[9px] font-bold uppercase tracking-widest">
              Active Systems
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
