export function TechCard({
  category,
  items
}: {
  category: string;
  items: string[];
}) {
  return (
    <article className="glass-panel rounded-xl p-5">
      <h3 className="text-lg font-bold text-white">{category}</h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            className="rounded-full border border-cyan-200/15 bg-cyan-200/8 px-3 py-1 text-sm font-medium text-cyan-50"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
