"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const sequenceTexts = [
  "Toda grande construção começa com curiosidade.",
  "Ideias viram projetos.",
  "Projetos viram ecossistemas.",
];

export default function Loader({ onComplete }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step < sequenceTexts.length) {
      const timer = setTimeout(() => {
        setStep(step + 1);
      }, 1800); // 1.8s per text
      return () => clearTimeout(timer);
    } else if (step === sequenceTexts.length) {
      // Transition to Logo + Spark
      const timer = setTimeout(() => {
        setStep(step + 1);
      }, 2000);
      return () => clearTimeout(timer);
    } else if (step === sequenceTexts.length + 1) {
      // End loader
      const timer = setTimeout(() => {
        onComplete();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [step, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]"
      >
        {/* Sequence Texts */}
        <div className="absolute flex flex-col items-center justify-center px-6 text-center">
          <AnimatePresence mode="wait">
            {step < sequenceTexts.length && (
              <motion.p
                key={step}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-[#A6A6A6] text-sm md:text-base tracking-widest uppercase font-mono"
              >
                {sequenceTexts[step]}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Logo and Core Spark Formation */}
        <AnimatePresence>
          {step >= sequenceTexts.length && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="flex flex-col items-center justify-center gap-6"
            >
              {/* Core Spark */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.8] }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                className="w-2 h-2 rounded-full bg-[#E10613] shadow-[0_0_20px_4px_#E10613]"
              />
              {/* MASTIM Core Mark */}
              <motion.h1
                initial={{ opacity: 0, letterSpacing: "1em", filter: "blur(10px)" }}
                animate={{ opacity: 1, letterSpacing: "0.2em", filter: "blur(0px)" }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                className="text-4xl md:text-6xl font-bold text-white tracking-widest"
              >
                MASTIM
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
