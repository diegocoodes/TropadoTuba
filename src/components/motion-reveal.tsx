"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function MotionReveal({
  children,
  className,
  delay = 0,
  y = 24,
  eager = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  eager?: boolean;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={reducedMotion ? false : { opacity: 0, y }}
      animate={!reducedMotion && eager ? { opacity: 1, y: 0 } : undefined}
      whileInView={!reducedMotion && !eager ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
