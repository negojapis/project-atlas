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
  const lenis = useLenis();

  // Stop Lenis scroll while loading
  useEffect(() => {
    if (lenis) {
      if (isLoading) {
        lenis.stop();
      } else {
        lenis.start();
      }
    }
  }, [lenis, isLoading]);

  useEffect(() => {
    // Rely only on Lenis for scroll locking, remove body manipulation to avoid getting stuck
  }, [isLoading]);

  return (
    <main className="relative bg-[#050505] text-white selection:bg-[#E10613] selection:text-white">
      {/* Backgrounds */}
      <LivingGrid />
      <NoiseOverlay />

      {/* Cinematic Loader */}
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      {/* Main Content */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="flex flex-col"
          >
            <Hero />
            <Manifesto />
            <About />
            <MastimCore />
            <Ecosystem />
            <Timeline />
            <Philosophy />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
