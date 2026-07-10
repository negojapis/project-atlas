"use client";

import { motion } from "framer-motion";
import SectionContainer from "@/components/ui/SectionContainer";
import MicroLabel from "@/components/ui/MicroLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionSubtitle from "@/components/ui/SectionSubtitle";
import Divider from "@/components/ui/Divider";
import CoreNode from "@/components/ui/CoreNode";

const timelineData = [
  {
    chapter: "CAPÍTULO I",
    year: "2009",
    description: "Curiosidade.",
  },
  {
    chapter: "CAPÍTULO II",
    year: "",
    description: "Aprendizado.",
  },
  {
    chapter: "CAPÍTULO III",
    year: "",
    description: "Construção.",
  },
  {
    chapter: "CAPÍTULO IV",
    year: "",
    description: "Ecossistema.",
  },
  {
    chapter: "CAPÍTULO V",
    year: "",
    description: "O futuro continua sendo construído.",
  },
];

export default function Timeline() {
  return (
    <SectionContainer id="timeline">
      <div className="flex flex-col items-center w-full">
        
        {/* Title Indicator */}
        <div className="mb-32 md:mb-48 text-center flex flex-col items-center gap-4">
          <MicroLabel>Journey</MicroLabel>
          <SectionTitle as="p" className="text-3xl md:text-5xl lg:text-5xl text-text-primary">A Jornada</SectionTitle>
        </div>

        <div className="relative w-full flex flex-col items-center">
          {/* Central Line */}
          <Divider vertical className="absolute top-0 bottom-0 h-full w-[1px] -translate-x-1/2 left-1/2" />

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
              className="relative w-full flex flex-col items-center text-center min-h-[70vh] md:min-h-[80vh] justify-center group"
            >
              
              {/* Central Node */}
              <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                <CoreNode />
              </div>
              
              <div className="flex flex-col items-center gap-6 md:gap-8 z-content">
                {/* Chapter Label */}
                <SectionSubtitle className="group-hover:text-text-primary transition-colors duration-normal">
                  [ {item.chapter} ]
                </SectionSubtitle>
                
                {/* Year (if exists) */}
                {item.year && (
                  <span className="text-text-primary font-serif font-light text-xl md:text-3xl tracking-widest opacity-80">
                    {item.year}
                  </span>
                )}
                
                {/* Description */}
                <SectionTitle as="h3" className="group-hover:text-text-primary transition-colors duration-slow">
                  {item.description}
                </SectionTitle>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
