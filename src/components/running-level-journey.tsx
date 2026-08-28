"use client";

import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { useEffect, useRef } from "react";
import { runningLevels } from "@/data/site-data";
import { loadGsap } from "@/lib/gsap";

export function RunningLevelJourney() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    void loadGsap().then(({ gsap }) => {
      const root = rootRef.current;
      if (!root || cancelled) return;

      const context = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>("[data-level-card]");
        const runner = root.querySelector<HTMLElement>("[data-journey-runner]");
        const track = root.querySelector<HTMLElement>("[data-journey-track]");
        const progress = root.querySelector<HTMLElement>("[data-journey-progress]");
        const media = gsap.matchMedia();

        media.add(
          {
            desktop: "(min-width: 1024px)",
            mobile: "(max-width: 1023px)",
            reduceMotion: "(prefers-reduced-motion: reduce)",
          },
          ({ conditions }) => {
            const { desktop, mobile, reduceMotion } = conditions as {
              desktop: boolean;
              mobile: boolean;
              reduceMotion: boolean;
            };

            if (reduceMotion) return;

            if (desktop && runner && track && progress) {
              gsap.set(cards, { y: 26, scale: 0.985, transformOrigin: "center top" });
              gsap.set(progress, { scaleX: 0, transformOrigin: "left center" });

              const timeline = gsap.timeline({
                defaults: { ease: "none" },
                scrollTrigger: {
                  trigger: root,
                  start: "top 72%",
                  end: "bottom 42%",
                  scrub: 0.55,
                  invalidateOnRefresh: true,
                },
              });

              timeline
                .to(progress, { scaleX: 1, duration: 1 }, 0)
                .to(
                  runner,
                  {
                    x: () => Math.max(0, track.clientWidth - runner.offsetWidth),
                    duration: 1,
                  },
                  0,
                )
                .to(
                  cards,
                  {
                    y: 0,
                    scale: 1,
                    duration: 0.24,
                    stagger: 0.3,
                    ease: "power2.out",
                  },
                  0.04,
                );
            }

            if (mobile) {
              gsap.from(cards, {
                opacity: 0,
                y: 24,
                duration: 0.55,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: root,
                  start: "top 78%",
                  once: true,
                },
              });
            }
          },
        );

        return () => media.revert();
      }, root);

      cleanup = () => context.revert();
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <div
        data-journey-track
        className="relative mx-[8%] mb-10 hidden h-24 lg:block"
        aria-hidden="true"
      >
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-[#aab7ca]" />
        <div
          data-journey-progress
          className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 bg-gradient-to-r from-blue via-cyan to-magenta"
        />
        <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between">
          {runningLevels.map((level, index) => (
            <span
              key={level.name}
              className="flex size-9 items-center justify-center rounded-full border-4 border-ice bg-ink font-title text-sm font-extrabold text-white shadow-[0_0_0_1px_#0e54bd]"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          ))}
        </div>
        <div
          data-journey-runner
          className="absolute left-0 top-0 z-10 size-24 -translate-y-7"
        >
          <Image
            src="/images/tubaraocorrendodelado.png"
            alt=""
            fill
            sizes="96px"
            className="object-contain drop-shadow-[0_10px_18px_rgba(14,84,189,0.28)]"
          />
        </div>
      </div>

      <ol className="grid border border-[#c8d0dc] lg:grid-cols-3">
        {runningLevels.map((level, index) => (
          <li
            key={level.name}
            data-level-card
            className="group relative min-h-[420px] border-[#c8d0dc] p-7 last:border-0 max-lg:border-b lg:border-r lg:p-9"
          >
            <div className="flex items-center justify-between lg:hidden">
              <span className="font-title text-sm font-extrabold text-blue">
                ETAPA {String(index + 1).padStart(2, "0")}
              </span>
              <Check className="size-5 text-blue" aria-hidden="true" />
            </div>
            <div className="relative mt-3 h-44 lg:mt-0">
              <Image
                src={level.mascot}
                alt={`Mascote da Tropa representando o nível ${level.name}`}
                fill
                sizes="(max-width: 1024px) 70vw, 320px"
                className="object-contain transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.03]"
              />
              <ArrowUpRight
                className="absolute right-0 top-0 size-5 text-blue transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden="true"
              />
            </div>
            <div className="relative z-10 mt-5">
              <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-blue">
                {level.distance}
              </span>
              <h3 className="mt-2 font-title text-4xl font-extrabold uppercase text-ink">
                {level.name}
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-7 text-[#526078]">
                {level.description}
              </p>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-blue via-cyan to-magenta transition-transform duration-500 group-hover:scale-x-100" />
          </li>
        ))}
      </ol>
    </div>
  );
}
