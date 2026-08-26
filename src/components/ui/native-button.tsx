"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NativeButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  wrapperClassName?: string;
  variant?: "default" | "outline" | "ghost" | "light";
  size?: "default" | "sm" | "lg";
  glow?: boolean;
  target?: "_blank";
  rel?: string;
  ariaLabel?: string;
};

// Adaptado do Native Button da 21st.dev para links e para a identidade da Tropa.
export function NativeButton({
  href,
  children,
  className,
  wrapperClassName,
  variant = "default",
  size = "lg",
  glow = false,
  target,
  rel,
  ariaLabel,
}: NativeButtonProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("group/native relative inline-flex w-fit", wrapperClassName)}
      whileHover={{ scale: reducedMotion ? 1 : 1.018 }}
      transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 20 }}
    >
      {glow && (
        <span className="pointer-events-none absolute -inset-2 bg-cyan/20 opacity-50 blur-xl transition-opacity duration-500 group-hover/native:opacity-90 group-focus-within/native:opacity-90" />
      )}
      <Button asChild variant={variant} size={size} className={cn("relative", className)}>
        <a href={href} target={target} rel={rel} aria-label={ariaLabel}>
          <motion.span className="flex items-center justify-center gap-2">
            {children}
          </motion.span>
        </a>
      </Button>
    </motion.div>
  );
}
