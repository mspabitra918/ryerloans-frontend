import { ApplicationFormData } from "@/src/lib/types/application";
import FormField from "../../ui/FormField";
import FormInput from "../../ui/FormInput";
import FormNavigation from "../../ui/FormNavigation";
import FormRadioGroup from "../../ui/FormRadioGroup";
import FormSection from "../../ui/FormSection";
import FormSelect from "../../ui/FormSelect";
import SecurityNotice from "../../ui/SecurityNotice";
import {
  accountAgeOptions,
  accountTypeOptions,
  balanceOptions,
  yesNoOptions,
} from "@/src/lib/constants/applicationOptions";

type BankingData = ApplicationFormData["banking"];

interface Props {
  data: BankingData;
  update: (data: Partial<BankingData>) => void;
  onBack: () => void;
  onNext: () => void;
}

export default function Step4Banking({ data, update, onBack, onNext }: Props) {
  const accountNumbersMatch = data.accountNumber === data.confirmAccountNumber;

  /**
   * ABA routing number validation.
   *
   * A valid routing number must:
   * - contain exactly 9 digits
   * - pass the ABA checksum
   */
  const isValidRoutingNumber = (routing: string) => {
    if (!/^\d{9}$/.test(routing)) {
      return false;
    }

    const digits = routing.split("").map(Number);

    const checksum =
      3 * (digits[0] + digits[3] + digits[6]) +
      7 * (digits[1] + digits[4] + digits[7]) +
      digits[2] +
      digits[5] +
      digits[8];

    return checksum % 10 === 0;
  };

  const routingValid = isValidRoutingNumber(data.routingNumber);

  const valid =
    data.bankName.trim().length > 0 &&
    !!data.accountType &&
    routingValid &&
    data.accountNumber.length > 0 &&
    data.confirmAccountNumber.length > 0 &&
    accountNumbersMatch &&
    !!data.accountAge &&
    !!data.currentBalanceBand &&
    data.directDeposit !== null;

  return (
    <FormSection
      title="Banking Information"
      description="Enter the bank account information needed for verification."
    >
      <SecurityNotice />

      <div className="space-y-6">
        {/* Bank Name */}
        <FormField label="Bank Name" htmlFor="bank-name" required>
          <FormInput
            id="bank-name"
            value={data.bankName}
            onChange={(event) =>
              update({
                bankName: event.target.value,
              })
            }
            placeholder="Enter your bank name"
            autoComplete="organization"
          />
        </FormField>

        {/* Account Type */}
        <FormField label="Account Type" htmlFor="account-type" required>
          <FormSelect
            id="account-type"
            value={data.accountType}
            onChange={(event) =>
              update({
                accountType: event.target.value,
              })
            }
            placeholder="Select account type"
            options={accountTypeOptions}
          />
        </FormField>

        {/* Routing Number */}
        <FormField
          label="Routing Number"
          htmlFor="routing-number"
          required
          hint="Enter your 9-digit bank routing number."
          error={
            data.routingNumber && !routingValid
              ? "Please enter a valid 9-digit routing number."
              : undefined
          }
        >
          <FormInput
            id="routing-number"
            inputMode="numeric"
            maxLength={9}
            value={data.routingNumber}
            onChange={(event) =>
              update({
                routingNumber: event.target.value
                  .replace(/\D/g, "")
                  .slice(0, 9),
              })
            }
            placeholder="123456789"
            error={!!data.routingNumber && !routingValid}
          />
        </FormField>

        {/* Account Numbers */}
        <div className="grid gap-6 md:grid-cols-2">
          <FormField label="Account Number" htmlFor="account-number" required>
            <FormInput
              id="account-number"
              type="password"
              inputMode="numeric"
              value={data.accountNumber}
              onChange={(event) =>
                update({
                  accountNumber: event.target.value.replace(/\D/g, ""),
                })
              }
              placeholder="Enter account number"
              autoComplete="off"
            />
          </FormField>

          <FormField
            label="Confirm Account Number"
            htmlFor="confirm-account-number"
            required
            error={
              data.confirmAccountNumber && !accountNumbersMatch
                ? "Account numbers do not match."
                : undefined
            }
          >
            <FormInput
              id="confirm-account-number"
              type="password"
              inputMode="numeric"
              value={data.confirmAccountNumber}
              onChange={(event) =>
                update({
                  confirmAccountNumber: event.target.value.replace(/\D/g, ""),
                })
              }
              placeholder="Re-enter account number"
              autoComplete="off"
              error={!!data.confirmAccountNumber && !accountNumbersMatch}
            />
          </FormField>
        </div>

        {/* Account Age + Balance */}
        <div className="grid gap-6 md:grid-cols-2">
          <FormField label="Account Age" htmlFor="account-age" required>
            <FormSelect
              id="account-age"
              value={data.accountAge}
              onChange={(event) =>
                update({
                  accountAge: event.target.value,
                })
              }
              placeholder="Select account age"
              options={accountAgeOptions}
            />
          </FormField>

          <FormField label="Current Balance" htmlFor="current-balance" required>
            <FormSelect
              id="current-balance"
              value={data.currentBalanceBand}
              onChange={(event) =>
                update({
                  currentBalanceBand: event.target.value,
                })
              }
              placeholder="Select balance range"
              options={balanceOptions}
            />
          </FormField>
        </div>

        {/* Direct Deposit */}
        <FormField label="Is direct deposit active?" required>
          <FormRadioGroup
            value={
              data.directDeposit === null
                ? ""
                : data.directDeposit
                  ? "yes"
                  : "no"
            }
            onChange={(value) =>
              update({
                directDeposit: value === "yes",
              })
            }
            options={yesNoOptions}
          />
        </FormField>

        {/* Security warning */}
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm font-medium text-amber-900">
            Never enter your online banking username or password.
          </p>

          <p className="mt-1 text-xs leading-5 text-amber-800">
            We will never ask you for online banking login credentials. Account
            verification is handled separately through our verification
            provider.
          </p>
        </div>
      </div>

      <FormNavigation
        onBack={onBack}
        onNext={onNext}
        nextLabel="Review Application"
        nextDisabled={!valid}
      />
    </FormSection>
  );
}
