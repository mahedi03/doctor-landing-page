"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarCheck, MessageCircle, Phone, ShieldCheck, Award, Users } from "lucide-react";
import { doctor } from "@/lib/doctor";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/Container";
import { HeartbeatLine } from "@/components/common/HeartbeatLine";

export function Hero() {
  const waLink = `https://wa.me/${doctor.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(
    "Hello, I would like to book an appointment with " + doctor.shortName
  )}`;

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ivory pt-32 pb-20 dark:bg-navy-950 sm:pt-40 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-grain" />
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-sapphire-100 blur-3xl dark:bg-sapphire-900/20" />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start gap-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-sapphire-600/20 bg-sapphire-50 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-sapphire-700 dark:border-vitals-500/30 dark:bg-vitals-500/10 dark:text-vitals-400">
            <ShieldCheck className="h-3.5 w-3.5" />
            {doctor.registrationNumber}
          </span>

          <h1 className="font-display text-4xl font-semibold leading-[1.08] text-navy-900 dark:text-white sm:text-5xl lg:text-[3.4rem]">
            Heart care that listens
            <br className="hidden sm:block" /> before it prescribes.
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-navy-900/70 dark:text-white/70">
            {doctor.name}, {doctor.degrees} — {doctor.specialization.toLowerCase()}
            {" "}with {doctor.experienceYears}+ years of clinical experience at{" "}
            {doctor.chamberName}, Pabna, Bangladesh.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button asChild size="lg">
              <Link href="/#appointment">
                <CalendarCheck className="h-[18px] w-[18px]" />
                Book Appointment
              </Link>
            </Button>
            <Button asChild size="lg" variant="whatsapp">
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-[18px] w-[18px]" />
                WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={`tel:${doctor.phone}`}>
                <Phone className="h-[18px] w-[18px]" />
                Call Now
              </a>
            </Button>
          </div>

          <div className="mt-6 grid w-full grid-cols-3 gap-4 border-t border-navy-900/10 pt-6 dark:border-white/10">
            <div>
              <p className="font-display text-2xl font-semibold text-navy-900 dark:text-white">
                {doctor.experienceYears}+
              </p>
              <p className="text-xs text-navy-900/55 dark:text-white/55">Years experience</p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold text-navy-900 dark:text-white">4,000+</p>
              <p className="text-xs text-navy-900/55 dark:text-white/55">Families cared for</p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold text-navy-900 dark:text-white">4.9/5</p>
              <p className="text-xs text-navy-900/55 dark:text-white/55">Patient rating</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-4 text-sapphire-600/25 dark:text-vitals-500/25">
            <HeartbeatLine />
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-navy-900/10 bg-white shadow-card dark:border-white/10 dark:bg-navy-900">
            <Image
              src="/doctor/doctor-logo.jpg"
              alt={`Portrait of ${doctor.name}, ${doctor.specialization}`}
              width={800}
              height={960}
              priority
              className="h-[420px] w-full object-cover sm:h-[480px]"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -left-6 bottom-8 flex items-center gap-3 rounded-2xl border border-navy-900/8 bg-white/95 px-4 py-3 shadow-card backdrop-blur dark:border-white/10 dark:bg-navy-800/95"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-vitals-500/15 text-vitals-600 dark:text-vitals-400">
              <Award className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-sm font-semibold text-navy-900 dark:text-white">
                FCPS Part 1, Physician
              </p>
              <p className="text-xs text-navy-900/55 dark:text-white/55">UK Fellowship trained</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="absolute -right-4 top-8 flex items-center gap-3 rounded-2xl border border-navy-900/8 bg-white/95 px-4 py-3 shadow-card backdrop-blur dark:border-white/10 dark:bg-navy-800/95 sm:-right-8"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sapphire-600/15 text-sapphire-700 dark:text-sapphire-400">
              <Users className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-sm font-semibold text-navy-900 dark:text-white">
                4,000+ Patients
              </p>
              <p className="text-xs text-navy-900/55 dark:text-white/55">Trust his care</p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
