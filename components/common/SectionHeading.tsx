"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "mb-10 flex flex-col gap-3 sm:mb-14",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <span
        className={cn(
          "font-mono text-xs uppercase tracking-[0.25em]",
          light ? "text-vitals-400" : "text-vitals-600"
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          "font-display text-3xl font-semibold leading-tight sm:text-4xl",
          light ? "text-white" : "text-navy-900 dark:text-white"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed",
            align === "center" && "mx-auto",
            light ? "text-white/70" : "text-navy-900/65 dark:text-white/65"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
