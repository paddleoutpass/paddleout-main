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
    <div className="flex items-end gap-[2px] h-8">
      {data.map((value, i) => (
        <div
          key={i}
          className="w-[3px] rounded-sm bg-slate-200 group-hover:bg-slate-300 transition-colors"
          style={{ height: `${(value / max) * 100}%` }}
        />
      ))}
    </div>
  );
};

const StatusBadge = ({ status, date }: { status: "available" | "soon"; date: string | null }) => {
  if (status === "available") {
    return (
      <span className="flex items-center gap-1.5 text-xs text-emerald-600 shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        Now
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
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-3 min-w-0">
        <div className="h-10 w-10 bg-slate-800 text-white rounded-full flex items-center justify-center font-medium text-xs shrink-0">
          {dev.initials}
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-medium text-slate-800 truncate">{dev.name}</h3>
          <p className="text-xs text-slate-500 truncate">{dev.title}</p>
        </div>
      </div>
      <StatusBadge status={dev.status} date={dev.availableDate} />
    </div>

    {/* Signal + Sparkline */}
    <div className="flex items-end justify-between mb-4 pb-4 border-b border-slate-100">
      <div>
        <p className="text-xs text-slate-400 mb-0.5">Signal</p>
        <p className="text-2xl font-semibold text-slate-800">{dev.signalScore}</p>
      </div>
      <VelocitySparkline data={dev.velocityData} />
    </div>

    {/* Skill tags */}
    <div className="flex flex-wrap gap-1.5 mb-3">
      {dev.skills.slice(0, 4).map((skill) => (
        <span
          key={skill}
          className="px-2 py-0.5 bg-slate-100 rounded text-xs text-slate-600"
        >
          {skill}
        </span>
      ))}
    </div>

    {/* Details */}
    <div className="space-y-1.5 mb-4 flex-1">
      <p className="text-xs text-slate-500">
        <span className="text-slate-700 font-medium">{dev.hoursPerWeek} hrs/week</span>
        {dev.availableDate ? ` · Available ${dev.availableDate}` : " · Available now"}
      </p>
      <p className="text-xs text-slate-500">
        Looking for: {dev.projectPreference}
      </p>
      <p className="text-xs text-slate-500">
        {dev.vouchCount} verified vouches
      </p>
    </div>

    {/* CTA */}
    <div className="mt-auto">
      {dev.status === "available" ? (
        <button className="w-full px-4 py-2.5 bg-slate-800 text-white font-medium text-sm rounded-lg hover:bg-slate-700 transition-colors">
          Message
        </button>
      ) : (
        <button className="w-full px-4 py-2.5 border border-slate-200 text-slate-600 font-medium text-sm rounded-lg hover:bg-slate-50 transition-colors">
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

    if (filters.hoursPerWeek !== "all") {
      result = result.filter((dev) => {
        if (filters.hoursPerWeek === "10-20") return dev.hoursPerWeek >= 10 && dev.hoursPerWeek <= 20;
        if (filters.hoursPerWeek === "20-40") return dev.hoursPerWeek > 20 && dev.hoursPerWeek <= 40;
        if (filters.hoursPerWeek === "40+") return dev.hoursPerWeek >= 40;
        return true;
      });
    }

    if (filters.selectedStacks.length > 0) {
      result = result.filter((dev) =>
        dev.skills.some((skill) => filters.selectedStacks.includes(skill))
      );
    }

    if (filters.budgetMax < 300) {
      result = result.filter((dev) => dev.hourlyRate <= filters.budgetMax);
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
            <span className="text-xs text-slate-400 hidden md:block">Launching March 2026</span>
            <Link
              href="/lineup"
              className="text-sm font-medium text-slate-800 transition-colors px-3 py-2 rounded-lg bg-slate-100"
            >
              The Lineup
            </Link>
            <Link
              href="/claim"
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
            <Dropdown
              label="Hours"
              options={HOURS_OPTIONS}
              value={filters.hoursPerWeek}
              onChange={(v) => updateFilter("hoursPerWeek", v)}
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

            {/* Budget slider */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Budget:</span>
              <input
                type="range"
                min={50}
                max={300}
                step={10}
                value={filters.budgetMax}
                onChange={(e) => updateFilter("budgetMax", Number(e.target.value))}
                className="w-24 h-1 bg-slate-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-slate-800 [&::-webkit-slider-thumb]:cursor-pointer"
              />
              <span className="text-xs text-slate-600">${filters.budgetMax}/hr</span>
              <span className="text-xs text-emerald-600">{developersInBudget} in budget</span>
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
          <h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 mb-1">
            The Lineup
          </h1>
          <p className="text-sm text-slate-500">
            Verified builders. Real-time signal.
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
