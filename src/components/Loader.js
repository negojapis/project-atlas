"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onComplete }) {
  const [phase, setPhase] = useState("silence"); // silence, mark, text, signature, out

  useEffect(() => {
    // 0 to 500ms: Silence
    const t1 = setTimeout(() => setPhase("mark"), 500);
    
    // 0.5s to 2.0s: Mark fades in and is contemplated (1.5s total)
    const t2 = setTimeout(() => setPhase("text"), 2000);
    
    // 2.0s to 5.0s: Text fades in and stays (3.0s total)
    const t3 = setTimeout(() => setPhase("signature"), 5000);
    
    // 5.0s to 5.8s: Text fades out, Mark breathes alone (0.8s total)
    const t4 = setTimeout(() => setPhase("out"), 5800);
    
    // 6.5s: Loader completely unmounts (after 0.7s exit transition)
    const t5 = setTimeout(() => onComplete(), 6500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "out" && (
        <motion.div
          key="prologue"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
        >
          <div className="flex flex-col items-center justify-center w-full px-6 relative h-[60vh]">
            
            {/* Verse */}
            <AnimatePresence>
              {phase === "text" && (
                <motion.div
                  key="verse"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }} // Fade = contemplação
                  className="flex flex-col items-center justify-center text-center space-y-8 w-full h-full"
                >
                  <p className="text-white text-2xl md:text-4xl lg:text-5xl font-serif font-light leading-relaxed tracking-wide opacity-90 w-full px-4 md:px-12">
                    "Tudo tem o seu tempo determinado, e há tempo para todo propósito debaixo do céu."
                  </p>
                  <span className="text-[#666666] text-sm md:text-base font-sans font-light tracking-[0.3em] uppercase">
                    — Eclesiastes 3:1
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
