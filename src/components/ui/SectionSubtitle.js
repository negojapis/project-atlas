import { twMerge } from "tailwind-merge";

export default function SectionSubtitle({ children, className, as: Component = "h3", ...props }) {
  return (
    <Component
      className={twMerge(
        "text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-text-tertiary",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
