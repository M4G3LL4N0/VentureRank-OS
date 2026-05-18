# VentureRank OS Guardrails

## Product Truth

VentureRank OS is a venture studio operating system. It ranks startup ideas, scores them across weighted strategic criteria, groups them into priority buckets, shows confidence-adjusted scores, and generates spawn packs for the highest-value opportunities.

It is not a generic SaaS dashboard.

## Public Positioning

Use this public framing: VentureRank OS helps founders and venture studios decide what to build first by scoring, ranking, and spawning startup opportunities.

## Do Not Expose

- Autobuilder internals
- private recovery language
- schema or deployment implementation details in public marketing copy
- service role keys or server-only credentials
- broad anonymous write surfaces

## Do Not Delete

- `src`
- `src/app`
- `src/components`
- `src/lib`
- `public` assets that are used
- `migrations`
- `package.json`
- `pnpm-lock.yaml`
- `tsconfig.json`
- `next.config.ts`
- Tailwind/PostCSS config
- `.env.local`
- `.env.example`
- `RECOVERY_NOTES.md`
- `AUTOBUILDER_FOUNDATION.json`
- `.autobuilder`
- `.gitignore`
- `README.md`

## Do Not Drift Toward

- generic CRM/SaaS dashboard language
- decorative landing pages that hide the product
- broad business idea lists without scoring discipline
- public schema database objects
- Supabase-required builds
- fragile dependencies
- automatic Vercel deploys or GitHub pushes

## Safe Improvements

- improve score clarity and explanation
- add real filtering and sorting
- persist intake and spawn packs in `venturerank_os`
- generate typed Supabase clients
- add server-side AI scoring with safe credentials
- improve responsive dashboard density
- add exports and shareable spawn packs
- add real SEO metadata and Open Graph image

## Risky Improvements

- adding authentication before the core data flow is durable
- adding multi-tenancy before single-workspace persistence works
- adding animations that reduce dashboard clarity
- creating anonymous write policies
- importing Supabase clients at module scope with required env vars
- changing scoring formulas without preserving migration notes

## Build Rules

- Use pnpm only.
- Run `pnpm lint`, `pnpm typecheck`, and `pnpm build` before declaring readiness.
- The app must build without Supabase env vars.
- Use only `venturerank_os.*` for app-owned tables.
- Keep mock fallback for Supabase unavailable, errored, or empty responses.
- Do not run `vercel --prod` automatically.
- Do not push automatically.
