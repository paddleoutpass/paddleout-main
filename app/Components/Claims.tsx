import React from "react";
import Link from "next/link";

export default function ClaimPage() {
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
            <Link href="/founders" className="text-sm font-medium bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors">
              For Founders
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-28 sm:pt-36 pb-20">

        {/* HERO + FORM */}
        <section className="px-6 max-w-5xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <Link href="/" className="text-sm text-slate-400 hover:text-slate-600 transition-colors mb-6 inline-block">
                ← Back
              </Link>
              <p className="text-sm text-slate-400 mb-3">For builders</p>
              <h1 className="text-3xl sm:text-4xl font-medium tracking-tight leading-[1.15] mb-4 text-slate-900">
                Let your code<br />do the talking.
              </h1>
              <p className="text-slate-500 text-base leading-relaxed mb-8 max-w-md">
                Funded founders are searching for engineers who ship. Claim your handle, connect GitHub once, and let your commit history speak louder than any resume. Free forever.
              </p>

              <div className="space-y-5 mb-8">
                {[
                  { n: "1", title: "Claim your handle", body: "Reserve your spot. First come, first served. Your identity stays hidden until you choose to reveal it." },
                  { n: "2", title: "Connect GitHub — read-only", body: "We analyze patterns, never your IP. Your Stack Radar, Signal Score, and velocity graph generate automatically." },
                  { n: "3", title: "Add peer vouches", body: "Request structured endorsements from teammates who verify real-world impact — not just \"great to work with.\"" },
                  { n: "4", title: "Toggle open. Get found.", body: "Only recently funded founders can reach out. No recruiters, no spam. Lock in 15 minutes — double opt-in before any details are shared." },
                ].map(({ n, title, body }) => (
                  <div key={n} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-slate-100 border border-slate-200 rounded flex items-center justify-center shrink-0 text-xs font-medium text-slate-500">{n}</div>
                    <div>
                      <h3 className="text-sm font-medium text-slate-800 mb-0.5">{title}</h3>
                      <p className="text-sm text-slate-500">{body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-slate-800 text-white rounded-xl">
                <p className="text-xs text-slate-400 mb-1">The deal</p>
                <p className="text-sm text-slate-200">
                  <span className="font-medium text-white">Free forever for builders.</span> No fees, no markups. Your Pass updates automatically as you ship.
                </p>
              </div>
            </div>

            {/* Tally Form */}
            <div className="md:pt-12">
              <iframe
                src="https://tally.so/embed/LZbED1?alignLeft=1&hideTitle=1&transparentBackground=1"
                width="100%"
                height="800"
                frameBorder="0"
                title="Claim Your Builder Pass"
                className="rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* PRIVACY */}
        <section className="px-6 py-16 sm:py-20 border-t border-slate-200/60 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <p className="text-sm text-slate-400 mb-2">Your privacy</p>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900">
                You&apos;re Builder #XXX until you decide otherwise.
              </h2>
              <p className="text-slate-500 text-sm mt-3 max-w-xl leading-relaxed">
                The Blinded Identity Model lets us host elite, currently-employed engineers who would never post on LinkedIn. You get the upside of visibility without the risk of your employer finding out.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              {[
                { title: "Read-only GitHub sync", body: "We analyze commit patterns and language distribution. We never access your code, private repos, or IP. You can revoke access anytime." },
                { title: "Blinded by default", body: "Founders see your handle, your signal data, and your vouches — never your name or employer until you accept their request." },
                { title: "You choose what's visible", body: "Select which repos appear. Turn off specific projects. Show only public activity if you prefer. Full control, always." },
                { title: "No recruiter access. Ever.", body: "Recruiters are explicitly blocked from The Lineup. Only verified, recently funded founders can see your Pass or send a request." },
              ].map(({ title, body }) => (
                <div key={title} className="p-5 bg-[#fafafa] border border-slate-200/80 rounded-xl">
                  <h4 className="text-sm font-medium text-slate-800 mb-1.5">{title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: body }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT YOUR PASS SHOWS */}
        <section className="px-6 py-16 sm:py-20 border-t border-slate-200/60">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <p className="text-sm text-slate-400 mb-2">Your Builder Pass</p>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900">Six signals. One honest picture.</h2>
              <p className="text-slate-500 text-sm mt-3 max-w-xl leading-relaxed">
                Your Pass isn&apos;t a profile — it&apos;s a live read of your output. Generated from GitHub, verified by peers, updated automatically.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-3">
              {[
                { label: "Velocity", desc: "Commit frequency over the last 30 days. Shows you&apos;re actively building — not coasting on past work." },
                { label: "Frontend", desc: "Depth and recency of your frontend output. React, TypeScript, UI systems — what you&apos;ve actually shipped." },
                { label: "Backend", desc: "Server-side intensity. APIs, databases, architecture decisions backed by real commit history." },
                { label: "Infrastructure", desc: "DevOps, cloud, deployment work. Founders hiring their first engineer need someone who can own the full stack." },
                { label: "AI / LLM", desc: "Activity in AI tooling, model integration, LangChain, LangGraph, RAG — the most in-demand signal right now." },
                { label: "Product", desc: "Evidence you think beyond the code — shipping features with user impact, not just technical elegance." },
              ].map(({ label, desc }) => (
                <div key={label} className="p-5 bg-[#fafafa] border border-slate-200/80 rounded-xl">
                  <h4 className="text-sm font-medium text-slate-800 mb-1.5">{label}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: desc }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO REACHES OUT */}
        <section className="px-6 py-16 sm:py-20 border-t border-slate-200/60 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-sm text-slate-400 mb-2">Who reaches you</p>
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 mb-4">
                  Only recently funded founders. No exceptions.
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  We verify every founder before they can access The Lineup. No recruiters. No staffing agencies. No generic "Hi [Name]" emails. Every request comes from a real founder with real funding who&apos;s read your data before reaching out.
                </p>
                <div className="space-y-3">
                  {[
                    "Founders who&apos;ve raised or are closing their seed round — no recruiters",
                    "Founders see your data before they message you",
                    "You approve every intro before your identity is revealed",
                    "Double opt-in — both sides confirm before details are shared",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="text-slate-300 text-sm mt-0.5">—</span>
                      <p className="text-sm text-slate-500">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-5 bg-white border border-slate-200/80 rounded-xl">
                  <p className="text-xs text-slate-400 mb-2">What a recruiter sends</p>
                  <p className="text-sm text-slate-500 italic leading-relaxed mb-1">
                    &ldquo;Hi [Name], I came across your profile and thought you might be a great fit for an exciting opportunity...&rdquo;
                  </p>
                  <p className="text-xs text-slate-400">They haven&apos;t looked at your code. They never will.</p>
                </div>
                <div className="p-5 bg-slate-800 text-white rounded-xl">
                  <p className="text-xs text-slate-400 mb-2">What a Paddleout founder sends</p>
                  <p className="text-sm text-slate-300 italic leading-relaxed mb-1">
                    &ldquo;Your AI/LLM axis and 30-day velocity put you in the top 3% of what we&apos;ve seen. We&apos;re building X and need someone who can own the backend from day one.&rdquo;
                  </p>
                  <p className="text-xs text-slate-400">They&apos;ve already seen your Stack Radar. This is a warm intro.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VS ALTERNATIVES */}
        <section className="px-6 py-16 sm:py-20 border-t border-slate-200/60">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <p className="text-sm text-slate-400 mb-2">Why not just use LinkedIn</p>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900">The platforms that exist weren&apos;t built for you.</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-3">
              <div className="p-5 bg-white border border-slate-200/80 rounded-xl">
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-3">LinkedIn</p>
                <div className="space-y-2">
                  <p className="text-sm text-slate-500">— Floods you with recruiter spam</p>
                  <p className="text-sm text-slate-500">— &ldquo;Open to Work&rdquo; signals desperation</p>
                  <p className="text-sm text-slate-500">— No proof you actually ship</p>
                  <p className="text-sm text-slate-500">— Your employer can see everything</p>
                </div>
              </div>
              <div className="p-5 bg-white border border-slate-200/80 rounded-xl">
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-3">Job Boards</p>
                <div className="space-y-2">
                  <p className="text-sm text-slate-500">— You apply. You wait. You get ghosted.</p>
                  <p className="text-sm text-slate-500">— Resume-first, signal-last</p>
                  <p className="text-sm text-slate-500">— Competing with hundreds of applicants</p>
                  <p className="text-sm text-slate-500">— No control over who sees you</p>
                </div>
              </div>
              <div className="p-5 bg-slate-800 text-white rounded-xl">
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-3">Paddleout</p>
                <div className="space-y-2">
                  <p className="text-sm text-slate-300">— Founders come to you</p>
                  <p className="text-sm text-slate-300">— GitHub is your resume</p>
                  <p className="text-sm text-slate-300">— Identity hidden until you&apos;re ready</p>
                  <p className="text-sm text-slate-300">— Only funded founders, no recruiters</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="px-6 py-16 sm:py-20 border-t border-slate-200/60 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 mb-4">
              Your next role shouldn&apos;t start with a cover letter.
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Claim your handle before launch. The Lineup goes live April 2026 — early builders get priority placement and first access to founder requests.
            </p>
            <a
              href="https://tally.so/r/LZbED1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-6 py-3 bg-slate-800 text-white font-medium text-sm rounded-lg hover:bg-slate-700 transition-colors"
            >
              Claim Your Handle — Free
            </a>
            <p className="text-xs text-slate-400 mt-3">Free forever. No credit card. No catch.</p>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200/60 py-6 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-slate-400">Paddleout © 2026</p>
          <Link href="/about" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">Why we exist</Link>
          <Link href="/privacy" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">Privacy</Link>
          <a href="mailto:info@paddleout.io" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">
            info@paddleout.io
          </a>
        </div>
      </footer>
    </div>
  );
}
