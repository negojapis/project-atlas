"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const obsessions = [
  "Cultura Visual Japonesa",
  "Interfaces Retrô",
  "Tipografia Editorial",
  "Físico × Digital",
  "IA",
  "Gaming",
  "Moda",
  "Arquitetura",
  "Música",
  "Comportamento Humano",
  "Fotografia",
  "Objetos",
  "Cultura"
];

export default function CurrentObsessions() {
  const [hoveredWord, setHoveredWord] = useState(null);

  return (
    <section className="relative w-full py-32 bg-bg-base overflow-hidden z-20 border-t border-white/5">
      
      {/* Optional: Background images based on hovered word */}
      {/* We can use CSS masks to reveal a background image when hovering */}
      
      <div className="max-w-[85vw] md:max-w-[70vw] mx-auto flex flex-col">
        <h2 className="font-mono text-xs md:text-sm tracking-widest text-text-secondary uppercase mb-16">
          OBSESSÕES ATUAIS
        </h2>

        <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
          {obsessions.map((word, i) => (
            <motion.span
              key={word}
              onMouseEnter={() => setHoveredWord(word)}
              onMouseLeave={() => setHoveredWord(null)}
              initial={{ opacity: 0.5 }}
              animate={{ 
                opacity: hoveredWord === word ? 1 : hoveredWord ? 0.2 : 0.5,
                scale: hoveredWord === word ? 1.05 : 1
              }}
              transition={{ duration: 0.4 }}
              className="text-4xl md:text-7xl font-bold tracking-tighter cursor-default transition-colors duration-300 hover:text-mastim-red"
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
