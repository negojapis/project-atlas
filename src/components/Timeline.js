"use client";

import { motion } from "framer-motion";

const timelineData = [
  {
    chapter: "CAPÍTULO I",
    year: "2009",
    description: "Curiosidade.",
  },
  {
    chapter: "CAPÍTULO II",
    year: "",
    description: "Aprendizado.",
  },
  {
    chapter: "CAPÍTULO III",
    year: "",
    description: "Construção.",
  },
  {
    chapter: "CAPÍTULO IV",
    year: "",
    description: "Ecossistema.",
  },
  {
    chapter: "CAPÍTULO V",
    year: "",
    description: "O futuro continua sendo construído.",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-32 md:py-48 px-6 bg-transparent overflow-hidden">

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Title Indicator */}
        <div className="mb-32 md:mb-48 text-center">
          <h2 className="text-[#555555] text-[9px] md:text-[10px] font-mono uppercase tracking-[0.5em] mb-4">Journey</h2>
          <p className="text-white text-3xl md:text-5xl font-serif font-light tracking-wide">A Jornada</p>
        </div>

        <div className="relative w-full flex flex-col items-center">
          {/* Central Line */}
          <div className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#222222] to-transparent" />

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative w-full flex flex-col items-center text-center min-h-[70vh] md:min-h-[80vh] justify-center group"
            >
              
              {/* Central Node */}
              <div className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#111] border border-[#333] group-hover:bg-white group-hover:border-white transition-colors duration-700 z-10" />
              
              <div className="flex flex-col items-center gap-6 md:gap-8">
                {/* Chapter Label */}
                <span className="text-[#444444] font-mono text-[9px] md:text-[10px] tracking-[0.4em] uppercase transition-colors duration-700">
                  [ {item.chapter} ]
                </span>
                
                {/* Year (if exists) */}
                {item.year && (
                  <span className="text-white font-serif font-light text-xl md:text-3xl tracking-widest opacity-80">
                    {item.year}
                  </span>
                )}
                
                {/* Description */}
                <h3 className="text-3xl md:text-5xl lg:text-7xl font-serif font-light text-[#888888] tracking-wide leading-tight group-hover:text-white transition-colors duration-700 ease-in-out">
                  {item.description}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
