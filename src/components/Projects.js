"use client";

import { motion } from "framer-motion";
import SectionSubtitle from "@/components/ui/SectionSubtitle";
import Divider from "@/components/ui/Divider";
import ProjectCard from "@/components/ui/ProjectCard";

const projectsData = [

  {
    title: "Navity",
    segment: "Relojoaria de Luxo",
    image: "/Navity.png",
    languages: ["React Native", "Expo", "Firebase"],
    systems: ["Arquitetura de Navegação", "Design System Mobile", "Autenticação Biométrica"]
  },
  {
    title: "Cars",
    segment: "Concessionária de Carros",
    image: "/Cars.png",
    languages: ["Vue.js", "Nuxt", "Tailwind CSS"],
    systems: ["Motor de Busca Avançado", "Galeria 360", "Portal de Concessionárias"]
  },
  {
    title: "Motors",
    segment: "Concessionária de Moto",
    image: "/Motors.png",
    languages: ["Next.js", "Prisma", "PostgreSQL"],
    systems: ["Gestão de Estoque", "Agendamento de Test Drive", "Integração Bancária"]
  },
  {
    title: "Makeup Artist",
    segment: "Portfólio Profissional (Maquiagem)",
    image: "/Makeup Art.png",
    languages: ["Framer", "React", "CSS Animations"],
    systems: ["Calendário Interativo", "Galeria Editorial", "Design Minimalista"]
  },
  {
    title: "Lumina Beauty",
    segment: "E-commerce de Cosmético",
    image: "/Lumina.png",
    languages: ["React", "Stripe API", "Framer Motion"],
    systems: ["Carrinho Flutuante", "Recomendação por IA", "Sistema de Fidelidade"]
  },
  {
    title: "Apex Finance",
    segment: "Financiadora",
    image: "/Apex Finance.png",
    languages: ["TypeScript", "Next.js", "Chart.js"],
    systems: ["Dashboard Analítico", "Integração de PIX", "Segurança Bancária"]
  },
  {
    title: "Studio Blanco",
    segment: "Arquitetura",
    image:  "/Studio Blanco.png",
    languages: ["WebGL", "Three.js", "GSAP"],
    systems: ["Passeio Virtual 3D", "Portfólio Interativo", "Experiência Imersiva"]
  },
  {
    title: "Hair & Co",
    segment: "Cabeleireiro",
    image: "/Hair & Co.png",
    languages: ["React", "Tailwind CSS", "Node.js"],
    systems: ["Agendamento Online", "Catálogo de Serviços", "Gestão de Clientes"]
  },
  {
    title: "Vogue Apparel",
    segment: "Loja de Roupa",
    image: "/Vogue Apparel.png",
    languages: ["Shopify", "Liquid", "Javascript"],
    systems: ["Vitrine Dinâmica", "Integração de Estoque", "Checkout Rápido"]
  },
  {
    title: "Step Kicks",
    segment: "Loja de Calçados",
    image: "/Step Kicks.png",
    languages: ["Next.js", "Framer Motion", "Stripe API"],
    systems: ["Filtros Avançados", "Provador Virtual 3D", "Sistema de Ofertas"]
  },
  {
    title: "Prime Estates",
    segment: "Imobiliária",
    image: "/Prime Estates.png",
    languages: ["Vue.js", "Firebase", "Google Maps API"],
    systems: ["Busca por Mapa", "Agendamento de Visitas", "Painel do Corretor"]
  },
  {
    title: "Gamer X",
    segment: "Jogos / Identidade para Twitch",
    image: "/Gamer x.png",
    languages: ["Figma", "After Effects", "OBS Studio"],
    systems: ["Overlays Animados", "Alertas Customizados", "Painéis de Stream"]
  },
  {
    title: "Vision Optics",
    segment: "Ótica",
    image: "/Vision Optics.png",
    languages: ["React", "CSS Modules", "Redux"],
    systems: ["Teste de Armação Virtual", "Prescrição Online", "Catálogo de Lentes"]
  }
];

export default function Projects() {
  // Duplicamos o array para criar a ilusão de loop infinito na esteira
  const duplicatedProjects = [...projectsData, ...projectsData];

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-transparent z-content">
      
      {/* Cabeçalho da Sessão */}
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col gap-6">
        <SectionSubtitle as="h2" className="flex items-center gap-4">
          <Divider className="w-8" />
          ARQUIVO DE PROJETOS
        </SectionSubtitle>
      </div>

      {/* Esteira (Marquee) Container */}
      {/* Mascaramos as bordas para sumir gradualmente (fade edges) apenas em telas grandes para não cortar de forma dura */}
      <div className="w-full relative [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] md:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        
        {/* Pista de rolagem animada */}
        <motion.div
          className="flex gap-16 md:gap-24 px-8 w-max"
          animate={{
            x: ["0%", "-50%"] // Move a esteira pela metade do seu tamanho
          }}
          transition={{
            duration: 50, // Muito suave e lento
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
