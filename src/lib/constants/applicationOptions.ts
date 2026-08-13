export const employmentStatusOptions = [
  {
    label: "Employed Full-Time",
    value: "Employed Full-Time",
  },
  {
    label: "Part-Time",
    value: "Part-Time",
  },
  {
    label: "Self-Employed",
    value: "Self-Employed",
  },
  {
    label: "Retired",
    value: "Retired",
  },
  {
    label: "Military",
    value: "Military",
  },
  {
    label: "Benefits",
    value: "Benefits",
  },
  {
    label: "Unemployed",
    value: "Unemployed",
  },
];

export const payFrequencyOptions = [
  {
    label: "Weekly",
    value: "weekly",
  },
  {
    label: "Biweekly",
    value: "biweekly",
  },
  {
    label: "Semimonthly",
    value: "semimonthly",
  },
  {
    label: "Monthly",
    value: "monthly",
  },
];

export const incomeSourceOptions = [
  {
    label: "Employment",
    value: "employment",
  },
  {
    label: "Benefits",
    value: "benefits",
  },
  {
    label: "Social Security",
    value: "ss",
  },
  {
    label: "Pension",
    value: "pension",
  },
  {
    label: "Self-Employment",
    value: "self",
  },
];

export const yesNoOptions = [
  {
    label: "Yes",
    value: "yes",
  },
  {
    label: "No",
    value: "no",
  },
];

export const US_STATES_MAP = {
  AL: "Alabama",
  AK: "Alaska",
  AZ: "Arizona",
  AR: "Arkansas",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DE: "Delaware",
  FL: "Florida",
  GA: "Georgia",
  HI: "Hawaii",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  IA: "Iowa",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  ME: "Maine",
  MD: "Maryland",
  MA: "Massachusetts",
  MI: "Michigan",
  MN: "Minnesota",
  MS: "Mississippi",
  MO: "Missouri",
  MT: "Montana",
  NE: "Nebraska",
  NV: "Nevada",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NY: "New York",
  NC: "North Carolina",
  ND: "North Dakota",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PA: "Pennsylvania",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VT: "Vermont",
  VA: "Virginia",
  WA: "Washington",
  WV: "West Virginia",
  WI: "Wisconsin",
  WY: "Wyoming",
} as const;

// If you need an array of objects for dropdowns or UI components:
export const US_STATES_LIST = Object.entries(US_STATES_MAP).map(
  ([abbr, name]) => ({
    abbr,
    name,
  }),
);

export const LOAN_PURPOSES = [
  "Debt Consolidation",
  "Emergency Expenses",
  "Medical Expenses",
  "Dental Expenses",
  "Home Improvement",
  "Auto Repair",
  "Moving Expenses",
  "Wedding Expenses",
  "Vacation",
  "Education",
  "Rent or Utilities",
  "Major Purchase",
  "Childcare Expenses",
  "Funeral Expenses",
  "Tax Payments",
  "Business Expenses",
  "Other Personal Expenses",
] as const;

export const housingOptions = [
  {
    label: "Own",
    value: "own",
  },
  {
    label: "Rent",
    value: "rent",
  },
  {
    label: "Other",
    value: "other",
  },
];

export const yearsAtAddressOptions = [
  {
    label: "Less than 1 year",
    value: "<1",
  },
  {
    label: "1–2 years",
    value: "1-2",
  },
  {
    label: "2–5 years",
    value: "2-5",
  },
  {
    label: "5+ years",
    value: "5+",
  },
];

export const EMPLOYMENT_STATUSES = [
  "Employed Full-Time",
  "Part-Time",
  "Self-Employed",
  "Retired",
  "Military",
  "Benefits",
  "Unemployed",
] as const;

export const PAY_FREQUENCIES = [
  "weekly",
  "biweekly",
  "semimonthly",
  "monthly",
] as const;

export const ACCOUNT_TYPES = ["checking", "savings"] as const;

export const BALANCE_BANDS = [
  "Under $100",
  "$100–$500",
  "$500–$1,000",
  "$1,000–$2,500",
  "Over $2,500",
] as const;

export const ACCOUNT_AGE_BANDS = ["<3", "3-6", "6-12", "12-24", "24+"] as const;

export const accountTypeOptions = [
  {
    label: "Checking",
    value: "checking",
  },
  {
    label: "Savings",
    value: "savings",
  },
];

export const accountAgeOptions = [
  {
    label: "Less than 3 months",
    value: "<3",
  },
  {
    label: "3–6 months",
    value: "3-6",
  },
  {
    label: "6–12 months",
    value: "6-12",
  },
  {
    label: "1–2 years",
    value: "12-24",
  },
  {
    label: "2+ years",
    value: "24+",
  },
];

export const balanceOptions = [
  {
    label: "Under $100",
    value: "Under $100",
  },
  {
    label: "$100–$500",
    value: "$100–$500",
  },
  {
    label: "$500–$1,000",
    value: "$500–$1,000",
  },
  {
    label: "$1,000–$2,500",
    value: "$1,000–$2,500",
  },
  {
    label: "Over $2,500",
    value: "Over $2,500",
  },
];
