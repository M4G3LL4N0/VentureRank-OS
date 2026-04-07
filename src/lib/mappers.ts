import { enrichIdea } from "@/lib/scoring";
import { RankedIdeaView, VentureIdeaRow } from "@/lib/phase3-types";

function normalizeRisks(value: VentureIdeaRow["risks"]): string[] {
  if (Array.isArray(value)) {
    return value.filter((item): item is string => typeof item === "string");
  }
  return [];
}

function normalizeBucket(value: string): RankedIdeaView["bucket"] {
  if (
    value === "BUILD FIRST" ||
    value === "HIGH PRIORITY" ||
    value === "BACKLOG" ||
    value === "IGNORE / MERGE"
  ) {
    return value;
  }

  return "BACKLOG";
}

export function mapIdeaRowToRankedIdea(row: VentureIdeaRow): RankedIdeaView {
  const enriched = enrichIdea({
    title: row.title,
    slug: row.slug,
    category: row.category,
    description: row.description,
    painSeverity: row.pain_severity,
    frequency: row.frequency,
    marketSize: row.market_size,
    monetizationClarity: row.monetization_clarity,
    dataAvailability: row.data_availability,
    defensibility: row.defensibility,
    networkEffects: row.network_effects,
    automationPotential: row.automation_potential,
    founderFit: row.founder_fit,
    strategicLeverage: row.strategic_leverage,
    regulatoryRisk: row.regulatory_risk,
    buildSimplicity: row.build_simplicity,
    retentionPotential: row.retention_potential,
    narrativePower: row.narrative_power,
    expansionSurface: row.expansion_surface,
    urgencyScore: row.urgency_score,
    buildabilityScore: row.buildability_score,
    founderAdvantageScore: row.founder_advantage_score,
    confidenceScore: row.confidence_score,
    bucket: normalizeBucket(row.bucket),
    rationale: row.rationale,
    risks: normalizeRisks(row.risks),
    recommendedAction: row.recommended_action,
  });

  return {
    id: row.id,
    ...enriched,
  };
}
