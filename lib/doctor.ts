import type { DoctorProfile } from "@/types/doctor";

export const doctor: DoctorProfile = {
  name: "Dr. Shafiul Ahmed Kawsar",
  shortName: "Dr. Shafiul Kawsar",
  degrees: "MBBS, FCPS Part 1",
  specialization: "Consultant Physician, Pabna Zilla Hospital",
  designation: "Physician, Pabna Zilla Hospital",
  experienceYears: 16,
  chamberName: "Pabna Zilla Hospital",
  registrationNumber: "BM&DC Reg. No. A-45210",
  phone: "+8801711234567",
  whatsapp: "+8801711234567",
  email: "appointments@shafiulkawsar.com",
  address: "Pabna Zilla Hospital, Pabna, Bangladesh",
  mapEmbedQuery: "Pabna Zilla Hospital, Pabna, Bangladesh",
  facebook: "https://www.facebook.com/Shafiul.kawshar29",
  linkedin: "https://www.linkedin.com/in/dr-shafiul-ahmed-kawsar",
  bio: "Dr. Shafiul Ahmed Kawsar is a physician at Pabna Zilla Hospital with experience in internal medicine and patient-centered care. He provides practical, evidence-based treatment and supports patients with clear explanations of diagnosis, prescription, and follow-up planning.",
  qualifications: [
    { degree: "MBBS", institute: "Armed Forces Medical College (AFMC)", year: "2018" },
    { degree: "FCPS Part 1", institute: "Bangladesh College of Physicians and Surgeons", year: "2025" },
    { degree: "Higher Secondary Certificate", institute: "Notre Dame College, Dhaka", year: "2014" },
    { degree: "Secondary School Certificate", institute: "H.R.M.L. High School, Pabna", year: "2010" },
  ],
  experience: [
    {
      role: "Physician",
      place: "Pabna Zilla Hospital",
      duration: "2025 — Present",
      description:
        "Provides inpatient and outpatient internal medicine services at Pabna Zilla Hospital, focusing on diagnosis, treatment planning, and patient education.",
    },
    {
      role: "Medical Officer",
      place: "250 Bedded General Hospital, Pabna",
      duration: "2025 — Present",
      description:
        "Cares for general medicine patients, manages emergency admissions, and coordinates with specialists for complex cases.",
    },
    {
      role: "Medical Officer",
      place: "Upazilla Health Complex, Sujanagar, Pabna",
      duration: "2022 — 2025",
      description:
        "Delivered community-based medical services and follow-up care for local patients in rural Pabna.",
    },
  ],
  services: [
    {
      icon: "heart-pulse",
      title: "Cardiac Consultation",
      description: "Comprehensive heart health evaluation, ECG review, and personalised risk assessment for adults of all ages.",
    },
    {
      icon: "activity",
      title: "Hypertension Management",
      description: "Ongoing blood pressure monitoring and medication planning built around your lifestyle, not against it.",
    },
    {
      icon: "stethoscope",
      title: "General Internal Medicine",
      description: "Diagnosis and treatment of everyday illnesses, chronic conditions, and preventive health check-ups.",
    },
    {
      icon: "waveform",
      title: "Echocardiography (ECHO)",
      description: "On-site 2D echo and Doppler studies to assess heart structure and function with same-day reporting.",
    },
    {
      icon: "pill",
      title: "Diabetes & Cholesterol Care",
      description: "Coordinated management of blood sugar and lipid levels to reduce long-term cardiovascular risk.",
    },
    {
      icon: "calendar-heart",
      title: "Executive Health Check-up",
      description: "A focused annual screening package covering cardiac, metabolic, and general health markers.",
    },
  ],
  chamberSchedule: [
    { day: "Saturday", hours: "5:00 PM — 9:00 PM" },
    { day: "Sunday", hours: "5:00 PM — 9:00 PM" },
    { day: "Monday", hours: "5:00 PM — 9:00 PM" },
    { day: "Tuesday", hours: "5:00 PM — 9:00 PM" },
    { day: "Wednesday", hours: "5:00 PM — 9:00 PM" },
    { day: "Thursday", hours: "10:00 AM — 1:00 PM" },
    { day: "Friday", hours: "Closed", closed: true },
  ],
  testimonials: [
    {
      name: "Shirin Akter",
      relation: "Patient, 6 years",
      quote:
        "Dr. Imran spent real time understanding my father's condition instead of rushing to the next patient. His follow-up plan finally got dad's blood pressure under control.",
      rating: 5,
    },
    {
      name: "Kamrul Hasan",
      relation: "Patient, 2 years",
      quote:
        "The echo test and consultation happened in the same visit and he explained every number on the report. I finally understood what was actually going on with my heart.",
      rating: 5,
    },
    {
      name: "Nusrat Jahan",
      relation: "Patient's daughter",
      quote:
        "We travel from Narayanganj just for his chamber hours because of how thorough and calm he is with elderly patients. Booking through WhatsApp made it very easy.",
      rating: 5,
    },
  ],
  faqs: [
    {
      question: "Do I need a referral to book an appointment?",
      answer:
        "No referral is required. You can book directly by phone or WhatsApp, or walk in during chamber hours, though booking ahead is recommended to reduce waiting time.",
    },
    {
      question: "What should I bring to my first visit?",
      answer:
        "Please bring any previous prescriptions, ECG or echo reports, blood test results, and a list of medicines you currently take, if any.",
    },
    {
      question: "Is echocardiography (ECHO) available on-site?",
      answer:
        "Yes, 2D echo and Doppler studies are performed on-site with same-day reporting, so results can usually be reviewed within the same visit.",
    },
    {
      question: "Do you see patients with diabetes alongside heart conditions?",
      answer:
        "Yes, diabetes and cholesterol management are handled together with cardiac care, since the three are closely connected in long-term risk.",
    },
    {
      question: "How can I get my prescription after the visit?",
      answer:
        "Prescriptions are written digitally during your consultation and can be downloaded as a PDF, or a printed copy will be handed to you at the chamber.",
    },
  ],
};
