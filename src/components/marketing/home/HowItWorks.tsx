import { RATE_CONFIG } from "@/src/lib/config";
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
    <section className="py-16 px-4 bg-[#030712] border-t border-[#1f293d]/50">
      <div className="max-w-6xl mx-auto space-y-10">
        <h2 className="text-2xl sm:text-3xl font-sans font-semibold text-white tracking-tight">
          How It Works
        </h2>

        <div className="space-y-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`p-6 rounded-xl border font-mono transition-all ${
                step.highlight
                  ? "bg-[#050b14] border-sky-500/40 shadow-[0_0_20px_rgba(56,189,248,0.1)]"
                  : "bg-[#050b14] border-[#1f293d]"
              }`}
            >
              <div className="flex items-start gap-4">
                <span className="text-sky-400 font-bold text-lg">
                  {step.number}.
                </span>
                <div className="space-y-2">
                  <h3 className="text-white font-semibold text-base sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
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
