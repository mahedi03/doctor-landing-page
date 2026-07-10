import { doctor } from "@/lib/doctor";

export function DoctorInfo() {
  return (
    <div className="flex flex-col items-center gap-1 border-b-2 border-navy-900 pb-4 text-center">
      <h3 className="font-display text-2xl font-bold text-navy-900">{doctor.name}</h3>
      <p className="text-sm font-medium text-navy-900/80">{doctor.degrees}</p>
      <p className="text-xs text-navy-900/60">{doctor.designation}</p>
      <p className="mt-1 font-mono text-[11px] text-navy-900/60">{doctor.registrationNumber}</p>
      <p className="text-xs text-navy-900/60">
        {doctor.chamberName} — {doctor.address}
      </p>
    </div>
  );
}
