import Link from "next/link";
import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/common/Container";
import { HeartbeatLine } from "@/components/common/HeartbeatLine";
import { doctor } from "@/lib/doctor";
import { NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 pt-16 text-white/70">
      <div className="absolute inset-x-0 top-0 text-vitals-500/40">
        <HeartbeatLine />
      </div>

      <Container className="grid gap-12 pb-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sapphire-600 font-display text-sm font-semibold text-white">
              SK
            </span>
            <span className="font-display text-base font-semibold text-white">
              {doctor.shortName}
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            {doctor.specialization}. Providing attentive, evidence-based medical
            care at Pabna Zilla Hospital.
          </p>
          <div className="flex gap-3 pt-1">
            <a
              href={doctor.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-white/10"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={doctor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-white/40">
            Navigate
          </h3>
          <ul className="flex flex-col gap-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-white/40">
            Contact
          </h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-vitals-400" />
              <a href={`tel:${doctor.phone}`}>{doctor.phone}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-vitals-400" />
              <a href={`mailto:${doctor.email}`}>{doctor.email}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-vitals-400" />
              <span>{doctor.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-white/40">
            Chamber
          </h3>
          <p className="text-sm leading-relaxed">{doctor.chamberName}</p>
          <p className="mt-2 text-sm leading-relaxed">Sat—Wed: 5:00 PM—9:00 PM</p>
          <p className="text-sm leading-relaxed">Thursday: 10:00 AM—1:00 PM</p>
          <p className="text-sm leading-relaxed">Friday: Closed</p>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {doctor.name}. All rights reserved.
          </p>
          <p className="font-mono">{doctor.registrationNumber}</p>
        </Container>
      </div>
    </footer>
  );
}
