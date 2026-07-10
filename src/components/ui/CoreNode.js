import { twMerge } from "tailwind-merge";

export default function CoreNode({ className, active = false, ...props }) {
  return (
    <div 
      className={twMerge(
        "relative w-1.5 h-1.5 md:w-2 md:h-2 rounded-full z-content",
        "bg-[#111] border border-border-focus",
        "group-hover:bg-text-primary group-hover:border-text-primary group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]",
        "motion-glow duration-slow",
        active && "bg-text-primary border-text-primary shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-125",
        className
      )}
      {...props}
    />
  );
}
