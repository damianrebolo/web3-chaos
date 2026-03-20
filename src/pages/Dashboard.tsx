import { AlertTriangle, Landmark, Activity } from "lucide-react";
import { useState } from "react";
import { InfrastructureTab } from "../sections/infrastructure";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { LeftAside } from "../components/LeftAside";
import type { TabType } from "../definitions/Tabs";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState<TabType>("OVERVIEW");

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
        <LeftAside activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="flex-1 overflow-y-auto p-8 bg-[radial-gradient(circle_at_50%_0%,rgba(30,41,59,0.5)_0%,transparent_70%)]">
          <div className="max-w-7xl mx-auto">{renderContent()}</div>
        </main>
      </div>
    </Layout>
  );
};

export default DashboardPage;
