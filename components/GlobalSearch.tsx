"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { FilterSidebar } from "@/components/FilterSidebar";
import type { Author, Category, Period, SearchItem } from "@/lib/types";

export function GlobalSearch({
  items,
  authors,
  periods,
  categories
}: {
  items: SearchItem[];
  authors: Author[];
  periods: Period[];
  categories: Category[];
}) {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<Record<string, string>>({});

  const results = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("pt-BR");
    return items.filter((item) => {
      const matchesQuery =
        !normalized || item.searchText.toLocaleLowerCase("pt-BR").includes(normalized);
      const matchesType = !filters.type || item.type === filters.type;
      const matchesCategory = !filters.category || item.category === filters.category;
      const matchesAuthor = !filters.author || item.author === filters.author;
      const matchesPeriod = !filters.period || item.period === filters.period;
      const matchesArea = !filters.area || item.areas?.includes(filters.area);
      return matchesQuery && matchesType && matchesCategory && matchesAuthor && matchesPeriod && matchesArea;
    });
  }, [filters, items, query]);

  return (
    <div>
      <SearchBar value={query} onChange={setQuery} placeholder="Busque ideias, autores, obras e planos..." />
      <div className="mt-10 grid gap-8 lg:grid-cols-[240px_1fr]">
        <FilterSidebar
          filters={filters}
          onChange={(key, value) => setFilters((current) => ({ ...current, [key]: value }))}
          options={[
            {
              key: "type",
              label: "Tipo",
              values: ["Ideia", "Autor", "Obra", "Plano"].map((value) => ({ value, label: value }))
            },
            {
              key: "category",
              label: "Categoria",
              values: categories.map((item) => ({ value: item.slug, label: item.name }))
            },
            {
              key: "author",
              label: "Autor",
              values: authors.map((item) => ({ value: item.slug, label: item.name }))
            },
            {
              key: "period",
              label: "Período",
              values: periods.map((item) => ({ value: item.slug, label: item.name }))
            },
            {
              key: "area",
              label: "Área temática",
              values: categories.map((item) => ({ value: item.slug, label: item.name }))
            }
          ]}
        />
        <div>
          <p className="mb-5 text-sm text-muted" aria-live="polite">
            {results.length} {results.length === 1 ? "resultado" : "resultados"}
          </p>
          <div className="divide-y border-y">
            {results.map((item) => (
              <Link
                key={`${item.type}-${item.href}`}
                href={item.href}
                className="grid gap-2 px-2 py-5 transition hover:bg-antique-400/10 sm:grid-cols-[100px_1fr]"
              >
                <span className="eyebrow">{item.type}</span>
                <span>
                  <span className="block font-display text-2xl">{item.title}</span>
                  <span className="mt-1 block text-sm text-muted">{item.subtitle}</span>
                </span>
              </Link>
            ))}
            {!results.length && (
              <p className="py-12 text-center text-muted">Nenhum resultado encontrado.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
