import React from "react";
import Link from "next/link";

export default function AboutPage() {
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

        {/* HERO */}
        <section className="px-6 max-w-5xl mx-auto mb-20">
          <Link href="/" className="text-sm text-slate-400 hover:text-slate-600 transition-colors mb-6 inline-block">
            ← Back
          </Link>
          <p className="text-sm text-slate-400 mb-3">Why we exist</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.15] mb-5 text-slate-900 max-w-3xl">
            The biggest hiring platforms in the world don&apos;t actually want to fix hiring.
          </h1>
          <p className="text-slate-500 text-base leading-relaxed max-w-2xl">
            That&apos;s not a cynical take. It&apos;s their business model — and once you see it, you can&apos;t unsee it.
          </p>
        </section>

        {/* THE STRUCTURAL PROBLEM */}
        <section className="px-6 py-16 sm:py-20 border-t border-slate-200/60 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-sm text-slate-400 mb-2">The incentive problem</p>
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 mb-4">
                  They profit from the gap between you and the people you&apos;re trying to find.
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  LinkedIn generates roughly 60–70% of its revenue from &ldquo;Talent Solutions&rdquo; — tools sold to recruiters to filter through the noise the platform itself creates. Indeed charges employers to sponsor job posts just to stay visible in an ocean of spam applications.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  They aren&apos;t selling matches. They&apos;re selling access to a crowded room they built. If hiring became fast, direct, and transparent, their primary revenue stream would disappear. They are structurally incentivized to keep founders and builders apart — and to keep charging for the bridge between them.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  Recruiters aren&apos;t the problem. The incentive structure is. More steps, more filters, more touchpoints — all generating billable activity, none of it producing better hires. Founders waste weeks on process theater. Builders ghost interviews they never wanted. Everyone loses except the platform.
                </p>
                <p className="text-slate-800 text-sm font-medium">
                  We built Paddleout to burn that bridge.
                </p>
              </div>

              <div className="space-y-3 md:pt-8">
                <div className="p-5 bg-[#fafafa] border border-slate-200/80 rounded-xl">
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">LinkedIn</p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    ~60–70% of revenue from Talent Solutions. Recruiters pay to spam. Founders pay to be found. Engineers get buried. Everyone loses except LinkedIn.
                  </p>
                </div>
                <div className="p-5 bg-[#fafafa] border border-slate-200/80 rounded-xl">
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">Indeed</p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pay-to-sponsor job posts to stay visible in an algorithmic feed optimized for volume, not signal. The &ldquo;Easy Apply&rdquo; button exists to generate data — not outcomes.
                  </p>
                </div>
                <div className="p-5 bg-slate-800 text-white rounded-xl">
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">The truth</p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    A fast, direct, transparent hiring process would destroy their revenue model. So they never built one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE'RE BUILDING */}
        <section className="px-6 py-16 sm:py-20 border-t border-slate-200/60 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <p className="text-sm text-slate-400 mb-2">The mission</p>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900">
                We&apos;re not building a better filter.<br />We&apos;re removing the noise entirely.
              </h2>
              <p className="text-slate-500 text-sm mt-3 max-w-xl leading-relaxed">
                Paddleout replaces resumes with Builder Passes — live profiles backed by real GitHub activity, peer-verified vouches, and zero recruiter access. Founders who&apos;ve raised or are closing their seed round can find engineers who are actually shipping, right now, without a headhunter in the middle.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-3">
              {[
                {
                  title: "No business model built on friction",
                  body: "We don't charge per application, sponsor listings, or sell recruiter access. Free for builders. No placement fees for founders. Ever.",
                },
                {
                  title: "Signal over noise",
                  body: "GitHub commit history, stack recency, and peer vouches replace the self-reported resume. You see who's shipping — not who's best at applying.",
                },
                {
                  title: "Direct. Private. Mutual.",
                  body: "Builders stay blinded until they choose to reveal themselves. Founders reach out only after seeing real data. Both sides confirm before anything is shared.",
                },
              ].map(({ title, body }) => (
                <div key={title} className="p-5 bg-[#fafafa] border border-slate-200/80 rounded-xl">
                  <h4 className="text-sm font-medium text-slate-800 mb-1.5">{title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 sm:py-20 border-t border-slate-200/60">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 bg-white border border-slate-200/80 rounded-2xl">
                <p className="text-xs text-slate-400 uppercase tracking-wide mb-3">For builders</p>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Let your code do the talking.</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">
                  Claim your handle. Connect GitHub once. Stay blinded until the right founder comes along. Free forever.
                </p>
                <Link
                  href="/builders"
                  className="inline-flex px-5 py-2.5 bg-slate-800 text-white font-medium text-sm rounded-lg hover:bg-slate-700 transition-colors"
                >
                  Claim Your Handle — Free
                </Link>
              </div>
              <div className="p-8 bg-slate-800 text-white rounded-2xl">
                <p className="text-xs text-slate-400 uppercase tracking-wide mb-3">For founders</p>
                <h3 className="text-lg font-medium text-white mb-2">Stop paying for the bridge.</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  Access verified builders searchable by stack, velocity, and peer-vouched impact. No recruiters. No placement fees.
                </p>
                <Link
                  href="/founders"
                  className="inline-flex px-5 py-2.5 bg-white text-slate-800 font-medium text-sm rounded-lg hover:bg-slate-100 transition-colors"
                >
                  Apply for Founder Access
                </Link>
              </div>
            </div>
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
