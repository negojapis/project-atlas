"use client";

import { motion } from "framer-motion";

const timelineData = [
  {
    chapter: "2009 — Curiosidade",
    description: "Desmontando computadores, rádios, placas, conectores e gabinetes para entender como tudo funcionava.",
  },
  {
    chapter: "Aprendizado",
    description: "Hardware, suporte e tecnologia na prática.",
  },
  {
    chapter: "Criação",
    description: "Fotografia, audiovisual, música e conteúdo.",
  },
  {
    chapter: "Empreendedorismo",
    description: "Lojas, marcas, operação e visão de negócio.",
  },
  {
    chapter: "Construção",
    description: "Grace Code, Divine Brew e Mastimverse.",
  },
  {
    chapter: "Futuro",
    description: "O universo continua sendo construído.",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-32 px-6 bg-transparent overflow-hidden">

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <div className="mb-32 text-center">
          <h2 className="text-[#A6A6A6] text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] mb-4">Journey</h2>
          <p className="text-white text-3xl md:text-5xl font-serif font-light tracking-wide">A Origem</p>
        </div>

        <div className="relative w-full flex flex-col items-center">
          {/* Central Line */}
          <div className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#222] to-transparent" />

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative w-full flex flex-col items-center text-center py-24 group"
            >
              {/* Node (Pulse on Hover) */}
              <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#111] border border-[#333] group-hover:bg-[#E10613] group-hover:border-[#E10613] group-hover:shadow-[0_0_15px_rgba(225,6,19,0.5)] group-hover:scale-150 transition-all duration-700 z-10 ease-in-out" />
              
              {/* Chapter Label */}
              <span className="text-[#555555] font-mono text-[9px] md:text-[10px] tracking-[0.3em] uppercase mb-8 transition-colors duration-700">
                [ {item.chapter} ]
              </span>
              
              {/* Description */}
              <p className="text-[#888888] text-xl md:text-3xl font-serif font-light tracking-wide leading-relaxed max-w-xl group-hover:text-white transition-colors duration-700 ease-in-out">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
