"use client";

import { Trash2 } from "lucide-react";
import type { Medicine } from "@/types/prescription";

export function MedicineRow({
  medicine,
  onChange,
  onRemove,
  canRemove,
}: {
  medicine: Medicine;
  onChange: (medicine: Medicine) => void;
  onRemove: () => void;
  canRemove: boolean;
}) {
  const update = <K extends keyof Medicine>(field: K, value: Medicine[K]) => {
    onChange({ ...medicine, [field]: value });
  };

  return (
    <tr className="border-b border-navy-900/10 align-top last:border-b-0">
      <td className="py-2 pr-2">
        <input
          value={medicine.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder="Medicine name"
          className="w-full min-w-[130px] bg-transparent text-sm text-navy-900 outline-none"
        />
      </td>
      <td className="py-2 pr-2">
        <input
          value={medicine.dose}
          onChange={(e) => update("dose", e.target.value)}
          placeholder="500mg"
          className="w-20 bg-transparent text-sm text-navy-900 outline-none"
        />
      </td>
      {(["morning", "noon", "night"] as const).map((time) => (
        <td key={time} className="py-2 text-center">
          <input
            type="checkbox"
            checked={medicine[time]}
            onChange={(e) => update(time, e.target.checked)}
            className="h-4 w-4 accent-sapphire-600"
            aria-label={`${time} dose`}
          />
        </td>
      ))}
      <td className="py-2 pr-2">
        <input
          value={medicine.duration}
          onChange={(e) => update("duration", e.target.value)}
          placeholder="7 days"
          className="w-20 bg-transparent text-sm text-navy-900 outline-none"
        />
      </td>
      <td className="py-2 pr-2">
        <input
          value={medicine.instructions}
          onChange={(e) => update("instructions", e.target.value)}
          placeholder="After meal"
          className="w-full min-w-[110px] bg-transparent text-sm text-navy-900 outline-none"
        />
      </td>
      <td className="py-2 text-right print:hidden">
        <button
          type="button"
          onClick={onRemove}
          disabled={!canRemove}
          aria-label="Remove medicine"
          className="rounded p-1 text-navy-900/40 transition-colors hover:bg-red-50 hover:text-red-500 disabled:pointer-events-none disabled:opacity-30"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </td>
    </tr>
  );
}
