import { supabase } from "./supabase";
import { SpawnPackDB } from "./phase3-types";

export async function persistSpawnPack(ideaId: string, spawnPack: SpawnPackDB) {
  const { data, error } = await supabase
    .from("spawn_packs")
    .upsert({
      idea_id: ideaId,
      product_thesis: spawnPack.productThesis,
      icp: spawnPack.icp,
      mvp_features: spawnPack.mvpFeatures,
      monetization_strategy: spawnPack.monetizationStrategy,
      gtm_strategy: spawnPack.gtmStrategy,
      expansion_roadmap: spawnPack.expansionRoadmap,
    })
    .select();

  if (error) {
    throw error;
  }

  return data;
}

export async function fetchSpawnPack(ideaId: string) {
  const { data, error } = await supabase
    .from("spawn_packs")
    .select("*")
    .eq("idea_id", ideaId)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}
