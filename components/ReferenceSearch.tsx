"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ReferenceBook, ReferencePlan, SyntopiconIdea } from "@/lib/types";

type SearchType = "todos" | "ideias" | "obras" | "planos";

type ReferenceSearchProps = {
  ideas: SyntopiconIdea[];
  books: ReferenceBook[];
  plans: ReferencePlan[];
};

export function ReferenceSearch({ ideas, books, plans }: ReferenceSearchProps) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<SearchType>("todos");

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("pt-BR");
    if (normalizedQuery.length < 2) return [];

    const ideaResults = ideas.map((idea) => ({
      type: "ideias" as const,
      label: "Ideia",
      title: idea.name,
      subtitle: idea.question,
      href: `/ideias/${idea.slug}`,
      searchable: [
        idea.name,
        idea.question,
        idea.domainName,
        ...idea.thinkers.map((thinker) => thinker.name),
      ].join(" "),
    }));

    const bookResults = books.map((book) => ({
      type: "obras" as const,
      label: "Obra",
      title: book.title,
      subtitle: book.author,
      href: `/obras/${book.slug}`,
      searchable: [
        book.title,
        book.originalTitle,
        book.author,
        ...book.ideas,
        ...book.description,
      ].join(" "),
    }));

    const planResults = plans.map((plan) => ({
      type: "planos" as const,
      label: "Plano",
      title: plan.title,
      subtitle: plan.subtitle,
      href: `/planos-de-leitura/${plan.slug}`,
      searchable: [
        plan.title,
        plan.subtitle,
        plan.description,
        ...plan.steps.flatMap((step) => [
          step.heading,
          step.rationale,
          step.connection,
        ]),
      ].join(" "),
    }));

    return [...ideaResults, ...bookResults, ...planResults]
      .filter((item) => type === "todos" || item.type === type)
      .filter((item) =>
        item.searchable.toLocaleLowerCase("pt-BR").includes(normalizedQuery),
      )
      .slice(0, 80);
  }, [books, ideas, plans, query, type]);

  return (
    <div>
      <div className="gc-card grid gap-4 p-5 sm:grid-cols-[1fr_12rem]">
        <label>
          <span className="gc-kicker mb-2 block">Termo de busca</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ex.: justiça, Platão, liberdade..."
            className="w-full border-b border-[var(--border)] bg-transparent px-0 py-3 font-serif text-xl text-[var(--ink)] outline-none placeholder:text-[var(--faint)] focus:border-[var(--accent)]"
            autoFocus
          />
        </label>

        <label>
          <span className="gc-kicker mb-2 block">Coleção</span>
          <select
            value={type}
            onChange={(event) => setType(event.target.value as SearchType)}
            className="w-full border-b border-[var(--border)] bg-[var(--surface)] py-3 text-sm text-[var(--ink)] outline-none focus:border-[var(--accent)]"
          >
            <option value="todos">Todas</option>
            <option value="ideias">Ideias</option>
            <option value="obras">Obras</option>
            <option value="planos">Planos de leitura</option>
          </select>
        </label>
      </div>

      <div className="mt-8" aria-live="polite">
        {query.trim().length < 2 ? (
          <p className="text-sm text-[var(--secondary)]">
            Digite ao menos duas letras para consultar o acervo.
          </p>
        ) : results.length === 0 ? (
          <p className="text-sm text-[var(--secondary)]">
            Nenhum resultado encontrado para “{query}”.
          </p>
        ) : (
          <>
            <p className="gc-kicker mb-4">
              {results.length} {results.length === 1 ? "resultado" : "resultados"}
            </p>
            <ol className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {results.map((result) => (
                <li key={`${result.type}-${result.href}`}>
                  <Link
                    href={result.href}
                    className="group grid gap-2 py-5 sm:grid-cols-[5rem_1fr] sm:gap-5"
                  >
                    <span className="gc-kicker pt-1">{result.label}</span>
                    <span>
                      <span className="block font-serif text-2xl text-[var(--ink)] group-hover:text-[var(--accent)]">
                        {result.title}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-[var(--secondary)]">
                        {result.subtitle}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </>
        )}
      </div>
    </div>
  );
}
