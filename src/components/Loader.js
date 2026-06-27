"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 3 seconds maximum loader
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000); // 1s for fade out
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
        >
          {/* Logo Assembly */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="relative w-32 h-32 md:w-48 md:h-48 mb-8 flex items-center justify-center"
          >
            {/* Core Spark */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute w-16 h-16 bg-[#E10613] rounded-full blur-[30px] z-0"
            />
            <Image
              src="/icon.png"
              alt="Mastim Core"
              fill
              className="object-contain z-10"
              priority
            />
          </motion.div>

          {/* Single Phrase */}
          <motion.p
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            className="text-[#A6A6A6] text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-center px-6"
          >
            Toda grande construção começa com curiosidade.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
