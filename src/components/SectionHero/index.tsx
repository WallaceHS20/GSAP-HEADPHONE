import logoImg from "@/assets/logo.png";

export function SectionHero() {
  return (
    <section className="relative h-dvh min-h-[560px] w-full overflow-hidden flex flex-col justify-between select-none">
      {/* Brilho sutil roxo no fundo */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-primary/15 blur-[90px] md:blur-[120px]"
        aria-hidden="true"
      />

      {/* Header */}
      <header className="hero-chrome relative max-h-[100px] overflow-hidden z-30 w-full border-b border-white/[0.08] bg-[#09090D]/85 backdrop-blur-xl">
        {/* Brilho sutil no topo */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

        <div className="mx-auto flex h-16 sm:h-20 md:h-[84px] max-w-[1440px] items-center justify-between gap-3 px-4 sm:px-6 md:px-12">
          {/* LOGO */}
          <a href="#" className="group flex shrink-0  items-center">
            <img
              src={logoImg}
              alt="Sonora Logo"
              className="h-8 w-[125px] sm:h-9 sm:w-[165px] md:h-[200px] md:w-[300px] object-contain object-left transition-all duration-300 group-hover:scale-[1.04]"
            />
          </a>

          {/* CENTRO */}
          <div className="hidden items-center gap-3 lg:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(139,61,255,0.9)]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">
              Sound beyond limits
            </span>

            <span className="h-4 w-px bg-white/10" />

            <span className="text-[10px] font-medium tracking-wider text-white/70">
              EXPERIENCE THE DIFFERENCE
            </span>
          </div>

          {/* AÇÕES */}
          <div className="flex shrink-0 items-center gap-3 md:gap-4">
            <span className="hidden text-[10px] font-medium uppercase tracking-widest text-white/40 md:block">
              Disponível agora
            </span>

            <button
              type="button"
              className="group relative inline-flex cursor-pointer items-center gap-2 sm:gap-3 overflow-hidden rounded-full border border-primary/40 bg-primary px-3.5 py-2 sm:px-5 sm:py-2.5 md:px-7 md:py-3 text-xs sm:text-sm font-semibold text-white shadow-[0_0_25px_rgba(139,61,255,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_0_35px_rgba(139,61,255,0.4)] active:translate-y-0"
            >
              {/* Brilho passando pelo botão */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative whitespace-nowrap">Comprar agora</span>

              <span className="relative flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
                <svg
                  className="h-3 w-3 sm:h-[13px] sm:w-[13px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Tipografia central */}
      <main className="relative flex-1 flex items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <h1 className="relative z-10 w-full font-display font-extrabold text-center uppercase tracking-tight leading-[0.95] sm:leading-[0.9] lg:leading-[0.88] text-[clamp(1.75rem,8.5vw,8rem)] sm:text-[clamp(4.5rem,9vw,8rem)] lg:text-[8rem] text-dark">
          <span className="block overflow-hidden">
            <span className="hero-word block">MODERN</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-word block text-transparent bg-clip-text bg-gradient-to-r from-dark via-dark to-primary">
              HARMONY
            </span>
          </span>
        </h1>
      </main>
    </section>
  );
}
