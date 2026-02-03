import React from 'react';
import Link from 'next/link';
import BuilderPass from './Components/BuilderPass';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white font-sans selection:bg-white selection:text-black">
      
      {/* 1. HEADER */}
      <nav className="fixed top-0 w-full bg-[#0a0a0b]/80 backdrop-blur-xl border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-lg font-black tracking-tighter uppercase">PADDLEOUT</div>
          <div className="flex gap-8 items-center">
             <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">System_v3.0</span>
             <Link href="/lineup" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors border border-white/10 px-4 py-2 rounded-md">
                The Lineup
             </Link>
             <Link href="/claim" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors border border-white/10 px-4 py-2 rounded-md">
                Claim Pass
             </Link>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="pt-48 pb-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
            OWN YOUR<br />OUTPUT.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            Paddleout converts your real-time telemetry into a verified <span className="text-white font-semibold">Builder Pass</span>. 
            The Pass maps your technical momentum, product DNA, and peer-verified impact into a high-fidelity feed you own.
          </p>
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <Link href="/claim" className="px-8 py-4 bg-white text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-gray-200 transition-all inline-block">
              Claim your Pass
            </Link>
            <p className="text-xs text-gray-500 max-w-sm italic leading-relaxed">
              Whether you’re a Senior shipping core infrastructure or a rising Builder shipping daily to level up, Paddleout turns work into a permanent signal. Stop applying and start being scouted.
            </p>
          </div>
        </div>
      </section>

      {/* 3. THE SIGNAL GAP (THE WHY) */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 bg-[#0d0d0e]/30">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em] mb-4">The Friction</h2>
            <h3 className="text-3xl font-bold tracking-tighter uppercase">The hiring loop is broken.</h3>
          </div>
          <div className="md:col-span-2 grid md:grid-cols-2 gap-12 border-l border-white/5 md:pl-12">
            <div className="space-y-4">
              <p className="text-white font-bold text-xs uppercase tracking-widest">For Builders</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                You’re more than a static PDF. Your best work is often invisible—locked in private repos or buried under generic recruiter filters. You shouldn't have to "apply" to prove you can ship.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-white font-bold text-xs uppercase tracking-widest">For Founders</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Hiring is a high-stakes guessing game. Resumes are aspirational, and traditional technical screens don't simulate real-world velocity. You need signal, not stories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE BUILDER PASS (THE SOLUTION) */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-2 tracking-tight uppercase">The Bridge</h2>
              <p className="text-gray-400 italic text-sm mb-6">Paddleout replaces "Trust Me" with "Watch Me."</p>
              <p className="text-gray-500 text-[10px] font-mono uppercase tracking-widest">A high-fidelity technical fingerprint.</p>
            </div>
            
            <div className="grid gap-6">
              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.04] transition-colors">
                <h3 className="text-xs font-bold uppercase tracking-widest mb-2 text-white/90">The Living Feed</h3>
                <p className="text-sm text-gray-500 leading-relaxed">The Pass looks past raw commit counts to surface the complexity, consistency, and architectural impact of every ship.</p>
              </div>
              
              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.04] transition-colors">
                <h3 className="text-xs font-bold uppercase tracking-widest mb-2 text-white/90">The Proprietary "Black Box" Solution</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Proof of work shouldn't stop at the private repo wall. Document outcomes behind closed doors. Get peer-verified signal notes that stay on the Pass without ever exposing proprietary IP.</p>
              </div>

              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.04] transition-colors">
                <h3 className="text-xs font-bold uppercase tracking-widest mb-2 text-white/90">Absolute Sovereignty</h3>
                <p className="text-sm text-gray-500 leading-relaxed">You own the data. Period. You decide what the world sees, what stays private, and exactly how your technical narrative is told.</p>
              </div>
            </div>
          </div>

          {/* Builder Pass Component */}
          <div className="flex items-center justify-center">
            <BuilderPass />
          </div>
        </div>
      </section>

      {/* 5. THE LINEUP / FOUNDER SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* MOCKUP PLACEHOLDER 2 */}
          <div className="order-last md:order-first aspect-video bg-white/[0.01] border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl">
             <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">[ Founder Dashboard: The Lineup ]</span>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4 uppercase">The Lineup</h2>
              <p className="text-gray-500 text-[10px] font-mono uppercase tracking-widest">Continuous presence, controlled access.</p>
            </div>
            
            <div className="space-y-6 text-gray-400 text-sm leading-relaxed">
              <p>Stay visible in the Lineup without the noise. Toggle your "Open to Inquiries" status based on current project cycles or set a future date for when you’re ready to paddle out.</p>
              
              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl border-l-white/20">
                <h4 className="text-white font-bold text-xs uppercase mb-2">Smart Notifications</h4>
                <p>When a founder finds a match currently "locked" in a contract, they set a <span className="text-white italic">Pulse</span>. They get notified the moment your status flips to open, ensuring the inquiry is timed perfectly.</p>
              </div>

              <p>Reputation builds while you sleep. Even when you aren't looking, the Pass is updating, keeping your "stock" high so the offers waiting for you are always high-signal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BUILT FOR THE BUILDERS */}
      <section className="py-32 px-6 border-t border-white/5 bg-white text-black">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-black tracking-tighter mb-4 uppercase leading-none">Built for the Builders.</h2>
          <p className="text-gray-500 text-[10px] font-mono uppercase tracking-[0.3em]">Every stage of the surge.</p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-gray-50 border border-black/5 rounded-2xl flex flex-col justify-between min-h-[320px] hover:shadow-xl transition-shadow">
            <span className="text-[10px] font-mono uppercase tracking-widest text-black/40 underline decoration-black/20 underline-offset-4">The High-Stakes Senior</span>
            <div>
              <h3 className="text-2xl font-black mb-3 tracking-tighter">Preserve the Legacy</h3>
              <p className="text-sm leading-relaxed text-black/70 italic">Maintain a record of architectural impact even when the code is in a corporate vault.</p>
            </div>
          </div>
          <div className="p-8 bg-gray-50 border border-black/5 rounded-2xl flex flex-col justify-between min-h-[320px] hover:shadow-xl transition-shadow">
            <span className="text-[10px] font-mono uppercase tracking-widest text-black/40 underline decoration-black/20 underline-offset-4">The Rising Builder</span>
            <div>
              <h3 className="text-2xl font-black mb-3 tracking-tighter">Prove the Trajectory</h3>
              <p className="text-sm leading-relaxed text-black/70 italic">Break the "years of experience" trap. Let your shipping velocity prove you're ready for the deep end.</p>
            </div>
          </div>
          <div className="p-8 bg-gray-50 border border-black/5 rounded-2xl flex flex-col justify-between min-h-[320px] hover:shadow-xl transition-shadow">
            <span className="text-[10px] font-mono uppercase tracking-widest text-black/40 underline decoration-black/20 underline-offset-4">The Infinite Builder</span>
            <div>
              <h3 className="text-2xl font-black mb-3 tracking-tighter">Infinite Build</h3>
              <p className="text-sm leading-relaxed text-black/70 italic">Reputation doesn't reset between projects. Keep your stock high while you ship open-source or level up your stack.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-40 px-6 text-center border-t border-white/5">
        <h2 className="text-5xl font-black mb-6 tracking-tighter uppercase leading-none">Own your trajectory.</h2>
        <p className="text-gray-500 mb-10 max-w-md mx-auto text-sm leading-relaxed">
          Join the lineup of builders taking control of their work and letting their code do the talking.
        </p>
        <Link href="/claim" className="px-12 py-5 bg-white text-black font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.1)] inline-block">
          Claim your Pass
        </Link>
        <div className="mt-20 pt-10 border-t border-white/5 text-[10px] font-mono text-gray-600 uppercase tracking-[0.5em]">
          Paddleout © 2026 / All Outputs Reserved
        </div>
      </footer>

    </div>
  );
}