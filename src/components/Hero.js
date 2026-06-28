"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default function Hero() {
  return (
    <section className="relative w-full bg-transparent">
      {/* Scrolling Content */}
      <div className="relative z-10">
        
        {/* Opening Screen */}
        <div className="min-h-screen flex flex-col items-center justify-center px-6">
          <div className="flex flex-col items-center text-center max-w-4xl">
            
            <motion.h1 
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
              className="text-6xl md:text-8xl lg:text-9xl font-medium text-white tracking-tighter mb-8"
            >
              MASTIM
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 1.5 }}
              className="text-[#A6A6A6] text-lg md:text-2xl font-light leading-relaxed max-w-2xl mb-16"
            >
              Construindo um ecossistema onde tecnologia, criatividade e propósito se encontram.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 2.5 }}
              className="flex items-center gap-8 md:gap-16 opacity-80"
            >
              <a href="#core" className="text-[#666666] text-[10px] md:text-xs uppercase font-mono tracking-[0.3em] hover:text-[#E10613] transition-colors duration-500 flex items-center gap-2">
                <span className="opacity-40">[</span>
                EXPLORAR
                <span className="opacity-40">]</span>
              </a>
              <a href="https://wa.me/5511940634737" target="_blank" rel="noopener noreferrer" className="text-[#666666] text-[10px] md:text-xs uppercase font-mono tracking-[0.3em] hover:text-white transition-colors duration-500 flex items-center gap-2">
                <span className="opacity-40">/</span>
                CONTATO
              </a>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
