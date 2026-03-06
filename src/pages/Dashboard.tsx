import {
  Users,
  TrendingUp,
  Zap,
  Shield,
  Beaker,
  AlertTriangle,
  Landmark,
  Clock,
  Activity,
  Bell,
  X,
  User,
  CheckCircle2,
  Settings2,
  Globe,
  LogOut,
  Menu,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import StatCard from "../components/StatCard";
import StabilityBar from "../components/StabilityBar";
import { InfrastructureTab } from "../sections/infrastructure";

const DashboardPage = () => {
  const [stability, _setStability] = useState(65);
  const [time, setTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState("GABINETE");

  // Header dropdown states
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

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

  const renderContent = () => {
    switch (activeTab) {
      case "INFRASTRUCTURE":
        return <InfrastructureTab />;
      case "SCIENCE":
        return <div>science</div>;
      case "INTELLIGENCE":
        return <div>Intelligence</div>;
      case "DEFENSE":
        return <div>defense</div>;
      case "FLEETS":
        return <div>fleets</div>;
      default:
        return (
          <div className="animate-in fade-in duration-500 space-y-8">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div className="flex items-center gap-3 text-red-500">
                <AlertTriangle size={24} className="animate-pulse" />
                <div>
                  <h2 className="text-xl font-black tracking-tighter uppercase italic">
                    Crisis Monitor
                  </h2>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                    Administrative AI Feed
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 bg-red-500/10 border border-red-500/50 text-red-500 text-[9px] font-black rounded-full uppercase tracking-widest">
                Mode: Latent Chaos
              </span>
            </div>

            <section className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-red-600 to-amber-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-8 overflow-hidden">
                <div className="flex flex-col gap-4 relative z-10">
                  <span className="text-[10px] bg-red-600 text-white font-black px-3 py-1 rounded w-fit uppercase tracking-[0.2em]">
                    Top Priority
                  </span>
                  <h3 className="text-3xl font-black tracking-tighter text-white">
                    Central Market Crisis
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                    Mr. President, the rise in inflation to{" "}
                    <span className="text-red-400 font-mono font-bold">
                      12%
                    </span>{" "}
                    has caused a critical shortage. Transporters have blocked
                    the routes. Social stability falls{" "}
                    <span className="text-red-500 font-bold">
                      -2% per cycle
                    </span>
                    .
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    <button className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-amber-500/50 transition-all text-left">
                      <span className="text-xs font-black text-amber-500 uppercase mb-1">
                        Option A: Subsidize
                      </span>
                      <span className="text-[9px] text-slate-500 mt-2 font-mono uppercase tracking-tighter">
                        Cost: $500k | Effect: -15% Anger
                      </span>
                    </button>
                    <button className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-red-500/50 transition-all text-left">
                      <span className="text-xs font-black text-red-500 uppercase mb-1">
                        Option B: Intervention
                      </span>
                      <span className="text-[9px] text-slate-500 mt-2 font-mono uppercase tracking-tighter">
                        Cost: Loyalty | Effect: +20% Chaos Risk
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-900/50 border border-white/5 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Activity size={18} />
                </div>
                <div>
                  <span className="text-[9px] text-slate-500 uppercase block font-mono tracking-widest">
                    System Status
                  </span>
                  <span className="text-xs font-bold text-slate-200 uppercase tracking-wide">
                    Operational Core Stable
                  </span>
                </div>
              </div>
              <div className="p-4 bg-slate-900/50 border border-white/5 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                  <Landmark size={18} />
                </div>
                <div>
                  <span className="text-[9px] text-slate-500 uppercase block font-mono tracking-widest">
                    Fiscal Balance
                  </span>
                  <span className="text-xs font-bold text-red-500 uppercase tracking-wide">
                    Deficit: -$12.4B
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30 overflow-hidden flex flex-col">
      {/* --- TOP BAR --- */}
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

        <div className="flex-1 flex items-center justify-center gap-0">
          <StatCard
            label="Treasury"
            value="$1,450.8M"
            subValue="(+$12k)"
            color="text-amber-400"
          />
          <div className="px-8 flex flex-col items-center border-r border-white/5">
            <span className="text-[10px] text-slate-500 font-bold tracking-[0.2em] mb-1 uppercase">
              Stability
            </span>
            <StabilityBar value={stability} />
          </div>
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

      <div className="flex flex-1 overflow-hidden">
        {/* --- SIDEBAR --- */}
        <aside className="w-64 border-r border-white/5 bg-slate-900/30 p-4 flex flex-col gap-1">
          <h2 className="text-[10px] text-slate-600 font-black tracking-[0.3em] uppercase mb-4 px-3">
            Central Cabinet
          </h2>
          <button
            onClick={() => {
              setActiveTab("GABINETE");
              setIsNotificationsOpen(false);
              setIsUserMenuOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all border group ${activeTab === "GABINETE" ? "bg-amber-500/10 border-amber-500/30 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.1)]" : "border-transparent text-slate-500 hover:bg-white/5 hover:text-slate-300"}`}
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
                setActiveTab(min.id);
                setIsNotificationsOpen(false);
                setIsUserMenuOpen(false);
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
          <div className="mt-auto p-4 bg-amber-950/20 border border-amber-900/30 rounded-2xl">
            <span className="text-[9px] text-amber-500 font-black uppercase tracking-widest block mb-2">
              State Bureaucracy
            </span>
            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-amber-500 w-[75%]" />
            </div>
            <span className="text-[10px] text-slate-500 mt-2 block font-mono">
              Points: 450 / 600
            </span>
          </div>
        </aside>

        <main
          className="flex-1 overflow-y-auto p-8 bg-[radial-gradient(circle_at_50%_0%,rgba(30,41,59,0.5)_0%,transparent_70%)]"
          onClick={() => {
            setIsNotificationsOpen(false);
            setIsUserMenuOpen(false);
          }}
        >
          <div className="max-w-4xl mx-auto">{renderContent()}</div>
        </main>

        <aside className="w-80 border-l border-white/5 bg-black/40 p-6 flex flex-col gap-8">
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-slate-500" />
                <h2 className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">
                  Commodities
                </h2>
              </div>
            </div>
            <div className="space-y-2">
              {[
                { name: "Brent Crude", price: "$82.40", up: false },
                { name: "Gold", price: "$2,450", up: true },
                { name: "Water", price: "$1,03", up: true },
                { name: "Energy", price: "$0.47", up: false },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5 font-mono"
                >
                  <span className="text-[10px] text-slate-400 uppercase tracking-tighter">
                    {item.name}
                  </span>
                  <span
                    className={`text-xs font-bold ${item.up ? "text-green-500" : "text-red-500"}`}
                  >
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default DashboardPage;
