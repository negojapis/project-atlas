"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import SectionContainer from "@/components/ui/SectionContainer";
import MicroLabel from "@/components/ui/MicroLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionSubtitle from "@/components/ui/SectionSubtitle";
import BodyText from "@/components/ui/BodyText";
import Command from "@/components/ui/Command";
import CoreNode from "@/components/ui/CoreNode";

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
    <SectionContainer id="core" className="flex flex-col items-center justify-center">

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
                    transition: isHovered ? 'stroke-opacity 0.4s ease-out 150ms' : 'stroke-opacity 0.2s ease-in-out 0ms'
                  }}
                />
              </g>
            );
          })}
        </svg>

        {/* Central Observatory (The Origin) */}
        <div className="absolute z-content flex flex-col items-center justify-center">
          <motion.div 
            initial={{ scale: 1 }}
            whileInView={{ scale: [1, 1.05, 1] }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
            className={`relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center mb-6 transition-all duration-normal motion-fade ${hoveredIndex !== null ? 'scale-105 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]' : 'scale-100'}`}
          >
            <Image
              src="/foto.3.png"
              alt="Mastim Core"
              fill
              sizes="(max-width: 768px) 96px, 128px"
              className="object-contain z-content"
            />
          </motion.div>
          <MicroLabel className="z-content transition-colors duration-normal">
            {hoveredIndex !== null ? 'THE ORIGIN [ ACTIVE ]' : 'THE ORIGIN'}
          </MicroLabel>
        </div>

        {/* Orbiting Entities */}
        {projects.map((proj, i) => {
          const pos = getPosition(proj.angle, baseDistance);
          const isHovered = hoveredIndex === i;
          const isOtherHovered = hoveredIndex !== null && hoveredIndex !== i;

          return (
            <div
              key={i}
              className="absolute z-overlay flex flex-col items-center justify-center cursor-pointer group"
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
                className={`flex flex-col items-center justify-center transition-all duration-normal motion-fade ${isOtherHovered ? 'opacity-20 scale-95' : 'opacity-100 scale-100'}`}
              >
                
                {/* Gallery Lighting */}
                <div className={`absolute inset-0 w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none mix-blend-screen transition-all duration-slow ${isHovered ? 'opacity-30' : 'opacity-0'}`}
                     style={{ 
                       background: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 60%)', 
                       left: '50%', top: '50%',
                       transitionDelay: isHovered ? '300ms' : '0ms'
                     }} />

                {/* Entity Point */}
                <CoreNode active={isHovered} className="mb-6" style={{ transitionDelay: isHovered ? '300ms' : '0ms' }} />
                
                {/* Entity Title */}
                <BodyText as="span" className={`whitespace-nowrap absolute top-4 md:top-6 transition-colors duration-normal ${
                  isHovered ? 'text-text-primary scale-110' : 'text-text-secondary'
                }`} style={{ transitionDelay: isHovered ? '300ms' : '0ms' }}>
                  {proj.name}
                </BodyText>

                {/* Entity Description (Revealed after Title) */}
                <SectionSubtitle as="span" className={`absolute top-12 md:top-14 whitespace-nowrap pointer-events-none transition-all duration-normal motion-fade ${
                  isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`} style={{ transitionDelay: isHovered ? '450ms' : '0ms' }}>
                  {proj.desc}
                </SectionSubtitle>
                
                {/* Action Command (Revealed after Description) */}
                <Command href="#" className={`absolute top-20 md:top-24 transition-all duration-normal motion-fade ${
                  isHovered ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`} style={{ transitionDelay: isHovered ? '600ms' : '0ms' }}>
                  <span className="opacity-40">→</span>
                  {proj.action}
                </Command>

              </motion.div>
            </div>
          );
        })}
      </div>
      
    </SectionContainer>
  );
}
