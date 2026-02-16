import React from 'react';
import Link from 'next/link';
import BuilderPass from './Components/BuilderPass';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans antialiased">

      {/* HEADER */}
      <nav className="fixed top-0 w-full bg-[#fafafa]/80 backdrop-blur-xl border-b border-slate-200/60 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-base font-semibold tracking-tight text-slate-800">paddleout</div>
          <div className="flex gap-2 sm:gap-4 items-center">
             <span className="text-xs text-slate-400 hidden md:block">Launching March 2026</span>
             <Link href="/lineup" className="text-sm text-slate-500 hover:text-slate-800 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100 hidden sm:inline-block">
                The Lineup
             </Link>
             <Link href="/claim" className="text-sm font-medium bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors">
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
              You just got funded.<br />Now hire the team.
            </h1>
            <p className="text-slate-500 text-base md:text-lg max-w-lg leading-relaxed mb-6">
              Handpick your first engineers without recruiters. Paddleout gives you a verified roster of builders with GitHub-backed proof they ship&mdash;searchable by stack, availability, and work type.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/claim" className="px-5 py-2.5 bg-slate-800 text-white font-medium text-sm rounded-lg hover:bg-slate-700 transition-all text-center">
                Claim your Pass
              </Link>
              <Link href="/lineup" className="px-5 py-2.5 border border-slate-200 text-slate-600 font-medium text-sm rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all text-center">
                Join the Waitlist
              </Link>
            </div>
            <p className="text-sm text-slate-400 mt-4">Free for builders, forever.</p>
          </div>
          <div className="flex items-center justify-center">
            <BuilderPass />
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
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

      {/* 3. THE SOLUTION */}
      <section className="py-16 sm:py-20 px-6 max-w-5xl mx-auto border-t border-slate-200/60">
        <div className="mb-10">
          <p className="text-sm text-slate-400 mb-2">The solution</p>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight leading-tight text-slate-900 mb-3">Stay hands-on. Skip the recruiter.</h2>
          <p className="text-slate-500 text-base max-w-xl leading-relaxed">
            Builder Passes give you verified candidates matched to your stack&mdash;without the $20k invoice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          <div className="p-5 bg-white border border-slate-200/80 rounded-xl">
            <h4 className="text-sm font-medium mb-1.5 text-slate-800">Signal Score</h4>
            <p className="text-sm text-slate-500 leading-relaxed">One number that tells you if someone ships. Calculated from commit velocity and peer vouches.</p>
          </div>

          <div className="p-5 bg-white border border-slate-200/80 rounded-xl">
            <h4 className="text-sm font-medium mb-1.5 text-slate-800">Velocity Graph</h4>
            <p className="text-sm text-slate-500 leading-relaxed">12 weeks of real GitHub activity. See whether someone is shipping daily or coasting.</p>
          </div>

          <div className="p-5 bg-white border border-slate-200/80 rounded-xl">
            <h4 className="text-sm font-medium mb-1.5 text-slate-800">Stack Recency</h4>
            <p className="text-sm text-slate-500 leading-relaxed">See what they&apos;re building with today, not what&apos;s on a three-year-old resume.</p>
          </div>

          <div className="p-5 bg-white border border-slate-200/80 rounded-xl">
            <h4 className="text-sm font-medium mb-1.5 text-slate-800">Real-Time Availability</h4>
            <p className="text-sm text-slate-500 leading-relaxed">See who&apos;s available this week. Get notified when someone opens up.</p>
          </div>

          <div className="p-5 bg-white border border-slate-200/80 rounded-xl">
            <h4 className="text-sm font-medium mb-1.5 text-slate-800">Peer Vouches</h4>
            <p className="text-sm text-slate-500 leading-relaxed">Structured feedback from people who shipped alongside them.</p>
          </div>

          <div className="p-5 bg-white border border-slate-200/80 rounded-xl">
            <h4 className="text-sm font-medium mb-1.5 text-slate-800">Private Repo Proof</h4>
            <p className="text-sm text-slate-500 leading-relaxed">Verified outcomes from proprietary projects, without exposing code.</p>
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
                  <h4 className="text-sm font-medium text-slate-800 mb-0.5">Search The Lineup</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Filter by stack and timeline. Only see engineers who match.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-sm text-slate-300 shrink-0 w-5">02</div>
                <div>
                  <h4 className="text-sm font-medium text-slate-800 mb-0.5">Message Directly</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Talk to engineers yourself. No middleman rewriting your pitch.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-sm text-slate-300 shrink-0 w-5">03</div>
                <div>
                  <h4 className="text-sm font-medium text-slate-800 mb-0.5">Hire in Weeks</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">GitHub proof replaces multi-round screens. Ship faster.</p>
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
                  <h4 className="text-sm font-medium text-slate-800 mb-0.5">Claim Your Pass</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Connect GitHub once. We generate your profile automatically.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-sm text-slate-300 shrink-0 w-5">02</div>
                <div>
                  <h4 className="text-sm font-medium text-slate-800 mb-0.5">Set Your Terms</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Full-time or contract. You decide when founders can reach out.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-sm text-slate-300 shrink-0 w-5">03</div>
                <div>
                  <h4 className="text-sm font-medium text-slate-800 mb-0.5">Get Found</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Funded founders message you directly. No recruiter spam.</p>
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
          <h2 className="text-2xl sm:text-3xl font-medium mb-8 tracking-tight text-slate-900 text-center">Ready to hire your founding team?</h2>

          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
            <div className="p-5 bg-white border border-slate-200/80 rounded-xl">
              <p className="text-sm font-medium text-slate-800 mb-2">Recently Funded?</p>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                Early access for seed and Series A founders hiring their first engineers.
              </p>
              <Link href="/lineup" className="text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors">
                Join Waitlist →
              </Link>
            </div>

            <div className="p-5 bg-white border border-slate-200/80 rounded-xl">
              <p className="text-sm font-medium text-slate-800 mb-2">Ready to Ship?</p>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                Free forever. Let funded founders find you through your code.
              </p>
              <Link href="/claim" className="text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors">
                Claim Your Pass →
              </Link>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-slate-200/60">
            <p className="text-sm text-slate-400">
              Paddleout © 2026
            </p>
            <a href="mailto:contact@paddleout.io" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">
              contact@paddleout.io
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
