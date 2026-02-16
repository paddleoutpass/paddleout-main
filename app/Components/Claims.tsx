"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ClaimPage() {
  const [handle, setHandle] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans antialiased">
      {/* NAV */}
      <nav className="fixed top-0 w-full bg-[#fafafa]/80 backdrop-blur-xl border-b border-slate-200/60 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-base font-semibold tracking-tight text-slate-800">
            paddleout
          </Link>
          <div className="flex gap-4 items-center">
            <span className="text-xs text-slate-400 hidden md:block">Launching March 2026</span>
            <Link href="/lineup" className="text-sm text-slate-500 hover:text-slate-800 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100">
              The Lineup
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN */}
      <main className="pt-28 sm:pt-36 px-6 max-w-5xl mx-auto pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Copy */}
          <div>
            <Link href="/" className="text-sm text-slate-400 hover:text-slate-600 transition-colors mb-6 inline-block">
              ← Back
            </Link>

            <h1 className="text-3xl sm:text-4xl font-medium tracking-tight leading-[1.15] mb-4 text-slate-900">
              Let your code<br />do the talking.
            </h1>

            <p className="text-slate-500 text-base leading-relaxed mb-8 max-w-md">
              Funded founders are searching for engineers who ship. Claim your @handle, connect GitHub, and let your commit history speak louder than any resume.
            </p>

            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-slate-100 border border-slate-200 rounded flex items-center justify-center shrink-0 text-xs font-medium text-slate-500">1</div>
                <div>
                  <h3 className="text-sm font-medium text-slate-800 mb-0.5">Claim your @handle</h3>
                  <p className="text-sm text-slate-500">Reserve your username. First come, first served.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-slate-100 border border-slate-200 rounded flex items-center justify-center shrink-0 text-xs font-medium text-slate-500">2</div>
                <div>
                  <h3 className="text-sm font-medium text-slate-800 mb-0.5">Connect GitHub</h3>
                  <p className="text-sm text-slate-500">We generate your Signal Score and velocity graph automatically.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-slate-100 border border-slate-200 rounded flex items-center justify-center shrink-0 text-xs font-medium text-slate-500">3</div>
                <div>
                  <h3 className="text-sm font-medium text-slate-800 mb-0.5">Get found by founders</h3>
                  <p className="text-sm text-slate-500">Funded startups search The Lineup and message you directly.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl">
              <p className="text-xs text-slate-400 mb-1">The deal</p>
              <p className="text-sm text-slate-600">
                <span className="font-medium text-slate-800">Free forever for builders.</span> No fees. Your Pass updates automatically as you ship.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="md:pt-12">
            {!submitted ? (
              <div className="p-6 bg-white border border-slate-200 rounded-xl">
                <h2 className="text-lg font-medium tracking-tight text-slate-900 mb-1">Claim Your Pass</h2>
                <p className="text-sm text-slate-500 mb-6">Reserve your handle. We&apos;ll notify you when GitHub connect goes live.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs text-slate-500 mb-1.5">Your handle</label>
                    <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg overflow-hidden focus-within:border-slate-300 focus-within:ring-1 focus-within:ring-slate-200 transition-all">
                      <span className="px-3 text-slate-400 text-sm">@</span>
                      <input
                        type="text"
                        value={handle}
                        onChange={(e) => setHandle(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ""))}
                        placeholder="yourhandle"
                        className="flex-1 bg-transparent py-2.5 pr-3 text-slate-800 placeholder:text-slate-400 outline-none text-sm"
                        required
                      />
                    </div>
                    <p className="text-xs text-slate-400 mt-1.5">Letters, numbers, and underscores only</p>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-500 mb-1.5">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-3 text-slate-800 placeholder:text-slate-400 outline-none text-sm focus:border-slate-300 focus:ring-1 focus:ring-slate-200 transition-all"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-5 py-2.5 bg-slate-800 text-white font-medium text-sm rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    Reserve @{handle || "handle"}
                  </button>
                </form>

                <p className="text-xs text-slate-400 mt-4 text-center">
                  By claiming, you agree to let founders discover you through your public GitHub activity.
                </p>
              </div>
            ) : (
              <div className="p-6 bg-white border border-slate-200 rounded-xl text-center">
                <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-lg font-medium tracking-tight text-slate-900 mb-1">@{handle} is yours.</h2>
                <p className="text-sm text-slate-500 mb-5">
                  We&apos;ll email you at {email} when GitHub connect goes live.
                </p>
                <Link href="/lineup" className="text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors">
                  Preview The Lineup →
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200/60 py-6 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-slate-400">Paddleout © 2026</p>
          <a href="mailto:contact@paddleout.io" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">
            contact@paddleout.io
          </a>
        </div>
      </footer>
    </div>
  );
}
