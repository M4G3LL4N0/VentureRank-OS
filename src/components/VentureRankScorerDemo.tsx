"use client";

import { useState } from "react";

const samples = [
  { name: "FleetOps API", market: 8, moat: 6, speed: 9 },
  { name: "Wellness Wiki", market: 7, moat: 4, speed: 7 },
  { name: "Legacy Bridge SaaS", market: 9, moat: 7, speed: 5 },
];

export function VentureRankScorerDemo() {
  const [idx, setIdx] = useState(0);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [bucket, setBucket] = useState("");

  function run() {
    setLoading(true);
    setScore(null);
    setBucket("");
    window.setTimeout(() => {
      const s = samples[idx];
      const total = Math.round(((s.market + s.moat + s.speed) / 3) * 10) / 10;
      setScore(total);
      setBucket(total >= 7.5 ? "BUILD FIRST" : total >= 6 ? "HIGH PRIORITY" : "WATCH");
      setLoading(false);
    }, 700);
  }

  const s = samples[idx];

  return (
    <div className="mt-8 rounded-2xl border border-cyan-400/25 bg-cyan-400/5 p-6">
      <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">Interactive pilot (DEMO)</p>
      <h3 className="mt-2 text-lg font-semibold text-white">Score a venture idea</h3>
      <select
        className="mt-4 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white"
        value={idx}
        onChange={(e) => setIdx(Number(e.target.value))}
      >
        {samples.map((x, i) => (
          <option key={x.name} value={i}>
            {x.name}
          </option>
        ))}
      </select>
      <p className="mt-3 text-xs text-white/50">
        DEMO inputs: market {s.market}/10, moat {s.moat}/10, speed {s.speed}/10
      </p>
      <button
        type="button"
        onClick={run}
        disabled={loading}
        className="mt-4 rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 disabled:opacity-60"
      >
        {loading ? "Scoring…" : "Run demo score"}
      </button>
      {score !== null && (
        <div className="mt-6 text-sm text-white/80">
          <p>
            <span className="text-white/45">Confidence-adjusted score:</span> {score}/10
          </p>
          <p className="mt-2">
            <span className="text-white/45">Bucket:</span> {bucket} (DEMO)
          </p>
        </div>
      )}
    </div>
  );
}
