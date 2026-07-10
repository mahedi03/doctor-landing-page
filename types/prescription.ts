export interface Medicine {
  id: string;
  name: string;
  dose: string;
  morning: boolean;
  noon: boolean;
  night: boolean;
  duration: string;
  instructions: string;
}

export interface PatientInfo {
  name: string;
  age: string;
  gender: "Male" | "Female" | "Other";
  weight: string;
  bloodPressure: string;
  date: string;
}

export interface PrescriptionData {
  patient: PatientInfo;
  chiefComplaint: string;
  diagnosis: string;
  medicines: Medicine[];
  advice: string;
  nextVisit: string;
}
