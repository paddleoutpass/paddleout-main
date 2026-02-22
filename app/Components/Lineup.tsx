"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Developer {
  id: string;
  handle: string;
  badge: string;
  title: string;
  status: "available" | "soon";
  availableDate: string | null;
  signalScore: number;
  velocityPct: string;
  radar: number[];
  skills: string[];
  vouchCount: number;
  vouchQuote: string;
  vouchSource: string;
  lastUpdated: string;
}

interface FilterState {
  availability: string;
  selectedStacks: string[];
  sortBy: string;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const STACK_OPTIONS = ["Python", "Rust", "React", "Go", "TypeScript", "Node.js"];

const AVAILABILITY_OPTIONS = [
  { value: "all", label: "All" },
  { value: "this-week", label: "This Week" },
  { value: "next-2-weeks", label: "Next 2 Weeks" },
  { value: "30-days", label: "30 Days" },
];

const SORT_OPTIONS = [
  { value: "best-match", label: "Best Match" },
  { value: "highest-signal", label: "Highest Signal" },
  { value: "soonest", label: "Soonest Available" },
  { value: "recently-updated", label: "Recently Updated" },
];

const DEFAULT_FILTERS: FilterState = {
  availability: "all",
  selectedStacks: [],
  sortBy: "best-match",
};

// ─── Mock Data ───────────────────────────────────────────────────────────────

// radar axes: [Velocity, Frontend, Backend, Infra, AI/LLM, Product]
const MOCK_DEVELOPERS: Developer[] = [
  {
    id: "1", handle: "Builder #291", badge: "Tier-1 Alum",
    title: "Systems Engineer",
    status: "available", availableDate: null,
    signalScore: 9.4, velocityPct: "Top 3%",
    radar: [0.95, 0.55, 0.90, 0.92, 0.60, 0.50],
    skills: ["Rust", "Go", "TypeScript", "Docker"],
    vouchCount: 5,
    vouchQuote: "Rebuilt core infra under load. Zero downtime.",
    vouchSource: "Verified CTO · Series B",
    lastUpdated: "2026-01-30",
  },
  {
    id: "2", handle: "Builder #842", badge: "Ex-Founder",
    title: "ML Platform Engineer",
    status: "available", availableDate: null,
    signalScore: 9.8, velocityPct: "Top 1%",
    radar: [0.98, 0.60, 0.88, 0.75, 0.95, 0.65],
    skills: ["Python", "Rust", "TypeScript", "AWS"],
    vouchCount: 7,
    vouchQuote: "Shipped our ML pipeline in 3 weeks. Pure 0-to-1 grit.",
    vouchSource: "Verified CTO · YC W22",
    lastUpdated: "2026-01-28",
  },
  {
    id: "3", handle: "Builder #173", badge: "Tier-1 Alum",
    title: "Full-Stack Engineer",
    status: "available", availableDate: null,
    signalScore: 8.6, velocityPct: "Top 8%",
    radar: [0.82, 0.80, 0.78, 0.55, 0.60, 0.75],
    skills: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    vouchCount: 3,
    vouchQuote: "Owned the entire product surface. Shipped v1 solo.",
    vouchSource: "Verified Head of Product · YC S23",
    lastUpdated: "2026-01-29",
  },
  {
    id: "4", handle: "Builder #514", badge: "Tier-1 Alum",
    title: "Backend Architect",
    status: "available", availableDate: null,
    signalScore: 9.2, velocityPct: "Top 4%",
    radar: [0.90, 0.40, 0.95, 0.88, 0.70, 0.45],
    skills: ["Go", "Rust", "Python", "Kubernetes"],
    vouchCount: 6,
    vouchQuote: "10x'd our API throughput in two sprints. Incredible ownership.",
    vouchSource: "Verified VP Eng · Series A",
    lastUpdated: "2026-01-27",
  },
  {
    id: "5", handle: "Builder #639", badge: "Ex-Founder",
    title: "Frontend Engineer",
    status: "available", availableDate: null,
    signalScore: 8.1, velocityPct: "Top 12%",
    radar: [0.78, 0.92, 0.50, 0.40, 0.45, 0.88],
    skills: ["React", "TypeScript", "Node.js"],
    vouchCount: 2,
    vouchQuote: "Design eye + engineering execution. Rare combo.",
    vouchSource: "Verified CEO · Seed",
    lastUpdated: "2026-01-31",
  },
  {
    id: "6", handle: "Builder #427", badge: "Tier-1 Alum",
    title: "DevOps & Infra Lead",
    status: "available", availableDate: null,
    signalScore: 9.0, velocityPct: "Top 5%",
    radar: [0.92, 0.35, 0.78, 0.97, 0.55, 0.40],
    skills: ["Go", "Python", "Kubernetes", "AWS"],
    vouchCount: 4,
    vouchQuote: "Took us from 99.1% to 99.97% uptime in one quarter.",
    vouchSource: "Verified CTO · Series A",
    lastUpdated: "2026-01-25",
  },
  {
    id: "7", handle: "Builder #318", badge: "Tier-1 Alum",
    title: "Web3 Protocol Engineer",
    status: "available", availableDate: null,
    signalScore: 8.3, velocityPct: "Top 10%",
    radar: [0.80, 0.55, 0.85, 0.70, 0.65, 0.50],
    skills: ["Rust", "TypeScript", "Solidity"],
    vouchCount: 3,
    vouchQuote: "Shipped a live protocol under audit pressure. Didn't flinch.",
    vouchSource: "Verified Eng Lead · Series B",
    lastUpdated: "2026-01-26",
  },
  {
    id: "8", handle: "Builder #715", badge: "Tier-1 Alum",
    title: "Data Platform Engineer",
    status: "available", availableDate: null,
    signalScore: 8.9, velocityPct: "Top 5%",
    radar: [0.88, 0.45, 0.85, 0.72, 0.90, 0.55],
    skills: ["Python", "Go", "TypeScript", "AWS"],
    vouchCount: 5,
    vouchQuote: "Best data hire we've made. Diagnosed and fixed in hours.",
    vouchSource: "Verified Eng Lead · YC W21",
    lastUpdated: "2026-02-01",
  },
  {
    id: "9", handle: "Builder #203", badge: "Ex-Founder",
    title: "Mobile & Systems Engineer",
    status: "available", availableDate: null,
    signalScore: 7.8, velocityPct: "Top 18%",
    radar: [0.75, 0.85, 0.65, 0.50, 0.55, 0.80],
    skills: ["React", "TypeScript", "Swift"],
    vouchCount: 2,
    vouchQuote: "Shipped our iOS app from zero. Nailed the launch.",
    vouchSource: "Verified CEO · Seed",
    lastUpdated: "2026-01-24",
  },
  {
    id: "10", handle: "Builder #891", badge: "Tier-1 Alum",
    title: "Security Engineer",
    status: "soon", availableDate: "April 15",
    signalScore: 9.6, velocityPct: "Top 2%",
    radar: [0.96, 0.40, 0.88, 0.94, 0.72, 0.42],
    skills: ["Rust", "Go", "Python"],
    vouchCount: 8,
    vouchQuote: "Found critical vulns nobody else caught. Methodical and fast.",
    vouchSource: "Verified CTO · Series B",
    lastUpdated: "2026-01-23",
  },
  {
    id: "11", handle: "Builder #156", badge: "Tier-1 Alum",
    title: "API & Integrations Engineer",
    status: "soon", availableDate: "March 5",
    signalScore: 7.5, velocityPct: "Top 20%",
    radar: [0.72, 0.60, 0.80, 0.62, 0.58, 0.55],
    skills: ["Node.js", "TypeScript", "Python", "Go"],
    vouchCount: 2,
    vouchQuote: "Integrated 6 third-party APIs in two weeks. Solid communicator.",
    vouchSource: "Verified VP Eng · Seed",
    lastUpdated: "2026-01-22",
  },
  {
    id: "12", handle: "Builder #463", badge: "Tier-1 Alum",
    title: "Compiler & Tooling Engineer",
    status: "soon", availableDate: "May 1",
    signalScore: 7.2, velocityPct: "Top 22%",
    radar: [0.70, 0.45, 0.82, 0.68, 0.60, 0.40],
    skills: ["Rust", "Go", "TypeScript"],
    vouchCount: 1,
    vouchQuote: "Cut our build times by 40%. Quiet, deep, relentless.",
    vouchSource: "Verified Eng Lead · Series A",
    lastUpdated: "2026-01-20",
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function parseMockDate(dateStr: string | null): Date | null {
  if (!dateStr) return null;
  const parsed = new Date(`${dateStr}, 2026`);
  return isNaN(parsed.getTime()) ? null : parsed;
}

// ─── Radar Chart ─────────────────────────────────────────────────────────────

const CX = 50, CY = 50, R = 36;
const LEVELS = [0.33, 0.66, 1.0];

function pt(i: number, val: number) {
  const angle = ((i * 60 - 90) * Math.PI) / 180;
  return { x: CX + R * val * Math.cos(angle), y: CY + R * val * Math.sin(angle) };
}

function poly(vals: number[]) {
  return vals.map((v, i) => {
    const p = pt(i, v);
    return `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`;
  }).join(" ") + " Z";
}

const MiniRadar = ({ data }: { data: number[] }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {LEVELS.map((l) => (
      <path key={l} d={poly(Array(6).fill(l))} fill="none" stroke="#e2e8f0" strokeWidth="0.8" />
    ))}
    {Array.from({ length: 6 }, (_, i) => {
      const end = pt(i, 1);
      return <line key={i} x1={CX} y1={CY} x2={end.x.toFixed(1)} y2={end.y.toFixed(1)} stroke="#e2e8f0" strokeWidth="0.8" />;
    })}
    <path d={poly(data)} fill="rgba(30,41,59,0.1)" stroke="#1e293b" strokeWidth="1.5" strokeLinejoin="round" />
    {data.map((v, i) => {
      const p = pt(i, v);
      return <circle key={i} cx={p.x} cy={p.y} r="2" fill="#1e293b" />;
    })}
  </svg>
);

// ─── Sub-Components ──────────────────────────────────────────────────────────

const StatusBadge = ({ status, date }: { status: "available" | "soon"; date: string | null }) => {
  if (status === "available") {
    return (
      <span className="flex items-center gap-1.5 text-xs text-emerald-600 shrink-0">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        Open
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1.5 text-xs text-amber-600 shrink-0">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
      {date}
    </span>
  );
};

const Dropdown = ({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50 transition-colors"
      >
        <span className="text-xs text-slate-400">{label}:</span>
        <span className="text-slate-700">{selected?.label}</span>
        <svg className={`w-3 h-3 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full mt-1 left-0 bg-white border border-slate-200 rounded-lg shadow-lg py-1 min-w-[160px] z-50">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => { onChange(opt.value); setOpen(false); }}
              className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                opt.value === value
                  ? "text-slate-900 bg-slate-50"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const DeveloperCard = ({ dev }: { dev: Developer }) => (
  <div className="group p-5 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-all flex flex-col">

    {/* Header */}
    <div className="flex items-start justify-between mb-3">
      <div>
        <div className="flex items-center gap-2 mb-0.5">
          <h3 className="text-sm font-semibold text-slate-800">{dev.handle}</h3>
          <span className="px-1.5 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-medium rounded">{dev.badge}</span>
        </div>
        <p className="text-xs text-slate-500">{dev.title}</p>
      </div>
      <StatusBadge status={dev.status} date={dev.availableDate} />
    </div>

    {/* Radar + Stats */}
    <div className="flex gap-3 mb-3 pb-3 border-b border-slate-100">
      <div className="w-20 h-20 shrink-0">
        <MiniRadar data={dev.radar} />
      </div>
      <div className="flex flex-col justify-center gap-1.5 flex-1">
        <div className="flex justify-between">
          <p className="text-[10px] text-slate-400">Signal</p>
          <p className="text-[10px] font-semibold text-slate-800">{dev.signalScore}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[10px] text-slate-400">Velocity</p>
          <p className="text-[10px] font-semibold text-slate-800">{dev.velocityPct}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[10px] text-slate-400">Vouches</p>
          <p className="text-[10px] font-semibold text-slate-800">{dev.vouchCount} verified</p>
        </div>
      </div>
    </div>

    {/* Skills */}
    <div className="flex flex-wrap gap-1.5 mb-3">
      {dev.skills.slice(0, 4).map((skill) => (
        <span key={skill} className="px-2 py-0.5 bg-slate-100 rounded text-xs text-slate-600">{skill}</span>
      ))}
    </div>

    {/* Vouch snippet */}
    <div className="bg-slate-50 rounded-lg p-3 mb-4 flex-1">
      <p className="text-[11px] text-slate-600 italic leading-relaxed mb-1">&ldquo;{dev.vouchQuote}&rdquo;</p>
      <p className="text-[10px] text-slate-400 font-medium">{dev.vouchSource}</p>
    </div>

    {/* CTA */}
    <div className="mt-auto">
      {dev.status === "available" ? (
        <>
          <button className="w-full px-4 py-2.5 bg-slate-800 text-white font-medium text-sm rounded-lg hover:bg-slate-700 transition-colors mb-1.5">
            Lock in 15 Minutes
          </button>
          <p className="text-[10px] text-slate-400 text-center">Double opt-in. Identity stays hidden until both confirm.</p>
        </>
      ) : (
        <button className="w-full px-4 py-2.5 border border-slate-200 text-slate-600 font-medium text-sm rounded-lg hover:bg-slate-50 transition-colors">
          Set Pulse · {dev.availableDate}
        </button>
      )}
    </div>
  </div>
);

// ─── Main Component ──────────────────────────────────────────────────────────

export default function LineupPage() {
  const [filters, setFilters] = useState<FilterState>({ ...DEFAULT_FILTERS });
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const updateFilter = <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const toggleStack = (stack: string) => {
    setFilters((prev) => ({
      ...prev,
      selectedStacks: prev.selectedStacks.includes(stack)
        ? prev.selectedStacks.filter((s) => s !== stack)
        : [...prev.selectedStacks, stack],
    }));
  };

  const clearFilters = () => setFilters({ ...DEFAULT_FILTERS });

  const hasActiveFilters =
    filters.availability !== "all" ||
    filters.selectedStacks.length > 0;

  const filteredDevelopers = useMemo(() => {
    let result = [...MOCK_DEVELOPERS];

    if (filters.availability !== "all") {
      const now = new Date();
      result = result.filter((dev) => {
        if (dev.status === "available") return true;
        const date = parseMockDate(dev.availableDate);
        if (!date) return false;
        const diff = (date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
        if (filters.availability === "this-week") return diff <= 7;
        if (filters.availability === "next-2-weeks") return diff <= 14;
        if (filters.availability === "30-days") return diff <= 30;
        return true;
      });
    }

    if (filters.selectedStacks.length > 0) {
      result = result.filter((dev) =>
        dev.skills.some((skill) => filters.selectedStacks.includes(skill))
      );
    }

    switch (filters.sortBy) {
      case "highest-signal":
        result.sort((a, b) => b.signalScore - a.signalScore);
        break;
      case "soonest":
        result.sort((a, b) => {
          if (a.status === "available" && b.status !== "available") return -1;
          if (b.status === "available" && a.status !== "available") return 1;
          const dateA = parseMockDate(a.availableDate);
          const dateB = parseMockDate(b.availableDate);
          if (dateA && dateB) return dateA.getTime() - dateB.getTime();
          return 0;
        });
        break;
      case "recently-updated":
        result.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());
        break;
      default:
        result.sort((a, b) => b.signalScore - a.signalScore);
    }

    return result;
  }, [filters]);

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans antialiased">
      {/* NAV */}
      <nav className="fixed top-0 w-full bg-[#fafafa]/80 backdrop-blur-xl border-b border-slate-200/60 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-base font-semibold tracking-tight text-slate-800">
            paddleout
          </Link>
          <div className="flex gap-2 sm:gap-4 items-center">
            <span className="text-xs text-slate-400 hidden md:block">Launching April 2026</span>
            <Link
              href="/lineup"
              className="text-sm font-medium text-slate-800 transition-colors px-3 py-2 rounded-lg bg-slate-100"
            >
              The Lineup
            </Link>
            <Link
              href="/builders"
              className="text-sm text-slate-500 hover:text-slate-800 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100 hidden sm:inline-block"
            >
              Claim Pass
            </Link>
          </div>
        </div>
      </nav>

      {/* FILTER BAR */}
      <div className="fixed top-[65px] left-0 right-0 bg-[#fafafa]/90 backdrop-blur-xl border-b border-slate-200/60 z-40">
        <div className="max-w-5xl mx-auto px-6 py-3">
          {/* Mobile toggle */}
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="md:hidden flex items-center gap-2 text-sm text-slate-600 mb-2"
          >
            Filters
            <svg className={`w-4 h-4 transition-transform ${mobileFiltersOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div className={`flex-wrap items-center gap-3 ${mobileFiltersOpen ? "flex" : "hidden md:flex"}`}>
            <Dropdown
              label="When"
              options={AVAILABILITY_OPTIONS}
              value={filters.availability}
              onChange={(v) => updateFilter("availability", v)}
            />
            {/* Stack multi-select */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs text-slate-400 mr-1">Stack:</span>
              {STACK_OPTIONS.map((stack) => (
                <button
                  key={stack}
                  onClick={() => toggleStack(stack)}
                  className={`px-2.5 py-1 rounded-lg text-xs transition-colors ${
                    filters.selectedStacks.includes(stack)
                      ? "bg-slate-800 text-white"
                      : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {stack}
                </button>
              ))}
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="px-2 py-1 text-xs text-slate-400 hover:text-slate-600 transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="pt-36 md:pt-40 px-6 max-w-5xl mx-auto pb-20">
        {/* Page header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900">
              The Lineup
            </h1>
            <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-medium rounded">
              Demo
            </span>
          </div>
          <p className="text-sm text-slate-500">
            Preview with sample data. Real builders coming April 2026.
          </p>
        </div>

        {/* Sort bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
          <span className="text-sm text-slate-500">
            {filteredDevelopers.length} builder{filteredDevelopers.length !== 1 ? "s" : ""}
          </span>
          <Dropdown
            label="Sort"
            options={SORT_OPTIONS}
            value={filters.sortBy}
            onChange={(v) => updateFilter("sortBy", v)}
          />
        </div>

        {/* Results grid */}
        {filteredDevelopers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDevelopers.map((dev) => (
              <DeveloperCard key={dev.id} dev={dev} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-slate-500 text-sm mb-3">No builders match your filters.</p>
            <button
              onClick={clearFilters}
              className="text-sm text-slate-600 hover:text-slate-800 transition-colors underline underline-offset-2"
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
