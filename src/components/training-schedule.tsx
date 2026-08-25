"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Clock3, MapPin, Route } from "lucide-react";
import { trainings, type TrainingLevel } from "@/data/site-data";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { MotionReveal } from "@/components/motion-reveal";
import { cn } from "@/lib/utils";

const filters: Array<"Todos" | TrainingLevel> = ["Todos", "Iniciante", "Intermediário", "Avançado"];

export function TrainingSchedule() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todos");
  const visibleTrainings = useMemo(
    () => filter === "Todos" ? trainings : trainings.filter((training) => training.level === filter),
    [filter],
  );

  return (
    <section id="treinos" className="section-padding bg-navy">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            kicker="Agenda da Tropa"
            title="Próximos"
            outline="treinos"
            description="Escolha o treino que combina com o seu momento. A Tropa cuida do ritmo; você traz a vontade de evoluir."
            className="mb-0"
          />
          <div
            className="flex max-w-full gap-2 overflow-x-auto pb-2 lg:justify-end"
            role="group"
            aria-label="Filtrar treinos por nível"
          >
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                aria-pressed={filter === item}
                className={cn(
                  "min-h-11 shrink-0 border px-4 text-xs font-extrabold uppercase tracking-[0.1em] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-cyan",
                  filter === item
                    ? "border-cyan bg-cyan text-ink"
                    : "border-white/25 bg-transparent text-white hover:border-white",
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-white/25" aria-live="polite">
          {visibleTrainings.map((training, index) => (
            <MotionReveal
              key={training.id}
              delay={index * 0.04}
              className="group grid gap-6 border-b border-white/25 py-7 transition-colors hover:bg-white/[0.035] md:grid-cols-[120px_1fr_auto] md:items-center md:px-5 lg:grid-cols-[140px_1fr_180px]"
            >
              <div className="flex items-center gap-4 md:block">
                <span className="font-title text-xl font-bold text-cyan md:block">{training.weekday}</span>
                <span className="font-title text-6xl font-extrabold leading-none text-white md:text-7xl">{training.day}</span>
                <span className="font-title text-xl font-bold text-muted">{training.month}</span>
              </div>

              <div>
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="bg-magenta px-2.5 py-1 text-[0.65rem] font-extrabold uppercase tracking-[0.12em] text-white">
                    {training.level}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-muted">{training.focus}</span>
                </div>
                <h3 className="font-title text-3xl font-bold uppercase text-white md:text-4xl">{training.location}</h3>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
                  <span className="flex items-center gap-2"><Clock3 className="size-4 text-cyan" /> {training.time}</span>
                  <span className="flex items-center gap-2"><Route className="size-4 text-cyan" /> {training.distance}</span>
                  <span className="flex items-center gap-2"><MapPin className="size-4 text-cyan" /> {training.meetingPoint}</span>
                </div>
              </div>

              <Button asChild variant="outline" className="w-full md:w-auto">
                <a href="#inscricao" aria-label={`Confirmar presença no treino em ${training.location}`}>
                  Confirmar presença <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </MotionReveal>
          ))}
        </div>
        <p className="mt-5 text-xs leading-5 text-muted">
          Agenda demonstrativa. Dias, horários e pontos de encontro devem ser confirmados com a equipe.
        </p>
      </div>
    </section>
  );
}
