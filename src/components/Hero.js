"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505] px-6">
      
      {/* Background Layers (The Living System) */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
        
        {/* Core Glow Breathing */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-[#E10613] rounded-full blur-[150px]"
        />

        {/* Orbiting Particles */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute w-[150%] h-[150%] opacity-20"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+CjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxIiBmaWxsPSIjRTEwNjEzIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8Y2lyY2xlIGN4PSI0NSIgY3k9IjQwIiByPSIwLjUiIGZpbGw9IiNBNkE2QTYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+Cjwvc3ZnPg==')] mix-blend-screen" />
        </motion.div>
        
        {/* Subtle Neural Links */}
        <svg className="absolute w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 500 Q 500 400, 1000 500 T 2000 500" stroke="#F5F5F5" strokeWidth="1" fill="none" />
          <path d="M 0 600 Q 500 700, 1000 600 T 2000 600" stroke="#E10613" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="z-10 flex flex-col items-center text-center max-w-4xl mt-8">
        
        {/* Core Mark Protagonist */}
        <motion.div 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 4, ease: "easeOut", delay: 2 }} // Starts after Loader fades
          className="relative w-32 h-32 md:w-48 md:h-48 mb-20"
        >
          <motion.div
            animate={{ scale: [1, 1.02, 1], filter: ["blur(0px)", "blur(1px)", "blur(0px)"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/icon.png"
              alt="Mastim Core"
              fill
              className="object-contain drop-shadow-[0_0_15px_rgba(225,6,19,0.15)]"
              priority
            />
          </motion.div>
          {/* Micro Pixels on Edges */}
          <motion.div 
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNBNkE2QTYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+Cjwvc3ZnPg==')] opacity-20 pointer-events-none rounded-full mask-image-[radial-gradient(ellipse_at_center,transparent_50%,black_100%)]"
          />
        </motion.div>

        {/* Fragmented Philosophy Text */}
        <div className="mb-16 flex flex-col items-center justify-center space-y-2 md:space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 2, ease: "easeOut", delay: 4 }}
            className="text-3xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1]"
          >
            Toda grande construção
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 2, ease: "easeOut", delay: 6.5 }}
            className="text-3xl md:text-5xl lg:text-6xl font-medium text-[#A6A6A6] tracking-tight leading-[1.1]"
          >
            começa
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 3, ease: "easeOut", delay: 8.5 }}
            className="text-3xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1]"
          >
            com curiosidade.
          </motion.h1>
        </div>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, filter: "blur(5px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 2, ease: "easeOut", delay: 11 }}
          className="text-[#A6A6A6] text-sm md:text-base tracking-[0.2em] font-mono uppercase mb-16"
        >
          Construindo ecossistemas digitais.
        </motion.p>

        {/* Brand / Name */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 12 }}
          className="text-[#555555] font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] mb-20"
        >
          Felipe Gonçalves / Mastim
        </motion.p>

        {/* Interface Commands (Buttons) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 13 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a
            href="#ecosystem"
            className="relative px-8 py-3 text-[#A6A6A6] text-xs uppercase font-mono tracking-[0.2em] hover:text-white transition-colors duration-500 group flex items-center gap-3"
          >
            <span className="absolute inset-0 border border-[#252525] group-hover:border-[#E10613]/30 transition-colors duration-500" />
            <div className="w-1.5 h-1.5 bg-[#E10613] opacity-50 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_8px_1px_#E10613]" />
            Explorar ecossistema
          </a>
          <a
            href="https://wa.me/5511940634737"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-8 py-3 text-[#555555] text-xs uppercase font-mono tracking-[0.2em] hover:text-white transition-colors duration-500 group flex items-center gap-3"
          >
            <span className="absolute inset-0 border border-transparent group-hover:border-[#252525] transition-colors duration-500" />
            <div className="w-1.5 h-1.5 bg-[#555555] opacity-50 group-hover:opacity-100 group-hover:bg-[#F5F5F5] transition-all duration-500" />
            Abrir contato
          </a>
        </motion.div>
      </div>

      {/* Chapter 01 Transition */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 15, duration: 3 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 z-10"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#252525] to-transparent mb-4" />
        <span className="text-[#E10613] font-mono text-[9px] uppercase tracking-[0.4em]">
          Chapter 01
        </span>
        <span className="text-[#555555] font-mono text-[9px] uppercase tracking-[0.4em]">
          The Beginning
        </span>
      </motion.div>
      
    </section>
  );
}
