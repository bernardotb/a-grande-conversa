"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { SyntopiconIdea } from "@/lib/types";

type Domain = { slug: string; name: string };

export function IdeaIndex({
  ideas,
  domains,
}: {
  ideas: SyntopiconIdea[];
  domains: Domain[];
}) {
  const [query, setQuery] = useState("");
  const [activeDomain, setActiveDomain] = useState<string>("todos");

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("pt-BR");
    return ideas.filter((idea) => {
      const matchesDomain =
        activeDomain === "todos" || idea.domain === activeDomain;
      const matchesQuery =
        !q ||
        idea.name.toLocaleLowerCase("pt-BR").includes(q) ||
        idea.question.toLocaleLowerCase("pt-BR").includes(q);
      return matchesDomain && matchesQuery;
    });
  }, [ideas, query, activeDomain]);

  return (
    <>
      {/* Header editorial */}
      <div className="mb-10 max-w-3xl">
        <p className="section-eyebrow">O Syntopicon de Mortimer Adler</p>
        <h1 className="mt-3 font-serif text-5xl leading-none">As 102 Grandes Ideias</h1>
        <p className="gc-prose mt-5">
          De <span className="text-[var(--color-accent)]">Anjo</span> a{" "}
          <span className="text-[var(--color-accent)]">Mundo</span>, cada ideia abre um fio
          cronológico de pensadores, obras e perguntas fundamentais.
        </p>
      </div>

      {/* Busca */}
      <label className="mb-8 block">
        <span className="sr-only">Procure uma ideia</span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Procure uma ideia…"
          className="w-full max-w-lg border-b bg-transparent px-0 py-3 font-serif text-xl outline-none placeholder:text-[var(--faint)]"
        />
      </label>

      {/* Filtros por domínio */}
      <div className="mb-10 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveDomain("todos")}
          className={`rounded-full border px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.1em] transition ${
            activeDomain === "todos"
              ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-bg)]"
              : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          }`}
        >
          Todos
        </button>
        {domains.map((domain) => (
          <button
            key={domain.slug}
            type="button"
            onClick={() => setActiveDomain(domain.slug)}
            className={`rounded-full border px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.1em] transition ${
              activeDomain === domain.slug
                ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-bg)]"
                : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            }`}
          >
            {domain.name}
          </button>
        ))}
      </div>

      {/* Grid de cards */}
      {filtered.length === 0 ? (
        <p className="py-16 text-center font-serif text-lg italic text-[var(--secondary)]">
          Nenhuma ideia encontrada.
        </p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((idea) => (
            <div key={idea.slug} className="card-editorial flex flex-col p-6">
              <span className="badge-domain">{idea.domainName}</span>
              <h2 className="mt-3 font-serif text-2xl leading-tight text-[var(--primary)]">
                {idea.name}
              </h2>
              {idea.question && (
                <p className="mt-2 line-clamp-3 font-serif text-sm italic leading-6 text-[var(--secondary)]">
                  {idea.question}
                </p>
              )}
              <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                <div className="flex flex-wrap gap-2">
                  <span className="stat-pill">{idea.thinkers.length} pensadores</span>
                  <span className="stat-pill">{idea.readingList.length} obras</span>
                </div>
                <Link
                  href={`/ideias/${idea.slug}`}
                  className="shrink-0 text-xs text-[var(--color-accent)] transition-opacity hover:opacity-70"
                >
                  Ver fio →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
