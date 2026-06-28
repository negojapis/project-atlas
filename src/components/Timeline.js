"use client";

import { motion } from "framer-motion";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({ 
  subsets: ["latin"], 
  weight: "400" 
});

const timelineData = [
  {
    year: "2009",
    title: "O início da curiosidade",
    description: "Desmontando computadores, rádios, placas, conectores e gabinetes para entender como tudo funcionava.",
  },
  {
    year: "2015",
    title: "Sistemas & Arquitetura",
    description: "Início do desenvolvimento estruturado e lógica de programação avançada.",
  },
  {
    year: "2020",
    title: "Visão Empreendedora",
    description: "Transição de desenvolvedor para arquiteto de ecossistemas digitais.",
  },
  {
    year: "2024",
    title: "Project Atlas",
    description: "Consolidação do ecossistema Mastim e expansão para novas verticais.",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20 md:mb-28">
          <h2 className={`text-white text-3xl md:text-5xl mb-4 ${greatVibes.className}`}>Journey Line</h2>
          <p className="text-[#777777] text-sm md:text-lg font-mono uppercase tracking-[0.3em]">Histórico do Sistema</p>
        </div>

        <div className="relative border-l border-[#1a1a1a] ml-4 md:ml-0">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-16 pl-10 relative group"
            >
              {/* Timeline Node */}
              <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 bg-[#050505] border border-[#555555] rounded-full group-hover:bg-[#E10613] group-hover:border-[#E10613] group-hover:shadow-[0_0_10px_1px_rgba(225,6,19,0.5)] transition-all duration-500" />
              
              {/* Year Label */}
              <span className="text-[#E10613] font-mono text-[10px] tracking-[0.2em] uppercase block mb-2">
                {item.year}
              </span>
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl text-white font-medium mb-3 tracking-tight">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-[#A6A6A6] text-sm leading-relaxed max-w-xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
