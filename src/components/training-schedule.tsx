import { CalendarDays, CalendarX2, Clock3, MapPin } from "lucide-react";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { nextTraining } from "@/data/site-data";

export function TrainingSchedule() {
  return (
    <section id="treinos" className="section-padding bg-navy">
      <div className="site-container">
        <SectionHeading
          kicker="Agenda da Tropa"
          title="Último"
          outline="treino"
          description="Este encontro já foi realizado. Fique de olho nos nossos canais para acompanhar a próxima data."
          className="mb-10 md:mb-12"
        />

        <MotionReveal className="relative overflow-hidden bg-[#0a1735] p-6 sm:p-8 lg:p-10">
          <div className="absolute inset-y-0 left-0 w-1 bg-cyan" aria-hidden="true" />
          <div className="absolute -right-20 -top-24 size-64 rounded-full bg-cyan/10 blur-3xl" aria-hidden="true" />

          <div className="relative grid min-w-0 gap-8 lg:grid-cols-[1.15fr_.85fr_auto] lg:items-center lg:gap-10">
            <div className="min-w-0">
              <p className="flex items-center gap-3 font-title text-3xl font-extrabold uppercase text-white sm:text-4xl">
                <CalendarDays className="size-7 shrink-0 text-cyan sm:size-8" aria-hidden="true" />
                {nextTraining.date}
              </p>
              <div className="mt-6 flex items-start gap-3 text-ice/85">
                <MapPin className="mt-0.5 size-5 shrink-0 text-cyan" aria-hidden="true" />
                <address className="not-italic">
                  <span className="block text-base font-bold text-white sm:text-lg">{nextTraining.address}</span>
                  <span className="mt-1 block text-sm text-muted sm:text-base">{nextTraining.neighborhood}</span>
                </address>
              </div>
            </div>

            <dl className="grid gap-3 min-[360px]:grid-cols-2 sm:max-w-md">
              <div className="bg-ink/45 p-4">
                <dt className="flex items-center gap-2 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-cyan">
                  <Clock3 className="size-4" aria-hidden="true" /> Concentração
                </dt>
                <dd className="mt-2 font-title text-3xl font-extrabold text-white">{nextTraining.gatheringTime}</dd>
              </div>
              <div className="bg-ink/45 p-4">
                <dt className="flex items-center gap-2 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-magenta">
                  <Clock3 className="size-4" aria-hidden="true" /> Saída
                </dt>
                <dd className="mt-2 font-title text-3xl font-extrabold text-white">{nextTraining.departureTime}</dd>
              </div>
            </dl>

            <div
              className="flex min-h-12 w-full items-center justify-center gap-2 border border-magenta/50 bg-magenta/10 px-5 text-sm font-extrabold uppercase tracking-[0.1em] text-white lg:w-auto"
              role="status"
              aria-label={`Status do treino de ${nextTraining.date}: ${nextTraining.status}`}
            >
              <CalendarX2 className="size-5 text-magenta" aria-hidden="true" />
              {nextTraining.status}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
