"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader({ onComplete }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Choreography sequence - BUILD 003
    // 0: Initial silence (3s)
    // 1: Minimal pixels appear (2.5s)
    // 2: Metallic structure + Spark + Breathes (4s)
    // 3: "Toda grande construção" (2.5s)
    // 4: "começa" (2s)
    // 5: "com curiosidade." (4s)
    // 6: Final short silence (1.5s)
    // 7: Fade out (2s) -> triggers onComplete
    
    const timings = [
      3000, // 0 -> 1
      2500, // 1 -> 2
      4000, // 2 -> 3
      2500, // 3 -> 4
      2000, // 4 -> 5
      4000, // 5 -> 6
      1500, // 6 -> 7
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
        {/* Core Mark Assembly (Steps 1 and 2) */}
        <AnimatePresence>
          {step >= 1 && step < 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
              transition={{ duration: 4, ease: "easeOut" }}
              className="absolute flex flex-col items-center justify-center"
            >
              {/* Step 1: Pixels only */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, filter: "blur(5px)" }}
                  animate={{ opacity: 0.5, filter: "blur(0px)" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2.5 }}
                  className="w-48 h-48 md:w-64 md:h-64 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjRTEwNjEzIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-50 mix-blend-screen"
                />
              )}

              {/* Step 2: Metallic Structure + Spark */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 3, ease: "easeOut" }}
                  className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center"
                >
                  {/* Core Spark Ignite */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.4, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-24 h-24 bg-[#E10613] rounded-full blur-[40px] z-0"
                  />
                  <Image
                    src="/icon.png"
                    alt="Mastim Core"
                    fill
                    className="object-contain z-10"
                    priority
                  />
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Text Sequence (Steps 3 to 5) */}
        <div className="absolute flex flex-col items-center justify-center px-6 text-center z-20">
          <AnimatePresence mode="wait">
            {step === 3 && (
              <motion.p
                key="p1"
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="text-[#A6A6A6] text-sm md:text-base font-mono tracking-[0.2em] uppercase"
              >
                Toda grande construção
              </motion.p>
            )}
            {step === 4 && (
              <motion.p
                key="p2"
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="text-[#A6A6A6] text-sm md:text-base font-mono tracking-[0.2em] uppercase"
              >
                começa
              </motion.p>
            )}
            {step === 5 && (
              <motion.p
                key="p3"
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="text-white text-sm md:text-base font-mono tracking-[0.2em] uppercase"
              >
                com curiosidade.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
