"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const phrases = [
  "Não construo apenas empresas.",
  "Construo experiências.",
  "Conecto ideias.",
  "Transformo visão em realidade.",
  "Construo o universo Mastim.",
];

export default function Philosophy() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-[#050505]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {phrases.map((phrase, index) => {
          // Calculate active range for each phrase (e.g., 5 phrases = 20% scroll per phrase)
          const start = index * (1 / phrases.length);
          const end = start + (1 / phrases.length);
          const peak = start + (0.5 / phrases.length);

          // eslint-disable-next-line react-hooks/rules-of-hooks
          const opacity = useTransform(
            scrollYProgress,
            [start, peak - 0.05, peak + 0.05, end],
            [0, 1, 1, 0]
          );

          // eslint-disable-next-line react-hooks/rules-of-hooks
          const scale = useTransform(
            scrollYProgress,
            [start, peak, end],
            [0.9, 1, 1.1]
          );

          // eslint-disable-next-line react-hooks/rules-of-hooks
          const filter = useTransform(
            scrollYProgress,
            [start, peak - 0.05, peak + 0.05, end],
            ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]
          );

          return (
            <motion.h2
              key={index}
              style={{ opacity, scale, filter }}
              className={`absolute text-center text-4xl md:text-6xl lg:text-8xl font-medium tracking-tight px-4 ${
                index === phrases.length - 1 ? "text-white" : "text-[#A6A6A6]"
              }`}
            >
              {phrase}
            </motion.h2>
          );
        })}
      </div>
    </section>
  );
}
