import * as React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface LuggageTagProps extends React.HTMLAttributes<HTMLDivElement> {
  tagNumber: string;
  category: string;
}

export function LuggageTag({
  tagNumber,
  category,
  children,
  className,
  ...props
}: LuggageTagProps) {
  return (
    <div
      className={twMerge(
        clsx(
          "relative bg-[var(--white)] border-3 border-[var(--ink)] p-5 shadow-[var(--shadow-2)] flex flex-col gap-3",
          className
        )
      )}
      {...props}
    >
      {/* Top punched hole motif */}
      <div className="flex items-center justify-between border-b-2 border-dashed border-[var(--ink)] pb-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[var(--paper)] border-2 border-[var(--ink)]" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
            CAMPUS TAG #{tagNumber}
          </span>
        </div>
        <span className="font-mono text-xs font-bold uppercase px-2 py-0.5 bg-[var(--ink)] text-white">
          {category}
        </span>
      </div>
      <div>{children}</div>
    </div>
  );
}
