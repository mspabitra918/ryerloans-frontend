import { RATE_CONFIG } from "@/src/lib/config";

export default function GlbaNotice() {
  const glbaRows = [
    {
      reason:
        "For our everyday business purposes — to process transactions, maintain accounts, respond to court orders and legal investigations, or report to credit bureaus",
      shares: "Yes",
      limit: "No",
    },
    {
      reason:
        "For our marketing purposes — to offer our products and services to you",
      shares: "Yes",
      limit: "No",
    },
    {
      reason: "For joint marketing with other financial companies",
      shares: "No",
      limit: "We don't share",
    },
    {
      reason:
        "For our affiliates' everyday business purposes — information about your transactions and experiences",
      shares: "No",
      limit: "We don't share",
    },
    {
      reason:
        "For our affiliates' everyday business purposes — information about your creditworthiness",
      shares: "No",
      limit: "We don't share",
    },
    {
      reason: "For our affiliates to market to you",
      shares: "No",
      limit: "We don't share",
    },
    {
      reason: "For nonaffiliates to market to you",
      shares: "No",
      limit: "We don't share",
    },
  ];

  return (
    <section className="pt-8 border-t-2 border-slate-300 space-y-6">
      <div className="space-y-2">
        <span className="text-xs font-mono font-bold uppercase text-sky-600 tracking-wider">
          12 CFR Part 1016, Appendix A
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          11. GLBA Privacy Notice
        </h2>
      </div>

      {/* Model Form FACTS Grid */}
      <div className="border-2 border-slate-300 rounded-2xl overflow-hidden bg-white shadow-md">
        {/* FACTS Header */}
        <div className="bg-slate-900 text-white p-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          <span className="text-3xl font-black font-mono tracking-wider md:col-span-1">
            FACTS
          </span>
          <p className="text-sm md:col-span-3 font-semibold uppercase tracking-wide text-slate-200">
            What does Ryer Loans do with your personal information?
          </p>
        </div>

        {/* What / Why / How Blocks */}
        <div className="p-6 divide-y divide-slate-200 text-sm space-y-4">
          <div className="pt-2">
            <h3 className="font-bold text-slate-900 mb-1">Why?</h3>
            <p className="text-slate-600 leading-relaxed">
              Financial companies choose how they share your personal
              information. Federal law gives consumers the right to limit some
              but not all sharing. Federal law also requires us to tell you how
              we collect, share, and protect your personal information. Please
              read this notice carefully.
            </p>
          </div>

          <div className="pt-4">
            <h3 className="font-bold text-slate-900 mb-1">What?</h3>
            <p className="text-slate-600 leading-relaxed">
              The types of personal information we collect and share depend on
              the product or service you have with us. This information can
              include Social Security number and income, account balances and
              transaction history, credit history and credit scores.
            </p>
          </div>

          <div className="pt-4">
            <h3 className="font-bold text-slate-900 mb-1">How?</h3>
            <p className="text-slate-600 leading-relaxed">
              All financial companies need to share customers’ personal
              information to run their everyday business. In the section below,
              we list the reasons financial companies can share their customers’
              personal information; the reasons Ryer Loans chooses to share; and
              whether you can limit this sharing.
            </p>
          </div>
        </div>

        {/* Legal Grid Table */}
        <div className="overflow-x-auto border-t border-slate-300">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100 border-b border-slate-300 text-slate-900">
              <tr>
                <th className="p-4 font-bold w-1/2">
                  Reasons we can share your personal information
                </th>
                <th className="p-4 font-bold border-l border-slate-200">
                  Does Ryer Loans share?
                </th>
                <th className="p-4 font-bold border-l border-slate-200">
                  Can you limit this sharing?
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {glbaRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium text-slate-800">
                    {row.reason}
                  </td>
                  <td className="p-4 font-bold text-slate-900 border-l border-slate-200">
                    {row.shares}
                  </td>
                  <td className="p-4 font-bold text-slate-900 border-l border-slate-200">
                    {row.limit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-slate-50 border-t border-slate-300 text-xs sm:text-sm text-slate-700 space-y-3">
          <p>
            <strong className="text-slate-900">To limit our sharing:</strong>{" "}
            Call {RATE_CONFIG.phone} or email privacy@ryerloans.com. If you are
            a new customer, we can begin sharing your information 30 days from
            the date we sent this notice. When you are no longer our customer,
            we continue to share as described, but you can contact us at any
            time to limit our sharing.
          </p>
          <p>
            <strong className="text-slate-900">Questions?</strong> Call{" "}
            {RATE_CONFIG.phone} or go to ryerloans.com/privacy-policy.
          </p>
        </div>
      </div>
    </section>
  );
}
