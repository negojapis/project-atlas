"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const modulesData = [
  {
    name: "Grace Code Systems",
    description: "Tecnologia, sites, sistemas, automações, IA e soluções digitais.",
    link: "https://www.instagram.com/gracecode.systems/",
    tags: ["Technology", "Systems", "AI"],
  },
  {
    name: "Divine Brew Co.",
    description: "Café, pausa, presença e propósito.",
    link: "https://divinebrewco.com/",
    tags: ["Coffee", "Lifestyle"],
  },
  {
    name: "Mastimverse",
    description: "Comunidade geek ativa: anime, mangás, games, tecnologia e conexões.",
    link: "https://discord.gg/rzC7RA6Qt",
    tags: ["Community", "Geek", "Discord"],
  },
  {
    name: "Mastim Scripts",
    description: "Ferramentas de limpeza, otimização e manutenção para Windows.",
    link: "https://drive.google.com/file/d/127TY_cUChI2gKstUZqomVLK7E4GYbceO/view?usp=drive_link",
    tags: ["Tools", "Windows", "Optimization"],
  },
  {
    name: "YouTube",
    description: "Conteúdo, bastidores, tecnologia e criação.",
    link: "https://www.youtube.com/@Mastimoficial",
    tags: ["Content", "Creator"],
  }
];

function ModuleCard({ data, index }) {
  return (
    <motion.a
      href={data.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
      className="group relative flex flex-col p-8 rounded-3xl bg-[#101010] border border-[#252525] overflow-hidden hover:border-[#E10613]/50 transition-colors duration-500"
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E10613]/0 to-[#E10613]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Top section: Status & Tags */}
      <div className="flex items-center justify-between mb-12 z-10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_1px_rgba(16,185,129,0.5)] animate-pulse" />
          <span className="text-[#A6A6A6] text-xs font-mono uppercase tracking-wider">Online</span>
        </div>
        <div className="flex gap-2">
          {data.tags.slice(0, 2).map((tag, i) => (
            <span key={i} className="text-[10px] uppercase font-mono tracking-widest text-[#A6A6A6] px-2 py-1 rounded-full border border-[#252525]">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="z-10 mt-auto">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#E10613] transition-colors duration-300">
              {data.name}
            </h3>
            <p className="text-[#A6A6A6] text-sm md:text-base max-w-sm leading-relaxed">
              {data.description}
            </p>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#050505] border border-[#252525] flex items-center justify-center group-hover:bg-[#E10613] group-hover:border-[#E10613] transition-colors duration-300">
            <ExternalLink className="w-4 h-4 text-[#A6A6A6] group-hover:text-white transition-colors duration-300" />
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative min-h-screen py-32 px-6 overflow-hidden">
      {/* Neural Link Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 hidden md:block">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M 200 0 L 200 400 L 800 600 L 800 1000" stroke="#252525" strokeWidth="1" fill="none" strokeDasharray="4 4" />
          <path d="M 800 0 L 800 400 L 200 600 L 200 1000" stroke="#252525" strokeWidth="1" fill="none" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#A6A6A6] uppercase tracking-widest text-sm font-mono flex items-center gap-4 mb-4"
          >
            <span className="w-8 h-[1px] bg-[#E10613]" />
            Modules
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-medium text-white tracking-tight"
          >
            Ecossistema Mastim.
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modulesData.map((module, index) => (
            <div key={index} className={index === modulesData.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}>
              <ModuleCard data={module} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
