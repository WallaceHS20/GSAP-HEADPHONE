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

    let dockedState = false;

    const setDocked = (nextDocked: boolean) => {
      if (dockedState === nextDocked) return;
      dockedState = nextDocked;

      if (nextDocked) {
        gsap.set(headphone, { opacity: 0, clearProps: "transform" });
        onDockChange?.(true);
      } else {
        onDockChange?.(false);
        gsap.set(headphone, { opacity: 1 });
      }
    };

    // ==========================================
    // 1. ENTRADA DO HERO
    // ==========================================
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

    // ==========================================
    // 2. REVELAÇÃO DA SECTION INFO
    // ==========================================
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

    // ==========================================
    // 3. DESKTOP (>= 768px): TRAJETÓRIA + SNAP
    // ==========================================
    mm.add("(min-width: 768px)", () => {
      const snapPoints = [0, 0.25, 0.5, 0.75, 1];
      const maxSnapIndex = snapPoints.length - 1;
      let lastSnapIndex = 0;
      let lastDirection = 1;

      const headphoneTl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          endTrigger: sectionModels.current,
          end: "top top",
          scrub: 0.6,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (self.direction !== 0) {
              lastDirection = self.direction;
            }
            if (self.direction > 0 && self.progress >= 0.995) {
              setDocked(true);
            } else if (self.direction < 0 && self.progress < 0.995) {
              setDocked(false);
            }
          },
          onRefresh: (self) => {
            if (window.scrollY <= 5) {
              lastSnapIndex = 0;
              self.scroll(0);
              return;
            }
            lastSnapIndex = Math.round(self.progress * maxSnapIndex);
          },
          snap: {
            snapTo: (naturalProgress) => {
              if (
                window.scrollY <= 5 &&
                lastDirection >= 0 &&
                naturalProgress < 0.12
              ) {
                lastSnapIndex = 0;
                return 0;
              }

              const requestedIndex = Math.round(naturalProgress * maxSnapIndex);
              const directionalIndex =
                requestedIndex === lastSnapIndex
                  ? lastSnapIndex + lastDirection
                  : requestedIndex;
              const minIndex = Math.max(0, lastSnapIndex - 1);
              const maxIndex = Math.min(maxSnapIndex, lastSnapIndex + 1);
              const nextIndex = gsap.utils.clamp(
                minIndex,
                maxIndex,
                directionalIndex,
              );
              lastSnapIndex = nextIndex;
              return snapPoints[nextIndex];
            },
            directional: false,
            inertia: false,
            duration: { min: 0.25, max: 0.55 },
            delay: 0.05,
            ease: "power2.out",
          },
          onSnapComplete: (self) => {
            lastSnapIndex = Math.round(self.progress * maxSnapIndex);
            if (lastSnapIndex === maxSnapIndex) {
              setDocked(true);
            }
          },
          onLeave: () => setDocked(true),
          onEnterBack: () => setDocked(false),
        },
      });

      // HERO -> SECTION INFO
      headphoneTl.to(headphone, {
        x: 0,
        xPercent: 48,
        rotation: -18,
      });

      // SECTION INFO -> HELIX
      headphoneTl.to(headphone, {
        x: 0,
        xPercent: -98,
        rotation: 20,
      });

      // SECTION HELIX -> VIDEO
      headphoneTl.to(headphone, {
        x: 0,
        xPercent: -70,
        rotation: 30,
      });

      // SECTION VIDEO -> MODELS
      headphoneTl.to(headphone, {
        x: 0,
        xPercent: -50,
        yPercent: -50,
        rotation: 0,
        scale: 0.68,
      });
    });

    // ==========================================
    // 4. MOBILE (< 768px): TRAJETÓRIA CONTIDA
    // ==========================================
    mm.add("(max-width: 767px)", () => {
      const mobileTl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          endTrigger: sectionModels.current,
          end: "top top",
          scrub: 0.5,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (self.direction > 0 && self.progress >= 0.995) {
              setDocked(true);
            } else if (self.direction < 0 && self.progress < 0.995) {
              setDocked(false);
            }
          },
          onLeave: () => setDocked(true),
          onEnterBack: () => setDocked(false),
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
          x: 40,
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