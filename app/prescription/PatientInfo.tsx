"use client";

import type { PatientInfo as PatientInfoType } from "@/types/prescription";

export function PatientInfo({
  value,
  onChange,
}: {
  value: PatientInfoType;
  onChange: (patient: PatientInfoType) => void;
}) {
  const update = (field: keyof PatientInfoType, val: string) => {
    onChange({ ...value, [field]: val });
  };

  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-3 border-b border-navy-900/15 py-4 sm:grid-cols-3">
      <Field label="Patient Name">
        <input
          value={value.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder="Full name"
          className="w-full border-b border-dashed border-navy-900/30 bg-transparent pb-1 text-sm text-navy-900 outline-none focus:border-sapphire-600"
        />
      </Field>
      <Field label="Age">
        <input
          value={value.age}
          onChange={(e) => update("age", e.target.value)}
          placeholder="e.g. 52"
          className="w-full border-b border-dashed border-navy-900/30 bg-transparent pb-1 text-sm text-navy-900 outline-none focus:border-sapphire-600"
        />
      </Field>
      <Field label="Gender">
        <select
          value={value.gender}
          onChange={(e) => update("gender", e.target.value)}
          className="w-full border-b border-dashed border-navy-900/30 bg-transparent pb-1 text-sm text-navy-900 outline-none focus:border-sapphire-600"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </Field>
      <Field label="Weight (kg)">
        <input
          value={value.weight}
          onChange={(e) => update("weight", e.target.value)}
          placeholder="e.g. 70"
          className="w-full border-b border-dashed border-navy-900/30 bg-transparent pb-1 text-sm text-navy-900 outline-none focus:border-sapphire-600"
        />
      </Field>
      <Field label="Blood Pressure">
        <input
          value={value.bloodPressure}
          onChange={(e) => update("bloodPressure", e.target.value)}
          placeholder="e.g. 130/85"
          className="w-full border-b border-dashed border-navy-900/30 bg-transparent pb-1 text-sm text-navy-900 outline-none focus:border-sapphire-600"
        />
      </Field>
      <Field label="Date">
        <input
          type="date"
          value={value.date}
          onChange={(e) => update("date", e.target.value)}
          className="w-full border-b border-dashed border-navy-900/30 bg-transparent pb-1 text-sm text-navy-900 outline-none focus:border-sapphire-600"
        />
      </Field>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="font-mono text-[10px] uppercase tracking-wider text-navy-900/45">
        {label}
      </span>
      {children}
    </label>
  );
}
