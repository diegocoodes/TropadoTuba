import Image from "next/image";
import { Gauge, HeartHandshake, Target, Users } from "lucide-react";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";

const features = [
  { icon: Gauge, title: "Treinos para diferentes níveis", text: "Você evolui a partir do seu momento atual." },
  { icon: HeartHandshake, title: "Comunidade acolhedora", text: "Ninguém fica para trás. Cada conquista é coletiva." },
  { icon: Users, title: "Evolução em grupo", text: "Constância, companhia e incentivo em cada quilômetro." },
  { icon: Target, title: "Novos desafios", text: "Preparação para transformar objetivos em linha de chegada." },
];

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-ink pt-[clamp(5rem,9vw,8rem)]">
      <div className="site-container">
        <div className="grid items-end gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <div>
            <SectionHeading
              kicker="Sobre a Tropa"
              title="Mais que uma"
              outline="equipe de corrida"
              description="A Tropa do Tubarão nasceu para reunir pessoas que desejam transformar a corrida em parte da sua rotina. Aqui, cada quilômetro representa evolução, disciplina e novas conquistas."
              className="mb-10 md:mb-12"
            />
            <div className="grid gap-0 border-y border-line sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <MotionReveal
                    key={feature.title}
                    delay={index * 0.06}
                    className="border-line py-6 pr-5 sm:odd:border-r sm:even:pl-6 sm:[&:nth-child(-n+2)]:border-b"
                  >
                    <Icon className="mb-4 size-6 text-cyan" strokeWidth={1.8} />
                    <h3 className="font-title text-xl font-bold uppercase leading-tight text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{feature.text}</p>
                  </MotionReveal>
                );
              })}
            </div>
          </div>

          <MotionReveal className="relative min-h-[490px] md:min-h-[620px]">
            <div className="absolute inset-x-0 bottom-8 top-8 overflow-hidden md:right-12">
              <Image
                src="/images/foto-perfil.png"
                alt="Atleta da Tropa do Tubarão após uma prova de corrida"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain object-center"
              />
              <div className="absolute inset-0 bg-ink/20" />
            </div>
            <div className="absolute bottom-0 right-0 border-l-4 border-magenta bg-navy px-6 py-5 text-right">
              <span className="block font-title text-5xl font-extrabold leading-none text-white">JUNTOS</span>
              <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-cyan">o pace fica mais leve</span>
            </div>
            <div className="absolute left-0 top-0 bg-cyan px-4 py-3 text-xs font-extrabold uppercase tracking-[0.15em] text-ink">
              Desde o primeiro km
            </div>
          </MotionReveal>
        </div>
      </div>

      <div className="mt-24 overflow-hidden border-y border-line bg-navy/40 py-4" aria-hidden="true">
        <div className="ticker-track flex w-max whitespace-nowrap font-title text-2xl font-bold uppercase tracking-[0.12em] text-white/70 md:text-3xl">
          {[0, 1].map((group) => (
            <div key={group} className="flex items-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index} className="flex items-center">
                  Correr <span className="mx-6 text-cyan">•</span> Superar <span className="mx-6 text-magenta">•</span> Vencer <span className="mx-6 text-cyan">•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
