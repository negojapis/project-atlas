"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default function Hero() {
    <section className="relative w-full bg-[#050505]">
      
      {/* Sticky Background */}
      <div className="sticky top-0 w-full h-screen overflow-hidden z-0">
        <DottedSurface className="w-full h-full opacity-60" />
        
        {/* Core Glow Breathing */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.03, 0.05, 0.03],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-[#E10613] rounded-full blur-[120px]"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/20 to-[#050505]" />
      </div>

      {/* Scrolling Content */}
      <div className="relative z-10 -mt-[100vh]">
        
        {/* Opening Screen */}
        <div className="min-h-screen flex flex-col items-center justify-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
            className="flex flex-col items-center text-center max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight mb-16 leading-[1.1]">
              Toda grande construção <br/>começa com curiosidade.
            </h1>
            
            <div className="flex items-center gap-6 md:gap-12 opacity-80">
              <a href="#core" className="text-[#777777] text-xs uppercase font-mono tracking-[0.2em] hover:text-white transition-colors duration-300">Explorar ecossistema</a>
              <span className="w-1 h-1 bg-[#333333] rounded-full"></span>
              <a href="https://wa.me/5511940634737" target="_blank" rel="noopener noreferrer" className="text-[#777777] text-xs uppercase font-mono tracking-[0.2em] hover:text-white transition-colors duration-300">Falar comigo</a>
            </div>
          </motion.div>
        </div>

        {/* Manifesto Sequence */}
        <div className="flex flex-col items-center justify-center w-full pb-32">
          {["Curiosidade.", "Construção.", "Conexão.", "Ecossistema.", "Legado."].map((word, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-30%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="min-h-[60vh] flex items-center justify-center w-full px-6"
            >
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight">
                {word}
              </h2>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
