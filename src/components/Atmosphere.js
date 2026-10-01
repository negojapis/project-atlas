"use client";

import { motion } from "framer-motion";

export default function Atmosphere({ isLoading = false }) {
  if (isLoading) {
    return <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#050505]"></div>;
  }

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#050505]">
      
      {/* Layer 2: Noise Cinematográfico */}
      <div 
        className="absolute inset-0 opacity-[0.05] mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px'
        }}
      />

      {/* Layer 2.1: Heavy Cinematic Vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,0.9)] z-20 mix-blend-multiply"></div>
      
      {/* Layer 2.2: Red Edge Glowing (Subtle grunge) */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(229,43,26,0.1)] z-20 mix-blend-screen"></div>

      {/* Layer 2.3: Vertical Film Scratches */}
      <div 
        className="absolute inset-0 opacity-[0.08] mix-blend-screen pointer-events-none z-20"
        style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 50%, rgba(255,255,255,0.8) 50%, transparent 51%),
            linear-gradient(90deg, transparent 20%, rgba(255,255,255,0.4) 20%, transparent 20.5%),
            linear-gradient(90deg, transparent 80%, rgba(255,255,255,0.6) 80%, transparent 80.2%)
          `,
          backgroundSize: '250px 100%',
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

      {/* Floating Japanese Text: 創造する (Create) */}
      <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 text-mastim-red opacity-80 pointer-events-none select-none font-serif text-4xl md:text-7xl drop-shadow-[0_0_20px_rgba(229,43,26,1)] z-10">
        <span>創</span>
        <span>造</span>
        <span>す</span>
        <span>る</span>
      </div>

    </div>
  );
}
