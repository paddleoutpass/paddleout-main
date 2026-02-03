import React from "react";

const BuilderPass = () => {
  return (
    <div className="w-full max-w-sm bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-sm shadow-2xl">
      {/* Header */}
      <div className="flex justify-between items-start mb-10">
        <div>
          <h2 className="text-3xl font-black tracking-tighter uppercase leading-none">
            Jessica Mason
          </h2>
          <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] mt-3">
            Identity verified / L7 Engineer
          </p>
        </div>
        <div className="h-10 w-10 bg-white text-black rounded-full flex items-center justify-center font-black text-xs">
          JS
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden mb-8">
        <div className="bg-[#0a0a0b] p-4">
          <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-1">
            Velocity
          </p>
          <p className="text-xl font-bold italic">98th pct</p>
        </div>
        <div className="bg-[#0a0a0b] p-4">
          <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-1">
            Ship Rate
          </p>
          <p className="text-xl font-bold italic">Daily</p>
        </div>
      </div>

      {/* Living Feed */}
      <div className="space-y-6">
        <div className="relative pl-6 border-l border-white/10">
          <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/90">
            Core Infrastructure
          </p>
          <p className="text-xs text-gray-500 leading-relaxed mt-1">
            Refactored auth middleware for 12M users. Latency dropped 22ms.
          </p>
        </div>

        <div className="relative pl-6 border-l border-white/10">
          <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-white/20" />
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">
            Product DNA
          </p>
          <p className="text-xs text-gray-500 leading-relaxed mt-1">
            Shipped real-time telemetry dashboard. Peer-verified by 4 leads.
          </p>
        </div>
      </div>

      {/* Bottom Status */}
      <div className="mt-12 pt-6 border-t border-white/5 flex justify-between items-center">
        <span className="text-[10px] font-black uppercase tracking-widest text-green-500 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Active in Lineup
        </span>
        <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">
          v4.02 // PASS
        </span>
      </div>
    </div>
  );
};

export default BuilderPass;
