import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "blue" | "yellow" | "green" | "stone";

const base =
  "inline-flex items-center gap-1.5 px-[10px] py-[4px] text-[11px] font-semibold tracking-[.12em] uppercase rounded-[var(--r-pill)]";

const variants: Record<BadgeVariant, string> = {
  blue:   "bg-[rgba(10,77,126,.1)] text-bb-blue",
  yellow: "bg-[rgba(242,197,0,.18)] text-bb-yellow-ink",
  green:  "bg-[rgba(47,122,77,.12)] text-bb-success",
  stone:  "bg-bb-stone text-bb-ink-soft",
};

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export function Badge({ variant = "blue", className, children, ...props }: BadgeProps) {
  return (
    <span className={cn(base, variants[variant], className)} {...props}>
      {children}
    </span>
  );
}
