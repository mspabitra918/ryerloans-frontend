export default function SecurityNotice() {
  return (
    <div className="mb-7 flex gap-3 rounded-xl border border-blue-100 bg-blue-50/70 p-4">
      <div className="mt-0.5 shrink-0">🔒</div>

      <div>
        <p className="text-sm font-semibold text-blue-950">
          Your banking information is secure
        </p>

        <p className="mt-1 text-sm leading-5 text-blue-800">
          We will never ask for your online banking username or password. Bank
          verification is completed separately through a secure verification
          service.
        </p>
      </div>
    </div>
  );
}
