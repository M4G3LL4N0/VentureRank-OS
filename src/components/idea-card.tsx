import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RankedIdea } from "@/lib/types";

export function IdeaCard({ idea }: { idea: RankedIdea }) {
  return (
    <Link
      href={`/ideas/${idea.slug}`}
      className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:border-cyan-400/30 hover:bg-white/[0.07] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.05)] hover:scale-[1.02] active:scale-95"
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
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
          Priority {idea.priorityScore}
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
          Rank {idea.masterRankScore}
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
          Adjusted {idea.confidenceAdjustedScore}
        </span>
      </div>
    </Link>
  );
}
