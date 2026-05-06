import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ChipProps extends HTMLAttributes<HTMLSpanElement> {}

export function Chip({ className, children, ...props }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-medium rounded-[var(--r-pill)] border border-bb-line bg-bb-white text-bb-ink-soft",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
