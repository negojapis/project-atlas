"use client";

import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { ArrowUp } from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import MicroLabel from "@/components/ui/MicroLabel";
import Command from "@/components/ui/Command";
import Divider from "@/components/ui/Divider";
import SocialIcons from "@/components/ui/SocialIcons";


import { useState, useEffect } from "react";

const TypewriterGroup = () => {
  const [counts, setCounts] = useState([0, 0, 0]);
  
  useEffect(() => {
    let timeout;
    let isDeleting = false;
    let lineIndex = 0;
    let currentCounts = [0, 0, 0];
    let isMounted = true;
    
    const phrases = [
      "Muito além de projetos.",
      "Construo conexões.",
      "Crio experiências."
    ];
    
    const tick = () => {
      if (!isMounted) return;
      
      if (!isDeleting) {
        // Digitando
        if (currentCounts[lineIndex] < phrases[lineIndex].length) {
          currentCounts[lineIndex]++;
          setCounts([...currentCounts]);
          timeout = setTimeout(tick, 60); // Velocidade de digitação
        } else {
          // Terminou a linha atual
          if (lineIndex < 2) {
            lineIndex++;
            timeout = setTimeout(tick, 300); // Pausa breve entre linhas
          } else {
            // Terminou todas as linhas, aguarda antes de apagar
            isDeleting = true;
            timeout = setTimeout(tick, 4000); 
          }
        }
      } else {
        // Apagando
        if (currentCounts[lineIndex] > 0) {
          currentCounts[lineIndex]--;
          setCounts([...currentCounts]);
          timeout = setTimeout(tick, 20); // Velocidade de apagar (mais rápida)
        } else {
          // Terminou de apagar a linha atual
          if (lineIndex > 0) {
            lineIndex--;
            timeout = setTimeout(tick, 100);
          } else {
            // Terminou de apagar tudo, aguarda antes de recomeçar
            isDeleting = false;
            timeout = setTimeout(tick, 1500);
          }
        }
      }
    };
    
    // Inicia o loop após 1 segundo
    timeout = setTimeout(tick, 1000);
    
    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, []);
  
  const phrases = [
    "Muito além de projetos.",
    "Construo conexões.",
    "Crio experiências."
  ];
  
  const classes = [
    "text-text-primary",
    "text-text-secondary",
    "text-text-tertiary"
  ];
  
  return (
    <div className="flex flex-col items-center space-y-4">
      {phrases.map((phrase, lineIdx) => (
        <SectionTitle key={lineIdx} className={classes[lineIdx]}>
          <span className="inline-block">
            {Array.from(phrase).map((letter, charIdx) => (
              <span 
                key={charIdx} 
                className={charIdx < counts[lineIdx] ? "opacity-100" : "opacity-0"}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </span>
        </SectionTitle>
      ))}
    </div>
  );
};

export default function Footer() {
  const lenis = useLenis();

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 2, ease: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative pt-32 pb-[env(safe-area-inset-bottom)] px-6 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Footer Bottom / Next Chapter (Epílogo) */}
        <div className="flex flex-col items-center text-center space-y-24 w-full z-content">
          
          <div className="flex flex-col items-center space-y-4">
            <TypewriterGroup />

            {/* CTA & Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
              className="pt-32 pb-8 flex flex-col items-center gap-10 w-full"
            >
              <MicroLabel className="tracking-[0.3em] text-text-secondary">
                VAMOS CONSTRUIR ALGO JUNTOS?
              </MicroLabel>
              
              <SocialIcons />
            </motion.div>
          </div>

          {/* Fim do Livro / Restart */}
          <div className="pt-16 pb-8 w-full max-w-2xl flex flex-col items-center relative">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
              className="absolute top-0 left-0 right-0 origin-center"
            >
              <Divider />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 2.0, ease: "easeOut" }}
            >
              <MicroLabel className="mb-8 tracking-[0.5em]">
                MASTIM // VISION — 2026
              </MicroLabel>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 3.5, ease: "easeOut" }}
            >
              <Command onClick={scrollToTop} className="min-h-[64px] min-w-[64px] rounded-full border border-border-subtle hover:border-border-focus active:border-text-tertiary flex items-center justify-center motion-glow duration-normal">
                <ArrowUp className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:-translate-y-1 group-active:translate-y-0 transition-all duration-normal" />
              </Command>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
