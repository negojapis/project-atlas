"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Clientes satisfeitos" },
  { value: "10+", label: "Países alcançados" },
  { value: "120+", label: "Projetos entregues" },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "CEO, Aura Wellness",
    text: "Absolutely phenomenal work. The attention to detail and the high-end aesthetic completely transformed our digital presence. A true professional.",
    flag: "us",
  },
  {
    id: 2,
    name: "Roberto Almeida",
    role: "Diretor de Marketing",
    text: "A entrega foi impecável. O site ficou super elegante e a conversão da nossa marca dobrou logo no primeiro mês. Trabalhar com você é sinônimo de excelência.",
    flag: "br",
  },
  {
    id: 3,
    name: "Michael Torres",
    role: "Founder, Meridian",
    text: "Fast, communicative, and exceptionally talented. He understood exactly what our luxury brand needed and the final delivery exceeded all expectations.",
    flag: "ca",
  },
  {
    id: 4,
    name: "Camila Farias",
    role: "Arquiteta",
    text: "O processo criativo foi super fluido. Ele não apenas entregou um site lindo, mas pensou em toda a jornada do usuário. Recomendo de olhos fechados.",
    flag: "br",
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full py-32 bg-bg-base z-20 border-t border-white/5 overflow-hidden">
      <div className="max-w-[95vw] lg:max-w-[90vw] mx-auto flex flex-col">
        
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12">
          <div className="flex flex-col">
            <div className="flex items-end gap-2 mb-1">
              <span className="font-sans text-mastim-red text-2xl md:text-4xl font-bold leading-none">04.</span>
              <span className="font-mono text-xs md:text-sm tracking-widest text-text-secondary uppercase mb-1">IMPACTO &</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-text-primary leading-none uppercase">
              FEEDBACKS
            </h2>
          </div>
          
          <div className="flex items-center gap-8 md:gap-12">
            <p className="font-sans text-[10px] md:text-xs text-text-secondary max-w-[220px] leading-relaxed uppercase">
              Resultados reais e a confiança de marcas que pensam no futuro.
            </p>
            <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-mastim-red shadow-[0_0_40px_rgba(229,43,26,0.3)]"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 border-y border-white/5 py-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start">
              <span className="text-5xl md:text-7xl font-black tracking-tighter text-mastim-red">
                {stat.value}
              </span>
              <span className="font-mono text-xs md:text-sm tracking-widest text-text-secondary uppercase mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group bg-mastim-card/20 border border-white/5 p-8 flex flex-col justify-between gap-8 hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex flex-col gap-4">
                <span className="text-mastim-red text-4xl leading-none">"</span>
                <p className="font-sans text-lg md:text-xl text-text-primary leading-relaxed opacity-90">
                  {item.text}
                </p>
              </div>

              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
                <div className="flex flex-col">
                  <span className="font-sans font-bold text-sm text-text-primary tracking-wide">
                    {item.name}
                  </span>
                  <span className="font-mono text-[10px] text-text-secondary tracking-widest mt-1">
                    {item.role}
                  </span>
                </div>
                <img 
                  src={`https://flagcdn.com/w20/${item.flag}.png`} 
                  alt={`${item.flag} flag`} 
                  className="w-5 h-auto opacity-70 grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
