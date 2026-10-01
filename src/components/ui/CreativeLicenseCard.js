"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function CreativeLicenseCard({ className }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile to enable automatic animation instead of mouse hover
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches || "ontouchstart" in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mouse position relative to the center of the element (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the mouse values
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Map mouse values to rotation
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  // Map mouse values to glare/reflection position
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);
  
  // Holographic shift based on movement
  const backgroundPosition = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["0% 50%", "100% 50%"]
  );

  const handleMouseMove = (e) => {
    if (isMobile) return;
    
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className={cn(
        "relative [perspective:1200px] w-full max-w-[700px] mx-auto flex items-center justify-center p-4",
        className
      )}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={
          isMobile 
            ? {
                rotateX: [5, -5, 5],
                rotateY: [-5, 5, -5],
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }
            : {}
        }
        className={cn(
          "relative w-full aspect-square group cursor-default transition-all duration-300 ease-out",
          // Apply drop shadow that respects transparency
          "drop-shadow-[0_30px_30px_rgba(0,0,0,0.6)]"
        )}
      >
        <div 
          className="absolute inset-0"
          style={{ transform: "translateZ(1px)" }} // Tiny pop to avoid z-fighting
        >
          {/* Main Card Image */}
          <Image 
            src="/Imagem do ChatGPT 30 de set. de 2026, 17_59_54.png"
            alt="Creative License Card"
            fill
            className="object-contain"
            priority
          />

          {/* Mask container to clip effects exactly to the transparent image shape */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              maskImage: 'url("/Imagem do ChatGPT 30 de set. de 2026, 17_59_54.png")',
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              WebkitMaskImage: 'url("/Imagem do ChatGPT 30 de set. de 2026, 17_59_54.png")',
              WebkitMaskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
            }}
          >
            {/* Glare effect */}
            <motion.div
              className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 50%)",
                left: glareX,
                top: glareY,
                width: "200%",
                height: "200%",
                transform: "translate(-50%, -50%)",
                mixBlendMode: "overlay",
              }}
            />

            {/* Holographic effect */}
            <motion.div
              className="absolute inset-0 z-10 pointer-events-none opacity-30 mix-blend-color-dodge group-hover:opacity-60 transition-opacity duration-500"
              style={{
                background: "linear-gradient(115deg, transparent 20%, rgba(255, 0, 128, 0.4) 30%, rgba(0, 255, 255, 0.4) 40%, transparent 50%, rgba(255, 255, 0, 0.4) 60%, rgba(255, 0, 255, 0.4) 70%, transparent 80%)",
                backgroundSize: "200% 200%",
                backgroundPosition: isMobile ? "50% 50%" : backgroundPosition,
              }}
              animate={
                isMobile 
                  ? {
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      transition: {
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                      }
                    }
                  : {}
              }
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
