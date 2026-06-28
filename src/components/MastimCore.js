"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

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

  const baseDistance = isMobile ? 140 : 300;

  const getPosition = (angle, distance) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: Math.cos(rad) * distance,
      y: Math.sin(rad) * distance,
    };
  };

  return (
    <section id="core" className="relative w-full flex flex-col items-center justify-center py-32 px-6 bg-transparent overflow-hidden">

      <div className="relative w-full max-w-[1000px] h-[500px] md:h-[800px] flex items-center justify-center">
        
        {/* Constellation Connections (Hidden by default, revealed on hover) */}
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
                  stroke="#E10613"
                  strokeWidth="1"
                  strokeOpacity={isHovered ? 0.6 : 0}
                  className="transition-all duration-700 ease-in-out"
                />
              </g>
            );
          })}
        </svg>

        {/* Central Observatory (Core Mark) */}
        <div className="absolute z-10 flex flex-col items-center justify-center">
          <div className={`relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center mb-6 transition-transform duration-700 ${hoveredIndex !== null ? 'scale-105' : 'scale-100'}`}>
            <Image
              src="/foto.3.png"
              alt="Mastim Core"
              fill
              className="object-contain z-10"
            />
          </div>
          <span className="text-[#333333] text-[9px] md:text-[10px] uppercase font-sans font-light tracking-[0.5em] z-10 transition-colors duration-700">
            {hoveredIndex !== null ? 'System Active' : 'Mastim'}
          </span>
        </div>

        {/* Orbiting Bodies */}
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
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 1, ease: "easeOut" }} // Slide = Discovery
                className="flex flex-col items-center justify-center"
              >
                {/* O corpo celeste */}
                <div className={`w-1.5 h-1.5 md:w-2 md:h-2 mb-4 transition-all duration-700 ease-in-out ${
                  isHovered 
                    ? 'bg-[#E10613] shadow-[0_0_15px_rgba(225,6,19,0.5)] scale-150 rounded-sm' 
                    : 'bg-[#444444] rounded-full'
                }`} />
                {/* A identificação */}
                <span className={`text-[10px] md:text-xs uppercase font-sans tracking-[0.2em] whitespace-nowrap transition-all duration-700 ease-in-out absolute top-5 md:top-6 ${
                  isHovered ? 'text-white font-medium' : 'text-[#555555] font-light'
                }`}>
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
