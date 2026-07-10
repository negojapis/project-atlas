"use client";

import { motion } from "framer-motion";
import SectionContainer from "@/components/ui/SectionContainer";
import HeroTitle from "@/components/ui/HeroTitle";

export default function Manifesto() {
  const words = [
    "Curiosidade.",
    "Construção.",
    "Conexão.",
    "Ecossistema.",
    "Legado."
  ];

  return (
    <SectionContainer id="manifesto">
      <div className="flex flex-col items-center justify-center w-full">
        
        {words.map((word, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30%" }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="min-h-[60vh] flex items-center justify-center w-full px-6"
          >
            <HeroTitle as="h2">
              {word}
            </HeroTitle>
          </motion.div>
        ))}

      </div>
    </SectionContainer>
  );
}
