import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RankedIdea } from "@/lib/types";

export function IdeaCard({ idea }: { idea: RankedIdea }) {
  return (
    <Link
      href={`/ideas/${idea.slug}`}
      className="group rounded-[1.35rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.42)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/35 hover:bg-white/[0.08] hover:shadow-[0_28px_90px_rgba(0,0,0,0.55),0_0_40px_rgba(34,211,238,0.08)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-cyan-300/80">
            {idea.category}
          </div>
          <h3 className="mt-2 text-xl font-semibold text-white">{idea.title}</h3>
        </div>
        <ArrowUpRight className="h-5 w-5 text-neutral-500 transition group-hover:text-cyan-300" />
      </div>

      <p className="mt-3 text-sm leading-6 text-neutral-300">{idea.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
          {idea.bucket}
        </span>
        <span 
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300"
          title={`Pain (${idea.painSeverity}) × Market (${idea.marketSize}) × Monetization (${idea.monetizationClarity})`}
        >
          Priority {idea.priorityScore}
        </span>
        <span 
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300"
          title={`Urgency (${idea.urgencyScore}) × Build (${idea.buildabilityScore}) × Fit (${idea.founderAdvantageScore})`}
        >
          Rank {idea.masterRankScore}
        </span>
        <span 
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-200"
          title={`Confidence: ${idea.confidenceScore}/10`}
        >
          Adjusted {idea.confidenceAdjustedScore}
        </span>
      </div>
    </Link>
  );
}
