export default function AdminIntakePage() {
  const fields = [
    "Title",
    "Category",
    "Description",
    "Pain Severity",
    "Frequency",
    "Market Size",
    "Monetization Clarity",
    "Data Availability",
    "Defensibility",
    "Network Effects",
    "Automation Potential",
    "Founder Fit",
    "Strategic Leverage",
    "Regulatory Risk",
    "Build Simplicity",
    "Retention Potential",
    "Narrative Power",
    "Expansion Surface",
    "Urgency Score",
    "Buildability Score",
    "Founder Advantage Score",
    "Confidence Score",
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="max-w-3xl">
        <div className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">
          Admin
        </div>
        <h1 className="mt-3 text-4xl font-semibold text-white">
          Intake a new startup idea
        </h1>
        <p className="mt-4 text-lg leading-8 text-neutral-300">
          This is the internal intake form for scoring and ranking new venture opportunities.
        </p>
      </div>

      <form className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="grid gap-4 md:grid-cols-2">
          {fields.map((field) => (
            <label key={field} className="block">
              <div className="mb-2 text-sm text-neutral-300">{field}</div>
              <input
                type="text"
                placeholder={field}
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-neutral-500 focus:border-cyan-400/40"
              />
            </label>
          ))}
        </div>

        <div className="mt-6">
          <label className="block">
            <div className="mb-2 text-sm text-neutral-300">Rationale</div>
            <textarea
              rows={5}
              placeholder="Why this idea matters"
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-neutral-500 focus:border-cyan-400/40"
            />
          </label>
        </div>

        <div className="mt-6">
          <label className="block">
            <div className="mb-2 text-sm text-neutral-300">Recommended Action</div>
            <textarea
              rows={4}
              placeholder="Build now, queue, backlog, or merge"
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-neutral-500 focus:border-cyan-400/40"
            />
          </label>
        </div>

        <div className="mt-8">
          <button
            type="button"
            className="rounded-2xl bg-cyan-400 px-6 py-3 font-medium text-neutral-950 transition hover:opacity-90"
          >
            Save intake draft
          </button>
        </div>
      </form>
    </main>
  );
}
