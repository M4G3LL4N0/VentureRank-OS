export interface Idea {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  painSeverity: number;
  frequency: number;
  marketSize: number;
  monetizationClarity: number;
  dataAvailability: number;
  defensibility: number;
  networkEffects: number;
  automationPotential: number;
  founderFit: number;
  urgencyScore: number;
  buildabilityScore: number;
  founderAdvantageScore: number;
  confidenceScore: number;
  strategicLeverage: number;
  regulatoryRisk: number;
  buildSimplicity: number;
  retentionPotential: number;
  narrativePower: number;
  expansionSurface: number;
  bucket: 'BUILD FIRST' | 'HIGH PRIORITY' | 'BACKLOG';
  rationale: string;
  risks: string[];
  recommendedAction: string;
  createdAt: string;
  updatedAt: string;
}

export interface RankedIdea extends Idea {
  priorityScore: number;
  masterRankScore: number;
  confidenceAdjustedScore: number;
}
