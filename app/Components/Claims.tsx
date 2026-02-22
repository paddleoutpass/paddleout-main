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
              Funded founders are searching for engineers who ship. Claim your handle, connect GitHub once, and let your commit history speak louder than any resume. Free forever.
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-slate-100 border border-slate-200 rounded flex items-center justify-center shrink-0 text-xs font-medium text-slate-500">1</div>
                <div>
                  <h3 className="text-sm font-medium text-slate-800 mb-0.5">Claim your handle</h3>
                  <p className="text-sm text-slate-500">Reserve your spot. First come, first served. Your identity stays hidden until you accept a request.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-slate-100 border border-slate-200 rounded flex items-center justify-center shrink-0 text-xs font-medium text-slate-500">2</div>
                <div>
                  <h3 className="text-sm font-medium text-slate-800 mb-0.5">Connect GitHub — read-only</h3>
                  <p className="text-sm text-slate-500">We analyze patterns, never your IP. Your Stack Radar, Signal Score, and velocity graph generate automatically.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-slate-100 border border-slate-200 rounded flex items-center justify-center shrink-0 text-xs font-medium text-slate-500">3</div>
                <div>
                  <h3 className="text-sm font-medium text-slate-800 mb-0.5">Add peer vouches</h3>
                  <p className="text-sm text-slate-500">Request structured endorsements from teammates who verify real-world impact — not just &ldquo;great to work with.&rdquo;</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-slate-100 border border-slate-200 rounded flex items-center justify-center shrink-0 text-xs font-medium text-slate-500">4</div>
                <div>
                  <h3 className="text-sm font-medium text-slate-800 mb-0.5">Toggle open. Get found.</h3>
                  <p className="text-sm text-slate-500">Only recently funded founders can reach out. No recruiters, no spam. Lock in 15 minutes — double opt-in before any details are shared.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="p-4 bg-white border border-slate-200 rounded-xl">
                <p className="text-xs text-slate-400 mb-1">Your Pass includes</p>
                <div className="space-y-1">
                  <p className="text-xs text-slate-600">— Stack Radar (6-axis)</p>
                  <p className="text-xs text-slate-600">— Signal Score</p>
                  <p className="text-xs text-slate-600">— Velocity graph</p>
                  <p className="text-xs text-slate-600">— Peer vouch system</p>
                  <p className="text-xs text-slate-600">— Anti-ghosting protocol</p>
                </div>
              </div>
              <div className="p-4 bg-white border border-slate-200 rounded-xl">
                <p className="text-xs text-slate-400 mb-1">You control</p>
                <div className="space-y-1">
                  <p className="text-xs text-slate-600">— Which repos are visible</p>
                  <p className="text-xs text-slate-600">— When founders can reach you</p>
                  <p className="text-xs text-slate-600">— Identity reveal timing</p>
                  <p className="text-xs text-slate-600">— Who can message you</p>
                  <p className="text-xs text-slate-600">— Availability status</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-800 text-white rounded-xl">
              <p className="text-xs text-slate-400 mb-1">The deal</p>
              <p className="text-sm text-slate-200">
                <span className="font-medium text-white">Free forever for builders.</span> No fees, no markups. Your Pass updates automatically as you ship.
              </p>
            </div>
          </div>

          {/* Right: Tally Form */}
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
