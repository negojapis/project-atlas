"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GlowCard } from "@/components/ui/spotlight-card";

export default function About() {
  return (
    <section className="relative min-h-screen flex items-center py-20 px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Abstract Tech Element */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-[400px] md:h-[600px] group"
        >
          <GlowCard customSize glowColor="red" className="w-full h-full bg-[#090909] border-none">
            {/* Photo */}
            <Image
              src="/foto.jpeg"
              alt="Felipe Gonçalves - Mastim"
              fill
              className="object-cover object-center z-0 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out mix-blend-lighten"
            />
          </GlowCard>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="space-y-8"
        >
          <h2 className="text-[#A6A6A6] uppercase tracking-widest text-sm font-mono flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#E10613]" />
            Quem é Mastim?
          </h2>
          
          <p className="text-2xl md:text-3xl lg:text-4xl text-white font-medium leading-relaxed">
            Sou Felipe Gonçalves, também conhecido como Mastim.
          </p>

          <p className="text-[#A6A6A6] text-lg leading-relaxed max-w-xl">
            Minha trajetória começou pela curiosidade: desde 2009 desmontando computadores, rádios, placas, conectores e gabinetes para entender como tudo funcionava.
          </p>
          
          <p className="text-[#A6A6A6] text-lg leading-relaxed max-w-xl">
            Com o tempo, essa curiosidade se transformou em tecnologia, empreendedorismo, audiovisual, música, IA, marcas e comunidade.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
