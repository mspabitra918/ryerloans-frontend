export type ApplicationFormData = {
  loan: {
    amount: number;
    purpose: string;
    otherPurpose: string;
  };

  personal: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;

    dobMonth: string;
    dobDay: string;
    dobYear: string;

    ssn: string;

    dlNumber: string;
    dlState: string;

    streetAddress: string;
    addressLine2: string;
    city: string;
    state: string;
    zip: string;

    yearsAtAddress: string;
    housingStatus: string;
    monthlyHousingCost: string;
  };

  employment: {
    employmentStatus: string;
    employerName: string;
    jobTitle: string;
    employmentLengthMo: string;
    employerPhone: string;

    payFrequency: string;
    nextPayDate: string;

    netMonthlyIncome: string;
    incomeSource: string;

    ownsVehicle: boolean | null;
    vehicleYear: string;
    vehicleMake: string;
    vehicleModel: string;
    vehiclePaidOff: boolean | null;
  };

  banking: {
    bankName: string;
    accountType: string;
    routingNumber: string;
    accountNumber: string;
    confirmAccountNumber: string;

    accountAge: string;
    currentBalanceBand: string;
    directDeposit: boolean | null;
  };

  consent: {
    esign: boolean;
    privacy: boolean;
    creditPull: boolean;
    tcpa: boolean;
  };
};
export const initialData: ApplicationFormData = {
  loan: {
    amount: 0,
    purpose: "",
    otherPurpose: "",
  },

  personal: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

    dobMonth: "",
    dobDay: "",
    dobYear: "",

    ssn: "",

    dlNumber: "",
    dlState: "",

    streetAddress: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: "",

    yearsAtAddress: "",
    housingStatus: "",
    monthlyHousingCost: "",
  },

  employment: {
    employmentStatus: "",
    employerName: "",
    jobTitle: "",
    employmentLengthMo: "",
    employerPhone: "",

    payFrequency: "",
    nextPayDate: "",

    netMonthlyIncome: "",
    incomeSource: "",

    ownsVehicle: null,
    vehicleYear: "",
    vehicleMake: "",
    vehicleModel: "",
    vehiclePaidOff: null,
  },

  banking: {
    bankName: "",
    accountType: "",
    routingNumber: "",
    accountNumber: "",
    confirmAccountNumber: "",

    accountAge: "",
    currentBalanceBand: "",
    directDeposit: null,
  },

  consent: {
    esign: false,
    privacy: false,
    creditPull: false,
    tcpa: false,
  },
};
