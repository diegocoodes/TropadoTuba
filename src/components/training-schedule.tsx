import { ArrowUpRight, CalendarDays, Clock3, MapPin, MessageCircle } from "lucide-react";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { NativeButton } from "@/components/ui/native-button";
import { nextTraining } from "@/data/site-data";
import { whatsappUrl } from "@/lib/utils";

export function TrainingSchedule() {
  const confirmationUrl = whatsappUrl(
    `Olá! Gostaria de confirmar minha presença no treino do dia ${nextTraining.date}, na ${nextTraining.address}, ${nextTraining.neighborhood}.`,
  );

  return (
    <section id="treinos" className="section-padding bg-navy">
      <div className="site-container">
        <SectionHeading
          kicker="Agenda da Tropa"
          title="Próximo"
          outline="treino"
          description="Um encontro para correr junto, evoluir no seu ritmo e sentir a energia da Tropa."
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

            <NativeButton
              href={confirmationUrl}
              target="_blank"
              rel="noreferrer"
              glow
              wrapperClassName="w-full lg:w-fit"
              className="w-full px-5 lg:w-auto"
              ariaLabel={`Confirmar presença no treino de ${nextTraining.date} pelo WhatsApp`}
            >
              <MessageCircle className="size-5" />
              <span className="sm:hidden">Confirmar</span>
              <span className="hidden sm:inline">Confirmar no WhatsApp</span>
              <ArrowUpRight className="size-4" />
            </NativeButton>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
