"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LivingGrid, NoiseOverlay } from "@/components/BackgroundElements";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import About from "@/components/About";
import Ecosystem from "@/components/Ecosystem";
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
    // Prevent native scroll on body while loading as fallback
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
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
