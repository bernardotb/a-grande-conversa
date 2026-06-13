export function Timeline({
  items
}: {
  items: Array<{ label: string; date: string; description: string }>;
}) {
  return (
    <ol className="relative ml-3 border-l border-antique-500/40">
      {items.map((item) => (
        <li key={`${item.date}-${item.label}`} className="relative pb-9 pl-8">
          <span className="absolute -left-[6px] top-1 size-3 rounded-full border-2 border-antique-500 bg-[var(--paper)]" />
          <p className="eyebrow">{item.date}</p>
          <h3 className="mt-1 font-display text-xl">{item.label}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
