"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    // Generate a simple system time for the HUD
    const interval = setInterval(() => {
      const now = new Date();
      const timeString = now.toISOString().split("T")[1].split(".")[0];
      setTime(timeString + " UTC");
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      
      {/* HUD: System Data (Edges) */}
      <div className="absolute inset-0 p-6 md:p-12 pointer-events-none flex flex-col justify-between z-20">
        <div className="flex justify-between items-start text-[#A6A6A6] font-mono text-[10px] uppercase tracking-[0.3em]">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 2, delay: 1 }}
            className="flex items-center gap-3"
          >
            <div className="w-1.5 h-1.5 bg-[#E10613] rounded-full animate-pulse shadow-[0_0_8px_1px_#E10613]" />
            <span>Core: Online</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 2, delay: 1.2 }}
          >
            {time || "SYSTEM BOOT"}
          </motion.div>
        </div>

        <div className="flex justify-between items-end text-[#A6A6A6] font-mono text-[10px] uppercase tracking-[0.3em]">
          <motion.div
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 2, delay: 1.4 }}
          >
            LAT: -23.5505 | LNG: -46.6333
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 2, delay: 1.6 }}
          >
            Project Atlas v1.0
          </motion.div>
        </div>
      </div>

      {/* Core Mark Protagonist */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 3, ease: "easeOut", delay: 0.5 }}
        className="relative z-10 w-48 md:w-72 lg:w-96 aspect-square flex items-center justify-center"
      >
        {/* Core Pulse (Continuous Evolution) */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-[#E10613] rounded-full blur-[100px] pointer-events-none"
        />

        {/* The Core Mark Image */}
        <Image
          src="/icon.png"
          alt="Mastim Core"
          fill
          className="object-contain drop-shadow-[0_0_15px_rgba(225,6,19,0.2)]"
          priority
        />
      </motion.div>

      {/* Living Grid / Noise is globally provided by page.js */}
    </section>
  );
}
