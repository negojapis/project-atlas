"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const archiveCategories = [
  {
    id: "ARCHIVE_018",
    year: "2018",
    name: "PHOTOGRAPHY",
    images: ["/foto.png", "/foto.3.png"]
  },
  {
    id: "ARCHIVE_020",
    year: "2020",
    name: "MUSIC & DJ ERA",
    images: ["/Imagem do ChatGPT 30 de set. de 2026, 17_59_54.png"] // Placeholder
  },
  {
    id: "ARCHIVE_022",
    year: "2022",
    name: "EXPERIMENTS",
    images: ["/Navity.png"]
  },
  {
    id: "ARCHIVE_024",
    year: "2024",
    name: "DESIGN",
    images: ["/Studio Blanco.png"]
  },
  {
    id: "ARCHIVE_026",
    year: "2026",
    name: "UNRELEASED",
    images: ["/Cars.png"]
  }
];

export default function Archive() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative w-full py-32 bg-bg-base border-t border-white/5 z-20">
      <div className="max-w-[85vw] md:max-w-[70vw] mx-auto flex flex-col">
        
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-text-primary mb-2">
            THE ARCHIVE
          </h2>
          <span className="font-mono text-xs md:text-sm text-text-secondary tracking-widest">
            200X — 2026
          </span>
        </div>

        {/* Categories List */}
        <div className="flex flex-col relative w-full">
          {archiveCategories.map((item, index) => (
            <div 
              key={item.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={cn(
                "group relative border-b border-white/5 py-8 md:py-12 flex flex-col md:flex-row md:items-end justify-between cursor-pointer transition-colors duration-500",
                hoveredIndex === index ? "text-mastim-red" : "text-text-secondary hover:text-text-primary"
              )}
            >
              {/* Info */}
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                <span className="font-mono text-[10px] md:text-xs opacity-50 uppercase tracking-widest">
                  {item.id}
                </span>
                <span className="font-serif italic text-sm md:text-lg">
                  {item.year}
                </span>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl md:text-5xl font-bold tracking-tighter mt-4 md:mt-0 transition-transform duration-500 group-hover:-translate-x-4">
                {item.name}
              </h3>

              {/* Floating Images Preview on Hover */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.9, rotate: 5 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="hidden md:block absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] aspect-[4/5] z-30 pointer-events-none drop-shadow-2xl"
                  >
                    {item.images[0] && (
                      <Image 
                        src={item.images[0]}
                        alt={item.name}
                        fill
                        className="object-cover rounded bg-mastim-card border border-white/10"
                      />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
