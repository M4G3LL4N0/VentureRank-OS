import { supabase } from "@/lib/supabase";
import { ideas as mockIdeas } from "@/lib/mock-data";
import { mapIdeaRowToRankedIdea } from "@/lib/mappers";
import { RankedIdeaView, VentureIdeaRow, SpawnPack } from "@/lib/phase3-types";

export async function fetchIdeas(): Promise<RankedIdeaView[]> {
  const { data, error } = await supabase
    .from("ideas")
    .select("*")
    .order("created_at", { ascending: false });

  if (error || !data || data.length === 0) {
    return mockIdeas;
  }

  return (data as VentureIdeaRow[])
    .map(mapIdeaRowToRankedIdea)
    .sort((a, b) => b.confidenceAdjustedScore - a.confidenceAdjustedScore);
}

export async function fetchIdeaBySlug(slug: string): Promise<RankedIdeaView | null> {
  const { data, error } = await supabase
    .from("ideas")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error || !data) {
    const fallback = mockIdeas.find((idea) => idea.slug === slug);
    return fallback ?? null;
  }

  return mapIdeaRowToRankedIdea(data as VentureIdeaRow);
}

export function buildSpawnPack(idea: RankedIdeaView): SpawnPack {
  return {
    productThesis: `${idea.title} is a ${idea.category.toLowerCase()} platform that transforms fragmented information into a structured decision system with scoring, prioritization, and execution intelligence.`,
    icp: [
      "Founders evaluating what to build next",
      "Operators who need structured opportunity triage",
      "Small venture studios and angel-backed builders",
    ],
    mvpFeatures: [
      "Idea intake and structured scoring",
      "Ranked opportunity dashboard",
      "Confidence-adjusted prioritization",
      "Spawn pack generation",
      "Decision buckets and execution queue",
    ],
    monetizationStrategy: [
      "Founder subscription plans",
      "Team workspace pricing",
      "Premium AI-generated venture packs",
      "Advisory and export tools",
    ],
    gtmStrategy: [
      "Use internally first and publish the ranked output",
      "Convert founder traffic through content and demos",
      "Offer premium scoring and spawn workflows",
      "Expand into a multi-company venture operating system",
    ],
    expansionRoadmap: [
      "Persist spawn packs",
      "Add ingestion pipelines",
      "Add portfolio and workspace views",
      "Add API access for rankings",
      "Expand into full venture studio operations",
    ],
  };
}
