import { ShieldAlert } from "lucide-react";
import { RATE_CONFIG } from "@/src/lib/config";

export default function SecurityNotice() {
  const rawPhone = RATE_CONFIG.phone.replace(/[^0-9+]/g, "");

  return (
    <div className="bg-slate-100 border border-slate-200 rounded-2xl p-5 sm:p-6 flex items-start gap-4 text-xs text-slate-600 leading-relaxed shadow-sm">
      <ShieldAlert className="w-6 h-6 text-slate-500 flex-shrink-0 mt-0.5" />
      <div>
        <strong className="text-slate-900 uppercase tracking-wider block mb-1">
          Security Reminder
        </strong>
        Ryer Loans will never ask you to send money, purchase a gift card, or
        pay a fee before your loan is funded. We will never ask for your online
        banking password. If anyone contacts you claiming to be Ryer Loans and
        requests payment, hang up immediately and call{" "}
        <a
          href={`tel:${rawPhone}`}
          className="text-sky-600 font-bold underline"
        >
          {RATE_CONFIG.phone}
        </a>
        .
      </div>
    </div>
  );
}
