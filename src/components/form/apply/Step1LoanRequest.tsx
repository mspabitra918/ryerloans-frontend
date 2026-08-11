import { ApplicationFormData } from "@/src/lib/types/application";
import FormField from "../../ui/FormField";
import FormNavigation from "../../ui/FormNavigation";
import FormSelect from "../../ui/FormSelect";
import FormTextarea from "../../ui/FormTextarea";
import { StepHeader } from "../../ui/StepHeader";
import { LOAN_PURPOSES } from "@/src/lib/constants/applicationOptions";

type LoanData = ApplicationFormData["loan"];

interface Props {
  data: LoanData;
  update: (data: Partial<LoanData>) => void;
  onNext: () => void;
}

const amountOptions = Array.from({ length: 47 }, (_, index) => {
  const amount = 2000 + index * 500;

  return {
    label: `$${amount.toLocaleString()}`,
    value: String(amount),
  };
});

const purposeOptions = LOAN_PURPOSES.map((purpose) => ({
  label: purpose,
  value: purpose,
}));

export default function Step1LoanRequest({ data, update, onNext }: Props) {
  const otherValid =
    data.purpose !== "Other Personal Expenses" ||
    (data.otherPurpose.trim().length >= 10 &&
      data.otherPurpose.trim().length <= 200);

  const valid =
    data.amount >= 2000 && data.amount <= 25000 && !!data.purpose && otherValid;

  return (
    <section>
      <StepHeader
        title="Loan Request"
        description="Tell us how much you need and what you need it for."
      />

      <div className="space-y-6">
        {/* Requested Amount */}
        <FormField label="Requested Amount" htmlFor="loan-amount" required>
          <FormSelect
            id="loan-amount"
            value={String(data.amount)}
            onChange={(event) =>
              update({
                amount: Number(event.target.value),
              })
            }
            options={amountOptions}
            placeholder="Select loan amount"
          />
        </FormField>

        {/* Loan Purpose */}
        <FormField label="Loan Purpose" htmlFor="loan-purpose" required>
          <FormSelect
            id="loan-purpose"
            value={data.purpose}
            onChange={(event) =>
              update({
                purpose: event.target.value,
                otherPurpose: "",
              })
            }
            options={purposeOptions}
            placeholder="Select a purpose"
          />
        </FormField>

        {/* Other Personal Expenses */}
        {data.purpose === "Other Personal Expenses" && (
          <FormField
            label="Describe your loan purpose"
            htmlFor="other_purpose_detail"
            required
            error={
              data.otherPurpose.length > 0 &&
              data.otherPurpose.trim().length < 10
                ? "Please enter at least 10 characters."
                : undefined
            }
            hint={`${data.otherPurpose.length}/200 characters`}
          >
            <FormTextarea
              id="other_purpose_detail"
              value={data.otherPurpose}
              onChange={(event) =>
                update({
                  otherPurpose: event.target.value,
                })
              }
              placeholder="Please describe your purpose..."
              maxLength={200}
              minLength={10}
              rows={4}
              error={
                data.otherPurpose.length > 0 &&
                data.otherPurpose.trim().length < 10
              }
            />
          </FormField>
        )}
      </div>

      <FormNavigation
        onNext={onNext}
        nextLabel="Continue"
        nextDisabled={!valid}
      />
    </section>
  );
}
