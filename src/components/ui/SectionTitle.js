import { twMerge } from "tailwind-merge";

export default function SectionTitle({ children, className, as: Component = "h2", ...props }) {
  return (
    <Component
      className={twMerge(
        "text-3xl md:text-5xl lg:text-7xl font-serif font-light text-text-secondary tracking-wide leading-tight",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
