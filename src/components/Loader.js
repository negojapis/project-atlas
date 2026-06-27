"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "Curiosidade.",
  "Construção.",
  "Visão.",
  "Ecossistema.",
  "Legado."
];

export default function Loader({ onComplete }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Muito mais lento: 2.5s por palavra
    if (step < words.length) {
      const timer = setTimeout(() => {
        setStep(s => s + 1);
      }, 2500); 
      return () => clearTimeout(timer);
    } else {
      // Após "Legado.", espera mais 3 segundos antes do Hero
      const timer = setTimeout(() => {
        onComplete();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [step, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
      >
        <div className="flex items-center justify-center h-full w-full">
          <AnimatePresence mode="wait">
            {step < words.length && (
              <motion.h2
                key={step}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className={`text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight absolute ${
                  step === words.length - 1 ? "text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" : "text-[#A6A6A6]"
                }`}
              >
                {words[step]}
              </motion.h2>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
