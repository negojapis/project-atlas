"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import CreativeLicenseCard from "@/components/ui/CreativeLicenseCard";

export default function Hero() {
  // Scroll animations
  const { scrollY } = useScroll();
  
  // Archiving effect for the card
  const cardScale = useTransform(scrollY, [0, 400], [1, 0.4]);
  const cardY = useTransform(scrollY, [0, 400], [0, -300]);
  const cardRotateX = useTransform(scrollY, [0, 400], [0, 60]);
  const cardOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Fade out other hero elements
  const heroFade = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative w-full h-[100svh] bg-bg-base overflow-hidden flex flex-col items-center justify-center">
      
      {/* Main Hero Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full flex flex-col items-center justify-center"
      >
        {/* Background Gigantic Text (Mastim) */}
        <motion.div 
          style={{ opacity: heroFade }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0"
        >
          {/* MASTIM */}
          <h1 className="text-[22vw] font-black text-white/30 tracking-tighter leading-none whitespace-nowrap drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] uppercase mix-blend-overlay">
            MASTIM
          </h1>
        </motion.div>

        <div className="relative z-20 w-full h-full flex flex-col items-center justify-center px-6 [perspective:1000px]">
          
          {/* Main Card Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.2, 1, 0.2, 1], delay: 0.2 }}
            style={{ 
              scale: cardScale,
              y: cardY,
              rotateX: cardRotateX,
              opacity: cardOpacity,
              transformStyle: "preserve-3d"
            }}
            className="w-full flex justify-center mb-8 origin-top"
          >
            <CreativeLicenseCard />
          </motion.div>

          {/* Subtitles & Descriptions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            style={{ opacity: heroFade }}
            className="flex flex-col items-center gap-6 text-center mt-4"
          >
            <div className="font-mono text-[9px] md:text-xs tracking-[0.3em] text-text-secondary flex flex-col md:flex-row gap-2 md:gap-4 uppercase">
              <span>Diretor Criativo</span>
              <span className="hidden md:inline">•</span>
              <span>Desenvolvedor</span>
              <span className="hidden md:inline">•</span>
              <span>Designer Visual</span>
              <span className="hidden md:inline">•</span>
              <span>Criativo Multidisciplinar</span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
            style={{ opacity: heroFade }}
            className="absolute bottom-12"
          >
            <a 
              href="#mastimverse" 
              className="font-mono text-[10px] tracking-widest text-mastim-red hover:text-text-primary transition-colors duration-300 flex flex-col items-center gap-2 group"
            >
              ENTRAR NO MASTIMVERSE
              <motion.span 
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="group-hover:text-mastim-red text-text-secondary transition-colors"
              >
                ↓
              </motion.span>
            </a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
