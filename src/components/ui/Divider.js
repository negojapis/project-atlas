import { twMerge } from "tailwind-merge";

export default function Divider({ className, vertical = false }) {
  if (vertical) {
    return (
      <div 
        className={twMerge(
          "w-[1px] bg-gradient-to-b from-transparent via-border-default to-transparent",
          className
        )} 
      />
    );
  }

  return (
    <div 
      className={twMerge(
        "h-[1px] w-full bg-gradient-to-r from-transparent via-border-default to-transparent",
        className
      )} 
    />
  );
}
