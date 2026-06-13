export function SearchBar({
  value,
  onChange,
  placeholder = "Buscar no acervo..."
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="relative block">
      <span className="sr-only">Termo de busca</span>
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-antique-500" aria-hidden="true">
        ⌕
      </span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full border bg-[var(--panel)] py-4 pl-12 pr-4 text-base shadow-sm placeholder:text-muted/60"
      />
    </label>
  );
}
