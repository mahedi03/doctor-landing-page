export interface Qualification {
  degree: string;
  institute: string;
  year: string;
}

export interface ExperienceItem {
  role: string;
  place: string;
  duration: string;
  description: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface ChamberDay {
  day: string;
  hours: string;
  closed?: boolean;
}

export interface Testimonial {
  name: string;
  relation: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface DoctorProfile {
  name: string;
  shortName: string;
  degrees: string;
  specialization: string;
  designation: string;
  experienceYears: number;
  chamberName: string;
  registrationNumber: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  mapEmbedQuery: string;
  facebook: string;
  linkedin: string;
  bio: string;
  qualifications: Qualification[];
  experience: ExperienceItem[];
  services: ServiceItem[];
  chamberSchedule: ChamberDay[];
  testimonials: Testimonial[];
  faqs: FaqItem[];
}
