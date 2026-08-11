import { ApplicationFormData } from "@/src/lib/types/application";
import FormConsent from "../../ui/FormConsent";
import FormNavigation from "../../ui/FormNavigation";
import FormReviewCard from "../../ui/FormReviewCard";
import FormReviewRow from "../../ui/FormReviewRow";
import FormSection from "../../ui/FormSection";

interface Props {
  data: ApplicationFormData;
  updateConsent: (data: Partial<ApplicationFormData["consent"]>) => void;
  onBack: () => void;
  onEdit: (step: number) => void;
}

export default function Step5ReviewConsent({
  data,
  updateConsent,
  onBack,
  onEdit,
}: Props) {
  const requiredConsents =
    data.consent.esign && data.consent.privacy && data.consent.creditPull;

  const submitApplication = async () => {
    if (!requiredConsents) {
      return;
    }

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Application submission failed");
      }

      window.location.href = "/apply/success";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormSection
      title="Review & Consent"
      description="Review your information carefully before submitting your application."
    >
      <div className="space-y-4">
        {/* Step 1 */}
        <FormReviewCard title="Loan Request" step={1} onEdit={onEdit}>
          <FormReviewRow
            label="Requested Amount"
            value={`$${data.loan.amount.toLocaleString()}`}
          />

          <FormReviewRow label="Purpose" value={data.loan.purpose} />

          {data.loan.otherPurpose && (
            <FormReviewRow
              label="Other Details"
              value={data.loan.otherPurpose}
            />
          )}
        </FormReviewCard>

        {/* Step 2 */}
        <FormReviewCard title="Personal Details" step={2} onEdit={onEdit}>
          <FormReviewRow
            label="Name"
            value={`${data.personal.firstName} ${data.personal.lastName}`}
          />

          <FormReviewRow label="Email" value={data.personal.email} />

          <FormReviewRow label="Phone" value={data.personal.phone} />

          <FormReviewRow
            label="Date of Birth"
            value={`${data.personal.dobMonth}/${data.personal.dobDay}/${data.personal.dobYear}`}
          />

          <FormReviewRow
            label="Address"
            value={[
              data.personal.streetAddress,
              data.personal.addressLine2,
              data.personal.city,
              data.personal.state,
              data.personal.zip,
            ]
              .filter(Boolean)
              .join(", ")}
          />

          <FormReviewRow label="Social Security Number" sensitive />

          <FormReviewRow
            label="Driver's License"
            value={
              data.personal.dlNumber
                ? `••••${data.personal.dlNumber.slice(-4)}`
                : undefined
            }
          />
        </FormReviewCard>

        {/* Step 3 */}
        <FormReviewCard title="Employment & Income" step={3} onEdit={onEdit}>
          <FormReviewRow
            label="Employment Status"
            value={data.employment.employmentStatus}
          />

          {data.employment.employerName && (
            <FormReviewRow
              label="Employer"
              value={data.employment.employerName}
            />
          )}

          {data.employment.jobTitle && (
            <FormReviewRow label="Job Title" value={data.employment.jobTitle} />
          )}

          <FormReviewRow
            label="Pay Frequency"
            value={data.employment.payFrequency}
          />

          <FormReviewRow
            label="Net Monthly Income"
            value={
              data.employment.netMonthlyIncome
                ? `$${Number(
                    data.employment.netMonthlyIncome,
                  ).toLocaleString()} / month`
                : undefined
            }
          />

          <FormReviewRow
            label="Income Source"
            value={data.employment.incomeSource}
          />

          <FormReviewRow
            label="Vehicle"
            value={
              data.employment.ownsVehicle === true
                ? "Yes"
                : data.employment.ownsVehicle === false
                  ? "No"
                  : undefined
            }
          />

          {data.employment.ownsVehicle === true && (
            <FormReviewRow
              label="Vehicle"
              value={[
                data.employment.vehicleYear,
                data.employment.vehicleMake,
                data.employment.vehicleModel,
              ]
                .filter(Boolean)
                .join(" ")}
            />
          )}
        </FormReviewCard>

        {/* Step 4 */}
        <FormReviewCard title="Banking" step={4} onEdit={onEdit}>
          <FormReviewRow label="Bank" value={data.banking.bankName} />

          <FormReviewRow
            label="Account Type"
            value={data.banking.accountType}
          />

          <FormReviewRow
            label="Routing Number"
            value={
              data.banking.routingNumber
                ? `••••••${data.banking.routingNumber.slice(-3)}`
                : undefined
            }
          />

          <FormReviewRow
            label="Account Number"
            value={
              data.banking.accountNumber
                ? `••••${data.banking.accountNumber.slice(-4)}`
                : undefined
            }
          />

          <FormReviewRow label="Account Age" value={data.banking.accountAge} />

          <FormReviewRow
            label="Current Balance"
            value={data.banking.currentBalanceBand}
          />

          <FormReviewRow
            label="Direct Deposit"
            value={
              data.banking.directDeposit === true
                ? "Yes"
                : data.banking.directDeposit === false
                  ? "No"
                  : undefined
            }
          />
        </FormReviewCard>
      </div>

      {/* Consent */}
      <div className="mt-8">
        <div className="mb-4">
          <h3 className="text-base font-bold text-slate-900">
            Required Agreements
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Please review and accept the required agreements before submitting
            your application.
          </p>
        </div>

        <div className="space-y-3">
          {/* E-Sign */}
          <FormConsent
            checked={data.consent.esign}
            onChange={(checked) =>
              updateConsent({
                esign: checked,
              })
            }
            required
            title="E-Sign Consent"
          >
            I consent to use electronic records and electronic signatures.
          </FormConsent>

          {/* Privacy */}
          <FormConsent
            checked={data.consent.privacy}
            onChange={(checked) =>
              updateConsent({
                privacy: checked,
              })
            }
            required
            title="Privacy Policy + Terms of Use"
          >
            I acknowledge and agree to the Privacy Policy and Terms of Use.
          </FormConsent>

          {/* Credit */}
          <FormConsent
            checked={data.consent.creditPull}
            onChange={(checked) =>
              updateConsent({
                creditPull: checked,
              })
            }
            required
            title="Credit & Verification Authorization"
          >
            I authorize credit, identity, and other required verification
            checks.
          </FormConsent>

          {/* TCPA - OPTIONAL */}
          <FormConsent
            checked={data.consent.tcpa}
            onChange={(checked) =>
              updateConsent({
                tcpa: checked,
              })
            }
            title="TCPA Communications Consent"
          >
            I agree to receive calls, prerecorded/artificial voice calls,
            autodialed calls, and SMS messages.
            <span className="mt-2 block text-xs leading-5 text-slate-500">
              This consent is optional and is not a condition of obtaining a
              loan.
            </span>
          </FormConsent>
        </div>
      </div>

      {/* Navigation */}
      <FormNavigation
        onBack={onBack}
        onNext={submitApplication}
        nextLabel="Submit My Application"
        nextDisabled={!requiredConsents}
      />
    </FormSection>
  );
}
