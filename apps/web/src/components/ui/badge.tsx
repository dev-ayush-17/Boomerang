import * as React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "found" | "lost" | "claim" | "desk" | "neutral";
}

export function Badge({
  className,
  variant = "neutral",
  children,
  ...props
}: BadgeProps) {
  const base =
    "inline-flex items-center px-2 py-0.5 text-xs font-bold uppercase tracking-wider border-2 border-[var(--ink)] shadow-[2px_2px_0_var(--ink)] select-none";

  const variants = {
    found: "bg-[var(--found)] text-[var(--ink)]",
    lost: "bg-[var(--lost)] text-white",
    claim: "bg-[var(--claim)] text-white",
    desk: "bg-[var(--warn)] text-[var(--ink)]",
    neutral: "bg-[var(--white)] text-[var(--ink)]",
  };

  return (
    <span className={twMerge(clsx(base, variants[variant], className))} {...props}>
      {children}
    </span>
  );
}
