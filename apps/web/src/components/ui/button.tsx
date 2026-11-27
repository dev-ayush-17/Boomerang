import * as React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center font-bold uppercase tracking-wider border-2 border-[var(--ink)] transition-all duration-75 select-none focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none active:translate-x-[2px] active:translate-y-[2px] active:shadow-[var(--shadow-press)]";

    const variants = {
      primary:
        "bg-[var(--ink)] text-white hover:bg-[var(--ink)]/90 shadow-[var(--shadow-1)]",
      secondary:
        "bg-[var(--found)] text-[var(--ink)] hover:brightness-105 shadow-[var(--shadow-1)]",
      danger:
        "bg-[var(--lost)] text-white hover:brightness-105 shadow-[var(--shadow-1)]",
      outline:
        "bg-[var(--white)] text-[var(--ink)] hover:bg-[var(--paper)] shadow-[var(--shadow-1)]",
    };

    const sizes = {
      sm: "min-h-[36px] px-3 py-1 text-xs",
      md: "min-h-[44px] px-5 py-2 text-sm",
      lg: "min-h-[52px] px-7 py-3 text-base",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={twMerge(clsx(base, variants[variant], sizes[size], className))}
        {...props}
      >
        {isLoading ? (
          <span className="inline-flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-current border-t-transparent animate-spin rounded-full" />
            Loading...
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);
Button.displayName = "Button";
