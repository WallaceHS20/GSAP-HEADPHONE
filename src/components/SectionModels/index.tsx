import React, { useRef, useState } from "react";

import whiteHeadphoneSrc from "@/assets/whitephone.png";
import blackHeadphoneSrc from "@/assets/9662743.png";

interface SectionModelsProps {
  sectionRef?: React.RefObject<HTMLElement | null>;
  headphoneTargetRef?: React.RefObject<HTMLDivElement | null>;
  isHeadphoneDocked?: boolean;
}

interface ModelVariant {
  id: "black" | "white";
  name: string;
  color: string;
  cardBg: string;
  borderClass: string;
  titleColor: string;
  buttonClass: string;
}

export function SectionModels({
  sectionRef,
  headphoneTargetRef,
  isHeadphoneDocked = false,
}: SectionModelsProps) {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const models: ModelVariant[] = [
    {
      id: "black",
      name: "Obsidian Black",
      color: "Preto",
      cardBg: "bg-[#292431]",
      borderClass: "border-[#494052] hover:border-primary",
      titleColor: "text-white",
      buttonClass: "bg-primary hover:bg-primary-hover text-white",
    },
    {
      id: "white",
      name: "Pure White",
      color: "Branco",
      cardBg: "bg-white",
      borderClass: "border-zinc-200 hover:border-primary",
      titleColor: "text-dark",
      buttonClass: "bg-dark hover:bg-primary text-white",
    },
  ];

  // ==========================================
  // CONTROLE DO SLIDER
  // ==========================================

  const goToSlide = (index: number) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.children[index] as HTMLElement;

    card?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });

    setActiveSlide(index);
  };

  const handleSliderScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const index = Math.round(slider.scrollLeft / slider.clientWidth);

    setActiveSlide(Math.min(1, Math.max(0, index)));
  };

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-[100svh]
        w-full
        overflow-hidden
        bg-surface
        text-dark
        flex items-center
        px-4 py-5
        sm:px-6 sm:py-8
        lg:px-16
      "
    >
      <div
        className="
        relative z-10
        mx-auto flex h-full w-full max-w-6xl
        flex-col
      "
      >
        {/* ================================== */}
        {/* CABEÇALHO */}
        {/* ================================== */}

        <div
          className="
          shrink-0
          mb-5
          text-center
          sm:mb-8
          lg:mb-10
        "
        >
          <span
            className="
            text-[10px] sm:text-xs
            font-semibold uppercase
            tracking-[0.22em]
            text-primary
          "
          >
            Escolha sua versão
          </span>

          <h2
            className="
            mt-2
            font-display font-extrabold uppercase
            text-2xl
            sm:text-4xl
            lg:text-5xl
          "
          >
            Qual combina com você?
          </h2>

          <p
            className="
            mt-2
            text-xs sm:text-sm
            text-muted
          "
          >
            Duas versões. Uma experiência sonora.
          </p>
        </div>

        {/* ================================== */}
        {/* SLIDER / GRID */}
        {/* ================================== */}

        <div
          ref={sliderRef}
          onScroll={handleSliderScroll}
          className="
            flex flex-1 min-h-0
            w-full
            gap-4
            overflow-x-auto
            overflow-y-hidden
            snap-x snap-mandatory
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden

            lg:grid
            lg:grid-cols-2
            lg:gap-8
            lg:overflow-visible
          "
        >
          {models.map((model) => {
            const isBlack = model.id === "black";

            return (
              <article
                key={model.id}
                className={`
                  group relative
                  flex flex-col
                  shrink-0
                  w-full
                  h-full
                  min-h-0
                  snap-start
                  rounded-2xl sm:rounded-3xl
                  border
                  p-4 sm:p-6 lg:p-8
                  overflow-hidden
                  transition-colors duration-500

                  lg:w-auto
                  lg:min-w-0

                  ${model.cardBg}
                  ${model.borderClass}
                `}
              >
                {/* BRILHO DECORATIVO */}

                <div
                  className="
                  pointer-events-none
                  absolute -right-20 -top-20
                  h-48 w-48
                  rounded-full
                  bg-primary/10
                  blur-[70px]
                "
                />

                {/* CABEÇALHO DO CARD */}

                <div
                  className="
                  relative z-10
                  flex items-center justify-between
                  gap-3
                  shrink-0
                "
                >
                  <div className="min-w-0">
                    <h3
                      className={`
                      font-display font-bold
                      text-lg sm:text-xl lg:text-2xl
                      ${model.titleColor}
                    `}
                    >
                      {model.name}
                    </h3>

                    <p className="mt-1 text-xs sm:text-sm text-zinc-400">
                      {model.color}
                    </p>
                  </div>

                  <span
                    className="
                    shrink-0
                    rounded-full
                    border border-current/10
                    px-3 py-1
                    text-[10px] sm:text-xs
                    text-zinc-400
                  "
                  >
                    {isBlack ? "01 / 02" : "02 / 02"}
                  </span>
                </div>

                {/* PRODUTO */}

                <div
                  ref={isBlack ? headphoneTargetRef : undefined}
                  className="
                    headphone-parking-area
                    relative flex-1
                    min-h-0
                    my-3 sm:my-5
                    w-full
                    flex items-center justify-center
                  "
                >
                  {/* ILUMINAÇÃO */}

                  <div
                    className={`
                    pointer-events-none
                    absolute
                    h-36 w-36
                    sm:h-48 sm:w-48
                    rounded-full
                    blur-[65px]
                    sm:blur-[85px]
                    ${isBlack ? "bg-primary/30" : "bg-zinc-200"}
                  `}
                  />

                  {/* FONE BRANCO ESTÁTICO */}

                  {!isBlack && (
                    <img
                      src={whiteHeadphoneSrc}
                      alt="Headphone Pure White"
                      className="
                        relative z-10
                        h-[90%]
                        max-h-[260px]
                        w-auto max-w-[90%]
                        object-contain
                        drop-shadow-[0_20px_25px_rgba(0,0,0,0.16)]
                        transition-transform duration-700
                        group-hover:scale-105
                      "
                    />
                  )}

                  {/* FONE PRETO APÓS DOCK */}

                  {isBlack && isHeadphoneDocked && (
                    <img
                      src={blackHeadphoneSrc}
                      alt="Headphone Obsidian Black"
                      className="
                        relative z-10
                        h-[90%]
                        max-h-[260px]
                        w-auto max-w-[90%]
                        object-contain
                        drop-shadow-[0_20px_25px_rgba(0,0,0,0.45)]
                        transition-transform duration-700
                        group-hover:scale-105
                      "
                    />
                  )}
                </div>

                {/* PREÇO E BOTÃO */}

                <div
                  className="
                  relative z-10
                  shrink-0
                  flex items-end justify-between
                  gap-3
                  border-t border-current/10
                  pt-3 sm:pt-5
                "
                >
                  <div className="min-w-0">
                    <p className="mb-1 text-[10px] sm:text-xs text-zinc-400">
                      Preço
                    </p>

                    <p
                      className={`
                      whitespace-nowrap
                      font-display font-extrabold
                      text-2xl sm:text-3xl lg:text-4xl
                      ${model.titleColor}
                    `}
                    >
                      R$ 259,00
                    </p>
                  </div>

                  <button
                    type="button"
                    className={`
                      shrink-0
                      rounded-xl
                      px-4 sm:px-6
                      py-3
                      text-xs sm:text-sm
                      font-semibold
                      transition-all duration-300
                      hover:-translate-y-1
                      active:scale-95
                      cursor-pointer
                      ${model.buttonClass}
                    `}
                  >
                    Escolher
                    <span className="ml-2">→</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* ================================== */}
        {/* NAVEGAÇÃO MOBILE */}
        {/* ================================== */}

        <div
          className="
          flex lg:hidden
          shrink-0
          items-center justify-center
          gap-5
          pt-4
        "
        >
          <button
            type="button"
            onClick={() => goToSlide(0)}
            aria-label="Ver modelo preto"
            className={`
              h-2 rounded-full transition-all duration-300
              ${activeSlide === 0 ? "w-8 bg-primary" : "w-2 bg-zinc-300"}
            `}
          />

          <span
            className="
            text-[10px]
            font-semibold
            tracking-widest
            text-muted
          "
          >
            0{activeSlide + 1} / 02
          </span>

          <button
            type="button"
            onClick={() => goToSlide(1)}
            aria-label="Ver modelo branco"
            className={`
              h-2 rounded-full transition-all duration-300
              ${activeSlide === 1 ? "w-8 bg-primary" : "w-2 bg-zinc-300"}
            `}
          />
        </div>

        {/* RODAPÉ */}

        <p
          className="
          hidden lg:block
          shrink-0
          mt-5
          text-center text-xs text-muted
        "
        >
          Mesmo produto. Duas opções de acabamento.
        </p>
      </div>
    </section>
  );
}
