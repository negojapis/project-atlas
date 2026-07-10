import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { Syncopate } from "next/font/google";

const syncopate = Syncopate({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function HeroTitle({ children, className, as: Component = "h1", ...props }) {
  return (
    <Component
      className={twMerge(
        "tracking-wide leading-tight text-text-primary uppercase",
        syncopate.className,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
