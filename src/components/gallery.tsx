import { Camera, Flag, Instagram } from "lucide-react";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";

export function Gallery() {
  return (
    <section id="galeria" className="section-padding bg-ice text-ink">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            kicker="Vida em movimento"
            title="Nossa"
            outline="galeria"
            description="Os primeiros registros da Tropa estão a caminho."
            className="mb-0"
            inverted
          />
          <a
            href="https://www.instagram.com/tropadotubaraorun"
            target="_blank"
            rel="noreferrer"
            className="flex min-h-12 shrink-0 items-center gap-2 border-b-2 border-blue py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-blue outline-none transition-colors hover:border-magenta hover:text-magenta focus-visible:ring-2 focus-visible:ring-blue"
          >
            <Instagram className="size-5" aria-hidden="true" /> @tropadotubaraorun
          </a>
        </div>

        <MotionReveal className="relative mt-10 overflow-hidden border border-[#c8d0dc] bg-white px-6 py-14 text-center sm:mt-14 sm:px-10 sm:py-20">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,207,255,0.12),transparent_48%)]"
            aria-hidden="true"
          />
          <div className="relative mx-auto flex size-20 items-center justify-center rounded-full border border-blue/25 bg-ice text-blue shadow-[0_16px_45px_rgba(14,84,189,0.12)]">
            <Camera className="size-9" strokeWidth={1.7} aria-hidden="true" />
            <Flag className="absolute -right-1 -top-1 size-6 text-magenta" aria-hidden="true" />
          </div>
          <p className="relative mt-7 text-xs font-extrabold uppercase tracking-[0.17em] text-blue">
            Em breve
          </p>
          <h3 className="relative mx-auto mt-3 max-w-3xl font-title text-[clamp(2rem,5vw,4rem)] font-extrabold uppercase leading-none tracking-[-0.035em] text-ink">
            As fotos serão exibidas após a primeira corrida da comunidade.
          </h3>
          <p className="relative mx-auto mt-5 max-w-xl text-sm leading-7 text-[#526078] sm:text-base">
            A primeira largada também será o começo da nossa história em imagens.
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
