"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-[100svh] bg-transparent overflow-hidden flex flex-col items-center justify-center">
      
      {/* Gallery Spotlight */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[120vw] h-[120vw] md:w-[40vw] md:h-[40vw] rounded-full opacity-40 mix-blend-screen" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 70%)' }} />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6">
        
        {/* MASTIM (A Marca - Domina a tela) */}
        <motion.h1 
          initial={{ opacity: 0, filter: "blur(10px)", scale: 0.98 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          className="text-[20vw] md:text-[14vw] font-medium text-white tracking-tighter leading-none select-none mb-12 md:mb-0"
        >
          MASTIM
        </motion.h1>
        
        {/* Thumb Zone - Fixado na base, respeitando safe-area */}
        <div className="absolute bottom-[calc(2rem+env(safe-area-inset-bottom))] md:bottom-24 w-full flex flex-col items-center gap-10 md:gap-12">
          
          {/* Footnote Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 2.5 }}
            className="text-[#555555] text-[9px] md:text-[10px] font-mono uppercase tracking-[0.5em] max-w-lg text-center"
          >
            A visão antes da tecnologia.
          </motion.p>
          
          {/* Commands (Touch Targets > 48px, Tap-down motion) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 3.5 }}
            className="flex items-center gap-8 md:gap-24 opacity-80"
          >
            <a 
              href="#core" 
              className="group p-4 -m-4 text-[#666666] text-[10px] uppercase font-mono tracking-[0.3em] md:hover:text-white active:scale-95 active:text-white transition-all duration-300 flex items-center gap-3"
            >
              <span className="opacity-40 md:group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 md:group-hover:translate-x-1 group-active:translate-x-1">→</span>
              EXPLORAR
            </a>
            <a 
              href="https://wa.me/5511940634737" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group p-4 -m-4 text-[#666666] text-[10px] uppercase font-mono tracking-[0.3em] md:hover:text-[#E10613] active:scale-95 active:text-[#E10613] transition-all duration-300 flex items-center gap-3"
            >
              <span className="opacity-40 md:group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 md:group-hover:translate-x-1 group-active:translate-x-1">→</span>
              CONTATO
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
