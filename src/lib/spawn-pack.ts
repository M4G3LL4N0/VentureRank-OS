import { getSupabaseClient } from "./supabase";
import { SpawnPack } from "./phase3-types";

type SupabaseError = { message: string };
type SupabaseSingleResult = { data: unknown | null; error: SupabaseError | null };
type SupabaseMutation = {
  upsert(payload: unknown, options?: { onConflict?: string }): SupabaseMutation;
  select(columns?: string): SupabaseMutation;
  maybeSingle(): PromiseLike<SupabaseSingleResult>;
};
type SchemaScopedClient = {
  schema(schemaName: string): {
    from(tableName: string): SupabaseMutation;
  };
};
type SpawnPackRow = {
  idea_id: string;
  product_thesis: string;
  icp: string[];
  mvp_features: string[];
  monetization_strategy: string[];
  gtm_strategy: string[];
  expansion_roadmap: string[];
};

function toSpawnPackRow(ideaId: string, spawnPack: SpawnPack): SpawnPackRow {
  return {
    idea_id: ideaId,
    product_thesis: spawnPack.productThesis,
    icp: spawnPack.icp,
    mvp_features: spawnPack.mvpFeatures,
    monetization_strategy: spawnPack.monetizationStrategy,
    gtm_strategy: spawnPack.gtmStrategy,
    expansion_roadmap: spawnPack.expansionRoadmap,
  };
}

export async function persistSpawnPack(ideaId: string, spawnPack: SpawnPack) {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return null;
  }

  const payload = toSpawnPackRow(ideaId, spawnPack);

  const { data, error } = await (supabase as unknown as SchemaScopedClient)
    .schema("venturerank_os")
    .from("spawn_packs")
    .upsert(payload, { onConflict: "idea_id" })
    .select()
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return data ?? null;
}
