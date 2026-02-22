"use client";
import React from "react";

// ─── Radar Chart ─────────────────────────────────────────────────────────────

const AXES = [
  { label: "Velocity", value: 0.95 },
  { label: "Frontend", value: 0.70 },
  { label: "Backend",  value: 0.90 },
  { label: "Infra",    value: 0.80 },
  { label: "AI/LLM",  value: 0.88 },
  { label: "Product",  value: 0.62 },
];

const CX = 64, CY = 64, R = 44;
const LEVELS = [0.25, 0.5, 0.75, 1.0];

function pt(i: number, val: number) {
  const angle = ((i * 60 - 90) * Math.PI) / 180;
  return { x: CX + R * val * Math.cos(angle), y: CY + R * val * Math.sin(angle) };
}

function poly(val: number | number[]) {
  return AXES.map((a, i) => {
    const v = typeof val === "number" ? val : val[i];
    const p = pt(i, v);
    return `${i === 0 ? "M" : "L"}${p.x.toFixed(2)},${p.y.toFixed(2)}`;
  }).join(" ") + " Z";
}

const StackRadar = () => {
  const labelOffset = 1.42;
  return (
    <svg viewBox="0 0 128 128" className="w-full h-full">
      {/* Grid rings */}
      {LEVELS.map((l) => (
        <path key={l} d={poly(l)} fill="none" stroke="#e2e8f0" strokeWidth="0.6" />
      ))}
      {/* Axis spokes */}
      {AXES.map((_, i) => {
        const end = pt(i, 1);
        return <line key={i} x1={CX} y1={CY} x2={end.x.toFixed(2)} y2={end.y.toFixed(2)} stroke="#e2e8f0" strokeWidth="0.6" />;
      })}
      {/* Data fill */}
      <path
        d={poly(AXES.map((a) => a.value))}
        fill="rgba(30,41,59,0.08)"
        stroke="#1e293b"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Data points */}
      {AXES.map((a, i) => {
        const p = pt(i, a.value);
        return <circle key={i} cx={p.x} cy={p.y} r="2.2" fill="#1e293b" />;
      })}
      {/* Axis labels */}
      {AXES.map((a, i) => {
        const p = pt(i, labelOffset);
        return (
          <text
            key={i}
            x={p.x.toFixed(2)}
            y={p.y.toFixed(2)}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="6.5"
            fill="#94a3b8"
            fontFamily="system-ui, sans-serif"
          >
            {a.label}
          </text>
        );
      })}
    </svg>
  );
};

// ─── Builder Pass Card ────────────────────────────────────────────────────────

const BuilderPass = () => {
  return (
    <div className="w-full max-w-sm bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">

      {/* Header */}
      <div className="flex justify-between items-start mb-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-lg font-semibold tracking-tight text-slate-900 leading-none">
              Builder #842
            </h2>
            <span className="px-1.5 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-medium rounded">
              Tier-1 Alum
            </span>
          </div>
          <p className="text-xs text-slate-400">Ex-Founder · Identity verified</p>
        </div>
        <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Open
        </span>
      </div>

      {/* Stack Radar */}
      <div className="w-full h-40 mb-5">
        <StackRadar />
      </div>

      {/* Signal Stats */}
      <div className="grid grid-cols-3 gap-2 mb-5">
        <div className="bg-slate-50 rounded-lg p-2.5">
          <p className="text-[10px] text-slate-400 mb-0.5">Velocity</p>
          <p className="text-sm font-semibold text-slate-800">Top 5%</p>
        </div>
        <div className="bg-slate-50 rounded-lg p-2.5">
          <p className="text-[10px] text-slate-400 mb-0.5">Stack</p>
          <p className="text-sm font-semibold text-slate-800">7 active</p>
        </div>
        <div className="bg-slate-50 rounded-lg p-2.5">
          <p className="text-[10px] text-slate-400 mb-0.5">Vouches</p>
          <p className="text-sm font-semibold text-slate-800">7 verified</p>
        </div>
      </div>

      {/* Vouch Snippet */}
      <div className="bg-slate-50 rounded-xl p-3.5 mb-5 border border-slate-100">
        <p className="text-xs text-slate-600 leading-relaxed italic mb-2">
          &ldquo;Handled our Series A scaling without downtime. Shipped the MVP in 3 weeks. Pure 0-to-1 grit.&rdquo;
        </p>
        <p className="text-[10px] text-slate-400 font-medium">Verified CTO · YC W22</p>
      </div>

      {/* CTA */}
      <button className="w-full px-4 py-2.5 bg-slate-800 text-white font-medium text-sm rounded-lg hover:bg-slate-700 transition-colors mb-2">
        Lock in 15 Minutes
      </button>
      <p className="text-[10px] text-slate-400 text-center leading-relaxed">
        Double opt-in. You both confirm before any details are shared.
      </p>

    </div>
  );
};

export default BuilderPass;
