"use client";

import { motion } from "framer-motion";

const manifestoLines = [
  "Toda grande construção começa com curiosidade.",
  "A curiosidade leva ao aprendizado.",
  "O aprendizado cria ideias.",
  "Ideias constroem projetos.",
  "Projetos formam empresas.",
  "Empresas conectam pessoas.",
  "Pessoas constroem ecossistemas.",
];

export default function Manifesto() {
  return (
    <section className="min-h-screen flex items-center justify-center py-32 px-6">
      <div className="max-w-4xl w-full text-center space-y-8 md:space-y-12">
        {manifestoLines.map((line, index) => (
          <motion.h3
            key={index}
            initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
            className={`text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight ${
              index === manifestoLines.length - 1 ? "text-white" : "text-[#A6A6A6]"
            }`}
          >
            {line}
          </motion.h3>
        ))}
      </div>
    </section>
  );
}
