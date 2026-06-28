"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const projects = [
  { name: "Grace Code", angle: -90, dur: "0.2s", ease: "linear", desc: "Engenharia de alta escala.", action: "Conhecer Grace Code" },
  { name: "Divine Brew", angle: -18, dur: "0.5s", ease: "ease-in-out", desc: "A pureza da extração.", action: "Visitar Divine Brew" },
  { name: "Mastimverse", angle: 54, dur: "0.3s", ease: "cubic-bezier(0.175, 0.885, 0.32, 1.275)", desc: "Comunidade e aprendizado.", action: "Entrar no Discord" },
  { name: "Scripts", angle: 126, dur: "0.15s", ease: "linear", desc: "Ferramentas táticas.", action: "Acessar Scripts" },
  { name: "YouTube", angle: 198, dur: "0.7s", ease: "ease-out", desc: "Documentando a jornada.", action: "Assistir Vídeos" },
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

  const baseDistance = isMobile ? 180 : 350;

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
    const perpX = -pos.y * 0.25; 
    const perpY = pos.x * 0.25;
    return `M 0 0 Q ${midX + perpX} ${midY + perpY} ${pos.x} ${pos.y}`;
  };

  const isHoveringAny = hoveredIndex !== null;

  return (
    <section id="core" className="relative w-full flex flex-col items-center justify-center py-40 px-6 bg-transparent overflow-hidden">

      <div className="relative w-full max-w-[1200px] h-[700px] md:h-[900px] flex items-center justify-center">
        
        {/* Constellation Connections */}
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
                  style={{
                    transition: isHoveringAny ? 'stroke-opacity 0.4s ease-out 0.1s' : 'stroke-opacity 0.8s ease-in-out'
                  }}
                />
              </g>
            );
          })}
        </svg>

        {/* Central Observatory (The Origin) */}
        <div className="absolute z-10 flex flex-col items-center justify-center">
          <motion.div 
            initial={{ scale: 1 }}
            whileInView={{ scale: [1, 1.05, 1] }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
            className={`relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center mb-6 ${hoveredIndex !== null ? 'scale-105 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]' : 'scale-100'}`}
            style={{ transition: isHoveringAny ? 'all 0.3s ease-out' : 'all 0.8s ease-in-out' }}
          >
            <Image
              src="/foto.3.png"
              alt="Mastim Core"
              fill
              className="object-contain z-10"
            />
          </motion.div>
          <span 
            className="text-[#333333] text-[9px] md:text-[10px] uppercase font-mono tracking-[0.5em] z-10"
            style={{ transition: isHoveringAny ? 'color 0.3s ease-out' : 'color 0.8s ease-in-out' }}
          >
            {hoveredIndex !== null ? 'THE ORIGIN [ ACTIVE ]' : 'THE ORIGIN'}
          </span>
        </div>

        {/* Orbiting Entities */}
        {projects.map((proj, i) => {
          const pos = getPosition(proj.angle, baseDistance);
          const isHovered = hoveredIndex === i;
          const isOtherHovered = hoveredIndex !== null && hoveredIndex !== i;

          // Personalidade de cada projeto
          const projectTransition = isHoveringAny 
            ? `all ${proj.dur} ${proj.ease} 0.2s` 
            : `all 0.8s ease-in-out`;

          return (
            <div
              key={i}
              className="absolute z-20 flex flex-col items-center justify-center cursor-pointer group"
              style={{ 
                left: '50%', 
                top: '50%',
                transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))` 
              }}
              onClick={() => setHoveredIndex(isHovered ? null : i)}
              onMouseEnter={() => !isMobile && setHoveredIndex(i)}
              onMouseLeave={() => !isMobile && setHoveredIndex(null)}
            >
              {/* Nascer da mesma origem */}
              <motion.div
                initial={{ opacity: 0, x: -pos.x, y: -pos.y, scale: 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 + i * 0.1, duration: 1, ease: "easeOut" }}
                className={`flex flex-col items-center justify-center ${isOtherHovered ? 'opacity-20 scale-95' : 'opacity-100 scale-100'}`}
                style={{ transition: projectTransition }}
              >
                
                {/* Gallery Lighting */}
                <div className={`absolute inset-0 w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none mix-blend-screen ${isHovered ? 'opacity-30' : 'opacity-0'}`}
                     style={{ 
                       background: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 60%)', 
                       left: '50%', top: '50%',
                       transition: projectTransition 
                     }} />

                {/* Entity Point */}
                <div className={`mb-6 rounded-full ${
                  isHovered 
                    ? 'w-2 h-2 md:w-3 md:h-3 bg-white shadow-[0_0_20px_rgba(255,255,255,0.4)]' 
                    : 'w-1 h-1 md:w-1.5 md:h-1.5 bg-[#444444]'
                }`} style={{ transition: projectTransition }} />
                
                {/* Entity Title */}
                <span className={`whitespace-nowrap absolute top-4 md:top-6 ${
                  isHovered 
                    ? 'text-white text-2xl md:text-4xl font-serif font-light tracking-wide' 
                    : 'text-[#666666] text-xl md:text-3xl font-serif font-light tracking-wide'
                }`} style={{ transition: projectTransition }}>
                  {proj.name}
                </span>

                {/* Entity Description (Revealed after Title) */}
                <span className={`absolute top-14 md:top-16 text-[#888888] text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] whitespace-nowrap pointer-events-none ${
                  isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`} style={{ transition: isHovered ? `all 0.4s ease-out 0.4s` : `all 0.2s ease-in-out 0s` }}>
                  {proj.desc}
                </span>
                
                {/* Action Command (Revealed after Description) */}
                <a href="#" className={`absolute top-24 md:top-28 text-[#555] md:hover:text-white active:scale-95 active:text-white text-[10px] uppercase font-mono tracking-[0.3em] flex items-center gap-2 p-4 -m-4 ${
                  isHovered ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`} style={{ transition: isHovered ? `all 0.4s ease-out 0.8s` : `all 0.2s ease-in-out 0s` }}>
                  <span className="opacity-40">→</span>
                  {proj.action}
                </a>

              </motion.div>
            </div>
          );
        })}
      </div>
      
    </section>
  );
}
