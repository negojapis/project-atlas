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
  { name: "Scripts", angle: 126 },
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

      <div className="relative w-full max-w-[1000px] h-[500px] md:h-[800px] flex items-center justify-center">
        
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
                  stroke={isHovered ? "#E10613" : "#222"}
                  strokeWidth={isHovered ? "1" : "0.5"}
                  className="transition-all duration-700"
                />
                {/* Slow pulse dots along the line */}
                <circle r="1.5" fill={isHovered ? "#E10613" : "#555"} className="transition-all duration-700 opacity-50">
                  <animateMotion
                    dur={isHovered ? "2s" : "4s"}
                    repeatCount="indefinite"
                    path={`M 0 0 L ${pos.x} ${pos.y}`}
                  />
                </circle>
              </g>
            );
          })}
        </svg>

        {/* Central Node (Core Mark) */}
        <div className="absolute z-10 flex flex-col items-center justify-center">
          <div className="relative w-24 h-24 md:w-40 md:h-40 rounded-full flex items-center justify-center mb-4">
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-[#E10613] rounded-full blur-[20px] md:blur-[40px]"
            />
            <Image
              src="/foto.3.png"
              alt="Mastim Core"
              fill
              className="object-contain drop-shadow-[0_0_15px_rgba(225,6,19,0.3)] z-10 p-2"
            />
          </div>
          <span className="text-[#A6A6A6] text-[10px] md:text-xs uppercase font-mono tracking-[0.4em] z-10">Mastim</span>
        </div>

        {/* Orbiting Project Nodes */}
        {projects.map((proj, i) => {
          const pos = getPosition(proj.angle, baseDistance);
          const isHovered = hoveredIndex === i;

          return (
            <div
              key={i}
              className="absolute z-20 flex flex-col items-center justify-center cursor-pointer group"
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
                <div className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full mb-4 transition-all duration-500 ${isHovered ? 'bg-[#E10613] shadow-[0_0_12px_2px_rgba(225,6,19,0.8)] scale-150' : 'bg-[#333] border border-[#111]'}`} />
                <span className={`text-[10px] md:text-[11px] uppercase font-mono tracking-[0.2em] whitespace-nowrap transition-colors duration-500 absolute top-5 md:top-6 ${isHovered ? 'text-white' : 'text-[#555]'}`}>
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
