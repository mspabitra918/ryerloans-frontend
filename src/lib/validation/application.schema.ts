// lib/validation/application.schema.ts

import { z } from "zod";
import {
  ACCOUNT_TYPES,
  BALANCE_BANDS,
  EMPLOYMENT_STATUSES,
  LOAN_PURPOSES,
  PAY_FREQUENCIES,
  US_STATES_LIST,
} from "../constants/applicationOptions";

export const NAME_REGEX = /^[A-Za-zÀ-ÿ' -]+$/;

export const phoneRegex = /^\+1\d{10}$/;

export const zipRegex = /^\d{5}(?:-\d{4})?$/;

export const ssnRegex = /^\d{3}-\d{2}-\d{4}$/;

export const routingRegex = /^\d{9}$/;

export const e164Regex = /^\+[1-9]\d{7,14}$/;

export const loanRequestSchema = z
  .object({
    amountRequested: z
      .number()
      .int()
      .min(200000)
      .max(2500000)
      .refine(
        (value) => value % 50000 === 0,
        "Loan amount must be in $500 increments",
      ),

    loanPurpose: z.enum(LOAN_PURPOSES),

    loanPurposeOther: z.string().trim().max(200).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.loanPurpose === "Other Personal Expenses") {
      if (!data.loanPurposeOther || data.loanPurposeOther.length < 10) {
        ctx.addIssue({
          code: "custom",
          path: ["loanPurposeOther"],
          message: "Please describe your loan purpose in 10–200 characters",
        });
      }
    }

    if (
      data.loanPurpose !== "Other Personal Expenses" &&
      data.loanPurposeOther
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["loanPurposeOther"],
        message:
          "Other purpose details are only allowed for Other Personal Expenses",
      });
    }
  });

export const personalDetailsSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1)
    .max(80)
    .regex(
      NAME_REGEX,
      "Only letters, spaces, hyphens and apostrophes are allowed",
    ),

  lastName: z
    .string()
    .trim()
    .min(1)
    .max(80)
    .regex(
      NAME_REGEX,
      "Only letters, spaces, hyphens and apostrophes are allowed",
    ),

  email: z.string().trim().email().max(254),

  phone: z.string().regex(e164Regex, "Phone must be a valid E.164 number"),

  dob: z.string().date(),

  ssn: z.string().regex(ssnRegex, "Invalid SSN format"),

  dlNumber: z.string().trim().min(1).max(50),

  // dlState: z.enum(US_STATES_LIST),

  streetAddress: z.string().trim().min(1).max(200),

  addressLine2: z.string().trim().max(100).optional(),

  city: z.string().trim().min(1).max(100),

  // state: z.enum(US_STATES_LIST),

  zip: z.string().regex(zipRegex),

  yearsAtAddress: z.number().int().min(0).max(100).optional(),

  housingStatus: z.enum(["own", "rent", "other"]),

  monthlyHousingCost: z.number().int().min(0).optional(),
});

export const employmentSchema = z
  .object({
    employmentStatus: z.enum(EMPLOYMENT_STATUSES),

    employerName: z.string().trim().max(150).optional(),

    jobTitle: z.string().trim().max(100).optional(),

    employmentLengthMo: z.number().int().min(0).max(1200).optional(),

    employerPhone: z.string().optional(),

    payFrequency: z.enum(PAY_FREQUENCIES),

    nextPayDate: z.string().date().optional(),

    netMonthlyIncome: z.number().int().positive(),

    incomeSource: z.enum(["employment", "benefits", "ss", "pension", "self"]),

    ownsVehicle: z.boolean(),

    vehicleYear: z
      .number()
      .int()
      .min(1900)
      .max(new Date().getFullYear() + 1)
      .optional(),

    vehicleMake: z.string().trim().max(50).optional(),

    vehicleModel: z.string().trim().max(50).optional(),

    vehiclePaidOff: z.boolean().optional(),
  })
  .superRefine((data, ctx) => {
    const needsEmployer =
      data.employmentStatus === "Employed Full-Time" ||
      data.employmentStatus === "Part-Time" ||
      data.employmentStatus === "Self-Employed" ||
      data.employmentStatus === "Military";

    if (needsEmployer) {
      if (!data.employerName) {
        ctx.addIssue({
          code: "custom",
          path: ["employerName"],
          message: "Employer name is required",
        });
      }

      if (!data.jobTitle) {
        ctx.addIssue({
          code: "custom",
          path: ["jobTitle"],
          message: "Job title is required",
        });
      }

      if (data.employmentLengthMo === undefined) {
        ctx.addIssue({
          code: "custom",
          path: ["employmentLengthMo"],
          message: "Employment length is required",
        });
      }

      if (!data.employerPhone) {
        ctx.addIssue({
          code: "custom",
          path: ["employerPhone"],
          message: "Employer phone is required",
        });
      }
    }

    if (data.ownsVehicle) {
      if (!data.vehicleYear) {
        ctx.addIssue({
          code: "custom",
          path: ["vehicleYear"],
          message: "Vehicle year is required",
        });
      }

      if (!data.vehicleMake) {
        ctx.addIssue({
          code: "custom",
          path: ["vehicleMake"],
          message: "Vehicle make is required",
        });
      }

      if (!data.vehicleModel) {
        ctx.addIssue({
          code: "custom",
          path: ["vehicleModel"],
          message: "Vehicle model is required",
        });
      }

      if (data.vehiclePaidOff === undefined) {
        ctx.addIssue({
          code: "custom",
          path: ["vehiclePaidOff"],
          message: "Please select an option",
        });
      }
    }
  });

export const bankingSchema = z
  .object({
    bankName: z.string().trim().min(1).max(120),

    accountType: z.enum(ACCOUNT_TYPES),

    routingNumber: z.string().regex(routingRegex),

    accountNumber: z.string().min(4).max(30).regex(/^\d+$/),

    confirmAccountNumber: z.string().regex(/^\d+$/),

    accountAgeMonths: z.number().int().min(0),

    currentBalanceBand: z.enum(BALANCE_BANDS),

    directDeposit: z.boolean(),
  })
  .refine((data) => data.accountNumber === data.confirmAccountNumber, {
    path: ["confirmAccountNumber"],
    message: "Account numbers do not match",
  })
  .refine((data) => validateRoutingNumber(data.routingNumber), {
    path: ["routingNumber"],
    message: "Invalid routing number",
  });

function validateRoutingNumber(routing: string) {
  if (!routingRegex.test(routing)) {
    return false;
  }

  const digits = routing.split("").map(Number);

  const checksum =
    3 * (digits[0] + digits[3] + digits[6]) +
    7 * (digits[1] + digits[4] + digits[7]) +
    1 * (digits[2] + digits[5] + digits[8]);

  return checksum % 10 === 0;
}

export const consentSchema = z.object({
  consentEsign: z.literal(true),

  consentPrivacy: z.literal(true),

  consentCreditPull: z.literal(true),

  // TCPA is intentionally optional.
  consentTcpa: z.boolean(),
});

export const applicationSchema = z
  .object({
    loan: loanRequestSchema,
    personal: personalDetailsSchema,
    employment: employmentSchema,
    banking: bankingSchema,
    consent: consentSchema,
  })
  .superRefine((data, ctx) => {
    const dob = new Date(`${data.personal.dob}T00:00:00`);

    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();

    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    // Alabama and Nebraska require 19+
    // const minimumAge = ["AL", "NE"].includes(data.personal.state) ? 19 : 18;

    // if (age < minimumAge) {
    //   ctx.addIssue({
    //     code: "custom",
    //     path: ["personal", "dob"],
    //     message: `Applicant must be at least ${minimumAge} years old`,
    //   });
    // }

    if (age > 100) {
      ctx.addIssue({
        code: "custom",
        path: ["personal", "dob"],
        message: "Applicant age cannot exceed 100",
      });
    }

    if (!validateSSN(data.personal.ssn)) {
      ctx.addIssue({
        code: "custom",
        path: ["personal", "ssn"],
        message: "Invalid SSN",
      });
    }
  });

function validateSSN(value: string) {
  if (!ssnRegex.test(value)) {
    return false;
  }

  const [area, group, serial] = value.split("-");

  if (area === "000" || area === "666" || Number(area) >= 900) {
    return false;
  }

  if (group === "00") {
    return false;
  }

  if (serial === "0000") {
    return false;
  }

  return true;
}
