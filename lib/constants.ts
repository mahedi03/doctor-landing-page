export const SITE = {
  name: "Dr. Shafiul Ahmed Kawsar",
  title: "Dr. Shafiul Ahmed Kawsar | Physician at Pabna Zilla Hospital",
  description:
    "Consult Dr. Shafiul Ahmed Kawsar, FCPS Part 1, at Pabna Zilla Hospital. Book appointments and download a clean digital prescription.",
  url: "https://www.drshafiulkawsar.com",
  ogImage: "/doctor/doctor-logo.jpg",
};

export const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Qualifications", href: "/#qualifications" },
  { label: "Services", href: "/#services" },
  { label: "Chamber", href: "/#chamber" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export const MEDICINE_TABLE_COLUMNS = [
  "Medicine Name",
  "Dose",
  "Morning",
  "Noon",
  "Night",
  "Duration",
  "Instructions",
] as const;
