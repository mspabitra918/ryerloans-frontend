interface FormNavigationProps {
  onBack?: () => void;
  onNext?: () => void;
  nextLabel?: string;
  nextDisabled?: boolean;
}

export default function FormNavigation({
  onBack,
  onNext,
  nextLabel = "Continue",
  nextDisabled = false,
}: FormNavigationProps) {
  return (
    <div className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 sm:w-auto"
        >
          <span>←</span>
          Back
        </button>
      ) : (
        <div />
      )}

      {onNext && (
        <button
          type="button"
          disabled={nextDisabled}
          onClick={onNext}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-auto"
        >
          {nextLabel}
          <span>→</span>
        </button>
      )}
    </div>
  );
}
