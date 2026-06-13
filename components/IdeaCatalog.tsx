"use client";

import { useMemo, useState } from "react";
import { IdeaCard } from "@/components/IdeaCard";
import { SearchBar } from "@/components/SearchBar";
import { FilterSidebar } from "@/components/FilterSidebar";
import { AlphabeticalIndex } from "@/components/AlphabeticalIndex";
import type { Category, Idea } from "@/lib/types";

export function IdeaCatalog({
  ideas,
  categories
}: {
  ideas: Idea[];
  categories: Category[];
}) {
  const [query, setQuery] = useState("");
  const [letter, setLetter] = useState("");
  const [filters, setFilters] = useState<Record<string, string>>({});
  const available = Array.from(new Set(ideas.map((item) => item.name[0].toUpperCase())));

  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("pt-BR");
    return ideas.filter((idea) => {
      const matchesQuery =
        !normalized ||
        `${idea.name} ${idea.summary} ${idea.keywords.join(" ")}`
          .toLocaleLowerCase("pt-BR")
          .includes(normalized);
      const matchesLetter = !letter || idea.name.toUpperCase().startsWith(letter);
      const matchesCategory = !filters.category || idea.category === filters.category;
      const matchesArea = !filters.area || idea.areas.includes(filters.area);
      return matchesQuery && matchesLetter && matchesCategory && matchesArea;
    });
  }, [filters, ideas, letter, query]);

  return (
    <div>
      <SearchBar value={query} onChange={setQuery} placeholder="Buscar ideia, conceito ou palavra-chave..." />
      <div className="mt-6">
        <AlphabeticalIndex available={available} active={letter} onChange={setLetter} />
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-[240px_1fr]">
        <FilterSidebar
          filters={filters}
          onChange={(key, value) => setFilters((current) => ({ ...current, [key]: value }))}
          options={[
            {
              key: "category",
              label: "Categoria",
              values: categories.map((item) => ({ value: item.slug, label: item.name }))
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
            {filtered.length} {filtered.length === 1 ? "ideia encontrada" : "ideias encontradas"}
          </p>
          {filtered.length ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((idea) => (
                <IdeaCard key={idea.slug} idea={idea} />
              ))}
            </div>
          ) : (
            <div className="paper-panel p-10 text-center text-muted">
              Nenhuma ideia corresponde aos filtros selecionados.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
