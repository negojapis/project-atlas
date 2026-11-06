"use client";

import Image from "next/image";

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
    legenda: "Direção de arte institucional e fotografia gastronômica para combo smash burger duplo com fritas crocantes e identidade de embalagem."
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
    legenda: "Key visual com forte apelo de apetite imediato, combinando tipografia editorial bold e fotografia macro de fatia artesanal com requeijão cremoso."
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
    legenda: "Composição dinâmica com mãos reais em recorte físico sobre papel rasgado e lettering autoral, destacando a suculência do produto."
  },
  {
    id: "004",
    title: "Sushi Omakase",
    cliente: "Koi Sushi Bar",
    ramo: "Gastronomia",
    subRamo: "Culinária Japonesa",
    formato: "Pôster & Key Visual",
    ano: "2026",
    rotation: "-rotate-1 hover:rotate-0",
    src: encodeURI("/Pôster de sushi com tipografia vermelha-2.png"),
    legenda: "Composição gráfica com tipografia vermelha em contraste creme e fotografia zenital do combinado artesanal, unindo tradição japonesa e design editorial."
  },
  {
    id: "005",
    title: "Temaki Irresistível",
    cliente: "Koi Sushi Bar",
    ramo: "Gastronomia",
    subRamo: "Temakeria",
    formato: "Post Publicitário & Ads",
    ano: "2026",
    rotation: "rotate-0 hover:scale-[1.02]",
    src: encodeURI("/Temaki irresistível em fundo preto-1.png"),
    legenda: "Direção de arte dramática em fundo preto profundo destacando o frescor do salmão e a textura crocante da alga com lettering autoral."
  },
  {
    id: "006",
    title: "Pizza Time",
    cliente: "Forno Tradizione",
    ramo: "Gastronomia",
    subRamo: "Pizzaria Italiana",
    formato: "Pôster Editorial & Menu",
    ano: "2026",
    rotation: "rotate-1 hover:rotate-0",
    src: encodeURI("/Pôster vintage de pizza italiana.png"),
    legenda: "Estética vintage italiana com corte simétrico da pizza artesanal e tipografia clássica serifada para comunicação visual de marca."
  }
];

export default function Lab() {
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
        </div>

        {/* 3-Column Polaroid Showcase - Clean & Static (No Links) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 lg:gap-y-14 items-start pt-2 pb-6">
          {commercialItems.map((item) => (
            <div
              key={item.id}
              className={`relative flex flex-col bg-[#faf8f5] text-neutral-900 rounded-[6px] p-3.5 sm:p-4 pb-7 sm:pb-8 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.85),0_5px_15px_rgba(0,0,0,0.4)] hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95),0_0_35px_rgba(255,255,255,0.12)] border border-black/10 transition-all duration-500 ease-out hover:-translate-y-2 select-none ${item.rotation}`}
            >
              
              {/* Inner Photo Area with Inset Shadow & Film Gloss */}
              <div className="group relative aspect-[4/5] w-full overflow-hidden bg-black rounded-[2px] shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)] ring-1 ring-black/15 flex items-center justify-center">
                <Image 
                  src={item.src}
                  alt={item.title}
                  fill
                  draggable={false}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={96}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none select-none"
                />

                {/* Film Gloss & Anti-Save Shield */}
                <div className="absolute inset-0 z-10 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent" />
              </div>

              {/* Classic Polaroid Bottom Chin */}
              <div className="pt-4 sm:pt-5 px-1 flex flex-col justify-between">
                <div>
                  {/* Title */}
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif italic font-bold text-xl sm:text-2xl text-neutral-900 tracking-tight leading-none">
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

                {/* Chin Footer - Clean Metadata without Links */}
                <div className="mt-4 pt-3 border-t border-neutral-300/80 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                  <span className="uppercase text-[9px] tracking-wider text-neutral-500">
                    Cliente: <strong className="text-neutral-800 font-semibold">{item.cliente}</strong>
                  </span>
                  
                  <span className="uppercase text-[9px] tracking-wider text-neutral-400">
                    {item.formato}
                  </span>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
