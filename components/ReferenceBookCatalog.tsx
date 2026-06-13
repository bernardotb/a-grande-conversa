"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ReferenceBook } from "@/lib/types";

export function ReferenceBookCatalog({ books }: { books: ReferenceBook[] }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("pt-BR");
    if (!normalized) return books;
    return books.filter((book) =>
      `${book.title} ${book.originalTitle} ${book.author}`
        .toLocaleLowerCase("pt-BR")
        .includes(normalized)
    );
  }, [books, query]);
  const grouped = Array.from(
    filtered.reduce((groups, book) => {
      const list = groups.get(book.author) ?? [];
      list.push(book);
      groups.set(book.author, list);
      return groups;
    }, new Map<string, ReferenceBook[]>())
  );

  return (
    <>
      <label className="mb-14 block">
        <span className="sr-only">Buscar obra ou autor</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar obra ou autor..."
          className="w-full border-b bg-transparent px-0 py-3 font-serif text-xl outline-none placeholder:text-[var(--faint)]"
        />
      </label>
      <p className="mb-8 text-xs text-[var(--faint)]">{filtered.length} obras encontradas</p>
      <div className="grid gap-x-16 gap-y-12 sm:grid-cols-2">
        {grouped.map(([author, authorBooks]) => (
          <section key={author}>
            <h2 className="border-b pb-3 font-serif text-xs uppercase tracking-[0.17em] text-[var(--accent)]">
              {author}
            </h2>
            <ul className="mt-4 grid gap-2">
              {authorBooks.map((book) => (
                <li key={book.slug}>
                  <Link href={`/obras/${book.slug}`} className="group block py-0.5">
                    <span className="gc-link font-serif text-lg">{book.title}</span>
                    <span className="block text-xs text-[var(--faint)]">
                      {book.ideaCount} {book.ideaCount === 1 ? "Grande Ideia" : "Grandes Ideias"}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
