export function Navigation({
  onNext,
  disabled,
}: {
  onNext: () => void;
  disabled: boolean;
}) {
  return (
    <div className="mt-8 flex justify-end">
      <button
        type="button"
        disabled={disabled}
        onClick={onNext}
        className="w-full rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-auto"
      >
        Continue
      </button>
    </div>
  );
}
