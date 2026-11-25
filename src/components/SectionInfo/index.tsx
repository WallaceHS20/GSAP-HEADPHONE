import React from "react";

interface SectionInfoProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

export function SectionInfo({ sectionRef }: SectionInfoProps) {
  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center px-6 md:px-16 py-24 overflow-hidden bg-dark text-surface"
    >
      {/* Aura / brilho roxo brilhante atrás do lado direito (onde o fone encosta) */}
      <div
        className="pointer-events-none absolute right-[10%] top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-purple-glow/25 blur-[130px]"
        aria-hidden="true"
      />

      {/* Glow sutil no canto superior esquerdo */}
      <div
        className="pointer-events-none absolute -left-24 top-12 w-[320px] h-[320px] rounded-full bg-primary/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Esquerda: Informações e cards */}
        <div className="lg:col-span-6 space-y-8">
          <div className="sec-info-reveal space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-purple-glow">
              Engenharia Sonora
            </span>

            <h2 className="font-display font-extrabold uppercase text-4xl sm:text-6xl leading-[0.95] text-surface">
              CLAREZA{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-glow via-fuchsia-400 to-primary">
                REAL
              </span>
            </h2>

            <p className="text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed">
              Drivers calibrados entregam graves encorpados, médios limpos e
              agudos precisos sem perder o detalhamento em nenhum volume.
            </p>
          </div>

          {/* Cards em vidro escuro com borda roxa sutil */}
          <div className="sec-info-reveal grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-zinc-900/90 backdrop-blur-sm p-5 rounded-2xl border border-purple-glow/25 hover:border-purple-glow/60 transition-colors">
              <p className="font-display font-bold text-sm uppercase text-purple-glow">
                Áudio Hi-Res
              </p>
              <p className="text-xs text-zinc-400 mt-1">
                Palco sonoro amplo e natural.
              </p>
            </div>

            <div className="bg-zinc-900/90 backdrop-blur-sm p-5 rounded-2xl border border-purple-glow/25 hover:border-purple-glow/60 transition-colors">
              <p className="font-display font-bold text-sm uppercase text-purple-glow">
                Conforto
              </p>
              <p className="text-xs text-zinc-400 mt-1">
                Almofadas leves para uso prolongado.
              </p>
            </div>

            <div className="bg-zinc-900/90 backdrop-blur-sm p-5 rounded-2xl border border-purple-glow/25 hover:border-purple-glow/60 transition-colors">
              <p className="font-display font-bold text-sm uppercase text-purple-glow">
                40h Bateria
              </p>
              <p className="text-xs text-zinc-400 mt-1">
                Autonomia longa com carga rápida.
              </p>
            </div>
          </div>
        </div>

        {/* Direita: Espaço livre onde o fone vai pousar */}
        <div className="hidden lg:block lg:col-span-6" aria-hidden="true" />
      </div>
    </section>
  );
}
