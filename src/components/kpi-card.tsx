type Props = {
  label: string;
  value: string;
  subtext: string;
};

export function KpiCard({ label, value, subtext }: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      <div className="text-sm text-neutral-400">{label}</div>
      <div className="mt-2 text-3xl font-semibold text-white">{value}</div>
      <div className="mt-2 text-sm text-neutral-500">{subtext}</div>
    </div>
  );
}
