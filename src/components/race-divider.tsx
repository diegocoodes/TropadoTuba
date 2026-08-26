import { ArrowRight, Zap } from "lucide-react";
import { MascotMotion } from "@/components/mascot-motion";
import { MotionReveal } from "@/components/motion-reveal";
import { Button } from "@/components/ui/button";
import { WaterAtmosphere } from "@/components/water-atmosphere";

export function RaceDivider() {
  return (
    <section id="instinto" className="relative -mt-px overflow-hidden border-b border-cyan/30 bg-[#080f2c]" aria-labelledby="instinto-titulo">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(0,207,255,.18),transparent_64%)]" aria-hidden="true" />
      <WaterAtmosphere className="opacity-50" />
      <div className="site-container relative grid min-h-[330px] min-w-0 items-start md:grid-cols-[1.05fr_.95fr]">
        <MotionReveal className="relative z-10 min-w-0 max-w-2xl py-7 md:py-8">
          <span className="section-kicker">Ative seu instinto</span>
          <div className="mt-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.16em] text-magenta">
            <Zap className="size-4" fill="currentColor" /> Energia de prova em cada treino
          </div>
          <h2 id="instinto-titulo" className="mt-4 font-title text-[clamp(3rem,5.6vw,5.25rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.04em] text-white">
            A Tropa<br /><span className="text-cyan">não para.</span>
          </h2>
          <Button asChild size="lg" className="mt-8 w-full sm:w-auto">
            <a href="#treinos">Ver próximos treinos <ArrowRight className="size-4" /></a>
          </Button>
        </MotionReveal>

        <div className="pointer-events-none relative h-[230px] w-full opacity-80 md:static md:h-auto md:w-auto md:opacity-100">
          <MascotMotion
            src="/images/tubaraocorrendodelado.png"
            alt="Mascote tubarão da Tropa correndo"
            className="mx-auto h-[230px] w-full max-w-[360px] md:h-[350px] md:max-w-[450px]"
            imageClassName="drop-shadow-[0_20px_45px_rgba(0,207,255,0.28)]"
          />
        </div>
      </div>
    </section>
  );
}
