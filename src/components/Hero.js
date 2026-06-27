"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 1.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.5, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505] px-6">
      
      {/* Background Layers */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
        {/* Living Grid & Noise are globally provided, but we can add Neural Links here */}
        <svg className="absolute w-[150%] h-[150%] opacity-10" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 500 Q 500 200, 1000 500 T 2000 500" stroke="#E10613" strokeWidth="0.5" fill="none" className="animate-pulse" />
          <path d="M 0 300 Q 500 800, 1000 300 T 2000 300" stroke="#F5F5F5" strokeWidth="0.5" fill="none" opacity="0.5" />
        </svg>

        {/* Core Glow */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[#E10613] rounded-full blur-[150px]"
        />
        
        {/* Slow Particles */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxIiBmaWxsPSIjRTEwNjEzIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-30 animate-[pulse_10s_ease-in-out_infinite]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 flex flex-col items-center text-center max-w-3xl mt-12"
      >
        {/* Core Mark */}
        <motion.div variants={itemVariants} className="relative w-32 h-32 md:w-40 md:h-40 mb-16">
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/icon.png"
              alt="Mastim Core"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Main Text */}
        <motion.h1 
          variants={itemVariants}
          className="text-3xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-8 leading-[1.1]"
        >
          Toda grande construção <br/>começa com curiosidade.
        </motion.h1>

        {/* Secondary Text */}
        <motion.p 
          variants={itemVariants}
          className="text-[#A6A6A6] text-base md:text-lg max-w-xl mx-auto mb-16 leading-relaxed"
        >
          Tecnologia, criatividade e visão conectando ideias, pessoas e projetos em um único ecossistema.
        </motion.p>

        {/* Tertiary Text */}
        <motion.p 
          variants={itemVariants}
          className="text-[#555555] font-mono text-xs uppercase tracking-[0.2em] mb-20"
        >
          Felipe Gonçalves / Mastim
        </motion.p>

        {/* Buttons (Subtle) */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6">
          <a
            href="#ecosystem"
            className="relative px-6 py-3 text-[#A6A6A6] text-sm uppercase font-mono tracking-widest hover:text-white transition-colors duration-500 group"
          >
            <span className="absolute inset-0 border border-[#252525] rounded-full group-hover:border-[#E10613]/50 transition-colors duration-500" />
            Explorar ecossistema
          </a>
          <a
            href="https://wa.me/5511940634737"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-6 py-3 text-[#555555] text-sm uppercase font-mono tracking-widest hover:text-white transition-colors duration-500 group"
          >
            Falar no WhatsApp
          </a>
        </motion.div>
      </motion.div>

      {/* Transition: Chapter 01 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 6, duration: 2 }}
        className="absolute bottom-12 flex flex-col items-center gap-2 z-10"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-[#252525] mb-4" />
        <span className="text-[#E10613] font-mono text-[10px] uppercase tracking-[0.3em]">
          Chapter 01
        </span>
        <span className="text-[#555555] font-mono text-[10px] uppercase tracking-[0.3em]">
          The Beginning
        </span>
      </motion.div>

    </section>
  );
}
