import { ideas } from "@/lib/mock-data";
import { IdeaCard } from "@/components/idea-card";

export default function IdeasPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
      <div className="max-w-3xl">
        <div className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">
          Ideas
        </div>
        <h1 className="mt-3 text-4xl font-semibold text-white">
          Structured startup opportunities
        </h1>
        <p className="mt-4 text-lg leading-8 text-neutral-300">
          Each idea is normalized, scored, ranked, and assigned a decision
          bucket based on leverage, monetization, defensibility, and speed.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {ideas.map((idea) => (
          <IdeaCard key={idea.slug} idea={idea} />
        ))}
      </div>
    </main>
  );
}
