export function NumberedTitle({
  label,
  number
}: {
  label: string;
  number: string;
}) {
  return (
    <section className="numbered-title-band">
      <div className="container numbered-title">
        <h2>{label}</h2>
        <span>{number}</span>
      </div>
    </section>
  );
}
