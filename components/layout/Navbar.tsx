"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, CalendarCheck } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { doctor } from "@/lib/doctor";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Container } from "@/components/common/Container";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/85 shadow-soft backdrop-blur-md dark:bg-navy-950/85 border-b border-navy-900/5 dark:border-white/5"
          : "bg-transparent"
      )}
    >
      {/* Added explicit px-4 to guarantee safe side spacing on small mobile devices */}
      <Container className="flex h-16 items-center justify-between gap-4 px-4 sm:h-20">
        
        {/* Brand Logo - Added min-w-0 to prevent layout blowouts */}
        <Link href="/" className="flex min-w-0 items-center gap-2.5">
          {/* Added shrink-0 so the circle avatar NEVER gets pushed off screen */}
          <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-sapphire-600 font-display text-sm font-semibold text-white">
            <img
              src="/doctor/doctor-logo.jpg"
              alt="Dr. Shafiul Kawsar"
              className="h-full w-full object-cover"
            />
          </span>
          {/* Added min-w-0 to let text truncate/wrap cleanly inside flexbox */}
          <span className="flex flex-col min-w-0 leading-tight">
            <span className="truncate font-display text-sm font-semibold text-navy-900 dark:text-white">
              {doctor.shortName}
            </span>
            {/* Handled long text: Allowed wrapping and limited width on small screens */}
            <span className="line-clamp-1 text-[10px] font-mono uppercase tracking-wider text-navy-900/50 max-w-[180px] xs:max-w-none dark:text-white/50">
              {doctor.specialization}
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy-900/70 transition-colors hover:text-sapphire-600 dark:text-white/70 dark:hover:text-vitals-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button asChild size="default">
            <a href="/#appointment">
              <CalendarCheck className="mr-2 h-4 w-4" />
              Book Appointment
            </a>
          </Button>
        </div>

        {/* Mobile Actions & Toggle - Added shrink-0 to preserve button sizes */}
        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-900/10 text-navy-900 dark:border-white/15 dark:text-white"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-navy-900/8 bg-white lg:hidden dark:border-white/10 dark:bg-navy-950"
          >
            <nav
              className="flex flex-col gap-1 px-5 py-6"
              style={{ paddingBottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))" }}
              aria-label="Mobile"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-navy-900 hover:bg-navy-900/5 dark:text-white dark:hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild size="lg" className="mt-3 w-full justify-center">
                <a href="/#appointment" onClick={() => setOpen(false)}>
                  <CalendarCheck className="mr-2 h-4 w-4" />
                  Book Appointment
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}