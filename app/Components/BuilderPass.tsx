import React from "react";

const BuilderPass = () => {
  return (
    <div className="w-full max-w-sm bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 leading-none">
            Jessica Mason
          </h2>
          <p className="text-xs text-slate-400 mt-2">
            Identity verified · L7 Engineer
          </p>
        </div>
        <div className="h-9 w-9 bg-slate-800 text-white rounded-full flex items-center justify-center font-medium text-xs">
          JS
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-slate-50 rounded-lg p-3">
          <p className="text-xs text-slate-400 mb-0.5">Velocity</p>
          <p className="text-lg font-semibold text-slate-800">98th pct</p>
        </div>
        <div className="bg-slate-50 rounded-lg p-3">
          <p className="text-xs text-slate-400 mb-0.5">Ship Rate</p>
          <p className="text-lg font-semibold text-slate-800">Daily</p>
        </div>
      </div>

      {/* Living Feed */}
      <div className="space-y-4">
        <div className="relative pl-4 border-l-2 border-slate-200">
          <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-slate-800" />
          <p className="text-xs font-medium text-slate-700">Core Infrastructure</p>
          <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
            Refactored auth middleware for 12M users. Latency dropped 22ms.
          </p>
        </div>

        <div className="relative pl-4 border-l-2 border-slate-100">
          <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-slate-300" />
          <p className="text-xs font-medium text-slate-500">Product DNA</p>
          <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
            Shipped real-time telemetry dashboard. Peer-verified by 4 leads.
          </p>
        </div>
      </div>

      {/* Bottom Status */}
      <div className="mt-8 pt-4 border-t border-slate-100 flex justify-between items-center">
        <span className="text-xs font-medium text-emerald-600 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          Active in Lineup
        </span>
        <span className="text-xs text-slate-400">
          v4.02
        </span>
      </div>
    </div>
  );
};

export default BuilderPass;
