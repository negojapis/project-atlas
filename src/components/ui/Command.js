import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function Command({ children, href, className, onClick, "aria-label": ariaLabel, ...props }) {
  const baseClasses = twMerge(
    "group flex items-center justify-center min-h-[48px] min-w-[48px] p-2",
    "text-[9px] md:text-[10px] font-mono uppercase tracking-[0.4em] text-text-tertiary",
    "hover:text-text-primary active:scale-95 transition-all duration-normal ease-out",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-focus focus-visible:text-text-primary",
    "cursor-pointer",
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses} aria-label={ariaLabel} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses} aria-label={ariaLabel} {...props}>
      {children}
    </button>
  );
}
