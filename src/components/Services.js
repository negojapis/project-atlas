"use client";

const servicesItems = [
  { id: "01", title: "Direção Criativa", description: "Conceito visual, campanha, linguagem estética, direção de arte e construção de identidade para marcas e projetos." },
  { id: "02", title: "Identidade Visual & Branding", description: "Logo, paleta, tipografia, aplicações, posicionamento e direção visual." },
  { id: "03", title: "Sites & Landing Pages", description: "Sites institucionais, páginas de vendas, portfólios, páginas para eventos, artistas, profissionais e empresas." },
  { id: "04", title: "UI/UX & Interfaces", description: "Criação de interfaces, dashboards, sistemas, páginas responsivas e experiências digitais." },
  { id: "05", title: "Desenvolvimento Web", description: "Front-end, integrações, APIs, sistemas personalizados e manutenção." },
  { id: "06", title: "Automações & IA", description: "Automação de processos, integrações, chatbots, fluxos inteligentes e soluções com IA." },
  { id: "07", title: "Social Media & Conteúdo", description: "Planejamento visual, posts, stories, campanhas, organização de feed, identidade para redes e direção de conteúdo." },
  { id: "08", title: "Design Gráfico", description: "Pôsteres, campanhas, peças promocionais, materiais digitais, apresentações, cardápios, banners e artes." },
  { id: "09", title: "Fotografia", description: "Ensaios, retratos, produtos, eventos, tratamento e direção de imagem." },
  { id: "10", title: "Vídeo & Motion", description: "Captação, edição, reels, vídeos institucionais, teasers, animações e peças em movimento." },
  { id: "11", title: "Posicionamento Digital", description: "Análise de presença online, bio, linguagem, identidade, estratégia e percepção de marca." },
  { id: "12", title: "Consultoria Criativa & Digital", description: "Análise de projeto, direção, melhorias, soluções e planejamento de execução." }
];

export default function Services() {
  return (
    <section className="relative w-full py-32 bg-bg-base z-20 border-t border-white/5">
      <div className="max-w-[90vw] mx-auto flex flex-col">
        
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <div className="flex flex-col">
            <div className="flex items-end gap-2 mb-1">
              <span className="font-sans text-mastim-red text-2xl md:text-4xl font-bold leading-none">03.</span>
              <span className="font-mono text-xs md:text-sm tracking-widest text-text-secondary uppercase mb-1">O QUE EU</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-text-primary leading-none uppercase">
              FAÇO
            </h2>
          </div>

          <div className="flex items-center gap-8 md:gap-12">
            <p className="font-sans text-[10px] md:text-xs text-text-secondary max-w-[220px] leading-relaxed uppercase">
              Soluções criativas multidisciplinares para marcas e projetos autênticos.
            </p>
            <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-mastim-red shadow-[0_0_40px_rgba(229,43,26,0.3)]"></div>
          </div>
        </div>

        {/* Text Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 lg:gap-x-20">
          {servicesItems.map((item) => (
            <div key={item.id} className="flex flex-col gap-4 group">
              <div className="flex items-start border-t border-white/20 pt-4 w-full transition-colors duration-500 group-hover:border-mastim-red">
                <span className="font-mono text-xs text-mastim-red font-bold tracking-widest">{item.id}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-sans tracking-tight text-text-primary uppercase group-hover:text-mastim-red transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed font-sans max-w-[95%]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
