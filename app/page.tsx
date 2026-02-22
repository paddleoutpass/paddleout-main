import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans antialiased">

      {/* HEADER */}
      <nav className="fixed top-0 w-full bg-[#fafafa]/80 backdrop-blur-xl border-b border-slate-200/60 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-base font-semibold tracking-tight text-slate-800">paddleout</div>
          <div className="flex gap-2 sm:gap-4 items-center">
             <span className="text-xs text-slate-400 hidden md:block">Launching April 2026</span>
             <Link href="/lineup" className="text-sm text-slate-500 hover:text-slate-800 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100 hidden sm:inline-block">
                The Lineup
             </Link>
             <Link href="/builders" className="text-sm font-medium bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors">
                Claim Pass
             </Link>
          </div>
        </div>
      </nav>

      {/* 1. HERO */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.15] mb-5 text-slate-900">
              Your first 3 hires determine your culture.<br />Don&apos;t outsource them.
            </h1>
            <p className="text-slate-500 text-base md:text-lg max-w-lg leading-relaxed mb-6">
              Paddleout gives recently funded founders a verified roster of builders&mdash;searchable by stack, real-time availability, and work type. GitHub-backed proof they ship. No recruiter in the middle.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/founders" className="px-5 py-2.5 bg-slate-800 text-white font-medium text-sm rounded-lg hover:bg-slate-700 transition-all text-center">
                Find My Founding Team
              </Link>
              <Link href="/builders" className="px-5 py-2.5 border border-slate-200 text-slate-600 font-medium text-sm rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all text-center">
                Claim Your Handle — Free
              </Link>
            </div>
          </div>
          {/* MOCKUP PLACEHOLDER */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm aspect-[3/4] rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 flex flex-col items-center justify-center gap-3 text-center px-6">
              <div className="w-10 h-10 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center">
                <span className="text-slate-300 text-lg">+</span>
              </div>
              <p className="text-sm font-medium text-slate-400">Builder Pass Mockup</p>
              <p className="text-xs text-slate-300">Drop your design here</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LINEUP PREVIEW */}
      <section className="py-16 sm:py-20 px-6 max-w-5xl mx-auto border-t border-slate-200/60">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm text-slate-400 mb-1">The Lineup</p>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900">Here&apos;s what you&apos;ll search.</h2>
          </div>
          <Link href="/lineup" className="text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors hidden sm:block">
            Browse full demo →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {/* Card 1 */}
          <div className="p-5 bg-white border border-slate-200/80 rounded-xl flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-slate-800 text-white rounded-full flex items-center justify-center font-medium text-xs shrink-0">MC</div>
                <div>
                  <p className="text-sm font-medium text-slate-800">Marcus Chen</p>
                  <p className="text-xs text-slate-500">Systems Engineer</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 text-xs text-emerald-600 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Now
              </span>
            </div>
            <div className="flex items-end justify-between mb-4 pb-4 border-b border-slate-100">
              <div>
                <p className="text-xs text-slate-400 mb-0.5">Signal</p>
                <p className="text-2xl font-semibold text-slate-800">9.4</p>
              </div>
              <div className="flex items-end gap-[2px] h-8">
                {[3,4,4,5,6,5,7,7,8,8,9,10].map((v, i) => (
                  <div key={i} className="w-[3px] rounded-sm bg-slate-200" style={{ height: `${(v/10)*100}%` }} />
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {["Rust","Go","TypeScript","Docker"].map(s => (
                <span key={s} className="px-2 py-0.5 bg-slate-100 rounded text-xs text-slate-600">{s}</span>
              ))}
            </div>
            <p className="text-xs text-slate-500 mb-1"><span className="font-medium text-slate-700">40 hrs/week</span> · Available now</p>
            <p className="text-xs text-slate-500 mb-4">5 verified vouches</p>
            <button className="mt-auto w-full px-4 py-2.5 bg-slate-800 text-white font-medium text-sm rounded-lg">Message</button>
          </div>

          {/* Card 2 */}
          <div className="p-5 bg-white border border-slate-200/80 rounded-xl flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-slate-800 text-white rounded-full flex items-center justify-center font-medium text-xs shrink-0">AP</div>
                <div>
                  <p className="text-sm font-medium text-slate-800">Aisha Patel</p>
                  <p className="text-xs text-slate-500">ML Platform Engineer</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 text-xs text-amber-600 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />March 15
              </span>
            </div>
            <div className="flex items-end justify-between mb-4 pb-4 border-b border-slate-100">
              <div>
                <p className="text-xs text-slate-400 mb-0.5">Signal</p>
                <p className="text-2xl font-semibold text-slate-800">9.8</p>
              </div>
              <div className="flex items-end gap-[2px] h-8">
                {[2,3,5,5,6,7,7,8,9,9,10,10].map((v, i) => (
                  <div key={i} className="w-[3px] rounded-sm bg-slate-200" style={{ height: `${(v/10)*100}%` }} />
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {["Python","Rust","TypeScript","AWS"].map(s => (
                <span key={s} className="px-2 py-0.5 bg-slate-100 rounded text-xs text-slate-600">{s}</span>
              ))}
            </div>
            <p className="text-xs text-slate-500 mb-1"><span className="font-medium text-slate-700">30 hrs/week</span> · Available March 15</p>
            <p className="text-xs text-slate-500 mb-4">7 verified vouches</p>
            <button className="mt-auto w-full px-4 py-2.5 border border-slate-200 text-slate-600 font-medium text-sm rounded-lg">Set Pulse</button>
          </div>

          {/* Card 3 */}
          <div className="p-5 bg-white border border-slate-200/80 rounded-xl flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-slate-800 text-white rounded-full flex items-center justify-center font-medium text-xs shrink-0">PK</div>
                <div>
                  <p className="text-sm font-medium text-slate-800">Priya Kapoor</p>
                  <p className="text-xs text-slate-500">Data Platform Engineer</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 text-xs text-emerald-600 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Now
              </span>
            </div>
            <div className="flex items-end justify-between mb-4 pb-4 border-b border-slate-100">
              <div>
                <p className="text-xs text-slate-400 mb-0.5">Signal</p>
                <p className="text-2xl font-semibold text-slate-800">8.9</p>
              </div>
              <div className="flex items-end gap-[2px] h-8">
                {[3,4,5,6,5,7,7,8,8,9,9,10].map((v, i) => (
                  <div key={i} className="w-[3px] rounded-sm bg-slate-200" style={{ height: `${(v/10)*100}%` }} />
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {["Python","Go","TypeScript","AWS"].map(s => (
                <span key={s} className="px-2 py-0.5 bg-slate-100 rounded text-xs text-slate-600">{s}</span>
              ))}
            </div>
            <p className="text-xs text-slate-500 mb-1"><span className="font-medium text-slate-700">40 hrs/week</span> · Available now</p>
            <p className="text-xs text-slate-500 mb-4">5 verified vouches</p>
            <button className="mt-auto w-full px-4 py-2.5 bg-slate-800 text-white font-medium text-sm rounded-lg">Message</button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xs text-slate-400">Sample data · Real builders coming April 2026</p>
          <Link href="/lineup" className="text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors sm:hidden">
            Browse full demo →
          </Link>
        </div>
      </section>

      {/* 3. THE PROBLEM */}
      <section className="py-16 sm:py-20 px-6 max-w-5xl mx-auto border-t border-slate-200/60">
        <div className="mb-10">
          <p className="text-sm text-slate-400 mb-2">The problem</p>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight leading-tight text-slate-900">You closed the round. Now the clock starts.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          <div className="p-5 bg-white border border-slate-200/80 rounded-xl">
            <h4 className="text-sm font-medium mb-1.5 text-slate-800">You wanted to hire yourself. You can&apos;t.</h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              You pictured handpicking engineer #1. Instead you&apos;re drowning in AI-generated applications that all say the same thing.
            </p>
          </div>

          <div className="p-5 bg-white border border-slate-200/80 rounded-xl">
            <h4 className="text-sm font-medium mb-1.5 text-slate-800">You can&apos;t read the signal that matters.</h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              The best engineers prove it in code, not cover letters. You&apos;re making $150k decisions on vibes and a 30-minute interview.
            </p>
          </div>

          <div className="p-5 bg-white border border-slate-200/80 rounded-xl">
            <h4 className="text-sm font-medium mb-1.5 text-slate-800">Outsourcing costs $60k you don&apos;t have.</h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              Three engineers at $20k per recruiter fee. That&apos;s $60k out of your seed round before anyone writes a line of code.
            </p>
          </div>

          <div className="p-5 bg-white border border-slate-200/80 rounded-xl">
            <h4 className="text-sm font-medium mb-1.5 text-slate-800">Every funded startup just hit the same wall.</h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              Your entire batch closed funding the same month. All messaging the same engineers. Move fast or get leftovers.
            </p>
          </div>
        </div>
      </section>

      {/* 3. THE THREE PILLARS */}
      <section className="py-16 sm:py-20 px-6 max-w-5xl mx-auto border-t border-slate-200/60">
        <div className="mb-10">
          <p className="text-sm text-slate-400 mb-2">Why it works</p>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight leading-tight text-slate-900 mb-3">Built around the signals that actually matter.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          <div className="p-5 bg-white border border-slate-200/80 rounded-xl">
            <h4 className="text-sm font-medium mb-1.5 text-slate-800">Code, Not Keywords</h4>
            <p className="text-sm text-slate-500 leading-relaxed">One-click GitHub sync analyzes 30-day stack recency and commit velocity. We don&apos;t care what they did in 2019 — we show you what they&apos;re shipping right now.</p>
          </div>

          <div className="p-5 bg-white border border-slate-200/80 rounded-xl">
            <h4 className="text-sm font-medium mb-1.5 text-slate-800">Vouches with Teeth</h4>
            <p className="text-sm text-slate-500 leading-relaxed">Forget endorsements. Our vouches come from current teammates who verify real-world technical ownership. No noise, just signal.</p>
          </div>

          <div className="p-5 bg-white border border-slate-200/80 rounded-xl">
            <h4 className="text-sm font-medium mb-1.5 text-slate-800">Anti-Ghosting Protocol</h4>
            <p className="text-sm text-slate-500 leading-relaxed">Accountability is built into the flow. Builders who don&apos;t show up lose their status. We value your runway as much as you do.</p>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="py-16 sm:py-20 px-6 max-w-5xl mx-auto border-t border-slate-200/60">
        <div className="mb-10">
          <p className="text-sm text-slate-400 mb-2">How it works</p>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight leading-tight text-slate-900">Recruiter speed. Founder control.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* For Founders */}
          <div>
            <p className="text-sm font-medium text-slate-400 mb-5 pb-3 border-b border-slate-200/60">For Founders</p>
            <div className="space-y-6">
              <div className="flex gap-3">
                <div className="text-sm text-slate-300 shrink-0 w-5">01</div>
                <div>
                  <h4 className="text-sm font-medium text-slate-800 mb-0.5">Filter by Signal</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Browse builders sorted by stack recency and peer-verified impact. Only see engineers who match.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-sm text-slate-300 shrink-0 w-5">02</div>
                <div>
                  <h4 className="text-sm font-medium text-slate-800 mb-0.5">Direct Access</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">No middleman. No placement fees. Talk to engineers yourself.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-sm text-slate-300 shrink-0 w-5">03</div>
                <div>
                  <h4 className="text-sm font-medium text-slate-800 mb-0.5">Hire in Weeks</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">One-click booking with builders who are actually open to early-stage chaos.</p>
                </div>
              </div>
            </div>
          </div>

          {/* For Builders */}
          <div>
            <p className="text-sm font-medium text-slate-400 mb-5 pb-3 border-b border-slate-200/60">For Builders</p>
            <div className="space-y-6">
              <div className="flex gap-3">
                <div className="text-sm text-slate-300 shrink-0 w-5">01</div>
                <div>
                  <h4 className="text-sm font-medium text-slate-800 mb-0.5">Passive Discovery</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Toggle open. Let the right founders find you — no applications, no cold outreach.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-sm text-slate-300 shrink-0 w-5">02</div>
                <div>
                  <h4 className="text-sm font-medium text-slate-800 mb-0.5">Privacy First</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Read-only GitHub sync. We analyze patterns, never your IP.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-sm text-slate-300 shrink-0 w-5">03</div>
                <div>
                  <h4 className="text-sm font-medium text-slate-800 mb-0.5">Spam-Free Zone</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Only recently funded founders can reach out. No generic recruiter emails.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE MATH */}
      <section className="py-16 sm:py-20 px-6 border-t border-slate-200/60 bg-slate-100/50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-sm text-slate-400 mb-2">The math</p>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight leading-tight text-slate-900">Recruiter fees vs. staying hands-on.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-3 mb-6">
            <div className="p-5 bg-white border border-slate-200/80 rounded-xl">
              <p className="text-sm text-slate-400 mb-4">With a recruiter</p>
              <div className="space-y-1.5 mb-4">
                <p className="text-sm text-slate-600">$20,000+ per hire</p>
                <p className="text-sm text-slate-600">12-16 weeks to start</p>
                <p className="text-sm text-slate-600">They pick the candidates</p>
              </div>
              <p className="text-lg font-medium text-slate-800">$60k before v1 ships</p>
            </div>

            <div className="p-5 bg-slate-800 text-white rounded-xl">
              <p className="text-sm text-slate-400 mb-4">With Paddleout</p>
              <div className="space-y-1.5 mb-4">
                <p className="text-sm text-slate-300">$99-199/mo, cancel anytime</p>
                <p className="text-sm text-slate-300">3-4 weeks to shipping</p>
                <p className="text-sm text-slate-300">You stay in control</p>
              </div>
              <p className="text-lg font-medium">$300-600 total</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            <div className="p-5 bg-white border border-slate-200/80 rounded-xl">
              <p className="text-sm text-slate-400 mb-3">What a recruiter sends</p>
              <p className="text-sm text-slate-500 leading-relaxed italic mb-2">
                &quot;Senior Engineer with React and TypeScript expertise. Strong problem-solver. Team player.&quot;
              </p>
              <p className="text-xs text-slate-400">Could be anyone.</p>
            </div>

            <div className="p-5 bg-slate-800 text-white rounded-xl">
              <p className="text-sm text-slate-400 mb-3">What you see on Paddleout</p>
              <div className="space-y-1 text-sm text-slate-300">
                <p>TypeScript: 150 commits, last 3 months</p>
                <p>Signal Score: 8.7 · 3 verified vouches</p>
                <p>Available: 40 hrs/week, starting Monday</p>
              </div>
              <p className="mt-3 text-xs text-slate-400">You know before you message.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY EARLY-STAGE */}
      <section className="py-16 sm:py-20 px-6 max-w-5xl mx-auto border-t border-slate-200/60">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm text-slate-400 mb-2">Why early-stage</p>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight leading-tight text-slate-900 mb-4">Hands-on today. Scalable tomorrow.</h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Right now you&apos;re hiring engineer #1, #2, #3. You should be in the room for that. Paddleout is founder-led hiring that actually scales.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-slate-300 text-sm mt-0.5">—</span>
                <p className="text-sm text-slate-500">Hire #1-3 yourself with GitHub-backed proof</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-slate-300 text-sm mt-0.5">—</span>
                <p className="text-sm text-slate-500">Skip the 3-month recruiter cycle</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-slate-300 text-sm mt-0.5">—</span>
                <p className="text-sm text-slate-500">Build hiring muscle before you need to scale</p>
              </div>
            </div>
          </div>

          <div className="p-5 bg-white border border-slate-200/80 rounded-xl">
            <h4 className="text-sm font-medium mb-2 text-slate-800">The Founder Flywheel</h4>
            <p className="text-sm text-slate-500 leading-relaxed mb-3">
              More funded startups on Paddleout means better opportunities for builders. Better builders attract more founders.
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              The first company in each batch to adopt gets first pick of the roster.
            </p>
          </div>
        </div>
      </section>

      {/* 7. FOOTER CTA */}
      <footer className="py-16 sm:py-20 px-6 border-t border-slate-200/60 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-medium mb-3 tracking-tight text-slate-900 text-center">Recruiter speed. Founder control.</h2>
          <p className="text-center text-slate-500 text-sm mb-10">Built for the 0-to-1 struggle. Whether you just closed your seed or you&apos;re scaling a YC batch.</p>

          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
            <div className="p-5 bg-white border border-slate-200/80 rounded-xl">
              <p className="text-sm font-medium text-slate-800 mb-2">Recently Funded?</p>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                Early access for seed and Series A founders hiring their first engineers.
              </p>
              <Link href="/founders" className="text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors">
                Join the Beta →
              </Link>
            </div>

            <div className="p-5 bg-white border border-slate-200/80 rounded-xl">
              <p className="text-sm font-medium text-slate-800 mb-2">Ready to Ship?</p>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                Free forever. Let funded founders find you through your code.
              </p>
              <Link href="/builders" className="text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors">
                Claim Your Handle →
              </Link>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-slate-200/60">
            <p className="text-sm text-slate-400">Paddleout © 2026</p>
            <a href="mailto:info@paddleout.io" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">
              info@paddleout.io
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
