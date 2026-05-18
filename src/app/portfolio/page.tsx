import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";
import { fetchIdeas } from "@/lib/data";

export default async function PortfolioPage() {
  const ideas = await fetchIdeas();
  
  // Ensure idea.bucket is always defined and matches expected types
  type IdeaBucket = 'BUILD FIRST' | 'HIGH PRIORITY' | 'BACKLOG' | 'IGNORE / MERGE';
  const isValidBucket = (bucket: string): bucket is IdeaBucket => {
    return ['BUILD FIRST', 'HIGH PRIORITY', 'BACKLOG', 'IGNORE / MERGE'].includes(bucket);
  };
  
  if (!ideas.length) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 xl:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="h-8 w-32 mb-4 bg-gray-700 rounded" />
              <div className="space-y-4">
                {[...Array(3)].map((_, j) => (
                  <div key={j} className="h-24 w-full rounded-2xl bg-gray-700" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const buildFirst = ideas.filter((idea) => isValidBucket(idea.bucket) && idea.bucket === "BUILD FIRST");
  const highPriority = ideas.filter((idea) => isValidBucket(idea.bucket) && idea.bucket === "HIGH PRIORITY");
  const backlog = ideas.filter((idea) => isValidBucket(idea.bucket) && idea.bucket === "BACKLOG");
  const ignoreOrMerge = ideas.filter((idea) => isValidBucket(idea.bucket) && idea.bucket === "IGNORE / MERGE");

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <SubpageVisual variant="default" />
      <div className="max-w-3xl">
        <div className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">
          Portfolio
        </div>
        <h1 className="mt-3 text-4xl font-semibold text-white">
          Venture portfolio queue
        </h1>
        <p className="mt-4 text-lg leading-8 text-neutral-300">
          This is the studio-wide portfolio view of what gets built now, what is
          queued next, and what stays in the backlog.
        </p>
      </div>

      <div className="mt-10 grid gap-6 xl:grid-cols-4">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Build First</h2>
          <div className="mt-4 space-y-4">
            {buildFirst.map((idea) => (
              <Link
                key={idea.slug}
                href={`/ideas/${idea.slug}`}
                className="block rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-cyan-400/30"
              >
                <div className="text-sm text-cyan-300">{idea.category}</div>
                <div className="mt-1 font-medium text-white">{idea.title}</div>
                <div className="mt-2 text-sm text-neutral-400">
                  Adjusted {idea.confidenceAdjustedScore}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">High Priority</h2>
          <div className="mt-4 space-y-4">
            {highPriority.map((idea) => (
              <Link
                key={idea.slug}
                href={`/ideas/${idea.slug}`}
                className="block rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-cyan-400/30"
              >
                <div className="text-sm text-cyan-300">{idea.category}</div>
                <div className="mt-1 font-medium text-white">{idea.title}</div>
                <div className="mt-2 text-sm text-neutral-400">
                  Adjusted {idea.confidenceAdjustedScore}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Backlog</h2>
          <div className="mt-4 space-y-4">
            {backlog.map((idea) => (
              <Link
                key={idea.slug}
                href={`/ideas/${idea.slug}`}
                className="block rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-cyan-400/30"
              >
                <div className="text-sm text-cyan-300">{idea.category}</div>
                <div className="mt-1 font-medium text-white">{idea.title}</div>
                <div className="mt-2 text-sm text-neutral-400">
                  Adjusted {idea.confidenceAdjustedScore}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Ignore / Merge</h2>
          <div className="mt-4 space-y-4">
            {ignoreOrMerge.map((idea) => (
              <Link
                key={idea.slug}
                href={`/ideas/${idea.slug}`}
                className="block rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-cyan-400/30"
              >
                <div className="text-sm text-cyan-300">{idea.category}</div>
                <div className="mt-1 font-medium text-white">{idea.title}</div>
                <div className="mt-2 text-sm text-neutral-400">
                  Adjusted {idea.confidenceAdjustedScore}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
