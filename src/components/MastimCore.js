"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

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
  const baseDistance = isMobile ? 100 : 160;

  const getPosition = (angle, distance) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: Math.cos(rad) * distance,
      y: Math.sin(rad) * distance,
    };
  };

  return (
    <section id="core" className="relative w-full flex flex-col items-center justify-center py-20 px-6 bg-[#050505] overflow-hidden">
      
      <div className="mb-16 md:mb-24 text-center z-20">
        <h2 className="text-[#A6A6A6] uppercase tracking-widest text-sm font-mono flex items-center justify-center gap-4 mb-4">
          <span className="w-8 h-[1px] bg-[#E10613]" />
          Mastim Core
          <span className="w-8 h-[1px] bg-[#E10613]" />
        </h2>
        <p className="text-[#555555] text-xs font-mono uppercase tracking-[0.2em]">Núcleo do Ecossistema</p>
      </div>

      <div className="relative w-full max-w-[400px] md:max-w-[600px] h-[300px] md:h-[500px] flex items-center justify-center">
        
        {/* SVG Neural Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="-300 -300 600 600">
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
        <div className="absolute z-10 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[#E10613] rounded-full blur-[20px] md:blur-[30px]"
          />
          <Image
            src="/icon.png"
            alt="Mastim Core"
            width={60}
            height={60}
            className="object-contain drop-shadow-[0_0_10px_rgba(225,6,19,0.3)] z-10 w-12 h-12 md:w-16 md:h-16"
          />
        </div>

        {/* Orbiting Project Nodes */}
        {projects.map((proj, i) => {
          const pos = getPosition(proj.angle, baseDistance);
          const isHovered = hoveredIndex === i;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="absolute z-20 flex flex-col items-center justify-center cursor-pointer"
              style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border mb-2 transition-colors duration-300 ${isHovered ? 'bg-[#E10613] border-[#E10613] shadow-[0_0_10px_2px_rgba(225,6,19,0.5)]' : 'bg-[#050505] border-[#555555]'}`} />
              <span className={`text-[8px] md:text-[10px] uppercase font-mono tracking-widest whitespace-nowrap transition-colors duration-300 absolute top-3 md:top-4 ${isHovered ? 'text-white' : 'text-[#555555]'}`}>
                {proj.name}
              </span>
            </motion.div>
          );
        })}
      </div>
      
    </section>
  );
}
