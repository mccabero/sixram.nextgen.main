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
    <article className="glass-panel group flex h-full flex-col rounded-xl p-5 transition duration-200 hover:-translate-y-1 hover:border-cyan-700/25 hover:shadow-glow">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs font-semibold uppercase text-cyan-800">
          {category}
        </span>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
          {status}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-bold text-slate-950">{name}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
