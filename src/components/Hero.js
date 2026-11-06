"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const BUTTERFLY_SRC = encodeURI("/Borboleta vermelha em fundo transparente.png");

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlyingLoop, setIsFlyingLoop] = useState(false);

  // Scroll animations
  const { scrollY } = useScroll();

  // Fade out hero elements on scroll
  const heroFade = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  const handleButterflyClick = () => {
    if (isFlyingLoop) return;
    setIsFlyingLoop(true);
    setTimeout(() => {
      setIsFlyingLoop(false);
    }, 2400);
  };

  return (
    <section className="relative w-full h-[100svh] bg-bg-base overflow-hidden flex flex-col items-center justify-center">
      {/* Main Hero Content */}
      <motion.div
        style={{ opacity: heroFade, scale: heroScale }}
        className="relative z-20 w-full h-full flex flex-col items-center justify-center px-4"
      >
        {/* Brand Name - Central & Monumental */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 1.5, ease: [0.2, 1, 0.2, 1] }}
          className="flex flex-col items-center justify-center select-none"
        >
          <h1
            aria-label="MASTIM"
            className="text-[21vw] sm:text-[21.5vw] md:text-[21vw] font-black text-text-primary tracking-[0.02em] leading-none whitespace-nowrap uppercase flex items-baseline justify-center"
          >
            <span>MAST</span>
            <span
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleButterflyClick}
              className="relative inline-flex items-center justify-center mx-[0.015em] cursor-pointer [perspective:900px]"
            >
              <span>I</span>

              {/* Interactive Red Butterfly on the letter "I" */}
              <motion.span
                initial={{ opacity: 0, x: 90, y: -110, rotate: -18, scale: 0.75 }}
                animate={
                  isFlyingLoop
                    ? {
                        opacity: 1,
                        x: [0, -45, 55, -20, 0],
                        y: [0, -65, -95, -40, 0],
                        rotate: [0, -16, 14, -8, 0],
                        scale: [1, 1.12, 1.06, 1.04, 1],
                      }
                    : isHovered
                    ? {
                        opacity: 1,
                        x: [0, 8, -6, 0],
                        y: [-14, -24, -16, -14],
                        rotate: [-6, 4, -4, -6],
                        scale: 1.08,
                      }
                    : {
                        opacity: 1,
                        x: 0,
                        y: [0, -4, 0],
                        rotate: [0, -1.5, 0],
                        scale: 1,
                      }
                }
                transition={
                  isFlyingLoop
                    ? { duration: 2.4, ease: "easeInOut" }
                    : isHovered
                    ? {
                        duration: 1.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                    : {
                        opacity: { duration: 0.9, delay: 0.3 },
                        x: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
                        y: {
                          duration: 3.6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                        rotate: {
                          duration: 3.6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                        scale: { duration: 0.4 },
                      }
                }
                className=" absolute -top-[0.42em] left-1/2 -translate-x-[38%] w-[0.58em] h-[0.58em] z-20 [transform-style:preserve-3d]"
              >
                {/* Wing-flapping 3D layer pivoted at the butterfly's thorax */}
                <motion.span
                  animate={
                    isFlyingLoop || isHovered
                      ? {
                          rotateY: [0, 58, -10, 54, 0],
                          rotateX: [0, 14, -6, 12, 0],
                          scaleX: [1, 0.56, 1.04, 0.6, 1],
                          skewY: [0, -6, 2, -5, 0],
                        }
                      : {
                          rotateY: [0, 34, 0, 18, 0],
                          scaleX: [1, 0.78, 1, 0.88, 1],
                          skewY: [0, -3, 0, -1.5, 0],
                        }
                  }
                  transition={
                    isFlyingLoop || isHovered
                      ? {
                          duration: 0.32,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                      : {
                          duration: 3.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                  }
                  style={{ transformOrigin: "28% 72%" }}
                  className="block relative w-full h-full"
                >
                  <Image
                    src={BUTTERFLY_SRC}
                    alt=""
                    fill
                    priority
                    draggable={false}
                    sizes="(max-width: 768px) 25vw, 18vw"
                    className="object-contain pointer-events-none select-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)]"
                  />
                </motion.span>
              </motion.span>
            </span>
            <span>M</span>
          </h1>
        </motion.div>
      </motion.div>
    </section>
  );
}
