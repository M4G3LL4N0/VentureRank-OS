import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";
import { VentureRankScorerDemo } from "@/components/VentureRankScorerDemo";
import { TrustStrip } from "@/components/TrustStrip";

export const metadata = {
  title: "Demo",
  description: "DEMO: Score sample venture ideas locally.",
};

export default function DemoPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <SubpageVisual variant="demo" />
      <TrustStrip />
      <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">DEMO workspace</p>
      <h1 className="mt-3 text-3xl font-semibold text-white">Venture scoring pilot</h1>
      <p className="mt-3 text-white/70">
        Sample ideas only. Scores and buckets are illustrative, not investor recommendations.
      </p>
      <VentureRankScorerDemo />
      <Link href="/" className="mt-8 inline-block text-sm text-cyan-300 hover:underline">
        ← Back to home
      </Link>
    </main>
  );
}
