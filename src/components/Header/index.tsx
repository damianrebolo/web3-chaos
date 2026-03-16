import {
  Clock,
  Bell,
  X,
  User,
  CheckCircle2,
  Settings2,
  Globe,
  LogOut,
} from "lucide-react";
import StatCard from "../StatCard";
import { useEffect, useState } from "react";

const notifications = [
  {
    id: 1,
    type: "critical",
    title: "Supply Crisis",
    desc: "Central Market at breaking point.",
    time: "2m",
  },
  {
    id: 2,
    type: "alert",
    title: "Espionage Detected",
    desc: "Level 2 infiltration halted.",
    time: "15m",
  },
  {
    id: 3,
    type: "info",
    title: "R&D Completed",
    desc: "Neural Networks Level 4.",
    time: "1h",
  },
];

export const Header = () => {
  const [time, setTime] = useState(new Date());
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="h-16 border-b border-white/10 bg-black/60 backdrop-blur-xl flex items-center justify-between px-6 z-100">
      <div className="flex items-center gap-2 mr-8">
        <div className="w-8 h-8 bg-amber-600 rounded flex items-center justify-center font-black text-black">
          SC
        </div>
        <div className="hidden xl:block">
          <h1 className="text-xs font-black tracking-tighter uppercase leading-none">
            State of Chaos
          </h1>
          <span className="text-[9px] text-amber-500/70 font-mono">
            ADMIN-SYS v4.0.2
          </span>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-between gap-0">
        <StatCard
          label="Treasury"
          value="$1,450.8M"
          subValue="(+$12k)"
          color="text-amber-400"
        />
        {/*<div className="px-8 flex flex-col items-center border-r border-white/5">
          <span className="text-[10px] text-slate-500 font-bold tracking-[0.2em] mb-1 uppercase">
            Stability
          </span>
          <StabilityBar value={stability} />
        </div>*/}
        <StatCard
          label="Population"
          value="125.3M"
          subValue="(+0.5%)"
          color="text-blue-400"
        />
      </div>

      <div className="flex items-center gap-4 ml-8 relative">
        <div className="text-right flex flex-col items-end mr-2">
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
            World: Alpha-01
          </span>
        </div>

        {/* Botón Notificaciones */}
        <div className="relative">
          <button
            onClick={() => {
              setIsNotificationsOpen(!isNotificationsOpen);
              setIsUserMenuOpen(false);
            }}
            className={`p-2 rounded-full transition-all relative ${isNotificationsOpen ? "bg-amber-500/20 text-amber-500" : "text-slate-400 hover:bg-white/5"}`}
          >
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-black animate-pulse"></span>
          </button>

          {/* Dropdown Notificaciones */}
          {isNotificationsOpen && (
            <div className="absolute top-12 right-0 w-80 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl p-4 animate-in slide-in-from-top-2 duration-200">
              <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
                <h3 className="text-[10px] font-black tracking-widest text-slate-500 uppercase">
                  Critical Alerts
                </h3>
                <button onClick={() => setIsNotificationsOpen(false)}>
                  <X size={14} className="text-slate-500 hover:text-white" />
                </button>
              </div>
              <div className="space-y-3">
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    className="p-3 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span
                        className={`text-[9px] font-black uppercase tracking-widest ${n.type === "critical" ? "text-red-500" : n.type === "alert" ? "text-amber-500" : "text-blue-500"}`}
                      >
                        {n.title}
                      </span>
                      <span className="text-[9px] text-slate-600 font-mono">
                        {n.time}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight uppercase font-medium">
                      {n.desc}
                    </p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2 text-[9px] font-black text-slate-500 hover:text-white uppercase tracking-widest transition-colors">
                View Full Log
              </button>
            </div>
          )}
        </div>

        {/* Menú Usuario / Login Simulado */}
        <div className="relative">
          <button
            onClick={() => {
              setIsUserMenuOpen(!isUserMenuOpen);
              setIsNotificationsOpen(false);
            }}
            className={`flex items-center gap-3 pl-3 pr-2 py-1.5 rounded-full border transition-all ${isUserMenuOpen ? "bg-amber-500/10 border-amber-500/50" : "border-white/10 hover:bg-white/5 hover:border-white/20"}`}
          >
            <div className="text-right hidden sm:block">
              <span className="text-[10px] font-black text-white block leading-none uppercase tracking-tighter">
                Pres. Valtierra
              </span>
              <span className="text-[8px] text-amber-500 font-bold uppercase tracking-widest">
                Nivel 42
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/20 flex items-center justify-center overflow-hidden">
              <User size={16} className="text-slate-400" />
            </div>
          </button>

          {/* Dropdown Usuario */}
          {isUserMenuOpen && (
            <div className="absolute top-12 right-0 w-56 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-top-2 duration-200">
              <div className="p-4 bg-linear-to-br from-slate-800 to-slate-900 border-b border-white/5">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle2 size={14} className="text-amber-500" />
                  <span className="text-[9px] font-black text-amber-500 uppercase tracking-widest">
                    Verified Sovereign
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">
                  ID: #SYS-77421-B
                </span>
              </div>
              <div className="p-2 space-y-1">
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-[10px] font-bold text-slate-300 hover:bg-white/5 rounded-lg transition-all uppercase tracking-wider">
                  <Settings2 size={14} /> Account Settings
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-[10px] font-bold text-slate-300 hover:bg-white/5 rounded-lg transition-all uppercase tracking-wider">
                  <Globe size={14} /> World Selector
                </button>
                <div className="my-1 border-t border-white/5 mx-2" />
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-[10px] font-bold text-red-500 hover:bg-red-500/10 rounded-lg transition-all uppercase tracking-wider">
                  <LogOut size={14} /> End Session
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
