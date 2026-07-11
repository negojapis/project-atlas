"use client";

import { motion } from "framer-motion";

export default function Atmosphere() {
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

      <div className="absolute top-1/2 left-0 w-4 h-[1px] bg-white opacity-[0.1]"></div>
      <div className="absolute top-1/2 right-0 w-4 h-[1px] bg-white opacity-[0.1]"></div>
      <div className="absolute top-0 left-1/2 w-[1px] h-4 bg-white opacity-[0.1]"></div>
      <div className="absolute bottom-0 left-1/2 w-[1px] h-4 bg-white opacity-[0.1]"></div>



    </div>
  );
}
