import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const accentClasses: Record<string, string> = {
  cyan: "border-cyan-200/25 bg-cyan-200/10 text-cyan-100",
  violet: "border-violet-200/25 bg-violet-200/10 text-violet-100",
  gold: "border-amber-200/25 bg-amber-200/10 text-amber-100",
  mint: "border-emerald-200/25 bg-emerald-200/10 text-emerald-100"
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
    <article className="glass-panel group flex h-full flex-col rounded-xl p-5 transition duration-200 hover:-translate-y-1 hover:border-cyan-200/35 hover:shadow-glow">
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={cn(
            "rounded-full border px-3 py-1 text-xs font-semibold",
            accentClasses[accent] ?? accentClasses.cyan
          )}
        >
          {status}
        </span>
        <span className="text-xs font-semibold uppercase text-slate-500">
          {category}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-bold text-white">{name}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{description}</p>
      <ButtonLink className="mt-6 w-fit" href={href} size="sm" variant="secondary">
        {ctaLabel}
        <ArrowUpRight aria-hidden="true" size={15} />
      </ButtonLink>
    </article>
  );
}
