import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { MascotMotion } from "@/components/mascot-motion";
import { MotionReveal } from "@/components/motion-reveal";
import { NativeButton } from "@/components/ui/native-button";
import { WavyBackground } from "@/components/ui/wavy-background";
import { whatsappUrl } from "@/lib/utils";

const benefits = [
  "Descubra o treino ideal para o seu ritmo",
  "Receba as orientações para o primeiro encontro",
  "Converse diretamente com a equipe da Tropa",
];

export function JoinCta() {
  const contactUrl = whatsappUrl(
    "Olá! Conheci a Tropa do Tubarão pelo site e gostaria de participar dos treinos.",
  );

  return (
    <section id="inscricao" className="section-padding relative overflow-hidden border-y border-cyan/25 bg-ink">
      <WavyBackground
        containerClassName="pointer-events-none absolute inset-0 opacity-55"
        colors={["#00cfff", "#0e54bd", "#d923a5"]}
        waveWidth={30}
        waveOpacity={0.22}
        blur={9}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,9,30,.97),rgba(7,9,30,.8)_55%,rgba(7,9,30,.35))]" aria-hidden="true" />

      <div className="site-container relative grid min-w-0 items-center gap-10 md:grid-cols-[1.05fr_.95fr] lg:gap-16">
        <MotionReveal className="relative z-10 min-w-0">
          <span className="section-kicker">Vem com a gente</span>
          <h2 className="display-title max-w-3xl">
            Seu próximo treino <span className="text-cyan">começa aqui.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted">
            Fale com a equipe pelo WhatsApp e receba todas as informações para correr com a Tropa.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:max-w-2xl">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 text-sm leading-6 text-ice/90 sm:last:col-span-2">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center bg-cyan text-ink">
                  <Check className="size-4" strokeWidth={3} />
                </span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <NativeButton
            href={contactUrl}
            target="_blank"
            rel="noreferrer"
            glow
            wrapperClassName="mt-9 w-full sm:w-fit"
            className="w-full sm:w-auto"
            ariaLabel="Conversar com a Tropa do Tubarão no WhatsApp"
          >
            <MessageCircle className="size-5" />
            <span className="sm:hidden">Falar no WhatsApp</span>
            <span className="hidden sm:inline">Falar com a Tropa no WhatsApp</span>
            <ArrowUpRight className="size-4" />
          </NativeButton>
        </MotionReveal>

        <div className="relative min-h-[310px] min-w-0 md:min-h-[430px]">
          <div className="absolute inset-x-4 bottom-3 h-10 rounded-[50%] bg-cyan/20 blur-2xl" aria-hidden="true" />
          <MascotMotion
            src="/images/tubaraosegurandomedalha.png"
            alt="Mascote da Tropa celebrando com uma medalha"
            className="absolute inset-0"
            imageClassName="drop-shadow-[0_24px_48px_rgba(0,207,255,0.24)]"
            sizes="(max-width: 768px) 82vw, 460px"
          />
        </div>
      </div>
    </section>
  );
}
