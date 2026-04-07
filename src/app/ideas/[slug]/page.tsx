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

function buildSpawnPack(idea: (typeof ideas)[number]) {
  return {
    productThesis: `${idea.title} is an AI-powered ${idea.category.toLowerCase()} platform that transforms fragmented knowledge into ranked, structured venture opportunities with clear execution paths and investor-grade scoring.`,
    icp: [
      "Seed-stage founders evaluating what to build next",
      "Emerging venture studios prioritizing their pipelines",
      "Angel investors and micro-funds sourcing deal flow",
      "Operators building repeatable venture frameworks",
    ],
    mvpFeatures: [
      "AI-powered idea intake and structured scoring",
      "Investor-grade opportunity ranking system",
      "Confidence-adjusted prioritization engine",
      "Automated spawn pack generation",
      "Portfolio-level execution tracking",
    ],
    monetizationStrategy: [
      "Founder subscription plans ($99/mo)",
      "Venture studio workspace pricing ($499/mo)",
      "Premium AI-generated venture packs ($299/pack)",
      "Enterprise API access ($999/mo)",
    ],
    gtmStrategy: [
      "Launch as internal venture studio OS",
      "Publish ranked opportunities to attract builders",
      "Convert traffic through premium scoring workflows",
      "Expand into full-stack venture operations",
    ],
    expansionRoadmap: [
      "Add portfolio management tools",
      "Integrate deal flow pipelines",
      "Launch API for rankings and scoring",
      "Add collaborative workspace features",
      "Expand into full venture studio operations",
    ],
  };
}

export default async function IdeaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const idea = ideas.find((item) => item.slug === slug);

  if (!idea) return notFound();

  const metrics = Object.entries(metricLabels).map(([key, label]) => ({
    key,
    label,
    value: idea[key as keyof typeof idea],
  }));

  const spawnPack = buildSpawnPack(idea);

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
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200">
            Urgency {idea.urgencyScore}
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200">
            Buildability {idea.buildabilityScore}
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200">
            Founder Advantage {idea.founderAdvantageScore}
          </span>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
        <section className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">Investor-grade scoring</h2>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {metrics.map((metric) => (
                <div
                  key={metric.key}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <div className="text-sm text-neutral-400">
                    {metric.label}
                    {metric.key === 'painSeverity' && (
                      <span className="ml-1 text-xs text-neutral-500">(1-10 pain scale)</span>
                    )}
                    {metric.key === 'marketSize' && (
                      <span className="ml-1 text-xs text-neutral-500">($M TAM)</span>
                    )}
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-white">
                    {String(metric.value)}
                    {metric.key === 'marketSize' && (
                      <span className="ml-1 text-sm font-normal text-neutral-400">M</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">Execution blueprint</h2>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-medium text-white">Product thesis</h3>
                <p className="mt-2 text-sm leading-7 text-neutral-300">
                  {spawnPack.productThesis}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">ICP</h3>
                <ul className="mt-2 space-y-2 text-sm leading-7 text-neutral-300">
                  {spawnPack.icp.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">MVP features</h3>
                <ul className="mt-2 space-y-2 text-sm leading-7 text-neutral-300">
                  {spawnPack.mvpFeatures.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Monetization strategy</h3>
                <ul className="mt-2 space-y-2 text-sm leading-7 text-neutral-300">
                  {spawnPack.monetizationStrategy.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">GTM strategy</h3>
                <ul className="mt-2 space-y-2 text-sm leading-7 text-neutral-300">
                  {spawnPack.gtmStrategy.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Expansion roadmap</h3>
                <ul className="mt-2 space-y-2 text-sm leading-7 text-neutral-300">
                  {spawnPack.expansionRoadmap.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
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
