import {
  Users,
  TrendingUp,
  Zap,
  Shield,
  Beaker,
  AlertTriangle,
  Landmark,
  Activity,
  Menu,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { InfrastructureTab } from "../sections/infrastructure";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("GABINETE");

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
    <Layout>
      <Header />

      <div className="flex flex-1 overflow-hidden">
        {/* --- SIDEBAR --- */}
        <aside className="w-64 border-r border-white/5 bg-slate-900/30 p-4 flex flex-col gap-1">
          <h2 className="text-[10px] text-slate-600 font-black tracking-[0.3em] uppercase mb-4 px-3">
            Central Cabinet
          </h2>
          <button
            onClick={() => {
              setActiveTab("GABINETE");
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

        <main className="flex-1 overflow-y-auto p-8 bg-[radial-gradient(circle_at_50%_0%,rgba(30,41,59,0.5)_0%,transparent_70%)]">
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
    </Layout>
  );
};

export default DashboardPage;
