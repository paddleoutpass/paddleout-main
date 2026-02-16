import React from 'react';
import Link from 'next/link';
import BuilderPass from './Components/BuilderPass';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white font-sans selection:bg-white selection:text-black">

      {/* HEADER */}
      <nav className="fixed top-0 w-full bg-[#0a0a0b]/80 backdrop-blur-xl border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-lg font-black tracking-tighter uppercase">PADDLEOUT</div>
          <div className="flex gap-3 sm:gap-6 items-center">
             <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest hidden md:block">Launching March 2026</span>
             <Link href="/lineup" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors border border-white/10 px-3 sm:px-4 py-2 rounded-md hidden sm:inline-block">
                The Lineup
             </Link>
             <Link href="/claim" className="text-[10px] font-bold uppercase tracking-widest bg-white text-black px-3 sm:px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">
                Claim Pass
             </Link>
          </div>
        </div>
      </nav>

      {/* 1. HERO */}
      <section className="pt-32 sm:pt-44 pb-16 sm:pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6 sm:mb-8 uppercase">
              You just got funded. Now hire the team.
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
              You want to handpick your first engineers. Not outsource it to a recruiter for $20k a head. Paddleout gives you a verified roster of builders with GitHub-backed proof they ship&mdash;searchable by stack, availability, and work type. Stay hands-on. Hire in weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/claim" className="px-8 py-4 bg-white text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-gray-200 transition-all text-center">
                Claim your Pass
              </Link>
              <Link href="/lineup" className="px-8 py-4 border border-white/20 font-bold text-xs uppercase tracking-[0.2em] hover:bg-white/5 transition-all text-center">
                Join the Waitlist
              </Link>
            </div>
            <p className="text-[11px] text-gray-600 mt-4">Free for builders, forever. Early access for recently funded startups.</p>
          </div>
          <div className="flex items-center justify-center">
            <BuilderPass />
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="py-16 sm:py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="mb-10 sm:mb-16">
          <h2 className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em] mb-4">The Problem</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase leading-tight">You closed the round. Now the clock starts.</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Problem Card 1 */}
          <div className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] transition-colors">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-3 text-white/90">You wanted to hire yourself. You can&apos;t.</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              You pictured handpicking engineer #1. Reading their code. Knowing they can ship. Instead you&apos;re drowning in 500 AI-generated applications that all say the same thing. So you start thinking about hiring a recruiter&mdash;the one thing you swore you wouldn&apos;t do at this stage.
            </p>
          </div>

          {/* Problem Card 2 */}
          <div className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] transition-colors">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-3 text-white/90">You can&apos;t read the signal that matters.</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              The best engineers prove it in code, not cover letters. But their best work is in private repos you&apos;ll never see. GitHub contribution graphs mean nothing without context. You&apos;re making $150k decisions on vibes and a 30-minute interview.
            </p>
          </div>

          {/* Problem Card 3 */}
          <div className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] transition-colors">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-3 text-white/90">Outsourcing costs $60k you don&apos;t have.</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Three engineers at $20k per recruiter fee. That&apos;s $60k out of your seed round before anyone writes a line of code. You know the recruiter doesn&apos;t understand your stack. But you&apos;re burning runway every week you don&apos;t ship, and the inbox isn&apos;t getting smaller.
            </p>
          </div>

          {/* Problem Card 4 */}
          <div className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] transition-colors">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-3 text-white/90">Every funded startup just hit the same wall.</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Your entire batch closed funding the same month. They&apos;re all posting on LinkedIn. All messaging the same engineers. All competing with the same broken playbook. The founders who move fastest get the best builders. Everyone else gets leftovers&mdash;or a recruiter invoice.
            </p>
          </div>
        </div>
      </section>

      {/* 3. THE SOLUTION */}
      <section className="py-16 sm:py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="mb-10 sm:mb-16">
          <h2 className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em] mb-4">The Solution</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase leading-tight mb-4">Stay hands-on. Skip the recruiter.</h3>
          <p className="text-gray-400 text-lg max-w-2xl">
            Builder Passes give you everything a recruiter promises&mdash;verified candidates, matched to your stack, available now&mdash;without the $20k invoice. Search the roster yourself. Make the call yourself. Keep control of your founding team.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-2 text-white/90">Signal Score (1-10)</h4>
            <p className="text-sm text-gray-500 leading-relaxed">One number that tells you if someone ships. Calculated from commit velocity, code quality, and peer vouches&mdash;not self-reported skills. The filter your inbox never had.</p>
          </div>

          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-2 text-white/90">Velocity Graph</h4>
            <p className="text-sm text-gray-500 leading-relaxed">12 weeks of real GitHub activity. You can see whether someone is shipping daily or coasting on a job title. No recruiter pitch deck needed&mdash;the graph speaks for itself.</p>
          </div>

          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-2 text-white/90">Stack with Recency</h4>
            <p className="text-sm text-gray-500 leading-relaxed">You need a TypeScript engineer now, not someone who used it in 2022. See exactly what they&apos;re building with today&mdash;150 commits last 3 months vs 10 commits last year.</p>
          </div>

          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-2 text-white/90">Real-Time Availability</h4>
            <p className="text-sm text-gray-500 leading-relaxed">You&apos;re hiring for next month, not next quarter. See who&apos;s available this week, who opens up in two. Set a Pulse on someone booked&mdash;get notified the moment they&apos;re free.</p>
          </div>

          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-2 text-white/90">Peer Vouches</h4>
            <p className="text-sm text-gray-500 leading-relaxed">References you can actually trust. Structured feedback from people who shipped alongside them&mdash;not LinkedIn endorsement buttons. Email-verified, with real context.</p>
          </div>

          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-2 text-white/90">Private Repo Proof</h4>
            <p className="text-sm text-gray-500 leading-relaxed">Their best work is behind NDAs. We surface verified outcomes without exposing code&mdash;peer-confirmed impact from proprietary projects. The signal recruiters can&apos;t access.</p>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="py-16 sm:py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="mb-10 sm:mb-16">
          <h2 className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em] mb-4">How It Works</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase leading-tight">Recruiter speed. Founder control.</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* For Founders */}
          <div>
            <p className="text-white font-bold text-xs uppercase tracking-widest mb-8 pb-4 border-b border-white/10">For Founders</p>
            <div className="space-y-10">
              <div className="flex gap-4 sm:gap-6">
                <div className="text-2xl sm:text-3xl font-black text-white/10 shrink-0">01</div>
                <div>
                  <h4 className="text-sm font-bold mb-2">Search The Lineup</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Filter by your stack, timeline, and work type. Only see engineers who match and are actually available when you need them. No recruiter interpreting your requirements wrong.</p>
                </div>
              </div>
              <div className="flex gap-4 sm:gap-6">
                <div className="text-2xl sm:text-3xl font-black text-white/10 shrink-0">02</div>
                <div>
                  <h4 className="text-sm font-bold mb-2">Message Directly</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Talk to engineers yourself. Discuss your product, your timeline, your vision&mdash;the way you would if a friend introduced you. No middleman rewriting your pitch.</p>
                </div>
              </div>
              <div className="flex gap-4 sm:gap-6">
                <div className="text-2xl sm:text-3xl font-black text-white/10 shrink-0">03</div>
                <div>
                  <h4 className="text-sm font-bold mb-2">Hire in Weeks, Not Quarters</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">You have runway, not years. GitHub proof replaces multi-round screens. Week 1: message. Week 2: interview. Week 3: offer. Week 4: they&apos;re shipping your v1.</p>
                </div>
              </div>
            </div>
          </div>

          {/* For Builders */}
          <div>
            <p className="text-white font-bold text-xs uppercase tracking-widest mb-8 pb-4 border-b border-white/10">For Builders</p>
            <div className="space-y-10">
              <div className="flex gap-4 sm:gap-6">
                <div className="text-2xl sm:text-3xl font-black text-white/10 shrink-0">01</div>
                <div>
                  <h4 className="text-sm font-bold mb-2">Claim Your Pass</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Connect GitHub once. We generate your velocity graph, stack breakdown, and signal score automatically. It updates forever. Your resume is now a living proof-of-work.</p>
                </div>
              </div>
              <div className="flex gap-4 sm:gap-6">
                <div className="text-2xl sm:text-3xl font-black text-white/10 shrink-0">02</div>
                <div>
                  <h4 className="text-sm font-bold mb-2">Set Your Terms</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Early-stage AI products or climate infrastructure. Full-time or contract. Available now or in 3 weeks. You decide who sees you and when founders can reach out.</p>
                </div>
              </div>
              <div className="flex gap-4 sm:gap-6">
                <div className="text-2xl sm:text-3xl font-black text-white/10 shrink-0">03</div>
                <div>
                  <h4 className="text-sm font-bold mb-2">Get Found by Funded Founders</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Recently funded founders search The Lineup and message you directly with real scope, real equity, real timelines. No recruiter spam. No AI-generated job posts. Just founders who need to ship.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE MATH */}
      <section className="py-16 sm:py-24 px-6 border-t border-white/5 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-[10px] font-mono text-black/40 uppercase tracking-[0.3em] mb-4">The Math</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase leading-tight">The outsource tax vs. doing it yourself.</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-20">
            {/* Cost Comparison */}
            <div className="p-8 bg-gray-50 border border-black/5 rounded-2xl">
              <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-black/40">Outsource to a recruiter</h4>
              <div className="space-y-3 mb-6">
                <p className="text-sm text-black/70">$20,000+ per hire out of your seed round</p>
                <p className="text-sm text-black/70">12-16 weeks before someone starts</p>
                <p className="text-sm text-black/70">They pick the candidates. You hope they understand your stack.</p>
              </div>
              <p className="text-2xl font-black tracking-tight">$60k gone before v1 ships</p>
            </div>

            <div className="p-8 bg-black text-white rounded-2xl">
              <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-white/40">Stay hands-on with Paddleout</h4>
              <div className="space-y-3 mb-6">
                <p className="text-sm text-white/70">$99-199/mo&mdash;cancel anytime</p>
                <p className="text-sm text-white/70">3-4 weeks from search to shipping</p>
                <p className="text-sm text-white/70">You search, you evaluate, you message. Full control.</p>
              </div>
              <p className="text-2xl font-black tracking-tight">$300-600 for your founding team</p>
            </div>
          </div>

          {/* Signal Comparison */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-12">
            <div className="p-8 bg-gray-50 border border-black/5 rounded-2xl">
              <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-black/40">What a recruiter sends you</h4>
              <p className="text-sm text-black/60 leading-relaxed italic mb-4">
                &quot;Experienced Senior Engineer with expertise in React, Python, and TypeScript. Strong problem-solving skills. Team player.&quot;
              </p>
              <p className="text-xs text-black/30">Could be anyone. You have no idea if they ship.</p>
            </div>

            <div className="p-8 bg-black text-white rounded-2xl">
              <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-white/40">What you see on Paddleout</h4>
              <div className="space-y-2 text-sm text-white/80">
                <p>TypeScript: 150 commits last 3 months</p>
                <p>React: 80 commits last 3 months</p>
                <p>3 verified vouches from former teammates</p>
                <p>Signal Score: 8.7/10</p>
                <p>Available: 40 hrs/week starting Monday</p>
                <p>Looking for: early-stage, equity + salary</p>
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-white/60">You know before you message.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY EARLY-STAGE */}
      <section className="py-16 sm:py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <h2 className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em] mb-4">Why Early-Stage</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter uppercase leading-tight mb-6">Hands-on today. Scalable tomorrow.</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Right now you&apos;re hiring engineer #1, #2, #3. You should be in the room for that. But the tools force you to either drown in applications or hand it off to someone who doesn&apos;t know your product. Paddleout is the middle path&mdash;founder-led hiring that actually scales.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-white/20 font-bold text-sm mt-0.5">/</span>
                <p className="text-sm text-gray-400">Hire #1-3 yourself with GitHub-backed proof</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white/20 font-bold text-sm mt-0.5">/</span>
                <p className="text-sm text-gray-400">Skip the 3-month recruiter cycle that burns runway</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white/20 font-bold text-sm mt-0.5">/</span>
                <p className="text-sm text-gray-400">Build your hiring muscle before you need to scale it</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white/20 font-bold text-sm mt-0.5">/</span>
                <p className="text-sm text-gray-400">When you&apos;re ready to grow the team, The Lineup grows with you</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl">
              <h4 className="text-xs font-bold uppercase tracking-widest mb-2 text-white/90">The Funded Founder Flywheel</h4>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                <span className="text-white font-semibold">More funded startups</span> on Paddleout means better opportunities for builders. Better builders attract more founders. The first company in each batch to adopt gets first pick of the roster.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                <span className="text-white font-semibold">It compounds.</span> Your first hire tells other builders. Your batch-mates see you shipped a team in 3 weeks. By next quarter, it&apos;s how your ecosystem hires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WAITLIST CTA */}
      <footer className="py-20 sm:py-32 px-6 text-center border-t border-white/5">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tighter uppercase leading-none">Stop outsourcing. Start building.</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mt-12 mb-16">
          <div className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl text-left">
            <p className="text-xs font-bold uppercase tracking-widest mb-3 text-white/60">Recently Funded?</p>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Early access for seed and Series A founders hiring their first engineers. Be hands-on. Skip the recruiter.
            </p>
            <Link href="/lineup" className="px-8 py-4 border border-white/20 font-bold text-xs uppercase tracking-[0.2em] hover:bg-white/5 transition-all inline-block">
              Join Waitlist
            </Link>
          </div>

          <div className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl text-left">
            <p className="text-xs font-bold uppercase tracking-widest mb-3 text-white/60">Ready to Ship?</p>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Free forever. Claim your @handle. Let funded founders find you through your code, not your resume.
            </p>
            <Link href="/claim" className="px-8 py-4 bg-white text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-gray-200 transition-all inline-block">
              Claim Your Pass
            </Link>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5">
          <p className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em]">
            Paddleout &copy; 2026 / GitHub-backed hiring for early-stage startups
          </p>
          <div className="mt-4 flex justify-center gap-8">
            <a href="mailto:contact@paddleout.io" className="text-[10px] font-mono text-gray-600 uppercase tracking-widest hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
