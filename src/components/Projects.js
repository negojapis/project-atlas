"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const editorialProjects = [
  {
    id: "001",
    title: "CREATIVE LICENSE",
    category: "IDENTITY / ART DIRECTION / PERSONAL",
    year: "2026",
    image: "/Imagem do ChatGPT 30 de set. de 2026, 17_59_54.png", // Using the license image as project 1
    description: "The manifestation of the Mastimverse identity. A physical/digital hybrid exploring the boundaries of a creative profile."
  },
  {
    id: "002",
    title: "JAPANESE VISUAL STUDY",
    category: "ART DIRECTION / VISUAL EXPERIMENT",
    year: "2025",
    image: "/foto.3.png",
    description: "Exploração visual que mistura a disciplina do design tipográfico japonês com o caos estruturado do mundo físico."
  },
  {
    id: "003",
    title: "EDITORIAL STUDY",
    category: "CREATIVE DIRECTION / PHOTOGRAPHY",
    year: "2024",
    image: "/foto.png",
    description: "Ensaio fotográfico editorial com forte ênfase em sombra, texturas reais e composição minimalista."
  }
];

function EditorialProject({ project }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <div ref={ref} className="w-full flex flex-col items-center justify-center py-24 border-b border-white/5 last:border-0 group">
      
      {/* Editorial Header */}
      <div className="w-full max-w-[85vw] md:max-w-[70vw] flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div className="flex flex-col">
          <span className="font-mono text-xs text-text-secondary mb-2 tracking-widest">PROJECT {project.id}</span>
          <h3 className="font-sans font-bold text-4xl md:text-7xl text-text-primary tracking-tighter group-hover:text-mastim-red transition-colors duration-500">
            {project.title}
          </h3>
          <span className="font-mono text-[10px] md:text-xs text-text-secondary mt-2 tracking-widest uppercase">
            {project.category}
          </span>
        </div>
        <div className="font-serif italic text-text-secondary text-sm md:text-base">
          {project.year}
        </div>
      </div>

      {/* Image Container with Parallax */}
      <div className="w-full max-w-[85vw] md:max-w-[70vw] aspect-[16/9] md:aspect-[21/9] relative overflow-hidden bg-mastim-card">
        <motion.div 
          style={{ y, scale }}
          className="w-full h-[120%] absolute -top-[10%]"
        >
          <Image 
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0"
          />
        </motion.div>
      </div>

      {/* Footer / Description */}
      <div className="w-full max-w-[85vw] md:max-w-[70vw] flex flex-col md:flex-row justify-between items-start mt-8 gap-6">
        <p className="font-serif text-sm md:text-lg text-text-primary/70 max-w-md">
          {project.description}
        </p>
        <a href="#view" className="font-mono text-[10px] md:text-xs tracking-widest text-text-primary border-b border-text-primary/30 pb-1 hover:text-mastim-red hover:border-mastim-red transition-all flex items-center gap-2">
          VIEW PROJECT ↗
        </a>
      </div>

    </div>
  );
}

export default function Projects() {
  return (
    <section className="relative w-full py-32 bg-bg-base z-20">
      <div className="w-full flex flex-col items-center">
        {editorialProjects.map((project, idx) => (
          <EditorialProject key={project.id} project={project} />
        ))}

        {/* Categories List at the bottom of Projects */}
        <div className="w-full max-w-[85vw] md:max-w-[70vw] mt-32 flex flex-wrap gap-4 md:gap-8 opacity-50 font-mono text-xs md:text-sm tracking-widest uppercase items-center justify-center">
          <span>Branding</span>
          <span>Photography</span>
          <span>Web</span>
          <span>UI</span>
          <span>AI</span>
          <span>Motion</span>
          <span>Etc.</span>
        </div>
      </div>
    </section>
  );
}
