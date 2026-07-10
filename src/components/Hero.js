"use client";

import { motion } from "framer-motion";
import HeroTitle from "@/components/ui/HeroTitle";
import SectionSubtitle from "@/components/ui/SectionSubtitle";
import Command from "@/components/ui/Command";

export default function Hero() {
  return (
    <section className="relative w-full h-[100svh] bg-transparent overflow-hidden flex flex-col items-center justify-center">



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
          <SectionSubtitle className="text-center tracking-[0.5em] text-xs md:text-sm text-text-tertiary whitespace-nowrap">
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
