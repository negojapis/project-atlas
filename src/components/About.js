"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative min-h-screen flex items-center py-32 md:py-48 px-6 bg-transparent overflow-hidden">

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
        {/* Abstract Editorial Photo */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-[600px] md:h-[800px] relative group"
        >
          <div className="absolute inset-0 border border-[#222222] z-10 pointer-events-none transition-colors duration-700 group-hover:border-[#555555]" />
          <Image
            src="/foto.jpeg"
            alt="Felipe Gonçalves"
            fill
            className="object-cover object-center z-0 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out mix-blend-lighten"
          />
          {/* Technical mark */}
          <div className="absolute bottom-6 left-6 font-mono text-[9px] text-[#555555] tracking-[0.3em] uppercase z-20">
            [ ID: F.GONCALVES ]
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="space-y-12"
        >
          <h2 className="text-[#666666] text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#333333]" />
            Felipe Gonçalves
          </h2>
          
          <p className="text-3xl md:text-5xl lg:text-6xl text-white font-serif font-light leading-tight tracking-wide">
            Sou Felipe Gonçalves, também conhecido como Mastim.
          </p>

          <p className="text-[#888888] text-lg md:text-xl font-serif font-light leading-relaxed max-w-xl">
            A curiosidade constrói tecnologia. A identidade constrói legados.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
