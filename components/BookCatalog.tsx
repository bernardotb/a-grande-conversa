"use client";

import { useMemo, useState } from "react";
import { BookCard } from "@/components/BookCard";
import { SearchBar } from "@/components/SearchBar";
import { FilterSidebar } from "@/components/FilterSidebar";
import { AlphabeticalIndex } from "@/components/AlphabeticalIndex";
import type { Author, Book, Category, Period } from "@/lib/types";

export function BookCatalog({
  books,
  authors,
  periods,
  categories
}: {
  books: Book[];
  authors: Author[];
  periods: Period[];
  categories: Category[];
}) {
  const [query, setQuery] = useState("");
  const [letter, setLetter] = useState("");
  const [filters, setFilters] = useState<Record<string, string>>({});
  const available = Array.from(new Set(books.map((item) => item.title.replace(/^O |^A /, "")[0].toUpperCase())));

  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("pt-BR");
    return books.filter((book) => {
      const author = authors.find((item) => item.slug === book.author);
      const indexTitle = book.title.replace(/^O |^A /, "");
      const matchesQuery =
        !normalized ||
        `${book.title} ${book.originalTitle} ${book.description} ${author?.name ?? ""}`
          .toLocaleLowerCase("pt-BR")
          .includes(normalized);
      const matchesLetter = !letter || indexTitle.toUpperCase().startsWith(letter);
      const matchesAuthor = !filters.author || book.author === filters.author;
      const matchesPeriod = !filters.period || book.period === filters.period;
      const matchesArea = !filters.area || book.areas.includes(filters.area);
      return matchesQuery && matchesLetter && matchesAuthor && matchesPeriod && matchesArea;
    });
  }, [authors, books, filters, letter, query]);

  return (
    <div>
      <SearchBar value={query} onChange={setQuery} placeholder="Buscar obra, autor ou assunto..." />
      <div className="mt-6">
        <AlphabeticalIndex available={available} active={letter} onChange={setLetter} />
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-[240px_1fr]">
        <FilterSidebar
          filters={filters}
          onChange={(key, value) => setFilters((current) => ({ ...current, [key]: value }))}
          options={[
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
            {filtered.length} {filtered.length === 1 ? "obra encontrada" : "obras encontradas"}
          </p>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
