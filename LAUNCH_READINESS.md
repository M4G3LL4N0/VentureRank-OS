# Launch Readiness: Venturerank Os

## Launch Status
- Current label: **LOCAL REVIEW READY**
- Reason: Portfolio build PASS; claim register installed.
- What is ready: Local `pnpm build`; repo routes
- What is not ready: PUBLIC sharing; unverified live URLs; traction claims
- What is demo only: /demo — VentureRankScorerDemo (DEMO buckets)
- What is planned: Production auth, billing, live integrations (unless in repo)
- What is blocked: None documented
- What is stale: ASSUMPTION live URL
- What is risky: Compliance, security, medical, or financial claims without proof — see CLAIM_REGISTER.md

## Local Review
- Local command: `cd /Users/joshuadavis/startups/venturerank-os && pnpm install && pnpm dev`
- Routes to inspect: `/`, `/demo`
- Expected behavior: /demo — VentureRankScorerDemo (DEMO buckets)
- Known limitations: Scores are sample math, not live portfolio data
- Manual checks:
  - [ ] Build: `pnpm build`
  - [ ] Demo labels visible on metrics
  - [ ] No fake traction in hero copy
  - [ ] Export/copy actions work if present

## Claim Safety
- Claims safe to publish: Product description as hypothesis; DEMO-labeled interactions
- Claims that need proof: Live URL uptime, customer counts, revenue, compliance
- Claims to remove or weaken: Any VERIFIED label without build or curl proof

## Launch Gate
- Build status: **PASS**
- Main route status: expected OK locally
- CTA status: verify manually in dev
- MVP interaction status: DEMO route documented
- Mobile status: verify manually
- Trust/factuality status: use CLAIM_REGISTER.md
- Secrets/build artifacts status: do not commit .env
- Human approval needed: before any `vercel --prod` or public claim upgrades
- Final label: **LOCAL REVIEW READY** (PUBLIC READY: **no**; DEMO READY: yes (label all demo outputs))

