import { ApplicationData } from "@/src/lib/types/loanStatus";

export default function StatusBanner({ data }: { data: ApplicationData }) {
  return (
    <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Application
        </span>
        <h2 className="text-2xl font-bold font-mono tracking-wide">
          #{data.id}
        </h2>
        <p className="text-xs text-slate-400 pt-1">
          Submitted on {data.submittedDate}
        </p>
      </div>
      <div className="sm:text-right border-t sm:border-t-0 border-slate-800 pt-3 sm:pt-0">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Amount Requested
        </span>
        <p className="text-2xl font-bold text-emerald-400">
          ${data.amountRequested.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
