"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LivingGrid, NoiseOverlay } from "@/components/BackgroundElements";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import About from "@/components/About";
import Ecosystem from "@/components/Ecosystem";
import MastimCore from "@/components/MastimCore";
import Timeline from "@/components/Timeline";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";
import { useLenis } from "lenis/react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Removido o bloqueio forçado do Lenis para garantir que o scroll nunca quebre.

  return (
    <main className="relative bg-[#050505] text-white selection:bg-[#E10613] selection:text-white">
      {/* Backgrounds */}
      <LivingGrid />
      <NoiseOverlay />

      {/* Cinematic Loader */}
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      {/* Main Content ALWAYS rendered so Lenis can calculate height */}
      <div className="flex flex-col">
        <Hero />
        <Manifesto />
        <About />
        <MastimCore />
        <Ecosystem />
        <Timeline />
        <Philosophy />
        <Footer />
      </div>
    </main>
  );
}
