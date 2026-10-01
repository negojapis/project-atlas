"use client";

import Image from "next/image";

const websiteItems = [
  // VIDEOS (EUA)
  { id: "001", title: "MOTION 01", category: "SITE", flagCode: "us", src: "/Nova pasta/video1.mp4", type: "video", group: "VIDEOS" },
  { id: "002", title: "MOTION 02", category: "SITE", flagCode: "us", src: "/Nova pasta/video2.mp4", type: "video", group: "VIDEOS" },
  { id: "003", title: "MOTION 03", category: "SITE", flagCode: "us", src: "/Nova pasta/video3.mp4", type: "video", group: "VIDEOS" },

];

export default function Websites() {
  const renderItem = (item) => (
    <div key={item.id} className="flex flex-col gap-4 group">
      
      {/* Image / Video Container */}
      <div className="relative overflow-hidden bg-mastim-card/20 border border-white/5 w-full flex items-center justify-center aspect-video">
        {item.type === "video" ? (
          <video 
            src={item.src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
          />
        ) : (
          <Image 
            src={item.src}
            alt={item.title}
            width={1600}
            height={900}
            quality={100}
            className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
          />
        )}
      </div>
      
      {/* Caption */}
      <div className="flex justify-between items-start font-mono uppercase mt-1">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] md:text-xs font-bold text-text-primary tracking-widest">
            {item.id} / {item.title}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-[8px] md:text-[9px] text-text-secondary tracking-widest opacity-60">
              {item.category}
            </span>
            <img src={`https://flagcdn.com/w20/${item.flagCode}.png`} alt={`${item.flagCode} flag`} className="w-4 h-auto opacity-80" />
          </div>
        </div>
        <span className="text-text-secondary group-hover:text-mastim-red transition-colors text-xs">↗</span>
      </div>

    </div>
  );

  return (
    <section className="relative w-full py-32 bg-bg-base z-20 border-t border-white/5">
      <div className="max-w-[95vw] lg:max-w-[90vw] mx-auto flex flex-col">
        
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <div className="flex flex-col">
            <div className="flex items-end gap-2 mb-1">
              <span className="font-sans text-mastim-red text-2xl md:text-4xl font-bold leading-none">02.</span>
              <span className="font-mono text-xs md:text-sm tracking-widest text-text-secondary uppercase mb-1">DESENVOLVIMENTO DE</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-text-primary leading-none uppercase">
              SITES
            </h2>
          </div>

          <div className="flex items-center gap-8 md:gap-12">
            <p className="font-sans text-[10px] md:text-xs text-text-secondary max-w-[220px] leading-relaxed uppercase">
              Interfaces modernas, responsivas e focadas em conversão, com design imersivo.
            </p>
            <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-mastim-red shadow-[0_0_40px_rgba(229,43,26,0.3)]"></div>
          </div>
        </div>

        {/* VIDEOS GRID (EUA) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {websiteItems.filter(i => i.group === "VIDEOS").map(renderItem)}
        </div>

      </div>
    </section>
  );
}
