"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-end overflow-hidden bg-[#050505] px-6 pb-24 md:pb-32">
      
      <DottedSurface className="w-full h-full opacity-60" />

      {/* Background Layers (Subtle) */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
        {/* Core Glow Breathing */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-[#E10613] rounded-full blur-[120px]"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        className="z-10 flex flex-col items-center text-center max-w-4xl mt-12"
      >
        {/* Main Text */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
          Toda grande construção <br/>começa com curiosidade.
        </h1>

        {/* Subtext */}
        <p className="text-[#A6A6A6] text-sm md:text-base tracking-[0.1em] uppercase max-w-2xl mx-auto mb-16 leading-relaxed">
          Tecnologia, criatividade e visão conectando ideias, pessoas e projetos.
        </p>

        {/* Interface Commands (Buttons) */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <a
            href="#core"
            className="relative px-8 py-3 text-[#A6A6A6] text-xs uppercase font-mono tracking-[0.2em] hover:text-white transition-colors duration-300 group flex items-center gap-3"
          >
            <span className="absolute inset-0 border border-[#252525] group-hover:border-[#E10613]/30 transition-colors duration-300" />
            <div className="w-1.5 h-1.5 bg-[#E10613] opacity-80 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_1px_rgba(225,6,19,0.5)]" />
            Explorar ecossistema
          </a>
          <a
            href="https://wa.me/5511940634737"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-8 py-3 text-[#555555] text-xs uppercase font-mono tracking-[0.2em] hover:text-white transition-colors duration-300 group flex items-center gap-3"
          >
            <span className="absolute inset-0 border border-transparent group-hover:border-[#252525] transition-colors duration-300" />
            <div className="w-1.5 h-1.5 bg-[#252525] group-hover:bg-[#F5F5F5] transition-colors duration-300" />
            Falar no WhatsApp
          </a>
        </div>
      </motion.div>
      
    </section>
  );
}
