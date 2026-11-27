import * as React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface StampProps extends React.HTMLAttributes<HTMLDivElement> {
  status: "LISTED" | "CLAIM_PENDING" | "VERIFIED" | "HANDED_OVER" | "EXPIRED" | "REJECTED";
}

export function Stamp({ status, className, ...props }: StampProps) {
  const configs = {
    LISTED: { label: "LISTED", rotate: "-rotate-2", border: "border-[var(--found)]", text: "text-[var(--found)]" },
    CLAIM_PENDING: { label: "CLAIM PENDING", rotate: "rotate-3", border: "border-[var(--warn)]", text: "text-[var(--ink)]" },
    VERIFIED: { label: "VERIFIED", rotate: "-rotate-1", border: "border-[var(--claim)]", text: "text-[var(--claim)]" },
    HANDED_OVER: { label: "HANDED OVER", rotate: "rotate-2", border: "border-[var(--ink)]", text: "text-[var(--ink)]" },
    EXPIRED: { label: "EXPIRED", rotate: "-rotate-3", border: "border-[var(--stamp)]", text: "text-[var(--stamp)]" },
    REJECTED: { label: "REJECTED", rotate: "rotate-4", border: "border-[var(--stamp)]", text: "text-[var(--stamp)]" },
  };

  const config = configs[status] || configs.LISTED;

  return (
    <div
      role="status"
      aria-label={`Status: ${config.label}`}
      className={twMerge(
        clsx(
          "inline-block px-3 py-1 font-mono font-black text-xs md:text-sm tracking-widest border-2 md:border-3 uppercase select-none opacity-90 transition-transform",
          config.rotate,
          config.border,
          config.text,
          className
        )
      )}
      {...props}
    >
      [{config.label}]
    </div>
  );
}
