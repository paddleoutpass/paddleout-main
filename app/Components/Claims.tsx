"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ClaimPage() {
  const [handle, setHandle] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend
    setSubmitted(true);
  };

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
              Launching March 2026
            </span>
            <Link
              href="/lineup"
              className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors border border-white/10 px-4 py-2 rounded-md"
            >
              The Lineup
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN */}
      <main className="pt-32 sm:pt-40 px-6 max-w-7xl mx-auto pb-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Copy */}
          <div>
            <Link
              href="/"
              className="text-[10px] font-mono uppercase tracking-widest text-gray-500 hover:text-white transition-colors mb-8 inline-block"
            >
              &larr; Back
            </Link>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-6">
              Let your code<br />do the talking.
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
              Funded founders are searching for engineers who ship. Claim your @handle, connect GitHub, and let your commit history speak louder than any resume.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-1">Claim your @handle</h3>
                  <p className="text-sm text-gray-500">Reserve your username. First come, first served.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-1">Connect GitHub</h3>
                  <p className="text-sm text-gray-500">We generate your Signal Score, velocity graph, and stack breakdown automatically.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-1">Get found by founders</h3>
                  <p className="text-sm text-gray-500">Recently funded startups search The Lineup and message you directly. No recruiter middleman.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
              <p className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-2">The deal</p>
              <p className="text-sm text-gray-400">
                <span className="text-white font-semibold">Free forever for builders.</span> No fees. No hidden costs. Your Pass updates automatically as you ship. Founders pay to search&mdash;you just build.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="md:pt-16">
            {!submitted ? (
              <div className="p-8 bg-white/[0.02] border border-white/10 rounded-2xl">
                <h2 className="text-xl font-black tracking-tight uppercase mb-2">Claim Your Pass</h2>
                <p className="text-sm text-gray-500 mb-8">Reserve your handle. We&apos;ll notify you when GitHub connect goes live.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-2">
                      Your handle
                    </label>
                    <div className="flex items-center bg-white/[0.02] border border-white/10 rounded-lg overflow-hidden focus-within:border-white/20 transition-colors">
                      <span className="px-4 text-gray-500 text-sm">@</span>
                      <input
                        type="text"
                        value={handle}
                        onChange={(e) => setHandle(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ""))}
                        placeholder="yourhandle"
                        className="flex-1 bg-transparent py-3 pr-4 text-white placeholder:text-gray-600 outline-none text-sm"
                        required
                      />
                    </div>
                    <p className="text-[10px] text-gray-600 mt-2">Letters, numbers, and underscores only</p>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full bg-white/[0.02] border border-white/10 rounded-lg py-3 px-4 text-white placeholder:text-gray-600 outline-none text-sm focus:border-white/20 transition-colors"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-white text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-gray-200 transition-colors"
                  >
                    Reserve @{handle || "handle"}
                  </button>
                </form>

                <p className="text-[10px] text-gray-600 mt-6 text-center">
                  By claiming, you agree to let funded founders discover you through your public GitHub activity.
                </p>
              </div>
            ) : (
              <div className="p-8 bg-white/[0.02] border border-white/10 rounded-2xl text-center">
                <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-xl font-black tracking-tight uppercase mb-2">@{handle} is yours.</h2>
                <p className="text-sm text-gray-500 mb-6">
                  We&apos;ll email you at {email} when GitHub connect goes live. You&apos;ll be among the first in The Lineup.
                </p>
                <Link
                  href="/lineup"
                  className="inline-block px-8 py-4 border border-white/20 font-bold text-xs uppercase tracking-[0.2em] hover:bg-white/5 transition-colors"
                >
                  Preview The Lineup
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em]">
            Paddleout &copy; 2026
          </p>
          <a href="mailto:contact@paddleout.io" className="text-[10px] font-mono text-gray-600 uppercase tracking-widest hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}
