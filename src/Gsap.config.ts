import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type React from "react";

gsap.registerPlugin(ScrollTrigger);

export const renderGsapAnimation = (
  sectionInfoRef: React.RefObject<HTMLElement | null>,
  headphoneRef: React.RefObject<HTMLImageElement | null>,
  wrapperRef: React.RefObject<HTMLDivElement | null>,
  sectionModels: React.RefObject<HTMLElement | null>,
  onDockChange?: (docked: boolean) => void,
) => {
  const ctx = gsap.context(() => {
    const headphone = headphoneRef.current;
    const wrapper = wrapperRef.current;

    if (!headphone || !wrapper) return;

    // 1. Entrada do Hero
    const heroTl = gsap.timeline({
      defaults: { ease: "power4.out" },
    });

    heroTl
      .from(".hero-chrome", {
        y: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
      })
      .from(
        ".hero-word",
        {
          yPercent: 110,
          opacity: 0,
          duration: 1.05,
          stagger: 0.14,
        },
        "-=0.45",
      )
      .from(
        headphone,
        {
          y: 70,
          scale: 0.88,
          opacity: 0,
          duration: 1.2,
          ease: "expo.out",
        },
        "-=0.75",
      );

    // 2. Revelação dos textos da SectionInfo
    if (sectionInfoRef.current) {
      gsap.from(".sec-info-reveal", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionInfoRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    }

    const mm = gsap.matchMedia();

    // 3. Desktop (>= 768px)
    mm.add("(min-width: 768px)", () => {
      const headphoneTl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          endTrigger: sectionModels.current,
          end: "center center",
          scrub: 1,
          invalidateOnRefresh: true,
          snap: {
            snapTo: 1 / 4,
            duration: { min: 0.25, max: 0.55 },
            delay: 0.05,
            ease: "power2.out",
          },
          onLeave: () => {
            gsap.set(headphone, { opacity: 0 });
            onDockChange?.(true);
          },
          onEnterBack: () => {
            onDockChange?.(false);
            gsap.set(headphone, { opacity: 1 });
          },
        },
      });

      headphoneTl
        .to(headphone, { x: 0, xPercent: 48, rotation: -18 })
        .to(headphone, { x: 0, xPercent: -98, rotation: 20 })
        .to(headphone, { x: 0, xPercent: -70, rotation: 30 })
        .to(headphone, {
          x: 0,
          xPercent: -50,
          yPercent: -50,
          rotation: 0,
          scale: 0.68,
        });
    });

    // 4. Mobile (< 768px)
    mm.add("(max-width: 767px)", () => {
      const mobileTl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          endTrigger: sectionModels.current,
          end: "center center",
          scrub: 0.8,
          invalidateOnRefresh: true,
          onLeave: () => {
            gsap.set(headphone, { opacity: 0 });
            onDockChange?.(true);
          },
          onEnterBack: () => {
            onDockChange?.(false);
            gsap.set(headphone, { opacity: 1 });
          },
        },
      });

      mobileTl
        .to(headphone, {
          x: 0,
          xPercent: 18,
          yPercent: 10,
          rotation: -10,
          scale: 0.82,
        })
        .to(headphone, {
          x: 40, // ajuste aqui (ex.: -40 a 40) para ver o deslocamento em px
          xPercent: 0,
          yPercent: 0,
          rotation: 12,
          scale: 0.78,
        })
        .to(headphone, {
          x: 0,
          xPercent: 0,
          yPercent: 12,
          rotation: 8,
          scale: 0.72,
        })
        .to(headphone, {
          x: 0,
          xPercent: 0,
          yPercent: 25,
          rotation: 0,
          scale: 0.55,
        });
    });
  }, wrapperRef);

  return () => ctx.revert();
};
