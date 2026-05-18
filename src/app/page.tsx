import Link from "next/link";
import { MarketingGraphicsStack } from "@/components/MarketingGraphicsStack";
import { ProcessFlowSection } from "@/components/ProcessFlowSection";
import { HeroProductPanel } from "@/components/HeroProductPanel";
import { TrustStrip } from "@/components/TrustStrip";
import { KpiCard } from "@/components/kpi-card";
import { IdeaCard } from "@/components/idea-card";
import { fetchIdeas } from "@/lib/data";

export const revalidate = 3600;

export default async function HomePage() {
  const ideas = await fetchIdeas();
  const buildFirst = ideas.filter((idea) => idea.bucket === "BUILD FIRST").length;
  const highPriority = ideas.filter((idea) => idea.bucket === "HIGH PRIORITY").length;
  const avgScore = (
    ideas.reduce((sum, idea) => sum + idea.confidenceAdjustedScore, 0) / ideas.length
  ).toFixed(1);

  return (
    <main className="relative motion-fade-up">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <TrustStrip />
        </div>

      <section className="relative mx-auto max-w-7xl px-4 pb-12 pt-14 sm:px-6 md:pb-14 md:pt-20">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl md:-left-16" aria-hidden />
        <div className="pointer-events-none absolute -right-20 top-32 h-64 w-64 rounded-full bg-indigo-500/12 blur-3xl" aria-hidden />

        <div className="relative max-w-4xl">
          <div className="inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/[0.12] px-4 py-2 text-sm text-cyan-100 shadow-[0_0_32px_rgba(34,211,238,0.12)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-0.5">
            Investor-grade venture prioritization engine
          </div>

          <h1 className="mt-7 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.05]">
            <span className="bg-gradient-to-br from-white via-white to-neutral-400 bg-clip-text text-transparent">
              Rank smarter.
            </span>
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-br from-cyan-100 via-cyan-200 to-cyan-500 bg-clip-text text-transparent">
              Build faster.
            </span>
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-br from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
              Win bigger.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">
            VentureRank OS is the operating system for venture creation. We combine AI-powered scoring with structured execution frameworks to help founders, studios, and investors build smarter, faster, and with greater conviction.
          </p>

          <div className="mt-9 flex flex-wrap gap-3 sm:gap-4">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-300 via-cyan-400 to-sky-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_40px_rgba(34,211,238,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(34,211,238,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Open dashboard
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-7 py-3 text-sm font-semibold text-cyan-100 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-400/15"
            >
              Try scoring demo
            </Link>
            <Link
              href="/rankings"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-7 py-3 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              View rankings
            </Link>
          </div>
        </div>

        <div className="relative mt-14 grid gap-4 sm:mt-16 md:grid-cols-3">
          <KpiCard
            label="Ideas scored"
            value={String(ideas.length)}
            subtext="Structured opportunities actively ranked"
          />
          <KpiCard
            label="Build first"
            value={String(buildFirst)}
            subtext="Immediate build candidates"
          />
          <KpiCard
            label="Average adjusted score"
            value={avgScore}
            subtext="Confidence-adjusted startup quality"
          />
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-24">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-neutral-500 sm:text-sm">
              Top opportunities
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Highest-ranked startups right now
            </h2>
          </div>
          <div className="inline-flex w-fit items-center rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-xs text-neutral-200 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md sm:text-sm">
            {highPriority} additional high-priority opportunities
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {ideas.slice(0, 6).map((idea) => (
            <IdeaCard key={idea.slug} idea={idea} />
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6"><HeroProductPanel /></section>
      <ProcessFlowSection />
    <MarketingGraphicsStack />
    </main>
  );
}
