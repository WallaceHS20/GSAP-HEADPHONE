import React from "react";
import { motion } from "motion/react";

import bgVideo from "@/assets/backlog.mp4";

interface SectionVideoProps {
  sectionRef?: React.RefObject<HTMLElement | null>;
  headphoneSlotRef?: React.RefObject<HTMLDivElement | null>;
  videoSrc?: string;
}

export function SectionVideo({
  sectionRef,
  headphoneSlotRef,
  videoSrc = bgVideo,
}: SectionVideoProps) {
  return (
    <section
      ref={sectionRef}
      className="relative h-screen max-h-screen min-h-0 w-full flex items-center overflow-hidden bg-[#08060d] text-white"
    >
      {/* Background video */}
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* Tratamento cinematográfico */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#08060d]/90 via-[#08060d]/45 to-[#08060d]/75" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#08060d] via-transparent to-[#08060d]/50" />

      {/* Glow */}
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/15 blur-[150px] pointer-events-none" />

      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-fuchsia-600/10 blur-[160px] pointer-events-none" />

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 py-8 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        {/* Área reservada para o fone */}
        <div
          ref={headphoneSlotRef}
          className="hidden lg:flex lg:col-span-5 h-[450px] items-center justify-center relative"
        >
          <div className="absolute w-[340px] h-[340px] rounded-full border border-white/10" />
          <div className="absolute w-[260px] h-[260px] rounded-full border border-white/10" />

          <div className="absolute w-[180px] h-[180px] rounded-full bg-purple-500/10 blur-[70px]" />
        </div>

        {/* Texto */}
        <div className="lg:col-span-7 max-w-3xl">
          {/* Categoria */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-8 h-[1px] bg-purple-400" />

            <span className="text-xs font-bold uppercase tracking-[0.35em] text-purple-300">
              Imersão contínua
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display font-black uppercase text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.88] tracking-tight"
          >
            SOM QUE
            <br />
            ENVOLVE
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-400 to-purple-600">
              CADA DETALHE.
            </span>
          </motion.h2>

          {/* Descrição */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 max-w-lg text-sm sm:text-base text-zinc-300 leading-relaxed"
          >
            Feche os olhos para o mundo exterior. Descubra uma experiência
            sonora envolvente, com presença, profundidade e intensidade em cada
            frequência.
          </motion.p>

          {/* Rodapé visual */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex items-center gap-5"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-400" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400">
                Sound Experience
              </span>
            </div>

            <span className="w-12 h-px bg-white/20" />

            <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              Designed for immersion
            </span>
          </motion.div>
        </div>
      </div>

      {/* Identificação lateral */}
      <div className="absolute bottom-8 right-8 hidden md:block">
        <span className="text-[9px] uppercase tracking-[0.35em] text-white/30">
          Audio / Experience — 03
        </span>
      </div>
    </section>
  );
}
