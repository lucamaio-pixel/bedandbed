import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "font-[var(--bb-sans)] text-[15px] px-[14px] py-3 bg-bb-white border border-bb-line rounded-[var(--r-md)] text-bb-ink w-full",
        "transition-[border-color,box-shadow] duration-100",
        "focus:outline-none focus:border-bb-blue focus:shadow-[0_0_0_3px_rgba(10,77,126,.12)]",
        "placeholder:text-bb-ink-mute",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";
