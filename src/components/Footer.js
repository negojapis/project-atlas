"use client";

import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { ArrowUp } from "lucide-react";

const quickLinks = [
  { name: "Grace Code", href: "https://www.instagram.com/gracecode.systems/" },
  { name: "Divine Brew", href: "https://divinebrewco.com/" },
  { name: "Mastimverse", href: "https://discord.gg/rzC7RA6Qt" },
  { name: "Scripts", href: "https://drive.google.com/file/d/127TY_cUChI2gKstUZqomVLK7E4GYbceO/view?usp=drive_link" },
  { name: "YouTube", href: "https://www.youtube.com/@Mastimoficial" },
  { name: "WhatsApp", href: "https://wa.me/5511940634737" },
];

export default function Footer() {
  const lenis = useLenis();

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 2, ease: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    }
  };

  return (
    <footer className="relative pt-32 pb-12 px-6 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-40">
          {quickLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="text-[#666666] text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] hover:text-white transition-colors duration-500"
            >
              [ {link.name} ]
            </motion.a>
          ))}
        </div>

        {/* Footer Bottom / Next Chapter */}
        <div className="flex flex-col items-center text-center space-y-24">
          
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center space-y-4"
          >
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif font-light text-white tracking-wide leading-tight">
              Não construo apenas projetos.
            </h2>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif font-light text-[#888888] tracking-wide leading-tight">
              Construo conexões.
            </h2>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif font-light text-[#555555] tracking-wide leading-tight">
              Construo experiências.
            </h2>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif font-light text-[#333333] tracking-wide leading-tight pt-8">
              Construo o Universo Mastim.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="pt-16 border-t border-[#111111] w-full max-w-2xl flex flex-col items-center"
          >
            <p className="text-[#444444] uppercase tracking-[0.4em] font-mono text-[9px] mb-8">
              MASTIM // EXPERIENCE — 2026
            </p>
            <button
              onClick={scrollToTop}
              className="group flex flex-col items-center gap-4 text-[#555555] hover:text-white transition-colors duration-500"
            >
              <div className="w-10 h-10 rounded-full border border-[#222222] flex items-center justify-center group-hover:border-white transition-colors duration-500">
                <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform duration-500" />
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
