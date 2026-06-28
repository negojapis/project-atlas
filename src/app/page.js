"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LivingGrid, NoiseOverlay } from "@/components/BackgroundElements";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Ecosystem from "@/components/Ecosystem";
import MastimCore from "@/components/MastimCore";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import { useLenis } from "lenis/react";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Removido o bloqueio forçado do Lenis para garantir que o scroll nunca quebre.

  return (
    <main className="relative min-h-screen bg-[#050505] text-white selection:bg-[#E10613] selection:text-white font-sans overflow-x-hidden">
      
      {/* Global Fixed Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <DottedSurface className="w-full h-full opacity-60" />
        
        {/* Core Glow Breathing globally */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center mix-blend-screen">
          <div className="w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-[#E10613] rounded-full blur-[150px] opacity-[0.03] animate-pulse" />
        </div>
      </div>

      {/* Backgrounds */}
      <LivingGrid />
      <NoiseOverlay />

      {/* Cinematic Loader */}
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      {/* Main Content ALWAYS rendered so Lenis can calculate height */}
      <div className="relative z-10 flex flex-col">
        <Hero />
        <MastimCore />
        <Ecosystem />
        <Timeline />
        <About />
        <Footer />
      </div>
    </main>
  );
}
