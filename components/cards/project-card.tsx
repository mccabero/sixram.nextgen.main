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
    <article className="glass-panel group flex h-full flex-col rounded-xl p-5 transition duration-200 hover:-translate-y-1 hover:border-cyan-200/35 hover:shadow-glow">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs font-semibold uppercase text-cyan-100">
          {category}
        </span>
        <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-semibold text-slate-300">
          {status}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-bold text-white">{name}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs font-medium text-slate-300"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
