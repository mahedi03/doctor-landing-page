import { PrescriptionForm } from "./PrescriptionForm";
import { PasswordGate } from "./PasswordGate";

export default function PrescriptionPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 dark:bg-navy-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600 mt-20">
            Digital Prescription
          </p>
          <h1 className="text-3xl font-bold text-navy-900 dark:text-white sm:text-4xl">
            Create and download a clean prescription
          </h1>
        </div>
        <PasswordGate>
          <PrescriptionForm />
        </PasswordGate>
      </div>
    </main>
  );
}