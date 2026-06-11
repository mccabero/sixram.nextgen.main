import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const accentClasses: Record<string, string> = {
  cyan: "border-cyan-700/20 bg-cyan-50 text-cyan-800",
  violet: "border-indigo-700/20 bg-indigo-50 text-indigo-700",
  gold: "border-amber-700/20 bg-amber-50 text-amber-700",
  mint: "border-emerald-700/20 bg-emerald-50 text-emerald-700"
};

export function VentureCard({
  name,
  category,
  status,
  description,
  href,
  ctaLabel,
  accent
}: {
  name: string;
  category: string;
  status: string;
  description: string;
  href: string;
  ctaLabel: string;
  accent: string;
}) {
  return (
    <article className="glass-panel interactive-card group flex h-full flex-col p-5">
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={cn(
            "border px-3 py-1 text-xs font-black uppercase tracking-[0.04em]",
            accentClasses[accent] ?? accentClasses.cyan
          )}
        >
          {status}
        </span>
        <span className="text-xs font-semibold uppercase text-slate-500">
          {category}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-bold text-slate-950">{name}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{description}</p>
      <ButtonLink className="mt-6 w-fit" href={href} size="sm" variant="secondary">
        {ctaLabel}
        <ArrowUpRight aria-hidden="true" size={15} />
      </ButtonLink>
    </article>
  );
}
