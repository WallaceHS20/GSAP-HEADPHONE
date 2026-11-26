import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import logoImg from './assets/logo.png';
import headphoneImg from './assets/9662743.png';

export function HeroSection() {
  const containerRef = useRef<HTMLElement | null>(null);
  const headphoneRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // 1. Header e footer entram com suavidade
      tl.from('.hero-chrome', {
        y: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
      })

      // 2. Tipografia gigante sobe de dentro do container (efeito de máscara)
      .from(
        '.hero-word',
        {
          yPercent: 110,
          opacity: 0,
          duration: 1.05,
          stagger: 0.14,
        },
        '-=0.45'
      )

      // 3. Fone entra com "peso" e presença sobre o texto
      .from(
        headphoneRef.current,
        {
          y: 70,
          scale: 0.88,
          opacity: 0,
          duration: 1.2,
          ease: 'expo.out',
        },
        '-=0.75'
      )

      // 4. Levitação contínua após a entrada cinematográfica
      .to(headphoneRef.current, {
        y: -12,
        duration: 2.6,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-bg font-sans text-dark flex flex-col justify-between select-none"
    >
      {/* Brilho sutil roxo no fundo */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[120px]"
        aria-hidden="true"
      />

      {/* Header / Navbar */}
      <header className="hero-chrome relative z-30 bg-black flex items-center justify-between px-6 md:px-12 h-20">
        <a href="#" className="flex items-center h-12 overflow-hidden group">
          <img
            src={logoImg}
            alt="Sonora Logo"
            className="w-[220px] h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        <button className="bg-primary hover:bg-primary-hover text-surface font-semibold text-sm md:text-base px-6 py-2.5 rounded-xl shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
          Comprar Agora
        </button>
      </header>

      {/* Palco Central: Tipografia atrás + Fone na frente */}
      <main className="relative flex-1 flex items-center justify-center w-full max-w-7xl mx-auto px-4">
        <h1 className="relative z-10 font-display font-extrabold text-center uppercase tracking-tight leading-[0.88] text-[15vw] sm:text-[13vw] lg:text-[11.5rem] text-dark">
          {/* Máscara em cada linha para o yPercent: 110 nascer limpo */}
          <span className="block overflow-hidden">
            <span className="hero-word block">MODERN</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-word block text-transparent bg-clip-text bg-gradient-to-r from-dark via-dark to-primary">
              HARMONY
            </span>
          </span>
        </h1>

        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center p-6">
          <img
            ref={headphoneRef}
            src={headphoneImg}
            alt="Headphone em destaque"
            className="w-[75%] sm:w-[55%] md:w-[46%] lg:w-[42%] max-w-[540px] h-auto object-contain drop-shadow-[0_35px_35px_rgba(9,9,11,0.35)]"
          />
        </div>
      </main>
    </section>
  );
}