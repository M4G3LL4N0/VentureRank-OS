import { notFound } from "next/navigation";
import { ideas } from "@/lib/mock-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const metricLabels: Record<string, string> = {
  painSeverity: "Pain Severity",
  frequency: "Frequency",
  marketSize: "Market Size",
  monetizationClarity: "Monetization Clarity",
  dataAvailability: "Data Availability",
  defensibility: "Defensibility",
  networkEffects: "Network Effects",
  automationPotential: "Automation Potential",
  founderFit: "Founder Fit",
  strategicLeverage: "Strategic Leverage",
  regulatoryRisk: "Regulatory Risk",
  buildSimplicity: "Build Simplicity",
  retentionPotential: "Retention Potential",
  narrativePower: "Narrative Power",
  expansionSurface: "Expansion Surface",
};

export default async function IdeaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const idea = ideas.find((item) => item.slug === slug);

  if (!idea) return notFound();

  const metrics = Object.entries(metricLabels).map(([key, label]) => ({
    key,
    label,
    value: idea[key as keyof typeof idea],
  }));

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-4xl">
        <div className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">
          {idea.category}
        </div>
        <h1 className="mt-3 text-5xl font-semibold text-white">{idea.title}</h1>
        <p className="mt-5 text-lg leading-8 text-neutral-300">
          {idea.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            {idea.bucket}
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200">
            Priority Score {idea.priorityScore}
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200">
            Master Rank {idea.masterRankScore}
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200">
            Confidence Adjusted {idea.confidenceAdjustedScore}
          </span>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">Score breakdown</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {metrics.map((metric) => (
              <div
                key={metric.key}
                className="rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <div className="text-sm text-neutral-400">{metric.label}</div>
                <div className="mt-2 text-2xl font-semibold text-white">
                  {String(metric.value)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">Rationale</h2>
            <p className="mt-4 text-sm leading-7 text-neutral-300">
              {idea.rationale}
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">Top risks</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-300">
              {idea.risks.map((risk) => (
                <li key={risk}>• {risk}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">Recommended action</h2>
            <p className="mt-4 text-sm leading-7 text-neutral-300">
              {idea.recommendedAction}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
