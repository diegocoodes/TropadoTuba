import Image from "next/image";
import { ArrowDown, ArrowRight, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NativeButton } from "@/components/ui/native-button";
import { MotionReveal } from "@/components/motion-reveal";
import { WaterAtmosphere } from "@/components/water-atmosphere";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[720px] overflow-hidden border-b border-line bg-ink pt-[76px] md:min-h-[820px]">
      <div className="absolute inset-x-0 bottom-0 top-[76px] bg-[#050819] md:left-[36%] md:top-0">
        <Image
          src="/images/foto-1-corrida.png"
          alt="Corredor da Tropa do Tubarão durante uma prova de rua"
          fill
          loading="eager"
          fetchPriority="high"
          sizes="(max-width: 768px) 100vw, 64vw"
          className="object-contain object-bottom md:object-right md:[mask-image:linear-gradient(to_right,transparent_0%,black_26%)]"
        />
      </div>
      <div className="absolute inset-0 bg-ink/66 md:bg-[linear-gradient(90deg,rgba(7,9,30,.98)_0%,rgba(7,9,30,.9)_48%,rgba(7,9,30,.2)_86%,rgba(7,9,30,.08)_100%)]" />
      <WaterAtmosphere className="opacity-30" />
      <div className="absolute inset-x-0 bottom-0 flex h-[7px]" aria-hidden="true">
        <span className="w-[52%] bg-blue" />
        <span className="w-[9%] bg-magenta" />
        <span className="flex-1 bg-blue" />
      </div>

      <div className="site-container relative flex min-h-[684px] flex-col justify-center py-14 md:min-h-[744px]">
        <MotionReveal eager>
          <div className="mb-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-extrabold uppercase tracking-[0.14em] text-ice">
            <span className="flex items-center gap-2"><MapPin className="size-4 text-cyan" /> Paulista, PE</span>
            <span className="flex items-center gap-2"><Users className="size-4 text-cyan" /> Para todas as idades</span>
          </div>
        </MotionReveal>

        <MotionReveal eager delay={0.08}>
          <h1 className="max-w-[980px] font-title text-[clamp(2.6rem,12.8vw,7rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.045em] text-white sm:text-[clamp(3.8rem,7.2vw,7rem)]">
            Corra com a <span className="block text-cyan sm:inline">Tropa.</span><br className="hidden sm:block" />
            Supere seus <span className="outline-text block sm:inline">limites.</span>
          </h1>
        </MotionReveal>

        <MotionReveal eager delay={0.16}>
          <p className="mt-8 max-w-xl text-base leading-7 text-ice/80 md:text-lg md:leading-8">
            Uma comunidade de corrida em Paulista, PE para quem deseja começar, evoluir e conquistar novos objetivos.
          </p>
        </MotionReveal>

        <MotionReveal eager delay={0.22} className="mt-9 flex flex-col gap-3 sm:flex-row">
          <NativeButton href="#inscricao" glow wrapperClassName="w-full sm:w-fit" className="w-full sm:w-auto">
            Quero fazer parte <ArrowRight className="size-4" />
          </NativeButton>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto"><a href="#treinos">Ver próximos treinos <ArrowDown className="size-4" /></a></Button>
        </MotionReveal>

        <MotionReveal eager delay={0.3} className="mt-12 flex items-center gap-4 text-xs font-extrabold uppercase tracking-[0.2em] text-muted">
          <span className="h-px w-12 bg-magenta" /> Correr · Superar · Vencer
        </MotionReveal>
      </div>

    </section>
  );
}
