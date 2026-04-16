import Link from "next/link";
import { ideas } from "@/lib/mock-data";
import { KpiCard } from "@/components/kpi-card";
import { IdeaCard } from "@/components/idea-card";

import { unstable_cache } from 'next/cache';

const getCachedData = unstable_cache(
  async () => {
    const buildFirst = ideas.filter((idea) => idea.bucket === "BUILD FIRST").length;
    const highPriority = ideas.filter((idea) => idea.bucket === "HIGH PRIORITY").length;
    const avgScore = (
      ideas.reduce((sum, idea) => sum + idea.confidenceAdjustedScore, 0) / ideas.length
    ).toFixed(1);
    
    return { buildFirst, highPriority, avgScore };
  },
  ['home-page-metrics'],
  { revalidate: 3600 } // 1 hour
);

export default async function HomePage() {
  const { buildFirst, highPriority, avgScore } = await getCachedData();

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-10 pt-16 md:pt-20">
        <div className="max-w-4xl">
          <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 hover:bg-cyan-400/20 transition-colors hover:scale-[1.02] active:scale-95">
            Investor-grade venture prioritization engine
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Rank smarter.<br className="hidden sm:inline" /> Build faster.<br className="hidden sm:inline" /> Win bigger.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">
            VentureRank OS is the operating system for venture creation. We combine AI-powered scoring with structured execution frameworks to help founders, studios, and investors build smarter, faster, and with greater conviction.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4 animate-fade-in">
            <Link
              href="/dashboard"
              className="rounded-2xl bg-cyan-400 px-6 py-3 font-medium text-neutral-950 transition hover:opacity-90"
            >
              Open dashboard
            </Link>
            <Link
              href="/rankings"
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              View rankings
            </Link>
          </div>
        </div>

        <div className="mt-12 sm:mt-14 grid gap-3 sm:gap-4 md:grid-cols-3">
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

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs sm:text-sm uppercase tracking-[0.2em] text-neutral-500">
              Top opportunities
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">
              Highest-ranked startups right now
            </h2>
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-neutral-300">
            {highPriority} additional high-priority opportunities
          </div>
        </div>

        <div className="grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-3">
          {ideas.slice(0, 6).map((idea) => (
            <IdeaCard key={idea.slug} idea={idea} />
          ))}
        </div>
      </section>
    </main>
  );
}
