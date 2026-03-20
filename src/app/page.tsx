import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-black font-sans">
      <main className="flex flex-col w-full max-w-7xl mx-auto px-8 py-24">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-8">
            <h1 className="text-6xl font-bold text-zinc-50">
              VentureRank OS
            </h1>
            <h2 className="text-2xl text-zinc-400">
              The operating system for startup ideation, ranking, and execution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Startup Ranking"
              description="Systematically evaluate and prioritize startup ideas using our proprietary scoring framework"
            />
            <FeatureCard
              title="Founder Intelligence"
              description="Access critical knowledge bases including Operator Wiki, Legal Navigation, and City Intelligence"
            />
            <FeatureCard
              title="Execution Framework"
              description="From ideation to launch, we provide the tools and insights to build with confidence"
            />
          </div>

          <div className="flex gap-4">
            <Link
              href="/dashboard"
              className="px-6 py-3 bg-zinc-800 text-zinc-50 rounded-lg hover:bg-zinc-700 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/rankings"
              className="px-6 py-3 border border-zinc-700 text-zinc-50 rounded-lg hover:bg-zinc-800 transition-colors"
            >
              View Rankings
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors">
      <h3 className="text-xl font-semibold text-zinc-50">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </div>
  );
}
  );
}
