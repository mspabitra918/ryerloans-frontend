export default function ApplyHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pb-20 pt-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto text-center space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20 tracking-wide uppercase">
          Online Application
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Apply for a Personal Loan
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Get competitive rates with simple eligibility. Complete your
          application in just a few minutes without affecting your credit score.
        </p>
      </div>
    </section>
  );
}
