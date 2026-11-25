import React from "react";
import headphoneImg from "@/assets/9662743.png";

interface FloatingHeadphoneProps {
  headphoneRef: React.RefObject<HTMLImageElement | null>;
}

export function FloatingHeadphone({ headphoneRef }: FloatingHeadphoneProps) {
  return (
    <div className="pointer-events-none fixed inset-0 z-30 flex items-center justify-center p-6">
      <img
        ref={headphoneRef}
        src={headphoneImg}
        alt="Headphone em destaque"
        className="w-[70%] sm:w-[48%] md:w-[38%] lg:w-[34%] max-w-[500px] h-auto object-contain drop-shadow-[0_35px_35px_rgba(9,9,11,0.35)]"
      />
    </div>
  );
}
