import { ApplicationFormData } from "@/src/lib/types/application";
import FormChoiceGroup from "../../ui/FormChoiceGroup";
import FormField from "../../ui/FormField";
import FormInput from "../../ui/FormInput";
import FormNavigation from "../../ui/FormNavigation";
import FormSelect from "../../ui/FormSelect";
import { StepHeader } from "../../ui/StepHeader";
import {
  employmentStatusOptions,
  incomeSourceOptions,
  payFrequencyOptions,
  yesNoOptions,
} from "@/src/lib/constants/applicationOptions";

type EmploymentData = ApplicationFormData["employment"];

interface Props {
  data: EmploymentData;
  update: (data: Partial<EmploymentData>) => void;
  onBack: () => void;
  onNext: () => void;
}

export default function Step3EmploymentIncome({
  data,
  update,
  onBack,
  onNext,
}: Props) {
  const requiresEmployer = [
    "Employed Full-Time",
    "Part-Time",
    "Self-Employed",
    "Military",
  ].includes(data.employmentStatus);

  const employerValid = requiresEmployer
    ? data.employerName.trim().length > 0 &&
      data.jobTitle.trim().length > 0 &&
      Number(data.employmentLengthMo) > 0 &&
      data.employerPhone.replace(/\D/g, "").length >= 10
    : true;

  const vehicleValid =
    data.ownsVehicle === false ||
    (data.ownsVehicle === true &&
      !!data.vehicleYear &&
      data.vehicleMake.trim().length > 0 &&
      data.vehicleModel.trim().length > 0 &&
      data.vehiclePaidOff !== null);

  const valid =
    !!data.employmentStatus &&
    employerValid &&
    !!data.payFrequency &&
    !!data.nextPayDate &&
    Number(data.netMonthlyIncome) > 0 &&
    !!data.incomeSource &&
    data.ownsVehicle !== null &&
    vehicleValid;

  return (
    <section>
      <StepHeader
        title="Employment & Income"
        description="Tell us about your employment and income."
      />

      <div className="space-y-6">
        {/* Employment Status */}
        <FormField
          label="Employment Status"
          htmlFor="employment-status"
          required
        >
          <FormSelect
            id="employment-status"
            value={data.employmentStatus}
            onChange={(event) =>
              update({
                employmentStatus: event.target.value,
              })
            }
            options={employmentStatusOptions}
            placeholder="Select employment status"
          />
        </FormField>

        {/* Employer Details */}
        {requiresEmployer && (
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6">
            <div className="mb-5">
              <h3 className="text-sm font-semibold text-slate-900">
                Employment Details
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Please provide information about your current employment.
              </p>
            </div>

            <div className="space-y-5">
              <FormField label="Employer Name" htmlFor="employer-name" required>
                <FormInput
                  id="employer-name"
                  value={data.employerName}
                  onChange={(event) =>
                    update({
                      employerName: event.target.value,
                    })
                  }
                  placeholder="Company name"
                  autoComplete="organization"
                />
              </FormField>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField label="Job Title" htmlFor="job-title" required>
                  <FormInput
                    id="job-title"
                    value={data.jobTitle}
                    onChange={(event) =>
                      update({
                        jobTitle: event.target.value,
                      })
                    }
                    placeholder="Job title"
                  />
                </FormField>

                <FormField
                  label="Months Employed"
                  htmlFor="employment-length"
                  required
                >
                  <FormInput
                    id="employment-length"
                    type="number"
                    inputMode="numeric"
                    min={0}
                    value={data.employmentLengthMo}
                    onChange={(event) =>
                      update({
                        employmentLengthMo: event.target.value,
                      })
                    }
                    placeholder="e.g. 24"
                  />
                </FormField>
              </div>

              <FormField
                label="Employer Phone"
                htmlFor="employer-phone"
                required
              >
                <FormInput
                  id="employer-phone"
                  type="tel"
                  inputMode="tel"
                  value={data.employerPhone}
                  onChange={(event) =>
                    update({
                      employerPhone: event.target.value,
                    })
                  }
                  placeholder="(555) 555-5555"
                />
              </FormField>
            </div>
          </div>
        )}

        {/* Pay Information */}
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField label="Pay Frequency" htmlFor="pay-frequency" required>
            <FormSelect
              id="pay-frequency"
              value={data.payFrequency}
              onChange={(event) =>
                update({
                  payFrequency: event.target.value,
                })
              }
              options={payFrequencyOptions}
              placeholder="Select pay frequency"
            />
          </FormField>

          <FormField label="Next Pay Date" htmlFor="next-pay-date" required>
            <FormInput
              id="next-pay-date"
              type="date"
              value={data.nextPayDate}
              onChange={(event) =>
                update({
                  nextPayDate: event.target.value,
                })
              }
            />
          </FormField>
        </div>

        {/* Net Monthly Income */}
        <FormField
          label="Net Monthly Income"
          htmlFor="net-monthly-income"
          required
          hint="Net income is your take-home pay after taxes and other deductions. Do not enter your gross income."
        >
          <FormInput
            id="net-monthly-income"
            type="number"
            inputMode="numeric"
            min={0}
            value={data.netMonthlyIncome}
            onChange={(event) =>
              update({
                netMonthlyIncome: event.target.value,
              })
            }
            placeholder="$0"
          />
        </FormField>

        {/* Income Source */}
        <FormField label="Income Source" htmlFor="income-source" required>
          <FormSelect
            id="income-source"
            value={data.incomeSource}
            onChange={(event) =>
              update({
                incomeSource: event.target.value,
              })
            }
            options={incomeSourceOptions}
            placeholder="Select income source"
          />
        </FormField>

        {/* Vehicle Ownership */}
        <FormField label="Do you own a vehicle?" required>
          <FormChoiceGroup
            value={
              data.ownsVehicle === true
                ? "yes"
                : data.ownsVehicle === false
                  ? "no"
                  : ""
            }
            options={yesNoOptions}
            onChange={(value) => {
              if (value === "yes") {
                update({
                  ownsVehicle: true,
                });
              }

              if (value === "no") {
                update({
                  ownsVehicle: false,
                  vehicleYear: "",
                  vehicleMake: "",
                  vehicleModel: "",
                  vehiclePaidOff: null,
                });
              }
            }}
          />
        </FormField>

        {/* Vehicle Details */}
        {data.ownsVehicle === true && (
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6">
            <div className="mb-5">
              <h3 className="text-sm font-semibold text-slate-900">
                Vehicle Details
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Tell us about the vehicle you own.
              </p>
            </div>

            <div className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-3">
                <FormField label="Vehicle Year" htmlFor="vehicle-year" required>
                  <FormInput
                    id="vehicle-year"
                    type="number"
                    inputMode="numeric"
                    value={data.vehicleYear}
                    onChange={(event) =>
                      update({
                        vehicleYear: event.target.value,
                      })
                    }
                    placeholder="2022"
                  />
                </FormField>

                <FormField label="Make" htmlFor="vehicle-make" required>
                  <FormInput
                    id="vehicle-make"
                    value={data.vehicleMake}
                    onChange={(event) =>
                      update({
                        vehicleMake: event.target.value,
                      })
                    }
                    placeholder="Toyota"
                  />
                </FormField>

                <FormField label="Model" htmlFor="vehicle-model" required>
                  <FormInput
                    id="vehicle-model"
                    value={data.vehicleModel}
                    onChange={(event) =>
                      update({
                        vehicleModel: event.target.value,
                      })
                    }
                    placeholder="Camry"
                  />
                </FormField>
              </div>

              <FormField label="Is the vehicle paid off?" required>
                <FormChoiceGroup
                  value={
                    data.vehiclePaidOff === true
                      ? "yes"
                      : data.vehiclePaidOff === false
                        ? "no"
                        : ""
                  }
                  options={yesNoOptions}
                  onChange={(value) =>
                    update({
                      vehiclePaidOff: value === "yes",
                    })
                  }
                />
              </FormField>
            </div>
          </div>
        )}
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
