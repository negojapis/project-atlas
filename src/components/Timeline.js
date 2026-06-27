"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const journeySteps = [
  {
    year: "2009",
    title: "O início da curiosidade",
    description: "Desmontando computadores, rádios, placas, conectores e gabinetes para entender como tudo funcionava.",
    isKey: true,
  },
  { title: "Hardware e conserto" },
  { title: "Suporte técnico" },
  { title: "Fotografia e audiovisual" },
  { title: "Gerenciamento de lojas virtuais" },
  { title: "Implantação de IA em máquinas e totens" },
  { title: "Liderança em time de TI" },
  { title: "Consultoria de TI" },
  { title: "Empreendedorismo com loja de roupas femininas" },
  { title: "Empreendedorismo com loja de sapatos femininos" },
  { title: "Empreendedorismo com roupas masculinas streetwear" },
  { title: "Produção musical" },
  { title: "Grace Code Systems", isKey: true },
  { title: "Divine Brew Co.", isKey: true },
  { title: "Mastimverse", isKey: true },
];

export default function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#A6A6A6] uppercase tracking-widest text-sm font-mono flex items-center justify-center gap-4 mb-24"
        >
          <span className="w-8 h-[1px] bg-[#E10613]" />
          Journey Line
          <span className="w-8 h-[1px] bg-[#E10613]" />
        </motion.h2>

        <div className="relative">
          {/* Background Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#252525] -translate-x-1/2" />
          
          {/* Animated Fill Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 top-0 w-[1px] bg-[#F5F5F5] -translate-x-1/2 origin-top"
          />

          {journeySteps.map((step, index) => (
            <JourneyStep key={index} step={step} index={index} />
          ))}

          {/* Final Step */}
          <div className="relative flex items-center justify-center mt-24">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "backOut" }}
              className="w-3 h-3 rounded-full bg-[#E10613] shadow-[0_0_15px_3px_#E10613] z-10"
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute mt-12 text-[#A6A6A6] font-mono uppercase tracking-widest text-sm"
            >
              E a construção continua...
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

function JourneyStep({ step, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`relative flex items-center mb-16 md:mb-24 ${
        isEven ? "md:justify-start" : "md:justify-end"
      }`}
    >
      {/* Connector Line (Mobile: Hidden, Desktop: Shown) */}
      <div className={`hidden md:block absolute top-1/2 w-16 h-[1px] bg-[#252525] ${
        isEven ? "right-1/2" : "left-1/2"
      }`} />

      {/* Dot */}
      <div className="absolute left-4 md:left-1/2 w-3 h-3 -translate-x-1/2 rounded-full border border-[#F5F5F5] bg-[#050505] z-10 transition-colors duration-500 hover:bg-[#F5F5F5]">
        {step.isKey && (
          <div className="absolute inset-0 rounded-full bg-[#E10613] scale-50 opacity-80 shadow-[0_0_10px_1px_#E10613]" />
        )}
      </div>

      {/* Content */}
      <div className={`ml-12 md:ml-0 md:w-[40%] ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
        {step.year && (
          <span className="inline-block px-3 py-1 mb-3 text-xs font-mono tracking-widest text-[#E10613] border border-[#E10613]/30 rounded-full bg-[#E10613]/5">
            {step.year}
          </span>
        )}
        <h3 className={`text-xl md:text-2xl font-medium ${step.isKey ? "text-white" : "text-[#A6A6A6]"}`}>
          {step.title}
        </h3>
        {step.description && (
          <p className="mt-3 text-[#A6A6A6] text-sm leading-relaxed">
            {step.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
