"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import HeroTitle from "@/components/ui/HeroTitle";
import SectionSubtitle from "@/components/ui/SectionSubtitle";
import Command from "@/components/ui/Command";

export default function Hero() {
  const [timeData, setTimeData] = useState({ time: '--:--:-- BRT', date: '--.--.----' });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      
      const timeFormatter = new Intl.DateTimeFormat('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      
      const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });

      setTimeData({
        time: timeFormatter.format(now) + ' BRT',
        date: dateFormatter.format(now).replace(/\//g, '.')
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[100svh] bg-transparent overflow-hidden flex flex-col items-center justify-center">

      {/* Coordenadas e Marcas Técnicas - Somente na Hero agora */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 2 }}
        className="absolute top-6 left-6 md:top-12 md:left-12 font-mono text-[9px] tracking-[0.3em] text-white flex flex-col gap-1 w-32 z-10"
      >
        <span>SYS.TIME.BRT</span>
        <span>{timeData.time}</span>
        <span>{timeData.date}</span>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, delay: 2 }}
        className="absolute bottom-6 right-6 md:bottom-12 md:right-12 font-mono text-[9px] tracking-[0.3em] text-white z-10 hidden md:block"
      >
        <span>ATLAS // v8.0.0</span>
      </motion.div>

      <div className="relative z-content w-full h-full flex flex-col items-center justify-center px-6">

        {/* MASTIM (A Marca - Domina a tela) */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", scale: 0.98 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          className="w-full flex justify-center -translate-y-8 md:-translate-y-16"
        >
          <HeroTitle className="text-[18vw] md:text-[14vw] lg:text-[15vw] font-medium tracking-tighter leading-none select-none mb-4 md:mb-0 whitespace-nowrap transition-all duration-700 hover:drop-shadow-[0_0_40px_rgba(255,255,255,0.6)] cursor-default">
            MASTIM
          </HeroTitle>
        </motion.div>

        {/* Subtitle - Próximo ao MASTIM */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 2.8 }}
          className="-translate-y-8 md:-translate-y-16 mt-2 md:mt-4"
        >
          <SectionSubtitle className="text-center tracking-[0.25em] md:tracking-[0.5em] text-[9px] sm:text-[10px] md:text-sm text-text-tertiary whitespace-nowrap">
            O futuro continua sendo construído.
          </SectionSubtitle>
        </motion.div>

        {/* Thumb Zone - Fixado na base, respeitando safe-area */}
        <div className="absolute bottom-[calc(2rem+env(safe-area-inset-bottom))] md:bottom-24 w-full flex flex-col items-center gap-10 md:gap-12">



          {/* Commands (Touch Targets > 48px, Tap-down motion) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 4.6 }}
            className="flex items-center gap-8 md:gap-24 opacity-80"
          >
            <Command href="#core" className="gap-3">
              <span className="opacity-40 md:group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-normal md:group-hover:translate-x-1 group-active:translate-x-1">→</span>
              EXPLORAR
            </Command>
            <Command href="https://wa.me/5511940634737" target="_blank" rel="noopener noreferrer" className="gap-3">
              <span className="opacity-40 md:group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-normal md:group-hover:translate-x-1 group-active:translate-x-1">→</span>
              CONTATO
            </Command>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
