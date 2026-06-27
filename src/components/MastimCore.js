"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const projects = [
  { name: "Grace Code", angle: -90, distance: 160 },
  { name: "Divine Brew", angle: -18, distance: 160 },
  { name: "Mastimverse", angle: 54, distance: 160 },
  { name: "Mastim Scripts", angle: 126, distance: 160 },
  { name: "YouTube", angle: 198, distance: 160 },
];

export default function MastimCore() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Helper to calculate positions based on angle and distance
  const getPosition = (angle, distance) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: Math.cos(rad) * distance,
      y: Math.sin(rad) * distance,
    };
  };

  return (
    <section id="core" className="relative min-h-[80vh] flex flex-col items-center justify-center py-20 px-6 bg-[#050505]">
      
      <div className="mb-24 text-center">
        <h2 className="text-[#A6A6A6] uppercase tracking-widest text-sm font-mono flex items-center justify-center gap-4 mb-4">
          <span className="w-8 h-[1px] bg-[#E10613]" />
          Mastim Core
          <span className="w-8 h-[1px] bg-[#E10613]" />
        </h2>
        <p className="text-[#555555] text-xs font-mono uppercase tracking-[0.2em]">Núcleo do Ecossistema</p>
      </div>

      <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center">
        
        {/* SVG Neural Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="-300 -300 600 600">
          {projects.map((proj, i) => {
            const pos = getPosition(proj.angle, proj.distance);
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
        <div className="absolute z-10 w-24 h-24 rounded-full flex items-center justify-center group">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[#E10613] rounded-full blur-[30px]"
          />
          <Image
            src="/icon.png"
            alt="Mastim Core"
            width={60}
            height={60}
            className="object-contain drop-shadow-[0_0_10px_rgba(225,6,19,0.3)] z-10"
          />
        </div>

        {/* Orbiting Project Nodes */}
        {projects.map((proj, i) => {
          const pos = getPosition(proj.angle, proj.distance);
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
              {/* The Node Point */}
              <div className={`w-3 h-3 rounded-full border mb-2 transition-colors duration-300 ${isHovered ? 'bg-[#E10613] border-[#E10613] shadow-[0_0_10px_2px_rgba(225,6,19,0.5)]' : 'bg-[#050505] border-[#555555]'}`} />
              
              {/* Project Label */}
              <span className={`text-[10px] uppercase font-mono tracking-widest whitespace-nowrap transition-colors duration-300 absolute top-4 ${isHovered ? 'text-white' : 'text-[#555555]'}`}>
                {proj.name}
              </span>
            </motion.div>
          );
        })}
      </div>
      
    </section>
  );
}
