import { twMerge } from "tailwind-merge";

export default function SectionContainer({ children, className, id, ...props }) {
  return (
    <section 
      id={id} 
      className={twMerge(
        "relative w-full py-32 md:py-48 px-6 bg-transparent overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="relative z-content max-w-7xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
}
