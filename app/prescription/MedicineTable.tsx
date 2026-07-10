"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MedicineRow } from "@/app/prescription/MedicineRow";
import { MEDICINE_TABLE_COLUMNS } from "@/lib/constants";
import { generateId } from "@/lib/utils";
import type { Medicine } from "@/types/prescription";

export function MedicineTable({
  medicines,
  onChange,
}: {
  medicines: Medicine[];
  onChange: (medicines: Medicine[]) => void;
}) {
  const addMedicine = () => {
    onChange([
      ...medicines,
      {
        id: generateId(),
        name: "",
        dose: "",
        morning: false,
        noon: false,
        night: false,
        duration: "",
        instructions: "",
      },
    ]);
  };

  const updateMedicine = (id: string, medicine: Medicine) => {
    onChange(medicines.map((m) => (m.id === id ? medicine : m)));
  };

  const removeMedicine = (id: string) => {
    onChange(medicines.filter((m) => m.id !== id));
  };

  return (
    <div className="py-4">
      <div className="mb-2 flex items-center gap-2">
        <span className="font-display text-2xl font-bold italic text-navy-900">Rx</span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-navy-900/45">
          Medicines
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse">
          <thead>
            <tr className="border-b-2 border-navy-900/20 text-left">
              {MEDICINE_TABLE_COLUMNS.map((col) => (
                <th
                  key={col}
                  className="pb-2 pr-2 font-mono text-[10px] font-medium uppercase tracking-wider text-navy-900/50"
                >
                  {col}
                </th>
              ))}
              <th className="pb-2 print:hidden" />
            </tr>
          </thead>
          <tbody>
            {medicines.map((medicine) => (
              <MedicineRow
                key={medicine.id}
                medicine={medicine}
                onChange={(m) => updateMedicine(medicine.id, m)}
                onRemove={() => removeMedicine(medicine.id)}
                canRemove={medicines.length > 1}
              />
            ))}
          </tbody>
        </table>
      </div>

      <Button
        type="button"
        onClick={addMedicine}
        variant="outline"
        size="sm"
        className="mt-3 print:hidden"
      >
        <Plus className="h-3.5 w-3.5" />
        Add Medicine
      </Button>
    </div>
  );
}
