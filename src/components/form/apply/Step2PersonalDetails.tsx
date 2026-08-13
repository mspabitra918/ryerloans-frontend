import { ApplicationFormData } from "@/src/lib/types/application";
import FormDateSelect from "../../ui/FormDateSelect";
import FormField from "../../ui/FormField";
import FormInput from "../../ui/FormInput";
import FormNavigation from "../../ui/FormNavigation";
import FormSelect from "../../ui/FormSelect";
import { StepHeader } from "../../ui/StepHeader";
import {
  calculateAge,
  formatPhone,
  formatSSN,
  isValidSSN,
} from "@/src/lib/utils/validators";
import {
  housingOptions,
  US_STATES_LIST,
  yearsAtAddressOptions,
} from "@/src/lib/constants/applicationOptions";
import { Check, Sparkles } from "lucide-react";
import { useState } from "react";
import {
  checkDomainMXFrontend,
  validateEmailClient,
} from "@/src/lib/utils/emailClient";

type PersonalData = ApplicationFormData["personal"];

interface Props {
  data: PersonalData;
  update: (data: Partial<PersonalData>) => void;
  onBack: () => void;
  onNext: () => void;
}

const stateOptions = US_STATES_LIST.map((state) => ({
  label: state.name,
  value: state.abbr,
}));

export default function Step2PersonalDetails({
  data,
  update,
  onBack,
  onNext,
}: Props) {
  const age = calculateAge(data.dobMonth, data.dobDay, data.dobYear);

  const requiredAge = data.state === "AL" || data.state === "NE" ? 19 : 18;

  const dobValid = age !== null && age >= requiredAge && age <= 100;

  const ssnValid = isValidSSN(data.ssn);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);

  const phoneDigits = data.phone.replace(/\D/g, "");

  const zipValid = /^\d{5}$/.test(data.zip);

  const valid =
    data.firstName.trim().length > 0 &&
    data.lastName.trim().length > 0 &&
    emailValid &&
    phoneDigits.length === 10 &&
    dobValid &&
    ssnValid &&
    data.dlNumber.trim().length > 0 &&
    !!data.dlState &&
    data.streetAddress.trim().length > 0 &&
    data.city.trim().length > 0 &&
    !!data.state &&
    zipValid &&
    !!data.housingStatus;

  const [mxError, setMxError] = useState<string | undefined>(undefined);
  const [isVerifyingMX, setIsVerifyingMX] = useState(false);

  // Instant client-side validation (Layers 1, 2, 3, 5)
  const clientResult = validateEmailClient(data.email);

  // Frontend MX Record check on blur (Layer 4)
  const handleBlur = async () => {
    if (!clientResult.isValid || !data.email) return;

    setIsVerifyingMX(true);
    const hasMx = await checkDomainMXFrontend(data.email);
    setIsVerifyingMX(false);

    if (!hasMx) {
      setMxError("Email domain does not appear to accept mail.");
    } else {
      setMxError(undefined);
    }
  };

  const handleApplySuggestion = () => {
    if (clientResult.suggestion) {
      update({ email: clientResult.suggestion });
      setMxError(undefined);
    }
  };
  // Error priority: Client structural/typo error > Server MX error
  const errorMessage = (data.email.length > 0 && clientResult.error) || mxError;

  return (
    <section>
      <StepHeader
        title="Personal Details"
        description="Tell us about yourself."
      />

      <div className="space-y-6">
        {/* First / Last Name */}
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField label="First Name" htmlFor="first-name" required>
            <FormInput
              id="first-name"
              value={data.firstName}
              onChange={(event) =>
                update({
                  firstName: event.target.value,
                })
              }
              placeholder="First name"
              autoComplete="given-name"
            />
          </FormField>

          <FormField label="Last Name" htmlFor="last-name" required>
            <FormInput
              id="last-name"
              value={data.lastName}
              onChange={(event) =>
                update({
                  lastName: event.target.value,
                })
              }
              placeholder="Last name"
              autoComplete="family-name"
            />
          </FormField>
        </div>

        {/* Email */}
        <FormField
          label="Email Address"
          htmlFor="email"
          required
          error={errorMessage}
        >
          <div className="relative">
            <FormInput
              id="email"
              type="email"
              value={data.email}
              onChange={(event) => {
                setMxError(undefined);
                update({
                  email: event.target.value,
                });
              }}
              onBlur={handleBlur}
              placeholder="you@example.com"
              autoComplete="email"
              error={Boolean(errorMessage)}
            />
            {isVerifyingMX && (
              <span className="absolute right-3 top-3 text-xs text-slate-400 animate-pulse font-medium">
                Checking domain...
              </span>
            )}
          </div>
        </FormField>
        {/* One-Tap Typo Correction Suggestion Banner */}
        {clientResult.suggestion && (
          <div className="flex items-center justify-between gap-3 rounded-xl border border-sky-200 bg-sky-50 p-3 text-xs text-sky-950 shadow-sm animate-in fade-in duration-150">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-sky-600 shrink-0" />
              <span>
                Did you mean{" "}
                <strong className="font-semibold">
                  {clientResult.suggestion}
                </strong>
                ?
              </span>
            </div>
            <button
              type="button"
              onClick={handleApplySuggestion}
              className="inline-flex shrink-0 items-center gap-1 rounded-lg bg-sky-600 px-2.5 py-1 text-xs font-bold text-white shadow hover:bg-sky-700 transition"
            >
              <Check className="h-3.5 w-3.5" />
              Fix
            </button>
          </div>
        )}
        {/* Phone */}
        <FormField
          label="Mobile Phone"
          htmlFor="phone"
          required
          hint="We'll use this number to contact you about your application."
        >
          <FormInput
            id="phone"
            type="tel"
            inputMode="tel"
            value={data.phone}
            onChange={(event) =>
              update({
                phone: formatPhone(event.target.value),
              })
            }
            placeholder="(555) 555-5555"
            autoComplete="tel"
            error={phoneDigits.length > 0 && phoneDigits.length !== 10}
          />
        </FormField>

        {/* Date of Birth */}
        <FormField
          label="Date of Birth"
          required
          error={
            data.dobMonth && data.dobDay && data.dobYear && !dobValid
              ? data.state === "AL" || data.state === "NE"
                ? "You must be at least 19 years old in this state."
                : "You must be at least 18 years old and no older than 100."
              : undefined
          }
        >
          <FormDateSelect
            month={data.dobMonth}
            day={data.dobDay}
            year={data.dobYear}
            onMonthChange={(value) =>
              update({
                dobMonth: value,
              })
            }
            onDayChange={(value) =>
              update({
                dobDay: value,
              })
            }
            onYearChange={(value) =>
              update({
                dobYear: value,
              })
            }
          />
        </FormField>

        {/* SSN */}
        <FormField
          label="Social Security Number"
          htmlFor="ssn"
          required
          hint="Your SSN is encrypted and securely protected."
          error={
            data.ssn.length > 0 && !ssnValid
              ? "Please enter a valid Social Security number."
              : undefined
          }
        >
          <FormInput
            id="ssn"
            type="text"
            inputMode="numeric"
            autoComplete="off"
            placeholder="XXX-XX-XXXX"
            value={data.ssn}
            onChange={(event) =>
              update({
                ssn: formatSSN(event.target.value),
              })
            }
            error={data.ssn.length > 0 && !ssnValid}
          />
        </FormField>

        {/* Driver's License */}
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            label="Driver's License Number"
            htmlFor="dl-number"
            required
          >
            <FormInput
              id="dl-number"
              value={data.dlNumber}
              onChange={(event) =>
                update({
                  dlNumber: event.target.value,
                })
              }
              placeholder="License number"
              autoComplete="off"
            />
          </FormField>

          <FormField label="Issuing State" htmlFor="dl-state" required>
            <FormSelect
              id="dl-state"
              value={data.dlState}
              onChange={(event) =>
                update({
                  dlState: event.target.value,
                })
              }
              options={stateOptions}
              placeholder="Select state"
            />
          </FormField>
        </div>

        {/* Address */}
        <FormField label="Street Address" htmlFor="street-address" required>
          <FormInput
            id="street-address"
            value={data.streetAddress}
            onChange={(event) =>
              update({
                streetAddress: event.target.value,
              })
            }
            placeholder="Street address"
            autoComplete="street-address"
          />
        </FormField>

        {/* Apartment */}
        <FormField
          label="Apartment / Unit"
          htmlFor="address-line-2"
          hint="Optional"
        >
          <FormInput
            id="address-line-2"
            value={data.addressLine2}
            onChange={(event) =>
              update({
                addressLine2: event.target.value,
              })
            }
            placeholder="Apartment, suite, unit, etc."
            autoComplete="address-line2"
          />
        </FormField>

        {/* City / State / ZIP */}
        <div className="grid gap-6 sm:grid-cols-[1.5fr_0.75fr_0.75fr]">
          <FormField label="City" htmlFor="city" required>
            <FormInput
              id="city"
              value={data.city}
              onChange={(event) =>
                update({
                  city: event.target.value,
                })
              }
              placeholder="City"
              autoComplete="address-level2"
            />
          </FormField>

          <FormField label="State" htmlFor="state" required>
            <FormSelect
              id="state"
              value={data.state}
              onChange={(event) =>
                update({
                  state: event.target.value,
                })
              }
              options={stateOptions}
              placeholder="State"
            />
          </FormField>

          <FormField label="ZIP Code" htmlFor="zip" required>
            <FormInput
              id="zip"
              inputMode="numeric"
              maxLength={5}
              value={data.zip}
              onChange={(event) =>
                update({
                  zip: event.target.value.replace(/\D/g, "").slice(0, 5),
                })
              }
              placeholder="ZIP"
              autoComplete="postal-code"
              error={data.zip.length > 0 && !zipValid}
            />
          </FormField>
        </div>

        {/* Housing */}
        <div className="grid gap-6 sm:grid-cols-3">
          <FormField label="Housing Status" htmlFor="housing-status" required>
            <FormSelect
              id="housing-status"
              value={data.housingStatus}
              onChange={(event) =>
                update({
                  housingStatus: event.target.value,
                })
              }
              options={housingOptions}
              placeholder="Select status"
            />
          </FormField>

          <FormField label="Years at Address" htmlFor="years-at-address">
            <FormSelect
              id="years-at-address"
              value={data.yearsAtAddress}
              onChange={(event) =>
                update({
                  yearsAtAddress: event.target.value,
                })
              }
              options={yearsAtAddressOptions}
              placeholder="Select years"
            />
          </FormField>

          <FormField
            label="Monthly Housing Cost"
            htmlFor="monthly-housing-cost"
          >
            <FormInput
              id="monthly-housing-cost"
              type="number"
              inputMode="numeric"
              min={0}
              value={data.monthlyHousingCost}
              onChange={(event) =>
                update({
                  monthlyHousingCost: event.target.value,
                })
              }
              placeholder="$0"
            />
          </FormField>
        </div>
      </div>

      <FormNavigation
        onBack={onBack}
        onNext={onNext}
        nextLabel="Continue"
        nextDisabled={!valid}
      />
    </section>
  );
}
