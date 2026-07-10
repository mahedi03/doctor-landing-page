"use client";

import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { doctor } from "@/lib/doctor";

export function FloatingWhatsApp() {
  const waLink = `https://wa.me/${doctor.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(
    "Hello, I would like to book an appointment with " + doctor.shortName
  )}`;

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      <motion.a
        href={`tel:${doctor.phone}`}
        aria-label="Call the chamber now"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-sapphire-600 text-white shadow-card"
      >
        <Phone className="h-5 w-5" strokeWidth={2.25} />
      </motion.a>

      <motion.a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message on WhatsApp to book an appointment"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-vitals-500 text-white shadow-card"
      >
        <span className="absolute inset-0 rounded-full bg-vitals-500 animate-pulse-ring" />
        <MessageCircle className="relative h-6 w-6" strokeWidth={2.25} />
      </motion.a>
    </div>
  );
}
