"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { createNoise3D } from "simplex-noise";
import { cn } from "@/lib/utils";

type WavyBackgroundProps = {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
};

type NavigatorWithConnection = Navigator & {
  connection?: { saveData?: boolean };
};

// Adaptado do Wavy Background da 21st.dev com pausa fora da tela e resize local.
export function WavyBackground({
  children,
  className,
  containerClassName,
  colors = ["#00cfff", "#0e54bd", "#d923a5"],
  waveWidth = 34,
  backgroundFill = "#07091e",
  blur = 8,
  speed = "slow",
  waveOpacity = 0.28,
}: WavyBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!container || !canvas || !context) return;

    const noise = createNoise3D();
    const saveData = (navigator as NavigatorWithConnection).connection?.saveData === true;
    const staticMode = reducedMotion || saveData;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let width = 0;
    let height = 0;
    let phase = 0;
    let animationFrame = 0;
    let visible = true;

    const resize = () => {
      const bounds = container.getBoundingClientRect();
      width = Math.max(1, Math.round(bounds.width));
      height = Math.max(1, Math.round(bounds.height));
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      context.globalAlpha = 1;
      context.filter = "none";
      context.fillStyle = backgroundFill;
      context.fillRect(0, 0, width, height);
      context.filter = `blur(${blur}px)`;
      context.globalAlpha = waveOpacity;

      colors.forEach((color, index) => {
        context.beginPath();
        context.lineWidth = waveWidth;
        context.strokeStyle = color;
        for (let x = -20; x <= width + 20; x += 6) {
          const y = noise(x / 560, index * 0.32, phase) * Math.min(76, height * 0.18);
          context.lineTo(x, y + height * (0.42 + index * 0.045));
        }
        context.stroke();
        context.closePath();
      });
    };

    const render = () => {
      phase += speed === "fast" ? 0.002 : 0.001;
      draw();
      if (!staticMode && visible) animationFrame = requestAnimationFrame(render);
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      draw();
    });
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      const nextVisible = entry.isIntersecting;
      if (nextVisible === visible) return;
      visible = nextVisible;
      cancelAnimationFrame(animationFrame);
      if (visible && !staticMode) render();
    });

    resize();
    render();
    resizeObserver.observe(container);
    visibilityObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
    };
  }, [backgroundFill, blur, colors, reducedMotion, speed, waveOpacity, waveWidth]);

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", containerClassName)}>
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 size-full" aria-hidden="true" />
      {children && <div className={cn("relative z-10", className)}>{children}</div>}
    </div>
  );
}
