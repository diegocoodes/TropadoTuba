"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { statistics } from "@/data/site-data";

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (reducedMotion) return;
    const controls = animate(0, value, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, reducedMotion, value]);

  const visibleDisplay = reducedMotion && isInView ? value : display;

  return <span ref={ref}>{visibleDisplay.toLocaleString("pt-BR")}{suffix}</span>;
}

export function Statistics() {
  return (
    <section className="border-y border-line bg-ink py-16 md:py-20" aria-labelledby="estatisticas-titulo">
      <div className="site-container">
        <div className="mb-10 flex flex-col gap-3 border-b border-line pb-6 md:flex-row md:items-end md:justify-between">
          <h2 id="estatisticas-titulo" className="font-title text-4xl font-extrabold uppercase md:text-5xl">Números da Tropa</h2>
          <p className="text-sm text-muted">Passos individuais. Resultados coletivos.</p>
        </div>
        <div className="grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
          {statistics.map((stat) => (
            <div key={stat.label} className="bg-ink px-4 py-8 sm:px-6 md:py-10">
              <div className="font-title text-[clamp(3.2rem,7vw,6.3rem)] font-extrabold leading-none tracking-[-0.04em] text-cyan">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.12em] text-white md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
