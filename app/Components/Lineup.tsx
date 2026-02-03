"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Developer {
  id: string;
  name: string;
  title: string;
  initials: string;
  status: "available" | "soon";
  availableDate: string | null;
  signalScore: number;
  velocityData: number[];
  skills: string[];
  hoursPerWeek: number;
  projectPreference: string;
  vouchCount: number;
  hourlyRate: number;
  lastUpdated: string;
}

interface FilterState {
  availability: string;
  hoursPerWeek: string;
  selectedStacks: string[];
  budgetMax: number;
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

const HOURS_OPTIONS = [
  { value: "all", label: "All" },
  { value: "10-20", label: "10–20 hrs" },
  { value: "20-40", label: "20–40 hrs" },
  { value: "40+", label: "40+ hrs" },
];

const SORT_OPTIONS = [
  { value: "best-match", label: "Best Match" },
  { value: "highest-signal", label: "Highest Signal" },
  { value: "soonest", label: "Soonest Available" },
  { value: "recently-updated", label: "Recently Updated" },
];

const DEFAULT_FILTERS: FilterState = {
  availability: "all",
  hoursPerWeek: "all",
  selectedStacks: [],
  budgetMax: 300,
  sortBy: "best-match",
};

// ─── Mock Data ───────────────────────────────────────────────────────────────

const MOCK_DEVELOPERS: Developer[] = [
  {
    id: "1",
    name: "Marcus Chen",
    title: "Senior Systems Engineer",
    initials: "MC",
    status: "available",
    availableDate: null,
    signalScore: 9.4,
    velocityData: [3, 4, 4, 5, 6, 5, 7, 7, 8, 8, 9, 10],
    skills: ["Rust", "Go", "TypeScript", "Docker"],
    hoursPerWeek: 40,
    projectPreference: "Distributed systems & infrastructure",
    vouchCount: 5,
    hourlyRate: 195,
    lastUpdated: "2026-01-30",
  },
  {
    id: "2",
    name: "Aisha Patel",
    title: "ML Platform Engineer",
    initials: "AP",
    status: "soon",
    availableDate: "March 15",
    signalScore: 9.8,
    velocityData: [2, 3, 5, 5, 6, 7, 7, 8, 9, 9, 10, 10],
    skills: ["Python", "Rust", "TypeScript", "AWS"],
    hoursPerWeek: 30,
    projectPreference: "AI/ML infrastructure",
    vouchCount: 7,
    hourlyRate: 225,
    lastUpdated: "2026-01-28",
  },
  {
    id: "3",
    name: "Jake Morrison",
    title: "Full-Stack Engineer",
    initials: "JM",
    status: "available",
    availableDate: null,
    signalScore: 8.6,
    velocityData: [4, 5, 5, 4, 6, 6, 7, 7, 8, 7, 9, 8],
    skills: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    hoursPerWeek: 20,
    projectPreference: "Product-focused SaaS builds",
    vouchCount: 3,
    hourlyRate: 150,
    lastUpdated: "2026-01-29",
  },
  {
    id: "4",
    name: "Lena Okoro",
    title: "Backend Architect",
    initials: "LO",
    status: "soon",
    availableDate: "March 1",
    signalScore: 9.2,
    velocityData: [5, 5, 6, 7, 6, 8, 7, 9, 8, 9, 10, 10],
    skills: ["Go", "Rust", "Python", "Kubernetes"],
    hoursPerWeek: 40,
    projectPreference: "High-throughput API systems",
    vouchCount: 6,
    hourlyRate: 210,
    lastUpdated: "2026-01-27",
  },
  {
    id: "5",
    name: "Tom Nakamura",
    title: "Frontend Engineer",
    initials: "TN",
    status: "available",
    availableDate: null,
    signalScore: 8.1,
    velocityData: [3, 3, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9],
    skills: ["React", "TypeScript", "Node.js"],
    hoursPerWeek: 15,
    projectPreference: "Design systems & component libraries",
    vouchCount: 2,
    hourlyRate: 120,
    lastUpdated: "2026-01-31",
  },
  {
    id: "6",
    name: "Sara Lindqvist",
    title: "DevOps & Infra Lead",
    initials: "SL",
    status: "soon",
    availableDate: "April 1",
    signalScore: 9.0,
    velocityData: [4, 5, 6, 5, 7, 7, 8, 8, 9, 8, 9, 10],
    skills: ["Go", "Python", "Kubernetes", "AWS"],
    hoursPerWeek: 30,
    projectPreference: "Cloud-native platform engineering",
    vouchCount: 4,
    hourlyRate: 185,
    lastUpdated: "2026-01-25",
  },
  {
    id: "7",
    name: "Diego Ramirez",
    title: "Smart Contract Engineer",
    initials: "DR",
    status: "soon",
    availableDate: "March 10",
    signalScore: 8.3,
    velocityData: [2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9],
    skills: ["Rust", "TypeScript", "Solidity"],
    hoursPerWeek: 20,
    projectPreference: "Web3 protocol development",
    vouchCount: 3,
    hourlyRate: 175,
    lastUpdated: "2026-01-26",
  },
  {
    id: "8",
    name: "Priya Kapoor",
    title: "Data Platform Engineer",
    initials: "PK",
    status: "available",
    availableDate: null,
    signalScore: 8.9,
    velocityData: [3, 4, 5, 6, 5, 7, 7, 8, 8, 9, 9, 10],
    skills: ["Python", "Go", "TypeScript", "AWS"],
    hoursPerWeek: 40,
    projectPreference: "Real-time data pipelines",
    vouchCount: 5,
    hourlyRate: 190,
    lastUpdated: "2026-02-01",
  },
  {
    id: "9",
    name: "Elias Brandt",
    title: "Mobile & Systems Engineer",
    initials: "EB",
    status: "soon",
    availableDate: "March 20",
    signalScore: 7.8,
    velocityData: [2, 2, 3, 4, 4, 5, 5, 6, 7, 7, 8, 8],
    skills: ["React", "TypeScript", "Swift"],
    hoursPerWeek: 15,
    projectPreference: "Cross-platform mobile apps",
    vouchCount: 2,
    hourlyRate: 140,
    lastUpdated: "2026-01-24",
  },
  {
    id: "10",
    name: "Nina Volkov",
    title: "Security Engineer",
    initials: "NV",
    status: "soon",
    availableDate: "April 15",
    signalScore: 9.6,
    velocityData: [4, 5, 6, 6, 7, 8, 8, 9, 9, 10, 10, 10],
    skills: ["Rust", "Go", "Python"],
    hoursPerWeek: 30,
    projectPreference: "Security audits & hardening",
    vouchCount: 8,
    hourlyRate: 250,
    lastUpdated: "2026-01-23",
  },
  {
    id: "11",
    name: "Owen Park",
    title: "API & Integrations Engineer",
    initials: "OP",
    status: "soon",
    availableDate: "March 5",
    signalScore: 7.5,
    velocityData: [3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8],
    skills: ["Node.js", "TypeScript", "Python", "Go"],
    hoursPerWeek: 20,
    projectPreference: "Third-party API integrations",
    vouchCount: 2,
    hourlyRate: 130,
    lastUpdated: "2026-01-22",
  },
  {
    id: "12",
    name: "Fatima Al-Rashid",
    title: "Compiler & Tooling Engineer",
    initials: "FA",
    status: "soon",
    availableDate: "May 1",
    signalScore: 7.2,
    velocityData: [1, 2, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8],
    skills: ["Rust", "Go", "TypeScript"],
    hoursPerWeek: 10,
    projectPreference: "Developer tooling & language infra",
    vouchCount: 1,
    hourlyRate: 75,
    lastUpdated: "2026-01-20",
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function parseMockDate(dateStr: string | null): Date | null {
  if (!dateStr) return null;
  const parsed = new Date(`${dateStr}, 2026`);
  return isNaN(parsed.getTime()) ? null : parsed;
}

// ─── Sub-Components ──────────────────────────────────────────────────────────

const VelocitySparkline = ({ data }: { data: number[] }) => {
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-[3px] h-10">
      {data.map((value, i) => (
        <div
          key={i}
          className="w-[4px] rounded-sm bg-white/20 group-hover:bg-white/30 transition-colors"
          style={{ height: `${(value / max) * 100}%` }}
        />
      ))}
    </div>
  );
};

const StatusBadge = ({ status, date }: { status: "available" | "soon"; date: string | null }) => {
  if (status === "available") {
    return (
      <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-green-500 shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        Now
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-yellow-500 shrink-0">
      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
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
        className="flex items-center gap-2 px-4 py-2 bg-white/[0.02] border border-white/10 rounded-lg text-xs text-gray-400 hover:bg-white/[0.04] hover:text-white transition-colors"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">{label}</span>
        <span className="text-white/80">{selected?.label}</span>
        <svg className={`w-3 h-3 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full mt-2 left-0 bg-[#141415] border border-white/10 rounded-xl shadow-2xl py-2 min-w-[200px] z-50">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => { onChange(opt.value); setOpen(false); }}
              className={`w-full text-left px-4 py-2.5 text-xs transition-colors ${
                opt.value === value
                  ? "text-white bg-white/[0.04]"
                  : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
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
  <div className="group p-6 bg-white/[0.02] border border-white/10 rounded-xl hover:bg-white/[0.04] transition-colors flex flex-col">
    {/* Header: photo + name + status */}
    <div className="flex items-start justify-between mb-5">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 bg-white text-black rounded-full flex items-center justify-center font-black text-xs shrink-0">
          {dev.initials}
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-bold tracking-tight truncate">{dev.name}</h3>
          <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest truncate">{dev.title}</p>
        </div>
      </div>
      <StatusBadge status={dev.status} date={dev.availableDate} />
    </div>

    {/* Signal + Sparkline */}
    <div className="flex items-end justify-between mb-5 pb-5 border-b border-white/5">
      <div>
        <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-1">Signal</p>
        <p className="text-3xl font-black tracking-tighter">{dev.signalScore}</p>
      </div>
      <VelocitySparkline data={dev.velocityData} />
    </div>

    {/* Skill tags */}
    <div className="flex flex-wrap gap-1.5 mb-4">
      {dev.skills.slice(0, 4).map((skill) => (
        <span
          key={skill}
          className="px-2.5 py-1 bg-white/[0.04] border border-white/5 rounded-full text-[10px] font-mono text-gray-400 uppercase tracking-wider"
        >
          {skill}
        </span>
      ))}
    </div>

    {/* Details */}
    <div className="space-y-2 mb-5 flex-1">
      <p className="text-xs text-gray-400">
        <span className="text-white font-semibold">{dev.hoursPerWeek} hrs/week</span>
        {dev.availableDate ? (
          <span> &middot; Available {dev.availableDate}</span>
        ) : (
          <span> &middot; Available now</span>
        )}
      </p>
      <p className="text-xs text-gray-500">
        Looking for: <span className="text-gray-400">{dev.projectPreference}</span>
      </p>
      <p className="text-xs text-gray-500">
        <span className="text-white/70">{dev.vouchCount}</span> verified vouches
      </p>
    </div>

    {/* CTA */}
    <div className="mt-auto">
      {dev.status === "available" ? (
        <button className="w-full px-4 py-3 bg-white text-black font-bold text-[10px] uppercase tracking-[0.15em] hover:bg-gray-200 transition-colors">
          Message
        </button>
      ) : (
        <button className="w-full px-4 py-3 border border-white/10 text-gray-400 font-bold text-[10px] uppercase tracking-[0.15em] hover:text-white hover:border-white/20 transition-colors">
          Set Pulse
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
    filters.hoursPerWeek !== "all" ||
    filters.selectedStacks.length > 0 ||
    filters.budgetMax < 300;

  const developersInBudget = MOCK_DEVELOPERS.filter((d) => d.hourlyRate <= filters.budgetMax).length;

  const filteredDevelopers = useMemo(() => {
    let result = [...MOCK_DEVELOPERS];

    // Availability
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

    // Hours
    if (filters.hoursPerWeek !== "all") {
      result = result.filter((dev) => {
        if (filters.hoursPerWeek === "10-20") return dev.hoursPerWeek >= 10 && dev.hoursPerWeek <= 20;
        if (filters.hoursPerWeek === "20-40") return dev.hoursPerWeek > 20 && dev.hoursPerWeek <= 40;
        if (filters.hoursPerWeek === "40+") return dev.hoursPerWeek >= 40;
        return true;
      });
    }

    // Stack
    if (filters.selectedStacks.length > 0) {
      result = result.filter((dev) =>
        dev.skills.some((skill) => filters.selectedStacks.includes(skill))
      );
    }

    // Budget
    if (filters.budgetMax < 300) {
      result = result.filter((dev) => dev.hourlyRate <= filters.budgetMax);
    }

    // Sort
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
    <div className="min-h-screen bg-[#0a0a0b] text-white font-sans selection:bg-white selection:text-black">
      {/* NAV */}
      <nav className="fixed top-0 w-full bg-[#0a0a0b]/80 backdrop-blur-xl border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-lg font-black tracking-tighter uppercase">
            PADDLEOUT
          </Link>
          <div className="flex gap-4 items-center">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest hidden md:block">
              System_v3.0
            </span>
            <Link
              href="/lineup"
              className="text-[10px] font-bold uppercase tracking-widest text-white transition-colors border border-white/20 px-4 py-2 rounded-md"
            >
              The Lineup
            </Link>
            <Link
              href="/claim"
              className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors border border-white/10 px-4 py-2 rounded-md"
            >
              Claim Pass
            </Link>
          </div>
        </div>
      </nav>

      {/* FILTER BAR */}
      <div className="fixed top-[65px] left-0 right-0 bg-[#0a0a0b]/90 backdrop-blur-xl border-b border-white/5 z-40">
        <div className="max-w-7xl mx-auto px-6 py-3">
          {/* Mobile toggle */}
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="md:hidden flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-2"
          >
            Filters
            <svg className={`w-3 h-3 transition-transform ${mobileFiltersOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div className={`flex-wrap items-center gap-4 ${mobileFiltersOpen ? "flex" : "hidden md:flex"}`}>
            <Dropdown
              label="When"
              options={AVAILABILITY_OPTIONS}
              value={filters.availability}
              onChange={(v) => updateFilter("availability", v)}
            />
            <Dropdown
              label="Hours"
              options={HOURS_OPTIONS}
              value={filters.hoursPerWeek}
              onChange={(v) => updateFilter("hoursPerWeek", v)}
            />

            {/* Stack multi-select */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mr-1">Stack</span>
              {STACK_OPTIONS.map((stack) => (
                <button
                  key={stack}
                  onClick={() => toggleStack(stack)}
                  className={`px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider transition-colors border ${
                    filters.selectedStacks.includes(stack)
                      ? "bg-white/10 border-white/20 text-white"
                      : "bg-white/[0.02] border-white/5 text-gray-500 hover:border-white/10 hover:text-gray-300"
                  }`}
                >
                  {stack}
                </button>
              ))}
            </div>

            {/* Budget slider */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Budget</span>
              <input
                type="range"
                min={50}
                max={300}
                step={10}
                value={filters.budgetMax}
                onChange={(e) => updateFilter("budgetMax", Number(e.target.value))}
                className="w-28 h-1 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
              />
              <span className="text-[10px] font-mono text-gray-400">${filters.budgetMax}/hr</span>
              <span className="text-[10px] font-mono text-green-500">{developersInBudget} in budget</span>
            </div>

            {/* Clear */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-gray-600 hover:text-gray-300 transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="pt-40 md:pt-44 px-6 max-w-7xl mx-auto pb-24">
        {/* Page header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none mb-3">
            The Lineup
          </h1>
          <p className="text-gray-500 text-[10px] font-mono uppercase tracking-[0.3em]">
            Verified builders. Real-time signal. Zero noise.
          </p>
        </div>

        {/* Sort bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
            {filteredDevelopers.length} builder{filteredDevelopers.length !== 1 ? "s" : ""} in the lineup
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredDevelopers.map((dev) => (
              <DeveloperCard key={dev.id} dev={dev} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="text-gray-500 text-sm mb-4">No builders match your current filters.</p>
            <button
              onClick={clearFilters}
              className="text-[10px] font-mono uppercase tracking-widest text-gray-400 hover:text-white transition-colors underline underline-offset-4"
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
