export const RATE_CONFIG = {
  apr: 10.0, // Fixed 10.00% APR
  minAmount: 2000,
  maxAmount: 25000,
  defaultTermMonths: 36,
  phone: " (747) 200-5220 ", // Replace with your phone number
  address: "249 E Ocean Blvd, 10th Floor, Ste 1010, Long Beach, CA 90802", // Replace with your address
  name: "Ryer Loans",
  legalName: "Ryer Loans, LLC",
  domain: "ryerloans.com",

  // Dynamic loan calculator helper
  calculateLoan(amount = 10000, termMonths = 36) {
    const monthlyRate = this.apr / 100 / 12;
    const monthlyPayment =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
      (Math.pow(1 + monthlyRate, termMonths) - 1);
    const totalRepayment = monthlyPayment * termMonths;
    const totalInterest = totalRepayment - amount;

    return {
      monthlyPayment: monthlyPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      totalRepayment: totalRepayment.toFixed(2),
    };
  },
};
