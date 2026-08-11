// src/ui/FormDateSelect.tsx

interface FormDateSelectProps {
  month: string;
  day: string;
  year: string;
  onMonthChange: (value: string) => void;
  onDayChange: (value: string) => void;
  onYearChange: (value: string) => void;
}

const selectClass =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10";

export default function FormDateSelect({
  month,
  day,
  year,
  onMonthChange,
  onDayChange,
  onYearChange,
}: FormDateSelectProps) {
  const currentYear = new Date().getFullYear();

  const months = Array.from(
    { length: 12 },
    (_, index) => ({
      label: String(index + 1),
      value: String(index + 1),
    })
  );

  const days = Array.from(
    { length: 31 },
    (_, index) => ({
      label: String(index + 1),
      value: String(index + 1),
    })
  );

  const years = Array.from(
    { length: 101 },
    (_, index) => {
      const value = currentYear - 18 - index;

      return {
        label: String(value),
        value: String(value),
      };
    }
  );

  return (
    <div className="grid grid-cols-3 gap-3">
      {/* Month */}
      <select
        value={month}
        onChange={(event) =>
          onMonthChange(event.target.value)
        }
        className={selectClass}
        aria-label="Birth month"
      >
        <option value="">Month</option>

        {months.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      {/* Day */}
      <select
        value={day}
        onChange={(event) =>
          onDayChange(event.target.value)
        }
        className={selectClass}
        aria-label="Birth day"
      >
        <option value="">Day</option>

        {days.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      {/* Year */}
      <select
        value={year}
        onChange={(event) =>
          onYearChange(event.target.value)
        }
        className={selectClass}
        aria-label="Birth year"
      >
        <option value="">Year</option>

        {years.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}