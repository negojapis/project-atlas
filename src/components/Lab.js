"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const commercialItems = [
  {
    id: "001",
    title: "Gonv's Combo",
    cliente: "Gonv's Burger Co.",
    ramo: "Gastronomia",
    subRamo: "Fast Food",
    formato: "Key Visual & Cardápio",
    ano: "2026",
    rotation: "-rotate-2 hover:rotate-0",
    src: encodeURI("/Combo gonvs sobre fundo verde.png"),
    legenda: "Direção de arte institucional e fotografia gastronômica para combo smash burger duplo com fritas crocantes e identidade de embalagem.",
    detalhes: "Composição cromática vibrante desenvolvida para campanhas digitais de lançamento, painéis de cardápio e comunicação em ponto de venda."
  },
  {
    id: "002",
    title: "La Vera Pizza",
    cliente: "Pizzaria Artisan",
    ramo: "Gastronomia",
    subRamo: "Pizzaria Artesanal",
    formato: "Post Publicitário & Ads",
    ano: "2026",
    rotation: "rotate-0 hover:scale-[1.02]",
    src: encodeURI("/Fatia de pizza com letras brancas.png"),
    legenda: "Key visual com forte apelo de apetite imediato, combinando tipografia editorial bold e fotografia macro de fatia artesanal com requeijão cremoso.",
    detalhes: "Peça de alta conversão para tráfego pago e redes sociais, desenhada para capturar atenção no primeiro milissegundo de feed."
  },
  {
    id: "003",
    title: "Bora Matar Sua Fome",
    cliente: "Smash Burger House",
    ramo: "Gastronomia",
    subRamo: "Hamburgueria",
    formato: "Campanha & Social Media",
    ano: "2026",
    rotation: "rotate-2 hover:rotate-0",
    src: encodeURI("/Hambúrguer entre mãos e recortes verdes.png"),
    legenda: "Composição dinâmica com mãos reais em recorte físico sobre papel rasgado e lettering autoral, destacando a suculência do produto.",
    detalhes: "Campanha estratégica de conversão para delivery em horários nobres, com linguagem descontraída, direta e impactante."
  }
];

export default function Lab() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const selectedItem = selectedItemIndex !== null ? commercialItems[selectedItemIndex] : null;

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedItemIndex === null) return;
      if (e.key === "Escape") setSelectedItemIndex(null);
      if (e.key === "ArrowRight") {
        setSelectedItemIndex((prev) => (prev + 1) % commercialItems.length);
      }
      if (e.key === "ArrowLeft") {
        setSelectedItemIndex((prev) => (prev - 1 + commercialItems.length) % commercialItems.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItemIndex]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedItemIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedItemIndex]);

  return (
    <section className="relative w-full py-32 bg-bg-base z-20 border-t border-white/5 overflow-hidden">
      <div className="max-w-[90vw] mx-auto flex flex-col">
        
        {/* Header - Authentic Mastim Design with Refined Typography */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <div className="flex flex-col">
            <div className="flex items-end gap-2 mb-2">
              <span className="font-sans text-mastim-red text-2xl md:text-3xl font-bold leading-none">01.</span>
              <span className="font-mono text-xs md:text-sm tracking-widest text-text-secondary uppercase mb-1">
                ARTES COMERCIAIS
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-text-primary leading-[1.08]">
              Design <br />
              <span className="font-semibold text-text-primary">Publicitário</span>
            </h2>
          </div>

          <div className="flex items-center gap-8 md:gap-12">
            <p className="font-sans text-[10px] md:text-xs text-text-secondary max-w-[220px] leading-relaxed uppercase">
              Key visuals e campanhas gastronômicas desenvolvidas sob medida para marcas.
            </p>
            <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-mastim-red shadow-[0_0_40px_rgba(229,43,26,0.3)] shrink-0"></div>
          </div>
        </div>

        {/* 3-Column Polaroid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-start pt-2 pb-6">
          {commercialItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedItemIndex(index)}
              className={`group relative flex flex-col bg-[#faf8f5] text-neutral-900 rounded-[6px] p-3.5 sm:p-4 pb-7 sm:pb-8 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.85),0_5px_15px_rgba(0,0,0,0.4)] hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95),0_0_35px_rgba(255,255,255,0.12)] border border-black/10 transition-all duration-500 ease-out hover:-translate-y-3 cursor-pointer ${item.rotation}`}
            >
              
              {/* Inner Photo Area with Inset Shadow & Film Gloss */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-black rounded-[2px] shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)] ring-1 ring-black/15 flex items-center justify-center">
                <Image 
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={96}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                />

                {/* Film Gloss Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent pointer-events-none" />
              </div>

              {/* Classic Polaroid Bottom Chin */}
              <div className="pt-4 sm:pt-5 px-1 flex flex-col justify-between">
                <div>
                  {/* Title */}
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif italic font-bold text-xl sm:text-2xl text-neutral-900 tracking-tight leading-none group-hover:text-mastim-red transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  {/* Subtitle / Category */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 tracking-wider mt-2">
                    <span className="uppercase tracking-widest text-[10px] text-neutral-600">
                      {item.ramo} / {item.subRamo}
                    </span>
                    <span className="font-sans text-[10px] text-neutral-400">
                      {item.ano}
                    </span>
                  </div>

                  {/* Brief Legenda */}
                  <p className="font-sans text-xs text-neutral-600 line-clamp-2 leading-relaxed font-normal mt-2">
                    {item.legenda}
                  </p>
                </div>

                {/* Chin Footer */}
                <div className="mt-4 pt-3 border-t border-neutral-300/80 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                  <span className="uppercase text-[9px] tracking-wider text-neutral-500">
                    Cliente: <strong className="text-neutral-800 font-semibold">{item.cliente}</strong>
                  </span>
                  
                  <span className="text-mastim-red font-bold text-xs group-hover:translate-x-0.5 transition-transform">
                    {item.formato} ↗
                  </span>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal for Deep View */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItemIndex(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8"
          >
            <motion.div 
              initial={{ scale: 0.94, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 15 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] bg-[#0c0c0c] border border-white/10 rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-[0_30px_100px_rgba(0,0,0,0.9)]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItemIndex(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white/90 hover:text-white hover:bg-white/15 transition-all duration-300 flex items-center justify-center cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Prev / Next Navigation */}
              <button
                onClick={() => setSelectedItemIndex((prev) => (prev - 1 + commercialItems.length) % commercialItems.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white/90 hover:text-white hover:bg-white/15 transition-all duration-300 flex items-center justify-center cursor-pointer"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => setSelectedItemIndex((prev) => (prev + 1) % commercialItems.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 lg:right-auto lg:left-[calc(55%+1rem)] z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white/90 hover:text-white hover:bg-white/15 transition-all duration-300 flex items-center justify-center cursor-pointer"
                aria-label="Próximo"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Left Side: Artwork Display */}
              <div className="relative w-full lg:w-[55%] h-[46vh] lg:h-[80vh] bg-[#070707] flex items-center justify-center p-6 lg:p-8">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    fill
                    quality={100}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Right Side: Clean Specifications */}
              <div className="w-full lg:w-[45%] p-7 lg:p-10 flex flex-col justify-between overflow-y-auto bg-[#0c0c0c] border-t lg:border-t-0 lg:border-l border-white/[0.08]">
                
                <div className="flex flex-col gap-6">
                  {/* Identification */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <span className="font-mono text-xs text-text-secondary/70 tracking-widest uppercase">
                      PROJETO {selectedItem.id}
                    </span>
                    <span className="text-text-primary text-[11px] font-mono tracking-wider uppercase font-semibold">
                      {selectedItem.subRamo}
                    </span>
                  </div>

                  {/* Title & Client */}
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-light text-text-primary font-sans tracking-tight mb-2">
                      {selectedItem.title}
                    </h3>
                    <p className="text-xs font-mono text-text-secondary/70 tracking-wider uppercase">
                      Cliente: <span className="text-text-primary font-medium">{selectedItem.cliente}</span>
                    </p>
                  </div>

                  {/* Spec Grid */}
                  <div className="grid grid-cols-2 gap-4 py-5 border-y border-white/[0.08] text-xs font-mono">
                    <div>
                      <span className="text-text-secondary/50 block text-[9px] tracking-widest uppercase mb-1">RAMO</span>
                      <span className="text-text-primary">{selectedItem.ramo}</span>
                    </div>
                    <div>
                      <span className="text-text-secondary/50 block text-[9px] tracking-widest uppercase mb-1">FORMATO</span>
                      <span className="text-text-primary">{selectedItem.formato}</span>
                    </div>
                    <div>
                      <span className="text-text-secondary/50 block text-[9px] tracking-widest uppercase mb-1">ANO</span>
                      <span className="text-text-primary">{selectedItem.ano}</span>
                    </div>
                    <div>
                      <span className="text-text-secondary/50 block text-[9px] tracking-widest uppercase mb-1">ENTREGA</span>
                      <span className="text-text-primary">Direção de Arte & Visuals</span>
                    </div>
                  </div>

                  {/* Concept & Description */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-mono text-text-secondary/60 tracking-[0.2em] uppercase">
                      CONCEITO E DIREÇÃO
                    </span>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed font-light">
                      {selectedItem.legenda}
                    </p>
                    {selectedItem.detalhes && (
                      <p className="font-sans text-xs text-text-secondary/60 leading-relaxed font-light mt-1">
                        {selectedItem.detalhes}
                      </p>
                    )}
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-text-secondary/40 tracking-widest">
                    MASTIM STUDIO © 2026
                  </span>
                  <a
                    href="#contato"
                    onClick={() => setSelectedItemIndex(null)}
                    className="px-5 py-2.5 rounded-full bg-text-primary text-bg-base text-xs font-medium tracking-wider uppercase hover:bg-mastim-red hover:text-white transition-all duration-300 shadow-md cursor-pointer"
                  >
                    Iniciar Projeto ↗
                  </a>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
