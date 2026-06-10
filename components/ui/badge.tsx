import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/8 px-3 py-1 text-xs font-semibold uppercase text-cyan-100",
        className
      )}
    >
      {children}
    </span>
  );
}
