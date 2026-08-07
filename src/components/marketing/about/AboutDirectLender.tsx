export default function AboutDirectLender() {
  return (
    <section className="py-16 px-4 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          We Are a Direct Lender, Not a Lead Broker
        </h2>

        <div className="space-y-4 text-slate-600 text-base leading-relaxed">
          <p>
            This distinction matters more than most borrowers realize, so it is
            worth explaining plainly.
          </p>
          <p>
            A large share of websites that look like lenders are not lenders.
            You fill out a form, they sell your information to a network of
            buyers, and within minutes you are fielding calls from eight
            companies you have never heard of — several offering terms far worse
            than what you thought you were applying for. Your name, phone
            number, and financial details have become a product.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
            <p className="text-slate-900 font-medium">
              Ryer Loans underwrites, approves, and funds its own loans. Your
              application comes to us and stays with us. We are not brokering
              your data to a network, and we do not have a revenue stream that
              depends on how many companies we can pass your phone number to.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
