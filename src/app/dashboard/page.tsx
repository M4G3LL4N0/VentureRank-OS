import { ideas } from "@/lib/mock-data";
import { KpiCard } from "@/components/kpi-card";
import { IdeaCard } from "@/components/idea-card";

export default function DashboardPage() {
  const top = ideas[0];
  const second = ideas[1];
  const buildFirst = ideas.filter((i) => i.bucket === "BUILD FIRST").length;
  const backlog = ideas.filter((i) => i.bucket === "BACKLOG").length;

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
      <div className="max-w-3xl">
        <div className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">
          Dashboard
        </div>
        <h1 className="mt-3 text-4xl font-semibold text-white">
          Your startup priority engine
        </h1>
        <p className="mt-4 text-lg leading-8 text-neutral-300">
          Review ranked ideas, compare scores, and decide which knowledge-layer
          startup gets built first and hardest.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-4">
        <KpiCard
          label="Top conviction"
          value={top.title}
          subtext={`Score: ${top.confidenceAdjustedScore} (${top.confidenceScore}/10 confidence)`}
        />
        <KpiCard
          label="Runner-up"
          value={second.title}
          subtext={`Score: ${second.confidenceAdjustedScore} (${second.confidenceScore}/10 confidence)`}
        />
        <KpiCard
          label="Build first"
          value={String(buildFirst)}
          subtext="Immediate execution candidates"
        />
        <KpiCard
          label="Backlog"
          value={String(backlog)}
          subtext="Hold until wedge strengthens"
        />
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        {ideas.slice(0, 4).map((idea) => (
          <IdeaCard key={idea.slug} idea={idea} />
        ))}
      </div>
    </main>
  );
}
