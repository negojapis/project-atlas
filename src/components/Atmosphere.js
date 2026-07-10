"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Atmosphere() {
  const [timeData, setTimeData] = useState({ time: '--:--:-- BRT', date: '--.--.----' });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      
      const timeFormatter = new Intl.DateTimeFormat('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      
      const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });

      setTimeData({
        time: timeFormatter.format(now) + ' BRT',
        date: dateFormatter.format(now).replace(/\//g, '.')
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#050505]">
      
      {/* Layer 2: Noise Cinematográfico */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px'
        }}
      />

      {/* Layer 3: Blueprint / Grid Arquitetônico (Extremamente sutil) */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          backgroundPosition: 'center center'
        }}
      />
      
      {/* Coordenadas e Marcas Técnicas */}
      <div className="absolute top-12 left-12 opacity-[0.3] font-mono text-[9px] tracking-[0.3em] text-white flex flex-col gap-1 w-32">
        <span>SYS.TIME.BRT</span>
        <span>{timeData.time}</span>
        <span>{timeData.date}</span>
      </div>
      
      <div className="absolute bottom-12 right-12 opacity-[0.15] font-mono text-[9px] tracking-[0.3em] text-white">
        <span>ATLAS // v8.0.0</span>
      </div>

      <div className="absolute top-1/2 left-0 w-4 h-[1px] bg-white opacity-[0.1]"></div>
      <div className="absolute top-1/2 right-0 w-4 h-[1px] bg-white opacity-[0.1]"></div>
      <div className="absolute top-0 left-1/2 w-[1px] h-4 bg-white opacity-[0.1]"></div>
      <div className="absolute bottom-0 left-1/2 w-[1px] h-4 bg-white opacity-[0.1]"></div>



    </div>
  );
}
