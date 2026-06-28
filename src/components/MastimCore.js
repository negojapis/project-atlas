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

  const baseDistance = isMobile ? 150 : 350;

  const getPosition = (angle, distance) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: Math.cos(rad) * distance,
      y: Math.sin(rad) * distance,
    };
  };

  const getCurve = (pos) => {
    const midX = pos.x * 0.5;
    const midY = pos.y * 0.5;
    const perpX = -pos.y * 0.25; // Organic outward bowing
    const perpY = pos.x * 0.25;
    return `M 0 0 Q ${midX + perpX} ${midY + perpY} ${pos.x} ${pos.y}`;
  };

  return (
    <section id="core" className="relative w-full flex flex-col items-center justify-center py-40 px-6 bg-transparent overflow-hidden">

      <div className="relative w-full max-w-[1200px] h-[600px] md:h-[900px] flex items-center justify-center">
        
        {/* Constellation Connections (Invisible until hovered, organic curves) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="-600 -600 1200 1200">
          {projects.map((proj, i) => {
            const pos = getPosition(proj.angle, baseDistance);
            const isHovered = hoveredIndex === i;
            return (
              <g key={i}>
                <path
                  d={getCurve(pos)}
                  fill="none"
                  stroke="#E10613"
                  strokeWidth="0.5"
                  strokeOpacity={isHovered ? 0.4 : 0}
                  className="transition-all duration-1000 ease-in-out"
                />
              </g>
            );
          })}
        </svg>

        {/* Central Observatory (The Origin) */}
        <div className={`absolute z-10 flex flex-col items-center justify-center transition-opacity duration-1000 ${hoveredIndex !== null ? 'opacity-100' : 'opacity-100'}`}>
          <div className={`relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center mb-6 transition-all duration-1000 ease-in-out ${hoveredIndex !== null ? 'scale-105 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]' : 'scale-100'}`}>
            <Image
              src="/foto.3.png"
              alt="Mastim Core"
              fill
              className="object-contain z-10"
            />
          </div>
          <span className="text-[#333333] text-[9px] md:text-[10px] uppercase font-mono tracking-[0.5em] z-10 transition-colors duration-1000">
            {hoveredIndex !== null ? 'THE ORIGIN [ ACTIVE ]' : 'THE ORIGIN'}
          </span>
        </div>

        {/* Orbiting Entities */}
        {projects.map((proj, i) => {
          const pos = getPosition(proj.angle, baseDistance);
          const isHovered = hoveredIndex === i;
          const isOtherHovered = hoveredIndex !== null && hoveredIndex !== i;

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
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 1.5, ease: "easeOut" }} // Slide = Discovery
                className={`flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${isOtherHovered ? 'opacity-20 scale-95' : 'opacity-100 scale-100'}`}
              >
                
                {/* Gallery Lighting (Revealed on Hover) */}
                <div className={`absolute inset-0 w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-opacity duration-1000 ease-in-out mix-blend-screen ${isHovered ? 'opacity-30' : 'opacity-0'}`}
                     style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 60%)', left: '50%', top: '50%' }} />

                {/* Entity Point */}
                <div className={`mb-6 transition-all duration-1000 ease-in-out rounded-full ${
                  isHovered 
                    ? 'w-2 h-2 md:w-3 md:h-3 bg-white shadow-[0_0_20px_rgba(255,255,255,0.4)]' 
                    : 'w-1 h-1 md:w-1.5 md:h-1.5 bg-[#444444]'
                }`} />
                
                {/* Entity Title (Editorial Presence) */}
                <span className={`whitespace-nowrap transition-all duration-1000 ease-in-out absolute top-4 md:top-6 ${
                  isHovered 
                    ? 'text-white text-2xl md:text-4xl font-serif font-light tracking-wide' 
                    : 'text-[#666666] text-xl md:text-3xl font-serif font-light tracking-wide'
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
