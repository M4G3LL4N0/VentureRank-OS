import { ideas } from "@/lib/mock-data";
import { KpiCard } from "@/components/kpi-card";
import { IdeaCard } from "@/components/idea-card";
import { ActivityItem } from "@/components/activity-item";

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

      <div className="mt-10 grid gap-4 grid-cols-2 md:grid-cols-4">
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

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          {ideas.slice(0, 4).map((idea) => (
            <IdeaCard key={idea.slug} idea={idea} />
          ))}
        </div>

        <div className="space-y-6">
          <div className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            Recent Activity
          </div>
          <div className="space-y-3">
            <ActivityItem
              idea={ideas[1]}
              change="up"
              amount={2}
              date={new Date()}
            />
            <ActivityItem
              idea={ideas[3]}
              change="down"
              amount={1}
              date={new Date(Date.now() - 86400000)}
            />
            <ActivityItem
              idea={ideas[0]}
              change="up"
              amount={1}
              date={new Date(Date.now() - 172800000)}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
