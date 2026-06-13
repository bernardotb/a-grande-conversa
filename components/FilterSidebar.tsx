type Option = { value: string; label: string };

export function FilterSidebar({
  filters,
  onChange,
  options
}: {
  filters: Record<string, string>;
  onChange: (key: string, value: string) => void;
  options: Array<{ key: string; label: string; values: Option[] }>;
}) {
  return (
    <aside className="paper-panel h-fit p-5" aria-label="Filtros do catálogo">
      <p className="font-display text-2xl">Refinar acervo</p>
      <div className="mt-5 grid gap-5">
        {options.map((group) => (
          <label key={group.key} className="grid gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-muted">
              {group.label}
            </span>
            <select
              value={filters[group.key] ?? ""}
              onChange={(event) => onChange(group.key, event.target.value)}
              className="border bg-[var(--paper)] px-3 py-2.5 text-sm"
            >
              <option value="">Todos</option>
              {group.values.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        ))}
      </div>
    </aside>
  );
}
