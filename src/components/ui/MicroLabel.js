import { twMerge } from "tailwind-merge";

export default function MicroLabel({ children, className, as: Component = "span", ...props }) {
  return (
    <Component
      className={twMerge(
        "text-[9px] font-mono uppercase tracking-[0.3em] text-text-micro",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
