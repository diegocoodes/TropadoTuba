import Image from "next/image";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { events } from "@/data/site-data";
import { SectionHeading } from "@/components/section-heading";
import { MotionReveal } from "@/components/motion-reveal";
import { Button } from "@/components/ui/button";

export function Events() {
  const [featured, ...others] = events;

  return (
    <section id="eventos" className="section-padding bg-ink">
      <div className="site-container">
        <SectionHeading
          kicker="Calendário de provas"
          title="Próximos"
          outline="eventos"
          description="Metas ficam melhores quando são compartilhadas. Confira os próximos desafios no radar da Tropa."
        />

        <MotionReveal className="grid overflow-hidden border border-line lg:grid-cols-[1.35fr_.65fr]">
          <div className="relative min-h-[390px] overflow-hidden lg:min-h-[560px]">
            <Image
              src={featured.image}
              alt={featured.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-ink/48" />
            <div className="absolute left-0 top-0 bg-magenta px-4 py-2.5 text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-white">
              Próximo desafio
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-ink/88 p-6 md:p-9">
              <span className="mb-3 block text-xs font-extrabold uppercase tracking-[0.16em] text-cyan">{featured.status}</span>
              <h3 className="font-title text-4xl font-extrabold uppercase leading-none text-white md:text-6xl">{featured.name}</h3>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ice/80">
                <span className="flex items-center gap-2"><CalendarDays className="size-4 text-cyan" /> {featured.date}</span>
                <span className="flex items-center gap-2"><MapPin className="size-4 text-cyan" /> {featured.location}</span>
                <span className="font-bold text-white">{featured.distances.join("  •  ")}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between bg-navy p-7 md:p-10">
            <div>
              <span className="font-title text-8xl font-extrabold leading-none text-cyan/15 md:text-9xl">01</span>
              <p className="mt-7 max-w-sm text-base leading-7 text-muted">
                Um objetivo no calendário muda o treino de hoje. Escolha a distância e venha construir essa chegada com a gente.
              </p>
            </div>
            <Button asChild size="lg" className="mt-10 w-full">
              <a href="#inscricao">Ver detalhes <ArrowUpRight className="size-4" /></a>
            </Button>
          </div>
        </MotionReveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {others.map((event, index) => (
            <MotionReveal key={event.id} delay={index * 0.08} className="group grid min-h-[270px] overflow-hidden border border-line sm:grid-cols-[.8fr_1.2fr]">
              <div className="relative min-h-[220px] overflow-hidden sm:min-h-0">
                <Image
                  src={event.image}
                  alt={event.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                />
              </div>
              <div className="flex flex-col bg-[#0a1029] p-6">
                <span className="text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-magenta">{event.status}</span>
                <h3 className="mt-3 font-title text-3xl font-extrabold uppercase leading-none text-white">{event.name}</h3>
                <p className="mt-4 text-sm text-muted">{event.date} • {event.location}</p>
                <p className="mt-1 text-sm font-bold text-cyan">{event.distances.join(" • ")}</p>
                <a href="#inscricao" className="mt-auto flex min-h-11 items-end gap-2 pt-5 text-xs font-extrabold uppercase tracking-[0.12em] text-white outline-none transition-colors hover:text-cyan focus-visible:text-cyan">
                  Ver detalhes <ArrowUpRight className="size-4" />
                </a>
              </div>
            </MotionReveal>
          ))}
        </div>
        <p className="mt-5 text-xs text-muted">Eventos e datas provisórios para composição inicial do site.</p>
      </div>
    </section>
  );
}
