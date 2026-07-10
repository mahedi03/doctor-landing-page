"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * The site's signature motif: a single ECG heartbeat trace that draws
 * itself in whenever it scrolls into view. Used as a section divider
 * and as ambient hero decoration.
 */
export function HeartbeatLine({
  className,
  strokeWidth = 2,
  color = "currentColor",
}: {
  className?: string;
  strokeWidth?: number;
  color?: string;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <svg
      ref={ref}
      viewBox="0 0 600 60"
      fill="none"
      className={cn("w-full", className)}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d="M0 30 H180 L205 30 L218 8 L232 52 L246 30 L260 30 L272 18 L284 30 H420 L440 30 L452 12 L464 48 L476 30 L490 30 H600"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      />
    </svg>
  );
}
