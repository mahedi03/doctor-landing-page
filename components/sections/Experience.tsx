"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { doctor } from "@/lib/doctor";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";

export function Experience() {
  return (
    <section className="bg-white py-20 dark:bg-navy-900 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Career Journey"
          title="Experience"
          description="Sixteen years across emergency cardiology, hospital consultancy, and long-term outpatient care."
        />

        <div className="grid gap-5 sm:grid-cols-3">
          {doctor.experience.map((exp, i) => (
            <motion.div
              key={`${exp.role}-${exp.place}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="flex flex-col gap-3 rounded-2xl border border-navy-900/8 bg-ivory p-6 shadow-soft dark:border-white/10 dark:bg-navy-800"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sapphire-600/10 text-sapphire-700 dark:bg-vitals-500/15 dark:text-vitals-400">
                <Briefcase className="h-5 w-5" />
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-vitals-600 dark:text-vitals-400">
                {exp.duration}
              </span>
              <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-white">
                {exp.role}
              </h3>
              <p className="text-sm font-medium text-navy-900/70 dark:text-white/70">{exp.place}</p>
              <p className="text-sm leading-relaxed text-navy-900/60 dark:text-white/60">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
