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
        "inline-flex items-center gap-2 border border-cyan-700/25 bg-white/85 px-3 py-1 text-xs font-black uppercase tracking-[0.08em] text-cyan-800 shadow-sm shadow-cyan-950/5 backdrop-blur",
        className
      )}
    >
      {children}
    </span>
  );
}
