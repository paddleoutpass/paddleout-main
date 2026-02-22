import React from "react";
import Link from "next/link";

export default function PrivacyPage() {
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
        <section className="px-6 max-w-3xl mx-auto mb-16">
          <Link href="/" className="text-sm text-slate-400 hover:text-slate-600 transition-colors mb-6 inline-block">
            ← Back
          </Link>
          <p className="text-sm text-slate-400 mb-3">Last updated February 2026</p>
          <h1 className="text-3xl sm:text-4xl font-medium tracking-tight leading-[1.15] mb-4 text-slate-900">
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-base leading-relaxed">
            We built Paddleout on the premise that your identity and your code belong to you. This policy explains exactly what we collect, what we do with it, and what we never do — in plain language.
          </p>
        </section>

        {/* POLICY CONTENT */}
        <section className="px-6 max-w-3xl mx-auto">
          <div className="space-y-12">

            {/* 1 */}
            <div className="pb-12 border-b border-slate-200/60">
              <h2 className="text-lg font-medium text-slate-900 mb-4">1. What we collect</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-slate-700 mb-2">GitHub data (read-only)</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-3">
                    When you connect GitHub, we request read-only access to your public activity. We analyze:
                  </p>
                  <ul className="space-y-1.5">
                    {[
                      "Commit frequency and timing patterns",
                      "Programming language distribution across public repositories",
                      "Repository activity over rolling time windows",
                      "General contribution cadence (velocity)",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                        <span className="text-slate-300 mt-0.5">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 p-4 bg-slate-50 border border-slate-200/80 rounded-xl">
                    <p className="text-sm text-slate-600">
                      <span className="font-medium text-slate-800">We never access:</span> your source code, private repositories, commit messages, issue content, pull request details, or any proprietary intellectual property. We analyze patterns, not content.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-slate-700 mb-2">Contact information</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    We collect your email address when you submit a waitlist form. This is used only to notify you about platform access and launch updates. We use Tally to process form submissions — their privacy policy applies to form data in transit.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-slate-700 mb-2">Your handle and identity</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    You choose your Builder handle during signup. Your real name and employer are never collected as part of your public-facing profile — that&apos;s the point of the Blinded Identity Model.
                  </p>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="pb-12 border-b border-slate-200/60">
              <h2 className="text-lg font-medium text-slate-900 mb-4">2. How we use your data</h2>
              <div className="space-y-3">
                {[
                  { title: "To generate your Builder Pass", body: "Your GitHub activity powers your Stack Radar, velocity score, and signal stats. This is the core of the product — your pass updates automatically as you ship." },
                  { title: "To match you with founders", body: "Founders search The Lineup by stack and signal. They see your anonymized handle and data — never your identity — until you accept their request." },
                  { title: "To communicate with you", body: "We&apos;ll email you when the platform launches, when a founder requests an intro, or when there&apos;s a meaningful update to your account. We don&apos;t send marketing spam." },
                  { title: "To improve the platform", body: "Aggregate, anonymized patterns help us understand how the product is being used. We don&apos;t sell or share this data." },
                ].map(({ title, body }) => (
                  <div key={title} className="p-4 bg-white border border-slate-200/80 rounded-xl">
                    <h4 className="text-sm font-medium text-slate-800 mb-1">{title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: body }} />
                  </div>
                ))}
              </div>
            </div>

            {/* 3 */}
            <div className="pb-12 border-b border-slate-200/60">
              <h2 className="text-lg font-medium text-slate-900 mb-4">3. Who sees your data</h2>
              <div className="space-y-3">
                <div className="p-4 bg-white border border-slate-200/80 rounded-xl">
                  <h4 className="text-sm font-medium text-slate-800 mb-1">Verified founders</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Founders on The Lineup see your handle, Stack Radar, signal stats, and peer vouches. They never see your name, GitHub username, employer, or any identifying information unless you explicitly accept their intro request.
                  </p>
                </div>
                <div className="p-4 bg-white border border-slate-200/80 rounded-xl">
                  <h4 className="text-sm font-medium text-slate-800 mb-1">Recruiters</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Recruiters have no access to Paddleout. Not now, not ever. It&apos;s not a policy — it&apos;s a product constraint built into how access is granted.
                  </p>
                </div>
                <div className="p-4 bg-slate-800 text-white rounded-xl">
                  <h4 className="text-sm font-medium text-white mb-1">Third parties</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    We do not sell, rent, or share your personal data with any third party for marketing or commercial purposes. Full stop.
                  </p>
                </div>
              </div>
            </div>

            {/* 4 */}
            <div className="pb-12 border-b border-slate-200/60">
              <h2 className="text-lg font-medium text-slate-900 mb-4">4. GitHub access and revocation</h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                We connect to GitHub using OAuth with read-only scope. You can revoke our access at any time from your GitHub settings under <span className="font-medium text-slate-700">Settings → Applications → Authorized OAuth Apps</span>. Revoking access removes our ability to refresh your Builder Pass data — your existing pass will remain until you request deletion.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed">
                We do not store your GitHub credentials. Authentication is handled entirely through GitHub&apos;s OAuth flow.
              </p>
            </div>

            {/* 5 */}
            <div className="pb-12 border-b border-slate-200/60">
              <h2 className="text-lg font-medium text-slate-900 mb-4">5. Data retention and deletion</h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                You can request deletion of your account and all associated data at any time by emailing <a href="mailto:info@paddleout.io" className="text-slate-700 font-medium hover:underline">info@paddleout.io</a>. We will process deletion requests within 14 days.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed">
                Email addresses collected via waitlist forms are retained until the platform launches or until you unsubscribe. We don&apos;t hold onto data we don&apos;t need.
              </p>
            </div>

            {/* 6 */}
            <div className="pb-12 border-b border-slate-200/60">
              <h2 className="text-lg font-medium text-slate-900 mb-4">6. Cookies and analytics</h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                We use minimal, privacy-respecting analytics to understand how the site is used — page views, referral sources, and basic engagement. We don&apos;t use tracking cookies for advertising or sell behavioral data.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-lg font-medium text-slate-900 mb-4">7. Questions</h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                If you have any questions about this policy, how your data is handled, or want to request deletion, reach us at <a href="mailto:info@paddleout.io" className="text-slate-700 font-medium hover:underline">info@paddleout.io</a>. We&apos;re a small team and we read everything.
              </p>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200/60 py-6 px-6 bg-slate-50 mt-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-slate-400">Paddleout © 2026</p>
          <Link href="/about" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">Why we exist</Link>
          <a href="mailto:info@paddleout.io" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">
            info@paddleout.io
          </a>
        </div>
      </footer>
    </div>
  );
}
