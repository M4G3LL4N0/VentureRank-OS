export type DecisionBucket =
  | "BUILD FIRST"
  | "HIGH PRIORITY"
  | "BACKLOG"
  | "IGNORE / MERGE";

export type IdeaMetricSet = {
  painSeverity: number;
  frequency: number;
  marketSize: number;
  monetizationClarity: number;
  dataAvailability: number;
  defensibility: number;
  networkEffects: number;
  automationPotential: number;
  founderFit: number;
  strategicLeverage: number;
  regulatoryRisk: number;
  buildSimplicity: number;
  retentionPotential: number;
  narrativePower: number;
  expansionSurface: number;
};

export type Idea = IdeaMetricSet & {
  title: string;
  slug: string;
  category: string;
  description: string;
  urgencyScore: number;
  buildabilityScore: number;
  founderAdvantageScore: number;
  confidenceScore: number;
  rationale: string;
  risks: string[];
  recommendedAction: string;
  bucket: DecisionBucket;
};

export type RankedIdea = Idea & {
  priorityScore: number;
  masterRankScore: number;
  confidenceAdjustedScore: number;
};

export type SpawnPack = {
  productThesis: string;
  icp: string[];
  mvpFeatures: string[];
  monetizationStrategy: string[];
  gtmStrategy: string[];
  expansionRoadmap: string[];
};
