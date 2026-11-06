"use client";

import Image from "next/image";

const BRANCH_DIAGONAL = encodeURI("/Ramo de ameixeira japonesa em flor-2.png");
const BRANCH_HORIZONTAL = encodeURI("/Ramo vermelho de ameixeira japonesa-3.png");

export default function SectionBranchBridge({
  variant = "right",
  flipY = false,
  scale = 1,
}) {
  const isRight = variant === "right";

  return (
    <div
      aria-hidden="true"
      className="relative w-full h-0 z-30 pointer-events-none select-none overflow-visible"
    >
      {/* Subtle Crimson Ambient Glow at the Crossing Point */}
      <div
        className={`absolute top-0 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full bg-mastim-red/10 blur-[90px] pointer-events-none ${
          isRight ? "-right-20" : "-left-20"
        }`}
      />

      <div
        style={{ transform: `translateY(-50%) scale(${scale})` }}
        className={`absolute top-0 ${
          isRight
            ? "-right-8 sm:-right-12 md:-right-16 w-[230px] sm:w-[320px] md:w-[440px] lg:w-[520px] aspect-[5/4]"
            : "-left-8 sm:-left-10 md:-left-12 w-[260px] sm:w-[360px] md:w-[480px] lg:w-[580px] aspect-[16/9]"
        }`}
      >
        <div className={`relative w-full h-full ${flipY ? "-scale-y-100" : ""}`}>
          <Image
            src={isRight ? BRANCH_DIAGONAL : BRANCH_HORIZONTAL}
            alt=""
            fill
            draggable={false}
            sizes="(max-width: 768px) 320px, 560px"
            className="object-contain pointer-events-none select-none drop-shadow-[0_22px_32px_rgba(0,0,0,0.92)] filter saturate-110"
          />
        </div>
      </div>
    </div>
  );
}
