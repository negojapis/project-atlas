"use client";

import { motion } from "framer-motion";

const words = [
  "Curiosidade.",
  "Construção.",
  "Visão.",
  "Ecossistema.",
  "Legado."
];

export default function Manifesto() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center py-32 px-6 bg-[#050505]">
      <div className="max-w-4xl w-full text-center space-y-16">
        {words.map((word, index) => (
          <motion.h3
            key={index}
            initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight ${
              index === words.length - 1 ? "text-white" : "text-[#A6A6A6]"
            }`}
          >
            {word}
          </motion.h3>
        ))}
      </div>
    </section>
  );
}
