"use client";
import { forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "accent" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold cursor-pointer text-decoration-none transition-transform duration-100 ease-out select-none";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-bb-blue text-bb-white border border-transparent rounded-[var(--r-pill)] hover:bg-bb-blue-deep hover:-translate-y-px",
  accent:
    "bg-bb-yellow text-bb-blue-ink border border-transparent rounded-[var(--r-pill)] hover:bg-bb-yellow-soft hover:-translate-y-px",
  ghost:
    "bg-transparent text-bb-blue border border-bb-blue rounded-[var(--r-pill)] hover:bg-bb-blue hover:text-bb-white hover:-translate-y-px",
  link: "bg-transparent text-bb-blue border-0 px-1 hover:text-bb-blue-deep",
};

const sizes: Record<ButtonSize, string> = {
  sm: "text-[13px] px-[14px] py-[8px]",
  md: "text-[14px] px-[20px] py-[12px]",
  lg: "text-[15px] px-[28px] py-[16px]",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: false;
}

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild: true;
}

type Props = ButtonProps | AnchorProps;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  ({ variant = "primary", size = "md", className, ...props }, ref) => {
    const classes = cn(base, variants[variant], sizes[size], className);

    if ((props as AnchorProps).asChild) {
      const { asChild: _a, ...rest } = props as AnchorProps;
      return (
        <a ref={ref as React.Ref<HTMLAnchorElement>} className={classes} {...rest} />
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...(props as ButtonProps)}
      />
    );
  }
);

Button.displayName = "Button";
