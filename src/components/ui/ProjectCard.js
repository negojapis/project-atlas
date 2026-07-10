import Image from "next/image";
import MicroLabel from "@/components/ui/MicroLabel";
import SectionTitle from "@/components/ui/SectionTitle";

export default function ProjectCard({ project }) {
  return (
    <div className="w-[320px] md:w-[400px] flex flex-col gap-6 group flex-shrink-0 cursor-pointer h-full">
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-border-default transition-colors duration-normal group-hover:border-border-focus bg-[#0A0A0A]">
        {/* We use a solid placeholder color or an actual image if provided */}
        {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              unoptimized={true}
              sizes="(max-width: 768px) 320px, 400px"
              className="object-cover object-center opacity-60 grayscale transition-all duration-hero ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
            />
        ) : (
          <div className="absolute inset-0 bg-surface-base/30 flex items-center justify-center grayscale transition-all duration-hero ease-out group-hover:bg-surface-elevated/30">
            <MicroLabel className="opacity-30 tracking-[0.3em]">
              NO IMAGE
            </MicroLabel>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-1">
        {/* Title and Segment */}
        <div className="flex flex-col gap-1">
          <SectionTitle className="text-2xl md:text-2xl lg:text-3xl text-text-primary transition-colors duration-normal group-hover:text-white whitespace-nowrap">
            {project.title}
          </SectionTitle>
          <MicroLabel className="text-text-secondary tracking-widest uppercase line-clamp-1">
            [ {project.segment} ]
          </MicroLabel>
        </div>

        {/* Wrapper inferior alinhado na base */}
        <div className="mt-auto pt-6 flex flex-col gap-4">
          {/* Tech Stack */}
          {project.languages && project.languages.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.languages.map((lang, idx) => (
              <span key={idx} className="px-2 py-1 text-[10px] uppercase tracking-wider text-text-secondary border border-border-default rounded-md transition-colors duration-normal group-hover:border-border-focus">
                {lang}
              </span>
            ))}
          </div>
        )}

        {/* Systems */}
        {project.systems && project.systems.length > 0 && (
          <div className="pt-4 flex flex-col gap-2 border-t border-border-subtle mt-2">
             <MicroLabel className="opacity-50">SISTEMAS E ENTREGÁVEIS</MicroLabel>
             <div className="flex flex-col gap-1.5 text-sm text-text-tertiary">
               {project.systems.map((sys, idx) => (
                 <span key={idx} className="flex items-center gap-2">
                   <span className="w-1 h-1 bg-text-tertiary rounded-full opacity-50" />
                   {sys}
                 </span>
               ))}
             </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
