import { RunningLevelJourney } from "@/components/running-level-journey";
import { SectionHeading } from "@/components/section-heading";

export function RunningLevels() {
  return (
    <section id="niveis" className="section-padding bg-ice text-ink">
      <div className="site-container">
        <SectionHeading
          kicker="Do primeiro passo ao novo recorde"
          title="Seu ritmo."
          outline="Sua evolução."
          description="Não importa de onde você parte. Cada nível recebe estímulos compatíveis com o momento e os objetivos do corredor."
          inverted
        />
        <RunningLevelJourney />
      </div>
    </section>
  );
}
