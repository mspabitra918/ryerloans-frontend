import { ApplicationFormData } from "@/src/lib/types/application";
import FormConsent from "../../ui/FormConsent";
import FormNavigation from "../../ui/FormNavigation";
import FormReviewCard from "../../ui/FormReviewCard";
import FormReviewRow from "../../ui/FormReviewRow";
import FormSection from "../../ui/FormSection";
import Link from "next/link";
import { RATE_CONFIG } from "@/src/lib/config";

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
  // Checkboxes 1, 2, and 3 are required. Checkbox 4 (TCPA) is strictly optional.
  const requiredConsents =
    Boolean(data.consent.esign) &&
    Boolean(data.consent.privacy) &&
    Boolean(data.consent.creditPull);

  const submitApplication = async () => {
    if (!requiredConsents) {
      return;
    }

    try {
      // const response = await fetch("/api/applications", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // });

      // if (!response.ok) {
      //   throw new Error("Application submission failed");
      // }

      console.log(data);

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

      {/* Consents Section */}
      <div className="mt-8">
        <div className="mb-4">
          <h3 className="text-base font-bold text-slate-900">
            Agreements & Consents
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Please review and accept the required disclosures prior to
            submission.
          </p>
        </div>

        <div className="space-y-4">
          {/* Checkbox 1: Electronic Records Consent (Required) */}
          <FormConsent
            checked={data.consent.esign}
            onChange={(checked) => updateConsent({ esign: checked })}
            required
            title="1. Electronic Records Consent"
          >
            I consent to receive all disclosures, notices, agreements, and
            communications from Ryer Loans electronically, including my loan
            agreement and any required legal notices. I confirm I can access and
            retain PDF documents and HTML web pages. I understand I may withdraw
            this consent by contacting Ryer Loans, and that withdrawing it may
            prevent me from completing an online application. Full terms:{" "}
            <Link
              target="_blank"
              href="/e-sign-consent"
              className="text-sky-600 font-semibold hover:underline"
            >
              [E-Sign Consent]
            </Link>
            .
          </FormConsent>

          {/* Checkbox 2: Privacy Policy and Terms of Use (Required) */}
          <FormConsent
            checked={data.consent.privacy}
            onChange={(checked) => updateConsent({ privacy: checked })}
            required
            title="2. Privacy Policy and Terms of Use"
          >
            I have read and agree to the{" "}
            <Link
              target="_blank"
              href="/privacy-policy"
              className="text-sky-600 font-semibold hover:underline"
            >
              [Privacy Policy]
            </Link>{" "}
            and{" "}
            <Link
              target="_blank"
              href="/terms-of-use"
              className="text-sky-600 font-semibold hover:underline"
            >
              [Terms of Use]
            </Link>
            . I confirm that all information I have provided is true, complete,
            and accurate to the best of my knowledge, and I understand that
            providing false information in connection with a credit application
            may be a violation of federal and state law.
          </FormConsent>

          {/* Checkbox 3: Credit and Verification Authorization (Required) */}
          <FormConsent
            checked={data.consent.creditPull}
            onChange={(checked) => updateConsent({ creditPull: checked })}
            required
            title="3. Credit and Verification Authorization"
          >
            I authorize Ryer Loans and its service providers to verify the
            information in this application and to obtain consumer reports,
            credit reports, and other information about me from consumer
            reporting agencies and other sources, including alternative credit
            bureaus, for the purposes of evaluating this application, verifying
            my identity, preventing fraud, and — if a loan is originated —
            servicing and collecting that loan. I authorize Ryer Loans to verify
            my employment and income, and to connect to my bank account on a
            read-only basis to confirm ownership and account details.
          </FormConsent>

          {/* Checkbox 4: Consent to Contact (OPTIONAL) */}
          <div className="space-y-2">
            <FormConsent
              checked={data.consent.tcpa}
              onChange={(checked) => updateConsent({ tcpa: checked })}
              title="4. Consent to Contact (Optional)"
            >
              I authorize Ryer Loans, its affiliates, and its service providers
              to contact me at the telephone number(s) and email address I have
              provided, including my wireless number, using automatic telephone
              dialing systems, artificial or prerecorded voice messages,
              ringless voicemail, text/SMS messages, and email — for purposes
              including servicing my application, marketing, and offers of
              products and services. I understand message and data rates may
              apply, that message frequency varies, that I may reply STOP to any
              text message to opt out or HELP for help, and that I may revoke
              this consent at any time by calling{" "}
              <a
                href={`tel:${RATE_CONFIG.phone.replace(/[^0-9+]/g, "")}`}
                className="font-bold text-sky-600 hover:underline"
              >
                {RATE_CONFIG.phone}
              </a>{" "}
              or emailing{" "}
              <a
                href={`mailto:${RATE_CONFIG.email}`}
                className="font-bold text-sky-600 hover:underline"
              >
                {RATE_CONFIG.email}
              </a>
              .
            </FormConsent>

            {/* Mandatory Visibly Rendered TCPA Disclosure */}
            <p className="text-xs text-slate-500 pl-7 leading-relaxed">
              I understand that my consent to receive these calls and messages
              is not a condition of obtaining any loan, credit, goods, or
              services from Ryer Loans.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation & Submit Microcopy */}
      <div className="mt-8 space-y-3">
        <FormNavigation
          onBack={onBack}
          onNext={submitApplication}
          nextLabel="Submit Application"
          nextDisabled={!requiredConsents}
        />

        {/* Submit button microcopy */}
        <p className="text-center text-xs text-slate-500 max-w-xl mx-auto leading-normal">
          By submitting, you confirm the above. Submitting an application does
          not obligate you to accept a loan, and Ryer Loans is under no
          obligation to extend one. Applications are subject to verification and
          approval. Ryer Loans will never ask you to send money or pay a fee
          before your loan is funded.
        </p>
      </div>
    </FormSection>
  );
}
