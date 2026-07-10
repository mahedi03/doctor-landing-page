"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Stethoscope } from "lucide-react";
import { doctor } from "@/lib/doctor";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";

export function AboutDoctor() {
  return (
    <section id="about" className="bg-white py-20 dark:bg-navy-900 sm:py-28">
      <Container className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        
        {/* Image wrapper motion div */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-full sm:max-w-md lg:max-w-full lg:mx-0"
        >
          <div className="overflow-hidden rounded-2xl border border-navy-900/8 shadow-soft dark:border-white/10">
            <Image
              src="/doctor/doctor-logo.jpg"
              alt={`${doctor.name} consulting with a patient in the chamber`}
              width={700}
              height={900}
             
              className="h-auto w-full object-cover"
              priority // ইমেজটি দ্রুত লোড হওয়ার জন্য priority ব্যবহার করা ভালো
            />
          </div>
          <div className="mt-4 flex items-center gap-3 rounded-xl border border-navy-900/8 bg-ivory p-4 dark:border-white/10 dark:bg-navy-800">
            <Stethoscope className="h-5 w-5 shrink-0 text-sapphire-600 dark:text-vitals-400" />
            <p className="text-sm text-navy-900/70 dark:text-white/70">
              {doctor.designation} at {doctor.chamberName}
            </p>
          </div>
        </motion.div>

        {/* Content Side */}
        <div>
          <SectionHeading
            eyebrow="About the Doctor"
            title={`A cardiologist who treats the person, not just the chart`}
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base leading-relaxed text-navy-900/70 dark:text-white/70"
          >
            {doctor.bio}
          </motion.p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { label: "Specialization", value: doctor.specialization },
              { label: "Designation", value: doctor.designation },
              { label: "Registration", value: doctor.registrationNumber },
              { label: "Chamber", value: doctor.chamberName },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className="rounded-xl border border-navy-900/8 bg-ivory p-4 dark:border-white/10 dark:bg-navy-800"
              >
                <p className="font-mono text-[10px] uppercase tracking-wider text-navy-900/45 dark:text-white/45">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-medium text-navy-900 dark:text-white">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}