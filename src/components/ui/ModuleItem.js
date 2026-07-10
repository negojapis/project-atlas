import { twMerge } from "tailwind-merge";

export default function ModuleItem({ children, className, ...props }) {
  return (
    <div 
      className={twMerge(
        "relative flex flex-col p-8 md:p-12",
        "bg-bg-surface border border-border-subtle radius-lg",
        "hover:bg-bg-hover hover:border-border-default",
        "motion-glow duration-normal",
        "overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
