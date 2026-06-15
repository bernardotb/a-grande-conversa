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
      <label className="mb-10 block">
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
            <h2 className="border-b pb-3 font-sans text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              {author}
            </h2>
            <ul className="mt-4 grid gap-3">
              {authorBooks.map((book) => (
                <li key={book.slug}>
                  <Link
                    href={`/obras/${book.slug}`}
                    className={`group flex items-start justify-between gap-3 rounded-sm py-1.5 transition ${
                      book.ideaCount === 0 ? "opacity-45" : ""
                    }`}
                  >
                    <div className="min-w-0">
                      <span className="gc-link block font-serif text-lg leading-snug">
                        {book.title}
                      </span>
                      {book.originalTitle && book.originalTitle !== book.title && (
                        <span className="mt-0.5 block font-sans text-xs text-[var(--faint)]">
                          {book.originalTitle}
                        </span>
                      )}
                    </div>
                    {book.ideaCount > 0 && (
                      <span className="stat-pill mt-0.5 shrink-0">
                        {book.ideaCount} {book.ideaCount === 1 ? "ideia" : "ideias"}
                      </span>
                    )}
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
