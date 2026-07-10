"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Building2 } from "lucide-react";
import { doctor } from "@/lib/doctor";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";

const TODAY_INDEX = new Date().getDay(); // 0 = Sunday
const DAY_ORDER = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function ChamberSchedule() {
  const todayName = DAY_ORDER[TODAY_INDEX];

  return (
    <section id="chamber" className="bg-white py-20 dark:bg-navy-900 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Chamber Information"
            title="Visiting Hours"
            description="Consultations are held six days a week. Booking ahead by phone or WhatsApp is recommended to minimise waiting time."
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="flex items-start gap-3 rounded-xl border border-navy-900/8 bg-ivory p-5 dark:border-white/10 dark:bg-navy-800"
          >
            <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-sapphire-600 dark:text-vitals-400" />
            <div>
              <p className="font-display text-base font-semibold text-navy-900 dark:text-white">
                {doctor.chamberName}
              </p>
              <p className="mt-1 flex items-start gap-1.5 text-sm text-navy-900/60 dark:text-white/60">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                {doctor.address}
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="overflow-hidden rounded-2xl border border-navy-900/8 shadow-soft dark:border-white/10"
        >
          <div className="flex items-center gap-2 bg-navy-900 px-6 py-4 text-white dark:bg-navy-950">
            <Clock className="h-4 w-4 text-vitals-400" />
            <span className="font-mono text-xs uppercase tracking-wider">Weekly Schedule</span>
          </div>
          <ul className="divide-y divide-navy-900/8 bg-white dark:divide-white/10 dark:bg-navy-800">
            {doctor.chamberSchedule.map((slot) => (
              <li
                key={slot.day}
                className={cn(
                  "flex items-center justify-between px-6 py-4",
                  slot.day === todayName && "bg-sapphire-50 dark:bg-vitals-500/10"
                )}
              >
                <span className="flex items-center gap-2 text-sm font-medium text-navy-900 dark:text-white">
                  {slot.day}
                  {slot.day === todayName && (
                    <span className="rounded-full bg-vitals-500 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-white">
                      Today
                    </span>
                  )}
                </span>
                <span
                  className={cn(
                    "text-sm",
                    slot.closed
                      ? "text-navy-900/40 dark:text-white/40"
                      : "font-medium text-vitals-600 dark:text-vitals-400"
                  )}
                >
                  {slot.hours}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </section>
  );
}
