"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export default function WhoIsMastim() {
  const cardRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 260, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 260, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="quem-e-o-mastim"
      className="relative w-full py-32 bg-bg-base z-20 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-[95vw] lg:max-w-[90vw] mx-auto flex flex-col">
        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <div className="flex flex-col">
            <div className="flex items-end gap-2 mb-2">
              <span className="font-sans text-mastim-red text-2xl md:text-3xl font-bold leading-none">
                05.
              </span>
              <span className="font-mono text-xs md:text-sm tracking-widest text-text-secondary uppercase mb-1">
                PERFIL & TRAJETÓRIA
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-text-primary leading-[1.08]">
              Quem é o <br />
              <span className="font-semibold text-text-primary">Mastim</span>
            </h2>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Interactive Rounded Photo Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center [perspective:1200px]"
          >
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => setIsActive((prev) => !prev)}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              whileHover={{ scale: 1.02, y: -6 }}
              whileTap={{ scale: 0.97 }}
              animate={{
                scale: isActive ? 1.03 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`group relative w-full max-w-[460px] aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer select-none transition-shadow duration-500 ${
                isActive
                  ? "ring-2 ring-mastim-red shadow-[0_30px_80px_-15px_rgba(229,43,26,0.45)]"
                  : "ring-1 ring-white/15 hover:ring-mastim-red/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] hover:shadow-[0_30px_70px_-15px_rgba(229,43,26,0.28)]"
              }`}
            >
              <Image
                src="/IMG_0418.JPG.jpeg"
                alt="Felipe Gonçalves — Mastim"
                fill
                draggable={false}
                sizes="(max-width: 1024px) 90vw, 460px"
                className={`object-cover object-top transition-transform duration-700 ease-out pointer-events-none select-none ${
                  isActive ? "scale-105" : "group-hover:scale-[1.04]"
                }`}
                priority
              />

              {/* Subtle bottom gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-80 group-hover:opacity-65 transition-opacity duration-500 pointer-events-none" />

              {/* Interactive Glare on Hover */}
              <motion.div
                className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 55%)",
                  left: glareX,
                  top: glareY,
                  width: "180%",
                  height: "180%",
                  transform: "translate(-50%, -50%)",
                  mixBlendMode: "overlay",
                }}
              />

              {/* Bottom caption inside the rounded card */}
              <div
                className="absolute bottom-0 inset-x-0 p-6 md:p-8 z-20 flex items-end pointer-events-none"
                style={{ transform: "translateZ(24px)" }}
              >
                <span className="font-sans text-xl md:text-2xl font-semibold text-white tracking-tight">
                  Felipe Gonçalves
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Editorial Bio Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-6 md:gap-7"
          >
            <div className="flex flex-col gap-1 pb-2 border-l-2 border-mastim-red pl-5">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-text-primary">
                Felipe Gonçalves.
              </h3>
              <p className="text-xl sm:text-2xl md:text-3xl font-light tracking-tight text-text-secondary">
                Pode me chamar de <span className="text-mastim-red font-medium">Mastim</span>.
              </p>
            </div>

            <div className="flex flex-col gap-5 font-sans text-base md:text-lg text-text-secondary leading-relaxed">
              <p className="text-text-primary/95">
                Sou diretor criativo, desenvolvedor e fundador da Grace Code Systems. Conecto design, tecnologia e comunicação para ajudar marcas, profissionais e empresas a transformar suas ideias em projetos com identidade e propósito.
              </p>

              <p>
                Minha trajetória passa pela tecnologia da informação, fotografia, audiovisual e produção musical. Essa combinação influencia meu jeito de trabalhar: entender o contexto, construir uma direção e cuidar dos detalhes que tornam cada projeto reconhecível.
              </p>

              <p>
                Hoje, meu trabalho reúne identidade visual, sites, sistemas web, conteúdo e automações. Posso ajudar você a apresentar melhor seu negócio, organizar sua presença digital ou desenvolver ferramentas que facilitem sua operação.
              </p>

              <p>
                A música, a arte e a cultura visual fazem parte de quem sou. É desse encontro entre repertório criativo e conhecimento técnico que nasce o meu trabalho.
              </p>
            </div>

            <div className="pt-4 mt-2 border-t border-white/10">
              <p className="font-sans text-lg md:text-xl font-medium text-text-primary tracking-tight">
                Tem uma ideia ou um negócio que precisa dar o próximo passo?{" "}
                <a
                  href="https://wa.me/5511940634737"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mastim-red underline underline-offset-4 decoration-mastim-red/50 hover:decoration-mastim-red transition-colors"
                >
                  Vamos conversar.
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

