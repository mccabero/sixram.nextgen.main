export function ProjectCard({
  name,
  description,
  category,
  tech,
  status
}: {
  name: string;
  description: string;
  category: string;
  tech: string[];
  status: string;
}) {
  return (
    <article className="glass-panel interactive-card group flex h-full flex-col p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs font-semibold uppercase text-cyan-800">
          {category}
        </span>
        <span className="border border-slate-200 bg-white/80 px-3 py-1 text-xs font-black uppercase tracking-[0.04em] text-slate-600">
          {status}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-bold text-slate-950">{name}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            className="border border-slate-200 bg-white/80 px-3 py-1 text-xs font-bold text-slate-600"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
