export default function ESignHero() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <section className="pt-24 pb-16 px-4 bg-[#030712] border-b border-[#1f293d]">
      <div className="max-w-7xl mx-auto space-y-4">
        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="text-sky-400 uppercase tracking-widest font-semibold">
            Legal Disclosure
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400">Last Updated: {currentDate}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          E-Sign Consent
        </h1>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
          Consent to Use Electronic Records and Signatures under the federal
          Electronic Signatures in Global and National Commerce Act (E-SIGN).
        </p>
      </div>
    </section>
  );
}
