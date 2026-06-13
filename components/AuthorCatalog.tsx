"use client";

import { useMemo, useState } from "react";
import { AuthorCard } from "@/components/AuthorCard";
import { SearchBar } from "@/components/SearchBar";
import { FilterSidebar } from "@/components/FilterSidebar";
import { AlphabeticalIndex } from "@/components/AlphabeticalIndex";
import type { Author, Category, Period } from "@/lib/types";

export function AuthorCatalog({
  authors,
  periods,
  categories
}: {
  authors: Author[];
  periods: Period[];
  categories: Category[];
}) {
  const [query, setQuery] = useState("");
  const [letter, setLetter] = useState("");
  const [filters, setFilters] = useState<Record<string, string>>({});
  const available = Array.from(new Set(authors.map((item) => item.name[0].toUpperCase())));

  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("pt-BR");
    return authors.filter((author) => {
      const matchesQuery =
        !normalized ||
        `${author.name} ${author.bio}`.toLocaleLowerCase("pt-BR").includes(normalized);
      const matchesLetter = !letter || author.name.toUpperCase().startsWith(letter);
      const matchesPeriod = !filters.period || author.period === filters.period;
      const matchesArea = !filters.area || author.areas.includes(filters.area);
      return matchesQuery && matchesLetter && matchesPeriod && matchesArea;
    });
  }, [authors, filters, letter, query]);

  return (
    <div>
      <SearchBar value={query} onChange={setQuery} placeholder="Buscar autor..." />
      <div className="mt-6">
        <AlphabeticalIndex available={available} active={letter} onChange={setLetter} />
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-[240px_1fr]">
        <FilterSidebar
          filters={filters}
          onChange={(key, value) => setFilters((current) => ({ ...current, [key]: value }))}
          options={[
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
            {filtered.length} {filtered.length === 1 ? "autor encontrado" : "autores encontrados"}
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {filtered.map((author) => (
              <AuthorCard key={author.slug} author={author} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
