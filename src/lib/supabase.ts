import { createClient } from "@supabase/supabase-js";

type AppSupabaseClient = ReturnType<typeof createClient>;

let cachedClient: AppSupabaseClient | null = null;

export function getSupabaseClient(): AppSupabaseClient | null {
  if (cachedClient) return cachedClient;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anon) {
    return null;
  }

  cachedClient = createClient(url, anon);

  return cachedClient;
}
