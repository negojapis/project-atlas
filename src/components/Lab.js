"use client";

import Image from "next/image";

const labItems = [
  { id: "001", title: "MASTIM", category: "ESTUDO PESSOAL", src: "/imag1.png", span: "md:col-span-2 md:row-span-2" },
  { id: "002", title: "TÓQUIO", category: "ESTUDO DE COMPOSIÇÃO", src: "/imag2.png", span: "md:col-span-1" },
  { id: "003", title: "DISCIPLINA", category: "TIPOGRAFIA + CONCEITO", src: "/imag3.png", span: "md:col-span-1" },
  { id: "004", title: "SPEED", category: "ESTUDO VISUAL", src: "/imag4.png", span: "md:col-span-1" },
  { id: "005", title: "EYE", category: "FOTOGRAFIA + TIPOGRAFIA", src: "/imag5_eye.png", span: "md:col-span-1" },
  { id: "006", title: "ROSE", category: "EXPERIMENTO VISUAL", src: "/imag6.png", span: "md:col-span-1" },
  { id: "007", title: "BEAUTY", category: "ESTUDO PESSOAL", src: "/imag7.png", span: "md:col-span-1" }
];

export default function Lab() {
  return (
    <section className="relative w-full py-32 bg-bg-base z-20 border-t border-white/5">
      <div className="max-w-[90vw] mx-auto flex flex-col">
        
        {/* Header matching the reference */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <div className="flex flex-col">
            <div className="flex items-end gap-2 mb-1">
              <span className="font-sans text-mastim-red text-2xl md:text-4xl font-bold leading-none">01.</span>
              <span className="font-mono text-xs md:text-sm tracking-widest text-text-secondary uppercase mb-1">ESTUDOS DE</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-text-primary leading-none uppercase">
              PÔSTERES
            </h2>
          </div>

          <div className="flex items-center gap-8 md:gap-12">
            <p className="font-sans text-[10px] md:text-xs text-text-secondary max-w-[220px] leading-relaxed uppercase">
              Pôsteres autorais, tipografia, composição, fotografia + texto e peças experimentais.
            </p>
            <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-mastim-red shadow-[0_0_40px_rgba(229,43,26,0.3)]"></div>
          </div>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {labItems.map((item) => (
            <div key={item.id} className={`flex flex-col gap-3 group ${item.span}`}>
              
              {/* Image Container */}
              <div className="relative overflow-hidden bg-mastim-card/20 border border-white/5 w-full h-full flex items-center justify-center">
                <Image 
                  src={item.src}
                  alt={item.title}
                  width={1200}
                  height={1200}
                  quality={100}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Caption */}
              <div className="flex justify-between items-start font-mono uppercase mt-1">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] md:text-xs font-bold text-text-primary tracking-widest">
                    {item.id} / {item.title}
                  </span>
                  <span className="text-[8px] md:text-[9px] text-text-secondary tracking-widest opacity-60">
                    {item.category}
                  </span>
                </div>
                <span className="text-text-secondary group-hover:text-mastim-red transition-colors text-xs">↗</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
