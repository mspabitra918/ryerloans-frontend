import { CheckCircle2, Clock, Circle, XCircle } from "lucide-react";
import { ApplicationData } from "@/src/lib/types/loanStatus";

export default function ProgressTimeline({ data }: { data: ApplicationData }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
      <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
        Application Progress
      </h3>

      <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 sm:before:left-4 before:w-0.5 before:bg-slate-200 before:z-0">
        {/* Step 1: Received */}
        <div className="relative z-10 flex items-start gap-4">
          <div className="bg-emerald-500 text-white rounded-full p-1 mt-0.5 shadow-sm">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-sm">
              Loan Application Received
            </h4>
            <p className="text-xs text-slate-500">
              Completed on {data.submittedDate}
            </p>
          </div>
        </div>

        {/* Step 2: Online Banking */}
        <div className="relative z-10 flex items-start gap-4">
          {data.bankStatus === "completed" ? (
            <div className="bg-emerald-500 text-white rounded-full p-1 mt-0.5 shadow-sm">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          ) : (
            <div className="bg-sky-500 text-white rounded-full p-1 mt-0.5 shadow-sm">
              <Clock className="w-5 h-5 animate-pulse" />
            </div>
          )}
          <div>
            <h4 className="font-bold text-slate-900 text-sm">
              Online Banking Verification
            </h4>
            <p className="text-xs text-slate-500 capitalize">
              {data.bankStatus}
            </p>
          </div>
        </div>

        {/* Step 3: Verification Deposit */}
        <div className="relative z-10 flex items-start gap-4">
          {data.depositStatus === "confirmed" ? (
            <div className="bg-emerald-500 text-white rounded-full p-1 mt-0.5 shadow-sm">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          ) : data.depositStatus === "sent" ? (
            <div className="bg-indigo-500 text-white rounded-full p-1 mt-0.5 shadow-sm">
              <Clock className="w-5 h-5 animate-pulse" />
            </div>
          ) : (
            <div className="bg-slate-200 text-slate-400 rounded-full p-1 mt-0.5">
              <Circle className="w-5 h-5" />
            </div>
          )}
          <div>
            <h4 className="font-bold text-slate-900 text-sm">
              Verification Deposit
            </h4>
            <p className="text-xs text-slate-500 capitalize">
              {data.depositStatus.replace("_", " ")}
            </p>
          </div>
        </div>

        {/* Step 4: Funded / Declined */}
        <div className="relative z-10 flex items-start gap-4">
          {data.fundingStatus === "funded" ? (
            <div className="bg-emerald-500 text-white rounded-full p-1 mt-0.5 shadow-sm">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          ) : data.fundingStatus === "declined" ? (
            <div className="bg-rose-500 text-white rounded-full p-1 mt-0.5 shadow-sm">
              <XCircle className="w-5 h-5" />
            </div>
          ) : (
            <div className="bg-slate-200 text-slate-400 rounded-full p-1 mt-0.5">
              <Circle className="w-5 h-5" />
            </div>
          )}
          <div>
            <h4 className="font-bold text-slate-900 text-sm">
              Funded / Final Decision
            </h4>
            <p className="text-xs text-slate-500 capitalize">
              {data.fundingStatus}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
