"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MastimCore from "@/components/MastimCore";
import Manifesto from "@/components/Manifesto";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import Atmosphere from "@/components/Atmosphere";
import Loader from "@/components/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative min-h-screen bg-[#050505] text-white selection:bg-[#E10613] selection:text-white font-sans overflow-x-hidden">
      
      {/* Global Atmosphere (Identity before technology) */}
      <Atmosphere />

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
