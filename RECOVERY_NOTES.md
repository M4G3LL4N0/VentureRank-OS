# RECOVERY_NOTES.md

## Startup Identity

- Startup name: VentureRank OS
- Schema name: venturerank_os
- GitHub repo: https://github.com/M4G3LL4N0/VentureRank-OS
- Shared Supabase project: core-prod
- Package manager: pnpm only
- Deployment target: Vercel manual deploy only

## Product Vision

VentureRank OS helps founders and venture studios decide what to build first by scoring, ranking, bucketing, and spawning startup opportunities. The product is a founder-grade venture prioritization system for next-generation Wikipedia-style knowledge-layer startups, not a generic SaaS dashboard.

## Website/App Structure

- `/` homepage with positioning, primary CTA, and top opportunities
- `/dashboard` founder dashboard with KPIs, top ideas, and recent ranking activity
- `/ideas` idea index with scored opportunity cards
- `/ideas/[slug]` idea detail with score breakdown, rationale, risks, recommended action, and spawn pack preview
- `/rankings` confidence-adjusted ranking table
- `/portfolio` queue grouped by Build First, High Priority, Backlog, and Ignore / Merge
- `/admin/intake` internal mock intake form
- `/api/ideas` ideas JSON
- `/api/rankings` ranked summary JSON
- `/api/spawn?slug=...` generated spawn pack JSON

## Design Direction

Dark, premium, founder-grade venture studio OS. Use clean dashboard hierarchy, cyan/blue accents, restrained cards, direct product language, and responsive layouts. Public copy should describe VentureRank OS, not Autobuilder internals.

## What Was Preserved

- Next.js App Router structure under `src/app`
- TypeScript, Tailwind, lucide-react, Supabase JS stack
- Mock data fallback and weighted scoring formulas
- Required product routes and API routes
- Supabase app schema pattern for `venturerank_os`
- Existing migrations for ideas and spawn packs
- `.env.local`, `pnpm-lock.yaml`, source files, public assets, and docs

## What Was Fixed

- Removed accidental root `app/api/checkout` route that shadowed the real `src/app` product routes during build.
- Removed accidental root `lib/supabase.ts` placeholder client.
- Updated pages to use the safe data layer instead of direct mock imports where persistence fallback matters.
- Kept Supabase lazy so missing env vars do not crash import, typecheck, or build.
- Replaced explicit `any` Supabase casts with typed schema-scoped adapter casts for lint stability.
- Added `pnpm typecheck`.
- Fixed React compiler purity issue from `Date.now()` during render.
- Moved Google font loading to `next/font`.
- Set Next Turbopack root to this project to avoid workspace lockfile confusion.
- Tightened migrations with repeat-safe indexes, schema-qualified UUID default, and authenticated RLS role.
- Updated `.gitignore` so generated artifacts stay out while `.env.example` can be preserved.
- Added `.env.example`.

## What Was Removed

- Root `app/api/checkout/route.ts` placeholder.
- Root `lib/supabase.ts` placeholder.
- Generated artifacts were removed after successful validation during cleanup.

## Current Build Status

- `pnpm install`: pass
- `pnpm lint`: pass
- `pnpm typecheck`: pass
- `pnpm build`: pass
- Runtime smoke test on `localhost:3042`: all required routes returned HTTP 200

### Re-validated (2026-05-11)

- `pnpm typecheck`: pass
- `pnpm build`: pass
- Disk cleanup: removed `node_modules` and `.next` after successful build verification

## Manual Deploy Command

```bash
cd /Users/joshuadavis/startups/venturerank-os
pnpm install
pnpm build
vercel --prod
```

## Return-Later Commands

```bash
cd /Users/joshuadavis/startups/venturerank-os
pnpm install
pnpm lint
pnpm typecheck
pnpm build
pnpm dev
```

## Next Best Tasks

- Generate proper Supabase database types for `venturerank_os`.
- Persist admin intake submissions into `venturerank_os.ideas`.
- Persist generated spawn packs into `venturerank_os.spawn_packs`.
- Add AI scoring endpoint behind safe server-side credentials.
- Add filtering and sorting to ideas/rankings.
- Add export/share functionality for spawn packs.
- Improve SEO/demo copy and add a real Open Graph image.

## Autobuilder Guardrails

- Keep the product centered on venture prioritization, ranking, scoring, buckets, and spawn packs.
- Never expose Autobuilder language publicly in the app UI.
- Never require Supabase env vars for build.
- Never create app-owned tables in `public`; use `venturerank_os.*`.
- Use pnpm only.
- Do not auto-deploy or auto-push.
- Do not delete source, migrations, public assets that are used, `.env.local`, `.env.example`, `pnpm-lock.yaml`, or foundation files.
