import Image from "next/image";
import { ArrowDown, ArrowRight, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/motion-reveal";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[760px] overflow-hidden border-b border-line pt-[76px] md:min-h-[820px]">
      <Image
        src="/images/hero.jpg"
        alt="Grupo diverso de corredores durante um treino ao ar livre"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[64%_center]"
      />
      <div className="absolute inset-0 bg-ink/58" />
      <div className="absolute inset-y-0 left-0 w-full bg-ink/72 md:w-[66%] md:[clip-path:polygon(0_0,100%_0,82%_100%,0_100%)]" />
      <div className="absolute bottom-0 left-0 h-[7px] w-[52%] bg-blue" />
      <div className="absolute bottom-0 left-[52%] h-[7px] w-[9%] bg-magenta" />

      <div className="site-container relative flex min-h-[684px] flex-col justify-center py-14 md:min-h-[744px]">
        <MotionReveal eager>
          <div className="mb-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-extrabold uppercase tracking-[0.14em] text-ice">
            <span className="flex items-center gap-2"><MapPin className="size-4 text-cyan" /> Paulista–PE</span>
            <span className="flex items-center gap-2"><Users className="size-4 text-cyan" /> Para todas as idades</span>
          </div>
        </MotionReveal>

        <MotionReveal eager delay={0.08}>
          <h1 className="max-w-[980px] font-title text-[clamp(3.8rem,7.2vw,7rem)] font-extrabold uppercase leading-[0.84] tracking-[-0.045em] text-white">
            Corra com a <span className="text-cyan">Tropa.</span><br />
            Supere seus <span className="outline-text">limites.</span>
          </h1>
        </MotionReveal>

        <MotionReveal eager delay={0.16}>
          <p className="mt-8 max-w-xl text-base leading-7 text-ice/80 md:text-lg md:leading-8">
            Uma comunidade de corrida em Paulista–PE para quem deseja começar, evoluir e conquistar novos objetivos.
          </p>
        </MotionReveal>

        <MotionReveal eager delay={0.22} className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg"><a href="#inscricao">Quero fazer parte <ArrowRight className="size-4" /></a></Button>
          <Button asChild size="lg" variant="outline"><a href="#treinos">Ver próximos treinos <ArrowDown className="size-4" /></a></Button>
        </MotionReveal>

        <MotionReveal eager delay={0.3} className="mt-12 flex items-center gap-4 text-xs font-extrabold uppercase tracking-[0.2em] text-muted">
          <span className="h-px w-12 bg-magenta" /> Correr • Superar • Vencer
        </MotionReveal>
      </div>

      <div className="absolute bottom-7 right-8 hidden rotate-90 items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-white/70 xl:flex">
        Role para explorar <ArrowRight className="size-4 text-cyan" />
      </div>
    </section>
  );
}
