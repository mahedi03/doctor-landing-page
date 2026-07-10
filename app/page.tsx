import { Hero } from "@/components/sections/Hero";
import { AboutDoctor } from "@/components/sections/AboutDoctor";
import { Qualifications } from "@/components/sections/Qualifications";
import { Experience } from "@/components/sections/Experience";
import { Services } from "@/components/sections/Services";
import { ChamberSchedule } from "@/components/sections/ChamberSchedule";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
export default function Home() {
  return (
    <>
      <Hero />
      <AboutDoctor />
      <Qualifications />
      <Experience />
      <Services />
      <ChamberSchedule />
      <AppointmentCTA />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
