import Link from "next/link";
import { ideas } from "@/lib/mock-data";

export default function RankingsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
      <div className="max-w-3xl">
        <div className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">
          Rankings
        </div>
        <h1 className="mt-3 text-4xl font-semibold text-white">
          Confidence-adjusted startup rankings
        </h1>
        <p className="mt-4 text-lg leading-8 text-neutral-300">
          Opportunities are ranked using weighted startup criteria and then
          adjusted by confidence to avoid overvaluing weak assumptions.
        </p>
      </div>

      <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <div className="grid grid-cols-[60px_1.5fr_1fr_120px_120px_140px] gap-4 border-b border-white/10 px-6 py-4 text-sm text-neutral-400">
          <div>Rank</div>
          <div>Idea</div>
          <div>Category</div>
          <div>Priority</div>
          <div>Master</div>
          <div>Adjusted</div>
        </div>

        {ideas.map((idea, index) => (
          <Link
            key={idea.slug}
            href={`/ideas/${idea.slug}`}
            className="grid grid-cols-[60px_1.5fr_1fr_120px_120px_140px] gap-4 border-b border-white/10 px-6 py-5 text-sm transition hover:bg-white/[0.04]"
          >
            <div className="font-medium text-white">#{index + 1}</div>
            <div>
              <div className="font-medium text-white">{idea.title}</div>
              <div className="mt-1 text-neutral-400">{idea.bucket}</div>
            </div>
            <div className="text-neutral-300">{idea.category}</div>
            <div className="text-neutral-300">{idea.priorityScore}</div>
            <div className="text-neutral-300">{idea.masterRankScore}</div>
            <div className="font-medium text-cyan-200">
              {idea.confidenceAdjustedScore}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
