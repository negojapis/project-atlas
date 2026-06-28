"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({ 
  subsets: ["latin"], 
  weight: "400" 
});

export default function About() {
  return (
    <section className="relative min-h-screen flex items-center py-20 px-6 bg-transparent overflow-hidden">

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
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
          <h2 className={`text-[#777777] text-3xl md:text-5xl flex items-center gap-4 ${greatVibes.className}`}>
            <span className="w-8 h-[1px] bg-[#E10613]" />
            Felipe Gonçalves
          </h2>
          
          <p className="text-2xl md:text-4xl lg:text-5xl text-white font-medium leading-tight">
            Sou Felipe Gonçalves, também conhecido como Mastim.
          </p>

          <p className="text-[#A6A6A6] text-lg md:text-xl leading-relaxed max-w-xl">
            Minha trajetória começou pela curiosidade e evoluiu para tecnologia, marcas, comunidade e construção de experiências digitais.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
