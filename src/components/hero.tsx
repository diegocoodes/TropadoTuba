import { ArrowDown, ArrowRight, MapPin, Users, Waves } from "lucide-react";
import { HeroVisual } from "@/components/hero-visual";
import { Button } from "@/components/ui/button";
import { NativeButton } from "@/components/ui/native-button";
import { MotionReveal } from "@/components/motion-reveal";
import { ShaderBackground } from "@/components/ui/adisyon-shader";
import { WHATSAPP_GROUP_URL } from "@/lib/utils";

export function Hero() {
  return (
    <section id="inicio" className="hero-editorial relative overflow-hidden border-b border-cyan/20 bg-ink pt-[76px]">
      <ShaderBackground className="pointer-events-none absolute inset-0 size-full opacity-70" />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(7,9,30,0.94)_0%,rgba(7,9,30,0.78)_48%,rgba(7,9,30,0.28)_100%)] md:bg-[linear-gradient(90deg,rgba(7,9,30,0.96)_0%,rgba(7,9,30,0.84)_42%,rgba(7,9,30,0.18)_76%,rgba(7,9,30,0.38)_100%)]"
        aria-hidden="true"
      />
      <div className="site-container relative flex min-h-[844px] flex-col justify-center pb-20 pt-12 md:pb-28 md:pt-14 lg:min-h-[870px]">
        <HeroVisual />

        <div className="relative z-10 w-full max-w-[690px]">
          <h1 className="hero-editorial-title font-title text-[clamp(2.85rem,11.8vw,5.8rem)] font-extrabold uppercase leading-[0.84] tracking-[-0.05em] text-white sm:text-[clamp(4.2rem,6.35vw,5.8rem)]">
            <span className="hero-title-line"><span>Corra com a</span></span>
            <span className="hero-title-line hero-title-line-two"><span className="text-cyan">Tropa.</span></span>
            <span className="hero-title-line hero-title-line-three"><span>Desperte seu <em>instinto.</em></span></span>
          </h1>

          <MotionReveal eager delay={0.22} className="w-full max-w-[540px]">
            <p className="mt-7 w-full text-base leading-7 text-ice/72 md:mt-8 md:text-lg md:leading-8">
              Treinos para começar, evoluir e cruzar novas linhas de chegada. Aqui, cada quilômetro é conquistado em equipe.
            </p>
          </MotionReveal>

          <MotionReveal eager delay={0.3} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <NativeButton
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noreferrer"
              wrapperClassName="w-full sm:w-fit"
              className="w-full sm:w-auto"
              ariaLabel="Entrar no grupo da Tropa do Tubarão no WhatsApp"
            >
              Quero fazer parte <ArrowRight className="size-4" />
            </NativeButton>
            <Button asChild size="lg" variant="outline" className="w-full bg-transparent sm:w-auto">
              <a href="#treinos">Ver próximos treinos <ArrowDown className="size-4" /></a>
            </Button>
          </MotionReveal>
        </div>

        <MotionReveal eager delay={0.38} className="relative z-10 mt-11 grid w-full max-w-[620px] grid-cols-3 border-y border-white/10 md:mt-12">
          <div className="py-4 pr-3">
            <MapPin className="mb-2 size-4 text-cyan" />
            <strong className="block font-title text-lg uppercase text-white sm:text-xl">Paulista</strong>
            <span className="text-[0.56rem] font-bold uppercase tracking-[0.15em] text-muted sm:text-[0.65rem]">Pernambuco</span>
          </div>
          <div className="border-x border-white/10 px-3 py-4 sm:px-5">
            <Users className="mb-2 size-4 text-magenta" />
            <strong className="block font-title text-lg uppercase text-white sm:text-xl">3 níveis</strong>
            <span className="text-[0.56rem] font-bold uppercase tracking-[0.15em] text-muted sm:text-[0.65rem]">No seu ritmo</span>
          </div>
          <div className="py-4 pl-3 sm:pl-5">
            <Waves className="mb-2 size-4 text-cyan" />
            <strong className="block font-title text-lg uppercase text-white sm:text-xl">1 tropa</strong>
            <span className="text-[0.56rem] font-bold uppercase tracking-[0.15em] text-muted sm:text-[0.65rem]">Todos juntos</span>
          </div>
        </MotionReveal>
      </div>

      <div className="hero-bottom-rail absolute inset-x-0 bottom-0 h-px bg-cyan/45" aria-hidden="true">
        <span className="absolute bottom-0 left-[54%] h-[3px] w-20 bg-magenta" />
      </div>
    </section>
  );
}
