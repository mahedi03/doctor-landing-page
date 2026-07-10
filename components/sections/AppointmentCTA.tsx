"use client";

import { motion } from "framer-motion";
import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { doctor } from "@/lib/doctor";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/Container";
import { HeartbeatLine } from "@/components/common/HeartbeatLine";

export function AppointmentCTA() {
  const waLink = `https://wa.me/${doctor.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(
    "Hello, I would like to book an appointment with " + doctor.shortName
  )}`;

  return (
    <section id="appointment" className="relative overflow-hidden bg-navy-950 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 text-vitals-500/25">
        <HeartbeatLine />
      </div>
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sapphire-600/20 blur-3xl" />

      <Container className="relative flex flex-col items-center gap-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-vitals-400"
        >
          Book a Consultation
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="max-w-2xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl"
        >
          Your heart health deserves a plan, not just a prescription.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-xl text-base leading-relaxed text-white/65"
        >
          Chamber hours run Saturday to Thursday. Reach out on WhatsApp or by
          phone to confirm a slot, or fill in the quick request below.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          <Button asChild size="lg" variant="gold">
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-[18px] w-[18px]" />
              Book via WhatsApp
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/25 text-white hover:bg-white/10">
            <a href={`tel:${doctor.phone}`}>
              <Phone className="h-[18px] w-[18px]" />
              {doctor.phone}
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost" className="text-white hover:bg-white/10">
            <a href="/#contact">
              <CalendarCheck className="h-[18px] w-[18px]" />
              See Contact Details
            </a>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
