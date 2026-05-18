begin;

create table if not exists venturerank_os.spawn_packs (
  id uuid primary key default public.gen_random_uuid(),
  idea_id uuid not null references venturerank_os.ideas(id) on delete cascade,
  product_thesis text not null,
  icp jsonb not null default '[]'::jsonb,
  mvp_features jsonb not null default '[]'::jsonb,
  monetization_strategy jsonb not null default '[]'::jsonb,
  gtm_strategy jsonb not null default '[]'::jsonb,
  expansion_roadmap jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint spawn_packs_icp_is_array check (jsonb_typeof(icp) = 'array'),
  constraint spawn_packs_mvp_features_is_array check (jsonb_typeof(mvp_features) = 'array'),
  constraint spawn_packs_monetization_strategy_is_array check (jsonb_typeof(monetization_strategy) = 'array'),
  constraint spawn_packs_gtm_strategy_is_array check (jsonb_typeof(gtm_strategy) = 'array'),
  constraint spawn_packs_expansion_roadmap_is_array check (jsonb_typeof(expansion_roadmap) = 'array'),
  constraint spawn_packs_unique_idea unique (idea_id)
);

create index if not exists spawn_packs_idea_id_idx
  on venturerank_os.spawn_packs (idea_id);

create or replace function venturerank_os.set_spawn_packs_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists set_spawn_packs_updated_at on venturerank_os.spawn_packs;

create trigger set_spawn_packs_updated_at
before update on venturerank_os.spawn_packs
for each row
execute function venturerank_os.set_spawn_packs_updated_at();

alter table venturerank_os.spawn_packs enable row level security;

drop policy if exists spawn_packs_select_authenticated on venturerank_os.spawn_packs;
create policy spawn_packs_select_authenticated
on venturerank_os.spawn_packs
for select
to authenticated
using (true);

commit;
