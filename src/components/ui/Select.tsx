import { SelectHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => (
    <select
      ref={ref}
      className={cn(
        "font-[var(--bb-sans)] text-[15px] px-[14px] py-3 bg-bb-white border border-bb-line rounded-[var(--r-md)] text-bb-ink w-full",
        "transition-[border-color,box-shadow] duration-100",
        "focus:outline-none focus:border-bb-blue focus:shadow-[0_0_0_3px_rgba(10,77,126,.12)]",
        "appearance-none cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </select>
  )
);
Select.displayName = "Select";
