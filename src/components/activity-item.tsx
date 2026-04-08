import { ClockIcon, ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import type { RankedIdea } from "@/lib/schema";

type Props = {
  idea: RankedIdea;
  change?: "up" | "down";
  amount?: number;
  date?: Date;
};

export function ActivityItem({ idea, change, amount, date }: Props) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-white/5 p-4 hover:bg-white/5 transition-colors">
      <div className="flex-shrink-0 rounded-full bg-white/5 p-2">
        {change === "up" ? (
          <ArrowUpIcon className="h-5 w-5 text-green-400" />
        ) : (
          <ArrowDownIcon className="h-5 w-5 text-rose-400" />
        )}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 text-sm text-neutral-400">
          <ClockIcon className="h-4 w-4" />
          <span>{date ? format(date, "MMM d, yyyy") : 'Unknown date'}</span>
        </div>
        <h3 className="mt-1 font-medium text-white">{idea.title}</h3>
        <p className="mt-1 text-sm text-neutral-400">
          Moved {change === "up" ? "up" : "down"} by {amount} positions
        </p>
      </div>
      <div className="text-sm font-medium text-white">
        #{(idea as RankedIdea)?.masterRankScore?.toFixed(0) ?? 'N/A'}
      </div>
    </div>
  );
}
