"use client";

import { motion } from "framer-motion";

export default function Manifesto() {
  const words = [
    "Curiosidade.",
    "Construção.",
    "Conexão.",
    "Ecossistema.",
    "Legado."
  ];

  return (
    <section id="manifesto" className="relative w-full py-32 bg-transparent overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center w-full">
        
        {words.map((word, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-30%" }}
            transition={{ duration: 1.5, ease: "easeOut" }} // Motion Philosophy: Slide + Fade = Descoberta e contemplação
            className="min-h-[60vh] flex items-center justify-center w-full px-6"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight">
              {word}
            </h2>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
