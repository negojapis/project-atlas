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
    <footer className="relative pt-32 pb-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Quick Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-32">
          {quickLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-6 rounded-2xl bg-[#090909] border border-[#252525] text-[#A6A6A6] text-sm font-mono uppercase tracking-wider hover:bg-[#E10613]/5 hover:text-white hover:border-[#E10613]/30 transition-all duration-300"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Footer Bottom / Next Chapter */}
        <div className="flex flex-col items-center text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">
              O universo continua <br className="md:hidden" />sendo construído.
            </h2>
            <p className="text-[#A6A6A6] uppercase tracking-widest font-mono text-sm">
              MASTIM // EXPERIENCE — 2026
            </p>
          </motion.div>

          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="group flex flex-col items-center gap-4 text-[#A6A6A6] hover:text-white transition-colors"
          >
            <span className="text-xs uppercase font-mono tracking-widest">Continue explorando</span>
            <div className="w-12 h-12 rounded-full border border-[#252525] flex items-center justify-center group-hover:border-white transition-colors">
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
