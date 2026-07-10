"use client";

export function Diagnosis({
  chiefComplaint,
  diagnosis,
  onChiefComplaintChange,
  onDiagnosisChange,
}: {
  chiefComplaint: string;
  diagnosis: string;
  onChiefComplaintChange: (v: string) => void;
  onDiagnosisChange: (v: string) => void;
}) {
  return (
    <div className="grid gap-4 border-b border-navy-900/15 py-4 sm:grid-cols-2">
      <div className="flex flex-col gap-1">
        <span className="font-mono text-[10px] uppercase tracking-wider text-navy-900/45">
          Chief Complaint
        </span>
        <textarea
          value={chiefComplaint}
          onChange={(e) => onChiefComplaintChange(e.target.value)}
          placeholder="e.g. Chest discomfort on exertion, 2 weeks"
          rows={2}
          className="w-full resize-none rounded-md border border-navy-900/15 bg-white/60 px-2 py-1.5 text-sm text-navy-900 outline-none focus:border-sapphire-600"
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-mono text-[10px] uppercase tracking-wider text-navy-900/45">
          Diagnosis
        </span>
        <textarea
          value={diagnosis}
          onChange={(e) => onDiagnosisChange(e.target.value)}
          placeholder="e.g. Stage 1 Hypertension"
          rows={2}
          className="w-full resize-none rounded-md border border-navy-900/15 bg-white/60 px-2 py-1.5 text-sm text-navy-900 outline-none focus:border-sapphire-600"
        />
      </div>
    </div>
  );
}
