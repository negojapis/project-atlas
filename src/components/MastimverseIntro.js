"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MastimverseIntro() {
  const containerRef = useRef(null);
  
  // Track the scroll from when it enters the screen until the sticky finishes
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // 0 to 0.4: component is scrolling into the screen
  // 0.4 to 1.0: component is sticky
  // Headline stays visible while words converge, fading out only when DIRECTION forms
  const headlineOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.8, 0.9], [0, 1, 1, 0]);
  const headlineY = useTransform(scrollYProgress, [0.1, 0.9], [100, -100]);

  // Words converge from 0.5 to 0.85
  const progress = useTransform(scrollYProgress, [0.5, 0.85], [0, 1]);

  const words = [
    { text: "CODE", startX: "-40vw", startY: "-30vh" },
    { text: "DESIGN", startX: "40vw", startY: "-20vh" },
    { text: "ART", startX: "-30vw", startY: "30vh" },
    { text: "MOTION", startX: "30vw", startY: "40vh" },
    { text: "PHOTO", startX: "0vw", startY: "-40vh" },
    { text: "MUSIC", startX: "-20vw", startY: "0vh" },
    { text: "BRANDING", startX: "20vw", startY: "0vh" },
    { text: "AI", startX: "0vw", startY: "40vh" },
  ];

  // At progress = 1 (scrollYProgress = 0.85), words disappear and DIRECTION appears
  const wordsOpacity = useTransform(progress, [0, 0.8, 1], [0, 1, 0]);
  const directionOpacity = useTransform(progress, [0.9, 1], [0, 1]);
  const directionScale = useTransform(progress, [0.8, 1], [0.8, 1]);

  return (
    <section 
      id="mastimverse" 
      ref={containerRef}
      className="relative w-full h-[250vh] bg-bg-base overflow-hidden"
    >
      {/* Sticky container to keep content in viewport while scrolling through the 200vh */}
      <div className="sticky top-0 left-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Headline */}
        <motion.div 
          style={{ opacity: headlineOpacity, y: headlineY }}
          className="absolute top-1/4 left-0 w-full px-6 flex flex-col items-center text-center z-10"
        >
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 text-text-primary">
            I CREATE BETWEEN WORLDS.
          </h2>
          <div className="font-serif italic text-lg md:text-2xl text-text-secondary flex flex-wrap justify-center gap-4 max-w-2xl">
            <span>Tecnologia.</span>
            <span>Arte.</span>
            <span>Cultura.</span>
            <span>Imagem.</span>
            <span className="w-full mt-4 text-mastim-red">Tudo conectado pela mesma visão.</span>
          </div>
        </motion.div>

        {/* Converging Words */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          {words.map((word, index) => {
            const x = useTransform(progress, [0, 1], [word.startX, "0vw"]);
            const y = useTransform(progress, [0, 1], [word.startY, "0vh"]);
            const scale = useTransform(progress, [0, 1], [2, 0.5]);
            const blur = useTransform(progress, [0, 0.8, 1], ["10px", "0px", "10px"]);

            return (
              <motion.div
                key={index}
                style={{
                  x,
                  y,
                  scale,
                  opacity: wordsOpacity,
                  filter: blur
                }}
                className="absolute font-mono text-2xl md:text-5xl font-bold text-white/30 mix-blend-difference"
              >
                {word.text}
              </motion.div>
            );
          })}

          {/* Final DIRECTION Word */}
          <motion.div
            style={{
              opacity: directionOpacity,
              scale: directionScale,
            }}
            className="absolute font-sans text-6xl md:text-9xl font-black text-mastim-offwhite tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            DIRECTION.
          </motion.div>
        </div>

      </div>
    </section>
  );
}
