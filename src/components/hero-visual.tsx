"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, type PointerEvent } from "react";

export function HeroVisual() {
  const visualRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 110, damping: 28, mass: 0.4 });
  const smoothY = useSpring(pointerY, { stiffness: 110, damping: 28, mass: 0.4 });
  const photoX = useTransform(smoothX, [-1, 1], [-5, 5]);
  const photoY = useTransform(smoothY, [-1, 1], [-3, 3]);
  const frameX = useTransform(smoothX, [-1, 1], [2, -2]);
  const frameY = useTransform(smoothY, [-1, 1], [1, -1]);
  const { scrollYProgress } = useScroll({
    target: visualRef,
    offset: ["start start", "end start"],
  });
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, -18]);
  const scrollScale = useTransform(scrollYProgress, [0, 1], [1, 1.025]);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reducedMotion || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <div
      ref={visualRef}
      className="hero-photo-visual"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      aria-hidden="true"
    >
      <span className="hero-photo-line" />
      <motion.div
        className="hero-photo-scroll"
        style={reducedMotion ? undefined : { y: scrollY, scale: scrollScale }}
      >
        <motion.span
          className="hero-photo-outline"
          style={reducedMotion ? undefined : { x: frameX, y: frameY }}
        />
        <motion.div
          className="hero-photo-frame"
          style={reducedMotion ? undefined : { x: photoX, y: photoY }}
        >
          <Image
            src="/images/foto-1-corrida.png"
            alt=""
            fill
            preload
            sizes="(max-width: 767px) 75vw, 36vw"
            className="hero-photo-image object-cover"
          />
          <span className="hero-photo-overlay" />
          <span className="hero-photo-accent" />
          <div className="hero-photo-caption">
            <span>Paulista — PE</span>
            <strong>Corrida de rua</strong>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
