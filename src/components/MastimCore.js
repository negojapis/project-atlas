"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({ 
  subsets: ["latin"], 
  weight: "400" 
});

const projects = [
  { name: "Grace Code", angle: -90 },
  { name: "Divine Brew", angle: -18 },
  { name: "Mastimverse", angle: 54 },
  { name: "Mastim Scripts", angle: 126 },
  { name: "YouTube", angle: 198 },
];

export default function MastimCore() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Responsive distance
  const baseDistance = isMobile ? 140 : 300;

  const getPosition = (angle, distance) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: Math.cos(rad) * distance,
      y: Math.sin(rad) * distance,
    };
  };

  return (
    <section id="core" className="relative w-full flex flex-col items-center justify-center py-20 px-6 bg-[#050505] overflow-hidden">
      
      {/* High Quality Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/fundo-papel.jpg.png" 
          alt="Mastim Background" 
          fill 
          quality={100}
          className="object-cover object-center opacity-30 grayscale" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/50 to-[#050505]" />
      </div>
      <div className="mb-16 md:mb-24 text-center z-20">
        <h2 className={`text-white text-3xl md:text-5xl flex items-center justify-center gap-6 mb-6 ${greatVibes.className}`}>
          <span className="w-12 md:w-24 h-[2px] bg-[#E10613]" />
          Mastim Core
          <span className="w-12 md:w-24 h-[2px] bg-[#E10613]" />
        </h2>
        <p className="text-[#777777] text-sm md:text-lg font-mono uppercase tracking-[0.3em]">Núcleo do Ecossistema</p>
      </div>

      <div className="relative w-full max-w-[1000px] h-[400px] md:h-[800px] flex items-center justify-center">
        
        {/* SVG Neural Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="-500 -500 1000 1000">
          {projects.map((proj, i) => {
            const pos = getPosition(proj.angle, baseDistance);
            const isHovered = hoveredIndex === i;
            return (
              <g key={i}>
                <line
                  x1="0"
                  y1="0"
                  x2={pos.x}
                  y2={pos.y}
                  stroke={isHovered ? "#E10613" : "#1a1a1a"}
                  strokeWidth={isHovered ? "2" : "1"}
                  className="transition-all duration-500"
                />
                {isHovered && (
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r="4"
                    fill="#E10613"
                    className="animate-ping"
                  />
                )}
              </g>
            );
          })}
        </svg>

        {/* Central Node (Core Mark) */}
        <div className="absolute z-10 w-32 h-32 md:w-48 md:h-48 rounded-full flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[#E10613] rounded-full blur-[30px] md:blur-[60px]"
          />
          <Image
            src="/icon.png"
            alt="Mastim Core"
            width={120}
            height={120}
            className="object-contain drop-shadow-[0_0_20px_rgba(225,6,19,0.5)] z-10 w-20 h-20 md:w-32 md:h-32"
          />
        </div>

        {/* Orbiting Project Nodes */}
        {projects.map((proj, i) => {
          const pos = getPosition(proj.angle, baseDistance);
          const isHovered = hoveredIndex === i;

          return (
            <div
              key={i}
              className="absolute z-20 flex flex-col items-center justify-center cursor-pointer"
              style={{ 
                left: '50%', 
                top: '50%',
                transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))` 
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="flex flex-col items-center justify-center"
              >
                <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full border mb-3 transition-colors duration-300 ${isHovered ? 'bg-[#E10613] border-[#E10613] shadow-[0_0_15px_3px_rgba(225,6,19,0.6)]' : 'bg-[#050505] border-[#555555]'}`} />
                <span className={`text-[10px] md:text-xs uppercase font-mono tracking-widest whitespace-nowrap transition-colors duration-300 absolute top-4 md:top-6 ${isHovered ? 'text-white' : 'text-[#777777]'}`}>
                  {proj.name}
                </span>
              </motion.div>
            </div>
          );
        })}
      </div>
      
    </section>
  );
}
