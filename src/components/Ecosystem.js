"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({ 
  subsets: ["latin"], 
  weight: "400" 
});

const projects = [
  {
    title: "Grace Code",
    description: "Automação e engenharia de software focada em escala.",
    tags: ["TECH", "AUTOMATION", "B2B"],
    link: "#",
    status: "Online"
  },
  {
    title: "Divine Brew",
    description: "Ecossistema lifestyle e experiências sensoriais.",
    tags: ["LIFESTYLE", "BRAND", "D2C"],
    link: "#",
    status: "Online"
  },
  {
    title: "Mastimverse",
    description: "Ambiente imersivo de conexão e comunidade exclusiva.",
    tags: ["COMMUNITY", "WEB3", "HUB"],
    link: "#",
    status: "Online"
  },
  {
    title: "Mastim Scripts",
    description: "Laboratório de ferramentas e scripts open-source.",
    tags: ["OPEN-SOURCE", "LAB", "DEV"],
    link: "#",
    status: "Active"
  },
  {
    title: "YouTube",
    description: "Produção documental focada em tecnologia e visão.",
    tags: ["MEDIA", "DOCS", "CONTENT"],
    link: "#",
    status: "Recording"
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative py-24 px-6 bg-[#050505] overflow-hidden">
      {/* High Quality Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/fundo-papel.jpg.png" 
          alt="Mastim Background" 
          fill 
          quality={100}
          className="object-cover object-center opacity-30 grayscale" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/50 to-[#050505]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-16 md:mb-24">
          <h2 className={`text-white text-3xl md:text-5xl mb-4 ${greatVibes.className}`}>Modules</h2>
          <p className="text-[#777777] text-sm md:text-lg font-mono uppercase tracking-[0.3em]">Painel de Controle</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col bg-[#090909] border border-[#1a1a1a] p-6 hover:border-[#E10613]/50 transition-colors duration-500"
            >
              {/* Top Bar: Status */}
              <div className="flex justify-between items-center mb-8 border-b border-[#1a1a1a] pb-4">
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${project.status === 'Online' ? 'bg-[#E10613] shadow-[0_0_8px_1px_#E10613]' : 'bg-[#555555]'}`} />
                  <span className="text-[10px] font-mono uppercase text-[#A6A6A6] tracking-widest">
                    Status: {project.status}
                  </span>
                </div>
                <ArrowUpRight size={14} className="text-[#555555] group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl text-white font-medium mb-3 tracking-tight">{project.title}</h3>
              <p className="text-[#A6A6A6] text-sm leading-relaxed mb-10 flex-grow">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-[9px] font-mono uppercase text-[#555555] border border-[#1a1a1a] px-2 py-1 tracking-widest group-hover:border-[#333333] transition-colors duration-300">
                    [{tag}]
                  </span>
                ))}
              </div>

              {/* Hover Overlay Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#E10613]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
