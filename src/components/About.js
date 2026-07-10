"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionSubtitle from "@/components/ui/SectionSubtitle";
import BodyText from "@/components/ui/BodyText";
import MicroLabel from "@/components/ui/MicroLabel";
import Divider from "@/components/ui/Divider";

export default function About() {
  return (
    <SectionContainer className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-16 relative z-content">
        
        {/* Header Block (Full Width) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full flex flex-col gap-8 md:gap-12"
        >
          <SectionSubtitle as="h2" className="flex items-center gap-4">
            <Divider className="w-8" />
            FELIPE GONÇALVES
          </SectionSubtitle>
          <SectionTitle as="p" className="text-text-primary text-4xl md:text-5xl lg:text-6xl leading-tight max-w-6xl">
            Nunca entreguei apenas projetos, sempre construí experiências.
          </SectionTitle>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start w-full">
        
        {/* Abstract Editorial Photo */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full aspect-square md:aspect-[4/5] relative group rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 border border-border-default rounded-3xl z-content pointer-events-none transition-colors duration-slow group-hover:border-border-focus" />
          <Image
            src="/foto.png"
            alt="Felipe Gonçalves"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center z-background opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s] ease-out mix-blend-lighten"
          />
          {/* Technical mark */}
          <MicroLabel className="absolute bottom-6 left-6 z-overlay">
            [ ID: F.GONCALVES ]
          </MicroLabel>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="space-y-12"
        >
          {/* Texto */}
          <div className="space-y-6">
            <BodyText>
              Meu nome é Felipe Gonçalves.<br />
              Mas a maioria das pessoas me conhece como Mastim.
            </BodyText>
            <BodyText>
              Minha trajetória não começou com grandes planos, começou com a pura curiosidade de desmontar computadores para entender como o mundo funcionava por trás das telas. Foi criando, errando e aprendendo na prática que forjei minha base.
            </BodyText>
            <BodyText>
              Com o amadurecimento, entendi algo fundamental: a tecnologia nunca foi o destino final. Ela sempre foi apenas a ferramenta para chegar até as pessoas.
            </BodyText>
            <BodyText>
              Hoje, dedico minha energia a arquitetar marcas, produtos e comunidades digitais. Muito mais do que desenhar interfaces, crio ecossistemas que geram conexões reais e que se mantêm relevantes através dos anos.
            </BodyText>
            <BodyText>
              Porque, no fim das contas, ninguém guarda um projeto na memória por causa das linhas de código que o sustentam. O que permanece é o impacto que ele deixa.
            </BodyText>
          </div>

          {/* Frase final */}
          <div className="pt-6 border-t border-border-default">
            <p className="text-xl md:text-2xl text-text-primary font-serif tracking-wide leading-relaxed">
              Tudo começa com curiosidade.<br />
              <span className="text-text-secondary">O resto é construção.</span>
            </p>
          </div>
        </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}
