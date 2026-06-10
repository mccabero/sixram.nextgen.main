import type { LucideIcon } from "lucide-react";

export function ServiceCard({
  title,
  description,
  icon: Icon
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <article className="glass-panel group h-full rounded-xl p-5 transition duration-200 hover:-translate-y-1 hover:border-cyan-700/25 hover:shadow-glow">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-700/15 bg-cyan-50 text-cyan-800 transition group-hover:bg-cyan-100">
        <Icon aria-hidden="true" size={21} />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}
