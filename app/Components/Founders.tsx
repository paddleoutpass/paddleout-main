import React from "react";
import Link from "next/link";

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans antialiased">

      {/* NAV */}
      <nav className="fixed top-0 w-full bg-[#fafafa]/80 backdrop-blur-xl border-b border-slate-200/60 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-base font-semibold tracking-tight text-slate-800">
            paddleout
          </Link>
          <div className="flex gap-4 items-center">
            <span className="text-xs text-slate-400 hidden md:block">Launching April 2026</span>
            <Link href="/lineup" className="text-sm text-slate-500 hover:text-slate-800 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100">
              The Lineup
            </Link>
            <Link href="/builders" className="text-sm font-medium bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors">
              For Builders
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-28 sm:pt-36 pb-20">

        {/* HERO */}
        <section className="px-6 max-w-5xl mx-auto mb-20">
          <Link href="/" className="text-sm text-slate-400 hover:text-slate-600 transition-colors mb-8 inline-block">
            ← Back
          </Link>
          <div className="max-w-3xl">
            <p className="text-sm text-slate-400 mb-3">For recently funded founders</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.15] mb-5 text-slate-900">
              Technical Hiring is<br />Broken by Design.
            </h1>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              Stop losing months of runway to 20% &ldquo;placement fees&rdquo; and static 2021 resumes. Access the private network of Founding Engineers verified by code velocity and peer-vouched impact.
            </p>
            <a
              href="#apply"
              className="inline-flex px-6 py-3 bg-slate-800 text-white font-medium text-sm rounded-lg hover:bg-slate-700 transition-colors"
            >
              Apply for Founder Access
            </a>
          </div>
        </section>

        {/* 1. THE PROBLEM */}
        <section className="px-6 py-16 sm:py-20 border-t border-slate-200/60 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <p className="text-sm text-slate-400 mb-2">The problem</p>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900">The high cost of business as usual.</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              <div className="p-6 bg-[#fafafa] border border-slate-200/80 rounded-xl">
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-3">The Incentive Gap</p>
                <h3 className="text-sm font-medium text-slate-800 mb-2">Recruiters are paid to close a seat — not find your 10-year partner.</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  They optimize for the fee. You optimize for the product. Those are not the same goal, and you&apos;re the one paying for the misalignment.
                </p>
              </div>

              <div className="p-6 bg-[#fafafa] border border-slate-200/80 rounded-xl">
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-3">The Equity Drain</p>
                <h3 className="text-sm font-medium text-slate-800 mb-2">Every $30k to a headhunter is 120 days of burned runway.</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  That&apos;s a more competitive sign-on bonus for the actual talent — or four months of product velocity before you&apos;ve hired anyone.
                </p>
              </div>

              <div className="p-6 bg-[#fafafa] border border-slate-200/80 rounded-xl">
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-3">The Signal Vacuum</p>
                <h3 className="text-sm font-medium text-slate-800 mb-2">Resumes are easily gamed. Interviews are theater.</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  You&apos;re spending 10+ hours a week interviewing &ldquo;Seniors&rdquo; who haven&apos;t shipped a meaningful PR in six months. The signal you need isn&apos;t on the resume.
                </p>
              </div>

              <div className="p-6 bg-[#fafafa] border border-slate-200/80 rounded-xl">
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-3">The Passive Barrier</p>
                <h3 className="text-sm font-medium text-slate-800 mb-2">The engineers you actually want aren&apos;t on job boards.</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  The ones scaling Stripe or Vercel avoid public listings to escape recruiter noise. If you&apos;re only searching where everyone else looks, you&apos;re getting everyone else&apos;s leftovers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. THE SOLUTION */}
        <section className="px-6 py-16 sm:py-20 border-t border-slate-200/60">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <p className="text-sm text-slate-400 mb-2">The solution</p>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900">Data-driven vetting. No guesswork.</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              <div className="p-6 bg-white border border-slate-200/80 rounded-xl">
                <h3 className="text-sm font-medium text-slate-800 mb-2">Verified Velocity</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  View anonymized 30-day commit heatmaps and Stack Radar graphs to identify builders currently working at high intensity. See who&apos;s shipping daily — before you ever send a message.
                </p>
              </div>

              <div className="p-6 bg-white border border-slate-200/80 rounded-xl">
                <h3 className="text-sm font-medium text-slate-800 mb-2">Stack Recency</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Filter by builders actively pushing code in your specific stack — Next.js 15, Rust, LangGraph, whatever you need. No &ldquo;ramping up&rdquo; period. They&apos;re already building in it.
                </p>
              </div>

              <div className="p-6 bg-white border border-slate-200/80 rounded-xl">
                <h3 className="text-sm font-medium text-slate-800 mb-2">Peer-Vouched Impact</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Read unedited technical testimonials from current teammates — not LinkedIn endorsements. Know their 0-to-1 grit, their crisis management, their ownership. Before the first call.
                </p>
              </div>

              <div className="p-6 bg-slate-800 text-white rounded-xl">
                <h3 className="text-sm font-medium text-white mb-2">The Blinded Identity Model</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We redact names and companies until a mutual intro is requested. This lets us host elite, currently-employed talent that isn&apos;t on LinkedIn — and will never be, unless the timing is right.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. THE EXECUTION */}
        <section className="px-6 py-16 sm:py-20 border-t border-slate-200/60 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <p className="text-sm text-slate-400 mb-2">How it works</p>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900">From signal to conversation in 48 hours.</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-3">
              <div className="p-6 bg-[#fafafa] border border-slate-200/80 rounded-xl">
                <div className="text-sm text-slate-300 mb-3">01</div>
                <h3 className="text-sm font-medium text-slate-800 mb-2">Direct-to-Calendar</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Skip the introductory email chains. Book a 15-minute technical intro directly through the platform based on the builder&apos;s verified availability.
                </p>
              </div>

              <div className="p-6 bg-[#fafafa] border border-slate-200/80 rounded-xl">
                <div className="text-sm text-slate-300 mb-3">02</div>
                <h3 className="text-sm font-medium text-slate-800 mb-2">Double Opt-In</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  You request access based on performance data. They accept based on your mission and funding stage. Both sides confirm before any details are shared.
                </p>
              </div>

              <div className="p-6 bg-[#fafafa] border border-slate-200/80 rounded-xl">
                <div className="text-sm text-slate-300 mb-3">03</div>
                <h3 className="text-sm font-medium text-slate-800 mb-2">Anti-Ghosting Protocol</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  We monitor candidate reliability. Builders who fail to attend confirmed meetings are removed from the network. We value your runway as much as you do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. DAY ZERO ADVANTAGE */}
        <section className="px-6 py-16 sm:py-20 border-t border-slate-200/60">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm text-slate-400 mb-3">The Day Zero advantage</p>
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 mb-5">
                  You raised to build.<br />Not to recruit.
                </h2>
                <p className="text-slate-500 text-base leading-relaxed mb-6">
                  You didn&apos;t raise capital to become a full-time recruiter. Paddleout reduces your time-to-interview from weeks to under 48 hours — so you can get back to the reason you raised in the first place.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-slate-300 text-sm mt-0.5">—</span>
                    <p className="text-sm text-slate-500">Your first 3 hires set your culture. Stay in the room for that.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-300 text-sm mt-0.5">—</span>
                    <p className="text-sm text-slate-500">Every week you spend hiring is a week you&apos;re not building.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-300 text-sm mt-0.5">—</span>
                    <p className="text-sm text-slate-500">The best engineers move fast. So should you.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white border border-slate-200/80 rounded-xl">
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <p className="text-xs text-slate-400 mb-1">Traditional recruiter</p>
                    <p className="text-lg font-semibold text-slate-800">12–16 wks</p>
                    <p className="text-xs text-slate-500">to first hire</p>
                  </div>
                  <div className="p-4 bg-slate-800 rounded-lg">
                    <p className="text-xs text-slate-400 mb-1">Paddleout</p>
                    <p className="text-lg font-semibold text-white">&lt; 48 hrs</p>
                    <p className="text-xs text-slate-400">to first interview</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <p className="text-xs text-slate-400 mb-1">Recruiter fee</p>
                    <p className="text-lg font-semibold text-slate-800">$30k+</p>
                    <p className="text-xs text-slate-500">per hire</p>
                  </div>
                  <div className="p-4 bg-slate-800 rounded-lg">
                    <p className="text-xs text-slate-400 mb-1">Paddleout</p>
                    <p className="text-lg font-semibold text-white">$0</p>
                    <p className="text-xs text-slate-400">placement fees. Ever.</p>
                  </div>
                </div>
                <p className="text-xs text-slate-400 text-center">Exclusively for venture-backed founders.</p>
              </div>
            </div>
          </div>
        </section>

        {/* APPLY */}
        <section id="apply" className="px-6 py-16 sm:py-20 border-t border-slate-200/60 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 mb-3">
                  Apply for Founder Access
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Exclusively for venture-backed founders hiring their first engineers. No placement fees. Ever.
                </p>
                <div className="p-4 bg-slate-800 text-white rounded-xl">
                  <p className="text-xs text-slate-400 mb-1">Early access includes</p>
                  <div className="space-y-1.5 mt-2">
                    <p className="text-sm text-slate-300">— Priority access to The Lineup</p>
                    <p className="text-sm text-slate-300">— Direct-to-calendar booking</p>
                    <p className="text-sm text-slate-300">— Stack Radar + Signal Score filtering</p>
                    <p className="text-sm text-slate-300">— No per-hire fees, ever</p>
                  </div>
                </div>
              </div>

              <div>
                <iframe
                  src="https://tally.so/embed/lby6Qp?alignLeft=1&hideTitle=1&transparentBackground=1"
                  width="100%"
                  height="500"
                  frameBorder="0"
                  title="Apply for Founder Access"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200/60 py-6 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-slate-400">Paddleout © 2026</p>
          <a href="mailto:info@paddleout.io" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">
            info@paddleout.io
          </a>
        </div>
      </footer>
    </div>
  );
}
