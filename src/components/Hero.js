"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full bg-transparent overflow-hidden">
      
      {/* Gallery Spotlight (Luz revelando a marca) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full opacity-40 mix-blend-screen" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 70%)' }} />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        
        {/* MASTIM (A Marca - Domina a tela) */}
        <motion.h1 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          className="text-[18vw] md:text-[14vw] font-medium text-white tracking-tighter leading-none select-none"
        >
          MASTIM
        </motion.h1>
        
        <div className="absolute bottom-12 md:bottom-24 w-full flex flex-col items-center gap-12">
          
          {/* Footnote Text (Quem é o Mastim - Atmosfera e Identidade) */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 2.5 }}
            className="text-[#555555] text-[9px] md:text-[10px] font-mono uppercase tracking-[0.5em] max-w-lg text-center"
          >
            A visão antes da tecnologia.
          </motion.p>
          
          {/* Commands (Extremamente elegantes) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 3.5 }}
            className="flex items-center gap-12 md:gap-24 opacity-80"
          >
            <a href="#core" className="group text-[#666666] text-[10px] uppercase font-mono tracking-[0.3em] hover:text-white transition-colors duration-700 flex items-center gap-3">
              <span className="opacity-40 group-hover:opacity-100 transition-opacity duration-700 group-hover:translate-x-1">→</span>
              EXPLORAR
            </a>
            <a href="https://wa.me/5511940634737" target="_blank" rel="noopener noreferrer" className="group text-[#666666] text-[10px] uppercase font-mono tracking-[0.3em] hover:text-[#E10613] transition-colors duration-700 flex items-center gap-3">
              <span className="opacity-40 group-hover:opacity-100 transition-opacity duration-700 group-hover:translate-x-1">→</span>
              CONTATO
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
