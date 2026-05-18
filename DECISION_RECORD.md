# Decision Record: Venturerank Os

## Decisions

| Date | Decision | Why | Evidence | Tradeoff | Risk | Revisit Trigger |
|------|----------|-----|----------|----------|------|-----------------|
| 2026-05-18 | Add `/demo` with `VentureRankScorerDemo` | Homepage lacked interactive proof | **VERIFIED** `pnpm build` PASS; client demo with DEMO bucket labels | Extra route to maintain | Low | Replace mock scoring with real idea intake |

## Pending (needs human)

| Topic | Notes |
|-------|-------|
| Public launch | LAUNCH_READINESS gate; no `vercel --prod` from automation |
