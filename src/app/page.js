"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LivingGrid, NoiseOverlay } from "@/components/BackgroundElements";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Ecosystem from "@/components/Ecosystem";
import MastimCore from "@/components/MastimCore";
import Manifesto from "@/components/Manifesto";
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
      </div>

      {/* Backgrounds */}
      <LivingGrid />
      <NoiseOverlay />

      {/* Cinematic Loader */}
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      <div className="relative z-10 flex flex-col">
        <Hero />
        <MastimCore />
        <Manifesto />
        <Timeline />
        <About />
        <Footer />
      </div>
    </main>
  );
}
