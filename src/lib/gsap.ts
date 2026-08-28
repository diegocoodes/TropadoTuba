let gsapPromise: Promise<{
  gsap: typeof import("gsap").gsap;
  ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger;
}> | null = null;

export function loadGsap() {
  gsapPromise ??= Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger"),
  ]).then(([gsapModule, scrollTriggerModule]) => {
    const gsap = gsapModule.gsap;
    const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

    gsap.registerPlugin(ScrollTrigger);
    return { gsap, ScrollTrigger };
  });

  return gsapPromise;
}
