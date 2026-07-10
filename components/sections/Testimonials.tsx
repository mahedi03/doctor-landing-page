"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { doctor } from "@/lib/doctor";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-ivory py-20 dark:bg-navy-950 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Patient Stories"
          title="What patients say"
          align="center"
        />

        <div className="grid gap-5 sm:grid-cols-3">
          {doctor.testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-4 rounded-2xl border border-navy-900/8 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-navy-900"
            >
              <Quote className="h-6 w-6 text-vitals-500/60" />
              <p className="flex-1 text-sm leading-relaxed text-navy-900/75 dark:text-white/75">
                “{t.quote}”
              </p>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <div className="border-t border-navy-900/8 pt-4 dark:border-white/10">
                <p className="font-display text-sm font-semibold text-navy-900 dark:text-white">
                  {t.name}
                </p>
                <p className="text-xs text-navy-900/50 dark:text-white/50">{t.relation}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
