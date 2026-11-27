import * as React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, label, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="flex flex-col gap-1 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={!!error}
          aria-describedby={error && inputId ? `${inputId}-error` : undefined}
          className={twMerge(
            clsx(
              "w-full min-h-[44px] px-3 py-2 bg-[var(--white)] text-[var(--ink)] border-2 border-[var(--ink)] font-mono text-sm shadow-[var(--shadow-1)] placeholder:text-[var(--ink)]/50 focus:shadow-[var(--shadow-2)] focus:outline-none transition-shadow",
              error && "border-[var(--stamp)] bg-[var(--lost)]/10",
              className
            )
          )}
          {...props}
        />
        {error && (
          <span
            id={inputId ? `${inputId}-error` : undefined}
            className="text-xs font-bold text-[var(--stamp)]"
          >
            {error}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";
