import Link from "next/link";
import { ideas } from "@/lib/mock-data";
import { KpiCard } from "@/components/kpi-card";
import { IdeaCard } from "@/components/idea-card";

export default function HomePage() {
  const buildFirst = ideas.filter((idea) => idea.bucket === "BUILD FIRST").length;
  const highPriority = ideas.filter((idea) => idea.bucket === "HIGH PRIORITY").length;
  const avgScore = (
    ideas.reduce((sum, idea) => sum + idea.confidenceAdjustedScore, 0) / ideas.length
  ).toFixed(1);

  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-20">
        <div className="max-w-4xl">
          <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            Venture studio brain for knowledge-layer startups
          </div>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Rank what matters. Spawn what wins. Build the best startup first.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            VentureRank OS is a scoring and spawning engine for next-generation
            Wikipedia-style startups: access systems, operator intelligence,
            legal navigation, city intelligence, and more.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
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

        <div className="mt-14 grid gap-4 md:grid-cols-3">
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

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Top opportunities
            </div>
            <h2 className="mt-2 text-3xl font-semibold text-white">
              Highest-ranked startups right now
            </h2>
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300">
            {highPriority} additional high-priority opportunities
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {ideas.slice(0, 6).map((idea) => (
            <IdeaCard key={idea.slug} idea={idea} />
          ))}
        </div>
      </section>
    </main>
  );
}
