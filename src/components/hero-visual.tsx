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
import { useRef, useSyncExternalStore, type PointerEvent } from "react";

type NavigatorWithConnection = Navigator & {
  connection?: EventTarget & { saveData?: boolean };
};

function subscribeToSaveData(callback: () => void) {
  const connection = (navigator as NavigatorWithConnection).connection;
  connection?.addEventListener("change", callback);
  return () => connection?.removeEventListener("change", callback);
}

function getSaveDataSnapshot() {
  return (navigator as NavigatorWithConnection).connection?.saveData === true;
}

function getServerSaveDataSnapshot() {
  return true;
}

export function HeroVisual() {
  const visualRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const saveData = useSyncExternalStore(
    subscribeToSaveData,
    getSaveDataSnapshot,
    getServerSaveDataSnapshot,
  );
  const animateMascot = !reducedMotion && !saveData;
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 100, damping: 28, mass: 0.45 });
  const smoothY = useSpring(pointerY, { stiffness: 100, damping: 28, mass: 0.45 });
  const gifX = useTransform(smoothX, [-1, 1], [-4, 4]);
  const gifY = useTransform(smoothY, [-1, 1], [-2, 2]);
  const { scrollYProgress } = useScroll({
    target: visualRef,
    offset: ["start start", "end start"],
  });
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, -12]);
  const scrollScale = useTransform(scrollYProgress, [0, 1], [1, 1.012]);

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
      className="hero-gif-visual"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      aria-hidden="true"
    >
      <motion.div
        className="hero-gif-scroll"
        style={reducedMotion ? undefined : { y: scrollY, scale: scrollScale }}
      >
        <motion.div
          className="hero-gif-stage"
          style={reducedMotion ? undefined : { x: gifX, y: gifY }}
        >
          <Image
            src={animateMascot
              ? "/images/tubarao-correndo-hero.webp"
              : "/images/tubarao-correndo-poster.webp"}
            alt=""
            fill
            unoptimized={animateMascot}
            preload
            sizes="(max-width: 767px) 82vw, 38vw"
            className="hero-shark-gif object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
