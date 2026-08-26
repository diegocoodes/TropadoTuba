"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function MascotMotion({
  src,
  alt,
  className,
  imageClassName,
  sizes = "(max-width: 768px) 70vw, 420px",
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("relative", className)}
      initial={{ opacity: 0, x: 72, rotate: 3 }}
      whileInView={{ opacity: 1, x: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={reducedMotion
        ? { duration: 0 }
        : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="relative size-full"
        animate={reducedMotion ? undefined : { y: [0, -7, 0], rotate: [0, -0.6, 0.6, 0] }}
        transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity }}
      >
        <Image src={src} alt={alt} fill sizes={sizes} className={cn("object-contain", imageClassName)} />
      </motion.div>
    </motion.div>
  );
}
