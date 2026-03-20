import { Idea, RankedIdea } from "@/lib/types";

export function calculatePriorityScore(idea: Idea) {
  return (
    idea.painSeverity * 1.4 +
    idea.frequency * 1.2 +
    idea.marketSize * 1.3 +
    idea.monetizationClarity * 1.4 +
    idea.dataAvailability * 1.0 +
    idea.defensibility * 1.3 +
    idea.networkEffects * 1.2 +
    idea.automationPotential * 1.1 +
    idea.founderFit * 1.3 +
    idea.strategicLeverage * 1.5 +
    idea.regulatoryRisk * -1.0 +
    idea.buildSimplicity * 0.9 +
    idea.retentionPotential * 1.2 +
    idea.narrativePower * 0.8 +
    idea.expansionSurface * 1.3
  );
}

export function calculateMasterRankScore(idea: Idea) {
  const priorityScore = calculatePriorityScore(idea);

  return (
    priorityScore * 0.55 +
    idea.urgencyScore * 0.2 +
    idea.buildabilityScore * 0.15 +
    idea.founderAdvantageScore * 0.1
  );
}

export function calculateConfidenceAdjustedScore(idea: Idea) {
  const masterRankScore = calculateMasterRankScore(idea);
  return masterRankScore * (0.7 + 0.03 * idea.confidenceScore);
}

export function enrichIdea(idea: Idea): RankedIdea {
  const priorityScore = calculatePriorityScore(idea);
  const masterRankScore = calculateMasterRankScore(idea);
  const confidenceAdjustedScore = calculateConfidenceAdjustedScore(idea);

  return {
    ...idea,
    priorityScore: Number(priorityScore.toFixed(1)),
    masterRankScore: Number(masterRankScore.toFixed(1)),
    confidenceAdjustedScore: Number(confidenceAdjustedScore.toFixed(1)),
  };
}

export function sortIdeasByRank<T extends Idea>(ideas: T[]): RankedIdea[] {
  return ideas
    .map((idea) => enrichIdea(idea))
    .sort((a, b) => b.confidenceAdjustedScore - a.confidenceAdjustedScore);
}
