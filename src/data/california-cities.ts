export interface CityLoanData {
  slug: string;
  city: string;
  county: string;

  title: string;
  description: string;

  intro: string;

  economy: {
    paragraphs: string[];
    population: string;
    medianIncome: string;
    medianRent: string;
    majorEmployers: string[];
    source: string;
  };

  borrowingReasons: string[];

  financialResources: {
    name: string;
    description: string;
  }[];

  faqs: {
    question: string;
    answer: string;
  }[];

  nearbyCities: string[];
}

export const californiaCities: Record<string, CityLoanData> = {
  "los-angeles": {
    slug: "los-angeles",
    city: "Los Angeles",
    county: "Los Angeles",

    title: "Personal Loans in Los Angeles, CA | $2,000–$25,000 | Ryer Loans",

    description:
      "Personal loans for Los Angeles residents from $2,000 to $25,000 at a fixed 10% APR. All credit types considered. Direct lender based in Long Beach.",

    intro:
      "Los Angeles does not have one economy. It has a dozen, layered across the city...",

    economy: {
      paragraphs: [
        "Los Angeles has a diverse economy shaped by entertainment, healthcare, logistics, tourism, professional services, education and government.",
        "Entertainment remains an important part of the city's identity, while healthcare, international trade and logistics employ substantial numbers of residents.",
      ],

      population: "[Census ACS population]",
      medianIncome: "[Census ACS median household income]",
      medianRent: "[Census ACS median gross rent]",

      majorEmployers: [
        "Healthcare organizations",
        "City and County government",
        "Entertainment companies",
        "Logistics companies",
        "Education institutions",
      ],

      source: "U.S. Census ACS / LA Economic Development",
    },

    borrowingReasons: [
      "Project-based and gig income",
      "Housing and rent pressure",
      "Vehicle and commuting costs",
    ],

    financialResources: [
      {
        name: "211 LA",
        description:
          "Assistance referrals for rent, utilities, food and emergency needs.",
      },
      {
        name: "LADWP EZ-SAVE",
        description: "Utility assistance for qualifying households.",
      },
    ],

    faqs: [
      {
        question: "Can I qualify on freelance or 1099 income?",
        answer:
          "We review income stability over a period rather than requiring identical deposits every pay period.",
      },
      {
        question: "Do you lend throughout Los Angeles?",
        answer:
          "Yes. We serve residents throughout Los Angeles and surrounding areas where Ryer Loans lends.",
      },
      {
        question: "Do you have a Los Angeles office?",
        answer:
          "Our physical office is in Long Beach. Applications can be handled remotely.",
      },
    ],

    nearbyCities: ["long-beach", "anaheim", "riverside"],
  },

  "san-diego": {
    slug: "san-diego",
    city: "San Diego",
    county: "San Diego",

    title: "Personal Loans in San Diego, CA | Fixed 10% APR | Ryer Loans",

    description:
      "Personal loans from $2,000 to $25,000 for San Diego residents at a fixed 10% APR.",

    intro:
      "San Diego's economy combines military employment, biotechnology, tourism and healthcare...",

    economy: {
      paragraphs: [
        "San Diego has a large military and defence employment base.",
        "The region also has a significant biotechnology and life sciences sector.",
      ],

      population: "[Census ACS population]",
      medianIncome: "[Census ACS median household income]",
      medianRent: "[Census ACS median rent]",

      majorEmployers: [
        "Naval Base San Diego",
        "UC San Diego",
        "Healthcare organizations",
        "Tourism and hospitality",
      ],

      source: "U.S. Census ACS / San Diego economic sources",
    },

    borrowingReasons: [
      "Military family expenses",
      "Housing costs",
      "Seasonal hospitality income",
    ],

    financialResources: [
      {
        name: "211 San Diego",
        description: "Countywide assistance referral service.",
      },
      {
        name: "Navy-Marine Corps Relief Society",
        description: "Emergency assistance for eligible servicemembers.",
      },
    ],

    faqs: [
      {
        question: "Do you lend to active-duty military?",
        answer:
          "Yes, subject to applicable lending requirements and protections.",
      },
      {
        question: "Can seasonal hospitality workers apply?",
        answer: "Seasonal income can be considered when it is verifiable.",
      },
      {
        question: "Do you serve North County?",
        answer: "Yes, where Ryer Loans is legally able to lend.",
      },
    ],

    nearbyCities: ["chula-vista", "los-angeles", "anaheim"],
  },
};
