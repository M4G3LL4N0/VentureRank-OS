import { ideas as mockIdeas } from "@/lib/mock-data";
import { mapIdeaRowToRankedIdea } from "@/lib/mappers";
import { RankedIdeaView, VentureIdeaRow, SpawnPack } from "@/lib/phase3-types";
import { getSupabaseClient } from "@/lib/supabase";

type IdeaBucket = RankedIdeaView["bucket"];

export async function fetchIdeas(opts?: { status?: IdeaBucket }): Promise<RankedIdeaView[]> {
  const supabase = getSupabaseClient();

  if (!supabase) {
    const fallback = [...mockIdeas];
    if (opts?.status) {
      return fallback.filter((idea) => idea.bucket === opts.status);
    }
    return fallback;
  }

  let query = ((supabase as any).schema("venturerank_os").from("ideas") as any)
    .select("*")
    .order("created_at", { ascending: false });

  if (opts?.status) {
    query = query.eq("bucket", opts.status);
  }

  const { data, error } = await query;

  if (error || !data || data.length === 0) {
    const fallback = [...mockIdeas];

    if (opts?.status) {
      return fallback.filter((idea) => idea.bucket === opts.status);
    }

    return fallback;
  }

  return (data as VentureIdeaRow[])
    .map(mapIdeaRowToRankedIdea)
    .sort((a, b) => b.confidenceAdjustedScore - a.confidenceAdjustedScore);
}

export async function fetchIdeaBySlug(slug: string): Promise<RankedIdeaView | null> {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return mockIdeas.find((idea) => idea.slug === slug) ?? null;
  }

  const { data, error } = await ((supabase as any)
    .schema("venturerank_os")
    .from("ideas") as any)
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error || !data) {
    return mockIdeas.find((idea) => idea.slug === slug) ?? null;
  }

  return mapIdeaRowToRankedIdea(data as VentureIdeaRow);
}

export function buildSpawnPack(idea: RankedIdeaView): SpawnPack {
  return {
    productThesis: `${idea.title} is an institutional-grade ${idea.category.toLowerCase()} platform that transforms fragmented venture signals into ranked, structured opportunities with clear execution paths and investor-grade scoring. The system combines AI-powered analysis with structured venture frameworks to surface the highest-conviction build candidates.`,
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
