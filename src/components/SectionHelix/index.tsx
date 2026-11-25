import React, { useState } from "react";
import { motion } from "motion/react";

import gameImg from "@/assets/game.png";
import gymImg from "@/assets/gym.png";
import musicImg from "@/assets/musica.png";
import workImg from "@/assets/work.png";
import runImg from "@/assets/run.png";
import dayImg from "@/assets/day.png";

interface SectionHelixProps {
  sectionRef?: React.RefObject<HTMLElement | null>;
  headphoneSlotRef?: React.RefObject<HTMLDivElement | null>;
}

interface ScenarioCard {
  id: string;
  title: string;
  subtitle: string;
  accentClass: string;
  image?: string;
}

const SCENARIOS: ScenarioCard[] = [
  {
    id: "dia-a-dia",
    title: "Dia a Dia",
    subtitle: "Conforto contínuo em qualquer momento do dia.",
    accentClass: "from-zinc-900 via-zinc-950 to-black",
    image: dayImg,
  },
  {
    id: "treino",
    title: "Treino",
    subtitle: "Energia e estabilidade para puxar pesado na academia.",
    accentClass: "from-zinc-900 via-zinc-950 to-black",
    image: gymImg,
  },
  {
    id: "corrida",
    title: "Corrida",
    subtitle: "Ritmo constante e ajuste firme do primeiro ao último km.",
    accentClass: "from-zinc-900 via-zinc-950 to-black",
    image: runImg,
  },
  {
    id: "trabalho",
    title: "Trabalho",
    subtitle: "Foco total para reuniões, código e longas horas.",
    accentClass: "from-zinc-900 via-zinc-950 to-black",
    image: workImg,
  },
  {
    id: "jogos",
    title: "Jogos",
    subtitle: "Palco sonoro imersivo para cada detalhe da partida.",
    accentClass: "from-zinc-900 via-zinc-950 to-black",
    image: gameImg,
  },
  {
    id: "playlist",
    title: "Playlist Favorita",
    subtitle: "Graves encorpados e clareza para curtir suas músicas.",
    accentClass: "from-zinc-900 via-zinc-950 to-black",
    image: musicImg,
  },
];

export function SectionHelix({
  sectionRef,
  headphoneSlotRef,
}: SectionHelixProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const stepAngle = (Math.PI * 2) / SCENARIOS.length;

  const handleStep = (delta: number) => {
    setActiveIndex(
      (prev) => (prev + delta + SCENARIOS.length) % SCENARIOS.length,
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen max-h-screen w-full flex items-center px-6 md:px-16 py-8 md:py-10 overflow-hidden bg-primary text-surface"
    >
      {/* Brilhos de profundidade */}
      <div
        className="pointer-events-none absolute -left-24 top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-white/15 blur-[140px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-10 bottom-10 w-[340px] h-[340px] rounded-full bg-dark/35 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* ESQUERDA: Espaço reservado para o fone */}
        <div
          ref={headphoneSlotRef}
          className="order-2 lg:order-1 lg:col-span-5 hidden lg:flex flex-col items-center justify-center h-[360px] relative"
        >
          <div
            className="pointer-events-none absolute w-72 h-72 rounded-full bg-white/20 blur-[110px]"
            aria-hidden="true"
          />
        </div>

        {/* DIREITA: Conteúdo + Hélice */}
        <div className="order-1 lg:order-2 lg:col-span-7 space-y-4">
          {/* Título */}
          <div className="space-y-1.5">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-purple-200">
              Em Qualquer Situação
            </span>

            <h2 className="font-display font-extrabold uppercase text-2xl sm:text-4xl lg:text-5xl leading-[0.95] text-surface">
              DO DIA A DIA A <span className="text-dark">QUALQUER RITMO</span>
            </h2>

            <p className="text-purple-100/90 text-xs sm:text-sm md:text-base max-w-2xl leading-snug">
              Use no dia a dia, no treino, na corrida, no trabalho, nos jogos ou
              simplesmente para curtir a sua playlist favorita.
            </p>
          </div>

          {/* Palco 3D da Hélice */}
          <div
            className="relative h-[280px] sm:h-[320px] w-full flex items-center justify-center"
            style={{ perspective: "1200px" }}
          >
            {SCENARIOS.map((item, index) => {
              let diff = index - activeIndex;

              const half = SCENARIOS.length / 2;

              if (diff > half) diff -= SCENARIOS.length;
              if (diff < -half) diff += SCENARIOS.length;

              const angle = diff * stepAngle;

              const radiusX = 165;

              const x = Math.sin(angle) * radiusX;
              const depth = Math.cos(angle);
              const rotateY = -Math.sin(angle) * 38;

              const scale = 0.72 + (depth + 1) * 0.16;
              const opacity = Math.max(0.22, (depth + 1) * 0.5);
              const zIndex = Math.round((depth + 1) * 20);

              const isFront = index === activeIndex;

              return (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  style={{
                    zIndex,
                    transformStyle: "preserve-3d",
                  }}
                  animate={{
                    x,
                    scale,
                    opacity,
                    rotateY,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 210,
                    damping: 24,
                  }}
                  className={`
                    absolute
                    w-44 sm:w-52
                    h-52 sm:h-60
                    rounded-2xl
                    overflow-hidden
                    flex flex-col
                    justify-between
                    text-left
                    border
                    cursor-pointer
                    transition-colors
                    ${
                      isFront
                        ? "border-white shadow-[0_20px_50px_rgba(9,9,11,0.45)]"
                        : "border-white/15"
                    }
                  `}
                >
                  {/* Imagem de fundo */}
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      draggable={false}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}

                  {/* Overlay / Degradê */}
                  <div
                    className={`
                      absolute inset-0
                      ${
                        item.image
                          ? "bg-gradient-to-b from-black/20 via-black/40 to-black/95"
                          : `bg-gradient-to-b ${item.accentClass}`
                      }
                    `}
                  />

                  {/* Conteúdo do card */}
                  <div className="relative z-10 flex flex-col justify-between w-full h-full p-4 sm:p-5">
                    {/* Número e indicador */}
                    <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-purple-300">
                      <span>0{index + 1}</span>

                      {isFront && (
                        <span className="px-2 py-0.5 rounded-full bg-white/15 backdrop-blur-md text-white text-[10px]">
                          Em foco
                        </span>
                      )}
                    </div>

                    {/* Informações */}
                    <div className="space-y-1">
                      <h3 className="font-display font-extrabold uppercase text-base sm:text-md text-white leading-none">
                        {item.title}
                      </h3>

                      <p className="text-xs text-zinc-200 leading-snug">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Controles */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleStep(-1)}
              className="px-4 py-2 rounded-xl bg-dark/80 border border-white/20 hover:border-white text-surface text-xs font-semibold uppercase tracking-wider cursor-pointer transition-colors"
            >
              Anterior
            </button>

            <button
              type="button"
              onClick={() => handleStep(1)}
              className="px-4 py-2 rounded-xl bg-surface text-dark hover:bg-purple-100 text-xs font-semibold uppercase tracking-wider cursor-pointer transition-colors"
            >
              Próximo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
