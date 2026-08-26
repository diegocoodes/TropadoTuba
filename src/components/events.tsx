import { EventCarousel } from "@/components/event-carousel";
import { SectionHeading } from "@/components/section-heading";
import { WaterAtmosphere } from "@/components/water-atmosphere";

export function Events() {
  return (
    <section id="eventos" className="section-padding relative overflow-hidden bg-ink">
      <WaterAtmosphere className="opacity-20" />
      <div className="site-container relative">
        <SectionHeading
          kicker="Calendário PE Running"
          title="Próximas"
          outline="corridas"
        />

        <EventCarousel />
      </div>
    </section>
  );
}
