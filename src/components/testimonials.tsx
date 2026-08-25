import Image from "next/image";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/site-data";
import { SectionHeading } from "@/components/section-heading";
import { MotionReveal } from "@/components/motion-reveal";

export function Testimonials() {
  return (
    <section className="section-padding bg-navy">
      <div className="site-container">
        <SectionHeading
          kicker="Quem corre conta"
          title="Histórias que"
          outline="movem a Tropa"
          description="A melhor medida de evolução não está apenas no relógio. Está na confiança de quem decidiu começar."
        />
        <div className="grid border-t border-white/25 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <MotionReveal
              key={testimonial.name}
              delay={index * 0.08}
              className="flex min-h-[400px] flex-col border-b border-white/25 py-8 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <Quote className="size-9 text-cyan" fill="currentColor" />
              <blockquote className="mt-8 text-base leading-8 text-white/90">“{testimonial.quote}”</blockquote>
              <div className="mt-auto flex items-center gap-4 border-t border-white/15 pt-7">
                <div className="relative size-14 shrink-0 overflow-hidden rounded-full border-2 border-cyan">
                  <Image src={testimonial.image} alt={`Retrato de ${testimonial.name}`} fill sizes="56px" className="object-cover" />
                </div>
                <div>
                  <cite className="not-italic font-title text-xl font-bold uppercase text-white">{testimonial.name}</cite>
                  <p className="text-xs text-muted">{testimonial.time} • Distância favorita: <span className="font-bold text-cyan">{testimonial.favorite}</span></p>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
        <p className="mt-5 text-xs text-muted">Depoimentos demonstrativos — substituir por relatos reais dos participantes.</p>
      </div>
    </section>
  );
}
