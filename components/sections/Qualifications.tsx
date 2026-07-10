"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { doctor } from "@/lib/doctor";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";

export function Qualifications() {
  return (
    <section id="qualifications" className="bg-ivory py-20 dark:bg-navy-950 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Education & Training"
          title="Qualifications"
          description="A training path spanning Dhaka's leading medical institutions and a cardiology fellowship in the United Kingdom."
        />

        <div className="relative mt-4 flex flex-col gap-6 border-l border-navy-900/12 pl-8 dark:border-white/15 sm:pl-10">
          {doctor.qualifications.map((q, i) => (
            <motion.div
              key={q.degree}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[2.6rem] top-1 flex h-8 w-8 items-center justify-center rounded-full border border-sapphire-600/25 bg-white text-sapphire-600 shadow-soft dark:border-vitals-500/30 dark:bg-navy-900 dark:text-vitals-400 sm:-left-[3.1rem]">
                <GraduationCap className="h-4 w-4" />
              </span>
              <div className="rounded-xl border border-navy-900/8 bg-white p-5 shadow-soft dark:border-white/10 dark:bg-navy-900">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-white">
                    {q.degree}
                  </h3>
                  <span className="font-mono text-xs text-navy-900/45 dark:text-white/45">
                    {q.year}
                  </span>
                </div>
                <p className="mt-1 text-sm text-navy-900/65 dark:text-white/65">{q.institute}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
