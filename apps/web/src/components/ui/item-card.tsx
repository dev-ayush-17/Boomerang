import * as React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Badge } from "./badge";
import { Stamp, StampProps } from "./stamp";

export interface ItemCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  category: string;
  location: string;
  occurredOn: string;
  kind: "found" | "lost";
  status: StampProps["status"];
  imageUrl?: string;
  isDesk?: boolean;
}

export function ItemCard({
  id,
  title,
  category,
  location,
  occurredOn,
  kind,
  status,
  imageUrl,
  isDesk,
  className,
  ...props
}: ItemCardProps) {
  return (
    <div
      className={twMerge(
        clsx(
          "flex flex-col justify-between bg-[var(--white)] border-2 border-[var(--ink)] p-4 shadow-[var(--shadow-1)] hover:shadow-[var(--shadow-2)] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all",
          className
        )
      )}
      {...props}
    >
      <div className="flex flex-col gap-3">
        {imageUrl ? (
          <div className="w-full aspect-[4/3] border-2 border-[var(--ink)] overflow-hidden bg-[var(--paper)]">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-full aspect-[4/3] border-2 border-[var(--ink)] flex items-center justify-center bg-[var(--paper)] font-mono text-xs text-[var(--ink)]/60 font-bold uppercase">
            No Photo
          </div>
        )}

        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant={kind === "found" ? "found" : "lost"}>
                {kind}
              </Badge>
              <Badge variant="neutral">{category}</Badge>
              {isDesk && <Badge variant="desk">Campus Desk</Badge>}
            </div>
            <h3 className="font-bold text-base leading-snug line-clamp-1 text-[var(--ink)]">
              {title}
            </h3>
            <p className="text-xs text-[var(--ink)]/80 font-mono mt-0.5">
              {location}
            </p>
          </div>
          <Stamp status={status} className="shrink-0 text-xs py-0.5 px-1.5" />
        </div>
      </div>

      <div className="mt-4 pt-3 border-t-2 border-[var(--ink)] flex items-center justify-between text-xs font-mono text-[var(--ink)]/70">
        <span>#{id.slice(0, 8)}</span>
        <span>{occurredOn}</span>
      </div>
    </div>
  );
}
