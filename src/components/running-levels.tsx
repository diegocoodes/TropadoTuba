import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { MotionReveal } from "@/components/motion-reveal";
import { runningLevels } from "@/data/site-data";

export function RunningLevels() {
  return (
    <section className="section-padding bg-ice text-ink">
      <div className="site-container">
        <SectionHeading
          kicker="Do primeiro passo ao novo recorde"
          title="Seu ritmo."
          outline="Sua evolução."
          description="Não importa de onde você parte. Cada nível recebe estímulos compatíveis com o momento e os objetivos do corredor."
          inverted
        />
        <div className="grid border border-[#c8d0dc] lg:grid-cols-3">
          {runningLevels.map((level, index) => (
            <MotionReveal
              key={level.name}
              delay={index * 0.08}
              className="group relative min-h-[340px] border-[#c8d0dc] p-7 last:border-0 max-lg:border-b lg:border-r lg:p-9"
            >
              <div className="flex items-start justify-between">
                <span className="font-title text-7xl font-extrabold leading-none text-blue/15">{level.number}</span>
                <ArrowUpRight className="size-5 text-blue transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <div className="mt-12">
                <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-blue">{level.distance}</span>
                <h3 className="mt-2 font-title text-4xl font-extrabold uppercase text-ink">{level.name}</h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-[#526078]">{level.description}</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-blue transition-transform duration-300 group-hover:scale-x-100" />
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
