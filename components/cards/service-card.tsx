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
    <article className="glass-panel group h-full rounded-xl p-5 transition duration-200 hover:-translate-y-1 hover:border-cyan-200/35 hover:shadow-glow">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-200/20 bg-cyan-200/10 text-cyan-100 transition group-hover:bg-cyan-200/15">
        <Icon aria-hidden="true" size={21} />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
    </article>
  );
}
