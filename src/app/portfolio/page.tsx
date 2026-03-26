import Link from "next/link";
import { fetchIdeas } from "@/lib/data";

export default async function PortfolioPage() {
  const ideas = await fetchIdeas({ status: 'active' });

  const buildFirst = ideas.filter((idea) => idea.bucket === "BUILD FIRST");
  const highPriority = ideas.filter((idea) => idea.bucket === "HIGH PRIORITY");
  const backlog = ideas.filter((idea) => idea.bucket === "BACKLOG");

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
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

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
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
      </div>
    </main>
  );
}
