"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { events } from "@/data/site-data";
import { cn } from "@/lib/utils";

export function EventCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => () => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
  }, []);

  function updateActiveSlide() {
    const track = trackRef.current;
    if (!track || window.innerWidth >= 768 || frameRef.current !== null) return;

    frameRef.current = requestAnimationFrame(() => {
      const cards = Array.from(track.children) as HTMLElement[];
      const center = track.scrollLeft + track.clientWidth / 2;
      const closest = cards.reduce((best, card, index) => {
        const distance = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center);
        return distance < best.distance ? { index, distance } : best;
      }, { index: 0, distance: Number.POSITIVE_INFINITY });
      setActiveIndex(closest.index);
      frameRef.current = null;
    });
  }

  function goToSlide(index: number) {
    const track = trackRef.current;
    const card = track?.children.item(index) as HTMLElement | null;
    if (!track || !card) return;

    track.scrollTo({
      left: card.offsetLeft - track.offsetLeft,
      behavior: reducedMotion ? "auto" : "smooth",
    });
    setActiveIndex(index);
  }

  return (
    <div className="-mx-4 md:mx-0">
      <div className="mb-5 flex items-center justify-between px-4 md:hidden">
        <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-muted" aria-live="polite">
          Corrida {activeIndex + 1} de {events.length}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => goToSlide(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            className="flex size-11 items-center justify-center rounded-md bg-navy text-white outline-none transition-colors hover:bg-cyan hover:text-ink focus-visible:ring-2 focus-visible:ring-cyan disabled:cursor-not-allowed disabled:opacity-35"
            aria-label="Ver corrida anterior"
          >
            <ArrowLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => goToSlide(Math.min(events.length - 1, activeIndex + 1))}
            disabled={activeIndex === events.length - 1}
            className="flex size-11 items-center justify-center rounded-md bg-navy text-white outline-none transition-colors hover:bg-cyan hover:text-ink focus-visible:ring-2 focus-visible:ring-cyan disabled:cursor-not-allowed disabled:opacity-35"
            aria-label="Ver próxima corrida"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={updateActiveSlide}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3"
        role="region"
        aria-roledescription="carrossel"
        aria-label="Próximas corridas"
      >
        {events.map((event, index) => (
          <motion.article
            key={event.href}
            className="w-[86%] shrink-0 snap-center sm:w-[68%] md:w-auto"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.14 }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.07 }}
            aria-roledescription="slide"
            aria-label={`${index + 1} de ${events.length}`}
          >
            <motion.a
              href={event.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: reducedMotion ? 0 : -4 }}
              transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 360, damping: 24 }}
              className="group flex min-h-full flex-col overflow-hidden rounded-lg bg-[#0a1029] outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
              aria-label={`Ver ${event.name} na PE Running`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#050819]">
                <Image
                  src={event.image}
                  alt={event.alt}
                  fill
                  sizes="(max-width: 768px) 86vw, (max-width: 1024px) 50vw, 34vw"
                  className="object-contain"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/90 to-transparent" aria-hidden="true" />
                <span className="absolute bottom-4 left-4 flex items-center gap-2 rounded-md bg-cyan px-3 py-2 text-xs font-extrabold uppercase tracking-[0.1em] text-ink">
                  <CalendarDays className="size-4" aria-hidden="true" /> {event.date}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-title text-3xl font-extrabold uppercase leading-none text-white">
                  {event.name}
                </h3>
                <p className="mt-4 flex items-start gap-2 text-sm leading-6 text-muted">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden="true" />
                  {event.location}
                </p>
                <span className="mt-7 flex min-h-11 items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-cyan transition-colors group-hover:text-white">
                  Ver corrida na PE Running <ArrowUpRight className="size-4" aria-hidden="true" />
                </span>
              </div>
            </motion.a>
          </motion.article>
        ))}
      </div>

      <div className="mt-3 flex justify-center gap-2 md:hidden" aria-hidden="true">
        {events.map((event, index) => (
          <span
            key={event.href}
            className={cn(
              "h-1.5 rounded-full transition-[width,background-color] duration-300",
              index === activeIndex ? "w-8 bg-cyan" : "w-2 bg-white/25",
            )}
          />
        ))}
      </div>
    </div>
  );
}
