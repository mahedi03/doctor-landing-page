"use client";

import { useRef, useState } from "react";
import { formatDate, generateId } from "@/lib/utils";
import type { PrescriptionData } from "@/types/prescription";
import { DoctorInfo } from "@/app/prescription/DoctorInfo";
import { PatientInfo } from "@/app/prescription/PatientInfo";
import { Diagnosis } from "@/app/prescription/Diagnosis";
import { MedicineTable } from "@/app/prescription/MedicineTable";
import { Advice } from "@/app/prescription/Advice";
import { Signature } from "@/app/prescription/Signature";
import { DownloadPDF } from "@/app/prescription/DownloadPDF";

const initialData: PrescriptionData = {
  patient: {
    name: "",
    age: "",
    gender: "Male",
    weight: "",
    bloodPressure: "",
    date: formatDate(),
  },
  chiefComplaint: "",
  diagnosis: "",
  medicines: [
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
  ],
  advice: "",
  nextVisit: "",
};

export function PrescriptionForm() {
  const [data, setData] = useState<PrescriptionData>(initialData);
  const padRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col gap-6">
      <div
        ref={padRef}
        className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-card sm:p-10"
      >
        <DoctorInfo />
        <PatientInfo
          value={data.patient}
          onChange={(patient) => setData((d) => ({ ...d, patient }))}
        />
        <Diagnosis
          chiefComplaint={data.chiefComplaint}
          diagnosis={data.diagnosis}
          onChiefComplaintChange={(v) => setData((d) => ({ ...d, chiefComplaint: v }))}
          onDiagnosisChange={(v) => setData((d) => ({ ...d, diagnosis: v }))}
        />
        <MedicineTable
          medicines={data.medicines}
          onChange={(medicines) => setData((d) => ({ ...d, medicines }))}
        />
        <Advice
          advice={data.advice}
          nextVisit={data.nextVisit}
          onAdviceChange={(v) => setData((d) => ({ ...d, advice: v }))}
          onNextVisitChange={(v) => setData((d) => ({ ...d, nextVisit: v }))}
        />
        <Signature />
      </div>

      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-xs text-navy-900/50 dark:text-white/50">
          Fields update instantly. Nothing is saved or sent anywhere — this
          runs entirely in your browser.
        </p>
        <DownloadPDF targetRef={padRef} />
      </div>
    </div>
  );
}
