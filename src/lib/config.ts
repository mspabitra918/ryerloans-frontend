export const RATE_CONFIG = {
  apr: 10.0, // Fixed 10.00% APR
  email: "support@ryerloans.com", // Replace with your support email
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

export const SITE_CONFIG = {
  name: "Ryer Loans",
  legalName: "Ryer Loans Inc.",
  url: "https://www.ryerloans.com",
  logo: "https://www.ryerloans.com/images/logo.png",
  phone: "(747) 200-5220", // Replace with your actual phone
  email: "support@ryerloans.com",
  address: {
    streetAddress:
      "249 E Ocean Blvd, 10th Floor, Ste 1010, Long Beach, CA 90802", // Replace with your Long Beach address
    addressLocality: "Long Beach",
    addressRegion: "CA",
    postalCode: "90802",
    addressCountry: "US",
  },
  geo: {
    latitude: 33.7676,
    longitude: -118.1924,
  },
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
  sameAs: [
    "https://www.facebook.com/ryerloans",
    "https://twitter.com/ryerloans",
    "https://www.linkedin.com/company/ryerloans",
  ],
};
