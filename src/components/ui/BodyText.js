import { twMerge } from "tailwind-merge";

export default function BodyText({ children, className, as: Component = "p", ...props }) {
  return (
    <Component
      className={twMerge(
        "text-lg md:text-xl font-serif font-light text-text-secondary leading-relaxed max-w-xl",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
