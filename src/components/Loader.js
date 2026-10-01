"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onComplete }) {
  const [phase, setPhase] = useState("init");

  useEffect(() => {
    // 0.5s: show first line
    const t1 = setTimeout(() => setPhase("line1"), 500);
    // 1.5s: show second line
    const t2 = setTimeout(() => setPhase("line2"), 1500);
    // 3.5s: start fade out
    const t3 = setTimeout(() => setPhase("out"), 3000);
    // 4.2s: complete and unmount
    const t4 = setTimeout(() => onComplete(), 3700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "out" && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#050505] overflow-hidden"
        >
          <div className="font-mono text-xs md:text-sm text-mastim-red flex flex-col items-center gap-2 tracking-widest uppercase">
            <AnimatePresence>
              {(phase === "line1" || phase === "line2") && (
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  Identidade Verificada.
                </motion.span>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {phase === "line2" && (
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  Licença Criativa: Ativa.
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
