type Props = {
  label: string;
  value: string;
  subtext: string;
};

export function KpiCard({ label, value, subtext }: Props) {
  return (
    <div className="group rounded-[1.35rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:shadow-[0_28px_90px_rgba(0,0,0,0.55),0_0_0_1px_rgba(34,211,238,0.12)]">
      <div className="text-sm text-neutral-400">{label}</div>
      <div className="mt-2 line-clamp-2 min-h-[2.5rem] break-words bg-gradient-to-br from-white to-neutral-300 bg-clip-text text-3xl font-semibold tracking-tight text-transparent">
        {value}
      </div>
      <div className="mt-2 text-sm text-neutral-500">{subtext}</div>
    </div>
  );
}
