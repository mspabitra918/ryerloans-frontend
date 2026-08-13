import { RATE_CONFIG } from "@/src/lib/config";
import { PhoneCall } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Apply online — about 7 minutes",
      description:
        "Tell us how much you need, what it is for, and enough about your income and banking for us to make a real decision. Your information travels over 256-bit encryption.",
    },
    {
      number: "02",
      title: "Get your Application ID immediately",
      description:
        "The moment you submit, your screen shows a six-digit Application ID and a confirmation email arrives. Save that number — it is how you check status and how our team pulls up your file.",
    },
    {
      number: "03",
      title: `Call us to continue — ${RATE_CONFIG.phone}`,
      description:
        "This step is required. A member of our team verifies your identity by phone and walks through the details with you. Applications that never receive a call stay on hold; nothing moves forward without it. There is a person on the other end of that number, which is more than most online lenders offer.",
      highlight: true,
    },
    {
      number: "04",
      title: "Verify your bank account",
      description:
        "Through Plaid, the same secure connection your bank’s own apps use. It confirms the account belongs to you and that the deposit details are correct. Ryer never sees or stores your online banking password.",
    },
    {
      number: "05",
      title: "Review and sign your agreement",
      description:
        "Your full terms arrive by email — amount, APR, term, payment, payment dates, total cost. Read all of it. Ask about anything. Sign only when you are satisfied.",
    },
    {
      number: "06",
      title: "Final review and funding",
      description:
        "Our funding team walks you through the final terms before any money moves. Once funded, your deposit reaches your account by ACH.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 bg-[#F8F6F0] border-t border-stone-200/80">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-3 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-100/80 px-3 py-1 rounded-full inline-block">
            Simple 6-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="text-slate-600 text-base max-w-2xl leading-relaxed">
            Clear, transparent funding with personal human support at every
            stage.
          </p>
        </div>

        {/* Steps List */}
        <div className="space-y-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-200 ${
                step.highlight
                  ? "bg-white border-sky-500 shadow-lg shadow-sky-950/5 ring-1 ring-sky-500/20"
                  : "bg-white border-stone-200/90 shadow-sm hover:shadow-md hover:border-stone-300"
              }`}
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                {/* Step Number Badge */}
                <div
                  className={`flex shrink-0 items-center justify-center w-12 h-12 rounded-xl font-bold text-base transition-colors ${
                    step.highlight
                      ? "bg-sky-600 text-white shadow-sm"
                      : "bg-stone-100 text-stone-700 border border-stone-200"
                  }`}
                >
                  {step.highlight ? (
                    <PhoneCall className="w-5 h-5 animate-pulse" />
                  ) : (
                    step.number
                  )}
                </div>

                {/* Content */}
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-slate-900 font-bold text-lg sm:text-xl tracking-tight">
                      {step.title}
                    </h3>
                    {step.highlight && (
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded-md">
                        Required Action
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
