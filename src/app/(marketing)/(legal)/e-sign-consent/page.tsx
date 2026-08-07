import ESignContent from "@/src/components/marketing/legal/esign/ESignContent";
import ESignHero from "@/src/components/marketing/legal/esign/ESignHero";
import { constructMetadata } from "@/src/lib/metadata";

export const metadata = constructMetadata({
  title: "E-Sign Consent | Ryer Loans",
  description:
    "Review the Ryer Loans Consent to Use Electronic Records and Signatures under the federal E-SIGN Act.",
  path: "/e-sign-consent",
  keywords: [
    "e-sign consent",
    "electronic signatures ryer loans",
    "e-sign act disclosure",
    "electronic records consent",
  ],
});

export default function ESignConsentPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <ESignHero />
      <div className="py-16 px-4 max-w-7xl mx-auto space-y-12">
        <ESignContent />
      </div>
    </main>
  );
}
