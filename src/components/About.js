"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative w-full py-32 bg-bg-base z-20 flex flex-col items-center">
      
      {/* Huge Text replacing the Ficha */}
      <div className="w-full border-white/5 pb-20 flex flex-col items-center">
        <h2 className="text-[10vw] font-bold tracking-tighter leading-none text-text-primary/10 select-none text-center mb-12">
          VAMOS CRIAR ALGO<br/>
          QUE VALE SER<br/>
          LEMBRADO.
        </h2>
      </div>

    </section>
  );
}
