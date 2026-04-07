import { NextResponse } from "next/server";
import { fetchIdeas } from "@/lib/data";

export async function GET() {
  try {
    const ideas = await fetchIdeas();

    const rankings = ideas.map((idea, index) => ({
      rank: index + 1,
      slug: idea.slug,
      title: idea.title,
      bucket: idea.bucket,
      priorityScore: idea.priorityScore,
      masterRankScore: idea.masterRankScore,
      confidenceAdjustedScore: idea.confidenceAdjustedScore,
    }));

    return NextResponse.json({ ok: true, rankings });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to fetch rankings";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
