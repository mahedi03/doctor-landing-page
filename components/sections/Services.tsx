"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  Activity,
  Stethoscope,
  Waves,
  Pill,
  CalendarHeart,
  type LucideIcon,
} from "lucide-react";
import { doctor } from "@/lib/doctor";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";

const ICONS: Record<string, LucideIcon> = {
  "heart-pulse": HeartPulse,
  activity: Activity,
  stethoscope: Stethoscope,
  waveform: Waves,
  pill: Pill,
  "calendar-heart": CalendarHeart,
};

export function Services() {
  return (
    <section id="services" className="bg-ivory py-20 dark:bg-navy-950 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Medical Services"
          title="How I can help you"
          description="From routine check-ups to long-term cardiac management, every plan is built around your specific risk factors and daily life."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {doctor.services.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Stethoscope;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col gap-4 rounded-2xl border border-navy-900/8 bg-white p-6 shadow-soft transition-shadow hover:shadow-card dark:border-white/10 dark:bg-navy-900"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sapphire-600/10 text-sapphire-700 transition-colors group-hover:bg-sapphire-600 group-hover:text-white dark:bg-vitals-500/15 dark:text-vitals-400 dark:group-hover:bg-vitals-500 dark:group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-navy-900/60 dark:text-white/60">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
