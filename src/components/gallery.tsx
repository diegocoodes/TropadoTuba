import Image from "next/image";
import { Instagram } from "lucide-react";
import { galleryImages } from "@/data/site-data";
import { SectionHeading } from "@/components/section-heading";
import { MotionReveal } from "@/components/motion-reveal";
import { cn } from "@/lib/utils";

const gridClasses = [
  "col-span-1 row-span-2 sm:col-span-2 md:col-span-5 md:row-span-2",
  "col-span-1 md:col-span-3",
  "col-span-1 md:col-span-4",
  "col-span-1 sm:col-span-2 md:col-span-4",
  "col-span-1 sm:col-span-2 md:col-span-3",
  "col-span-1 md:col-span-4",
  "col-span-1 md:col-span-5",
];

export function Gallery() {
  return (
    <section id="galeria" className="section-padding bg-ice text-ink">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            kicker="Vida em movimento"
            title="Nossa"
            outline="galeria"
            description="Treinos, provas, medalhas e os encontros que transformam um grupo de corredores em comunidade."
            className="mb-0"
            inverted
          />
          <a
            href="https://www.instagram.com/tropadotubaraorun"
            target="_blank"
            rel="noreferrer"
            className="flex min-h-12 shrink-0 items-center gap-2 border-b-2 border-blue py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-blue outline-none transition-colors hover:border-magenta hover:text-magenta focus-visible:ring-2 focus-visible:ring-blue"
          >
            <Instagram className="size-5" /> @tropadotubaraorun
          </a>
        </div>

        <div className="mt-10 grid auto-rows-[260px] grid-cols-1 gap-3 sm:mt-14 sm:auto-rows-[210px] sm:grid-cols-2 md:auto-rows-[250px] md:grid-cols-12">
          {galleryImages.map((image, index) => (
            <MotionReveal key={image.src} delay={index * 0.05} className={`group relative overflow-hidden bg-ink ${gridClasses[index]}`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className={cn(image.className)}
              />
              <div className="absolute inset-0 bg-ink/15 transition-colors group-hover:bg-ink/35" />
              <span className="absolute bottom-0 left-0 bg-ink px-4 py-2.5 text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-white">
                {image.label}
              </span>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
