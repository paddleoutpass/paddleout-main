import React from "react";
import Link from "next/link";

export default function ClaimPage() {
  return (
    <main className="min-h-screen bg-white text-black p-6 md:p-16 lg:p-24 font-sans">
      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-3xl">
          <Link
            href="/"
            className="text-[11px] font-black uppercase tracking-[0.2em] hover:opacity-50 transition-all mb-12 inline-block"
          >
            &larr; Back
          </Link>

          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter mb-4 uppercase italic leading-[0.85]">
            Own your <br />
            output.
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl leading-tight max-w-xl mb-12 text-black font-medium tracking-tight">
            You've spent years building someone else's dream.{" "}
            <br className="hidden md:block" />
            Now it's time to own the output.
          </p>
        </div>

        <footer className="mt-32 border-t border-black pt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex gap-10">
              <a
                href="mailto:hello@paddleout.io"
                className="text-[11px] font-black uppercase tracking-[0.2em] hover:opacity-50 transition-all"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-[11px] font-black uppercase tracking-[0.2em] hover:opacity-50 transition-all"
              >
                Build Log
              </a>
            </div>
            <div className="text-[11px] font-black uppercase tracking-[0.2em] opacity-30">
              © {new Date().getFullYear()} Paddleout
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
