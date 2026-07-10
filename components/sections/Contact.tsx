"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageCircle, Facebook, Linkedin } from "lucide-react";
import { doctor } from "@/lib/doctor";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";

const contactItems = [
  { icon: Phone, label: "Phone", value: doctor.phone, href: `tel:${doctor.phone}` },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: doctor.whatsapp,
    href: `https://wa.me/${doctor.whatsapp.replace(/\+/g, "")}`,
  },
  { icon: Mail, label: "Email", value: doctor.email, href: `mailto:${doctor.email}` },
  { icon: MapPin, label: "Chamber Address", value: doctor.address, href: undefined },
  { icon: Facebook, label: "Facebook", value: "Shafiul Kawsar", href: doctor.facebook },
  { icon: Linkedin, label: "LinkedIn", value: "Dr. Shafiul Ahmed Kawsar", href: doctor.linkedin },
];

export function Contact() {
  return (
    <section id="contact" className="bg-ivory py-20 dark:bg-navy-950 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionHeading
            eyebrow="Get in Touch"
            title="Contact Information"
            description="Reach out for appointments, report reviews, or general questions about your care."
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-start gap-3 rounded-xl border border-navy-900/8 bg-white p-4 shadow-soft transition-colors hover:border-sapphire-600/30 dark:border-white/10 dark:bg-navy-900">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sapphire-600/10 text-sapphire-700 dark:bg-vitals-500/15 dark:text-vitals-400">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-navy-900/45 dark:text-white/45">
                      {item.label}
                    </p>
                    <p className="truncate text-sm font-medium text-navy-900 dark:text-white">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="relative flex min-h-[320px] flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-navy-900/8 bg-navy-900 p-8 text-center shadow-soft dark:border-white/10"
        >
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <MapPin className="relative h-8 w-8 text-vitals-400" />
          <p className="relative font-display text-lg font-semibold text-white">
            {doctor.chamberName}
          </p>
          <p className="relative max-w-xs text-sm text-white/60">{doctor.address}</p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              doctor.mapEmbedQuery
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-2 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10"
          >
            Open in Google Maps
          </a>
          <p className="relative mt-1 text-[11px] text-white/35">
            Map preview placeholder — embed a live Google Map here in production.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
