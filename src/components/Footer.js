"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative w-full bg-bg-base border-t border-white/5 pt-32 pb-12 overflow-hidden z-20">
      
      {/* Contact Section */}
      <div className="w-full max-w-[85vw] md:max-w-[70vw] mx-auto mb-32 flex flex-col md:flex-row justify-between gap-16">
        
        {/* Left Side: Contact Intro */}
        <div className="w-full md:w-1/2 flex flex-col">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-text-primary mb-6">
            VAMOS CRIAR ALGO QUE VALE SER LEMBRADO.
          </h2>
          <p className="font-serif italic text-text-secondary text-sm md:text-lg mb-8">
            Onde a estética não é um detalhe, é o próprio fundamento.
          </p>

          <div className="flex flex-col gap-4 mt-auto font-mono text-[10px] md:text-xs tracking-widest text-text-secondary uppercase">
            <a href="https://wa.me/5511940634737" target="_blank" rel="noopener noreferrer" className="hover:text-mastim-red transition-colors w-max">WhatsApp ↗</a>
            <a href="https://www.instagram.com/mastim.vision/" target="_blank" rel="noopener noreferrer" className="hover:text-mastim-red transition-colors w-max">Instagram ↗</a>
            <a href="https://discord.gg/pdYMmVJMQ" target="_blank" rel="noopener noreferrer" className="hover:text-mastim-red transition-colors w-max">Discord ↗</a>
          </div>
        </div>

        {/* Right Side: Simple Form Placeholder */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 font-mono">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] text-text-secondary tracking-widest uppercase">Nome</label>
            <input type="text" className="bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-mastim-red transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] text-text-secondary tracking-widest uppercase">Email</label>
            <input type="email" className="bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-mastim-red transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] text-text-secondary tracking-widest uppercase">Projeto / Mensagem</label>
            <textarea rows="4" className="bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-mastim-red transition-colors resize-none" />
          </div>
          
          <button className="mt-4 self-start font-sans font-bold text-sm bg-text-primary text-bg-base px-8 py-3 hover:bg-mastim-red hover:text-white transition-colors">
            INICIAR PROJETO ↗
          </button>
        </div>

      </div>

      {/* Creative Profile Ficha (Moved from About) */}
      <div className="w-full flex justify-center border-t border-white/5 pt-20 pb-12">
        <div className="w-full max-w-[85vw] md:max-w-[70vw] border border-white/10 bg-mastim-card/30 backdrop-blur-md p-8 md:p-12 relative overflow-hidden">
          {/* Background Noise for the "ficha" */}
          <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" 
               style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-12">
            {/* Left info */}
            <div className="flex flex-col gap-6 w-full md:w-1/3">
              <div>
                <h3 className="text-3xl font-bold tracking-tighter">CREATIVE PROFILE</h3>
                <p className="font-mono text-[10px] uppercase text-text-secondary mt-1">Creative License #0026</p>
              </div>

              <div className="flex flex-col gap-1 mt-4 border-t border-white/10 pt-4">
                <span className="font-mono text-[10px] text-text-secondary uppercase">Nome</span>
                <span className="text-lg font-bold">FELIPE GONÇALVES (MASTIM)</span>
              </div>

              <div className="flex flex-col gap-1 border-t border-white/10 pt-4">
                <span className="font-mono text-[10px] text-text-secondary uppercase">Função</span>
                <span className="text-sm font-medium">Diretor Criativo & Desenvolvedor</span>
              </div>
            </div>

            {/* Right Tags & Phrase */}
            <div className="w-full md:w-2/3 flex flex-col justify-between h-full gap-12 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
              
              <div>
                <span className="font-mono text-[10px] text-text-secondary uppercase mb-4 block">Especialidades</span>
                <div className="flex flex-wrap gap-2">
                  {["Creative Direction", "Development", "Branding", "UI/UX", "Photography", "Video", "AI", "Music", "Strategy", "Visual Design", "Social Media", "Content", "Motion"].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-black/40 border border-white/10 rounded-full text-xs font-mono uppercase text-text-secondary hover:text-white hover:border-mastim-red transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-8">
                <p className="font-serif italic text-xl md:text-3xl text-mastim-red">
                  “Não me especializo em uma mídia.<br/>
                  Me especializo em transformar ideias em experiências.”
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-[90vw] flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-6 mt-12 gap-4">
          <div className="font-mono text-[10px] text-text-secondary tracking-widest uppercase">
            Direção Criativa / Design / Tecnologia
          </div>
          
          <div className="font-mono text-[10px] text-mastim-red tracking-widest flex items-center gap-2 uppercase">
            <span className="w-2 h-2 rounded-full bg-mastim-red animate-pulse" />
            STATUS: CRIANDO.
          </div>
        </div>
      </div>
      
    </footer>
  );
}
