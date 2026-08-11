interface ChoiceOption {
  label: string;
  value: string;
}

interface FormChoiceGroupProps {
  value: string;
  options: ChoiceOption[];
  onChange: (value: string) => void;
  disabled?: boolean;
}

export default function FormChoiceGroup({
  value,
  options,
  onChange,
  disabled = false,
}: FormChoiceGroupProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {options.map((option) => {
        const isActive = value === option.value;

        return (
          <button
            key={option.value}
            type="button"
            disabled={disabled}
            onClick={() => onChange(option.value)}
            className={`
              w-full rounded-xl border px-4 py-3.5
              text-sm font-semibold
              transition-all duration-200
              focus:outline-none
              focus:ring-4 focus:ring-blue-500/10

              ${
                isActive
                  ? "border-blue-600 bg-blue-50 text-blue-700"
                  : "border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50"
              }

              ${
                disabled
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer"
              }
            `}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}