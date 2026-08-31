import Image from "next/image";
import { Instagram } from "lucide-react";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { galleryImages } from "@/data/site-data";

export function Gallery() {
  return (
    <section id="galeria" className="section-padding bg-ice text-ink">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            kicker="Vida em movimento"
            title="Nossa"
            outline="galeria"
            description="Registros dos treinos, encontros e quilômetros que construímos juntos."
            className="mb-0"
            inverted
          />
          <a
            href="https://www.instagram.com/tropadotubaraorun"
            target="_blank"
            rel="noreferrer"
            className="flex min-h-12 shrink-0 items-center gap-2 border-b-2 border-blue py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-blue outline-none transition-colors hover:border-magenta hover:text-magenta focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-4"
          >
            <Instagram className="size-5" aria-hidden="true" /> @tropadotubaraorun
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[18rem_18rem]">
          {galleryImages.map((photo, index) => (
            <MotionReveal
              key={photo.src}
              className={photo.layoutClass}
              delay={index * 0.06}
            >
              <figure className="group relative h-full min-h-80 overflow-hidden bg-navy sm:min-h-96 lg:min-h-0">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={photo.sizes}
                  className={`object-cover transition-transform duration-500 group-hover:scale-[1.025] ${photo.positionClass}`}
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/90 to-transparent"
                  aria-hidden="true"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 font-title text-lg font-extrabold uppercase tracking-[0.04em] text-white sm:p-6">
                  {photo.label}
                </figcaption>
              </figure>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
