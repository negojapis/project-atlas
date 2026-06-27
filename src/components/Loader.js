"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const sequenceTexts = [
  "Toda grande construção começa com curiosidade.",
  "Ideias viram projetos.",
  "Projetos viram ecossistemas.",
];

export default function Loader({ onComplete }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Choreography sequence
    // 0: Initial silence (2s)
    // 1: Pixels + Logo fade in (3s)
    // 2: Logo breathes (2s)
    // 3: Phrase 1 (3s)
    // 4: Phrase 2 (3s)
    // 5: Phrase 3 (3s)
    // 6: Fade out (1.5s)
    
    const timings = [
      2000, // step 0 -> 1 (silence)
      4000, // step 1 -> 2 (logo appears and breathes)
      2000, // step 2 -> 3 (pause before text)
      3500, // step 3 -> 4 (phrase 1)
      3500, // step 4 -> 5 (phrase 2)
      3500, // step 5 -> 6 (phrase 3)
      1500, // step 6 -> 7 (end)
    ];

    if (step < timings.length) {
      const timer = setTimeout(() => {
        setStep(s => s + 1);
      }, timings[step]);
      return () => clearTimeout(timer);
    } else {
      onComplete();
    }
  }, [step, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 2, ease: "easeInOut" } }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505] overflow-hidden"
      >
        {/* Logo Sequence (Steps 1 to 6) */}
        <AnimatePresence>
          {step >= 1 && step < 6 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="absolute flex flex-col items-center justify-center"
            >
              {/* Particle Pixels forming */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2 }}
                  className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjRTEwNjEzIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-50 w-64 h-64 mix-blend-screen"
                />
              )}

              {/* Core Spark Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-24 h-24 bg-[#E10613] rounded-full blur-[50px] z-0"
              />

              <div className="relative z-10 w-48 h-48 md:w-64 md:h-64">
                <Image
                  src="/icon.png"
                  alt="Mastim Core"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Text Sequence (Steps 3 to 5) */}
        <div className="absolute flex flex-col items-center justify-center px-6 text-center z-20 mt-64">
          <AnimatePresence mode="wait">
            {step >= 3 && step <= 5 && (
              <motion.p
                key={step}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="text-[#A6A6A6] text-sm md:text-base font-mono tracking-widest max-w-lg leading-relaxed uppercase"
              >
                {sequenceTexts[step - 3]}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
